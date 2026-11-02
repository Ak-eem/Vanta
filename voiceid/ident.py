"""Who is talking? Compare the voice in a clip with the saved voiceprints.

owner   - recognised, full trust       guest   - recognised, chat only, no actions
unknown - a voice I don't know (ignored; remembered as "Unknown voice N" so a returning stranger is recognised, and you can name them)
unclear - could be someone I know but I am not sure (treated like unknown: no action)
short   - too little speech to tell (ignored)"""
from __future__ import annotations

import os
from dataclasses import dataclass
from typing import Callable, Optional

import numpy as np

from .audio import speech_stats
from .store import VoiceStore

MIN_SPEECH = 1.0           # seconds of actual speech needed to judge a voice
ENROLL_SPEECH = 1.5        # seconds of speech needed per enrollment clip


def _unit(v: np.ndarray) -> np.ndarray:
    v = np.asarray(v, dtype=np.float32)
    n = float(np.linalg.norm(v))
    return v / n if n > 0 else v


def cosine(a: np.ndarray, b: np.ndarray) -> float:
    return float(np.dot(_unit(a), _unit(b)))


@dataclass
class Match:
    status: str                  # owner | guest | unknown | unclear | short | silent
    name: str = ""
    person: Optional[int] = None
    score: float = 0.0
    note: str = ""

    @property
    def role(self) -> str:
        """What the rest of VANTA may do for this voice."""
        return self.status if self.status in ("owner", "guest") else "unknown"

    def public(self) -> dict:
        return {"status": self.status, "role": self.role, "name": self.name, "person": self.person, "score": round(self.score, 2), "note": self.note}


class SpeakerID:
    def __init__(self, store: VoiceStore, embed: Callable[[np.ndarray], np.ndarray], high: Optional[float] = None, low: Optional[float] = None) -> None:
        self.store, self.embed = store, embed
        self.high = high if high is not None else float(os.environ.get("VANTA_VOICE_HIGH", "0.55"))     # sure it is them
        self.low = low if low is not None else float(os.environ.get("VANTA_VOICE_LOW", "0.40"))         # below this, definitely someone else

    # ── enrolling ────────────────────────────────────────────────────────
    def enroll(self, name: str, role: str, clips: list[np.ndarray], person: Optional[int] = None) -> dict:
        """Save voiceprints from clips of speech. Returns how consistent the clips were, so a noisy recording can be redone."""
        good = [c for c in clips if speech_stats(c)["speech"] >= ENROLL_SPEECH]
        if len(good) < max(1, min(3, len(clips))) or not good:
            raise ValueError("I need about 3 clips with at least 1.5 seconds of speech each. Try again somewhere quieter.")
        vecs = [_unit(self.embed(c)) for c in good]
        sims = [cosine(vecs[i], vecs[j]) for i in range(len(vecs)) for j in range(i + 1, len(vecs))]
        pid = person if person is not None else self.store.add_person(name, role)
        for v in vecs:
            self.store.add_print(pid, v)
        spread = float(np.mean(sims)) if sims else 1.0
        return {"person": pid, "clips": len(vecs), "consistency": round(spread, 2),
                "warning": "" if spread >= self.high else "Those clips didn't sound very alike. Re-record in a quieter place, close to the mic."}

    # ── listening ────────────────────────────────────────────────────────
    def _best(self, vec: np.ndarray, role: Optional[str] = None) -> tuple[Optional[dict], float]:
        best, score = None, -1.0
        for p in self.store.people(role):
            ps = self.store.prints(p["id"])
            if not ps:
                continue
            s = float(np.mean(sorted((cosine(vec, x) for x in ps), reverse=True)[:3]))   # the 3 closest prints, so one odd clip can't dominate
            if s > score:
                best, score = p, s
        return best, score

    def identify(self, clip: np.ndarray) -> Match:
        st = speech_stats(clip)
        if st["speech"] < 0.2:
            return Match("silent", note="I didn't hear speech.")
        if st["speech"] < MIN_SPEECH:
            return Match("short", note="Too short to tell who it is.")
        vec = _unit(self.embed(clip))
        self.store.expire_unknown()
        known, score = self._best(vec)                       # owners, guests and remembered strangers together
        if known and known["role"] in ("owner", "guest"):
            if score >= self.high:
                self.store.touch(known["id"])
                return Match(known["role"], known["name"], known["id"], score)
            if score >= self.low:
                return Match("unclear", known["name"], known["id"], score, f"Sounds a bit like {known['name']}, but I'm not sure.")
        # a stranger: recognise a returning one, otherwise remember this voice as a new unknown
        stranger, s2 = self._best(vec, "unknown")
        if stranger and s2 >= self.high:
            self.store.add_print(stranger["id"], vec); self.store.touch(stranger["id"])
            return Match("unknown", stranger["name"], stranger["id"], s2, "A voice I've heard before but don't know.")
        n = len(self.store.people("unknown")) + 1
        pid = self.store.add_person(f"Unknown voice {n}", "unknown")
        self.store.add_print(pid, vec)
        return Match("unknown", f"Unknown voice {n}", pid, max(score, 0.0), "A voice I don't know.")
