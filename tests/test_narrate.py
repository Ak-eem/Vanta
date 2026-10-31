from types import SimpleNamespace as NS

from research.narrate import Narrator, clean


def run(stage, **k):
    base = dict(stage=stage, title="VR market", sources=[NS(url="https://www.a.com/x"), NS(url="https://b.org/y")], facts=[], dropped=0, status="running", summary="VR is growing.")
    base.update(k)
    return NS(**base)


def make(fast=None, gap=5.0, cap=7):
    out, t = [], [0.0]
    c = [0]
    def varied(m):
        c[0] += 1
        return f"Okay, step {c[0]}."
    n = Narrator(fast or varied, out.append, lambda: t[0], min_gap=gap, max_lines=cap)
    return n, out, t


def test_clean():
    assert clean('  "Hello **there**"\n') == "Hello there" and clean("") == "" and len(clean("x" * 500)) == 200


def test_speaks_each_milestone_once_in_order():
    n, out, t = make()
    n.observe(run("searching")); t[0] += 6
    n.observe(run("searching")); n.observe(run("reading")); t[0] += 6
    n.observe(run("reading"))
    n.finish(run("writing", status="running"))
    assert len(out) == 2                      # "start" and "sources", never repeated


def test_rate_limited_but_ending_is_forced():
    n, out, t = make(gap=5.0)
    n.observe(run("searching")); n.observe(run("reading"))     # second is too soon, skipped
    assert n.say("x", "n", force=True)
    n._pool.shutdown(wait=True)
    assert len(out) == 2


def test_notes_only_contain_verified_things():
    seen = []
    n, out, t = make(fast=lambda m: seen.append(m[1]["content"]) or "Fine.")
    facts = [NS(claim="Quest sold 20M", quote="q")] * 3
    n.observe(run("checking", facts=facts)); n._pool.shutdown(wait=True)
    assert "Quest sold 20M" in seen[0] and "3 facts" in seen[0]


def test_model_failure_is_silent_and_finish_handles_it():
    def boom(m): raise RuntimeError("down")
    n, out, t = make(fast=boom)
    n.observe(run("searching"))
    assert n.finish(run("done", status="done")) is None and out == []


def test_finish_gives_closing_line_only_when_done():
    n, out, t = make(fast=lambda m: "All done, it's on screen.")
    assert n.finish(run("done", status="done")) == "All done, it's on screen."
    n2, _, _ = make()
    assert n2.finish(run("done", status="failed")) is None
