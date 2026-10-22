"""Activity log: a short-lived timeline of what happened on this computer.

Raw events live for `retention_days` (default 7). Older days are squashed into
one short summary each, then the raw rows are deleted. Raw screenshots are never
stored here at all.
"""
from __future__ import annotations

import json
import sqlite3
import threading
import time
from collections import Counter
from pathlib import Path
from typing import Callable, Optional

from .privacy import PrivacyState

DB_PATH = Path.home() / ".vanta" / "activity.db"


class ActivityLog:
    def __init__(self, privacy: Optional[PrivacyState] = None, path: Path = DB_PATH) -> None:
        self.privacy = privacy or PrivacyState()
        self.path = path
        self._lock = threading.Lock()
        self._subs: list[Callable[[dict], None]] = []
        self._last: dict[tuple, float] = {}
        self.path.parent.mkdir(parents=True, exist_ok=True)
        with self._conn() as c:
            c.executescript("""
              CREATE TABLE IF NOT EXISTS events(
                id INTEGER PRIMARY KEY AUTOINCREMENT, ts REAL, source TEXT, kind TEXT,
                app TEXT, title TEXT, detail TEXT);
              CREATE INDEX IF NOT EXISTS ix_events_ts ON events(ts);
              CREATE TABLE IF NOT EXISTS audit(ts REAL, source TEXT, note TEXT);
              CREATE TABLE IF NOT EXISTS daily_summary(day TEXT PRIMARY KEY, text TEXT);
            """)

    def _conn(self) -> sqlite3.Connection:
        c = sqlite3.connect(self.path, timeout=5)
        c.execute("PRAGMA journal_mode=WAL")
        return c

    def subscribe(self, fn: Callable[[dict], None]) -> None:
        self._subs.append(fn)

    # ── writing ───────────────────────────────────────────────────────────
    def add(self, source: str, kind: str, app: str = "", title: str = "",
            detail: Optional[dict] = None, url: str = "", ts: Optional[float] = None) -> Optional[int]:
        """Record an event if privacy allows. Returns the row id, or None if dropped."""
        if not self.privacy.allows(source, app, title, url):
            return None
        now = ts if ts is not None else time.time()
        key = (source, kind, app, title)
        if now - self._last.get(key, 0) < 2.0:          # drop rapid duplicates
            return None
        self._last[key] = now
        row = {"ts": now, "source": source, "kind": kind, "app": app,
               "title": self.privacy.redact(title)[:200],
               "detail": json.loads(self.privacy.redact(json.dumps(detail or {}))) if detail else {}}
        with self._lock, self._conn() as c:
            cur = c.execute("INSERT INTO events(ts,source,kind,app,title,detail) VALUES(?,?,?,?,?,?)",
                            (now, source, kind, app, row["title"], json.dumps(row["detail"])))
            c.execute("INSERT INTO audit VALUES(?,?,?)", (now, source, f"{kind}: {app or '-'}"))
            rid = cur.lastrowid
        for fn in list(self._subs):
            try:
                fn(row)
            except Exception:
                pass
        return rid

    # ── reading ───────────────────────────────────────────────────────────
    def recent(self, minutes: float = 30, limit: int = 60, source: Optional[str] = None) -> list[dict]:
        q = "SELECT ts,source,kind,app,title,detail FROM events WHERE ts>=?"
        args: list = [time.time() - minutes * 60]
        if source:
            q += " AND source=?"; args.append(source)
        q += " ORDER BY ts DESC LIMIT ?"; args.append(limit)
        with self._conn() as c:
            rows = c.execute(q, args).fetchall()
        return [dict(ts=r[0], source=r[1], kind=r[2], app=r[3], title=r[4],
                     detail=json.loads(r[5] or "{}")) for r in reversed(rows)]

    def audit_trail(self, limit: int = 100) -> list[dict]:
        with self._conn() as c:
            rows = c.execute("SELECT ts,source,note FROM audit ORDER BY ts DESC LIMIT ?", (limit,)).fetchall()
        return [dict(ts=r[0], source=r[1], note=r[2]) for r in rows]

    def describe_recent(self, minutes: float = 15, limit: int = 20) -> str:
        """Human-readable timeline, safe to hand to a model."""
        ev = [e for e in self.recent(minutes, 200) if e["kind"] in ("focus", "page", "process_start", "alert", "idle", "active")]
        lines = []
        for e in ev[-limit:]:
            t = time.strftime("%H:%M", time.localtime(e["ts"]))
            what = {"focus": "using", "page": "viewing", "process_start": "started",
                    "alert": "ALERT", "idle": "went idle", "active": "came back"}[e["kind"]]
            lines.append(f"{t} {what} {e['app'] or ''} {('— ' + e['title']) if e['title'] else ''}".strip())
        return "\n".join(lines)

    # ── retention ─────────────────────────────────────────────────────────
    def compact(self, retention_days: Optional[int] = None, now: Optional[float] = None) -> int:
        """Squash raw events older than retention into daily summaries; delete raw rows."""
        keep = retention_days if retention_days is not None else self.privacy.cfg["retention_days"]
        cutoff = (now or time.time()) - keep * 86400
        with self._lock, self._conn() as c:
            rows = c.execute("SELECT ts,source,kind,app,title FROM events WHERE ts<? ORDER BY ts", (cutoff,)).fetchall()
            days: dict[str, list] = {}
            for r in rows:
                days.setdefault(time.strftime("%Y-%m-%d", time.localtime(r[0])), []).append(r)
            for day, evs in days.items():
                c.execute("INSERT OR REPLACE INTO daily_summary VALUES(?,?)", (day, self._summarize(evs)))
            c.execute("DELETE FROM events WHERE ts<?", (cutoff,))
            c.execute("DELETE FROM audit WHERE ts<?", (cutoff,))
        return len(rows)

    @staticmethod
    def _summarize(evs: list) -> str:
        focus = [e for e in evs if e[2] == "focus"]
        secs: Counter = Counter()
        for a, b in zip(focus, focus[1:]):
            secs[a[3] or "?"] += min(b[0] - a[0], 1800)
        top = ", ".join(f"{app} ({int(s // 60)}m)" for app, s in secs.most_common(5)) or "no focus data"
        alerts = sum(1 for e in evs if e[2] == "alert")
        return f"{len(evs)} events. Most used: {top}." + (f" {alerts} alert(s)." if alerts else "")

    def summaries(self, days: int = 7) -> list[tuple[str, str]]:
        with self._conn() as c:
            return c.execute("SELECT day,text FROM daily_summary ORDER BY day DESC LIMIT ?", (days,)).fetchall()
