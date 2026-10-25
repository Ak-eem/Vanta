import json
from pathlib import Path
from doctor.fixer import apply_edits, apply_report, detect_command, is_test_file, run_doctor


def project(tmp):
    p = tmp / "proj"; (p / "tests").mkdir(parents=True)
    (p / "calc.py").write_text("def add(a, b):\n    return a - b\n")
    (p / "tests" / "test_calc.py").write_text("from calc import add\n\ndef test_add():\n    assert add(2, 3) == 5\n")
    return p


GOOD = lambda msgs: json.dumps([{"file": "calc.py", "find": "return a - b", "replace": "return a + b"}])


def test_finds_the_bug_fixes_it_in_a_copy_and_shows_a_diff(tmp_path):
    p = project(tmp_path)
    r = run_doctor("calc", p, GOOD)
    assert r.status == "fixed" and "calc.py" in r.files and "+    return a + b" in r.diff
    assert "a - b" in (p / "calc.py").read_text()                      # original untouched until you apply


def test_apply_writes_fix_and_keeps_a_backup(tmp_path):
    p = project(tmp_path)
    r = run_doctor("calc", p, GOOD)
    apply_report(r, p, backups=tmp_path / "bk")
    assert "a + b" in (p / "calc.py").read_text()
    assert any("a - b" in f.read_text() for f in (tmp_path / "bk").rglob("calc.py"))


def test_never_edits_tests_or_escapes_the_project(tmp_path):
    p = project(tmp_path)
    n, problems = apply_edits(p, [{"file": "tests/test_calc.py", "find": "== 5", "replace": "== -1"},
                                  {"file": "../evil.py", "find": "x", "replace": "y"},
                                  {"file": "calc.py", "find": "nonexistent", "replace": "z"}])
    assert n == 0 and len(problems) == 3
    assert "== 5" in (p / "tests" / "test_calc.py").read_text()


def test_gives_up_honestly(tmp_path):
    p = project(tmp_path)
    assert run_doctor("calc", p, lambda m: "[]").status == "failed"
    assert run_doctor("calc", p, lambda m: json.dumps([{"file": "calc.py", "find": "return a - b", "replace": "return a * b"}]), max_rounds=2).status == "failed"
    assert "a - b" in (p / "calc.py").read_text()


def test_already_passing_and_no_tests(tmp_path):
    p = project(tmp_path); (p / "calc.py").write_text("def add(a, b):\n    return a + b\n")
    assert run_doctor("calc", p, GOOD).status == "passed"
    empty = tmp_path / "empty"; empty.mkdir(); (empty / "a.txt").write_text("x")
    assert run_doctor("e", empty, GOOD).status == "no_tests"
    assert detect_command(empty) is None and is_test_file("tests/x.py") and not is_test_file("calc.py")


def test_keeps_going_while_progress_and_stops_when_stuck(tmp_path):
    p = tmp_path / "proj"; (p / "tests").mkdir(parents=True)
    (p / "m.py").write_text("A = 0\nB = 0\nC = 0\n")
    (p / "tests" / "test_m.py").write_text("import m\n\ndef test_a():\n    assert m.A == 1\ndef test_b():\n    assert m.B == 1\ndef test_c():\n    assert m.C == 1\n")
    seq = iter(["A = 0", "B = 0", "C = 0"])
    fixes = lambda msgs: json.dumps([{"file": "m.py", "find": (n := next(seq)), "replace": n[0] + " = 1"}])
    r = run_doctor("m", p, fixes)                       # three separate bugs need three rounds: more than the old limit of 4 would allow with retries
    assert r.status == "fixed" and len(r.rounds) == 4
    q = tmp_path / "q"; (q / "tests").mkdir(parents=True)
    (q / "m.py").write_text("A = 0\n"); (q / "tests" / "test_m.py").write_text("import m\n\ndef test_a():\n    assert m.A == 1\n")
    calls = []
    noop = lambda msgs: calls.append(1) or json.dumps([{"file": "m.py", "find": "A = 0", "replace": "A = 0  # tried"}])
    r2 = run_doctor("q", q, noop)
    assert r2.status == "failed" and len(calls) <= 2      # same failure twice: stop, don't burn the model's free quota
