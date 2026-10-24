"""Optional hash lookup on VirusTotal. Only the SHA-256 (a fingerprint) leaves the laptop; the file never does.
Needs a free key in VT_API_KEY; without it VANTA relies on its own checks."""
from __future__ import annotations

import os
import time
from typing import Callable, Optional

import requests


class VirusTotal:
    def __init__(self, key: Optional[str] = None, get: Callable = requests.get, clock: Callable[[], float] = time.time) -> None:
        self.key, self._get, self.clock = key or os.getenv("VT_API_KEY", ""), get, clock
        self._calls: list[float] = []

    @property
    def enabled(self) -> bool:
        return bool(self.key)

    def lookup(self, sha256: str) -> Optional[dict]:
        if not self.key:
            return None
        self._calls = [t for t in self._calls if self.clock() - t < 60]
        if len(self._calls) >= 4:                       # free tier: 4 lookups a minute
            return None
        self._calls.append(self.clock())
        try:
            r = self._get(f"https://www.virustotal.com/api/v3/files/{sha256}", headers={"x-apikey": self.key}, timeout=15)
            if r.status_code == 404:
                return None                                # nobody has uploaded it: unknown, not safe
            r.raise_for_status()
            s = r.json()["data"]["attributes"]["last_analysis_stats"]
            return {"malicious": int(s.get("malicious", 0)), "total": sum(int(v) for k, v in s.items() if k != "type-unsupported")}
        except Exception:
            return None
