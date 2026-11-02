from pathlib import Path
from types import SimpleNamespace

import psutil

import vanta_ui.server as server


class FakeSocketIO:
    def __init__(self):
        self.events = []

    def emit(self, event, data, **kwargs):
        self.events.append((event, data))


class FakeGuardian:
    def __init__(self):
        self.proposals = []

    def propose(self, kind, target, reason):
        proposal = {"id": str(len(self.proposals) + 1), "kind": kind, "target": target, "reason": reason}
        self.proposals.append(proposal)
        return proposal

    def approve(self, *args, **kwargs):
        raise AssertionError("Detection handlers must not approve actions automatically.")


class FakeSettings:
    data = {"emergency": True}

    @staticmethod
    def is_trusted(*keys):
        return False


class FakeAutopilot:
    @staticmethod
    def active():
        return True

    @staticmethod
    def schedule(proposals):
        return 0


class FakeNudges:
    @staticmethod
    def nudge(*args, **kwargs):
        pass


def install_fakes(monkeypatch, process_iter):
    socket = FakeSocketIO()
    guardian = FakeGuardian()
    monkeypatch.setattr(server, "socketio", socket)
    monkeypatch.setattr(server, "guardian", guardian)
    monkeypatch.setattr(server, "guard_settings", FakeSettings())
    monkeypatch.setattr(server, "autopilot", FakeAutopilot())
    monkeypatch.setattr(server, "nudges", FakeNudges())
    monkeypatch.setattr(server, "_emit_guardian_state", lambda: None)
    monkeypatch.setattr(server, "_exe_safe", {})
    monkeypatch.setattr(psutil, "process_iter", process_iter)
    return socket, guardian


def assert_manual_approval_only(socket, guardian):
    assert {p["kind"] for p in guardian.proposals} >= {"end_process"}
    stage = next(data for event, data in socket.events if event == "stage")
    assert any(action["id"].startswith("guard:approve:") for action in stage["actions"])


def test_dangerous_scan_proposes_process_stop_without_approving_it(monkeypatch, tmp_path):
    executable = tmp_path / "suspect.exe"
    executable.write_bytes(b"MZ test fixture")
    info = {"pid": 4521, "name": "suspect.exe", "exe": str(executable), "create_time": 10.0, "ppid": 1}
    socket, guardian = install_fakes(monkeypatch, lambda attrs: [SimpleNamespace(info=info)])

    server._on_scan({
        "label": "dangerous",
        "name": executable.name,
        "path": str(executable),
        "kind": "windows program",
        "reasons": ["heuristic string matches"],
        "sha256": "a" * 64,
        "family": None,
        "about": "",
        "act": True,
    })

    assert_manual_approval_only(socket, guardian)
    assert any(p["kind"] == "quarantine" for p in guardian.proposals)


def test_ransomware_behavior_proposes_process_stop_without_approving_it(monkeypatch):
    info = {"pid": 6521, "name": "writer.exe", "exe": "C:\\Temp\\writer.exe", "created": 20.0, "w": 500_000, "delta": 500_000}
    socket, guardian = install_fakes(monkeypatch, lambda attrs: [])

    server._on_ransom([info], {"why": ["canary", "burst"], "files": 50, "dirs": 4, "ext": ".locked"})

    assert_manual_approval_only(socket, guardian)
