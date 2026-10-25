"""Test -> read the failure -> propose a fix -> test again, on a COPY of your project.
Your real folder is never changed until you press Apply, and applying keeps a backup of every file it touches."""
from __future__ import annotations

import difflib
import fnmatch
import json
import re
import shutil
import tempfile
import time
import uuid
from dataclasses import dataclass, field
from pathlib import Path
from typing import Callable, Optional

from utils import sandbox

SKIP = {".git", "node_modules", "__pycache__", ".venv", "venv", "dist", "build", ".pytest_cache", ".mypy_cache", ".next", "target"}
TEST_GLOBS = ("test_*.py", "*_test.py", "*.test.*", "*.spec.*", "conftest.py", "tests/*", "test/*", "__tests__/*")
BACKUPS = Path.home() / ".vanta" / "doctor_backups"
MAX_COPY_MB = 80


@dataclass
class Report:
    id: str
    project: str
    command: list[str] = field(default_factory=list)
    status: str = "started"          # passed | fixed | failed | no_tests | too_big | error
    rounds: list[dict] = field(default_factory=list)
    diff: str = ""
    files: dict = field(default_factory=dict)       # relative path -> new text
    message: str = ""


def detect_command(root: Path) -> Optional[list[str]]:
    if (root / "package.json").exists():
        try:
            if json.loads((root / "package.json").read_text()).get("scripts", {}).get("test"):
                return ["npm", "test", "--silent"]
        except Exception:
            pass
    if (root / "pytest.ini").exists() or (root / "tests").is_dir() or list(root.glob("test_*.py")) or (root / "pyproject.toml").exists():
        return ["python3", "-m", "pytest", "-x", "-q", "--no-header", "-p", "no:cacheprovider"]
    if (root / "go.mod").exists():
        return ["go", "test", "./..."]
    return None


def is_test_file(rel: str) -> bool:
    rel = rel.replace("\\", "/")
    return any(fnmatch.fnmatch(rel, g) or fnmatch.fnmatch(Path(rel).name, g) for g in TEST_GLOBS)


def _size_mb(root: Path) -> float:
    total = 0
    for p in root.rglob("*"):
        if any(part in SKIP for part in p.relative_to(root).parts):
            continue
        try:
            total += p.stat().st_size if p.is_file() else 0
        except OSError:
            pass
    return total / 1e6


def _copy(src: Path, dst: Path) -> None:
    def ignore(d, names):
        return [n for n in names if n in SKIP and n != "node_modules"]
    shutil.copytree(src, dst, ignore=ignore, symlinks=False)
    nm = src / "node_modules"
    if nm.is_dir():
        (dst / "node_modules").symlink_to(nm, target_is_directory=True)     # reuse installed packages, read only in practice


def _files_in_output(out: str, root: Path) -> list[str]:
    seen, rels = set(), []
    for m in re.finditer(r"([\w./\\-]+\.(?:py|js|ts|tsx|jsx|go))(?::|\", line | )", out):
        p = m.group(1).replace("\\", "/")
        for cand in (root / p, root / p.split(str(root).replace("\\", "/") + "/")[-1]):
            try:
                rel = cand.resolve().relative_to(root.resolve()).as_posix()
            except Exception:
                continue
            if cand.is_file() and rel not in seen and not is_test_file(rel):
                seen.add(rel); rels.append(rel)
    return rels[:4]


def apply_edits(root: Path, edits: list[dict], allow_tests: bool = False) -> tuple[int, list[str]]:
    """Exact find/replace. Anything unsafe or ambiguous is skipped and reported, never guessed."""
    done, problems = 0, []
    for e in edits[:6]:
        rel = str(e.get("file", "")).replace("\\", "/").lstrip("/")
        find, rep = e.get("find"), e.get("replace")
        if not isinstance(find, str) or not isinstance(rep, str) or not find:
            problems.append(f"{rel}: malformed edit"); continue
        target = (root / rel).resolve()
        try:
            target.relative_to(root.resolve())
        except ValueError:
            problems.append(f"{rel}: outside the project"); continue
        if not target.is_file():
            problems.append(f"{rel}: no such file"); continue
        if not allow_tests and is_test_file(rel):
            problems.append(f"{rel}: I fix the code, not the tests"); continue
        text = target.read_text(encoding="utf-8", errors="replace")
        if text.count(find) != 1:
            problems.append(f"{rel}: the text to replace {'was not found' if text.count(find) == 0 else 'appears more than once'}"); continue
        target.write_text(text.replace(find, rep), encoding="utf-8")
        done += 1
    return done, problems


PROMPT = ("You fix failing tests by changing the PROGRAM code, never the tests. Reply with ONLY a JSON list of edits: "
          '[{"file": "relative/path.py", "find": "exact existing text, unique in the file", "replace": "new text"}]. '
          "Keep each edit small. If the failure is not caused by code you can see (missing package, network, setup), reply [].")


def run_doctor(project_name: str, folder: Path, llm: Callable[[list[dict]], str], max_rounds: int = 10,
               on_step: Callable[[str], None] = lambda s: None, timeout: float = 120) -> Report:
    rep = Report(id=uuid.uuid4().hex[:10], project=project_name)
    folder = Path(folder)
    if not folder.is_dir():
        rep.status, rep.message = "error", "I can't find that folder."
        return rep
    rep.command = detect_command(folder) or []
    if not rep.command:
        rep.status, rep.message = "no_tests", "I couldn't find tests to run in this project. Adding a few would let me check it."
        return rep
    if _size_mb(folder) > MAX_COPY_MB:
        rep.status, rep.message = "too_big", f"This project is over {MAX_COPY_MB} MB, too big to test safely in a copy."
        return rep
    work = Path(tempfile.mkdtemp(prefix="vanta-doctor-"))
    try:
        root = work / "copy"
        _copy(folder, root)
        last_fail = ""
        for rnd in range(1, max_rounds + 2):
            on_step("Running the tests" if rnd == 1 else f"Running the tests again (attempt {rnd - 1})")
            res = sandbox.run(rep.command, str(root), timeout=timeout, allow_network=False)
            out = ((res.stdout or "") + "\n" + (res.stderr or "")).strip()[-6000:]
            passed = res.returncode == 0 and not res.timed_out
            rep.rounds.append({"n": rnd, "passed": passed, "output": out[-1500:]})
            if passed:
                rep.status = "passed" if rnd == 1 else "fixed"
                break
            if rnd > max_rounds:
                rep.status, rep.message = "failed", "I made several fixes and the tests still don't all pass, so I stopped. What I changed so far is not applied."
                break
            if res.timed_out:
                rep.status, rep.message = "failed", "The tests took too long to run."
                break
            sig = re.sub(r"\d+(\.\d+)?s\b|0x[0-9a-f]+|\bin \d", "", out[-800:])          # same failure as last time = my fixes aren't helping
            if sig == last_fail:
                rep.status, rep.message = "failed", "My last fix changed nothing about the failure, so I stopped instead of trying random things."
                break
            last_fail = sig
            on_step("Reading the failure and working out a fix")
            ctx = ""
            for rel in _files_in_output(out, root):
                ctx += f"\n--- {rel} ---\n{(root / rel).read_text(encoding='utf-8', errors='replace')[:6000]}"
            try:
                raw = llm([{"role": "system", "content": PROMPT}, {"role": "user", "content": f"Test output:\n{out}\n\nFiles mentioned:{ctx or ' (none found)'}"}])
                m = re.search(r"\[.*\]", raw, re.S)
                edits = json.loads(m.group(0)) if m else []
            except Exception:
                edits = []
            if not edits:
                rep.status, rep.message = "failed", "The failure doesn't look like something I can fix from the code alone (it may need a missing package or setup)."
                break
            n, problems = apply_edits(root, edits)
            rep.rounds[-1]["edits"], rep.rounds[-1]["problems"] = n, problems
            if n == 0:
                rep.status, rep.message = "failed", "My suggested fix couldn't be applied safely: " + "; ".join(problems[:2])
                break
        if rep.status in ("fixed",):
            chunks = []
            for p in sorted(root.rglob("*")):
                if not p.is_file() or any(part in SKIP for part in p.relative_to(root).parts) or p.is_symlink():
                    continue
                rel = p.relative_to(root).as_posix()
                new = p.read_text(encoding="utf-8", errors="replace") if p.stat().st_size < 400_000 else None
                orig_p = folder / rel
                old = orig_p.read_text(encoding="utf-8", errors="replace") if orig_p.is_file() else ""
                if new is not None and new != old:
                    rep.files[rel] = new
                    chunks.append("".join(difflib.unified_diff(old.splitlines(True), new.splitlines(True), f"a/{rel}", f"b/{rel}")))
            rep.diff = "\n".join(chunks)
            rep.message = f"Tests pass after changing {len(rep.files)} file(s)."
        elif rep.status == "passed":
            rep.message = "All tests already pass. Nothing to fix."
    finally:
        shutil.rmtree(work, ignore_errors=True)
    return rep


def apply_report(rep: Report, folder: Path, backups: Path = BACKUPS) -> list[str]:
    """Write the fixed files into the real project. Every original is saved first."""
    folder = Path(folder).resolve()
    b = backups / f"{rep.project}-{int(time.time())}"
    written = []
    for rel, text in rep.files.items():
        target = (folder / rel).resolve()
        target.relative_to(folder)                            # raises if it would leave the project
        if target.is_file():
            (b / rel).parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(target, b / rel)
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(text, encoding="utf-8")
        written.append(rel)
    return written
