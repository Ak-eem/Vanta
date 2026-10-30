"""More agent tools: task list, plan mode, notebooks, code lookup, background commands, git worktrees, schedules, skills, notifications.
Each one goes through the same permission gate as the basic tools."""
from __future__ import annotations

import ast
import json
import os
import re
import subprocess
import time
import uuid
from pathlib import Path

from . import skills as skillmod
from .permissions import Denied, check_secret, resolve_inside, split_command
from .schedules import Schedules
from . import gittools

CODE_EXT = {".py", ".js", ".ts", ".tsx", ".jsx", ".go", ".rs", ".java", ".c", ".cpp", ".cs", ".php", ".rb"}
SKIP = {".git", "node_modules", "__pycache__", ".venv", "venv", "dist", "build", ".next", "target"}
MAX_BG = 3


def _clip(s: str, n: int = 3000) -> str:
    return s if len(s) <= n else s[: n // 2] + "\n…\n" + s[-n // 2:]


class Extra:
    """Holds state that lives for one agent run. `ag` is the Agent it belongs to."""

    def __init__(self, ag, schedules: Schedules | None = None, notify=None, bg_dir: Path | None = None) -> None:
        self.ag, self.schedules, self.notify = ag, schedules, notify
        self.tasks: list[dict] = []
        self.prev_mode: str | None = None
        self.bg: dict[str, dict] = {}
        self.bg_dir = bg_dir or (ag.home / "agent" / "bg")
        self.base_root: Path | None = None
        self.worktree: dict | None = None
        self.skills = skillmod.load_all(ag.root, ag.home)

    # ── task list ────────────────────────────────────────────────────────
    def task_create(self, a):
        if len(self.tasks) >= 40:
            return "Too many tasks. Finish or delete some first."
        t = {"id": len(self.tasks) + 1, "subject": str(a.get("subject", ""))[:120], "status": "todo"}
        if not t["subject"]:
            return "A task needs a subject."
        self.tasks.append(t)
        return f"Task {t['id']} added."

    def task_update(self, a):
        t = next((x for x in self.tasks if x["id"] == int(a.get("id", 0))), None)
        if not t:
            return "No such task."
        st = str(a.get("status", ""))
        if st not in ("todo", "doing", "done", "deleted"):
            return "Status must be todo, doing, done or deleted."
        t["status"] = st
        return f"Task {t['id']} is {st}."

    def task_list(self, a):
        return "\n".join(f"{t['id']}. [{t['status']}] {t['subject']}" for t in self.tasks if t["status"] != "deleted") or "(no tasks)"

    # ── plan mode ────────────────────────────────────────────────────────
    def enter_plan_mode(self, a):
        if self.prev_mode is None:
            self.prev_mode = self.ag.mode
        self.ag.mode = "plan"
        return "Plan mode on. Look around and write a plan; nothing will be changed. Call exit_plan_mode with your plan when ready."

    def exit_plan_mode(self, a):
        plan = str(a.get("plan", "")).strip()
        if not plan:
            return "Give the plan in the 'plan' argument."
        if not self.ag.approve("Approve this plan?", plan[:500]):
            raise Denied("You didn't approve the plan. Revise it or ask what they want changed.")
        self.ag.mode = self.prev_mode if self.prev_mode not in (None, "plan") else "ask"
        self.prev_mode = None
        return f"Plan approved. Mode is now {self.ag.mode}; you can make changes."

    # ── notebooks ────────────────────────────────────────────────────────
    def notebook_edit(self, a):
        p = resolve_inside(self.ag.root, str(a.get("path", "")))
        check_secret(p)
        if p.suffix != ".ipynb" or not p.is_file():
            return "That isn't a notebook file."
        nb = json.loads(p.read_text(encoding="utf-8"))
        cells, i, op = nb.setdefault("cells", []), int(a.get("cell", 0)), str(a.get("mode", "replace"))
        src = str(a.get("source", "")).splitlines(keepends=True)
        typ = "markdown" if a.get("type") == "markdown" else "code"
        if op not in ("replace", "insert", "delete"):
            return "mode must be replace, insert or delete."
        if op == "insert":
            if not 0 <= i <= len(cells):
                return f"Cell index must be 0 to {len(cells)}."
            new = {"cell_type": typ, "metadata": {}, "source": src}
            if typ == "code":
                new.update(outputs=[], execution_count=None)
            cells.insert(i, new)
        else:
            if not 0 <= i < len(cells):
                return f"Cell index must be 0 to {len(cells) - 1}."
            if op == "delete":
                del cells[i]
            else:
                cells[i]["source"] = src
                if cells[i]["cell_type"] == "code":
                    cells[i]["outputs"], cells[i]["execution_count"] = [], None
        self.ag.cp.save(p)
        p.write_text(json.dumps(nb, indent=1), encoding="utf-8")
        rel = p.relative_to(self.ag.root).as_posix()
        if rel not in self.ag.run.changed:
            self.ag.run.changed.append(rel)
        return f"Notebook {op}: cell {i}."

    # ── code lookup (works without a language server) ────────────────────
    def _files(self):
        for p in sorted(self.ag.root.rglob("*")):
            if p.suffix in CODE_EXT and p.is_file() and not any(x in SKIP for x in p.relative_to(self.ag.root).parts) and p.stat().st_size < 500_000:
                try:
                    check_secret(p)
                except Denied:
                    continue
                yield p

    def code_intel(self, a):
        act, sym = str(a.get("action", "")), str(a.get("symbol", ""))
        if act == "outline":
            p = resolve_inside(self.ag.root, str(a.get("path", "")))
            check_secret(p)
            if not p.is_file():
                return "No such file."
            if p.suffix == ".py":
                tree = ast.parse(p.read_text(encoding="utf-8", errors="replace"))
                out = [f"{n.lineno}: {'class' if isinstance(n, ast.ClassDef) else 'def'} {n.name}" for n in ast.walk(tree) if isinstance(n, (ast.FunctionDef, ast.AsyncFunctionDef, ast.ClassDef))]
                return "\n".join(sorted(out, key=lambda s: int(s.split(":")[0]))) or "(nothing defined)"
            rx = re.compile(r"^\s*(?:export\s+)?(?:async\s+)?(?:function|class|const|let|interface|type|func|fn|def)\s+(\w+)")
            return "\n".join(f"{i}: {m.group(0).strip()[:100]}" for i, l in enumerate(p.read_text(encoding="utf-8", errors="replace").splitlines(), 1) if (m := rx.match(l))) or "(nothing found)"
        if act in ("definition", "references"):
            if not re.fullmatch(r"\w+", sym):
                return "Give a plain symbol name."
            rx = re.compile(rf"^\s*(?:export\s+)?(?:async\s+)?(?:def|class|function|func|fn|interface|type|const|let|var)\s+{sym}\b") if act == "definition" else re.compile(rf"\b{sym}\b")
            hits = []
            for p in self._files():
                for i, l in enumerate(p.read_text(encoding="utf-8", errors="ignore").splitlines(), 1):
                    if rx.search(l):
                        hits.append(f"{p.relative_to(self.ag.root).as_posix()}:{i}: {l.strip()[:140]}")
                if len(hits) >= 50:
                    break
            return "\n".join(hits[:50]) or "(none found)"
        if act == "diagnostics":
            p = resolve_inside(self.ag.root, str(a.get("path", "")))
            check_secret(p)
            if not p.is_file():
                return "No such file."
            txt = p.read_text(encoding="utf-8", errors="replace")
            try:
                if p.suffix == ".py":
                    ast.parse(txt)
                elif p.suffix == ".json":
                    json.loads(txt)
                else:
                    return "I can only check Python and JSON syntax without extra tools. Run the project's own linter instead."
            except SyntaxError as e:
                return f"Syntax error line {e.lineno}: {e.msg}"
            except json.JSONDecodeError as e:
                return f"Invalid JSON line {e.lineno}: {e.msg}"
            return "No syntax problems."
        return "action must be outline, definition, references or diagnostics."

    # ── background commands ──────────────────────────────────────────────
    def bg_start(self, a):
        live = [b for b in self.bg.values() if b["proc"].poll() is None]
        if len(live) >= MAX_BG:
            return f"Already {MAX_BG} background commands running. Stop one first."
        argv = split_command(str(a.get("command", "")))
        if not self.ag.approve("Run in background", " ".join(argv)):
            raise Denied("You said no to running that.")
        from utils import sandbox
        self.bg_dir.mkdir(parents=True, exist_ok=True)
        bid = uuid.uuid4().hex[:6]
        log = open(self.bg_dir / f"{bid}.log", "wb")
        proc = subprocess.Popen(argv, cwd=str(self.ag.root), env=sandbox.clean_env(str(self.ag.root)), shell=False, stdin=subprocess.DEVNULL, stdout=log, stderr=subprocess.STDOUT,
                                creationflags=0x08000000 if os.name == "nt" else 0)
        self.bg[bid] = {"proc": proc, "cmd": " ".join(argv), "log": self.bg_dir / f"{bid}.log", "fh": log, "t": time.time()}
        return f"Started {bid} . Use bg_output to read it, bg_stop to end it (id: {bid})."

    def bg_output(self, a):
        b = self.bg.get(str(a.get("id", "")))
        if not b:
            return "No such background command."
        b["fh"].flush()
        txt = b["log"].read_text(encoding="utf-8", errors="replace")
        rc = b["proc"].poll()
        return f"[{'running' if rc is None else f'finished, exit code {rc}'}]\n" + _clip(txt[-3000:])

    def bg_stop(self, a):
        b = self.bg.get(str(a.get("id", "")))
        if not b:
            return "No such background command."
        if b["proc"].poll() is None:
            b["proc"].terminate()
            try:
                b["proc"].wait(5)
            except subprocess.TimeoutExpired:
                b["proc"].kill()
        return "Stopped."

    def cleanup(self):
        """End of run: nothing keeps running behind your back."""
        for b in self.bg.values():
            if b["proc"].poll() is None:
                b["proc"].kill()
                try:
                    b["proc"].wait(3)
                except Exception:
                    pass
            try:
                b["fh"].close()
            except Exception:
                pass
        if self.worktree:
            self.exit_worktree({"keep": True})

    # ── git worktree (a safe, separate copy to work in) ──────────────────
    def _git(self, *args, cwd=None):
        r = subprocess.run(["git", *args], cwd=str(cwd or self.ag.root), capture_output=True, text=True, timeout=60)
        return r.returncode, (r.stdout + r.stderr).strip()

    def enter_worktree(self, a):
        if self.worktree:
            return "Already in a worktree."
        name = re.sub(r"[^\w-]", "-", str(a.get("name") or "work"))[:30]
        rc, _ = self._git("rev-parse", "--is-inside-work-tree")
        if rc != 0:
            return "This folder isn't a git project, so I can't make a separate copy."
        if not self.ag.approve("Make a separate working copy", f"A new git branch 'vanta/{name}' in its own folder, so your files stay untouched."):
            raise Denied("You said no to that.")
        path = self.ag.home / "worktrees" / f"{name}-{uuid.uuid4().hex[:4]}"
        rc, out = self._git("worktree", "add", "-b", f"vanta/{name}-{path.name[-4:]}", str(path))
        if rc != 0:
            return f"Couldn't make the copy: {out[:300]}"
        from .checkpoints import Checkpoints
        self.base_root, self.worktree = self.ag.root, {"path": path, "branch": f"vanta/{name}-{path.name[-4:]}", "cp": self.ag.cp}
        self.ag.root = path.resolve()
        self.ag.cp = Checkpoints(self.ag.run.id + "w", self.ag.root, self.ag.cp.dir.parent)
        return f"Working in a separate copy on branch {self.worktree['branch']}. Your original files are untouched."

    def exit_worktree(self, a):
        if not self.worktree:
            return "Not in a worktree."
        wt, keep = self.worktree, bool(a.get("keep", True))
        _, stat = self._git("diff", "--stat", "HEAD", cwd=wt["path"])
        if not keep:
            if not self.ag.approve("Throw away the separate copy", f"Delete branch {wt['branch']} and its folder. Changes: {stat or 'none'}"):
                raise Denied("You said no to that.")
            self._git("worktree", "remove", "--force", str(wt["path"]), cwd=self.base_root)
            self._git("branch", "-D", wt["branch"], cwd=self.base_root)
        self.ag.root, self.ag.cp = self.base_root, wt["cp"]
        self.worktree = None
        return f"Back in the original folder. {'Copy thrown away.' if not keep else 'The copy is kept on branch ' + wt['branch'] + '.'} Changes: {stat or 'none'}"

    # ── schedules ────────────────────────────────────────────────────────
    def schedule_create(self, a):
        if not self.schedules:
            return "Scheduling isn't available here."
        when, goal = str(a.get("when", "")), str(a.get("goal", ""))
        if not self.ag.approve("Schedule a task", f"{when}: {goal[:300]}\n(It will run read-only and tell you what it found.)"):
            raise Denied("You said no to that.")
        try:
            j = self.schedules.add(when, goal, str(self.ag.root))
        except ValueError as e:
            return str(e)
        return f"Scheduled {j['id']} ({when})."

    def schedule_list(self, a):
        if not self.schedules:
            return "Scheduling isn't available here."
        return "\n".join(f"{j['id']}: {j['when']} — {j['goal'][:80]}" for j in self.schedules.list()) or "(nothing scheduled)"

    def schedule_delete(self, a):
        if not self.schedules:
            return "Scheduling isn't available here."
        if not self.ag.approve("Cancel a scheduled task", str(a.get("id", ""))):
            raise Denied("You said no to that.")
        return "Cancelled." if self.schedules.delete(str(a.get("id", ""))) else "No such scheduled task."

    # ── skills and notifications ─────────────────────────────────────────
    def skill(self, a):
        s = self.skills.get(str(a.get("name", "")).lower())
        return s["body"] if s else "No such skill. Available: " + ", ".join(self.skills) if self.skills else "No skills installed."

    def notify_user(self, a):
        if not self.notify:
            return "I can't send notifications here."
        self.notify(str(a.get("title", "VANTA"))[:80], str(a.get("message", ""))[:300])
        return "Sent."

    def call(self, name: str, a: dict) -> str:
        if name in ("git_status", "git_commit", "git_push", "github_pr"):
            return getattr(gittools, name)(self.ag, a)
        return getattr(self, {"notify": "notify_user"}.get(name, name))(a)


EXTRA_NAMES = {"task_create", "task_update", "task_list", "enter_plan_mode", "exit_plan_mode", "notebook_edit", "code_intel", "bg_start", "bg_output", "bg_stop",
               "enter_worktree", "exit_worktree", "schedule_create", "schedule_list", "schedule_delete", "skill", "notify", "git_status", "git_commit", "git_push", "github_pr"}
