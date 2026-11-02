"""Drives the real server with a fake voice model: owner passes, guest gets chat only, strangers are ignored, forged tickets fail."""
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
           "PYTHONDONTWRITEBYTECODE": "1", "VANTA_VOICE_HIGH": "0.9", "VANTA_VOICE_LOW": "0.6"}
    p = subprocess.run([sys.executable, str(ROOT / "tests" / "server_e2e_voice.py")], env=env, capture_output=True, text=True, timeout=180)
    line = [l for l in p.stdout.splitlines() if l.startswith("RESULT ")]
    assert line, f"no result.\nSTDOUT:\n{p.stdout[-1500:]}\nSTDERR:\n{p.stderr[-1500:]}"
    return json.loads(line[0][7:])


def test_before_enrolling_nothing_changes(result):
    assert result["before_setup"] == "off"


def test_voices_are_told_apart(result):
    assert result["enroll_ok"] and result["guest_ok"]
    assert (result["me"], result["sis"], result["stranger"]) == ("owner", "guest", "unknown")
    assert result["silent"] == "silent"


def test_owner_gets_everything(result):
    assert result["owner_reaches_vanta"] and result["typed_works"]


def test_guest_gets_chat_only(result):
    assert result["guest_blocked_from_vanta"] and result["guest_answered"] and result["guest_prompt_safe"]


def test_stranger_is_ignored(result):
    assert result["stranger_ignored"]


def test_tickets_cannot_be_faked_or_reused(result):
    assert result["wrong_words_refused"] and result["forged_refused"]


def test_people_management(result):
    assert result["stranger_remembered"] and result["promoted"] and result["no_login_blocked"]
