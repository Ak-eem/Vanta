"""Append-only audit log. Each row stores a hash of the previous row, so editing or deleting history is detectable."""
from __future__ import annotations

import hashlib
import json
import sqlite3
import time
from pathlib import Path
from typing import Optional

DB_PATH = Path.home() / ".vanta" / "audit.db"


class AuditLog:
    def __init__(self, path: Path = DB_PATH) -> None:
        self.path = path
        path.parent.mkdir(parents=True, exist_ok=True)
        with self._c() as c:
            c.execute("CREATE TABLE IF NOT EXISTS audit(n INTEGER PRIMARY KEY AUTOINCREMENT, ts REAL, event TEXT, proposal TEXT, detail TEXT, prev TEXT, hash TEXT)")

    def _c(self) -> sqlite3.Connection:
        c = sqlite3.connect(self.path, timeout=5)
        c.row_factory = sqlite3.Row
        return c

    @staticmethod
    def _h(prev: str, ts: float, event: str, proposal: str, detail: str) -> str:
        return hashlib.sha256(f"{prev}|{ts!r}|{event}|{proposal}|{detail}".encode()).hexdigest()

    def add(self, event: str, proposal: str = "", **detail) -> None:
        d, ts = json.dumps(detail, sort_keys=True, default=str), time.time()
        with self._c() as c:
            row = c.execute("SELECT hash FROM audit ORDER BY n DESC LIMIT 1").fetchone()
            prev = row["hash"] if row else ""
            c.execute("INSERT INTO audit(ts,event,proposal,detail,prev,hash) VALUES(?,?,?,?,?,?)", (ts, event, proposal, d, prev, self._h(prev, ts, event, proposal, d)))

    def recent(self, limit: int = 50) -> list[dict]:
        with self._c() as c:
            return [{**dict(r), "detail": json.loads(r["detail"])} for r in c.execute("SELECT * FROM audit ORDER BY n DESC LIMIT ?", (limit,))]

    def verify(self) -> Optional[int]:
        """None if the chain is intact, else the row number where it breaks."""
        prev = ""
        with self._c() as c:
            for r in c.execute("SELECT * FROM audit ORDER BY n"):
                if r["prev"] != prev or r["hash"] != self._h(prev, r["ts"], r["event"], r["proposal"], r["detail"]):
                    return r["n"]
                prev = r["hash"]
        return None
