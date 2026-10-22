import sys, json, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from thinking.formalizer import formalize, clarifying_question, _heuristic

GOOD = json.dumps({"goal": "Add login to my Flask app", "kind": "code", "inputs": ["app.py"],
    "constraints": ["no new paid services"], "scope": "backend only", "output": "working login route",
    "unknowns": [{"question": "Should users sign up with email or username?", "critical": True},
                 {"question": "Any preferred hashing library?", "critical": False}]})

def test_formalize_parses_and_asks_one_question():
    f = formalize("add login", lambda p, r: "```json\n" + GOOD + "\n```")
    assert f.kind == "code" and f.source == "model" and "login" in f.goal.lower()
    q = clarifying_question(f)
    assert q == "Should users sign up with email or username?"
    assert "GOAL:" in f.to_prompt() and "CONSTRAINTS:" in f.to_prompt()

def test_no_question_when_nothing_critical():
    f = formalize("x", lambda p, r: json.dumps({"goal": "g", "unknowns": [{"question": "q", "critical": False}]}))
    assert clarifying_question(f) is None

def test_falls_back_on_garbage_or_error():
    assert formalize("fix this python bug", lambda p, r: "lol no").source == "heuristic"
    def boom(p, r): raise RuntimeError("429")
    assert formalize("calculate 12 * 7", boom).kind == "math"
    assert formalize("hi", None).kind == "chat"

def test_heuristic_kinds():
    assert _heuristic("write an email to my landlord").kind == "writing"
    assert _heuristic("deploy this with docker").kind == "ops"

# ── loop ──────────────────────────────────────────────────────────────────
from thinking.formalizer import Form
from thinking.loop import solve, solve_by_program, pick_and_run, CodeVerifier, JSONVerifier

def scripted(replies):
    log = []
    it = iter(replies)
    def llm(prompt, role):
        log.append(role)
        return next(it)
    llm.log = log
    return llm

def test_code_verifier_retry_fixes_bug():
    bad = "FILENAME: main.py\n```python\nprint(1/0)\n```"
    good = "FILENAME: main.py\n```python\nprint('hello')\n```"
    llm = scripted(["plan", bad, good])
    r = solve("say hello", Form(goal="print hello", kind="code"), llm, verifier=CodeVerifier(expect=["hello"]))
    assert r.verified and len(r.attempts) == 2 and not r.attempts[0].ok
    assert "ZeroDivisionError" in r.attempts[0].feedback
    assert llm.log == ["plan", "act", "act"]          # strong model plans once, weak model works

def test_budget_stops_retries():
    bad = "```python\nraise SystemExit(3)\n```"
    llm = scripted(["plan"] + [bad] * 10)
    r = solve("x", Form(goal="x", kind="code"), llm, verifier=CodeVerifier(), max_attempts=5, max_calls=3)
    assert not r.verified and r.calls == 3 and "Unverified" in r.note

def test_check_script():
    code = "FILENAME: main.py\n```python\ndef add(a,b): return a+b\n```"
    v = CodeVerifier(check_script="from main import add\nassert add(2,3)==5")
    assert v.check(code)[0]
    v2 = CodeVerifier(check_script="from main import add\nassert add(2,3)==6")
    ok, fb = v2.check(code); assert not ok and "AssertionError" in fb

def test_path_traversal_rejected():
    ok, fb = CodeVerifier().check("FILENAME: ../evil.py\n```python\nprint(1)\n```")
    assert not ok and "Unsafe" in fb

def test_program_computes_the_answer():
    llm = scripted(["```python\nprint(round(1234*0.075, 2))\n```"])
    r = solve_by_program("7.5% of 1234", Form(goal="7.5% of 1234", kind="math"), llm)
    assert r.verified and "92.55" in r.output and r.method == "program"

def test_program_retries_after_error():
    llm = scripted(["```python\nprint(undefined)\n```", "```python\nprint(6*7)\n```"])
    r = solve_by_program("6*7", Form(goal="6*7", kind="math"), llm)
    assert r.verified and "42" in r.output and len(r.attempts) == 2

def test_unverifiable_gets_llm_check():
    llm = scripted(["plan", "an essay", "FAIL: too short"])
    r = solve("write essay", Form(goal="essay", kind="writing"), llm)
    assert not r.verified and r.method == "LLMVerifier" and llm.log[-1] == "check"

def test_json_verifier():
    assert JSONVerifier(["a"]).check('x {"a": 1} y')[0]
    assert not JSONVerifier(["a"]).check('{"b": 1}')[0]
    assert not JSONVerifier().check("nothing")[0]

def test_pick_math_falls_back_when_program_fails():
    llm = scripted(["no code"] * 3 + ["plan", "answer is 4", "PASS"])
    r = pick_and_run("2+2", Form(goal="2+2", kind="math"), llm)
    assert r.output == "answer is 4" and r.verified
