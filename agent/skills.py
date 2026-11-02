"""Skills: short how-to files VANTA reads when a task matches. Not search: a saved method (steps, checks, pitfalls).
Each is a markdown file with a one-line 'description' in front. Sources, later ones win: built-in `skills/`, `~/.vanta/skills`, `<project>/.vanta/skills`."""
from __future__ import annotations

import re
from pathlib import Path

BUILTIN = Path(__file__).resolve().parent.parent / "skills"
HOME = Path.home() / ".vanta"


def _parse(p: Path) -> dict | None:
    try:
        t = p.read_text(encoding="utf-8")[:12000]
    except OSError:
        return None
    m = re.match(r"---\s*\n(.*?)\n---\s*\n(.*)", t, re.S)
    meta, body = (m.group(1), m.group(2)) if m else ("", t)
    d = re.search(r"^description:\s*(.+)$", meta, re.M)
    n = re.search(r"^name:\s*(.+)$", meta, re.M)
    return {"name": (n.group(1).strip() if n else p.stem).lower(), "description": (d.group(1).strip() if d else body.strip().splitlines()[0][:120] if body.strip() else ""), "body": body.strip()}


def load_all(project: Path | None = None, home: Path = HOME, builtin: Path = BUILTIN) -> dict[str, dict]:
    out: dict[str, dict] = {}
    dirs = [builtin, home / "skills"] + ([Path(project) / ".vanta" / "skills"] if project else [])
    for d in dirs:
        for p in sorted(d.glob("*.md")) if d.is_dir() else []:
            s = _parse(p)
            if s:
                out[s["name"]] = s
    return out


def index(skills: dict[str, dict]) -> str:
    """One line per skill, put in the prompt so the model knows what exists without loading every body."""
    return "\n".join(f"- {s['name']}: {s['description']}" for s in skills.values())
