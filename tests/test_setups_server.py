"""Drives the real server (fake models, throwaway HOME) so the setups wiring is proven end to end."""
import json
import os
import subprocess
import sys
from pathlib import Path

import pytest

ROOT = Path(__file__).resolve().parent.parent


@pytest.fixture(scope="module")
def result(tmp_path_factory):
    home = tmp_path_factory.mktemp("home")
    env = {**os.environ, "HOME": str(home), "USERPROFILE": str(home), "GROQ_API_KEY": "test", "VANTA_WORKSPACE": str(home / "ws"),
           "VANTA_LOCAL_ENABLED": "true", "PYTHONDONTWRITEBYTECODE": "1"}
    p = subprocess.run([sys.executable, str(ROOT / "tests" / "server_e2e_setups.py")], env=env, capture_output=True, text=True, timeout=180)
    line = [l for l in p.stdout.splitlines() if l.startswith("RESULT ")]
    assert line, f"no result.\nSTDOUT:\n{p.stdout[-1500:]}\nSTDERR:\n{p.stderr[-1500:]}"
    return json.loads(line[0][7:])


def test_connect_and_switch(result):
    assert result["connect_state"] == "everyday"
    assert result["switched_text"] and result["state_after_switch"] == "think"


def test_think_mode_changes_how_it_answers(result):
    assert result["think_overlay"] and result["think_effort"] == "high"
    assert result["decision_saved"]


def test_offline_never_uses_the_cloud(result):
    assert result["offline_state"] == "offline"
    assert result["offline_answer"] and result["cloud_stream_untouched"]
    assert result["call_once_blocked"] and result["google_blocked"]


def test_build_runs_live_and_can_be_undone(result):
    assert result["build_stages"] >= 3
    assert result["build_undo_offered"] and result["build_file_written"] and result["undo_removed"]
