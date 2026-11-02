"""Orchestra: a strong model is the manager, small fast agents do the sub-tasks.
Manager: splits the goal into small jobs, hands each to a worker agent (which has the real tools), checks every result, sends one job back if it is weak, then writes the summary.
Workers never see the whole plan, only their job and the results they depend on, which keeps small models focused and cheap."""
from __future__ import annotations

import threading
import uuid
from dataclasses import dataclass, field
from pathlib import Path
from typing import Callable, Optional

from agent.loop import Agent
from agent.checkpoints import ROOT as CP_ROOT
from .guards import GuardError, ask_json

PLAN_SYSTEM = """You are the manager of a small team of worker agents. Split the goal into the FEWEST small, concrete jobs (at most {n}).
Each worker has tools to read, search, edit files and run commands in the project, but knows nothing else. Write each job so a small model can do it alone.
Reply with JSON only: {{"tasks":[{{"id":"t1","goal":"one clear job","write":false,"needs":[]}}]}}
- "write": true only if the job must change files or run commands; otherwise false (read-only).
- "needs": ids of jobs whose results this job must see first. No cycles.
- If the goal is simple, return a single job."""

REVIEW_SYSTEM = """You are the manager checking a worker's result. Reply with JSON only: {"verdict":"ok"} or {"verdict":"retry","feedback":"exactly what is wrong and what to do instead"}.
Say retry only for a real problem: the job was not done, the answer is wrong or vague, or it claims something it did not check."""

FINAL_SYSTEM = "You are the manager. In under 120 words, plain simple words, tell the person what the team did and found, what changed, and anything still open. Be honest about failures."


@dataclass
class Task:
    id: str
    goal: str
    write: bool = False
    needs: list[str] = field(default_factory=list)
    status: str = "todo"          # todo | doing | done | failed | skipped
    result: str = ""
    retries: int = 0
    changed: list[str] = field(default_factory=list)


@dataclass
class OrchRun:
    id: str
    goal: str
    tasks: list[Task] = field(default_factory=list)
    final: str = ""
    status: str = "planning"      # planning | running | done | stopped | failed
    changed: list[str] = field(default_factory=list)


def _validate(n: int):
    def check(d):
        ts = d.get("tasks") if isinstance(d, dict) else None
        if not isinstance(ts, list) or not ts:
            return 'Reply {"tasks":[...]} with at least one job.'
        ids = [str(t.get("id", "")) for t in ts if isinstance(t, dict)]
        if len(ids) != len(ts) or len(set(ids)) != len(ids) or not all(ids):
            return "Every job needs a unique id."
        if len(ts) > n:
            return f"Too many jobs. Use at most {n}."
        for t in ts:
            if not str(t.get("goal", "")).strip():
                return "Every job needs a goal."
            if any(str(x) not in ids or str(x) == str(t["id"]) for x in (t.get("needs") or [])):
                return "A job needs an id that does not exist (or itself)."
        return None
    return check


def order(tasks: list[Task]) -> list[Task]:
    """Dependency order. Raises GuardError on a cycle."""
    done: list[Task] = []
    left = list(tasks)
    while left:
        ready = [t for t in left if all(any(d.id == n for d in done) for n in t.needs)]
        if not ready:
            raise GuardError("The plan has jobs waiting on each other in a circle.")
        done += ready
        left = [t for t in left if t not in ready]
    return done


class Orchestra:
    def __init__(self, strong: Callable, fast: Callable, root: Path, mode: str = "ask", approve: Callable[[str, str], bool] = lambda a, d: False,
                 web_search: Optional[Callable] = None, on_update: Callable[[OrchRun], None] = lambda r: None, max_tasks: int = 6, worker_steps: int = 12,
                 home: Optional[Path] = None, checkpoint_base: Optional[Path] = None) -> None:
        self.strong, self.fast, self.root, self.mode, self.approve = strong, fast, Path(root), mode, approve
        self.web_search, self.on_update, self.max_tasks, self.worker_steps = web_search, on_update, max_tasks, worker_steps
        self.home, self.cp_base = home, checkpoint_base or CP_ROOT
        self.run_ = OrchRun(uuid.uuid4().hex[:10], "")
        self.agents: list[Agent] = []
        self._stop = threading.Event()

    def stop(self) -> None:
        self._stop.set()
        for a in self.agents:
            a.stop = True

    def _push(self) -> None:
        self.on_update(self.run_)

    def _worker(self, t: Task, results: dict[str, str], feedback: str = "") -> str:
        kw = {"home": self.home} if self.home else {}
        ag = Agent(self.fast, self.root, self.mode if t.write else "plan", self.approve, web_search=self.web_search, max_steps=self.worker_steps,
                   checkpoint_base=self.cp_base, **kw)
        self.agents.append(ag)
        ctx = "".join(f"\nResult of {n}: {results[n][:700]}" for n in t.needs if n in results)
        goal = t.goal + (f"\n\nContext from earlier jobs:{ctx}" if ctx else "") + (f"\n\nYour manager rejected your last attempt: {feedback}" if feedback else "")
        r = ag.execute(goal)
        for c in r.changed:
            if c not in t.changed:
                t.changed.append(c)
            if c not in self.run_.changed:
                self.run_.changed.append(c)
        if r.status != "done":
            raise RuntimeError(r.final or "the worker could not finish")
        return r.final

    def run(self, goal: str) -> OrchRun:
        r = self.run_
        r.goal = goal
        self._push()
        try:
            plan = ask_json(self.strong, [{"role": "system", "content": PLAN_SYSTEM.format(n=self.max_tasks)},
                                          {"role": "user", "content": f"Goal: {goal}\nProject folder: {self.root.name}"}], _validate(self.max_tasks))
            r.tasks = [Task(str(t["id"]), str(t["goal"])[:400], bool(t.get("write")), [str(x) for x in (t.get("needs") or [])]) for t in plan["tasks"]]
            seq = order(r.tasks)
        except Exception as exc:
            r.status, r.final = "failed", f"I couldn't make a plan: {exc}"
            self._push()
            return r
        r.status = "running"
        results: dict[str, str] = {}
        for t in seq:
            if self._stop.is_set():
                r.status, r.final = "stopped", "Stopped when you asked."
                self._push()
                return r
            if any(next(x for x in r.tasks if x.id == n).status != "done" for n in t.needs):
                t.status, t.result = "skipped", "Skipped because a job it needs did not finish."
                self._push()
                continue
            t.status = "doing"
            self._push()
            feedback = ""
            for attempt in range(2):
                try:
                    t.result = self._worker(t, results, feedback)
                    t.status = "done"
                except Exception as exc:
                    t.result, t.status = f"Failed: {exc}", "failed"
                if t.status == "done":
                    verdict = self._review(t)
                    if verdict is None:
                        break
                    if attempt == 1:                 # rejected again: keep the work, say so honestly
                        t.result += "\n(The manager still had doubts about this result.)"
                        break
                    feedback, t.retries, t.status = verdict, 1, "doing"
                    self._push()
                else:
                    break
            results[t.id] = t.result
            self._push()
        r.status = "stopped" if self._stop.is_set() else "done"
        r.final = self._summary()
        self._push()
        return r

    def _review(self, t: Task) -> Optional[str]:
        """None means accepted; otherwise the feedback for one retry."""
        try:
            d = ask_json(self.strong, [{"role": "system", "content": REVIEW_SYSTEM},
                                       {"role": "user", "content": f"Job: {t.goal}\nWorker result: {t.result[:1500]}\nFiles changed: {', '.join(t.changed) or 'none'}"}],
                         lambda x: None if isinstance(x, dict) and x.get("verdict") in ("ok", "retry") else 'Reply {"verdict":"ok"} or {"verdict":"retry","feedback":"..."}.', retries=2)
        except Exception:
            return None                                    # a flaky reviewer must not block good work
        return str(d.get("feedback", "Try again, more carefully."))[:400] if d["verdict"] == "retry" else None

    def _summary(self) -> str:
        r = self.run_
        lines = "\n".join(f"- [{t.status}] {t.goal[:100]}: {t.result[:240]}" for t in r.tasks)
        try:
            return (self.strong([{"role": "system", "content": FINAL_SYSTEM}, {"role": "user", "content": f"Goal: {r.goal}\n{lines}\nFiles changed: {', '.join(r.changed) or 'none'}"}]) or "").strip()[:1500] or lines
        except Exception:
            return lines

    def rewind(self) -> list[str]:
        back: list[str] = []
        for a in reversed(self.agents):
            back += a.rewind()
        return back
