"""Behaviour watch for ransomware. Catches the thing file scanning can miss: a program that has already started encrypting.

Signals (each is cheap and none is enough alone):
  canary  - a decoy file VANTA planted in your folders was changed, renamed or deleted (you never touch these)
  burst   - many files changed across many folders within seconds
  rename  - lots of files suddenly renamed to the same new ending (.locked, .encrypted, random)
  notes   - the same 'how to get your files back' note appearing in many folders
Two different signals trigger the emergency stop, which kills the program writing the most data (and what it started) with
no waiting. If VANTA can't tell which program it is, it does not guess: it alerts you instead."""
from __future__ import annotations

import os
import re
import time
from collections import Counter, deque
from pathlib import Path
from typing import Callable, Optional

CANARY_NAMES = ["!_vanta_do_not_touch.docx", "!_vanta_do_not_touch.txt", "!_vanta_do_not_touch.xlsx"]
CANARY_BODY = b"VANTA decoy file. Safe to ignore. If this changes unexpectedly, VANTA treats it as a sign of ransomware.\n" * 8
KNOWN_BAD_EXT = {".locked", ".encrypted", ".crypt", ".crypted", ".enc", ".lockbit", ".wncry", ".wnry", ".ryk", ".conti", ".akira", ".blackcat", ".hive", ".royal", ".cerber", ".zepto", ".locky"}
NOTE_RX = re.compile(r"(readme|how[_ -]?to|restore|decrypt|recover|ransom|instructions)[^/\\]*\.(txt|html|hta)$", re.I)
SAFE_BULK = re.compile(r"[\\/](node_modules|\.git|appdata|site-packages|__pycache__|\.cache|venv|\.venv|build|dist)[\\/]", re.I)


def plant_canaries(folders: list[Path]) -> list[Path]:
    out = []
    for f in folders:
        for n in CANARY_NAMES:
            p = Path(f) / n
            try:
                if not p.exists():
                    Path(f).mkdir(parents=True, exist_ok=True)
                    p.write_bytes(CANARY_BODY)
                out.append(p)
            except OSError:
                pass
    return out


class WriterTracker:
    """Who is writing the most data right now? Samples every process's write counter; no special access needed."""
    def __init__(self, sampler: Optional[Callable[[], dict]] = None, clock: Callable[[], float] = time.time) -> None:
        self.sampler = sampler or self._psutil_sample
        self.clock, self.hist = clock, deque(maxlen=6)

    @staticmethod
    def _psutil_sample() -> dict:
        import psutil
        out = {}
        for p in psutil.process_iter(["pid", "name", "exe", "create_time"]):
            try:
                io = p.io_counters()
                out[p.info["pid"]] = {"pid": p.info["pid"], "name": p.info["name"] or "", "exe": p.info["exe"] or "", "created": p.info["create_time"], "w": max(io.write_bytes, getattr(io, "write_chars", 0))}
            except Exception:
                continue
        return out

    def sample(self) -> None:
        self.hist.append((self.clock(), self.sampler()))

    def top_writers(self, window: float = 20.0, min_bytes: int = 256 * 1024) -> list[dict]:
        if len(self.hist) < 2:
            return []
        t1, new = self.hist[-1]
        old = next(((t, s) for t, s in self.hist if t1 - t <= window), self.hist[0])[1]
        rows = []
        for pid, now in new.items():
            before = old.get(pid)
            delta = now["w"] - (before["w"] if before else 0)
            if delta >= min_bytes:
                rows.append({**now, "delta": delta})
        return sorted(rows, key=lambda r: -r["delta"])


class RansomwareWatch:
    def __init__(self, canaries: list[Path], tracker: WriterTracker, respond: Callable[[list[dict], dict], None],
                 alert_only: Callable[[dict], None], window: float = 10.0, burst_files: int = 40, burst_dirs: int = 3,
                 clock: Callable[[], float] = time.time, cooldown: float = 120.0, retry_delay: float = 0.6) -> None:
        self.retry_delay = retry_delay
        self.canaries = {str(Path(c)) for c in canaries}
        self.tracker, self.respond, self.alert_only = tracker, respond, alert_only
        self.window, self.burst_files, self.burst_dirs, self.clock, self.cooldown = window, burst_files, burst_dirs, clock, cooldown
        self.events: deque = deque()          # (ts, kind, path, dest)
        self.canary_hit: Optional[float] = None
        self.last_fire = -1e9
        self.enabled = True

    def on_event(self, kind: str, path: str, dest: str = "") -> None:
        now = self.clock()
        if path in self.canaries or (dest and path in self.canaries):
            self.canary_hit = now
        if not SAFE_BULK.search(path):
            self.events.append((now, kind, path, dest))
        while self.events and now - self.events[0][0] > self.window:
            self.events.popleft()
        self.evaluate(now)

    def signals(self, now: float) -> dict:
        ev = [e for e in self.events if now - e[0] <= self.window]
        files = {e[2] for e in ev if e[1] in ("modified", "created", "moved", "deleted")}
        dirs = {os.path.dirname(f) for f in files}
        renamed = [Path(e[3]) for e in ev if e[1] == "moved" and e[3]]
        new_ext = Counter(p.suffix.lower() for p in renamed if p.suffix)
        top_ext, top_n = (new_ext.most_common(1) or [("", 0)])[0]
        ext_hit = top_n >= 10 or sum(n for x, n in new_ext.items() if x in KNOWN_BAD_EXT) >= 5
        notes = {os.path.dirname(e[2]) for e in ev if e[1] == "created" and NOTE_RX.search(e[2])}
        return {"canary": self.canary_hit is not None and now - self.canary_hit <= 60,
                "burst": len(files) >= self.burst_files and len(dirs) >= self.burst_dirs,
                "rename": ext_hit, "notes": len(notes) >= 3, "files": len(files), "dirs": len(dirs), "ext": top_ext}

    def evaluate(self, now: float) -> bool:
        if not self.enabled or now - self.last_fire < self.cooldown:
            return False
        sig = self.signals(now)
        strong = [k for k in ("canary", "burst", "rename", "notes") if sig[k]]
        if len(strong) < 2:
            return False
        self.last_fire = now
        info = {**sig, "why": strong}
        if not self._act(info, final=self.retry_delay <= 0):
            # Disk counters lag a moment behind the writing: look once more before giving up on finding the culprit.
            import threading
            threading.Timer(self.retry_delay, self._act, args=(info, True)).start()
        return True

    def _act(self, info: dict, final: bool) -> bool:
        self.tracker.sample()
        writers = self.tracker.top_writers()
        if writers:
            top = writers[0]["delta"]
            self.respond([w for w in writers if w["delta"] >= 0.5 * top][:3], info)
            return True
        if final:
            self.alert_only(info)
            return True
        return False
