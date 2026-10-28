"""Run in its own process with a throwaway HOME (see test_setups_server.py). Prints one JSON line of results."""
import json, os, sys, time
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import vanta_ui.server as S

sio, app = S.socketio, S.app
c = sio.test_client(app, query_string="token=" + S.auth.get_token())
seen = []

def pump(timeout=0.0, until=None):
    end = time.time() + timeout
    while True:
        seen.extend(c.get_received())
        if until is None or until() or time.time() > end:
            return
        time.sleep(0.1)

def names(n): return [e for e in seen if e["name"] == n]
def say(text, **kw): c.emit("chat", {"message": text, **kw})

out = {}
pump()
st = names("setup_state")
out["connect_state"] = st[-1]["args"][0]["current"] if st else None

# patch the cloud so nothing real is called
captured = {}
def fake_stream(sid, messages, mode, reasoning_effort=None, model=None):
    captured.update(system=messages[0]["content"], effort=reasoning_effort, model=model)
    return "ok"
S.stream_response = fake_stream
S.save_history = lambda *a, **k: None
S.compact_history_if_needed = lambda *a, **k: None

say("switch to think mode"); pump(3, lambda: any("Think with me" in str(e["args"]) for e in names("response")))
out["switched_text"] = any("Think with me" in str(e["args"]) for e in names("response"))
out["state_after_switch"] = names("setup_state")[-1]["args"][0]["current"]

say("should I charge more for websites?"); pump(8, lambda: bool(captured))
out["think_overlay"] = "thinking partner" in captured.get("system", "")
out["think_effort"] = captured.get("effort")

say("save decision: use Paystack for payments"); pump(5)
out["decision_saved"] = any(n.get("kind") == "decision" and "Paystack" in n.get("text", "") for n in S.notes_db.all())

# offline
class FakeLocal:
    model = "fake"
    def available(self): return True
    def generate(self, prompt):
        if "You are the architect" in prompt:
            return json.dumps({"summary": "Salon page", "files": [{"path": "index.html", "purpose": "page"}], "rules": ["mobile first"]})
        if "senior reviewer" in prompt:
            return json.dumps({"verdict": "ok", "issues": []})
        if "Write the complete file" in prompt:
            return '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Salon</title></head><body>PLACEHOLDER</body></html>'
        return "local answer"
S.router.local = FakeLocal()
captured.clear()
say("go offline"); pump(3, lambda: any("Offline" in str(e["args"]) for e in names("response")))
out["offline_state"] = names("setup_state")[-1]["args"][0]["current"]
say("hello there"); pump(8, lambda: bool(names("stream_chunk")))
out["offline_answer"] = [e["args"][0]["chunk"] for e in names("stream_chunk")][-1:] == ["local answer"]
out["cloud_stream_untouched"] = not captured
try:
    S.call_once([{"role": "user", "content": "x"}], "CHAT"); out["call_once_blocked"] = False
except S.OfflineBlocked:
    out["call_once_blocked"] = True
out["google_blocked"] = S.get_google("weather today") == ""

# build (offline: both brains are the local model)
say("/build a one page salon site"); pump(40, lambda: any(e["args"][0].get("id", "").startswith("build-") and e["args"][0].get("actions") and e["args"][0]["actions"][0]["id"].startswith("build:undo") for e in names("stage")))
stages = [e["args"][0] for e in names("stage") if e["args"][0].get("id", "").startswith("build-")]
out["build_stages"] = len(stages)
final = stages[-1] if stages else {}
undo = [a for a in final.get("actions", []) if a["id"].startswith("build:undo")]
out["build_undo_offered"] = bool(undo)
site = list((S.WORKSPACE_ROOT / "builds").glob("*/index.html"))
out["build_file_written"] = bool(site) and "PLACEHOLDER" in site[0].read_text()
if undo:
    c.emit("stage_action", {"action": undo[0]["id"]}); pump(5)
out["undo_removed"] = bool(site) and not site[0].exists()
print("RESULT " + json.dumps(out))
sys.stdout.flush()
os._exit(0)
