"""Measure this computer, then say in plain words how fast different kinds of local models would run.

Run it directly:  python -m setups.probe
"""
from __future__ import annotations

import os
import time
from pathlib import Path
from typing import Optional

import psutil

HOME = Path.home() / ".vanta"
OS_RESERVE_GB = 3.0   # memory the system and VANTA itself keep


def disk_read_mb_s(folder: Path = HOME / "probe", size_mb: int = 256) -> dict:
    """Write a temp file, then read it back in big chunks. Best effort at bypassing the OS cache."""
    folder.mkdir(parents=True, exist_ok=True)
    path = folder / "probe.bin"
    chunk = os.urandom(8 * 1024 * 1024)
    try:
        with open(path, "wb") as f:
            for _ in range(max(1, size_mb // 8)):
                f.write(chunk)
            f.flush()
            os.fsync(f.fileno())
        dropped = False
        if hasattr(os, "posix_fadvise"):
            try:
                fd = os.open(path, os.O_RDONLY)
                os.posix_fadvise(fd, 0, 0, os.POSIX_FADV_DONTNEED)
                os.close(fd)
                dropped = True
            except OSError:
                pass
        t0, n = time.perf_counter(), 0
        with open(path, "rb", buffering=0) as f:
            while True:
                b = f.read(8 * 1024 * 1024)
                if not b:
                    break
                n += len(b)
        dt = max(time.perf_counter() - t0, 1e-6)
        return {"mb_s": round(n / dt / 1e6, 1), "cache_dropped": dropped}
    finally:
        try:
            path.unlink()
        except OSError:
            pass


def memory_gb_s(size_mb: int = 256, reps: int = 3) -> float:
    """Copy speed across all cores, like a model reading its weights. Falls back to a single thread without numpy."""
    try:
        import numpy as np
    except ImportError:
        src = bytearray(os.urandom(1024) * (size_mb * 1024))
        best = 0.0
        for _ in range(reps):
            t0 = time.perf_counter()
            dst = bytes(src)
            best = max(best, 2 * len(src) / max(time.perf_counter() - t0, 1e-6) / 1e9)
            del dst
        return round(best, 1)
    from concurrent.futures import ThreadPoolExecutor
    threads = psutil.cpu_count() or 1
    n = size_mb * 1024 * 1024 // 4
    src = np.ones(n, dtype="float32")
    dst = np.empty_like(src)
    parts = [(i * n // threads, (i + 1) * n // threads) for i in range(threads)]
    best = 0.0
    with ThreadPoolExecutor(threads) as ex:
        for _ in range(reps):
            t0 = time.perf_counter()
            list(ex.map(lambda ab: np.copyto(dst[ab[0]:ab[1]], src[ab[0]:ab[1]]), parts))
            best = max(best, 2 * src.nbytes / max(time.perf_counter() - t0, 1e-6) / 1e9)
    return round(best, 1)


def cpu_gflops(n: int = 768) -> Optional[float]:
    try:
        import numpy as np
    except ImportError:
        return None
    a = np.random.rand(n, n).astype("float32")
    b = np.random.rand(n, n).astype("float32")
    a @ b
    t0 = time.perf_counter()
    for _ in range(3):
        a @ b
    dt = max(time.perf_counter() - t0, 1e-6)
    return round(3 * 2 * n ** 3 / dt / 1e9, 1)


def probe(size_mb: int = 256, folder: Path = HOME / "probe") -> dict:
    vm = psutil.virtual_memory()
    return {"ram_total_gb": round(vm.total / 1e9, 1), "ram_free_gb": round(vm.available / 1e9, 1),
            "cpu_cores": psutil.cpu_count(logical=False) or psutil.cpu_count() or 1,
            "disk": disk_read_mb_s(folder, size_mb), "mem_gb_s": memory_gb_s(), "gflops": cpu_gflops()}


MODELS = [  # name, file size in GB at 4-bit, GB read for each word (active part), params active in billions, mixture-of-experts?
    ("A 3B local model", 2.0, 2.0, 3, False),
    ("A 7-8B local model", 4.8, 4.8, 8, False),
    ("A 30B model with 3B active (mixture-of-experts)", 17.0, 1.7, 3, True),
    ("A 32B regular model", 18.0, 18.0, 32, False),
    ("A 70B regular model", 40.0, 40.0, 70, False),
    ("A 1T mixture-of-experts model (32B active)", 500.0, 16.0, 32, True),
]


def estimate(rep: dict) -> list[dict]:
    """Rough words-per-second (or seconds-per-word) for each model size on this machine. Estimates, not promises."""
    out = []
    usable = max(rep["ram_total_gb"] - OS_RESERVE_GB, 0.5)
    disk_gb_s = max(rep["disk"]["mb_s"], 1) / 1000
    mem_gb_s = max(rep["mem_gb_s"], 0.1) * 0.6          # real code reaches roughly 60% of peak
    for name, size_gb, read_gb, active_b, moe in MODELS:
        if size_gb <= usable:
            tok_s = mem_gb_s / read_gb
            if rep.get("gflops"):
                tok_s = min(tok_s, rep["gflops"] * 0.5 / (2 * active_b))
            mode, rate = "fits in memory", tok_s * 0.75                          # tokens -> words
            out.append({"model": name, "mode": mode, "words_per_s": round(rate, 2), "s_per_word": round(1 / rate, 2) if rate else None})
        else:
            # Share of each word's reading already in memory. Regular models read everything every word;
            # mixture-of-experts reuse popular experts, so a cache helps a bit more (rough 1.5x).
            cached = min(1.0, (usable * 0.7 / size_gb) * (1.5 if moe else 1.0))
            sec = read_gb * (1 - cached) / disk_gb_s + read_gb * cached / mem_gb_s
            out.append({"model": name, "mode": "does not fit, so it streams from disk", "words_per_s": round(0.75 / sec, 4), "s_per_word": round(sec / 0.75, 1)})
    return out


def describe(rep: dict) -> str:
    lines = [f"Memory {rep['ram_total_gb']} GB ({rep['ram_free_gb']} GB free now), {rep['cpu_cores']} CPU cores.",
             f"Disk reads about {rep['disk']['mb_s']} MB/s" + ("" if rep["disk"]["cache_dropped"] else " (the system cache may make this look faster than it is)") + ".",
             f"Memory speed about {rep['mem_gb_s']} GB/s" + (f", CPU about {rep['gflops']} GFLOPS." if rep["gflops"] else ".")]
    for e in estimate(rep):
        speed = f"about {e['words_per_s']} words/s" if e["words_per_s"] >= 0.5 else f"about {e['s_per_word']} seconds per word"
        lines.append(f"- {e['model']}: {e['mode']}, {speed}.")
    lines.append("These are estimates from simple tests. Real speed also depends on the program and how hot the laptop gets.")
    return "\n".join(lines)


if __name__ == "__main__":
    print(describe(probe()))
