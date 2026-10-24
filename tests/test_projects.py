import subprocess
from projects.registry import Projects


def test_add_update_context_and_health(tmp_path):
    repo = tmp_path / "mira"; repo.mkdir(); (repo / "package.json").write_text("{}")
    subprocess.run(["git", "-C", str(repo), "init", "-q"], check=True)
    subprocess.run(["git", "-C", str(repo), "-c", "user.name=a", "-c", "user.email=a@b.c", "commit", "-q", "--allow-empty", "-m", "first"], check=True)
    (repo / "x.txt").write_text("hi")
    db = Projects(tmp_path / "p.db")
    pid = db.add("Mira", str(repo), "AI customer service for SMBs", aliases=["miraapp"], next_step="Paystack billing")
    assert db.add("mira") == pid and len(db.all()) == 1                    # same name, same project
    p = db.all()[0]
    assert "Node" in p["stack"]
    h = db.health(p)
    assert h["uncommitted"] == 2 and h["last_message"] == "first"
    ctx = db.context_for("how is miraapp doing?")
    assert "Paystack billing" in ctx and "2 uncommitted" in ctx
    assert db.context_for("what's the weather") == ""
    db.remove(pid); assert db.all() == []


def test_missing_folder_is_not_an_error(tmp_path):
    db = Projects(tmp_path / "p.db"); db.add("Gone", "/nope/never")
    assert db.health(db.all()[0]) == {"exists": False}
