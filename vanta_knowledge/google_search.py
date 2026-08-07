"""
google_search.py
Uses Playwright to search Google and return results as RAG context.
No API key needed — uses the real Google interface.
Results are cached in SQLite to avoid hammering Google.
"""

import asyncio, hashlib, json, sqlite3, time
from pathlib import Path
from typing import Optional
from urllib.parse import quote_plus

CACHE_DB   = Path.home() / ".vanta" / "google_cache.db"
CACHE_TTL  = 3600 * 6   # 6 hours
MAX_RESULTS = 5
CACHE_DB.parent.mkdir(parents=True, exist_ok=True)

# ── SQLite cache ───────────────────────────────────────────────────────────────
def _init_db():
    con = sqlite3.connect(str(CACHE_DB))
    con.execute("""
        CREATE TABLE IF NOT EXISTS cache (
            key      TEXT PRIMARY KEY,
            result   TEXT,
            ts       REAL
        )
    """)
    con.commit()
    return con

def _cache_get(key: str) -> Optional[str]:
    con = _init_db()
    row = con.execute("SELECT result, ts FROM cache WHERE key=?", (key,)).fetchone()
    con.close()
    if row and (time.time() - row[1]) < CACHE_TTL:
        return row[0]
    return None

def _cache_set(key: str, value: str):
    con = _init_db()
    con.execute("INSERT OR REPLACE INTO cache(key,result,ts) VALUES(?,?,?)",
                (key, value, time.time()))
    con.commit()
    con.close()

def _cache_key(query: str) -> str:
    return hashlib.md5(query.lower().strip().encode()).hexdigest()


# ── Playwright search ──────────────────────────────────────────────────────────
async def _search_async(query: str) -> list[dict]:
    """Search Google and return top results as dicts."""
    try:
        from playwright.async_api import async_playwright
    except ImportError:
        return []

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        ctx     = await browser.new_context(
            user_agent=(
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/124.0.0.0 Safari/537.36"
            ),
            viewport={"width": 1280, "height": 800},
        )
        page = await ctx.new_page()

        try:
            url = f"https://www.google.com/search?q={quote_plus(query)}&num={MAX_RESULTS}&hl=en"
            await page.goto(url, wait_until="domcontentloaded", timeout=20_000)

            # Accept cookies banner if present (EU)
            try:
                accept = await page.query_selector('button[id="L2AGLb"]')
                if accept:
                    await accept.click()
                    await page.wait_for_timeout(500)
            except Exception:
                pass

            # Extract organic results
            results = []
            cards   = await page.query_selector_all("div.g")
            for card in cards[:MAX_RESULTS]:
                try:
                    h3   = await card.query_selector("h3")
                    snip = await card.query_selector("div.VwiC3b, div[data-sncf]")
                    link = await card.query_selector("a")
                    if h3 and snip:
                        results.append({
                            "title":   (await h3.inner_text()).strip(),
                            "snippet": (await snip.inner_text()).strip()[:400],
                            "url":     await link.get_attribute("href") if link else "",
                        })
                except Exception:
                    continue

            return results

        except Exception as e:
            print(f"[Google] Search error: {e}")
            return []
        finally:
            await browser.close()


def _format_results(query: str, results: list[dict]) -> str:
    """Format results into LLM-friendly context."""
    if not results:
        return ""
    lines = [f"Web search results for: \"{query}\"\n"]
    for i, r in enumerate(results, 1):
        lines.append(f"{i}. {r['title']}")
        lines.append(f"   {r['snippet']}")
        if r.get("url"):
            lines.append(f"   Source: {r['url']}")
        lines.append("")
    return "\n".join(lines)


# ── Public API ─────────────────────────────────────────────────────────────────
def google_search_context(query: str, use_cache: bool = True) -> str:
    """
    Search Google for the query and return formatted context.
    Uses cache to avoid redundant searches.
    """
    key = _cache_key(query)
    if use_cache:
        cached = _cache_get(key)
        if cached:
            print(f"[Google] Cache hit: {query[:40]}")
            return cached

    print(f"[Google] Searching: {query[:60]}")
    results = asyncio.run(_search_async(query))
    context = _format_results(query, results)

    if context and use_cache:
        _cache_set(key, context)

    return context


def should_search_google(message: str, rag_result: str) -> bool:
    """
    Decide if Google search is worth doing for this message.
    Searches when: rag is weak, question is time-sensitive, or explicitly research-y.
    """
    research_signals = [
        "what is", "how does", "latest", "best", "current", "recent",
        "compare", "vs", "versus", "which is better", "recommend",
        "2024", "2025", "news", "update", "explain", "why",
    ]
    lower = message.lower()
    needs_research = any(s in lower for s in research_signals)
    rag_weak       = len(rag_result.strip()) < 100

    return needs_research or rag_weak
