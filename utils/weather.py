"""Weather from Open-Meteo: free, no account, no key. Current conditions, the next hours, the next days.
Returns None on any failure so the dashboard can say 'unavailable' instead of showing made-up numbers."""
from __future__ import annotations

import json
import time
import urllib.parse
import urllib.request
from datetime import datetime
from typing import Callable, Optional

GEO = "https://geocoding-api.open-meteo.com/v1/search?"
FORECAST = "https://api.open-meteo.com/v1/forecast?"

# WMO weather codes -> (words, icon family)
WMO = {0: ("Clear", "clear"), 1: ("Mostly clear", "clear"), 2: ("Partly cloudy", "cloud"), 3: ("Overcast", "cloud"), 45: ("Fog", "fog"), 48: ("Fog", "fog"),
       51: ("Light drizzle", "rain"), 53: ("Drizzle", "rain"), 55: ("Heavy drizzle", "rain"), 56: ("Freezing drizzle", "rain"), 57: ("Freezing drizzle", "rain"),
       61: ("Light rain", "rain"), 63: ("Rain", "rain"), 65: ("Heavy rain", "rain"), 66: ("Freezing rain", "rain"), 67: ("Freezing rain", "rain"),
       71: ("Light snow", "snow"), 73: ("Snow", "snow"), 75: ("Heavy snow", "snow"), 77: ("Snow grains", "snow"), 80: ("Showers", "rain"), 81: ("Showers", "rain"),
       82: ("Violent showers", "rain"), 85: ("Snow showers", "snow"), 86: ("Snow showers", "snow"), 95: ("Thunderstorm", "storm"), 96: ("Thunderstorm, hail", "storm"), 99: ("Thunderstorm, hail", "storm")}


def _get(url: str) -> dict:
    with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "VANTA"}), timeout=8) as r:
        return json.loads(r.read().decode())


def geocode(city: str, fetch: Callable[[str], dict] = _get) -> Optional[dict]:
    d = fetch(GEO + urllib.parse.urlencode({"name": city, "count": 1, "language": "en", "format": "json"}))
    r = (d.get("results") or [None])[0]
    return {"name": r["name"], "country": r.get("country", ""), "lat": r["latitude"], "lon": r["longitude"]} if r else None


def words(code) -> tuple[str, str]:
    return WMO.get(int(code), ("Unknown", "cloud")) if code is not None else ("Unknown", "cloud")


def _hour_label(iso: str) -> str:
    h = datetime.fromisoformat(iso).hour
    return f"{h % 12 or 12} {'AM' if h < 12 else 'PM'}"


def rain_hint(hours: list[dict]) -> str:
    """'Rain likely around 4 PM' from the next hours, or ''."""
    for h in hours:
        if (h.get("rain") or 0) >= 60:
            return f"Rain likely around {h['label']}."
    return ""


def parse(raw: dict, place: dict) -> dict:
    cur, hr, dy = raw["current"], raw.get("hourly") or {}, raw.get("daily") or {}
    desc, icon = words(cur.get("weather_code"))
    now_iso = cur.get("time", "")
    hours = []
    for i, t in enumerate(hr.get("time", [])):
        if t >= now_iso[:13] and len(hours) < 12:
            d, ic = words((hr.get("weather_code") or [None] * (i + 1))[i])
            hours.append({"label": _hour_label(t), "temp": round(hr["temperature_2m"][i]), "rain": (hr.get("precipitation_probability") or [0] * (i + 1))[i] or 0, "icon": ic})
    days = []
    for i, t in enumerate(dy.get("time", [])[:5]):
        d, ic = words(dy["weather_code"][i])
        days.append({"label": datetime.fromisoformat(t).strftime("%a"), "hi": round(dy["temperature_2m_max"][i]), "lo": round(dy["temperature_2m_min"][i]),
                     "rain": (dy.get("precipitation_probability_max") or [0] * (i + 1))[i] or 0, "icon": ic, "desc": d})
    return {"city": place["name"], "country": place.get("country", ""), "temp": round(cur["temperature_2m"]), "feels": round(cur.get("apparent_temperature", cur["temperature_2m"])),
            "humidity": round(cur.get("relative_humidity_2m", 0)), "wind": round(cur.get("wind_speed_10m", 0)), "desc": desc, "icon": icon, "night": cur.get("is_day") == 0,
            "hours": hours, "days": days, "hint": rain_hint(hours), "ts": time.time()}


def fetch_weather(city: str, fetch: Callable[[str], dict] = _get) -> Optional[dict]:
    try:
        place = geocode(city, fetch)
        if not place:
            return None
        q = urllib.parse.urlencode({"latitude": place["lat"], "longitude": place["lon"], "timezone": "auto", "forecast_days": 5,
                                    "current": "temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day",
                                    "hourly": "temperature_2m,precipitation_probability,weather_code", "daily": "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max"})
        return parse(fetch(FORECAST + q), place)
    except Exception as exc:
        print(f"[weather] {exc}")
        return None


class WeatherCache:
    """One lookup per city per 20 minutes, however many screens are open."""

    def __init__(self, fetch=fetch_weather, ttl: float = 1200, clock: Callable[[], float] = time.time) -> None:
        self.fetch, self.ttl, self.clock = fetch, ttl, clock
        self._c: dict[str, tuple[float, Optional[dict]]] = {}

    def get(self, city: str) -> Optional[dict]:
        k = city.strip().lower()
        hit = self._c.get(k)
        if hit and self.clock() - hit[0] < (self.ttl if hit[1] else 120):      # retry failures after 2 minutes, not 20
            return hit[1]
        data = self.fetch(city)
        self._c[k] = (self.clock(), data)
        return data
