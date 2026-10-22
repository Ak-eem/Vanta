import sys, pathlib, json
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from vanta_ui.stage import parse_model_stage, wants_stage, code_result_stage, alert_stage

def test_wants_stage():
    assert wants_stage("can you chart my spending") and wants_stage("Show me a comparison of these")
    assert not wants_stage("how are you")

def test_parse_model_stage_extracts_and_cleans():
    reply = 'Here you go.\n```stage\n{"title":"T","blocks":[{"id":"a","type":"node","data":{}}]}\n```\nDone.'
    clean, st = parse_model_stage(reply)
    assert "```" not in clean and "Here you go." in clean and st["title"] == "T" and st["blocks"][0]["id"] == "a"

def test_parse_rejects_bad_json_and_empty():
    assert parse_model_stage("x ```stage\n{nope}\n``` y")[1] is None
    assert parse_model_stage('```stage\n{"blocks": []}\n```')[1] is None
    assert parse_model_stage("no block here") == ("no block here", None)

def test_code_stage_is_a_linked_investigation():
    out = "FILENAME: main.py\n```python\nprint('hi')\n```"
    s = code_result_stage("say hi", out, True, "CodeVerifier", 2)
    assert s["layout"] == "investigation" and len(s["links"]) == 2
    assert any("Fixed problems" in i["label"] for b in s["blocks"] if b["type"] == "steps" for i in b["data"]["items"])
    assert code_result_stage("x", "no code", True, "m", 1) is None

def test_alert_stage_has_actions():
    s = alert_stage("medium", "Odd program", "update.exe runs from temp")
    assert [a["id"] for a in s["actions"]][1] == "dismiss" and s["layout"] == "single"
