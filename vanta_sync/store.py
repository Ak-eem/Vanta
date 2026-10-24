"""Where encrypted records live. A record is {id, kind, updated_at(ms), device_id, deleted, blob}."""
from __future__ import annotations

import json
import os
import threading
from pathlib import Path
from typing import Protocol

import requests


class Store(Protocol):
    def push(self, records: list[dict]) -> None: ...
    def pull(self, since_ms: int) -> list[dict]: ...
    def get(self, rid: str) -> dict | None: ...


class FolderStore:
    """A JSON file. Used for tests, and handy with a synced folder (Syncthing etc.)."""
    def __init__(self, path: Path) -> None:
        self.path, self._lock = Path(path), threading.Lock()

    def _load(self) -> dict:
        try:
            return json.loads(self.path.read_text())
        except FileNotFoundError:
            return {}

    def push(self, records: list[dict]) -> None:
        with self._lock:
            data = self._load()
            for r in records:
                cur = data.get(r["id"])
                if not cur or r["updated_at"] >= cur["updated_at"]:
                    data[r["id"]] = r
            self.path.parent.mkdir(parents=True, exist_ok=True)
            self.path.write_text(json.dumps(data))

    def pull(self, since_ms: int) -> list[dict]:
        return sorted((r for r in self._load().values() if r["updated_at"] > since_ms), key=lambda r: r["updated_at"])

    def get(self, rid: str):
        return self._load().get(rid)


class SupabaseStore:
    """Supabase REST (PostgREST). Table schema in vanta_sync/supabase.sql. Uses the public anon key plus a
    signed-in user (email + password) so row-level security keeps every row private to you."""
    def __init__(self, url: str, key: str, email: str = "", password: str = "", table: str = "vanta_sync") -> None:
        self.url, self.key, self.email, self.password = url.rstrip("/"), key, email, password
        self.base = f"{self.url}/rest/v1/{table}"
        self.token, self.refresh = "", ""

    def _login(self) -> None:
        if self.refresh:
            r = requests.post(f"{self.url}/auth/v1/token?grant_type=refresh_token", headers={"apikey": self.key}, json={"refresh_token": self.refresh}, timeout=20)
            if r.ok:
                self.token, self.refresh = r.json()["access_token"], r.json()["refresh_token"]
                return
        r = requests.post(f"{self.url}/auth/v1/token?grant_type=password", headers={"apikey": self.key}, json={"email": self.email, "password": self.password}, timeout=20)
        r.raise_for_status()
        self.token, self.refresh = r.json()["access_token"], r.json()["refresh_token"]

    def _req(self, method: str, **kw):
        for attempt in (0, 1):
            if not self.token:
                self._login()
            h = {"apikey": self.key, "Authorization": f"Bearer {self.token}", "Content-Type": "application/json", **kw.pop("headers", {})}
            r = requests.request(method, self.base, headers=h, timeout=20, **kw)
            if r.status_code in (401, 403) and attempt == 0:
                self.token = ""
                continue
            r.raise_for_status()
            return r
        raise RuntimeError("unreachable")

    def push(self, records: list[dict]) -> None:
        for i in range(0, len(records), 100):
            self._req("POST", params={"on_conflict": "id"}, data=json.dumps(records[i:i + 100]), headers={"Prefer": "resolution=merge-duplicates"})

    def pull(self, since_ms: int) -> list[dict]:
        return self._req("GET", params={"updated_at": f"gt.{int(since_ms)}", "order": "updated_at.asc", "limit": "1000"}).json()

    def get(self, rid: str):
        rows = self._req("GET", params={"id": f"eq.{rid}"}).json()
        return rows[0] if rows else None


def from_env() -> Store | None:
    if os.getenv("VANTA_SYNC_FOLDER"):
        return FolderStore(Path(os.environ["VANTA_SYNC_FOLDER"]) / "vanta-sync.json")
    if os.getenv("SUPABASE_URL") and os.getenv("SUPABASE_KEY"):
        return SupabaseStore(os.environ["SUPABASE_URL"], os.environ["SUPABASE_KEY"], os.getenv("SUPABASE_EMAIL", ""), os.getenv("SUPABASE_PASSWORD", ""))
    return None
