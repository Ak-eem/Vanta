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
            c.execute("CREATE TABLE IF NOT EXISTS chats(id TEXT PRIMARY KEY, role TEXT, text TEXT, reply_to TEXT, created REAL, updated_at REAL, device_id TEXT, deleted INTEGER DEFAULT 0)")
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

    # ── phone chat: text-only conversation carried by sync ───────────────
    def add_chat(self, role: str, text: str, reply_to: str = "") -> str:
        cid, now = str(uuid.uuid4()), time.time()
        with self._c() as c:
            c.execute("INSERT INTO chats VALUES(?,?,?,?,?,?,?,0)", (cid, role, text.strip()[:4000], reply_to, now, now, DEVICE))
        return cid

    def chats(self, limit: int = 200) -> list[dict]:
        with self._c() as c:
            rows = [dict(r) for r in c.execute("SELECT * FROM chats WHERE deleted=0 ORDER BY created DESC LIMIT ?", (limit,))]
        return rows[::-1]

    def unanswered(self) -> list[dict]:
        rows = self.chats()
        answered = {r["reply_to"] for r in rows if r["role"] == "assistant"}
        return [r for r in rows if r["role"] == "user" and r["id"] not in answered]
