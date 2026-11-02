
## Knowing who is talking (voice recognition)

- **Mic:** asks the browser to cancel echo and noise, learns the room's hum for the first 0.4 s (`lib/vad.ts`), waits for a real voice, stops by itself ~1.2 s after you finish, sends a clean 16 kHz WAV (`lib/wav.ts`) to `/voice/listen`.
- **Who:** server compares the clip to saved voiceprints (`voiceid/`, WeSpeaker via sherpa-onnx, CPU). Owner = full access; guest = friendly chat only (no tools, files, memory); unknown/unsure = ignored. Unknown voices are remembered as "Unknown voice N" for 14 days so you can name them (they become guests).
- **Ticket:** the server signs "who + exact words" for 90 s; chat only trusts a spoken message that carries a valid ticket. Typed messages are the logged-in owner.
- **Setup:** `pip install -r requirements-voice.txt`, restart, Settings → Voices → Set up → record 3 readings.
- **Tune it on real voices:** `python scripts/voice_check.py my_voices` (files like `akeem_1.wav`, `sister_1.wav`) prints suggested `VANTA_VOICE_HIGH` / `VANTA_VOICE_LOW`. Defaults (0.55 / 0.40) are guesses.
- **Limits:** convenience, not a lock (a recording or deepfake can fool it). Voiceprints are in `~/.vanta/voices.db` with owner-only permissions; NOT encrypted, never synced.
- **Voice lab:** `python scripts/voice_lab.py --engines kokoro,piper,kitten` makes a page to listen to TTS voices side by side.
