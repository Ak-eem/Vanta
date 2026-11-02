import subprocess

import pytest

from agent.loop import Agent
from agent.permissions import Denied


def sh(cwd, *a):
    subprocess.run(["git", *a], cwd=cwd, check=True, capture_output=True)


@pytest.fixture
def repo(tmp_path):
    remote = tmp_path / "remote.git"
    sh(tmp_path, "init", "-q", "--bare", str(remote))
    p = tmp_path / "proj"
    p.mkdir()
    sh(p, "init", "-q", "-b", "feature"); sh(p, "config", "user.email", "a@b.c"); sh(p, "config", "user.name", "t")
    (p / "a.txt").write_text("1"); sh(p, "add", "."); sh(p, "commit", "-qm", "init"); sh(p, "remote", "add", "origin", str(remote))
    return p, remote


def mk(p, tmp_path, approve):
    return Agent(lambda m: "", p, "auto", approve=approve, home=tmp_path / "h", checkpoint_base=tmp_path / "cp")


def test_commit_skips_secrets_and_asks(repo, tmp_path):
    p, _ = repo
    (p / "b.py").write_text("x"); (p / ".env").write_text("KEY=1")
    asked = []
    ag = mk(p, tmp_path, lambda a, d: asked.append(d) or True)
    st = ag._tool("git_status", {})
    assert "b.py" in st and "secret" in st
    assert "Committed" in ag._tool("git_commit", {"message": "add b"})
    assert ".env" in asked[0] and "Left out" in asked[0]
    out = subprocess.run(["git", "show", "--name-only", "--format=", "HEAD"], cwd=p, capture_output=True, text=True).stdout
    assert "b.py" in out and ".env" not in out
    assert ag._tool("git_commit", {"message": "again"}).startswith("Nothing to commit")
    with pytest.raises(Denied):
        (p / "c.py").write_text("y"); mk(p, tmp_path, lambda a, d: False)._tool("git_commit", {"message": "no"})


def test_push_needs_approval_and_works(repo, tmp_path):
    p, remote = repo
    (p / "d.py").write_text("z"); sh(p, "add", "."); sh(p, "commit", "-qm", "d")
    with pytest.raises(Denied):
        mk(p, tmp_path, lambda a, d: False)._tool("git_push", {})
    heads = subprocess.run(["git", "branch"], cwd=remote, capture_output=True, text=True).stdout
    assert heads.strip() == ""                                   # nothing sent without approval
    seen = []
    assert "Pushed 'feature'" in mk(p, tmp_path, lambda a, d: seen.append(d) or True)._tool("git_push", {})
    assert "2 commit" in seen[0]
    assert "feature" in subprocess.run(["git", "branch"], cwd=remote, capture_output=True, text=True).stdout
    assert "no remote" in mk(p, tmp_path, lambda a, d: True)._tool("git_push", {"remote": "nope"}).lower()


def test_main_warning_and_url_cleaning(repo, tmp_path):
    from agent.gittools import _clean_url
    assert _clean_url("https://user:tok123@github.com/a/b.git") == "https://github.com/a/b.git"
    p, _ = repo
    sh(p, "checkout", "-q", "-b", "main")
    seen = []
    mk(p, tmp_path, lambda a, d: seen.append(d) or True)._tool("git_push", {})
    assert "main branch" in seen[0]
    assert "main branch" in mk(p, tmp_path, lambda a, d: True)._tool("github_pr", {"title": "x"}) or "gh" in mk(p, tmp_path, lambda a, d: True)._tool("github_pr", {"title": "x"})
