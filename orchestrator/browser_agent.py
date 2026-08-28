"""
browser_agent.py
Playwright-based automation for AI chat interfaces.

Features:
- Persistent login sessions (saved to ~/.vanta/sessions/)
- Rate-limit detection + automatic failover to next model
- Context handoff: the next model picks up exactly where the first stopped
- Headless=False so users can log in manually on first run
"""

import asyncio, time
from pathlib import Path
from typing import Callable, Optional

try:
    from playwright.async_api import async_playwright, Page, Browser, BrowserContext
    PLAYWRIGHT_OK = True
except ImportError:
    PLAYWRIGHT_OK = False

try:
    from playwright_stealth import stealth_async
    STEALTH_OK = True
except ImportError:
    STEALTH_OK = False
    print("⚠️  playwright-stealth not installed — login automation may get "
          "blocked more often. pip install playwright-stealth to help with this.")

from .model_router import get_model_info, is_rate_limited

SESSION_DIR = Path.home() / ".vanta" / "sessions"
SESSION_DIR.mkdir(parents=True, exist_ok=True)

RESPONSE_POLL_INTERVAL = 0.8  # seconds between checks
RESPONSE_TIMEOUT       = 120  # max seconds to wait for response
TYPING_DELAY           = 40   # ms between keystrokes (humanlike)


class BrowserAgent:
    """
    Manages browser pages for each AI model.
    Handles login, prompt submission, response extraction, and rate-limit failover.
    """

    def __init__(self):
        if not PLAYWRIGHT_OK:
            raise ImportError("playwright not installed. Run: pip install playwright && playwright install chromium")
        self._playwright = None
        self._browser:  Optional[Browser]  = None
        self._contexts: dict[str, BrowserContext] = {}  # model_key → context
        self._pages:    dict[str, Page]            = {}  # model_key → page

    # ── Lifecycle ─────────────────────────────────────────────────────────────
    async def start(self):
        """Launch the browser (headed so user can log in)."""
        self._playwright = await async_playwright().start()
        self._browser = await self._playwright.chromium.launch(
            headless=False,
            args=["--window-size=1280,900"],
        )
        print("[BrowserAgent] Browser launched.")

    async def stop(self):
        if self._browser:
            await self._browser.close()
        if self._playwright:
            await self._playwright.stop()

    # ── Session management ────────────────────────────────────────────────────
    def _session_path(self, model_key: str) -> Path:
        return SESSION_DIR / f"{model_key}.json"

    async def _load_context(self, model_key: str) -> BrowserContext:
        """Load saved session or create a fresh context."""
        sp = self._session_path(model_key)
        if sp.exists():
            try:
                ctx = await self._browser.new_context(storage_state=str(sp))
                print(f"[BrowserAgent] Loaded saved session for {model_key}")
                return ctx
            except Exception:
                pass
        return await self._browser.new_context()

    async def _save_context(self, model_key: str, ctx: BrowserContext):
        await ctx.storage_state(path=str(self._session_path(model_key)))
        print(f"[BrowserAgent] Session saved for {model_key}")

    async def _get_page(self, model_key: str) -> Page:
        """Return existing page or open a new one for the model."""
        if model_key in self._pages:
            page = self._pages[model_key]
            if not page.is_closed():
                return page

        info = get_model_info(model_key)
        ctx  = await self._load_context(model_key)
        self._contexts[model_key] = ctx
        page = await ctx.new_page()
        if STEALTH_OK:
            await stealth_async(page)
        await page.goto(info["url"], wait_until="networkidle", timeout=30_000)
        self._pages[model_key] = page

        # First-time login check
        await self._ensure_logged_in(page, model_key, info)
        await self._save_context(model_key, ctx)
        return page

    async def _ensure_logged_in(self, page: Page, model_key: str, info: dict):
        """
        If the page looks like a login screen, pause and wait for the user
        to log in manually, then save the session.
        """
        login_signals = ["sign in", "log in", "create account", "continue with google"]
        content = (await page.content()).lower()
        if any(s in content for s in login_signals):
            print(f"\n[BrowserAgent] ⚠  {info['name']} needs login.")
            print(f"  Please log in at: {info['url']}")
            print("  Press ENTER here once you are logged in...")
            await asyncio.get_event_loop().run_in_executor(None, input)
            await self._save_context(model_key, self._contexts[model_key])

    # ── Prompt submission ─────────────────────────────────────────────────────
    async def _type_message(self, page: Page, model_key: str, message: str):
        info  = get_model_info(model_key)
        await page.wait_for_selector(info["input_sel"], timeout=15_000)
        el    = await page.query_selector(info["input_sel"])
        await el.click()
        # Clear existing content
        await page.keyboard.press("Control+A")
        await page.keyboard.press("Delete")
        await el.type(message, delay=TYPING_DELAY)

    async def _click_send(self, page: Page, model_key: str):
        info = get_model_info(model_key)
        try:
            btn = await page.wait_for_selector(info["send_sel"], timeout=8_000)
            await btn.click()
        except Exception:
            await page.keyboard.press("Enter")

    # ── Response extraction ───────────────────────────────────────────────────
    async def _wait_for_response(self, page: Page, model_key: str) -> str:
        """
        Poll until the model's response stabilises (stops changing).
        Returns the final text of the last assistant message.
        """
        info     = get_model_info(model_key)
        sel      = info["response_sel"]
        deadline = time.time() + RESPONSE_TIMEOUT
        last_txt = ""
        stable_count = 0

        while time.time() < deadline:
            await asyncio.sleep(RESPONSE_POLL_INTERVAL)
            try:
                elements = await page.query_selector_all(sel)
                if not elements:
                    continue
                last_el  = elements[-1]
                txt      = (await last_el.inner_text()).strip()

                # Check for rate limit in the page
                page_txt = await page.inner_text("body")
                if is_rate_limited(page_txt, model_key):
                    raise RateLimitError(f"{model_key} is rate limited")

                if txt == last_txt and txt:
                    stable_count += 1
                    if stable_count >= 3:   # stable for 2.4 seconds
                        return txt
                else:
                    stable_count = 0
                    last_txt     = txt

            except RateLimitError:
                raise
            except Exception as e:
                print(f"[BrowserAgent] Poll error ({e})")

        return last_txt or "[No response received — timeout]"

    # ── Public API ────────────────────────────────────────────────────────────
    async def send(self, model_key: str, prompt: str,
                   on_progress: Optional[Callable] = None) -> str:
        """
        Send a prompt to a model and return its response.
        Raises RateLimitError if rate limited.
        """
        page = await self._get_page(model_key)
        info = get_model_info(model_key)

        if on_progress:
            on_progress(f"Sending to {info['name']}…", model_key, "sending")

        await self._type_message(page, model_key, prompt)
        await self._click_send(page, model_key)

        if on_progress:
            on_progress(f"Waiting for {info['name']}…", model_key, "waiting")

        response = await self._wait_for_response(page, model_key)

        if on_progress:
            on_progress(f"{info['name']} responded.", model_key, "done")

        return response

    async def send_with_failover(
        self,
        model_priority: list[str],
        prompt: str,
        context_so_far: str = "",
        on_progress: Optional[Callable] = None,
    ) -> tuple[str, str]:
        """
        Try models in priority order.
        On rate limit, hand off context to the next model.
        Returns (response_text, model_that_answered).
        """
        for i, model_key in enumerate(model_priority):
            info = get_model_info(model_key)

            # Build handoff prompt if we're continuing from a previous model
            if context_so_far and i > 0:
                prev_name = get_model_info(model_priority[i-1])["name"]
                full_prompt = (
                    f"You are continuing a task started by {prev_name}, "
                    f"which hit its rate limit.\n\n"
                    f"ORIGINAL REQUEST:\n{prompt}\n\n"
                    f"COMPLETED SO FAR:\n{context_so_far}\n\n"
                    f"Continue from where it stopped and complete the task."
                )
            else:
                full_prompt = prompt

            try:
                response = await self.send(model_key, full_prompt, on_progress)
                return response, info["name"]

            except RateLimitError:
                msg = f"{info['name']} rate limited — switching to next model…"
                print(f"[BrowserAgent] {msg}")
                if on_progress:
                    on_progress(msg, model_key, "rate_limited")
                context_so_far = context_so_far + "\n" + (await self._get_partial(model_key))
                continue

            except Exception as e:
                print(f"[BrowserAgent] Error with {model_key}: {e}")
                if on_progress:
                    on_progress(f"Error with {info['name']}: {e}", model_key, "error")
                continue

        return "[All models unavailable or rate limited]", "none"

    async def _get_partial(self, model_key: str) -> str:
        """Extract whatever partial response was generated before the rate limit."""
        try:
            page = self._pages.get(model_key)
            if not page or page.is_closed():
                return ""
            info     = get_model_info(model_key)
            elements = await page.query_selector_all(info["response_sel"])
            if elements:
                return (await elements[-1].inner_text()).strip()
        except Exception:
            pass
        return ""

    async def open_new_chat(self, model_key: str):
        """Navigate to a fresh conversation."""
        info = get_model_info(model_key)
        page = self._pages.get(model_key)
        if page and not page.is_closed():
            await page.goto(info["url"], wait_until="networkidle", timeout=20_000)


class RateLimitError(Exception):
    pass


# ── Synchronous wrapper ───────────────────────────────────────────────────────
class BrowserAgentSync:
    """Thread-safe sync wrapper for use from Flask/SocketIO handlers."""

    def __init__(self):
        self._agent  = None
        self._loop   = None
        self._thread = None
        self._ready  = False
        self._error: Optional[BaseException] = None

    def _run_loop(self):
        try:
            self._loop = asyncio.new_event_loop()
            asyncio.set_event_loop(self._loop)
            self._agent = BrowserAgent()
            self._loop.run_until_complete(self._agent.start())
            self._ready = True
            self._loop.run_forever()
        except Exception as e:
            # Without this, a launch failure (Playwright/Chromium missing,
            # etc.) leaves _ready False forever with nothing left alive to
            # ever set it — start() below would otherwise spin forever.
            self._error = e

    def start(self, timeout: float = 30.0):
        import threading
        self._thread = threading.Thread(target=self._run_loop, daemon=True)
        self._thread.start()
        deadline = time.time() + timeout
        while not self._ready and self._thread.is_alive():
            if time.time() > deadline:
                raise RuntimeError(f"BrowserAgent startup timed out after {timeout}s")
            time.sleep(0.1)
        if not self._ready:
            raise RuntimeError(f"BrowserAgent failed to start: {self._error}")

    def stop(self):
        if self._loop:
            self._loop.call_soon_threadsafe(self._loop.stop)

    def send_with_failover(self, model_priority, prompt, context="", on_progress=None):
        if not self._loop or not self._agent:
            raise RuntimeError("BrowserAgentSync not started")
        future = asyncio.run_coroutine_threadsafe(
            self._agent.send_with_failover(model_priority, prompt, context, on_progress),
            self._loop,
        )
        return future.result(timeout=RESPONSE_TIMEOUT + 30)
