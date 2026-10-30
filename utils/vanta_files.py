"""The VANTA folder: one place on this computer where files VANTA makes for you land, and where you download them from.
Nothing outside this folder is ever written, and an existing file is never overwritten."""
from __future__ import annotations

import os
import re
import time
from pathlib import Path

MAX_BYTES = 50 * 1024 * 1024


def folder() -> Path:
    p = Path(os.environ.get("VANTA_FILES") or (Path.home() / "Documents" / "VANTA")).expanduser()
    p.mkdir(parents=True, exist_ok=True)
    return p


def clean_name(name: str) -> str:
    n = re.sub(r"[^\w.\- ]", "_", Path(str(name).replace("\\", "/")).name).strip(" .")
    return n[:120] or "file"


def unique(base: Path, name: str) -> Path:
    p = base / clean_name(name)
    stem, suf, i = p.stem, p.suffix, 2
    while p.exists():
        p = base / f"{stem} ({i}){suf}"
        i += 1
    return p


def save_bytes(name: str, data: bytes, base: Path | None = None) -> Path:
    if len(data) > MAX_BYTES:
        raise ValueError("That file is too big (50 MB limit).")
    base = base or folder()
    base.mkdir(parents=True, exist_ok=True)
    p = unique(base, name)
    p.write_bytes(data)
    return p


def listing(base: Path | None = None, limit: int = 60) -> list[dict]:
    base = base or folder()
    rows = [{"name": f.name, "size": f.stat().st_size, "ts": f.stat().st_mtime} for f in base.iterdir() if f.is_file() and not f.is_symlink() and not f.name.startswith(".")]
    return sorted(rows, key=lambda r: -r["ts"])[:limit]


def resolve(name: str, base: Path | None = None) -> Path | None:
    """A file inside the folder, by plain name. Anything with a path or that is a symlink is refused."""
    base = (base or folder()).resolve()
    if name != Path(name).name or name.startswith("."):
        return None
    p = base / name
    return p if p.is_file() and not p.is_symlink() and p.resolve().parent == base else None
