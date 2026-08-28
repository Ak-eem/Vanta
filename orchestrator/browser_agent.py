"""
browser_agent.py
Playwright-based automation for AI chat interfaces.

Features:
- Persistent login sessions (saved to ~/.vanta/sessions/)
- Rate-limit detection + automatic failover to next model
- Context handoff: the next model picks up exactly where the first stopped
- Headless=False so users can log in manually on first run
"""

import asyncio
import json
import os
import stat
import tempfile
import time
from pathlib import Path
from typing import Callable, Optional
from urllib.parse import urlparse

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

# These are the exact HTTPS hosts configured in orchestrator/model_router.py.
# Keep this list explicit: model-selected URLs must never be able to choose an
# arbitrary destination while an authenticated browser context is active.
MODEL_HOST_ALLOWLIST = frozenset({
    "claude.ai",
    "chatgpt.com",
    "gemini.google.com",
    "chat.deepseek.com",
    "www.perplexity.ai",
})


def _ensure_secure_session_dir() -> bool:
    """Create the session directory safely and require mode 0700."""
    try:
        SESSION_DIR.mkdir(parents=True, exist_ok=True, mode=0o700)
        directory_stat = SESSION_DIR.stat()
    except OSError as exc:
        print(f"[BrowserAgent] Cannot access session directory safely: {exc}")
        return False

    if not stat.S_ISDIR(directory_stat.st_mode):
        print("[BrowserAgent] Session path is not a directory; skipping sessions.")
        return False

    mode = stat.S_IMODE(directory_stat.st_mode)
    if mode != 0o700:
        print(
            "[BrowserAgent] Insecure session directory permissions "
            f"({oct(mode)}; expected 0o700); skipping session access."
        )
        return False
    return True


def _secure_session_file(path: Path) -> bool:
    """Require a regular, non-symlink session file with mode 0600."""
    try:
        file_stat = path.lstat()
    except OSError as exc:
        print(f"[BrowserAgent] Cannot inspect session file {path.name!r}: {exc}")
        return False

    mode = stat.S_IMODE(file_stat.st_mode)
    if stat.S_ISLNK(file_stat.st_mode) or not stat.S_ISREG(file_stat.st_mode):
        print(
            f"[BrowserAgent] Insecure session file {path.name!r} "
            "(not a regular file); skipping load."
        )
        return False
    if mode != 0o600:
        print(
            f"[BrowserAgent] Insecure session file permissions for {path.name!r} "
            f"({oct(mode)}; expected 0o600); skipping load."
        )
        return False
    return True


def _safe_model_url(url: object, model_key: str) -> Optional[str]:
    """Return a model URL only when it is HTTPS and on the explicit allowlist."""
    reason = "invalid URL"
    try:
        parsed = urlparse(url) if isinstance(url, str) else None
        if parsed is None:
            raise ValueError("URL is not a string")
        host = parsed.hostname
        normalized_host = host.rstrip(".").lower() if host else ""
        port = parsed.port
    except (TypeError, ValueError) as exc:
        reason = str(exc)
    else:
        if parsed.scheme.lower() != "https":
            reason = "URL scheme is not HTTPS"
        elif normalized_host not in MODEL_HOST_ALLOWLIST:
            reason = "URL host is not allowlisted"
        elif parsed.username is not None or parsed.password is not None:
            reason = "URL contains credentials"
        elif port not in (None, 443):
            reason = "URL uses a non-HTTPS port"
        else:
            return url

    print(
        f"[BrowserAgent] Blocked model navigation for {model_key!r}: {reason}. "
        "Authenticated session state will not be used."
    )
    return None


RESPONSE_POLL_INTERVAL = 0.8  # seconds between checks
RESPONSE_TIMEOUT      = 120  # max seconds to wait for response
TYPING_DELAY          = 40   # ms between keystrokes (humanlike)


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
        self._pages:    dict[str, Page]             = {} # model_key → page

    # ── Lifecycle ────────────────────────────────────────────────────────────

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

    # ── Session management ───────────────────────────────────────────────────

    def _session_path(self, model_key: str) -> Path:
        return SESSION_DIR / f"{model_key}.json"

    async def _load_context(self, model_key: str) -> BrowserContext:
        """Load a saved session only when its directory and file are restricted."""
        sp = self._session_path(model_key)
        if sp.exists():
            if not _ensure_secure_session_dir() or not _secure_session_file(sp):
                return await self._browser.new_context()
            try:
                ctx = await self._browser.new_context(storage_state=str(sp))
                print(f"[BrowserAgent] Loaded saved session for {model_key}")
                return ctx
            except Exception as exc:
                print(f"[BrowserAgent] Could not load saved session for {model_key}: {exc}")
        elif not _ensure_secure_session_dir():
            return await self._browser.new_context()
        return await self._browser.new_context()

    async def _save_context(self, model_key: str, ctx: BrowserContext):
        """Atomically save a session using a temporary mode-0600 file."""
        if not _ensure_secure_session_dir():
            print(f"[BrowserAgent] Skipping session save for {model_key}: insecure session directory.")
            return

        target = self._session_path(model_key)
        temp_fd = -1
        temp_path: Optional[Path] = None
        try:
            temp_fd, temp_name = tempfile.mkstemp(
                prefix=f".{target.name}.", suffix=".tmp", dir=str(SESSION_DIR)
            )
            temp_path = Path(temp_name)
            os.fchmod(temp_fd, 0o600)
            state = await ctx.storage_state()
            with os.fdopen(temp_fd, "w", encoding="utf-8") as session_file:
                temp_fd = -1
                json.dump(state, session_file)
                session_file.flush()
                os.fsync(session_file.fileno())
            os.replace(temp_path, target)
            os.chmod(target, 0o600)
            print(f"[BrowserAgent] Session saved for {model_key}")
        except Exception as exc:
            if temp_fd != -1:
                os.close(temp_fd)
            if temp_path is not None:
                try:
                    temp_path.unlink()
                except FileNotFoundError:
                    pass
            print(f"[BrowserAgent] Could not safely save session for {model_key}: {exc}")

    async def _get_page(self, model_key: str) -> Page:
        """Return existing page or open a new one for the model."""
        if model_key in self._pages:
            page = self._pages[model_key]
            if not page.is_closed():
                return page

        info = get_model_info(model_key)
        model_url = _safe_model_url(info.get("url"), model_key)
        if model_url is None:
            raise ValueError(f"Blocked navigation for model {model_key!r}")

        ctx = await self._load_context(model_key)
        self._contexts[model_key] = ctx
        page = await ctx.new_page()
        if STEALTH_OK:
            await stealth_async(page)
        await page.goto(model_url, wait_until="networkidle", timeout=30_000)
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
            print(f"\n[BrowserAgent] 🔐  {info['name']} needs login.")
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

    # ── Response extraction ──────────────────────────────────────────────────

    async def _wait_for_response(self, page: Page, model_key: str) -> str:
        """
        Poll until the model's response stabilises (stops changing).
        Returns the final text of the last assistant message.
        """
        info      = get_model_info(model_key)
        sel       = info["response_sel"]
        deadline  = time.time() + RESPONSE_TIMEOUT
        last_txt  = ""
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
            info      = get_model_info(model_key)
            elements  = await page.query_selector_all(info["response_sel"])
            if elements:
                return (await elements[-1].inner_text()).strip()
        except Exception:
            pass
        return ""

    async def open_new_chat(self, model_key: str):
        """Navigate to a fresh conversation."""
        info = get_model_info(model_key)
        model_url = _safe_model_url(info.get("url"), model_key)
        if model_url is None:
            return
        page = self._pages.get(model_key)
        if page and not page.is_closed():
            await page.goto(model_url, wait_until="networkidle", timeout=20_000)


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

    def _run_loop(self):
        self._loop = asyncio.new_event_loop()
        asyncio.set_event_loop(self._loop)
        self._agent = BrowserAgent()
        self._loop.run_until_complete(self._agent.start())
        self._ready = True
        self._loop.run_forever()

    def start(self):
        import threading
        self._thread = threading.Thread(target=self._run_loop, daemon=True)
        self._thread.start()
        while not self._ready:
            time.sleep(0.1)

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
