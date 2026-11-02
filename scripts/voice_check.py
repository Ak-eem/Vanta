"""Check how well voice recognition tells YOUR voices apart, using recordings you make, before trusting it.

Put a few WAV (or any audio ffmpeg can read isn't needed: WAV only) files in a folder, named  <who>_<number>.wav  e.g.
    akeem_1.wav akeem_2.wav akeem_3.wav sister_1.wav sister_2.wav friend_1.wav
Each should be 4+ seconds of normal talking. Then:
    python scripts/voice_check.py my_voices
It prints how alike each pair of people sounds and suggests the two settings (VANTA_VOICE_HIGH / VANTA_VOICE_LOW)."""
from __future__ import annotations

import sys
from itertools import combinations
from pathlib import Path

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from voiceid import embed  # noqa: E402
from voiceid.audio import read_wav  # noqa: E402
from voiceid.ident import cosine, _unit  # noqa: E402


def suggest(same: list[float], diff: list[float]) -> dict:
    """High = a bit above the most-alike stranger; low = a bit under the least-alike pair of the same person."""
    if not same or not diff:
        return {}
    worst_same, best_diff = min(same), max(diff)
    gap = worst_same - best_diff
    mid = (worst_same + best_diff) / 2
    return {"gap": round(gap, 2), "high": round(max(mid, best_diff + 0.05), 2), "low": round(max(0.2, min(mid, worst_same) - 0.1), 2),
            "separable": gap > 0.05}


def main(argv: list[str]) -> int:
    if len(argv) < 2:
        print(__doc__); return 2
    folder = Path(argv[1])
    files = sorted(folder.glob("*.wav"))
    if not files:
        print(f"No .wav files in {folder}"); return 2
    model = embed.ensure_model(Path.home() / ".vanta" / "models")
    emb = embed.SherpaEmbedder(model)
    people: dict[str, list[np.ndarray]] = {}
    for f in files:
        who = f.stem.rsplit("_", 1)[0].lower()
        people.setdefault(who, []).append(_unit(emb(read_wav(f.read_bytes()))))
    same, diff = [], []
    print("\nHow alike (1.0 = identical):")
    for who, v in people.items():
        s = [cosine(a, b) for a, b in combinations(v, 2)]
        same += s
        print(f"  {who:12s} with itself   : {np.mean(s):.2f}  (lowest {min(s):.2f})" if s else f"  {who:12s} only one clip")
    for (a, va), (b, vb) in combinations(people.items(), 2):
        s = [cosine(x, y) for x in va for y in vb]
        diff += s
        print(f"  {a} vs {b:10s}: {np.mean(s):.2f}  (highest {max(s):.2f})")
    r = suggest(same, diff)
    if not r:
        print("\nNeed at least two people, and two clips of someone, to suggest settings."); return 1
    print(f"\nGap between 'same person' and 'different person': {r['gap']}")
    if r["separable"]:
        print(f"Suggested: VANTA_VOICE_HIGH={r['high']}  VANTA_VOICE_LOW={r['low']}  (put in your .env)")
    else:
        print("These voices are too close for me to separate reliably. Re-record in a quieter room, closer to the mic, with longer clips.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
