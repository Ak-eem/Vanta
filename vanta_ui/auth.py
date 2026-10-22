"""Mandatory login for VANTA.

Token source: VANTA_TOKEN env var, else a random token generated once and kept
in ~/.vanta/token (owner-only). Browser logs in at /login and gets a signed,
HttpOnly, SameSite=Strict session cookie. Failed attempts are throttled.
"""
from __future__ import annotations

import hmac
import os
import secrets
import threading
import time
from pathlib import Path

TOKEN_FILE = Path.home() / ".vanta" / "token"
_fails: dict[str, list[float]] = {}
_lock = threading.Lock()
MAX_FAILS, WINDOW = 5, 300  # 5 bad tries per 5 minutes per client


def get_token() -> str:
    env = os.environ.get("VANTA_TOKEN", "").strip()
    if env:
        return env
    try:
        t = TOKEN_FILE.read_text().strip()
        if t:
            return t
    except OSError:
        pass
    t = secrets.token_urlsafe(24)
    TOKEN_FILE.parent.mkdir(parents=True, exist_ok=True)
    TOKEN_FILE.write_text(t)
    try:
        os.chmod(TOKEN_FILE, 0o600)
    except OSError:
        pass
    return t


def check(candidate: str | None) -> bool:
    return bool(candidate) and hmac.compare_digest(candidate.strip().encode(), get_token().encode())


def throttled(client: str) -> bool:
    now = time.time()
    with _lock:
        recent = [t for t in _fails.get(client, []) if now - t < WINDOW]
        _fails[client] = recent
        return len(recent) >= MAX_FAILS


def record_fail(client: str) -> None:
    with _lock:
        _fails.setdefault(client, []).append(time.time())
