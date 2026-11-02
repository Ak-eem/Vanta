"""Glue between the web server and the voice-recognition pieces. Everything is optional: if the voice model isn't set up, VANTA works as before."""
from __future__ import annotations

import threading
from pathlib import Path
from typing import Callable, Optional

from . import embed, ticket
from .audio import read_wav, speech_stats
from .ident import SpeakerID
from .store import VoiceStore


class VoiceService:
    def __init__(self, home: Path, secret: str, embedder_factory: Optional[Callable] = None) -> None:
        self.home = Path(home)
        self.secret = secret.encode()
        self.store = VoiceStore(self.home / "voices.db")
        self._factory = embedder_factory
        self._sid: Optional[SpeakerID] = None
        self._lock = threading.Lock()
        self.error = ""

    # ── state ────────────────────────────────────────────────────────────
    def _model_dir(self) -> Path:
        return self.home / "models"

    def installed(self) -> bool:
        if self._factory:
            return True
        p = embed.model_path(self._model_dir())
        return embed.available() and p.exists() and p.stat().st_size > 1_000_000

    def enrolled(self) -> bool:
        return any(p["role"] == "owner" and self.store.count(p["id"]) for p in self.store.people())

    def status(self) -> dict:
        return {"supported": embed.available() or bool(self._factory), "installed": self.installed(),
                "enrolled": self.enrolled(), "people": self.people(), "error": self.error}

    def active(self) -> bool:
        """Voice recognition only gates things once the owner has enrolled."""
        return self.installed() and self.enrolled()

    def setup(self) -> None:
        if not (embed.available() or self._factory):
            raise RuntimeError("Voice recognition needs one extra package: pip install sherpa-onnx")
        if not self._factory:
            embed.ensure_model(self._model_dir())
        self._engine()

    def _engine(self) -> SpeakerID:
        with self._lock:
            if self._sid is None:
                fn = self._factory() if self._factory else embed.SherpaEmbedder(embed.ensure_model(self._model_dir()))
                self._sid = SpeakerID(self.store, fn)
            return self._sid

    # ── people ───────────────────────────────────────────────────────────
    def people(self) -> list[dict]:
        return [{"id": p["id"], "name": p["name"], "role": p["role"], "prints": self.store.count(p["id"])} for p in self.store.people()]

    def enroll(self, name: str, role: str, wavs: list[bytes], person: Optional[int] = None) -> dict:
        if role not in ("owner", "guest"):
            raise ValueError("Role must be owner or guest.")
        name = (name or "").strip()[:40]
        if not name:
            raise ValueError("Give this voice a name.")
        clips = [read_wav(w) for w in wavs]
        return self._engine().enroll(name, role, clips, person)

    def rename(self, pid: int, name: Optional[str] = None, role: Optional[str] = None) -> None:
        if role not in (None, "owner", "guest", "unknown"):
            raise ValueError("Bad role.")
        self.store.update(pid, name=(name or "").strip()[:40] or None, role=role)

    def remove(self, pid: int) -> None:
        self.store.remove(pid)

    def forget_unknown(self) -> int:
        return self.store.forget_unknown()

    # ── listening ────────────────────────────────────────────────────────
    def identify(self, wav: bytes, text: str) -> dict:
        """Who said it? Returns {speaker:{...}, ticket}. The ticket is only given when the server is the one that heard the voice."""
        if not self.active():
            return {"speaker": {"status": "off"}, "ticket": ""}
        m = self._engine().identify(read_wav(wav))
        info = m.public()
        if m.role in ("owner", "guest", "unknown", "unclear") and text:
            tk = ticket.make(self.secret, m.role, m.name or "", text)
        else:
            tk = ""
        return {"speaker": info, "ticket": tk}

    def check(self, tk: str, text: str) -> Optional[dict]:
        return ticket.verify(self.secret, tk, text)

    def has_speech(self, wav: bytes) -> bool:
        return speech_stats(read_wav(wav))["speech"] >= 0.3
