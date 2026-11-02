"""How VANTA should write when its reply will be spoken aloud."""
from __future__ import annotations

CUES = ("urgent", "excited", "gentle", "dry", "sighs", "laughs")

VOICE_STYLE = (
    "The person is listening, not reading: your reply will be spoken aloud. Talk like a person. Short sentences, plain words, no lists, no markdown, "
    "no tables, never read out links or code. If something is long, give the gist and offer to show the rest on screen. "
    "You may start a sentence with ONE delivery cue in brackets when it truly fits, at most twice in a reply: "
    + ", ".join(f"({c})" for c in CUES)
    + ". Example: (dry) Well, that went about as well as expected. Use none when unsure."
)


def apply_voice(messages: list, voice: bool) -> list:
    """Adds the spoken-reply style to the system message when the request came from voice mode."""
    if not voice or not messages or messages[0].get("role") != "system":
        return messages
    out = list(messages)
    out[0] = {**out[0], "content": out[0]["content"] + "\n\n" + VOICE_STYLE}
    return out
