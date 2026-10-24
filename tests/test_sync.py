import json
import pytest
from vanta_knowledge.notes import Notes
from vanta_knowledge.people import People
from vanta_sync import crypto
from vanta_sync.engine import Sync
from vanta_sync.store import FolderStore


def device(tmp, name, store, pw="correct horse"):
    p, n = People(tmp / f"{name}-people.db"), Notes(tmp / f"{name}-notes.db")
    key = Sync.unlock(store, pw)
    s = Sync(store, key, {"people": p.path, "notes": n.path}, tmp / f"{name}-state.json", device=name)
    return p, n, s


def test_crypto_roundtrip_and_binding():
    key = crypto.derive_key("pw", b"0" * 16, 1000)
    blob = crypto.encrypt(key, b"secret", "people:1", "people")
    assert crypto.decrypt(key, blob, "people:1", "people") == b"secret"
    with pytest.raises(crypto.WrongPassphrase):
        crypto.decrypt(key, blob, "people:2", "people")        # swapped record
    with pytest.raises(crypto.WrongPassphrase):
        crypto.decrypt(crypto.derive_key("other", b"0" * 16, 1000), blob, "people:1", "people")


def test_two_devices_converge_and_cloud_sees_no_plaintext(tmp_path, monkeypatch):
    monkeypatch.setattr(crypto, "ITERATIONS", 1000)
    monkeypatch.setattr(crypto.derive_key, "__defaults__", (1000,))
    store = FolderStore(tmp_path / "cloud.json")
    p1, n1, s1 = device(tmp_path, "laptop", store)
    p2, n2, s2 = device(tmp_path, "phone", store)
    p1.add_person("Ada", relation="girlfriend")
    p1.add_claim("Ada", "lives alone", source="told you")
    n2.add("buy data bundle")
    s1.run(); s2.run(); s1.run()
    assert p2.find("Ada") and p2.claims_for("Ada")[0]["text"] == "lives alone"
    assert [x["text"] for x in n1.all()] == ["buy data bundle"]
    raw = (tmp_path / "cloud.json").read_text()
    assert "Ada" not in raw and "lives alone" not in raw and "data bundle" not in raw


def test_delete_syncs_and_newest_wins(tmp_path, monkeypatch):
    monkeypatch.setattr(crypto.derive_key, "__defaults__", (1000,))
    store = FolderStore(tmp_path / "cloud.json")
    _, n1, s1 = device(tmp_path, "laptop", store)
    _, n2, s2 = device(tmp_path, "phone", store)
    nid = n1.add("temp"); s1.run(); s2.run()
    assert n2.all()
    n2.delete(nid); s2.run(); s1.run()
    assert n1.all() == []


def test_wrong_passphrase_rejected(tmp_path, monkeypatch):
    monkeypatch.setattr(crypto.derive_key, "__defaults__", (1000,))
    store = FolderStore(tmp_path / "cloud.json")
    Sync.unlock(store, "right")
    with pytest.raises(crypto.WrongPassphrase):
        Sync.unlock(store, "wrong")
