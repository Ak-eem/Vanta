"""Route lookup for Vanta: find two places, ask a free routing service, return distance, time and the line.

Uses OpenStreetMap-based services that need no key: Nominatim (search a place), Open-Meteo geocoding
(fallback) and OSRM (the route). Everything that touches the network goes through one fetch function,
so tests run offline. Public OSRM servers are for light personal use; point VANTA_OSRM_URL at your own
server if you ever need more.
"""
from __future__ import annotations

import json
import os
import re
import threading
import time
import urllib.parse as _up
import urllib.request as _ur

_UA = os.environ.get("VANTA_HTTP_UA", "Vanta/1.0 (personal assistant)")
NOMINATIM_URL = "https://nominatim.openstreetmap.org/search"
OPEN_METEO_URL = "https://geocoding-api.open-meteo.com/v1/search"
LABELS = {"driving": "by car", "foot": "on foot", "bike": "by bike"}


def _bases() -> dict:
    # The free FOSSGIS servers take "driving" in the URL path whatever the vehicle; the base picks the vehicle.
    return {
        "driving": os.environ.get("VANTA_OSRM_URL", "https://router.project-osrm.org"),
        "foot": os.environ.get("VANTA_OSRM_FOOT_URL", "https://routing.openstreetmap.de/routed-foot"),
        "bike": os.environ.get("VANTA_OSRM_BIKE_URL", "https://routing.openstreetmap.de/routed-bike"),
    }


def fetch_json(url: str, timeout: float = 6.0):
    req = _ur.Request(url, headers={"User-Agent": _UA, "Accept": "application/json"})
    with _ur.urlopen(req, timeout=timeout) as resp:
        return json.loads(resp.read().decode("utf-8"))


# ── Understanding the request ────────────────────────────────────────────
_TAIL = re.compile(
    r"\s*(?:,?\s*(?:please|right now|now|today|tonight|asap)"
    r"|\s+(?:by|via|using|with)\s+(?:car|foot|bike|bicycle|road|walking|driving)"
    r"|\s+on\s+foot|[?.!]+)\s*$", re.I)
_PATTERNS = [
    re.compile(r"\b(?:route|routes|directions?|navigate|navigation)\s+(?:me\s+)?(?:from\s+(?P<o>.+?)\s+)?to\s+(?P<d>.+)$", re.I),
    re.compile(r"\b(?:take|drive|walk|bring|get)\s+me\s+(?:from\s+(?P<o>.+?)\s+)?to\s+(?P<d>.+)$", re.I),
    re.compile(r"\bhow\s+far\s+(?:is\s+(?:it\s+)?(?:to\s+)?|to\s+)(?P<d>.+)$", re.I),
    re.compile(r"\bhow\s+long\s+(?:(?:does|would|will)\s+it\s+take\s+)?to\s+(?:get\s+to|reach|drive\s+to|walk\s+to|travel\s+to|go\s+to)\s+(?P<d>.+)$", re.I),
]
_FROM_TO = re.compile(r"^from\s+(?P<o>.+?)\s+to\s+(?P<d>.+)$", re.I)
_FROM_TAIL = re.compile(r"^(?P<d>.+?)\s+from\s+(?P<o>.+)$", re.I)


def _clean(s: str | None) -> str:
    s = (s or "").strip()
    prev = None
    while prev != s:
        prev = s
        s = _TAIL.sub("", s).strip(" ,")
    return s if 2 <= len(s) <= 80 and "\n" not in s else ""


def _mode(msg: str) -> str:
    t = msg.lower()
    if re.search(r"\b(walk|walking|on foot|by foot)\b", t):
        return "foot"
    if re.search(r"\b(cycle|cycling|bike|biking|bicycle)\b", t):
        return "bike"
    return "driving"


def parse_route_request(msg: str):
    """Returns (origin_or_None, destination, mode) or None when this is not a route question."""
    text = (msg or "").strip()
    if not text or len(text) > 300:
        return None
    for pat in _PATTERNS:
        m = pat.search(text)
        if not m:
            continue
        o, d = m.groupdict().get("o"), m.group("d")
        ft = _FROM_TO.match(d)
        if ft:
            o, d = ft.group("o"), ft.group("d")
        else:
            tail = _FROM_TAIL.match(d)
            if tail:
                d, o = tail.group("d"), tail.group("o")
        dest = _clean(d)
        if dest:
            return (_clean(o) or None, dest, _mode(text))
    return None


def needs_route(msg: str) -> bool:
    return parse_route_request(msg) is not None


# ── Finding places ───────────────────────────────────────────────────────
_lock = threading.Lock()
_last_call = [0.0]
_cache: dict = {}
_LATLON = re.compile(r"^\s*(-?\d{1,2}(?:\.\d+)?)\s*,\s*(-?\d{1,3}(?:\.\d+)?)\s*$")


def _polite_wait() -> None:                      # Nominatim asks for at most one request a second
    with _lock:
        gap = 1.1 - (time.monotonic() - _last_call[0])
        if gap > 0:
            time.sleep(gap)
        _last_call[0] = time.monotonic()


def _short(name: str) -> str:
    return ", ".join(p.strip() for p in name.split(",")[:2])


def geocode(place: str, fetch=fetch_json, throttle: bool = True):
    place = (place or "").strip()
    if not place:
        return None
    m = _LATLON.match(place)
    if m:
        lat, lon = float(m.group(1)), float(m.group(2))
        if -90 <= lat <= 90 and -180 <= lon <= 180:
            return {"name": f"{lat:.4f}, {lon:.4f}", "lat": lat, "lon": lon}
        return None
    key = place.lower()
    if key in _cache:
        return _cache[key]
    hit = None
    try:
        if throttle:
            _polite_wait()
        rows = fetch(f"{NOMINATIM_URL}?" + _up.urlencode({"q": place, "format": "jsonv2", "limit": 1}))
        if rows:
            hit = {"name": _short(rows[0].get("display_name", place)), "lat": float(rows[0]["lat"]), "lon": float(rows[0]["lon"])}
    except Exception:
        hit = None
    if hit is None:
        try:
            data = fetch(f"{OPEN_METEO_URL}?" + _up.urlencode({"name": place, "count": 1, "format": "json"}))
            r = (data or {}).get("results") or []
            if r:
                name = ", ".join(x for x in (r[0].get("name"), r[0].get("country")) if x)
                hit = {"name": name or place, "lat": float(r[0]["latitude"]), "lon": float(r[0]["longitude"])}
        except Exception:
            hit = None
    if hit:
        if len(_cache) > 128:
            _cache.clear()
        _cache[key] = hit
    return hit


# ── The route itself ─────────────────────────────────────────────────────
def thin(points: list, limit: int = 200) -> list:
    if len(points) <= limit:
        return points
    step = len(points) / (limit - 1)
    out = [points[int(i * step)] for i in range(limit - 1)]
    out.append(points[-1])
    return out


def osrm_route(a: dict, b: dict, mode: str = "driving", fetch=fetch_json):
    base = _bases().get(mode) or _bases()["driving"]
    url = (f"{base.rstrip('/')}/route/v1/driving/{a['lon']},{a['lat']};{b['lon']},{b['lat']}"
           "?overview=simplified&geometries=geojson&steps=false")
    data = fetch(url)
    if not data or data.get("code") != "Ok" or not data.get("routes"):
        return None
    r = data["routes"][0]
    pts = [[round(lat, 5), round(lon, 5)] for lon, lat in r["geometry"]["coordinates"]]
    return {"km": r["distance"] / 1000.0, "minutes": r["duration"] / 60.0, "points": thin(pts)}


def fmt_minutes(minutes: float) -> str:
    m = max(1, round(minutes))
    return f"{m} min" if m < 60 else f"{m // 60} h {m % 60} min" if m % 60 else f"{m // 60} h"


def get_route(msg: str, default_origin: str = "", fetch=fetch_json, throttle: bool = True):
    """Returns (text for the model, card for the screen), or ("", None) when it can't be done."""
    parsed = parse_route_request(msg)
    if not parsed:
        return "", None
    origin_text, dest_text, mode = parsed
    assumed = not origin_text
    origin_text = origin_text or os.environ.get("VANTA_ORIGIN", "") or default_origin
    if not origin_text:
        return "", None
    try:
        a, b = geocode(origin_text, fetch, throttle), geocode(dest_text, fetch, throttle)
        if not a or not b:
            return "", None
        r = osrm_route(a, b, mode, fetch)
    except Exception as exc:
        print(f"⚠️  Route lookup failed: {exc}")
        return "", None
    if not r:
        return "", None
    km = round(r["km"], 1)
    card = {"from": a["name"], "to": b["name"], "mode": mode, "km": km, "min": round(r["minutes"]), "points": r["points"]}
    text = (f"Route {LABELS[mode]} from {a['name']} to {b['name']}: {km} km, about {fmt_minutes(r['minutes'])}. "
            "The time is an estimate without live traffic. Source: OpenStreetMap / OSRM.")
    if assumed:
        text += f" The start point was assumed to be {a['name']} because no starting place was given."
    return text, card
