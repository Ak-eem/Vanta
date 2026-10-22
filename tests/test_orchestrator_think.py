import sys, json, pathlib, tempfile, os
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
os.environ["OPENROUTER_ENABLED"] = "false"
os.environ["VANTA_LOCAL_ENABLED"] = "false"
from types import SimpleNamespace
from orchestrator.orchestrator import VantaOrchestrator, NeedsClarification
from orchestrator.pool import ProviderPool, ResponseCache, Cooldowns

def fake_client(script):
    """Groq-shaped client replying from a list, recording calls."""
    it = iter(script); calls = []
    def create(**kw):
        calls.append(kw["messages"][0]["content"][:40])
        return SimpleNamespace(choices=[SimpleNamespace(message=SimpleNamespace(content=next(it)))])
    c = SimpleNamespace(chat=SimpleNamespace(completions=SimpleNamespace(create=create)))
    c.calls = calls
    return c

def mk(script):
    c = fake_client(script)
    o = VantaOrchestrator(c, "m")
    o.pool = ProviderPool(groq=c, groq_model="m", cache=ResponseCache(pathlib.Path(tempfile.mkdtemp()) / "c.db"), cooldowns=Cooldowns())
    return o, c

FORM = lambda **k: json.dumps({"goal": "g", "kind": "code", "unknowns": [], **k})

def test_asks_one_question_when_critical_missing():
    o, c = mk([FORM(unknowns=[{"question": "Which database?", "critical": True}])])
    try: o.think("build me a small api that stores notes please")
    except NeedsClarification as q: assert q.question == "Which database?"
    else: assert False

def test_code_task_is_run_and_fixed():
    o, c = mk([FORM(), "plan", "```python\nprint(1/0)\n```", "```python\nprint('ok')\n```"])
    r = o.think("write a python script that prints the word ok")
    assert r.verified and "ok" in r.output and len(r.attempts) == 2

def test_math_is_computed_by_program():
    o, c = mk([FORM(kind="math"), "```python\nprint(round(2500*0.15,2))\n```"])
    r = o.think("what is fifteen percent of 2500 please work it out")
    assert r.verified and "375" in r.output

def test_non_checkable_returns_none():
    o, c = mk([FORM(kind="research")])
    assert o.think("compare these three frameworks for me in detail") is None

def test_short_messages_skip_the_model_form():
    o, c = mk(["```python\nprint(42)\n```"])
    # 'calculate 6*7' is short -> heuristic form (math), no formalizer model call
    r = o.think("calculate 6*7")
    assert r.verified and "42" in r.output
