from __future__ import annotations

import json

from vanta_ui import auth


def test_admin_lockout_flow_persists_each_phase(tmp_path, monkeypatch):
    monkeypatch.setenv("VANTA_ADMIN_TOKEN", "test-admin-token")
    monkeypatch.setattr(auth, "LOGIN_STATE_FILE", tmp_path / "login_state.json")

    assert auth.login_state(now=100)["phase"] == "access"

    auth.start_access_wait(now=100)
    access_wait = auth.login_state(now=100)
    assert access_wait["phase"] == "access_wait"
    assert access_wait["remaining"] == auth.ACCESS_WAIT_SECONDS
    assert json.loads(auth.LOGIN_STATE_FILE.read_text())["phase"] == "access_wait"

    admin = auth.login_state(now=100 + auth.ACCESS_WAIT_SECONDS)
    assert admin["phase"] == "admin"

    auth.start_admin_wait(now=220)
    blocked = auth.login_state(now=220 + auth.ADMIN_WAIT_SECONDS)
    assert blocked["phase"] == "blocked"
    assert blocked["remaining"] == auth.LOCKOUT_SECONDS
    assert auth.login_state(now=220 + auth.ADMIN_WAIT_SECONDS + auth.LOCKOUT_SECONDS)["phase"] == "access"
    assert not auth.LOGIN_STATE_FILE.exists()


def test_admin_token_is_optional_and_compared_exactly(monkeypatch):
    monkeypatch.delenv("VANTA_ADMIN_TOKEN", raising=False)
    assert not auth.lockout_enabled()
    assert not auth.check_admin("anything")

    monkeypatch.setenv("VANTA_ADMIN_TOKEN", " test-admin-token ")
    assert auth.lockout_enabled()
    assert auth.check_admin("test-admin-token")
    assert not auth.check_admin("test-admin-token-extra")
    assert not auth.check_admin(None)


def test_access_and_admin_wait_deadlines_are_server_side(tmp_path, monkeypatch):
    monkeypatch.setenv("VANTA_ADMIN_TOKEN", "test-admin-token")
    monkeypatch.setattr(auth, "LOGIN_STATE_FILE", tmp_path / "login_state.json")

    auth.start_access_wait(now=500)
    assert auth.login_state(now=619)["remaining"] == 1
    assert auth.login_state(now=620)["phase"] == "admin"

    auth.start_admin_wait(now=700)
    assert auth.login_state(now=789)["remaining"] == 1
    assert auth.login_state(now=790)["phase"] == "blocked"


def test_expired_admin_wait_does_not_restart_lockout_late(tmp_path, monkeypatch):
    monkeypatch.setenv("VANTA_ADMIN_TOKEN", "test-admin-token")
    monkeypatch.setattr(auth, "LOGIN_STATE_FILE", tmp_path / "login_state.json")
    auth.start_admin_wait(now=100)

    state = auth.login_state(now=100 + auth.ADMIN_WAIT_SECONDS + auth.LOCKOUT_SECONDS + 1)

    assert state["phase"] == "access"
    assert not auth.LOGIN_STATE_FILE.exists()


def test_login_route_shows_staged_timer_and_admin_input(tmp_path, monkeypatch):
    from vanta_ui import server

    monkeypatch.setenv("VANTA_ADMIN_TOKEN", "test-admin-token")
    monkeypatch.setenv("VANTA_TOKEN", "test-access-token")
    monkeypatch.setattr(auth, "LOGIN_STATE_FILE", tmp_path / "login_state.json")
    client = server.app.test_client()

    response = client.post("/login", data={"token": "wrong-token"})
    assert response.status_code == 401
    assert b"ACCESS DENIED" in response.data
    assert b'data-phase="access_wait"' in response.data
    assert b'class="orb alert"' in response.data
    assert b"const sphereGlow = alertState ? '#FF465D'" in response.data

    auth._write_login_state("access_wait", auth.time.time() - 1)
    response = client.get("/login")
    assert response.status_code == 200
    assert b'name="admin_token"' in response.data

    response = client.post("/login", data={"admin_token": "wrong-admin-token"})
    assert response.status_code == 401
    assert b"ADMIN TOKEN REJECTED" in response.data
    assert b'data-phase="admin_wait"' in response.data
    assert b'class="orb alert"' in response.data

    auth._write_login_state("admin_wait", auth.time.time() - 1)
    response = client.get("/login")
    assert response.status_code == 200
    assert b"VANTA LOCKED" in response.data
    assert b'data-phase="blocked"' in response.data

    auth._write_login_state("blocked", auth.time.time() + 60)
    response = client.get("/", headers={"X-VANTA-TOKEN": "test-access-token"})
    assert response.status_code == 302
    assert response.location.endswith("/login")

    auth._write_login_state("admin", None)
    response = client.post("/login", data={"admin_token": "test-admin-token"})
    assert response.status_code == 302
    assert not auth.LOGIN_STATE_FILE.exists()
