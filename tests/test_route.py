import sys, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from utils import route as R


def setup_function(_):
    R._cache.clear()


def test_parse_basic_and_modes():
    assert R.parse_route_request("route to Ikeja") == (None, "Ikeja", "driving")
    assert R.parse_route_request("Give me directions to Lekki Phase 1, please") == (None, "Lekki Phase 1", "driving")
    assert R.parse_route_request("route from Yaba to Ikeja by bike") == ("Yaba", "Ikeja", "bike")
    assert R.parse_route_request("take me to Surulere on foot")[2] == "foot"
    assert R.parse_route_request("how far is Ikeja from Yaba?") == ("Yaba", "Ikeja", "driving")
    assert R.parse_route_request("how long does it take to get to Abuja") == (None, "Abuja", "driving")
    assert R.parse_route_request("how far is it from Yaba to Ikeja") == ("Yaba", "Ikeja", "driving")


def test_parse_ignores_other_chat():
    for t in ["how long to learn python", "what's the weather in Lagos", "write a route handler in flask", "hello", ""]:
        assert not R.needs_route(t), t


def test_thin_keeps_ends_and_limit():
    pts = [[i, i] for i in range(1000)]
    out = R.thin(pts, 200)
    assert len(out) == 200 and out[0] == [0, 0] and out[-1] == [999, 999]
    assert R.thin(pts[:5], 200) == pts[:5]


def test_minutes_format():
    assert R.fmt_minutes(0.2) == "1 min" and R.fmt_minutes(38) == "38 min"
    assert R.fmt_minutes(65) == "1 h 5 min" and R.fmt_minutes(120) == "2 h"


def fake(url, timeout=6):
    if "nominatim" in url:
        if "Nowhere" in url:
            return []
        if "Ikeja" in url:
            return [{"lat": "6.6018", "lon": "3.3515", "display_name": "Ikeja, Lagos, Nigeria"}]
        return [{"lat": "6.5244", "lon": "3.3792", "display_name": "Lagos, Nigeria"}]
    if "/route/v1/" in url:
        return {"code": "Ok", "routes": [{"distance": 12400, "duration": 2280,
                "geometry": {"coordinates": [[3.3792, 6.5244], [3.36, 6.56], [3.3515, 6.6018]]}}]}
    raise AssertionError(url)


def test_get_route_with_assumed_start():
    text, card = R.get_route("route to Ikeja", "Lagos", fake, throttle=False)
    assert card["km"] == 12.4 and card["min"] == 38 and card["mode"] == "driving"
    assert card["points"][0] == [6.5244, 3.3792] and card["points"][-1] == [6.6018, 3.3515]
    assert "12.4 km" in text and "38 min" in text and "assumed" in text and "without live traffic" in text


def test_get_route_failures_are_quiet():
    assert R.get_route("route to Nowhere", "Lagos", lambda u, t=6: [] if "nominatim" in u else {}, throttle=False) == ("", None)
    assert R.get_route("route to Ikeja", "", fake, throttle=False) == ("", None)        # no start known
    def boom(u, t=6): raise OSError("offline")
    assert R.get_route("route to Ikeja", "Lagos", boom, throttle=False) == ("", None)


def test_coordinates_skip_the_network():
    def never(u, t=6): raise AssertionError("no network for raw coordinates")
    assert R.geocode("6.5244, 3.3792", never)["lat"] == 6.5244
    assert R.geocode("95, 3", never) is None
