"""Where voiceprints live: one small file in ~/.vanta, readable only by you. A voiceprint is a list of numbers, not a recording."""
from __future__ import annotations

import os
import sqlite3
import time
from pathlib import Path
from typing import Optional

import numpy as np

MAX_PRINTS = 8            # per person
MAX_UNKNOWN = 20
UNKNOWN_DAYS = 14         # strangers are forgotten after this long without being heard again


class VoiceStore:
    def __init__(self, path: Path, clock=time.time) -> None:
        self.path, self.clock = Path(path), clock
        self.path.parent.mkdir(parents=True, exist_ok=True)
        self.db = sqlite3.connect(str(self.path), check_same_thread=False)
        try:
            os.chmod(self.path, 0o600)
        except OSError:
            pass
        self.db.executescript("""
            create table if not exists people(id integer primary key, name text not null, role text not null, created real, last_heard real);
            create table if not exists prints(id integer primary key, person integer not null, vec blob not null, ts real);""")
        self.db.commit()

    # people
    def add_person(self, name: str, role: str) -> int:
        now = self.clock()
        cur = self.db.execute("insert into people(name, role, created, last_heard) values (?,?,?,?)", (name.strip()[:40], role, now, now))
        self.db.commit()
        return int(cur.lastrowid)

    def people(self, role: Optional[str] = None) -> list[dict]:
        q = "select id, name, role, created, last_heard from people" + (" where role=?" if role else "") + " order by role, name"
        rows = self.db.execute(q, (role,) if role else ()).fetchall()
        return [{"id": r[0], "name": r[1], "role": r[2], "created": r[3], "last_heard": r[4], "prints": self.count(r[0])} for r in rows]

    def person(self, pid: int) -> Optional[dict]:
        return next((p for p in self.people() if p["id"] == pid), None)

    def update(self, pid: int, name: Optional[str] = None, role: Optional[str] = None) -> None:
        if name is not None:
            self.db.execute("update people set name=? where id=?", (name.strip()[:40], pid))
        if role is not None:
            self.db.execute("update people set role=? where id=?", (role, pid))
        self.db.commit()

    def touch(self, pid: int) -> None:
        self.db.execute("update people set last_heard=? where id=?", (self.clock(), pid)); self.db.commit()

    def remove(self, pid: int) -> None:
        self.db.execute("delete from prints where person=?", (pid,)); self.db.execute("delete from people where id=?", (pid,)); self.db.commit()

    # prints
    def count(self, pid: int) -> int:
        return int(self.db.execute("select count(*) from prints where person=?", (pid,)).fetchone()[0])

    def add_print(self, pid: int, vec: np.ndarray) -> None:
        self.db.execute("insert into prints(person, vec, ts) values (?,?,?)", (pid, np.asarray(vec, dtype=np.float32).tobytes(), self.clock()))
        self.db.execute("delete from prints where person=? and id not in (select id from prints where person=? order by id desc limit ?)", (pid, pid, MAX_PRINTS))
        self.db.commit()

    def prints(self, pid: int) -> list[np.ndarray]:
        return [np.frombuffer(r[0], dtype=np.float32) for r in self.db.execute("select vec from prints where person=? order by id", (pid,)).fetchall()]

    # strangers
    def forget_unknown(self) -> int:
        ids = [r[0] for r in self.db.execute("select id from people where role='unknown'").fetchall()]
        for i in ids:
            self.remove(i)
        return len(ids)

    def expire_unknown(self) -> None:
        cutoff = self.clock() - UNKNOWN_DAYS * 86400
        for (i,) in self.db.execute("select id from people where role='unknown' and last_heard < ?", (cutoff,)).fetchall():
            self.remove(i)
        extra = self.db.execute("select id from people where role='unknown' order by last_heard desc limit -1 offset ?", (MAX_UNKNOWN,)).fetchall()
        for (i,) in extra:
            self.remove(i)
