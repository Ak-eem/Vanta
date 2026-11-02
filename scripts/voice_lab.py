"""Voice lab: hear and time open-source voices on YOUR laptop before you commit to one.

    python scripts/voice_lab.py                 # tries every engine that is installed
    python scripts/voice_lab.py --engines kokoro,piper
    python scripts/voice_lab.py --setup         # prints the install commands

It speaks the same five lines with every voice, saves WAV files into ./voice_lab/, times each one, and writes voice_lab/compare.html
with players side by side and a score box per voice. Open that page and listen with headphones.

Speed is shown as "x real time": 3.0x means a 6 second line took 2 seconds to make. Under 1.0x is too slow for live talking.
Delivery cues like (urgent) are removed here, because none of these engines act them out by themselves."""
from __future__ import annotations

import argparse
import html
import importlib.util
import json
import re
import shutil
import subprocess
import sys
import time
import wave
from dataclasses import dataclass, field
from pathlib import Path
from typing import Callable, Optional

LINES = [
    ("Calm", "Good afternoon. Your laptop is running fine, and the battery is at eighty percent."),
    ("Urgent", "(urgent) Heads up! A program you don't recognise is sending data out right now. Do you want me to stop it?"),
    ("Dry humour", "(dry) Well, that went about as well as expected. Third time's the charm, apparently."),
    ("Warm, longer", "I found three good sources on that. The first one says headset sales are growing, but prices keep falling, and that's the part worth watching."),
    ("Numbers and names", "Meeting at 4:30 with Chidi, then call the bank about the 12,500 naira transfer."),
]

SETUP = """Install what you want to try (each is optional; the lab skips what is missing):

  Kitten TTS (Apache-2.0, tiny):   pip install kitten-tts
  Kokoro     (Apache-2.0, good):   pip install kokoro soundfile      (also needs espeak-ng installed on the system)
  Piper      (GPL-3.0, fast):      pip install piper-tts            (voices download automatically on first run)

Then run:  python scripts/voice_lab.py
"""

CUE = re.compile(r"\(\s*(?:urgent|excited|gentle|dry|sighs|laughs)\s*\)\s*", re.I)


def plain(text: str) -> str:
    return CUE.sub("", text).strip()


def wav_seconds(path: Path) -> float:
    with wave.open(str(path), "rb") as w:
        return w.getnframes() / float(w.getframerate() or 1)


@dataclass
class Voice:
    id: str                         # shown in the page, e.g. "kokoro / af_heart"
    engine: str
    note: str
    speak: Callable[[str, Path], None]   # writes a WAV file
    load_seconds: float = 0.0
    includes_startup: bool = False       # True when each call starts a new process (speed is then pessimistic)


@dataclass
class Result:
    voice: str; engine: str; label: str; text: str; file: str; seconds: float = 0.0; made_in: float = 0.0; error: str = ""

    @property
    def speed(self) -> float:
        return round(self.seconds / self.made_in, 2) if self.made_in > 0 and self.seconds > 0 else 0.0


# ── engines ──────────────────────────────────────────────────────────────────

def _has(mod: str) -> bool:
    try:
        return importlib.util.find_spec(mod) is not None
    except Exception:
        return False


def kokoro_voices() -> list[Voice]:
    if not _has("kokoro"):
        return []
    import numpy as np
    import soundfile as sf
    from kokoro import KPipeline  # type: ignore
    t0 = time.time()
    pipe = KPipeline(lang_code="a")
    load = time.time() - t0
    out = []
    for vid, note in (("af_heart", "female, warm"), ("am_michael", "male")):
        def speak(text, path, vid=vid):
            chunks = [audio for _, _, audio in pipe(text, voice=vid)]
            sf.write(str(path), np.concatenate([np.asarray(c) for c in chunks]), 24000)
        out.append(Voice(f"kokoro / {vid}", "Kokoro", note, speak, load))
    return out


def piper_voices(folder: Path) -> list[Voice]:
    if not _has("piper"):
        return []
    out = []
    for name, note in (("en_US-lessac-medium", "US, clear"), ("en_US-ryan-high", "US male, higher quality")):
        model = folder / f"{name}.onnx"
        if not model.exists():
            folder.mkdir(parents=True, exist_ok=True)
            subprocess.run([sys.executable, "-m", "piper.download_voices", name, "--download-dir", str(folder)], check=False)
        if not model.exists():
            print(f"  (could not download Piper voice {name}; skipping)")
            continue

        def speak(text, path, model=model):
            subprocess.run([sys.executable, "-m", "piper", "-m", str(model), "-f", str(path), "--", text], check=True, capture_output=True)
        out.append(Voice(f"piper / {name}", "Piper", note, speak, includes_startup=True))
    return out


def kitten_voices() -> list[Voice]:
    exe = shutil.which("kitten-tts")
    if not exe:
        return []
    out = []
    for model, voice, note in (("nano", "Bella", "smallest, 25 MB"), ("mini", "Bella", "biggest, 80 MB"), ("mini", "Leo", "biggest, male")):
        def speak(text, path, model=model, voice=voice):
            subprocess.run([exe, "--model", model, "--voice", voice, "--text", text, "--out", str(path)], check=True, capture_output=True)
        out.append(Voice(f"kitten {model} / {voice}", "Kitten", note, speak, includes_startup=True))
    return out


# ── the lab ──────────────────────────────────────────────────────────────────

def run_lab(voices: list[Voice], lines: list[tuple[str, str]], out_dir: Path, log: Callable[[str], None] = print) -> list[Result]:
    out_dir.mkdir(parents=True, exist_ok=True)
    results: list[Result] = []
    for v in voices:
        log(f"\n{v.id}  ({v.note})")
        slug = re.sub(r"[^a-z0-9]+", "-", v.id.lower()).strip("-")
        for i, (label, raw) in enumerate(lines):
            text = plain(raw)
            path = out_dir / f"{slug}-{i + 1}.wav"
            r = Result(v.id, v.engine, label, text, path.name)
            t0 = time.time()
            try:
                v.speak(text, path)
                r.made_in = time.time() - t0
                r.seconds = wav_seconds(path)
                log(f"  {label:<18} {r.seconds:5.1f}s of speech in {r.made_in:5.2f}s  -> {r.speed}x real time")
            except Exception as exc:
                r.error = str(exc)[:200]
                log(f"  {label:<18} FAILED: {r.error}")
            results.append(r)
    return results


def summary(results: list[Result]) -> dict[str, dict]:
    out: dict[str, dict] = {}
    for r in results:
        d = out.setdefault(r.voice, {"engine": r.engine, "made": 0.0, "speech": 0.0, "failed": 0})
        if r.error:
            d["failed"] += 1
        else:
            d["made"] += r.made_in; d["speech"] += r.seconds
    for d in out.values():
        d["speed"] = round(d["speech"] / d["made"], 2) if d["made"] > 0 else 0.0
    return out


def write_page(results: list[Result], voices: list[Voice], out_dir: Path) -> Path:
    notes = {v.id: v for v in voices}
    summ = summary(results)
    rows = []
    for vid, d in summ.items():
        v = notes[vid]
        verdict = "failed" if d["speed"] == 0 else ("fast enough for live talking" if d["speed"] >= 1.5 else "borderline" if d["speed"] >= 1.0 else "too slow for live talking")
        warn = " (each line includes start-up time, so the real speed is better than this)" if v.includes_startup else ""
        rows.append(f"<tr><td>{html.escape(vid)}</td><td>{html.escape(v.note)}</td><td>{d['speed']}x</td><td>{verdict}{warn}</td>"
                    f"<td><select data-k='{html.escape(vid)}'><option>—</option>" + "".join(f"<option>{n}</option>" for n in range(5, 0, -1)) + "</select></td></tr>")
    blocks = []
    for i, (label, raw) in enumerate(LINES):
        cells = []
        for r in (x for x in results if x.label == label):
            body = f"<span class='bad'>failed: {html.escape(r.error)}</span>" if r.error else f"<audio controls preload='none' src='{html.escape(r.file)}'></audio><small>{r.speed}x</small>"
            cells.append(f"<div class='c'><b>{html.escape(r.voice)}</b>{body}</div>")
        blocks.append(f"<h3>{html.escape(label)}</h3><p class='t'>{html.escape(plain(raw))}</p><div class='g'>{''.join(cells)}</div>")
    page = f"""<!doctype html><meta charset=utf-8><meta name=viewport content="width=device-width,initial-scale=1"><title>VANTA voice lab</title>
<style>body{{font:15px system-ui;max-width:1100px;margin:24px auto;padding:0 16px;color:#111}}table{{border-collapse:collapse;width:100%}}td,th{{border-bottom:1px solid #ddd;padding:8px;text-align:left}}
.g{{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:10px}}.c{{border:1px solid #ddd;border-radius:10px;padding:10px}}.c b{{display:block;font-size:13px;margin-bottom:6px}}
audio{{width:100%}}.t{{color:#555}}.bad{{color:#b00}}small{{color:#666}}</style>
<h1>VANTA voice lab</h1><p>Listen with headphones. Score each voice 1-5 (saved in this browser). Speed: how many seconds of speech are made per second of waiting. Under 1.0x is too slow for live talking.</p>
<table><tr><th>Voice</th><th>About</th><th>Speed</th><th>Live talking?</th><th>Your score</th></tr>{''.join(rows)}</table>
{''.join(blocks)}
<script>document.querySelectorAll('select[data-k]').forEach(s=>{{const k='vlab:'+s.dataset.k;s.value=localStorage.getItem(k)||'—';s.onchange=()=>localStorage.setItem(k,s.value)}})</script>"""
    p = out_dir / "compare.html"
    p.write_text(page, encoding="utf-8")
    (out_dir / "results.json").write_text(json.dumps([r.__dict__ | {"speed": r.speed} for r in results], indent=1), encoding="utf-8")
    return p


def main(argv: Optional[list[str]] = None) -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--engines", default="kokoro,piper,kitten", help="comma list from: kokoro, piper, kitten")
    ap.add_argument("--out", default="voice_lab")
    ap.add_argument("--setup", action="store_true", help="show install commands and exit")
    a = ap.parse_args(argv)
    if a.setup:
        print(SETUP); return 0
    out = Path(a.out)
    voices: list[Voice] = []
    for name in [x.strip() for x in a.engines.split(",") if x.strip()]:
        try:
            got = {"kokoro": kokoro_voices, "piper": lambda: piper_voices(out / "piper_voices"), "kitten": kitten_voices}[name]()
        except KeyError:
            print(f"unknown engine {name!r}"); continue
        except Exception as exc:
            print(f"{name}: could not start ({exc})"); continue
        print(f"{name}: {'found ' + str(len(got)) + ' voices' if got else 'not installed, skipping'}")
        voices += got
    if not voices:
        print("\nNothing to test yet.\n" + SETUP); return 1
    results = run_lab(voices, LINES, out)
    page = write_page(results, voices, out)
    print(f"\nDone. Open this page and listen:\n  {page.resolve()}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
