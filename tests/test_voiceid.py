import os
import sys
from pathlib import Path

import numpy as np
import pytest

sys.path.insert(0, str(Path(__file__).resolve().parent))
from voiceid import ticket  # noqa: E402
from voiceid.audio import read_wav, speech_stats, write_wav  # noqa: E402
from voiceid.ident import SpeakerID, cosine  # noqa: E402
from voiceid.store import UNKNOWN_DAYS, VoiceStore  # noqa: E402

RATE = 16000


def tone(freq: float, seconds: float = 3.0, amp: float = 0.3, seed: int = 0) -> np.ndarray:
    """A 'voice' for logic tests: its identity is its pitch. Loud/quiet bursts like syllables so it counts as speech."""
    t = np.arange(int(seconds * RATE)) / RATE
    env = (np.sin(2 * np.pi * 3 * t) > -0.3).astype(np.float32)
    rng = np.random.default_rng(seed)
    return (amp * np.sin(2 * np.pi * freq * t) * env + 0.002 * rng.standard_normal(len(t))).astype(np.float32)


def fake_embed(x: np.ndarray) -> np.ndarray:
    """Spectrum in 64 bands, so same pitch -> same vector, different pitch -> different vector."""
    mag = np.abs(np.fft.rfft(x[: RATE * 3]))[:4800]
    v = mag.reshape(64, -1).sum(axis=1)
    return (v / (np.linalg.norm(v) + 1e-9)).astype(np.float32)


@pytest.fixture
def sid(tmp_path):
    clock = [1_000_000.0]
    st = VoiceStore(tmp_path / "v.db", clock=lambda: clock[0])
    s = SpeakerID(st, fake_embed, high=0.9, low=0.6)
    s.clock = clock
    return s


def enroll_me(s):
    return s.enroll("Akeem", "owner", [tone(220, seed=i) for i in range(3)])


def test_owner_guest_unknown(sid):
    enroll_me(sid)
    sid.enroll("Sister", "guest", [tone(440, seed=i) for i in range(3)])
    m = sid.identify(tone(220, seed=9)); assert (m.status, m.name, m.role) == ("owner", "Akeem", "owner")
    g = sid.identify(tone(440, seed=9)); assert (g.status, g.name, g.role) == ("guest", "Sister", "guest")
    u = sid.identify(tone(1000, seed=9)); assert u.status == "unknown" and u.role == "unknown" and u.name == "Unknown voice 1"


def test_returning_stranger_is_recognised_and_can_be_named(sid):
    enroll_me(sid)
    a = sid.identify(tone(1000, seed=1)); b = sid.identify(tone(1000, seed=2)); c = sid.identify(tone(1300, seed=3))
    assert a.person == b.person and a.name == b.name and c.person != a.person and c.name == "Unknown voice 2"
    sid.store.update(a.person, name="Uncle Tunde", role="guest")             # "that was my uncle"
    assert sid.identify(tone(1000, seed=4)).status == "guest"


def test_too_short_and_silent(sid):
    enroll_me(sid)
    assert sid.identify(np.zeros(RATE * 2, dtype=np.float32)).status == "silent"
    assert sid.identify(tone(220, seconds=0.5)).status in ("short", "silent")
    assert sid.store.people("unknown") == []                                  # nothing is remembered from clips that were not judged


def test_unclear_gets_no_trust(sid):
    sid.high, sid.low = 0.999, 0.3
    enroll_me(sid)
    m = sid.identify(tone(235, seed=5))                                       # close to mine, not close enough
    assert m.status == "unclear" and m.role == "unknown"


def test_enrollment_needs_real_speech_and_reports_consistency(sid):
    with pytest.raises(ValueError):
        sid.enroll("X", "owner", [np.zeros(RATE * 3, dtype=np.float32)] * 3)
    ok = enroll_me(sid)
    assert ok["clips"] == 3 and ok["consistency"] > 0.95 and ok["warning"] == ""
    odd = sid.enroll("Mixed", "guest", [tone(200), tone(700), tone(1200)])
    assert odd["warning"]


def test_strangers_are_forgotten(sid):
    enroll_me(sid)
    sid.identify(tone(1000)); assert len(sid.store.people("unknown")) == 1
    sid.clock[0] += (UNKNOWN_DAYS + 1) * 86400
    sid.identify(tone(220, seed=3)); assert sid.store.people("unknown") == []
    sid.identify(tone(1000)); assert sid.store.forget_unknown() == 1 and len(sid.store.people("owner")) == 1


def test_store_is_private_and_bounded(sid):
    assert (os.stat(sid.store.path).st_mode & 0o077) == 0 or os.name == "nt"
    pid = enroll_me(sid)["person"]
    for i in range(20):
        sid.store.add_print(pid, np.ones(4, dtype=np.float32))
    assert sid.store.count(pid) == 8


def test_wav_roundtrip_and_stats():
    x = tone(220)
    y = read_wav(write_wav(x))
    assert len(y) == len(x) and cosine(fake_embed(x), fake_embed(y)) > 0.999
    assert speech_stats(x)["speech"] > 1.5 and speech_stats(np.zeros(RATE, dtype=np.float32))["speech"] == 0
    steady = (0.3 * np.sin(2 * np.pi * 200 * np.arange(RATE * 3) / RATE)).astype(np.float32)   # non-stop talking
    assert speech_stats(steady)["speech"] > 2.5
    with pytest.raises(ValueError):
        read_wav(b"not a wav")


def test_ticket():
    secret = b"k" * 32
    t = ticket.make(secret, "guest", "Sister", "what time is it", now=1000)
    assert ticket.verify(secret, t, "what time is it", now=1010) == {"role": "guest", "name": "Sister"}
    assert ticket.verify(secret, t, "uninstall chrome", now=1010) is None          # a different message
    assert ticket.verify(secret, t, "what time is it", now=1000 + ticket.TTL + 1) is None   # expired
    assert ticket.verify(b"x" * 32, t, "what time is it", now=1010) is None         # wrong secret
    forged = t.replace(".guest.", ".owner.")
    assert ticket.verify(secret, forged, "what time is it", now=1010) is None
    assert ticket.verify(secret, "garbage", "x") is None


MODEL = Path(os.environ.get("VANTA_VOICE_MODEL", "/tmp/spk.onnx"))


@pytest.mark.skipif(not MODEL.exists(), reason="voice model not downloaded")
def test_real_model_gives_stable_voiceprints():
    from voiceid.embed import SherpaEmbedder
    e = SherpaEmbedder(MODEL)
    x = tone(150, 3.0)
    a, b = e(x), e(x)
    assert a.shape == b.shape and a.shape[0] >= 128 and cosine(a, b) > 0.999
