"""Autopilot: with your permission VANTA acts on its own, but never silently and never without a way to say stop.
Every automatic action waits out a short veto window first (you can press Stop), is rate-limited, skips programs you
trust, uses the same safety checks as manual approval, and is logged as 'VANTA (auto)'."""
from __future__ import annotations

import json
import threading
import time
from pathlib import Path
from typing import Callable, Optional

from .actions import Guardian, Refused

SETTINGS = Path.home() / ".vanta" / "guardian.json"
DEFAULTS = {"mode": "ask", "veto_seconds": 30, "max_per_hour": 3, "trusted": [], "emergency": True}


class Settings:
    def __init__(self, path: Path = SETTINGS) -> None:
        self.path = path
        try:
            self.data = {**DEFAULTS, **json.loads(path.read_text())}
        except Exception:
            self.data = dict(DEFAULTS)

    def save(self) -> None:
        self.path.parent.mkdir(parents=True, exist_ok=True)
        self.path.write_text(json.dumps(self.data))

    def set_mode(self, mode: str) -> None:
        self.data["mode"] = "auto" if mode == "auto" else "ask"
        self.save()

    def set_emergency(self, on: bool) -> None:
        self.data["emergency"] = bool(on)
        self.save()

    def trust(self, key: str) -> None:
        key = key.strip().lower()
        if key and key not in self.data["trusted"]:
            self.data["trusted"] = [*self.data["trusted"], key][-200:]
            self.save()

    def is_trusted(self, *keys: str) -> bool:
        t = set(self.data["trusted"])
        return any(k and k.strip().lower() in t for k in keys)


class Autopilot:
    def __init__(self, guardian: Guardian, settings: Settings, notify: Callable[[str, dict], None],
                 clock: Callable[[], float] = time.time, timer=threading.Timer) -> None:
        self.g, self.s, self.notify, self.clock, self._timer = guardian, settings, notify, clock, timer
        self._done: list[float] = []
        self._timers: dict[str, object] = {}

    def active(self) -> bool:
        return self.s.data["mode"] == "auto"

    def _budget_left(self) -> bool:
        self._done = [t for t in self._done if self.clock() - t < 3600]
        return len(self._done) < int(self.s.data["max_per_hour"])

    def schedule(self, props: list[dict]) -> int:
        """Start the veto countdown for each proposal. Returns seconds until VANTA acts (0 if it won't)."""
        if not self.active():
            return 0
        secs = int(self.s.data["veto_seconds"])
        for p in props:
            t = self._timer(secs, self._fire, args=(p["id"],))
            t.daemon = True
            self._timers[p["id"]] = t
            t.start()
        return secs if props else 0

    def stop(self, ids: list[str]) -> None:
        for i in ids:
            t = self._timers.pop(i, None)
            if t:
                t.cancel()
            self.g.deny(i)

    def _fire(self, pid: str) -> None:
        self._timers.pop(pid, None)
        p = self.g.pending.get(pid)
        if not p:
            return                                   # you already handled it
        if not self.active():
            self.notify("held", {"proposal": p, "why": "Autopilot was switched off, so I left it for you."})
            return
        if not self._budget_left():
            self.notify("held", {"proposal": p, "why": "I've already acted several times this hour, so I'm leaving this one for you."})
            return
        try:
            res = self.g.approve(pid, who="VANTA (auto)")
            self._done.append(self.clock())
            self.notify("done", {"proposal": p, "result": res})
        except Refused as exc:
            self.notify("failed", {"proposal": p, "why": str(exc)})
