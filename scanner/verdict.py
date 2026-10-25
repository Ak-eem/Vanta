"""Turn findings + reputation into one plain verdict. Labels: safe, unknown, suspicious, dangerous."""
from __future__ import annotations

from typing import Optional

from .families import classify


def decide(report: dict, rep: Optional[dict] = None, trusted: bool = False) -> dict:
    """rep: {'malicious': int, 'total': int} from a hash lookup, or None if nobody has seen the file."""
    findings = list(report["findings"])
    score = sum(f["points"] for f in findings)
    reasons = [f["text"] for f in sorted(findings, key=lambda f: -f["points"]) if f["points"] > 0]
    vouched = [f["text"] for f in findings if f["points"] < 0]
    if rep:
        m, t = rep.get("malicious", 0), rep.get("total", 0)
        if m >= 5:
            score += 80
            reasons.insert(0, f"{m} of {t} antivirus engines flag this exact file")
        elif m >= 1:
            score += 20
            reasons.append(f"{m} of {t} antivirus engines flag it (a low number is often a false alarm)")
        elif t >= 30:
            score -= 30
            vouched.append(f"Known file: {t} antivirus engines checked it and found nothing")
    if trusted:
        score = min(score, 0)
        vouched.append("You told me to trust this program")
    score = max(0, min(100, score))
    eicar = any(f["id"] == "eicar" for f in findings)
    if score >= 80 or eicar:
        label = "dangerous"
    elif score >= 50:
        label = "suspicious"
    elif vouched and score < 20:
        label = "safe"
    else:
        label = "unknown" if (score >= 20 or report["kind"] in ("windows program", "linux program", "script")) else "safe"
    fam = classify(findings) if label in ("suspicious", "dangerous") else None
    return {"label": label, "score": score, "reasons": reasons[:6], "vouched": vouched[:4], "family": fam,
            "act": label in ("dangerous",) or (label == "suspicious" and score >= 70)}   # only strong cases may trigger autopilot
