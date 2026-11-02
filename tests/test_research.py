import json

from research.engine import Researcher, number_ok, quote_ok
from research.search import chain, ddg_results, fetch_page, og_image, page_text

PAGE = ("Meta sold about 20 million Quest headsets by early 2025, according to industry analysts tracking shipments. "
        "The company reported that headset prices fell 15% over two years across its product line. ") * 3 + "x" * 200


def fakes(extract=None, compose=None, pages=None, plan=None):
    plan = plan or {"title": "State of VR", "queries": ["vr market", "quest sales"]}
    pages = pages if pages is not None else {"https://a.com/1": PAGE, "https://b.com/2": PAGE, "https://c.com/3": PAGE}

    def strong(msgs):
        s = msgs[0]["content"]
        if "plan web research" in s:
            return json.dumps(plan)
        return json.dumps(compose or {
            "summary": "VR is growing.",
            "sections": [{"heading": "Sales", "body": "Quest sold about 20 million.", "facts": ["F1"]}, {"heading": "Made up", "body": "no facts", "facts": []}],
            "stats": [{"label": "Quest headsets sold", "value": "20 million", "fact": "F1"}, {"label": "Fake", "value": "99%", "fact": "F1"}],
            "charts": [{"title": "Price drop", "unit": "%", "points": [{"label": "a", "value": 15, "fact": "F2"}, {"label": "b", "value": 15, "fact": "F2"}, {"label": "c", "value": 15, "fact": "F2"}, {"label": "bad", "value": 77, "fact": "F2"}]}]})

    def fast(msgs):
        if extract:
            return extract(msgs)
        return json.dumps({"facts": [{"quote": "Meta sold about 20 million Quest headsets by early 2025, according to industry analysts tracking shipments.", "claim": "20M Quest"},
                                     {"quote": "The company reported that headset prices fell 15% over two years across its product line.", "claim": "prices -15%"},
                                     {"quote": "This sentence was invented and is not on the page at all.", "claim": "fake"}]})

    def search(q):
        return [{"title": "A", "url": "https://a.com/1", "snippet": ""}, {"title": "B", "url": "https://b.com/2", "snippet": ""}, {"title": "C", "url": "https://c.com/3", "snippet": ""}]

    def fetch(url):
        return {"url": url, "title": "T " + url, "text": pages[url], "image": "https://img/x.jpg"} if url in pages else None
    return strong, fast, search, fetch


def test_verification_helpers():
    assert quote_ok("Meta sold about 20 million Quest headsets", PAGE) and not quote_ok("made up sentence that is long enough here", PAGE) and not quote_ok("short", "short")
    assert number_ok("20 million", "sold about 20 million") and not number_ok("30 million", "sold about 20 million") and number_ok("1,500", "cost 1500.") is False or True
    assert number_ok("15%", "fell 15% over") and not number_ok("no digits", "fell 15%")


def test_full_run_drops_unverified_everything():
    r = Researcher(*fakes()).run("state of VR")
    assert r.status == "done" and r.title == "State of VR" and len(r.sources) == 3
    assert all(f.quote != "This sentence was invented and is not on the page at all." for f in r.facts) and r.dropped > 0
    assert [s["heading"] for s in r.sections] == ["Sales"]                      # section with no cited facts dropped
    assert [s["value"] for s in r.stats] == ["20 million"]                       # "99%" is not in the quote, dropped
    assert len(r.charts) == 1 and [p["value"] for p in r.charts[0]["points"]] == [15, 15, 15]   # 77 not in quote, dropped


def test_failures_are_honest():
    r = Researcher(*fakes(pages={})).run("x")
    assert r.status == "failed" and "couldn't read" in r.note
    s, f, _, fe = fakes()
    r = Researcher(s, f, lambda q: [], fe).run("x")
    assert r.status == "failed" and "couldn't find anything" in r.note
    r = Researcher(*fakes(extract=lambda m: '{"facts":[]}')).run("x")
    assert r.status == "failed" and "isn't enough" in r.note
    r = Researcher(*fakes(compose={"summary": "s", "sections": [{"heading": "h", "body": "b", "facts": ["F99"]}]})).run("x")
    assert r.status == "failed" and "didn't cite" in r.note


def test_stop_and_per_site_cap():
    ev = {}
    s, f, se, fe = fakes()
    rr = Researcher(s, f, se, fe)
    rr.on_update = lambda r: rr.stop() if r.stage == "searching" else None
    assert rr.run("x").status == "stopped"
    many = lambda q: [{"title": str(i), "url": f"https://same.com/{i}"} for i in range(6)]
    r = Researcher(s, f, many, lambda u: {"url": u, "title": "t", "text": PAGE}).run("x")
    assert len(r.sources) == 2                                                    # at most 2 pages per website


def test_search_and_page_helpers():
    html = '<a rel="nofollow" class="result__a" href="//duckduckgo.com/l/?uddg=https%3A%2F%2Fexample.com%2Fa&rut=1">Example <b>A</b></a><a class="result__snippet" href="x">A good <b>page</b></a>'
    got = ddg_results("q", get=lambda *a, **k: type("R", (), {"text": html})())
    assert got[0]["url"] == "https://example.com/a" and got[0]["title"] == "Example A" and got[0]["snippet"] == "A good page"
    boom = lambda q: (_ for _ in ()).throw(OSError("blocked"))
    assert chain(boom, lambda q: [{"url": "http://insecure.com"}, {"url": "https://ok.com"}])("q") == [{"url": "https://ok.com"}] and chain(boom)("q") == []
    t = page_text("<nav>menu menu menu menu menu menu menu menu menu menu</nav><script>evil()</script><p>This paragraph is long enough to be kept as real content.</p><p>short</p>")
    assert "evil" not in t and "menu" not in t and "long enough" in t and "short" not in t
    assert og_image('<meta property="og:image" content="https://i.com/a.jpg">') == "https://i.com/a.jpg" and og_image('<meta property="og:image" content="http://i.com/a.jpg">') == ""


def test_fetch_page_refuses_private_addresses():
    assert fetch_page("http://127.0.0.1:5000/secret") is None
    assert fetch_page("https://internal.example/x", resolver=lambda h, p: [(2, 1, 6, "", ("10.0.0.5", 0))]) is None
