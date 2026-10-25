import os
from pathlib import Path
from guardian.ransomware import RansomwareWatch, WriterTracker, plant_canaries


def watch(tmp, writers=None, **kw):
    t = [100.0]
    snaps = [{}, writers or {}]
    tr = WriterTracker(sampler=lambda: snaps.pop(0) if snaps else (writers or {}), clock=lambda: t[0])
    tr.sample()
    hit, alerts = [], []
    w = RansomwareWatch(plant_canaries([tmp / "Docs"]), tr, lambda ws, sig: hit.append((ws, sig)), alerts.append, clock=lambda: t[0], retry_delay=0, **kw)
    return w, t, hit, alerts


EVIL = {1234: {"pid": 1234, "name": "locker.exe", "exe": "/tmp/locker.exe", "created": 5.0, "w": 500_000_000}, 7: {"pid": 7, "name": "chrome.exe", "exe": "", "created": 1.0, "w": 1000}}


def test_canaries_are_planted(tmp_path):
    cs = plant_canaries([tmp_path / "Docs"])
    assert len(cs) == 3 and all(c.exists() for c in cs)


def test_normal_activity_does_not_trigger(tmp_path):
    w, t, hit, alerts = watch(tmp_path, EVIL)
    for i in range(30):                                   # one folder, e.g. unzipping a project: not enough on its own
        w.on_event("created", str(tmp_path / "proj" / f"f{i}.txt"))
    for i in range(60):                                   # big burst but inside node_modules: ignored
        w.on_event("modified", str(tmp_path / "app" / "node_modules" / f"d{i%5}" / f"f{i}.js"))
    assert hit == [] and alerts == []


def test_burst_across_folders_alone_is_not_enough_but_with_renames_it_is(tmp_path):
    w, t, hit, alerts = watch(tmp_path, EVIL)
    for i in range(50):
        w.on_event("modified", str(tmp_path / f"d{i%6}" / f"f{i}.docx"))
    assert hit == []                                      # one signal only
    for i in range(12):
        w.on_event("moved", str(tmp_path / f"d{i%6}" / f"f{i}.docx"), str(tmp_path / f"d{i%6}" / f"f{i}.docx.locked"))
    assert len(hit) == 1
    assert [x["name"] for x in hit[0][0]] == ["locker.exe"] and "rename" in hit[0][1]["why"] and "burst" in hit[0][1]["why"]


def test_canary_plus_burst_triggers_and_only_the_big_writer_is_chosen(tmp_path):
    w, t, hit, alerts = watch(tmp_path, EVIL)
    canary = str(tmp_path / "Docs" / "!_vanta_do_not_touch.docx")
    w.on_event("modified", canary)
    assert hit == []                                      # a canary alone could be you
    for i in range(45):
        w.on_event("modified", str(tmp_path / f"d{i%5}" / f"f{i}.pdf"))
    assert len(hit) == 1 and [x["pid"] for x in hit[0][0]] == [1234]


def test_unknown_culprit_alerts_instead_of_guessing(tmp_path):
    w, t, hit, alerts = watch(tmp_path, {})
    w.on_event("modified", str(tmp_path / "Docs" / "!_vanta_do_not_touch.txt"))
    for i in range(45):
        w.on_event("modified", str(tmp_path / f"d{i%5}" / f"f{i}.pdf"))
    assert hit == [] and len(alerts) == 1


def test_ransom_notes_in_many_folders_count(tmp_path):
    w, t, hit, alerts = watch(tmp_path, EVIL)
    for i in range(4):
        w.on_event("created", str(tmp_path / f"d{i}" / "HOW_TO_DECRYPT.txt"))
    for i in range(45):
        w.on_event("modified", str(tmp_path / f"d{i%5}" / f"f{i}.pdf"))
    assert len(hit) == 1


def test_cooldown_prevents_repeat_firing(tmp_path):
    w, t, hit, alerts = watch(tmp_path, EVIL)
    for r in range(2):
        w.on_event("modified", str(tmp_path / "Docs" / "!_vanta_do_not_touch.txt"))
        for i in range(45):
            w.on_event("modified", str(tmp_path / f"d{i%5}" / f"f{i}{r}.pdf"))
    assert len(hit) == 1
