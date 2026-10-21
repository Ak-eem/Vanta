import sys, tempfile, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from orchestrator.pool import Cooldowns, ResponseCache, ProviderPool

class Clock:
    t = 1000.0
    def __call__(self): return self.t

def test_cooldown_grows_and_clears():
    c = Clock(); cd = Cooldowns(c)
    assert cd.available("a")
    assert cd.fail("a", base=10) == 10
    assert not cd.available("a")
    c.t += 11
    assert cd.available("a")
    assert cd.fail("a", base=10) == 20
    cd.ok("a"); assert cd.available("a")

def test_rpm_budget():
    c = Clock(); cd = Cooldowns(c)
    for _ in range(3): cd.record_call("p")
    assert not cd.available("p", rpm=3)
    c.t += 61
    assert cd.available("p", rpm=3)

def test_daily_budget():
    c = Clock(); cd = Cooldowns(c)
    for _ in range(2): cd.record_call("p")
    assert not cd.available("p", daily=2)

class Boom:
    def execute(self, *a, **k): raise RuntimeError("HTTP 429")
class Gem:
    model = "g"
    def generate(self, p): return "gem:" + p

def test_failover_cache(tmp_path=None):
    d = pathlib.Path(tempfile.mkdtemp())
    pool = ProviderPool(openrouter=Boom(), gemini=Gem(), cache=ResponseCache(d / "c.db"), cooldowns=Cooldowns())
    text, label = pool.run("hi", "code")
    assert text == "gem:hi" and label.startswith("gemini")
    text2, label2 = pool.run("hi", "code")
    assert label2.startswith("cache")
    assert not pool.cd.available("openrouter")  # cooling after 429

def test_all_down():
    pool = ProviderPool(openrouter=Boom(), cache=ResponseCache(pathlib.Path(tempfile.mkdtemp()) / "c.db"), cooldowns=Cooldowns())
    try: pool.run("x", "code")
    except RuntimeError as e: assert "unavailable" in str(e)
    else: assert False
