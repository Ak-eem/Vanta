import json
import threading
import time

import pytest

from setups.guards import GuardError, ask_json, extract_json
from setups.pipeline import Builder, static_checks
from setups.probe import describe, estimate, probe
from setups.profiles import PROFILES, SetupStore, parse_decision, parse_switch
from setups.router import Router, Unavailable

GOOD_HTML = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Salon</title><link rel="stylesheet" href="style.css"></head><body>Call PHONE now</body></html>'


def test_store_switch_and_persist(tmp_path):
    p = tmp_path / "s.json"
    s = SetupStore(p)
    assert s.current == "everyday"
    s.set("think")
    assert SetupStore(p).current == "think"
    with pytest.raises(ValueError):
        s.set("nope")
    assert [x["id"] for x in s.state()["profiles"]] == list(PROFILES)


def test_switch_and_decision_phrases():
    assert parse_switch("switch to think mode") == "think"
    assert parse_switch("/setup offline") == "offline"
    assert parse_switch("go offline") == "offline"
    assert parse_switch("how do I switch to the offline site") is None
    assert parse_switch("use the builder setup") == "builder"
    assert parse_decision("save decision: use Paystack for payments") == "use Paystack for payments"
    assert parse_decision("what do you think?") is None


def test_ask_json_retries_and_gives_up():
    replies = iter(["no json here", 'sure {"a": 1}'])
    got = ask_json(lambda m: next(replies), [{"role": "user", "content": "x"}], lambda d: None if d.get("a") == 1 else "bad")
    assert got == {"a": 1}
    with pytest.raises(GuardError):
        ask_json(lambda m: "never json", [], lambda d: None, retries=2)
    assert extract_json('text ```json\n{"x": "}"}\n``` more') == {"x": "}"}


class Models:
    """Mock strong + fast models that answer by reading what the prompt asks for."""
    def __init__(self, html=GOOD_HTML, files=None, review=None, fix=None):
        self.html, self.review, self.fix = html, review or {"verdict": "ok", "issues": []}, fix
        self.files = files or [{"path": "index.html", "purpose": "page"}, {"path": "style.css", "purpose": "styles"}]
        self.threads, self.calls = set(), []

    def strong(self, msgs):
        t = msgs[-1]["content"]
        self.calls.append("strong")
        if "You are the architect" in t:
            return json.dumps({"summary": "A salon page", "files": self.files, "rules": ["mobile first"]})
        if "These automatic checks failed" in t:
            return json.dumps(self.fix or {"verdict": "changes", "issues": []})
        return json.dumps(self.review)

    def fast(self, msgs):
        self.threads.add(threading.get_ident())
        time.sleep(0.05)
        t = msgs[-1]["content"]
        self.calls.append("fast")
        return "```css\nbody{margin:0}\n```" if "style.css" in t.split("\n")[0] else self.html


def make(tmp_path, m, **kw):
    return Builder(m.strong, m.fast, tmp_path / "ws", checkpoint_base=tmp_path / "cp", **kw)


def test_build_happy_path_parallel_review_and_undo(tmp_path):
    m = Models(review={"verdict": "changes", "issues": [{"severity": "low", "path": "index.html", "find": "Call PHONE now", "replace": "Call PLACEHOLDER-PHONE now", "why": "mark placeholder"}]})
    b = make(tmp_path, m)
    r = b.build("salon site", "salon")
    assert r.status == "done", r.final
    assert (r.root / "index.html").read_text().count("PLACEHOLDER-PHONE") == 1
    assert (r.root / "style.css").read_text().strip() == "body{margin:0}"      # fences stripped
    assert r.patches_applied and not r.patches_skipped and r.failures == []
    assert len(m.threads) >= 2                                                 # files written in parallel
    assert m.calls.count("strong") == 2 and m.calls.count("fast") == 2         # strong only plans + reviews
    b.rewind()
    assert not (r.root / "index.html").exists() and not (r.root / "style.css").exists()


def test_failed_check_goes_to_fix_round(tmp_path):
    bad = GOOD_HTML.replace('<meta name="viewport" content="width=device-width">', "")
    fix = {"verdict": "changes", "issues": [{"severity": "high", "path": "index.html", "find": '<meta charset="utf-8">', "replace": '<meta charset="utf-8"><meta name="viewport" content="width=device-width">', "why": "phones"}]}
    m = Models(html=bad, fix=fix)
    r = make(tmp_path, m).build("x", "fixme")
    assert r.status == "done" and r.rounds == 1


def test_unfixable_failure_stops_and_reports(tmp_path):
    m = Models(html=GOOD_HTML.replace("Call PHONE now", "key = 'sk_live_ABCDEFGH12345678'"))
    r = make(tmp_path, m).build("x", "leaky")
    assert r.status == "failed" and any("secret" in f for f in r.failures)
    assert "Still failing" in r.final


def test_bad_patch_is_skipped_not_applied(tmp_path):
    m = Models(review={"verdict": "changes", "issues": [
        {"severity": "low", "path": "index.html", "find": "text that is not there", "replace": "x", "why": "?"},
        {"severity": "low", "path": "../escape.txt", "find": "a", "replace": "b", "why": "?"},
        {"severity": "low", "path": ".env", "find": "a", "replace": "b", "why": "?"}]})
    r = make(tmp_path, m).build("x", "skips")
    assert r.status == "done" and len(r.patches_skipped) == 3 and not r.patches_applied
    assert not (tmp_path / "escape.txt").exists()


def test_unsafe_plan_is_rejected(tmp_path):
    for bad in ("../evil.html", ".env"):
        m = Models(files=[{"path": bad, "purpose": "x"}])
        r = make(tmp_path, m).build("x", "unsafe")
        assert r.status == "failed" and "could not" in r.final.lower()
    assert not (tmp_path / "evil.html").exists()
    # an absolute path is not honoured: it lands inside the project folder, never at the real location
    m = Models(files=[{"path": "/tmp/vanta_abs_test.html", "purpose": "x"}])
    r = make(tmp_path, m).build("x", "abs")
    import os
    assert not os.path.exists("/tmp/vanta_abs_test.html")
    assert (r.root / "tmp" / "vanta_abs_test.html").exists()


def test_stop_during_writing(tmp_path):
    m = Models()
    holder = {}
    def stage(run):
        if run.stage == "writing files":
            run.stop = True
    b = make(tmp_path, m, on_stage=stage)
    r = b.build("x", "stopme")
    assert r.status == "stopped"


def test_folder_name_cannot_escape(tmp_path):
    m = Models()
    r = make(tmp_path, m).build("x", "../../outside")
    assert (tmp_path / "ws") in r.root.parents


def test_static_checks_find_missing_link(tmp_path):
    (tmp_path / "a.html").write_text(GOOD_HTML)
    fails = static_checks(tmp_path)
    assert any("style.css" in f and "does not exist" in f for f in fails)


class FakeLocal:
    def __init__(self, ok): self.ok, self.model = ok, "fake"
    def available(self): return self.ok
    def generate(self, p): return "local:" + p[-20:]


def test_router_policies(tmp_path):
    st = SetupStore(tmp_path / "s.json")
    r = Router(st, lambda m: "strong", lambda m: "fast", FakeLocal(True))
    s, f = r.pair()
    assert (s([]), f([])) == ("strong", "fast")                    # everyday: cloud
    st.set_builder_fast("local")
    assert r.pair()[1]([{"role": "user", "content": "hi"}]).startswith("local:")
    st.set("offline")
    s, f = r.pair()
    assert s([{"role": "user", "content": "x"}]).startswith("local:")
    r2 = Router(st, lambda m: "strong", lambda m: "fast", FakeLocal(False))
    with pytest.raises(Unavailable):
        r2.pair()                                                  # offline never falls back to the cloud
    r3 = Router(st, lambda m: "strong", lambda m: "fast", None)
    with pytest.raises(Unavailable):
        r3.strong()


def test_probe_and_estimates(tmp_path):
    rep = probe(size_mb=8, folder=tmp_path / "p")
    assert rep["disk"]["mb_s"] > 0 and rep["mem_gb_s"] > 0 and rep["ram_total_gb"] > 0
    assert not (tmp_path / "p" / "probe.bin").exists()             # temp file cleaned up
    assert len(estimate(rep)) == 6
    fake = {"ram_total_gb": 16, "ram_free_gb": 10, "cpu_cores": 2, "disk": {"mb_s": 100, "cache_dropped": True}, "mem_gb_s": 20, "gflops": 100}
    by = {e["model"]: e for e in estimate(fake)}
    giant = by["A 1T mixture-of-experts model (32B active)"]
    assert "streams" in giant["mode"] and giant["s_per_word"] > 100       # a hard drive makes the giant very slow
    assert "fits" in by["A 7-8B local model"]["mode"]
    assert "words" in describe(fake)
