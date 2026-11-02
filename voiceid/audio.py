"""Reading the WAV the browser sends (16-bit PCM). Anything else is converted to mono 16 kHz floats."""
from __future__ import annotations

import io
import wave

import numpy as np

TARGET = 16000


def read_wav(data: bytes) -> np.ndarray:
    """WAV bytes -> mono float32 at 16 kHz in [-1, 1]. Raises ValueError for anything that is not 16-bit PCM WAV."""
    try:
        with wave.open(io.BytesIO(data), "rb") as w:
            ch, width, rate, n = w.getnchannels(), w.getsampwidth(), w.getframerate(), w.getnframes()
            raw = w.readframes(n)
    except (wave.Error, EOFError) as exc:
        raise ValueError("That isn't a WAV recording.") from exc
    if width != 2:
        raise ValueError("Only 16-bit recordings are supported.")
    x = np.frombuffer(raw, dtype="<i2").astype(np.float32) / 32768.0
    if ch > 1:
        x = x[: len(x) // ch * ch].reshape(-1, ch).mean(axis=1)
    if rate != TARGET and len(x):
        t = np.linspace(0, len(x) - 1, int(len(x) * TARGET / rate))
        x = np.interp(t, np.arange(len(x)), x).astype(np.float32)
    return x


def write_wav(x: np.ndarray, rate: int = TARGET) -> bytes:
    buf = io.BytesIO()
    with wave.open(buf, "wb") as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(rate)
        w.writeframes((np.clip(x, -1, 1) * 32767).astype("<i2").tobytes())
    return buf.getvalue()


def speech_stats(x: np.ndarray, rate: int = TARGET) -> dict:
    """Seconds of audio and seconds that look like speech (loud enough compared with the quiet parts)."""
    if len(x) < rate // 10:
        return {"seconds": len(x) / rate, "speech": 0.0, "loud": 0.0}
    frame = rate // 50
    n = len(x) // frame
    e = np.sqrt((x[: n * frame].reshape(n, frame) ** 2).mean(axis=1) + 1e-12)
    peak, floor = float(np.percentile(e, 95)), float(np.percentile(e, 10))
    if peak < 0.02:                                       # nothing louder than a quiet room
        return {"seconds": len(x) / rate, "speech": 0.0, "loud": float(e.max())}
    # loud compared with the quiet gaps, but never above half the peak, so non-stop talking still counts
    thr = min(max(0.012, floor * 2.5), peak * 0.5)
    return {"seconds": len(x) / rate, "speech": float((e > thr).sum() * frame / rate), "loud": float(e.max())}
