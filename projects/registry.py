"""Projects VANTA knows about. Syncs to the phone like people and notes. VANTA only reads project folders
(file names, git status); it never edits them."""
from __future__ import annotations

import json
import re
import socket
import sqlite3
import subprocess
import time
import uuid
from pathlib import Path
from typing import Optional

DB_PATH = Path.home() / ".vanta" / "projects.db"
DEVICE = socket.gethostname()
STACK_HINTS = [("package.json", "Node"), ("pyproject.toml", "Python"), ("requirements.txt", "Python"), ("Cargo.toml", "Rust"), ("go.mod", "Go"),
               ("pom.xml", "Java"), ("composer.json", "PHP"), ("pubspec.yaml", "Flutter"), ("next.config.js", "Next.js"), ("vite.config.ts", "Vite")]


def _git(path: Path, *args: str) -> str:
    try:
        return subprocess.run(["git", "-C", str(path), *args], capture_output=True, text=True, timeout=5).stdout.strip()
    except Exception:
        return ""


class Projects:
    def __init__(self, path: Path = DB_PATH) -> None:
        self.path = path
        path.parent.mkdir(parents=True, exist_ok=True)
        with self._c() as c:
            c.execute("""CREATE TABLE IF NOT EXISTS projects(id TEXT PRIMARY KEY, name TEXT, folder TEXT, aliases TEXT, summary TEXT, stack TEXT,
                         status TEXT, next_step TEXT, created REAL, updated_at REAL, device_id TEXT, deleted INTEGER DEFAULT 0)""")

    def _c(self) -> sqlite3.Connection:
        c = sqlite3.connect(self.path, timeout=5)
        c.row_factory = sqlite3.Row
        return c

    def add(self, name: str, folder: str = "", summary: str = "", aliases: Optional[list] = None, status: str = "active", next_step: str = "") -> str:
        name = name.strip()[:60]
        if not name:
            raise ValueError("A project needs a name.")
        stack = ", ".join(sorted({label for f, label in STACK_HINTS if folder and (Path(folder) / f).exists()}))
        now = time.time()
        with self._c() as c:
            row = c.execute("SELECT id FROM projects WHERE deleted=0 AND lower(name)=?", (name.lower(),)).fetchone()
            if row:
                c.execute("UPDATE projects SET folder=COALESCE(NULLIF(?,''),folder), summary=COALESCE(NULLIF(?,''),summary), stack=COALESCE(NULLIF(?,''),stack), updated_at=? WHERE id=?",
                          (folder, summary, stack, now, row["id"]))
                return row["id"]
            pid = str(uuid.uuid4())
            c.execute("INSERT INTO projects VALUES(?,?,?,?,?,?,?,?,?,?,?,0)", (pid, name, folder, json.dumps(aliases or []), summary[:400], stack, status, next_step[:200], now, now, DEVICE))
            return pid

    def update(self, pid: str, **fields) -> None:
        ok = {k: v for k, v in fields.items() if k in ("summary", "status", "next_step", "folder", "name")}
        if not ok:
            return
        with self._c() as c:
            c.execute(f"UPDATE projects SET {','.join(k + '=?' for k in ok)}, updated_at=? WHERE id=?", [*ok.values(), time.time(), pid])

    def remove(self, pid: str) -> None:
        with self._c() as c:
            c.execute("UPDATE projects SET deleted=1, updated_at=? WHERE id=?", (time.time(), pid))

    def all(self) -> list[dict]:
        with self._c() as c:
            return [dict(r) for r in c.execute("SELECT * FROM projects WHERE deleted=0 ORDER BY updated_at DESC")]

    def health(self, p: dict) -> dict:
        """Read-only look at the folder: branch, uncommitted changes, last commit. Empty if it isn't a git repo or is missing."""
        f = Path(p.get("folder") or "")
        if not p.get("folder") or not f.is_dir():
            return {"exists": bool(p.get("folder")) and f.is_dir()}
        branch = _git(f, "rev-parse", "--abbrev-ref", "HEAD")
        if not branch:
            return {"exists": True}
        dirty = len([l for l in _git(f, "status", "--porcelain").splitlines() if l.strip()])
        last = _git(f, "log", "-1", "--format=%cr|%s").split("|", 1)
        return {"exists": True, "branch": branch, "uncommitted": dirty, "last_commit": last[0] if last else "", "last_message": last[1][:80] if len(last) > 1 else ""}

    def mentioned_in(self, text: str) -> list[dict]:
        low = text.lower()
        out = []
        for p in self.all():
            names = [p["name"].lower()] + [a.lower() for a in json.loads(p["aliases"] or "[]")]
            if any(n and re.search(rf"\b{re.escape(n)}\b", low) for n in names):
                out.append(p)
        return out

    def context_for(self, text: str) -> str:
        lines = []
        for p in self.mentioned_in(text)[:2]:
            h = self.health(p)
            bits = [f"Project {p['name']}: {p['summary'] or 'no summary'}", f"status {p['status']}"]
            if p["stack"]:
                bits.append(f"stack {p['stack']}")
            if p["next_step"]:
                bits.append(f"next: {p['next_step']}")
            if h.get("branch"):
                bits.append(f"on branch {h['branch']}, {h['uncommitted']} uncommitted change(s), last commit {h['last_commit']}")
            lines.append("; ".join(bits))
        return "\n".join(lines)
