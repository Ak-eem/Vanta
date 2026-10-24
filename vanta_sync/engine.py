"""Sync engine: push changed rows (encrypted), pull and merge remote ones. Last writer wins per row,
and deletes are tombstones so they sync too."""
from __future__ import annotations

import json
import socket
import sqlite3
from pathlib import Path
from typing import Optional

from . import crypto
from .store import Store

# What syncs. Anything not listed here never leaves the laptop (activity log, screen data, process history).
TABLES = {"people": "people", "claims": "people", "notes": "notes", "chats": "notes", "projects": "projects"}
VAULT_ID = "_vault"


def _ms(x: float) -> int:
    return int(round(float(x) * 1000))


class Sync:
    def __init__(self, store: Store, key: bytes, dbs: dict[str, Path], state_path: Path, device: str = socket.gethostname()) -> None:
        self.store, self.key, self.dbs, self.state_path, self.device = store, key, dbs, Path(state_path), device

    # ── vault ────────────────────────────────────────────────────────────
    @staticmethod
    def unlock(store: Store, passphrase: str, create: bool = True) -> bytes:
        rec = store.get(VAULT_ID)
        if rec is None:
            if not create:
                raise LookupError("no vault yet")
            salt = crypto.new_salt()
            key = crypto.derive_key(passphrase, salt)
            import base64
            store.push([{"id": VAULT_ID, "kind": "vault", "updated_at": 1, "device_id": "setup", "deleted": False,
                         "blob": base64.b64encode(salt).decode() + "." + crypto.encrypt(key, crypto.CHECK_TEXT, VAULT_ID, "vault")}])
            return key
        import base64
        salt_b64, check = rec["blob"].split(".", 1)
        key = crypto.derive_key(passphrase, base64.b64decode(salt_b64))
        if crypto.decrypt(key, check, VAULT_ID, "vault") != crypto.CHECK_TEXT:
            raise crypto.WrongPassphrase("wrong passphrase")
        return key

    # ── state ────────────────────────────────────────────────────────────
    def _state(self) -> dict:
        try:
            return json.loads(self.state_path.read_text())
        except Exception:
            return {"pushed": 0, "pulled": 0}

    def _save(self, st: dict) -> None:
        self.state_path.parent.mkdir(parents=True, exist_ok=True)
        self.state_path.write_text(json.dumps(st))

    def _conn(self, table: str) -> sqlite3.Connection:
        c = sqlite3.connect(self.dbs[TABLES[table]], timeout=5)
        c.row_factory = sqlite3.Row
        return c

    # ── push / pull ──────────────────────────────────────────────────────
    def push(self) -> int:
        st = self._state()
        out, newest = [], st["pushed"]
        for table in (t for t in TABLES if TABLES[t] in self.dbs):
            with self._conn(table) as c:
                for r in c.execute(f"SELECT * FROM {table} WHERE CAST(updated_at*1000 AS INTEGER) > ?", (st["pushed"],)):
                    row = dict(r)
                    rid = f"{table}:{row['id']}"
                    ms = _ms(row["updated_at"])
                    out.append({"id": rid, "kind": table, "updated_at": ms, "device_id": self.device, "deleted": bool(row.get("deleted")),
                                "blob": crypto.encrypt(self.key, json.dumps(row).encode(), rid, table)})
                    newest = max(newest, ms)
        if out:
            self.store.push(out)
            st["pushed"] = newest
            self._save(st)
        return len(out)

    def pull(self) -> int:
        st = self._state()
        n, newest = 0, st["pulled"]
        for rec in self.store.pull(st["pulled"]):
            newest = max(newest, rec["updated_at"])
            if rec["kind"] not in TABLES or TABLES[rec["kind"]] not in self.dbs or rec["device_id"] == self.device:
                continue
            row = json.loads(crypto.decrypt(self.key, rec["blob"], rec["id"], rec["kind"]))
            if self._apply(rec["kind"], row):
                n += 1
        st["pulled"] = newest
        self._save(st)
        return n

    def _apply(self, table: str, row: dict) -> bool:
        with self._conn(table) as c:
            cols = [r["name"] for r in c.execute(f"PRAGMA table_info({table})")]
            cur = c.execute(f"SELECT updated_at FROM {table} WHERE id=?", (row["id"],)).fetchone()
            if cur and _ms(cur["updated_at"]) >= _ms(row["updated_at"]):
                return False
            use = [k for k in cols if k in row]
            c.execute(f"INSERT OR REPLACE INTO {table}({','.join(use)}) VALUES({','.join('?' * len(use))})", [row[k] for k in use])
            return True

    def run(self) -> dict:
        return {"pulled": self.pull(), "pushed": self.push()}
