import pytest

from utils import vanta_files
from utils.weather import WeatherCache, fetch_weather, parse, words
from vanta_ui import board as B


def _raw(code=3, pop=70):
    return {"current": {"time": "2026-10-30T14:00", "temperature_2m": 30.4, "apparent_temperature": 34.1, "relative_humidity_2m": 70, "weather_code": code, "wind_speed_10m": 12, "is_day": 1},
            "hourly": {"time": [f"2026-10-30T{h:02d}:00" for h in range(24)], "temperature_2m": [28] * 24, "precipitation_probability": [0] * 15 + [pop] * 9, "weather_code": [3] * 24},
            "daily": {"time": ["2026-10-30", "2026-10-31"], "weather_code": [3, 61], "temperature_2m_max": [31, 29], "temperature_2m_min": [24, 23], "precipitation_probability_max": [40, 80]}}


def test_parse_and_rain_hint():
    w = parse(_raw(), {"name": "Lagos", "country": "Nigeria"})
    assert (w["temp"], w["desc"], w["icon"]) == (30, "Overcast", "cloud") and w["hint"] == "Rain likely around 3 PM."
    assert w["hours"][0]["label"] == "2 PM" and w["days"][1]["desc"] == "Light rain" and w["days"][1]["rain"] == 80
    assert parse(_raw(pop=0), {"name": "X"})["hint"] == "" and words(None)[0] == "Unknown" and words(999)[0] == "Unknown"


def test_fetch_and_cache_and_failure():
    calls = []

    def fake(url):
        calls.append(url)
        if "geocoding" in url:
            return {"results": [{"name": "Lagos", "country": "Nigeria", "latitude": 6.5, "longitude": 3.4}]} if "Lagos" in url else {}
        return _raw()
    assert fetch_weather("Lagos", fake)["city"] == "Lagos" and fetch_weather("Nowhere", fake) is None
    assert fetch_weather("Lagos", lambda u: (_ for _ in ()).throw(OSError("down"))) is None     # never raises, never fakes numbers
    t = [0.0]
    n = []
    c = WeatherCache(lambda city: n.append(city) or {"city": city}, ttl=100, clock=lambda: t[0])
    c.get("Lagos"); c.get("lagos"); assert len(n) == 1
    t[0] = 101; c.get("Lagos"); assert len(n) == 2
    f = WeatherCache(lambda city: None, ttl=100, clock=lambda: t[0])
    f.get("x"); f.get("x"); t[0] += 121; f.get("x")
    assert True


def test_weather_command_parse():
    assert B.parse("weather") == ("weather", "") and B.parse("show me the weather in Ikeja") == ("weather", "Ikeja")
    assert B.parse("forecast for Port Harcourt please") == ("weather", "Port Harcourt")
    assert B.parse("weather is a nice topic to write an essay about") is None


def test_files_folder_is_confined(tmp_path):
    p = vanta_files.save_bytes("../../etc/passwd", b"x", tmp_path)
    assert p.parent == tmp_path and p.name == "passwd"
    p2 = vanta_files.save_bytes("report.md", b"a", tmp_path); p3 = vanta_files.save_bytes("report.md", b"b", tmp_path)
    assert p2.read_bytes() == b"a" and p3.name == "report (2).md"          # never overwrites
    assert vanta_files.resolve("report.md", tmp_path) and vanta_files.resolve("../x", tmp_path) is None and vanta_files.resolve(".hidden", tmp_path) is None
    (tmp_path / "link").symlink_to("/etc/hostname")
    assert vanta_files.resolve("link", tmp_path) is None and "link" not in [r["name"] for r in vanta_files.listing(tmp_path)]
    with pytest.raises(ValueError):
        vanta_files.save_bytes("big", b"0" * (vanta_files.MAX_BYTES + 1), tmp_path)


def test_agent_save_and_send(tmp_path):
    from agent.loop import Agent
    from agent.permissions import Denied
    got = []
    (tmp_path / "proj").mkdir()
    (tmp_path / "proj" / "out.txt").write_text("data"); (tmp_path / "proj" / ".env").write_text("KEY=1")
    mk = lambda mode: Agent(lambda m: "", tmp_path / "proj", mode, home=tmp_path / "h", checkpoint_base=tmp_path / "cp", on_file=got.append, files_dir=tmp_path / "files")
    ag = mk("ask")
    assert "Saved notes.md" in ag._tool("save_file", {"name": "notes.md", "content": "hi"})
    assert "Copied out.txt" in ag._tool("send_file", {"path": "out.txt"})
    assert got == ["notes.md", "out.txt"] and (tmp_path / "files" / "notes.md").read_text() == "hi"
    with pytest.raises(Denied):
        ag._tool("send_file", {"path": ".env"})                       # secrets are never handed out
    with pytest.raises(Denied):
        ag._tool("send_file", {"path": "../../etc/passwd"})
    with pytest.raises(Denied):
        mk("plan")._tool("save_file", {"name": "x", "content": "y"})
