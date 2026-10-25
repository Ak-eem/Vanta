"""Snapshot a file the first time the agent touches it in a run, so the whole run can be undone."""
from __future__ import annotations

import json
import shutil
import time
from pathlib import Path

ROOT = Path.home() / ".vanta" / "checkpoints"


class Checkpoints:
    def __init__(self, run_id: str, project: Path, base: Path = ROOT) -> None:
        self.dir, self.project = base / run_id, Path(project).resolve()
        self.dir.mkdir(parents=True, exist_ok=True)
        self.index: dict[str, bool] = {}          # relative path -> existed before

    def save(self, p: Path) -> None:
        rel = p.resolve().relative_to(self.project).as_posix()
        if rel in self.index:
            return
        self.index[rel] = p.exists()
        if p.exists():
            (self.dir / "files" / rel).parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(p, self.dir / "files" / rel)
        (self.dir / "index.json").write_text(json.dumps({"project": str(self.project), "files": self.index, "ts": time.time()}))

    def rewind(self) -> list[str]:
        back = []
        for rel, existed in self.index.items():
            target = self.project / rel
            if existed:
                shutil.copy2(self.dir / "files" / rel, target)
            elif target.exists():
                target.unlink()
            back.append(rel)
        return back

    @classmethod
    def load(cls, run_id: str, base: Path = ROOT) -> "Checkpoints":
        meta = json.loads((base / run_id / "index.json").read_text())
        c = cls(run_id, Path(meta["project"]), base)
        c.index = meta["files"]
        return c
