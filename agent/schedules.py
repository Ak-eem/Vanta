"""Things VANTA should do later or on repeat. Scheduled runs are read-only (plan mode): they look, think and report, they never change files."""
from __future__ import annotations

import json
import re
import time
import uuid
from datetime import datetime, timedelta
from pathlib import Path
from typing import Callable, Optional

FILE = Path.home() / ".vanta" / "schedules.json"
MAX_JOBS = 20
DAYS = {"mon": 0, "tue": 1, "wed": 2, "thu": 3, "fri": 4, "sat": 5, "sun": 6}


def parse_when(text: str, now: Optional[datetime] = None) -> dict:
    """'in 2h', 'every 30m', 'daily 08:00', 'weekdays 09:30', 'mon 07:00'. Raises ValueError with a plain message."""
    now = now or datetime.now()
    t = " ".join(text.lower().split())
    m = re.fullmatch(r"in (\d+)\s*(m|min|h|hr|hour|hours|minutes)s?", t)
    if m:
        secs = int(m.group(1)) * (60 if m.group(2).startswith("m") else 3600)
        return {"kind": "once", "next": (now + timedelta(seconds=secs)).timestamp()}
    m = re.fullmatch(r"every (\d+)\s*(m|min|minutes?|h|hr|hours?)", t)
    if m:
        secs = int(m.group(1)) * (60 if m.group(2).startswith("m") else 3600)
        if secs < 300:
            raise ValueError("Repeats can't be more often than every 5 minutes.")
        return {"kind": "every", "secs": secs, "next": now.timestamp() + secs}
    m = re.fullmatch(r"(daily|weekdays|mon|tue|wed|thu|fri|sat|sun)\s+(\d{1,2}):(\d{2})", t)
    if m:
        h, mi = int(m.group(2)), int(m.group(3))
        if h > 23 or mi > 59:
            raise ValueError("That time isn't valid.")
        days = list(range(7)) if m.group(1) == "daily" else list(range(5)) if m.group(1) == "weekdays" else [DAYS[m.group(1)]]
        job = {"kind": "clock", "h": h, "m": mi, "days": days}
        job["next"] = _next_clock(job, now)
        return job
    raise ValueError("Say it like: 'in 2h', 'every 30m', 'daily 08:00', 'weekdays 09:30' or 'mon 07:00'.")


def _next_clock(job: dict, now: datetime) -> float:
    for add in range(0, 8):
        d = (now + timedelta(days=add)).replace(hour=job["h"], minute=job["m"], second=0, microsecond=0)
        if d > now and d.weekday() in job["days"]:
            return d.timestamp()
    return (now + timedelta(days=1)).timestamp()


class Schedules:
    def __init__(self, path: Path = FILE, clock: Callable[[], float] = time.time) -> None:
        self.path, self.clock = path, clock

    def _load(self) -> list[dict]:
        try:
            return json.loads(self.path.read_text(encoding="utf-8"))
        except Exception:
            return []

    def _save(self, jobs: list[dict]) -> None:
        self.path.parent.mkdir(parents=True, exist_ok=True)
        self.path.write_text(json.dumps(jobs, indent=1), encoding="utf-8")

    def add(self, when: str, goal: str, folder: str = "") -> dict:
        jobs = self._load()
        if len(jobs) >= MAX_JOBS:
            raise ValueError(f"You already have {MAX_JOBS} scheduled tasks. Delete one first.")
        if not goal.strip():
            raise ValueError("What should I do? The task is empty.")
        spec = parse_when(when, datetime.fromtimestamp(self.clock()))
        job = {"id": uuid.uuid4().hex[:8], "when": when, "goal": goal.strip()[:500], "folder": folder, **spec}
        jobs.append(job)
        self._save(jobs)
        return job

    def list(self) -> list[dict]:
        return self._load()

    def delete(self, jid: str) -> bool:
        jobs = self._load()
        keep = [j for j in jobs if j["id"] != jid]
        self._save(keep)
        return len(keep) != len(jobs)

    def due(self) -> list[dict]:
        """Jobs that should run now. One-off jobs are removed; repeating ones move to their next time."""
        now, out, keep = self.clock(), [], []
        for j in self._load():
            if j["next"] > now:
                keep.append(j)
                continue
            out.append(dict(j))
            if j["kind"] == "once":
                continue
            j["next"] = now + j["secs"] if j["kind"] == "every" else _next_clock(j, datetime.fromtimestamp(now))
            keep.append(j)
        if out:
            self._save(keep)
        return out
