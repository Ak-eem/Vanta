import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent / "scripts"))
from voice_check import suggest


def test_suggests_between_the_groups():
    r = suggest([0.8, 0.75, 0.7], [0.3, 0.35, 0.4])
    assert r["separable"] and 0.4 < r["high"] < 0.7 and r["low"] < r["high"]


def test_says_when_voices_are_too_close():
    assert not suggest([0.5, 0.45], [0.48, 0.5])["separable"]
