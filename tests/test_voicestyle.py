from vanta_ui.voicestyle import CUES, VOICE_STYLE, apply_voice


def test_adds_style_only_for_voice():
    m = [{"role": "system", "content": "base"}, {"role": "user", "content": "hi"}]
    v = apply_voice(m, True)
    assert v[0]["content"].startswith("base") and VOICE_STYLE in v[0]["content"] and m[0]["content"] == "base"   # original untouched
    assert apply_voice(m, False) is m and apply_voice([], True) == []


def test_every_cue_is_listed():
    assert all(f"({c})" in VOICE_STYLE for c in CUES)
