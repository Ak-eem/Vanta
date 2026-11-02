"""Web search and page reading for research. Free, no keys. Providers are tried in order; a failing one is skipped.
Pages are fetched only if they are public https addresses (never your own network), with a size cap."""
from __future__ import annotations

import html as htmllib
import re
import urllib.parse
from typing import Callable, Optional

import requests

from agent.permissions import is_public_url

UA = {"User-Agent": "Mozilla/5.0 (compatible; VANTA-research/1.0)"}
MAX_PAGE = 400_000


def ddg_results(query: str, get=requests.get, n: int = 6) -> list[dict]:
    """DuckDuckGo's plain-HTML page. No account. Parsed tolerantly; returns [] if the layout changes."""
    r = get("https://html.duckduckgo.com/html/", params={"q": query}, headers=UA, timeout=12)
    out = []
    for m in re.finditer(r'<a[^>]+class="result__a"[^>]+href="([^"]+)"[^>]*>(.*?)</a>(?:.*?class="result__snippet"[^>]*>(.*?)</a>)?', r.text, re.S):
        url = htmllib.unescape(m.group(1))
        q = urllib.parse.urlparse(url).query
        if "uddg=" in q:
            url = urllib.parse.parse_qs(q).get("uddg", [url])[0]
        if url.startswith("//"):
            url = "https:" + url
        clean = lambda s: " ".join(htmllib.unescape(re.sub(r"<[^>]+>", "", s or "")).split())
        out.append({"title": clean(m.group(2))[:160], "url": url, "snippet": clean(m.group(3))[:300]})
        if len(out) >= n:
            break
    return out


def chain(*providers: Callable[[str], list[dict]]) -> Callable[[str], list[dict]]:
    def search(q: str) -> list[dict]:
        for p in providers:
            try:
                res = [r for r in p(q) if r.get("url", "").startswith("https://")]
                if res:
                    return res
            except Exception as exc:
                print(f"[research] search provider failed: {exc}")
        return []
    return search


def page_text(raw: str, limit: int = 6000) -> str:
    raw = re.sub(r"(?is)<(script|style|noscript|nav|footer|header|aside|form|svg)\b.*?</\1>", " ", raw[:MAX_PAGE])
    paras = [" ".join(htmllib.unescape(re.sub(r"<[^>]+>", " ", p)).split()) for p in re.split(r"(?i)</p>|</li>|</h[1-6]>|<br\s*/?>", raw)]
    return "\n".join(p for p in paras if len(p) > 40)[:limit]


def og_image(raw: str) -> str:
    m = re.search(r'<meta[^>]+property=["\']og:image["\'][^>]+content=["\']([^"\']+)', raw[:60000], re.I) or re.search(r'<meta[^>]+content=["\']([^"\']+)["\'][^>]+property=["\']og:image', raw[:60000], re.I)
    u = htmllib.unescape(m.group(1)) if m else ""
    return u if u.startswith("https://") and len(u) < 500 else ""


def fetch_page(url: str, get=requests.get, resolver=None) -> Optional[dict]:
    kw = {"resolver": resolver} if resolver else {}
    if not is_public_url(url, **kw):
        return None
    r = get(url, headers=UA, timeout=15, stream=False)
    if r.status_code >= 400 or "html" not in r.headers.get("content-type", "html"):
        return None
    t = re.search(r"(?is)<title[^>]*>(.*?)</title>", r.text[:50000])
    return {"url": url, "title": " ".join(htmllib.unescape(t.group(1)).split())[:160] if t else url, "text": page_text(r.text), "image": og_image(r.text)}
