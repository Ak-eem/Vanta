"""Turning a few seconds of speech into a voiceprint. Uses a small open model (WeSpeaker ResNet34, about 26 MB) through sherpa-onnx.
Runs on the CPU. The model downloads once into ~/.vanta/models the first time you set up voices."""
from __future__ import annotations

import urllib.request
from pathlib import Path
from typing import Optional

import numpy as np

MODEL_NAME = "wespeaker_en_voxceleb_resnet34.onnx"
MODEL_URL = "https://github.com/k2-fsa/sherpa-onnx/releases/download/speaker-recongition-models/" + MODEL_NAME


def available() -> bool:
    try:
        import sherpa_onnx  # noqa: F401
        return True
    except Exception:
        return False


def model_path(folder: Path) -> Path:
    return Path(folder) / MODEL_NAME


def ensure_model(folder: Path, fetch=urllib.request.urlretrieve) -> Path:
    p = model_path(folder)
    if p.exists() and p.stat().st_size > 1_000_000:
        return p
    p.parent.mkdir(parents=True, exist_ok=True)
    tmp = p.with_suffix(".part")
    try:
        fetch(MODEL_URL, str(tmp))
        tmp.replace(p)
    except Exception as exc:
        tmp.unlink(missing_ok=True)
        raise RuntimeError(f"Couldn't download the voice model ({exc}). Check your internet and try again.") from exc
    return p


class SherpaEmbedder:
    def __init__(self, model: Path, threads: int = 2) -> None:
        import sherpa_onnx
        cfg = sherpa_onnx.SpeakerEmbeddingExtractorConfig(model=str(model), num_threads=threads, debug=False, provider="cpu")
        if not cfg.validate():
            raise RuntimeError("The voice model file looks damaged. Delete it and set up again.")
        self.ex = sherpa_onnx.SpeakerEmbeddingExtractor(cfg)

    def __call__(self, samples: np.ndarray) -> np.ndarray:
        s = self.ex.create_stream()
        s.accept_waveform(sample_rate=16000, waveform=np.asarray(samples, dtype=np.float32))
        s.input_finished()
        if not self.ex.is_ready(s):
            raise RuntimeError("That clip is too short to measure.")
        return np.asarray(self.ex.compute(s), dtype=np.float32)
