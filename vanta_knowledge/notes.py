"""Quick notes and 'ask later' items, captured on any device. Syncs like everything else."""
from __future__ import annotations

import socket
import sqlite3
import time
import uuid
from pathlib import Path

DB_PATH = Path.home() / ".vanta" / "notes.db"
DEVICE = socket.gethostname()


class Notes:
    def __init__(self, path: Path = DB_PATH) -> None:
        self.path = path
        path.parent.mkdir(parents=True, exist_ok=True)
        with self._c() as c:
            c.execute("CREATE TABLE IF NOT EXISTS notes(id TEXT PRIMARY KEY, text TEXT, kind TEXT, created REAL, updated_at REAL, device_id TEXT, deleted INTEGER DEFAULT 0)")

    def _c(self) -> sqlite3.Connection:
        c = sqlite3.connect(self.path, timeout=5)
        c.row_factory = sqlite3.Row
        return c

    def add(self, text: str, kind: str = "note") -> str:
        nid, now = str(uuid.uuid4()), time.time()
        with self._c() as c:
            c.execute("INSERT INTO notes VALUES(?,?,?,?,?,?,0)", (nid, text.strip()[:2000], kind, now, now, DEVICE))
        return nid

    def delete(self, nid: str) -> None:
        with self._c() as c:
            c.execute("UPDATE notes SET deleted=1, updated_at=? WHERE id=?", (time.time(), nid))

    def all(self) -> list[dict]:
        with self._c() as c:
            return [dict(r) for r in c.execute("SELECT * FROM notes WHERE deleted=0 ORDER BY created DESC")]
