"""The agent loop: gather context -> act -> verify, repeated until done. Tools return observations that feed the next step."""
from __future__ import annotations

import json
import re
import time
import uuid
from dataclasses import dataclass, field
from pathlib import Path
from typing import Callable, Optional

import requests

from utils import sandbox
from . import memory
from .checkpoints import Checkpoints
from .extra import EXTRA_NAMES, Extra
from . import skills as skillmod
from .permissions import Denied, check_secret, decide, is_public_url, resolve_inside, split_command

MAX_OUT = 4000
SKIP_DIRS = {".git", "node_modules", "__pycache__", ".venv", "venv", "dist", "build", ".next", "target", ".pytest_cache"}

TOOL_HELP = """Tools (reply with ONE JSON object per turn, nothing else):
{"tool":"list_files","args":{"pattern":"**/*.py"}}            find files by pattern
{"tool":"grep","args":{"pattern":"def main","glob":"**/*.py"}}  search file contents (regex)
{"tool":"read_file","args":{"path":"app.py","start":1,"end":120}}  read a file (optionally a line range)
{"tool":"edit_file","args":{"path":"app.py","find":"exact old text","replace":"new text"}}  change a file; 'find' must appear exactly once
{"tool":"write_file","args":{"path":"new.py","content":"..."}}  create or overwrite a file
{"tool":"run_command","args":{"command":"python3 -m pytest -q"}}  run ONE simple command in the project (no pipes)
{"tool":"web_search","args":{"query":"..."}}  look something up
{"tool":"web_fetch","args":{"url":"https://..."}}  read a web page
{"tool":"task_create","args":{"subject":"..."}} / {"tool":"task_update","args":{"id":1,"status":"doing|done"}} / {"tool":"task_list","args":{}}  keep your own step list on long jobs
{"tool":"enter_plan_mode","args":{}} then {"tool":"exit_plan_mode","args":{"plan":"..."}}  think first, get the plan approved, then change things
{"tool":"code_intel","args":{"action":"outline|definition|references|diagnostics","path":"app.py","symbol":"main"}}  find where things are defined/used, check syntax
{"tool":"notebook_edit","args":{"path":"a.ipynb","cell":0,"mode":"replace|insert|delete","source":"...","type":"code|markdown"}}
{"tool":"bg_start","args":{"command":"npm run dev"}} / bg_output / bg_stop  with {"id":"..."}  long-running commands
{"tool":"enter_worktree","args":{"name":"fix-login"}} / exit_worktree {"keep":true}  work in a separate git copy so the original stays untouched
{"tool":"schedule_create","args":{"when":"daily 08:00","goal":"..."}} / schedule_list / schedule_delete {"id":"..."}  run a read-only check later or on repeat
{"tool":"git_status","args":{}} / git_commit {"message":"..."} / git_push {"remote":"origin"} / github_pr {"title":"...","body":"..."}  save and send work to GitHub (asks first; never force-pushes; never commits secrets)
{"tool":"skill","args":{"name":"..."}}  load a saved how-to (see the skills list below)
{"tool":"notify","args":{"title":"...","message":"..."}}  tell the person something
{"tool":"note","args":{"text":"something worth remembering across runs"}}
{"tool":"subagent","args":{"task":"investigate X and report back briefly"}}  a helper with its own clean context; returns a summary
{"tool":"ask_user","args":{"question":"..."}}  ask the person when you truly cannot proceed
When the goal is done, reply {"final":"short plain-language summary of what you did and found"}.
You may add a "thought" field (one short sentence) to any reply."""

SYSTEM = ("You are VANTA's agent. Work in a loop: gather context, take action, verify the result. Prefer small steps. Look before you change anything. "
          "After changing code, run the tests or the program to check it. If something fails twice the same way, change your approach. "
          "Never read or edit files holding passwords or keys. Be honest about what you could not do. ")


@dataclass
class Step:
    n: int
    tool: str
    args: dict
    result: str
    ok: bool = True


@dataclass
class Run:
    id: str
    goal: str
    steps: list[Step] = field(default_factory=list)
    final: str = ""
    status: str = "running"       # done | stopped | failed
    changed: list[str] = field(default_factory=list)


def parse_action(text: str) -> Optional[dict]:
    """Tolerant: models wrap JSON in prose or code fences. Returns None if there is no usable action."""
    for m in re.finditer(r"\{", text):
        depth, i = 0, m.start()
        while i < len(text):
            depth += text[i] == "{"
            depth -= text[i] == "}"
            if depth == 0:
                try:
                    d = json.loads(text[m.start():i + 1])
                    if isinstance(d, dict) and ("final" in d or isinstance(d.get("tool"), str)):
                        return d
                except Exception:
                    pass
                break
            i += 1
    return None


def _clip(s: str, n: int = MAX_OUT) -> str:
    return s if len(s) <= n else s[: n // 2] + f"\n…[{len(s) - n} characters cut]…\n" + s[-n // 2:]


class Agent:
    def __init__(self, llm: Callable[[list[dict]], str], root: Path, mode: str = "ask", approve: Callable[[str, str], bool] = lambda a, d: False,
                 ask_user: Callable[[str], str] = lambda q: "", web_search: Optional[Callable[[str], str]] = None, max_steps: int = 30,
                 on_step: Callable[[Step], None] = lambda s: None, ctx_chars: int = 36000, home: Path = memory.HOME,
                 checkpoint_base: Optional[Path] = None, depth: int = 0, fetch=requests.get, resolver=None, schedules=None, notify=None) -> None:
        self.llm, self.root, self.mode, self.approve, self.ask_user = llm, Path(root).resolve(), mode, approve, ask_user
        self.web_search, self.max_steps, self.on_step, self.ctx_chars, self.home, self.depth = web_search, max_steps, on_step, ctx_chars, home, depth
        self.fetch = fetch
        self.resolver = resolver
        self.run = Run(uuid.uuid4().hex[:10], "")
        from .checkpoints import ROOT
        self.cp = Checkpoints(self.run.id, self.root, checkpoint_base or ROOT)
        self.stop = False
        self.compactions = 0
        self.extra = Extra(self, schedules, notify)

    # ── tools ─────────────────────────────────────────────────────────────
    def _tool(self, name: str, a: dict) -> str:
        mode = "plan" if self.depth > 0 else self.mode            # helpers can only look
        verdict = decide(mode, name, a)
        if name == "list_files":
            pat = str(a.get("pattern") or "**/*")
            out = []
            for p in sorted(self.root.glob(pat)):
                if p.is_file() and not any(x in SKIP_DIRS for x in p.relative_to(self.root).parts):
                    try:
                        check_secret(p)
                    except Denied:
                        continue
                    out.append(p.relative_to(self.root).as_posix())
                if len(out) >= 200:
                    break
            return "\n".join(out) or "(no files match)"
        if name == "grep":
            rx = re.compile(str(a.get("pattern", "")), re.I)
            hits = []
            for p in sorted(self.root.glob(str(a.get("glob") or "**/*"))):
                if not p.is_file() or any(x in SKIP_DIRS for x in p.relative_to(self.root).parts) or p.stat().st_size > 1_000_000:
                    continue
                try:
                    check_secret(p)
                    for i, line in enumerate(p.read_text(encoding="utf-8", errors="ignore").splitlines(), 1):
                        if rx.search(line):
                            hits.append(f"{p.relative_to(self.root).as_posix()}:{i}: {line.strip()[:160]}")
                except Denied:
                    continue
                if len(hits) >= 60:
                    break
            return "\n".join(hits) or "(no matches)"
        if name == "read_file":
            p = resolve_inside(self.root, str(a.get("path", "")))
            check_secret(p)
            if not p.is_file():
                return "No such file."
            lines = p.read_text(encoding="utf-8", errors="replace").splitlines()
            s, e = max(1, int(a.get("start") or 1)), int(a.get("end") or min(len(lines), 200))
            return "\n".join(f"{i}: {l}" for i, l in enumerate(lines[s - 1:e], s)) + (f"\n(file has {len(lines)} lines)" if len(lines) > e else "")
        if name in ("edit_file", "write_file"):
            p = resolve_inside(self.root, str(a.get("path", "")))
            check_secret(p)
            if verdict == "ask" and not self.approve("Change a file", f"{name.replace('_', ' ')}: {p.relative_to(self.root).as_posix()}"):
                raise Denied("You said no to that change.")
            if name == "edit_file":
                if not p.is_file():
                    return "No such file."
                text = p.read_text(encoding="utf-8", errors="replace")
                find = str(a.get("find", ""))
                if not find or text.count(find) != 1:
                    return "The text to replace was not found exactly once. Read the file again and copy the text exactly."
                self.cp.save(p)
                p.write_text(text.replace(find, str(a.get("replace", ""))), encoding="utf-8")
            else:
                content = str(a.get("content", ""))
                if len(content) > 200_000:
                    return "That file is too large."
                self.cp.save(p)
                p.parent.mkdir(parents=True, exist_ok=True)
                p.write_text(content, encoding="utf-8")
            rel = p.relative_to(self.root).as_posix()
            if rel not in self.run.changed:
                self.run.changed.append(rel)
            return f"Saved {rel}."
        if name == "run_command":
            cmd = str(a.get("command", ""))
            argv = split_command(cmd)
            if verdict == "ask" and not self.approve("Run a command", cmd):
                raise Denied("You said no to running that.")
            res = sandbox.run(argv, str(self.root), timeout=90, allow_network=False)
            return _clip(f"exit code {res.returncode}{' (timed out)' if res.timed_out else ''}\n{res.stdout}\n{res.stderr}".strip())
        if name == "web_search":
            if not self.web_search:
                return "Web search isn't available right now."
            return _clip(self.web_search(str(a.get("query", ""))) or "(nothing found)")
        if name == "web_fetch":
            url = str(a.get("url", ""))
            kw = {"resolver": self.resolver} if self.resolver else {}
            if not is_public_url(url, **kw):
                raise Denied("I only open public web pages.")
            r = self.fetch(url, timeout=15, headers={"User-Agent": "VANTA-agent"}, stream=False)
            text = re.sub(r"<(script|style)[\s\S]*?</\1>|<[^>]+>", " ", r.text[:300_000])
            return _clip(" ".join(text.split()))
        if name == "note":
            memory.add_note(str(a.get("text", "")), self.home)
            return "Noted."
        if name == "ask_user":
            return self.ask_user(str(a.get("question", ""))) or "(no answer)"
        if name == "subagent":
            if self.depth >= 1:
                return "Helpers can't start more helpers."
            sub = Agent(self.llm, self.root, "plan", self.approve, self.ask_user, self.web_search, max_steps=12, ctx_chars=self.ctx_chars,
                        home=self.home, depth=1, fetch=self.fetch, resolver=self.resolver)
            r = sub.execute(str(a.get("task", "")))
            return _clip(f"[helper finished: {r.status}] {r.final}", 2000)
        if name in EXTRA_NAMES:
            return _clip(self.extra.call(name, a))
        raise Denied(f"Unknown tool {name}.")

    # ── context management ────────────────────────────────────────────────
    def _size(self, msgs: list[dict]) -> int:
        return sum(len(m["content"]) for m in msgs)

    def _manage_context(self, msgs: list[dict]) -> None:
        """1) clear old tool results (cheap), 2) summarise the middle if still too big. Stops itself if it keeps thrashing."""
        if self._size(msgs) <= self.ctx_chars:
            return
        tool_msgs = [i for i, m in enumerate(msgs) if m["role"] == "user" and m["content"].startswith("Result of ")]
        for i in tool_msgs[:-4]:
            msgs[i] = {"role": "user", "content": msgs[i]["content"].split("\n", 1)[0] + "\n[output cleared to save space]"}
        if self._size(msgs) <= self.ctx_chars:
            return
        self.compactions += 1
        keep = msgs[:2] + msgs[-6:]
        middle = msgs[2:-6]
        if middle:
            digest = "\n".join(f"{m['role']}: {m['content'][:500]}" for m in middle)
            try:
                summary = self.llm([{"role": "system", "content": "Summarise this agent work log in under 200 words: what was tried, what was learned, what changed, what is left."},
                                    {"role": "user", "content": digest[-12000:]}])
            except Exception:
                summary = "(earlier steps omitted)"
            msgs[:] = msgs[:2] + [{"role": "user", "content": "Summary of earlier work:\n" + summary[:1500]}] + msgs[-6:]
        if self.compactions >= 4:
            raise RuntimeError("The task keeps filling up my working space, so I stopped instead of going in circles.")

    # ── the loop ──────────────────────────────────────────────────────────
    def execute(self, goal: str) -> Run:
        try:
            return self._execute(goal)
        finally:
            self.extra.cleanup()

    def _execute(self, goal: str) -> Run:
        self.run.goal = goal
        notes, instr = memory.load_notes(self.home), memory.load_instructions(self.root, self.home)
        sys_msg = SYSTEM + ("\nThis is a read-only helper: report findings, do not change anything." if self.depth else f"\nPermission mode: {self.mode}.") + "\n\n" + TOOL_HELP
        if instr:
            sys_msg += "\n\n" + instr
        if notes:
            sys_msg += "\n\n[Notes from earlier runs]\n" + notes
        if self.extra.skills and not self.depth:
            sys_msg += "\n\n[Skills you can load with the skill tool when the task matches]\n" + skillmod.index(self.extra.skills)
        msgs: list[dict] = [{"role": "system", "content": sys_msg}, {"role": "user", "content": f"Goal: {goal}\nProject folder: {self.root.name}"}]
        seen: dict[str, int] = {}
        bad_replies = 0
        for n in range(1, self.max_steps + 1):
            if self.stop:
                self.run.status, self.run.final = "stopped", "Stopped when you asked."
                return self.run
            try:
                self._manage_context(msgs)
                reply = self.llm(msgs)
            except Exception as exc:
                self.run.status, self.run.final = "failed", f"I had to stop: {exc}"
                return self.run
            act = parse_action(reply)
            if not act:
                bad_replies += 1
                if bad_replies >= 3:
                    self.run.status, self.run.final = "failed", "The model kept replying in a format I couldn't use, so I stopped."
                    return self.run
                msgs += [{"role": "assistant", "content": reply[:1500]}, {"role": "user", "content": 'Reply with ONE JSON object: {"tool":...,"args":{...}} or {"final":"..."}.'}]
                continue
            msgs.append({"role": "assistant", "content": json.dumps(act)[:2000]})
            if "final" in act:
                self.run.status, self.run.final = "done", str(act["final"])[:3000]
                return self.run
            tool, args = act["tool"], act.get("args") if isinstance(act.get("args"), dict) else {}
            key = tool + json.dumps(args, sort_keys=True)
            seen[key] = seen.get(key, 0) + 1
            if seen[key] >= 4:
                self.run.status, self.run.final = "failed", "I kept repeating the same step without getting anywhere, so I stopped."
                return self.run
            try:
                result, ok = self._tool(tool, args), True
                if seen[key] == 3:
                    result += "\n(You have done this exact step three times. Try something different.)"
            except Denied as exc:
                result, ok = f"Not allowed: {exc}", False
            except Exception as exc:
                result, ok = f"That failed: {exc}", False
            step = Step(n, tool, args, _clip(result, 1500), ok)
            self.run.steps.append(step)
            self.on_step(step)
            msgs.append({"role": "user", "content": f"Result of {tool}:\n{_clip(result)}"})
        self.run.status, self.run.final = "failed", f"I reached my limit of {self.max_steps} steps without finishing. What I did so far is listed above."
        return self.run

    def rewind(self) -> list[str]:
        return self.cp.rewind()
