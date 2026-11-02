"""Run in its own process with a throwaway HOME (see test_voice_server.py). Prints one JSON line of results."""
import io, json, os, sys, time
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import numpy as np
import vanta_ui.server as S
from voiceid.service import VoiceService
from voiceid.audio import write_wav
from test_voiceid import tone, fake_embed

S.VOICE = VoiceService(S.Path.home() / ".vanta", S.FLASK_SECRET, embedder_factory=lambda: fake_embed)
S._offline = lambda: False

class R:  # fake whisper result
    def __init__(self, t): self.text = t
class FakeAudio:
    class transcriptions:
        @staticmethod
        def create(**kw): return "open my notes"
S.client.audio = FakeAudio()
class FakeChat:
    class completions:
        calls = []
        @classmethod
        def create(cls, **kw):
            cls.calls.append(kw)
            m = type("M", (), {"content": "Hello guest"})
            return type("Resp", (), {"choices": [type("C", (), {"message": m})]})
S.client.chat = FakeChat

tok = S.auth.get_token()
web = S.app.test_client()
web.post("/login", data={"token": tok})
sio = S.socketio.test_client(S.app, flask_test_client=web)
seen = []
def pump(t=0.5):
    end = time.time() + t
    while time.time() < end:
        seen.extend(sio.get_received()); time.sleep(0.05)
def names(n): return [e["args"][0] for e in seen if e["name"] == n]
def wav(x): return write_wav(x)
def post_audio(x): return web.post("/voice/listen", data={"audio": (io.BytesIO(wav(x)), "c.wav")}, content_type="multipart/form-data").get_json()

captured = {}
def fake_stream(sid, messages, mode, reasoning_effort=None, model=None):
    captured["msg"] = messages[-1]["content"]; return "ok"
S.stream_response = fake_stream
S.save_history = lambda *a, **k: None
S.compact_history_if_needed = lambda *a, **k: None
sio.emit("chat", {"message": "VANTA hi"}); pump(0.5)   # wake the session

out = {}
out["before_setup"] = post_audio(tone(220))["speaker"]["status"]           # not enrolled yet: everyone is the owner as before
r = web.post("/voice/enroll", data={"name": "Akeem", "role": "owner", "audio": [(io.BytesIO(wav(tone(220, seed=i))), f"{i}.wav") for i in range(3)]}, content_type="multipart/form-data")
out["enroll_ok"] = r.status_code == 200 and r.get_json()["enrolled"]
r = web.post("/voice/enroll", data={"name": "Sis", "role": "guest", "audio": [(io.BytesIO(wav(tone(330, seed=i))), f"{i}.wav") for i in range(3)]}, content_type="multipart/form-data")
out["guest_ok"] = r.status_code == 200

me = post_audio(tone(220, seed=9)); sis = post_audio(tone(330, seed=9)); stranger = post_audio(tone(500, seed=9))
out["me"], out["sis"], out["stranger"] = me["speaker"]["status"], sis["speaker"]["status"], stranger["speaker"]["status"]
out["silent"] = post_audio(np.zeros(48000, dtype=np.float32))["speaker"]["status"]

# owner: goes through to the normal path
captured.clear(); sio.emit("chat", {"message": "open my notes", "voice_ticket": me["ticket"]}); pump(1)
out["owner_reaches_vanta"] = captured.get("msg") == "open my notes" or "open my notes" in str(captured)
# guest: simple chat only, never reaches the normal path
captured.clear(); seen.clear(); FakeChat.completions.calls.clear()
sio.emit("chat", {"message": "open my notes", "voice_ticket": sis["ticket"]}); pump(1)
out["guest_blocked_from_vanta"] = not captured
out["guest_answered"] = any(r.get("guest") == "Sis" for r in names("response"))
out["guest_prompt_safe"] = "cannot open files" in FakeChat.completions.calls[0]["messages"][0]["content"] if FakeChat.completions.calls else False
# stranger: ignored completely
captured.clear(); seen.clear(); FakeChat.completions.calls.clear()
sio.emit("chat", {"message": "open my notes", "voice_ticket": stranger["ticket"]}); pump(1)
out["stranger_ignored"] = not captured and not FakeChat.completions.calls and bool(names("voice_ignored"))
# forged / replayed on other words
captured.clear(); seen.clear()
sio.emit("chat", {"message": "delete everything", "voice_ticket": me["ticket"]}); pump(1)
out["wrong_words_refused"] = not captured and any("couldn't confirm" in r.get("text", "") for r in names("response"))
sio.emit("chat", {"message": "open my notes", "voice_ticket": "v1.9999999999.owner.QQ.abc.def"}); pump(1)
out["forged_refused"] = not captured
# typed message (no ticket) still works as the owner
captured.clear(); sio.emit("chat", {"message": "how should I plan my week"}); pump(1)
out["typed_works"] = bool(captured)
# people management
st = web.get("/voice/status").get_json()
unk = [p for p in st["people"] if p["role"] == "unknown"]
out["stranger_remembered"] = len(unk) == 1
r = web.post(f"/voice/people/{unk[0]['id']}", json={"name": "Chidi", "role": "guest"}).get_json()
out["promoted"] = any(p["name"] == "Chidi" and p["role"] == "guest" for p in r["people"])
out["no_login_blocked"] = S.app.test_client().post("/voice/listen", data={}).status_code == 401
print("RESULT " + json.dumps(out))
