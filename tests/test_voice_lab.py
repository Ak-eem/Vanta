import struct
import sys
import wave
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent / "scripts"))
import voice_lab as lab  # noqa: E402


def fake_voice(name, seconds=1.0, fail=False):
    def speak(text, path):
        if fail:
            raise RuntimeError("model missing")
        assert "(urgent)" not in text and "(dry)" not in text          # cues are removed before speaking
        with wave.open(str(path), "wb") as w:
            w.setnchannels(1); w.setsampwidth(2); w.setframerate(16000)
            w.writeframes(struct.pack("<h", 0) * int(16000 * seconds))
    return lab.Voice(name, "Fake", "test", speak)


def test_run_and_page(tmp_path):
    voices = [fake_voice("fake / good"), fake_voice("fake / broken", fail=True)]
    res = lab.run_lab(voices, lab.LINES, tmp_path, log=lambda *_: None)
    assert len(res) == 10 and sum(1 for r in res if r.error) == 5
    good = [r for r in res if r.voice == "fake / good"]
    assert all(abs(r.seconds - 1.0) < 0.01 and r.speed > 1 for r in good)
    s = lab.summary(res)
    assert s["fake / broken"]["speed"] == 0 and s["fake / broken"]["failed"] == 5 and s["fake / good"]["speed"] > 1
    page = lab.write_page(res, voices, tmp_path).read_text(encoding="utf-8")
    assert "fake / good" in page and "failed: model missing" in page and "<audio" in page and (tmp_path / "results.json").exists()


def test_plain_and_nothing_installed(capsys, tmp_path):
    assert lab.plain("(dry) Well.") == "Well."
    assert lab.main(["--engines", "kitten", "--out", str(tmp_path)]) in (0, 1)
