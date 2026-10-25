"""Standing instructions and notes, loaded at the start of every run (like CLAUDE.md and auto memory in the public design)."""
from __future__ import annotations

from pathlib import Path

HOME = Path.home() / ".vanta"


def load_instructions(project: Path, home: Path = HOME, limit: int = 6000) -> str:
    parts = []
    for label, p in (("Your standing instructions", home / "VANTA.md"), ("Instructions for this project", Path(project) / "VANTA.md")):
        try:
            t = p.read_text(encoding="utf-8")[:limit].strip()
            if t:
                parts.append(f"[{label}]\n{t}")
        except OSError:
            pass
    return "\n\n".join(parts)


def load_notes(home: Path = HOME, max_lines: int = 200, max_bytes: int = 25_000) -> str:
    try:
        t = (home / "agent_notes.md").read_text(encoding="utf-8")[:max_bytes]
    except OSError:
        return ""
    return "\n".join(t.splitlines()[:max_lines]).strip()


def add_note(text: str, home: Path = HOME) -> None:
    home.mkdir(parents=True, exist_ok=True)
    with open(home / "agent_notes.md", "a", encoding="utf-8") as f:
        f.write("- " + " ".join(text.split())[:300] + "\n")
