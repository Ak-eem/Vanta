"""Mandatory login with optional VANTA_TOKEN / VANTA_ADMIN_TOKEN credentials.

Setting VANTA_ADMIN_TOKEN enables persisted staged waits in ~/.vanta/login_state.json.
"""
from __future__ import annotations

import hmac
import json
import os
import secrets
import threading
import time
from pathlib import Path

TOKEN_FILE = Path.home() / ".vanta" / "token"
LOGIN_STATE_FILE = Path.home() / ".vanta" / "login_state.json"
ACCESS_WAIT_SECONDS = 120
ADMIN_WAIT_SECONDS = 90
LOCKOUT_SECONDS = 30 * 60
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


def get_admin_token() -> str:
    return os.environ.get("VANTA_ADMIN_TOKEN", "").strip()


def lockout_enabled() -> bool:
    return bool(get_admin_token())


def _read_login_state() -> dict[str, str | float | None] | None:
    try:
        state = json.loads(LOGIN_STATE_FILE.read_text(encoding="utf-8"))
    except FileNotFoundError:
        return None
    if not isinstance(state, dict) or state.get("phase") not in {"access_wait", "admin", "admin_wait", "blocked"}:
        raise ValueError(f"Invalid VANTA login state in {LOGIN_STATE_FILE}")
    deadline = state.get("deadline")
    if deadline is not None and not isinstance(deadline, (float, int)):
        raise ValueError(f"Invalid VANTA login deadline in {LOGIN_STATE_FILE}")
    return {"phase": state["phase"], "deadline": deadline}


def _write_login_state(phase: str, deadline: float | None = None) -> None:
    LOGIN_STATE_FILE.parent.mkdir(parents=True, exist_ok=True)
    temporary = LOGIN_STATE_FILE.with_suffix(".tmp")
    temporary.write_text(json.dumps({"phase": phase, "deadline": deadline}), encoding="utf-8")
    try:
        os.chmod(temporary, 0o600)
    except OSError:
        pass
    temporary.replace(LOGIN_STATE_FILE)


def login_state(now: float | None = None) -> dict[str, str | float | int | None]:
    """Return the current persisted login phase and its remaining seconds."""
    if not lockout_enabled():
        return {"phase": "access", "deadline": None, "remaining": 0}
    current_time = time.time() if now is None else now
    with _lock:
        state = _read_login_state()
        if state is None:
            return {"phase": "access", "deadline": None, "remaining": 0}

        phase = str(state["phase"])
        deadline = state["deadline"]
        while deadline is not None and current_time >= float(deadline):
            if phase == "access_wait":
                phase, deadline = "admin", None
                _write_login_state(phase)
                break
            if phase == "admin_wait":
                phase, deadline = "blocked", float(deadline) + LOCKOUT_SECONDS
                _write_login_state(phase, deadline)
                continue
            if phase == "blocked":
                try:
                    LOGIN_STATE_FILE.unlink()
                except FileNotFoundError:
                    pass
                return {"phase": "access", "deadline": None, "remaining": 0}
            break

        remaining = max(0, int(float(deadline) - current_time + 0.999)) if deadline is not None else 0
        return {"phase": phase, "deadline": deadline, "remaining": remaining}


def start_access_wait(now: float | None = None) -> None:
    if not lockout_enabled():
        raise RuntimeError("VANTA_ADMIN_TOKEN must be configured before enabling login lockouts.")
    current_time = time.time() if now is None else now
    with _lock:
        _write_login_state("access_wait", current_time + ACCESS_WAIT_SECONDS)


def start_admin_wait(now: float | None = None) -> None:
    if not lockout_enabled():
        raise RuntimeError("VANTA_ADMIN_TOKEN must be configured before enabling login lockouts.")
    current_time = time.time() if now is None else now
    with _lock:
        _write_login_state("admin_wait", current_time + ADMIN_WAIT_SECONDS)


def check_admin(candidate: str | None) -> bool:
    expected = get_admin_token()
    return bool(candidate and expected) and hmac.compare_digest(candidate.strip().encode(), expected.encode())


def clear_login_state() -> None:
    with _lock:
        try:
            LOGIN_STATE_FILE.unlink()
        except FileNotFoundError:
            pass


def throttled(client: str) -> bool:
    now = time.time()
    with _lock:
        recent = [t for t in _fails.get(client, []) if now - t < WINDOW]
        _fails[client] = recent
        return len(recent) >= MAX_FAILS


def record_fail(client: str) -> None:
    with _lock:
        _fails.setdefault(client, []).append(time.time())
