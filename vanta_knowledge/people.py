"""People and claims: what VANTA knows about the people in your life.

Principle: store CLAIMS, not truths. "Ada said she lives alone (Oct 22)" is a
claim with a source and a date; it can be superseded, never silently rewritten.
When something later seems to conflict, VANTA shows the claim and the evidence
and leaves the judgement to you. Stored locally. IDs are UUIDs and every row has
updated_at/device_id so it can sync later.
"""
from __future__ import annotations

import json
import re
import socket
import sqlite3
import time
import uuid
from pathlib import Path
from typing import Optional

DB_PATH = Path.home() / ".vanta" / "people.db"
DEVICE = socket.gethostname()

_CLAIM_RE = re.compile(
    r"\b([A-Z][a-z]{1,20}|my (?:girlfriend|boyfriend|wife|husband|mum|mom|dad|brother|sister|friend|boss|partner))"
    r"\s+(?:said|says|told me|mentioned|tells me)\s+(?:that\s+)?(.{6,200}?)(?:[.!?]|$)", re.I)


class People:
    def __init__(self, path: Path = DB_PATH) -> None:
        self.path = path
        path.parent.mkdir(parents=True, exist_ok=True)
        with self._c() as c:
            c.executescript("""
              CREATE TABLE IF NOT EXISTS people(
                id TEXT PRIMARY KEY, name TEXT, aliases TEXT, relation TEXT, notes TEXT,
                created REAL, updated_at REAL, device_id TEXT, deleted INTEGER DEFAULT 0);
              CREATE TABLE IF NOT EXISTS claims(
                id TEXT PRIMARY KEY, person_id TEXT, text TEXT, source TEXT, stated_at REAL,
                confidence REAL, superseded_by TEXT, updated_at REAL, device_id TEXT, deleted INTEGER DEFAULT 0);
            """)

    def _c(self) -> sqlite3.Connection:
        c = sqlite3.connect(self.path, timeout=5)
        c.row_factory = sqlite3.Row
        return c

    # ── people ────────────────────────────────────────────────────────────
    def add_person(self, name: str, relation: str = "", aliases: Optional[list] = None, notes: str = "") -> str:
        existing = self.find(name)
        now = time.time()
        with self._c() as c:
            if existing:
                al = sorted(set(json.loads(existing["aliases"] or "[]")) | set(aliases or []))
                c.execute("UPDATE people SET relation=COALESCE(NULLIF(?,''),relation), aliases=?, updated_at=? WHERE id=?",
                          (relation, json.dumps(al), now, existing["id"]))
                return existing["id"]
            pid = str(uuid.uuid4())
            c.execute("INSERT INTO people VALUES(?,?,?,?,?,?,?,?,0)",
                      (pid, name.strip(), json.dumps(aliases or []), relation, notes, now, now, DEVICE))
            return pid

    def find(self, name: str) -> Optional[sqlite3.Row]:
        n = name.strip().lower()
        with self._c() as c:
            for r in c.execute("SELECT * FROM people WHERE deleted=0"):
                names = [r["name"].lower(), (r["relation"] or "").lower()] + [a.lower() for a in json.loads(r["aliases"] or "[]")]
                if n in [x for x in names if x]:
                    return r
        return None

    def mentioned_in(self, text: str) -> list[sqlite3.Row]:
        low = text.lower()
        out = []
        with self._c() as c:
            for r in c.execute("SELECT * FROM people WHERE deleted=0"):
                names = [r["name"].lower(), (r["relation"] or "").lower()] + [a.lower() for a in json.loads(r["aliases"] or "[]")]
                if any(n and re.search(rf"\b{re.escape(n)}\b", low) for n in names):
                    out.append(r)
        return out

    # ── claims ────────────────────────────────────────────────────────────
    def add_claim(self, person: str, text: str, source: str = "told you", confidence: float = 0.8,
                  stated_at: Optional[float] = None) -> str:
        pid = self.add_person(person)
        now = time.time()
        cid = str(uuid.uuid4())
        with self._c() as c:
            c.execute("INSERT INTO claims VALUES(?,?,?,?,?,?,NULL,?,?,0)",
                      (cid, pid, text.strip(), source, stated_at or now, confidence, now, DEVICE))
        return cid

    def supersede(self, old_id: str, person: str, new_text: str, source: str = "told you") -> str:
        new_id = self.add_claim(person, new_text, source)
        with self._c() as c:
            c.execute("UPDATE claims SET superseded_by=?, updated_at=? WHERE id=?", (new_id, time.time(), old_id))
        return new_id

    def claims_for(self, person: str, include_old: bool = False) -> list[dict]:
        p = self.find(person)
        if not p:
            return []
        q = "SELECT * FROM claims WHERE person_id=? AND deleted=0"
        if not include_old:
            q += " AND superseded_by IS NULL"
        with self._c() as c:
            return [dict(r) for r in c.execute(q + " ORDER BY stated_at", (p["id"],))]

    def forget_person(self, person: str) -> bool:
        p = self.find(person)
        if not p:
            return False
        with self._c() as c:
            c.execute("DELETE FROM claims WHERE person_id=?", (p["id"],))
            c.execute("DELETE FROM people WHERE id=?", (p["id"],))
        return True

    # ── natural language capture ──────────────────────────────────────────
    def capture(self, text: str) -> list[str]:
        """'Ada said she lives alone' -> claim. Returns new claim ids. Deliberately conservative."""
        ids = []
        for who, what in _CLAIM_RE.findall(text):
            who = who.strip()
            if who.lower() in {"he", "she", "they", "i", "you", "it", "someone"}:
                continue
            ids.append(self.add_claim(who, what.strip(), source=f"you said {who} said so"))
        return ids

    def context_for(self, message: str) -> str:
        """Short block about the people named in `message`, framed as claims."""
        lines = []
        for p in self.mentioned_in(message):
            cl = self.claims_for(p["name"])
            if not cl and not p["relation"]:
                continue
            head = f"{p['name']}" + (f" ({p['relation']})" if p["relation"] else "")
            lines.append(head + ":")
            for c in cl[-6:]:
                d = time.strftime("%b %d", time.localtime(c["stated_at"]))
                lines.append(f"  - claim ({c['source']}, {d}): {c['text']}")
        if not lines:
            return ""
        return ("People context. These are things you were TOLD, not verified facts. "
                "If evidence seems to conflict, show both and let the user decide; never accuse.\n" + "\n".join(lines))
