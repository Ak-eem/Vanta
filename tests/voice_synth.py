"""Crude synthetic "voices" for tests: a buzzing pulse train shaped by vowel-like resonances. Not real speech, only good enough to check the plumbing."""
import numpy as np

VOWELS = [(730, 1090, 2440), (270, 2290, 3010), (300, 870, 2240), (530, 1840, 2480), (570, 840, 2410)]


def voice(f0: float, scale: float, seconds: float = 4.0, seed: int = 0, rate: int = 16000) -> np.ndarray:
    from scipy.signal import lfilter
    rng = np.random.default_rng(seed)
    n = int(seconds * rate)
    out = np.zeros(n, dtype=np.float64)
    syl = int(0.18 * rate)
    for s in range(0, n, syl):
        seg = min(syl, n - s)
        pitch = f0 * (1 + 0.06 * rng.standard_normal())
        t = np.arange(seg)
        src = ((t * pitch / rate) % 1.0 < 0.04).astype(np.float64) - 0.04       # pulse train
        y = src
        for fm in VOWELS[rng.integers(0, len(VOWELS))]:
            fc, bw = fm * scale, 90.0
            r = np.exp(-np.pi * bw / rate)
            th = 2 * np.pi * fc / rate
            y = lfilter([1 - r], [1, -2 * r * np.cos(th), r * r], y)
        env = np.hanning(seg) ** 0.5
        out[s:s + seg] += y * env
    out += rng.standard_normal(n) * 0.002
    out /= np.abs(out).max() + 1e-9
    return (out * 0.5).astype(np.float32)
