"""Network and security readings: what is connected, what is listening, and whether the basic protections are on.
Read-only. Anything that needs a Windows command is best-effort and says 'unknown' rather than guessing."""
from __future__ import annotations

import ipaddress
import json
import subprocess
import sys
import time
from collections import defaultdict
from typing import Callable, Optional

import psutil

# Ports that are risky when reachable from other machines, with the reason in plain words.
RISKY = {23: "Telnet (sends passwords unprotected)", 21: "FTP (sends passwords unprotected)", 445: "Windows file sharing",
         3389: "Remote Desktop", 5900: "VNC remote control", 135: "Windows RPC", 139: "NetBIOS file sharing", 1433: "SQL Server", 3306: "MySQL", 5432: "PostgreSQL", 27017: "MongoDB", 6379: "Redis"}


def _scope(ip: str) -> str:
    try:
        a = ipaddress.ip_address(ip)
    except ValueError:
        return "network"
    if a.is_loopback:
        return "this computer only"
    if a.is_unspecified:
        return "your network"
    return "your network" if a.is_private else "everyone"


def _is_private(ip: str) -> bool:
    try:
        a = ipaddress.ip_address(ip)
        return a.is_private or a.is_loopback or a.is_link_local
    except ValueError:
        return True


def interfaces(ps=psutil) -> list[dict]:
    out = []
    try:
        stats = ps.net_if_stats()
        for name, addrs in ps.net_if_addrs().items():
            st = stats.get(name)
            v4 = next((a.address for a in addrs if getattr(a.family, "name", str(a.family)) == "AF_INET"), None)
            if not v4 or v4.startswith("127.") or not (st and st.isup):
                continue
            out.append({"name": name, "ip": v4, "speed": st.speed or None})
    except Exception:
        pass
    return out[:6]


def connections(ps=psutil) -> dict:
    """Open doors (listening) and live conversations (connected), by program."""
    listening, talking = [], defaultdict(lambda: {"count": 0, "remote": set(), "outside": 0})
    names: dict[int, str] = {}

    def pname(pid):
        if pid is None:
            return "unknown"
        if pid not in names:
            try:
                names[pid] = ps.Process(pid).name()
            except Exception:
                names[pid] = "unknown"
        return names[pid]

    try:
        conns = ps.net_connections(kind="inet")
    except Exception:
        return {"listening": [], "connected": [], "limited": True}
    seen = set()
    for c in conns:
        try:
            if c.status == "LISTEN" and c.laddr:
                key = (c.laddr.port, c.pid)
                if key in seen:
                    continue
                seen.add(key)
                scope = _scope(c.laddr.ip)
                listening.append({"port": c.laddr.port, "program": pname(c.pid), "scope": scope, "risk": RISKY.get(c.laddr.port) if scope != "this computer only" else None})
            elif c.status == "ESTABLISHED" and c.raddr and not str(c.raddr.ip).startswith("127."):
                t = talking[pname(c.pid)]
                t["count"] += 1
                t["remote"].add(c.raddr.ip)
                if not _is_private(c.raddr.ip):
                    t["outside"] += 1
        except Exception:
            continue
    listening.sort(key=lambda x: ({"everyone": 0, "your network": 1}.get(x["scope"], 2), x["port"]))
    connected = [{"program": k, "count": v["count"], "outside": v["outside"], "sample": sorted(v["remote"])[:2]} for k, v in talking.items()]
    connected.sort(key=lambda x: -x["count"])
    return {"listening": listening[:20], "connected": connected[:10], "limited": False}


def _run(argv: list[str], timeout: float = 6.0) -> str:
    try:
        return subprocess.run(argv, capture_output=True, text=True, timeout=timeout, creationflags=getattr(subprocess, "CREATE_NO_WINDOW", 0)).stdout
    except Exception:
        return ""


def security_checks(run: Callable[..., str] = _run, platform: Optional[str] = None) -> list[dict]:
    """Basic protections. state: on / off / unknown. Only Windows is checked; elsewhere everything is 'unknown'."""
    plat = platform or sys.platform
    if not plat.startswith("win"):
        return [{"name": "Firewall", "state": "unknown", "note": "I only check this on Windows."},
                {"name": "Antivirus", "state": "unknown", "note": "I only check this on Windows."}]
    out = []
    fw = run(["netsh", "advfirewall", "show", "allprofiles", "state"])
    states = [ln.split()[-1].upper() for ln in fw.splitlines() if ln.strip().upper().startswith("STATE")]
    if states:
        on = states.count("ON")
        out.append({"name": "Firewall", "state": "on" if on == len(states) else "off", "note": "On for all networks." if on == len(states) else "Switched off on at least one kind of network."})
    else:
        out.append({"name": "Firewall", "state": "unknown", "note": "I couldn't read it."})
    raw = run(["powershell", "-NoProfile", "-Command", "Get-MpComputerStatus | Select-Object AntivirusEnabled,RealTimeProtectionEnabled,AntivirusSignatureAge | ConvertTo-Json"])
    try:
        d = json.loads(raw)
        ok = bool(d.get("AntivirusEnabled")) and bool(d.get("RealTimeProtectionEnabled"))
        age = d.get("AntivirusSignatureAge")
        out.append({"name": "Antivirus", "state": "on" if ok else "off",
                    "note": ("Windows Defender is watching live." if ok else "Live protection is off.") + (f" Definitions are {age} days old." if isinstance(age, int) and age > 3 else "")})
    except Exception:
        out.append({"name": "Antivirus", "state": "unknown", "note": "I couldn't read it (another antivirus may be in charge)."})
    return out


class NetBoard:
    """Collects network + security data, caching the slow commands."""

    def __init__(self, ps=psutil, run: Callable[..., str] = _run, clock: Callable[[], float] = time.time, platform: Optional[str] = None) -> None:
        self.ps, self.run, self.clock, self.platform = ps, run, clock, platform
        self._sec: list[dict] = []
        self._sec_at = -1e9

    def snapshot(self) -> dict:
        if self.clock() - self._sec_at > 300:
            self._sec = security_checks(self.run, self.platform)
            self._sec_at = self.clock()
        c = connections(self.ps)
        out = {"interfaces": interfaces(self.ps), "listening": c["listening"], "connected": c["connected"], "limited": c["limited"], "security": self._sec}
        out["findings"] = net_findings(out)
        return out


def net_findings(n: dict) -> list[dict]:
    f = []
    for s in n.get("security", []):
        if s["state"] == "off":
            f.append({"level": "warn", "text": f"{s['name']} is off. {s['note']}"})
    for p in n.get("listening", []):
        if p.get("risk") and p["scope"] == "everyone":
            f.append({"level": "warn", "text": f"{p['program']} is accepting connections from anywhere on port {p['port']} ({p['risk']})."})
        elif p.get("risk"):
            f.append({"level": "note", "text": f"{p['program']} is open to your network on port {p['port']} ({p['risk']})."})
    for c in n.get("connected", []):
        if c["outside"] >= 25:
            f.append({"level": "note", "text": f"{c['program']} has {c['outside']} connections to the internet at once. Normal for a browser, unusual for most other programs."})
    return f[:8]
