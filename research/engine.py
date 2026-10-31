"""The researcher. A strong model plans the questions and writes the report; a fast model reads each page and pulls out facts.
Nothing reaches the report unless it is checked: every fact must quote its page word for word, every number in a stat or chart must appear in
that quote, and every section must cite facts. Anything that fails is dropped and counted, never invented."""
from __future__ import annotations

import re
import threading
import uuid
from concurrent.futures import ThreadPoolExecutor
from dataclasses import dataclass, field
from typing import Callable, Optional
from urllib.parse import urlparse

from setups.guards import ask_json

PLAN_SYSTEM = """You plan web research. Reply with JSON only: {"title":"short report title","queries":["search query", "..."]}
Give 3 to 4 different search queries that together cover the topic: what it is, recent numbers and trends, and different viewpoints. Plain queries, no operators."""

EXTRACT_SYSTEM = """You read one web page and pull out facts about the topic. Reply with JSON only:
{"facts":[{"quote":"a sentence copied EXACTLY, word for word, from the page","claim":"the fact in your own short words"}]}
Rules: at most 4 facts. Prefer facts with numbers, dates and names. The quote must appear in the page text exactly. If the page has nothing useful, reply {"facts":[]}."""

COMPOSE_SYSTEM = """You write a research report ONLY from the numbered facts given. Reply with JSON only:
{"summary":"2-3 sentence plain summary",
 "sections":[{"heading":"short","body":"2-4 plain sentences","facts":["F1","F3"]}],
 "stats":[{"label":"what the number is","value":"the number with its unit as written in the fact","fact":"F2"}],
 "charts":[{"title":"what is compared","unit":"unit","points":[{"label":"name","value":123,"fact":"F4"}]}]}
Rules: use only the facts; every section cites its facts; a stat's value and every chart value must appear in the cited fact's quote; charts need 3 to 8 points of the same unit; at most 3 sections-worth of 3 to 5, 4 stats, 2 charts. Say when sources disagree. Do not invent anything."""

NUM = re.compile(r"\d[\d,]*\.?\d*")


@dataclass
class Source:
    n: int
    title: str
    url: str
    image: str = ""
    text: str = ""
    status: str = "todo"            # todo | reading | read | failed


@dataclass
class Fact:
    id: str
    src: int
    quote: str
    claim: str


@dataclass
class ReportRun:
    id: str
    topic: str
    title: str = ""
    stage: str = "planning"          # planning | searching | reading | checking | writing
    status: str = "running"          # running | done | failed | stopped
    steps: list[dict] = field(default_factory=list)
    sources: list[Source] = field(default_factory=list)
    facts: list[Fact] = field(default_factory=list)
    summary: str = ""
    sections: list[dict] = field(default_factory=list)
    stats: list[dict] = field(default_factory=list)
    charts: list[dict] = field(default_factory=list)
    dropped: int = 0
    note: str = ""
    started: float = 0.0
    finished: float = 0.0


def _norm(s: str) -> str:
    return " ".join(re.sub(r"[“”]", '"', re.sub(r"[‘’]", "'", s)).lower().split())


def _nums(s: str) -> set[str]:
    return {m.group(0).replace(",", "").rstrip(".") for m in NUM.finditer(s)}


def quote_ok(quote: str, text: str) -> bool:
    q = _norm(quote)
    return len(q) >= 25 and q in _norm(text)


def number_ok(value, quote: str) -> bool:
    got = _nums(str(value))
    return bool(got) and got <= _nums(quote)


class Researcher:
    def __init__(self, strong: Callable, fast: Callable, search: Callable[[str], list[dict]], fetch: Callable[[str], Optional[dict]],
                 on_update: Callable[[ReportRun], None] = lambda r: None, max_sources: int = 8, clock: Callable[[], float] = lambda: 0.0) -> None:
        self.strong, self.fast, self.search, self.fetch, self.on_update, self.max_sources, self.clock = strong, fast, search, fetch, on_update, max_sources, clock
        self.r: Optional[ReportRun] = None
        self._stop = threading.Event()

    def stop(self) -> None:
        self._stop.set()

    def _step(self, label: str, state: str = "active") -> None:
        for s in self.r.steps:
            if s["state"] == "active":
                s["state"] = "done"
        self.r.steps.append({"label": label, "state": state})
        self.on_update(self.r)

    def _stopped(self) -> bool:
        if self._stop.is_set():
            self.r.status, self.r.note = "stopped", "Stopped when you asked."
            self.on_update(self.r)
            return True
        return False

    def run(self, topic: str) -> ReportRun:
        r = self.r = ReportRun(uuid.uuid4().hex[:10], topic[:200], title=topic[:60], started=self.clock())
        self.on_update(r)
        try:
            self._step("Planning the questions")
            plan = ask_json(self.strong, [{"role": "system", "content": PLAN_SYSTEM}, {"role": "user", "content": f"Topic: {topic}"}],
                            lambda d: None if isinstance(d, dict) and isinstance(d.get("queries"), list) and d["queries"] else 'Reply {"title":...,"queries":[...]}.')
            r.title = str(plan.get("title") or topic)[:70]
            queries = [str(q)[:120] for q in plan["queries"][:4]]
            if self._stopped():
                return r
            r.stage = "searching"
            self._step(f"Searching the web ({len(queries)} searches)")
            seen, hosts = set(), {}
            for q in queries:
                for res in self.search(q):
                    host = urlparse(res["url"]).netloc.lower().removeprefix("www.")
                    if res["url"] in seen or hosts.get(host, 0) >= 2 or len(r.sources) >= self.max_sources:
                        continue
                    seen.add(res["url"]); hosts[host] = hosts.get(host, 0) + 1
                    r.sources.append(Source(len(r.sources) + 1, res.get("title", host)[:120], res["url"]))
            if not r.sources:
                r.status, r.note = "failed", "I couldn't find anything. The search engines may be blocking me, or you may be offline."
                self.on_update(r)
                return r
            if self._stopped():
                return r
            r.stage = "reading"
            self._step(f"Reading {len(r.sources)} sources")
            with ThreadPoolExecutor(max_workers=4) as pool:
                list(pool.map(self._read, r.sources))
            good = [s for s in r.sources if s.status == "read"]
            if self._stopped():
                return r
            if not good:
                r.status, r.note = "failed", "I found pages but couldn't read any of them."
                self.on_update(r)
                return r
            r.stage = "checking"
            self._step("Checking facts against the pages")
            for s in good:
                self._extract(s, topic)
            if len(r.facts) < 3:
                r.status, r.note = "failed", f"I could only verify {len(r.facts)} fact(s), which isn't enough for a report."
                self.on_update(r)
                return r
            if self._stopped():
                return r
            r.stage = "writing"
            self._step("Writing the report")
            self._compose(topic)
            r.status, r.finished = "done", self.clock()
            r.steps[-1]["state"] = "done"
            self.on_update(r)
            return r
        except Exception as exc:
            r.status, r.note = "failed", f"I had to stop: {exc}"
            self.on_update(r)
            return r

    def _read(self, s: Source) -> None:
        s.status = "reading"
        try:
            page = self.fetch(s.url)
            if page and len(page.get("text", "")) > 200:
                s.text, s.image, s.status = page["text"], page.get("image", ""), "read"
                s.title = page.get("title") or s.title
            else:
                s.status = "failed"
        except Exception:
            s.status = "failed"
        self.on_update(self.r)

    def _extract(self, s: Source, topic: str) -> None:
        try:
            d = ask_json(self.fast, [{"role": "system", "content": EXTRACT_SYSTEM}, {"role": "user", "content": f"Topic: {topic}\n\nPage text:\n{s.text[:5000]}"}],
                         lambda x: None if isinstance(x, dict) and isinstance(x.get("facts"), list) else 'Reply {"facts":[...]}.', retries=2)
        except Exception:
            return
        for f in d["facts"][:4]:
            if isinstance(f, dict) and quote_ok(str(f.get("quote", "")), s.text):
                self.r.facts.append(Fact(f"F{len(self.r.facts) + 1}", s.n, str(f["quote"])[:400], str(f.get("claim", ""))[:200]))
            else:
                self.r.dropped += 1
        self.on_update(self.r)

    def _compose(self, topic: str) -> None:
        r = self.r
        facts = "\n".join(f'{f.id} (source {f.src}): "{f.quote}"' for f in r.facts[:30])
        rep = ask_json(self.strong, [{"role": "system", "content": COMPOSE_SYSTEM}, {"role": "user", "content": f"Topic: {topic}\n\nFacts:\n{facts}"}],
                       lambda d: None if isinstance(d, dict) and isinstance(d.get("sections"), list) and d["sections"] else 'Reply with "summary" and a non-empty "sections".')
        by = {f.id: f for f in r.facts}
        r.summary = str(rep.get("summary", ""))[:500]
        for s in rep["sections"][:5]:
            ids = [i for i in (s.get("facts") or []) if i in by] if isinstance(s, dict) else []
            if ids and s.get("heading") and s.get("body"):
                r.sections.append({"heading": str(s["heading"])[:80], "body": str(s["body"])[:700], "src": sorted({by[i].src for i in ids})})
            else:
                r.dropped += 1
        for st in (rep.get("stats") or [])[:4]:
            f = by.get(st.get("fact")) if isinstance(st, dict) else None
            if f and st.get("label") and number_ok(st.get("value"), f.quote):
                r.stats.append({"label": str(st["label"])[:70], "value": str(st["value"])[:24], "src": f.src})
            else:
                r.dropped += 1
        for c in (rep.get("charts") or [])[:2]:
            pts = []
            for p in (c.get("points") or [])[:8] if isinstance(c, dict) else []:
                f = by.get(p.get("fact")) if isinstance(p, dict) else None
                if f and isinstance(p.get("value"), (int, float)) and number_ok(p["value"], f.quote) and p.get("label"):
                    pts.append({"label": str(p["label"])[:24], "value": p["value"], "src": f.src})
                else:
                    r.dropped += 1
            if len(pts) >= 3:
                r.charts.append({"title": str(c.get("title", ""))[:70], "unit": str(c.get("unit", ""))[:12], "points": pts})
        if not r.sections:
            raise RuntimeError("The model's report didn't cite any facts, so I threw it away rather than show something unchecked.")
