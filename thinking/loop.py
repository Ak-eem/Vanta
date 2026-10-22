"""Plan -> act -> verify with code -> retry.

The strong model plans (once) and judges (only when code can't). The cheap
model does the work. Wherever possible the check is a program, not an opinion:
run the code, run the tests, compute the number. Every loop has hard budgets
(attempts and model calls) so it can never burn the free quota.
"""
from __future__ import annotations

import json
import re
import shutil
import sys
import tempfile
from dataclasses import dataclass, field
from pathlib import Path
from typing import Callable, Optional

from utils import sandbox
from .formalizer import Form, LLM

Step = Callable[[str, str], None]   # on_step(label, status)

_FILE_RE = re.compile(r"FILENAME:\s*(.+?)\s*\n```[\w+-]*\n([\s\S]+?)```")
_BLOCK_RE = re.compile(r"```(?:python|py)?\s*\n([\s\S]+?)```")


@dataclass
class Attempt:
    n: int
    ok: Optional[bool]
    feedback: str = ""


@dataclass
class Result:
    output: str
    verified: bool
    method: str
    attempts: list = field(default_factory=list)
    calls: int = 0
    note: str = ""


# ── verifiers ────────────────────────────────────────────────────────────────
def extract_files(text: str) -> dict[str, str]:
    files = {m[0].strip(): m[1] for m in _FILE_RE.findall(text)}
    if not files:
        b = _BLOCK_RE.search(text)
        if b:
            files["main.py"] = b.group(1)
    return files


def _safe_name(name: str) -> Optional[str]:
    p = Path(name)
    if p.is_absolute() or ".." in p.parts or not name.strip():
        return None
    return name


class CodeVerifier:
    """Runs the generated program in the sandbox. Passes when it exits 0, prints what
    `expect` requires, and (optionally) a `check_script` of assertions also exits 0."""

    def __init__(self, entry: str = "main.py", expect: Optional[list] = None,
                 check_script: Optional[str] = None, timeout: float = 20) -> None:
        self.entry, self.expect, self.check_script, self.timeout = entry, expect or [], check_script, timeout

    def check(self, output: str) -> tuple[bool, str]:
        files = extract_files(output)
        if not files:
            return False, "No code found. Reply with the code in a fenced block (FILENAME: x then ```code```)."
        work = tempfile.mkdtemp(prefix="vanta_verify_")
        try:
            for name, code in files.items():
                ok = _safe_name(name)
                if not ok:
                    return False, f"Unsafe file name: {name}"
                dest = Path(work) / ok
                dest.parent.mkdir(parents=True, exist_ok=True)
                dest.write_text(code, encoding="utf-8")
            entry = self.entry if self.entry in files else next(iter(files))
            r = sandbox.run([sys.executable, entry], cwd=work, timeout=self.timeout)
            if r.timed_out:
                return False, f"Timed out after {int(self.timeout)}s (infinite loop or waiting for input?)."
            if r.returncode != 0:
                return False, "It crashed:\n" + (r.stderr.strip()[-900:] or r.stdout[-300:])
            for needle in self.expect:
                if needle not in r.stdout:
                    return False, f"Output should contain {needle!r} but was:\n{r.stdout.strip()[-400:]}"
            if self.check_script:
                (Path(work) / "_check.py").write_text(self.check_script, encoding="utf-8")
                c = sandbox.run([sys.executable, "_check.py"], cwd=work, timeout=self.timeout)
                if c.returncode != 0 or c.timed_out:
                    return False, "Checks failed:\n" + (c.stderr.strip()[-900:] or "timed out")
            return True, r.stdout.strip()[-400:]
        finally:
            shutil.rmtree(work, ignore_errors=True)


class JSONVerifier:
    def __init__(self, required_keys: Optional[list] = None) -> None:
        self.keys = required_keys or []

    def check(self, output: str) -> tuple[bool, str]:
        m = re.search(r"\{[\s\S]*\}|\[[\s\S]*\]", output)
        if not m:
            return False, "No JSON found."
        try:
            data = json.loads(m.group(0))
        except ValueError as e:
            return False, f"Invalid JSON: {e}"
        missing = [k for k in self.keys if not isinstance(data, dict) or k not in data]
        return (not missing, f"Missing keys: {missing}" if missing else "ok")


class LLMVerifier:
    """Last resort when nothing can be executed: the strong model judges against the form."""

    def __init__(self, llm: LLM, form: Form) -> None:
        self.llm, self.form = llm, form

    def check(self, output: str) -> tuple[bool, str]:
        raw = self.llm(
            "Judge whether the RESULT fully satisfies the request. Be strict about the stated output, "
            "constraints and scope. Reply with exactly 'PASS' or 'FAIL: <one concrete problem>'.\n\n"
            f"{self.form.to_prompt()}\n\nRESULT:\n{output[:6000]}", "check")
        raw = raw.strip()
        return raw.upper().startswith("PASS"), raw[:300]


# ── prompts ──────────────────────────────────────────────────────────────────
PLAN_PROMPT = """Make a short plan (max 6 bullets) to satisfy this form, then list 2-4 concrete acceptance checks
that could be tested by running code or by inspection. Do not do the work yet.

{form}"""

ACT_PROMPT = """Do the work.

{form}

PLAN AND CHECKS:
{plan}
{feedback}
For code: reply with each file as `FILENAME: path` followed by a fenced code block, and say how to run it. Be complete."""

PROGRAM_PROMPT = """Write a short Python 3 program that computes the answer and prints ONLY the final answer
(plus units if any). Use only the standard library. No input(). Do not guess: compute.

{form}
{feedback}"""


def _feedback(prev_output: str, fb: str) -> str:
    return (f"\nYOUR PREVIOUS ATTEMPT FAILED CHECKS. Problem:\n{fb}\n"
            f"Fix exactly that and resend the complete result.\n") if fb else ""


# ── strategies ───────────────────────────────────────────────────────────────
def solve(request: str, form: Form, llm: LLM, verifier=None, max_attempts: int = 3,
          max_calls: int = 8, on_step: Optional[Step] = None) -> Result:
    step = on_step or (lambda *_: None)
    calls = 0
    step("Planning", "thinking")
    plan = llm(PLAN_PROMPT.format(form=form.to_prompt()), "plan"); calls += 1
    attempts: list[Attempt] = []
    out, fb, ok = "", "", None
    for n in range(1, max_attempts + 1):
        if calls >= max_calls:
            break
        step(f"Working (attempt {n})", "thinking")
        out = llm(ACT_PROMPT.format(form=form.to_prompt(), plan=plan, feedback=_feedback(out, fb)), "act"); calls += 1
        if verifier is None:
            ok = None
            break
        step("Checking", "thinking")
        ok, fb = verifier.check(out)
        attempts.append(Attempt(n, ok, fb))
        if ok:
            break
    method = type(verifier).__name__ if verifier else "none"
    if verifier is None and out and calls < max_calls:
        step("Final check", "thinking")
        ok, fb = LLMVerifier(llm, form).check(out); calls += 1
        attempts.append(Attempt(len(attempts) + 1, ok, fb)); method = "LLMVerifier"
    note = "" if ok else (f"Unverified: {fb}" if fb else "Unverified")
    return Result(out, bool(ok), method, attempts, calls, note)


def solve_by_program(request: str, form: Form, llm: LLM, max_attempts: int = 3,
                     on_step: Optional[Step] = None) -> Result:
    """Cognition as compilation: the model writes a program, the PROGRAM produces the answer."""
    step = on_step or (lambda *_: None)
    calls, fb, attempts = 0, "", []
    for n in range(1, max_attempts + 1):
        step(f"Writing a program to compute it (attempt {n})", "thinking")
        raw = llm(PROGRAM_PROMPT.format(form=form.to_prompt(), feedback=_feedback("", fb)), "act"); calls += 1
        files = extract_files(raw)
        if not files:
            fb = "No code block found."; attempts.append(Attempt(n, False, fb)); continue
        code = next(iter(files.values()))
        work = tempfile.mkdtemp(prefix="vanta_calc_")
        try:
            (Path(work) / "main.py").write_text(code, encoding="utf-8")
            r = sandbox.run([sys.executable, "main.py"], cwd=work, timeout=20)
        finally:
            shutil.rmtree(work, ignore_errors=True)
        if r.returncode == 0 and not r.timed_out and r.stdout.strip():
            attempts.append(Attempt(n, True, ""))
            answer = r.stdout.strip()
            return Result(f"**Answer:** {answer}\n\nComputed with:\n```python\n{code.strip()}\n```", True,
                          "program", attempts, calls)
        fb = (r.stderr.strip()[-600:] or "It printed nothing.") if not r.timed_out else "It timed out."
        attempts.append(Attempt(n, False, fb))
    return Result("", False, "program", attempts, calls, f"Could not compute: {fb}")


def pick_and_run(request: str, form: Form, llm: LLM, on_step: Optional[Step] = None) -> Result:
    """Choose the strongest check available for this kind of request."""
    if form.kind == "math":
        r = solve_by_program(request, form, llm, on_step=on_step)
        if r.verified:
            return r
    if form.kind == "code":
        return solve(request, form, llm, verifier=CodeVerifier(), on_step=on_step)
    return solve(request, form, llm, verifier=None, on_step=on_step)
