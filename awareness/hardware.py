"""Live readings of this computer: processor, memory, disks, temperature, fans, battery, and which programs use what.

Read-only. Nothing here changes anything on the machine. Temperatures and fan speeds are only available when the
operating system exposes them: Linux does through psutil; Windows usually does not, so an optional local reader
(LibreHardwareMonitor's web server, if you run it) is used when present. Otherwise those fields stay empty and the
board says so instead of inventing numbers."""
from __future__ import annotations

import json
import os
import re
import time
import urllib.request
from collections import defaultdict
from typing import Callable, Optional

import psutil

from guardian.actions import PROTECTED_NAMES

LHM_URL = os.environ.get("VANTA_LHM_URL", "http://127.0.0.1:8085/data.json")
GB = 1024 ** 3


def _round(x, n=1):
    try:
        return round(float(x), n)
    except Exception:
        return None


# ── optional temperature / fan source ─────────────────────────────────────────
def read_lhm(url: str = LHM_URL, fetch: Optional[Callable[[str], str]] = None, timeout: float = 0.6) -> dict:
    """LibreHardwareMonitor (or OpenHardwareMonitor) remote web server: a tree of sensors as JSON. Parsed tolerantly."""
    try:
        raw = fetch(url) if fetch else urllib.request.urlopen(url, timeout=timeout).read().decode("utf-8", "ignore")
        tree = json.loads(raw)
    except Exception:
        return {}
    temps, fans = [], []

    def num(s):
        m = re.search(r"-?\d+(?:[.,]\d+)?", str(s or ""))
        return float(m.group(0).replace(",", ".")) if m else None

    def walk(node, path):
        text = str(node.get("Text") or node.get("name") or "")
        kids = node.get("Children") or node.get("children") or []
        typ = str(node.get("Type") or node.get("type") or "")
        val = node.get("Value", node.get("value"))
        unit = str(val or "")
        if not kids and val is not None:
            v = num(val)
            label = " ".join(p for p in (path[-2:] if len(path) > 1 else path) if p)[:40] or text
            if v is not None and ("°C" in unit or typ == "Temperature"):
                temps.append({"label": f"{label} {text}".strip()[:40], "c": _round(v)})
            elif v is not None and ("RPM" in unit.upper() or typ == "Fan"):
                fans.append({"label": f"{label} {text}".strip()[:40], "rpm": int(v)})
        for k in kids:
            if isinstance(k, dict):
                walk(k, path + [text] if text and text.lower() != "sensor" else path)

    if isinstance(tree, dict):
        walk(tree, [])
    return {"temps": temps[:16], "fans": fans[:8]}


class Hardware:
    """Takes a snapshot of the machine. `ps` and `lhm` are injectable so tests can use fake data."""

    def __init__(self, ps=psutil, lhm: Optional[Callable[[], dict]] = None, clock: Callable[[], float] = time.time,
                 own_pids: Optional[set[int]] = None, slow_every: float = 6.0) -> None:
        self.ps, self.lhm, self.clock = ps, lhm or read_lhm, clock
        self.own = {os.getpid(), os.getppid()} | set(own_pids or ())
        self.slow_every = slow_every
        self._last_disk: Optional[tuple[float, int, int]] = None
        self._slow: dict = {}
        self._slow_at = 0.0
        self.history: dict[str, list[float]] = {"cpu": [], "mem": [], "down": [], "up": [], "disk": []}
        self._net_last: Optional[tuple[float, int, int]] = None
        try:
            self.ps.cpu_percent(interval=None, percpu=True)
            for p in self.ps.process_iter(["cpu_percent"]):
                pass
        except Exception:
            pass

    # ── fast part (every couple of seconds) ───────────────────────────────
    def _push(self, key: str, v: float) -> None:
        h = self.history[key]
        h.append(round(v, 1))
        del h[:-60]

    def fast(self) -> dict:
        now = self.clock()
        ps = self.ps
        cores = [_round(c) for c in ps.cpu_percent(interval=None, percpu=True)]
        pct = _round(sum(cores) / len(cores)) if cores else 0.0
        try:
            f = ps.cpu_freq()
            freq = {"mhz": int(f.current), "max": int(f.max) if f.max else None} if f else None
        except Exception:
            freq = None
        vm = ps.virtual_memory()
        try:
            sw = ps.swap_memory()
            swap = {"pct": _round(sw.percent), "used": _round(sw.used / GB, 2), "total": _round(sw.total / GB, 1)}
        except Exception:
            swap = {"pct": 0, "used": 0, "total": 0}
        # disk throughput
        read = write = 0.0
        try:
            io = ps.disk_io_counters()
            if io and self._last_disk:
                dt = max(0.001, now - self._last_disk[0])
                read = max(0.0, (io.read_bytes - self._last_disk[1]) / 1024 / dt)
                write = max(0.0, (io.write_bytes - self._last_disk[2]) / 1024 / dt)
            if io:
                self._last_disk = (now, io.read_bytes, io.write_bytes)
        except Exception:
            pass
        down = up = 0.0
        try:
            n = ps.net_io_counters()
            if self._net_last:
                dt = max(0.001, now - self._net_last[0])
                down = max(0.0, (n.bytes_recv - self._net_last[1]) * 8 / 1000 / dt)
                up = max(0.0, (n.bytes_sent - self._net_last[2]) * 8 / 1000 / dt)
            self._net_last = (now, n.bytes_recv, n.bytes_sent)
        except Exception:
            pass
        temps, fans, source = self._thermal()
        batt = None
        try:
            b = ps.sensors_battery()
            if b:
                batt = {"pct": round(b.percent), "plugged": bool(b.power_plugged),
                        "mins": int(b.secsleft / 60) if isinstance(b.secsleft, (int, float)) and b.secsleft > 0 else None}
        except Exception:
            pass
        self._push("cpu", pct or 0)
        self._push("mem", vm.percent)
        self._push("down", down)
        self._push("up", up)
        self._push("disk", (read + write) / 1024)  # MB/s
        hot = max((t["c"] for t in temps if t.get("c") is not None), default=None)
        return {
            "ts": now,
            "cpu": {"pct": pct, "cores": cores, "freq": freq, "count": len(cores), "temp": hot},
            "mem": {"pct": _round(vm.percent), "used": _round(vm.used / GB, 1), "total": _round(vm.total / GB, 1), "swap": swap},
            "disk_io": {"read": _round(read, 0), "write": _round(write, 0)},   # KB/s
            "net": {"down": _round(down, 0), "up": _round(up, 0)},             # kbit/s
            "thermal": {"temps": temps, "fans": fans, "source": source},
            "battery": batt,
            "uptime": int(now - ps.boot_time()) if hasattr(ps, "boot_time") else None,
            "history": {k: list(v) for k, v in self.history.items()},
        }

    def _thermal(self) -> tuple[list, list, str]:
        temps, fans = [], []
        try:
            if hasattr(self.ps, "sensors_temperatures"):
                for chip, entries in (self.ps.sensors_temperatures() or {}).items():
                    for e in entries[:4]:
                        if e.current is not None:
                            temps.append({"label": f"{chip} {e.label}".strip()[:40], "c": _round(e.current), "high": _round(e.high) if e.high else None})
            if hasattr(self.ps, "sensors_fans"):
                for chip, entries in (self.ps.sensors_fans() or {}).items():
                    for e in entries[:3]:
                        fans.append({"label": f"{chip} {e.label}".strip()[:40], "rpm": int(e.current)})
        except Exception:
            pass
        if temps or fans:
            return temps[:16], fans[:8], "system"
        ext = self.lhm() or {}
        if ext.get("temps") or ext.get("fans"):
            return ext.get("temps", []), ext.get("fans", []), "LibreHardwareMonitor"
        return [], [], "none"

    # ── slow part (disks, programs) ───────────────────────────────────────
    def slow(self, force: bool = False) -> dict:
        now = self.clock()
        if not force and self._slow and now - self._slow_at < self.slow_every:
            return self._slow
        self._slow = {"disks": self._disks(), "programs": self._programs(), "ts": now}
        self._slow_at = now
        return self._slow

    def _disks(self) -> list[dict]:
        out, seen = [], set()
        try:
            for p in self.ps.disk_partitions(all=False):
                if p.mountpoint in seen or "cdrom" in (p.opts or "") or not p.fstype:
                    continue
                if p.fstype in ("squashfs", "tmpfs", "devtmpfs", "overlay") and not p.mountpoint == "/":
                    continue
                seen.add(p.mountpoint)
                try:
                    u = self.ps.disk_usage(p.mountpoint)
                except Exception:
                    continue
                out.append({"mount": p.mountpoint, "fs": p.fstype, "pct": _round(u.percent), "used": _round(u.used / GB), "total": _round(u.total / GB), "free": _round(u.free / GB)})
        except Exception:
            pass
        return out[:8]

    def _programs(self) -> list[dict]:
        """Everything running, grouped by program name, heaviest first. One row per program (Chrome with 14 processes is one row)."""
        ncpu = max(1, (self.ps.cpu_count() or 1))
        procs = []
        for p in self.ps.process_iter(["pid", "ppid", "name", "cpu_percent", "memory_info", "create_time"]):
            try:
                i = p.info
                if not i.get("name"):
                    continue
                mem = i["memory_info"].rss if i.get("memory_info") else 0
                procs.append((i["pid"], i.get("ppid"), i["name"], (i.get("cpu_percent") or 0.0) / ncpu, mem, i.get("create_time") or 0))
            except Exception:
                continue
        groups: dict[str, list] = defaultdict(list)
        for row in procs:
            groups[row[2].lower()].append(row)
        out = []
        for key, rows in groups.items():
            pids = {r[0] for r in rows}
            roots = [r for r in rows if r[1] not in pids] or rows        # the one that started the others
            root = min(roots, key=lambda r: r[5])
            name = root[2]
            protected = key in PROTECTED_NAMES or any(r[0] in self.own for r in rows)
            out.append({"name": name, "count": len(rows), "cpu": _round(sum(r[3] for r in rows)), "mem": round(sum(r[4] for r in rows) / 1024 / 1024),
                        "pid": root[0], "created": root[5], "protected": protected})
        out.sort(key=lambda g: (g["cpu"] or 0) * 4 + g["mem"] / 200, reverse=True)
        return out[:14]

    def snapshot(self) -> dict:
        snap = self.fast()
        snap.update(self.slow())
        snap["findings"] = findings(snap)
        return snap


# ── plain-words findings ──────────────────────────────────────────────────────
def findings(s: dict) -> list[dict]:
    """Things worth knowing, in ordinary words. Empty list means nothing to worry about."""
    out: list[dict] = []

    def add(level, text):
        out.append({"level": level, "text": text})

    mem, cpu = s.get("mem", {}), s.get("cpu", {})
    if (mem.get("pct") or 0) >= 90:
        add("warn", f"Memory is nearly full ({mem['pct']:.0f}%). The computer will feel slow. Closing a heavy program below will help.")
    elif (mem.get("pct") or 0) >= 80:
        add("note", f"Memory is getting full ({mem['pct']:.0f}%).")
    if (mem.get("swap") or {}).get("pct", 0) >= 60 and (mem["swap"].get("total") or 0) > 0:
        add("warn", "The computer is leaning on the hard drive as extra memory. That is why things feel slow right now.")
    if (cpu.get("pct") or 0) >= 90:
        add("warn", f"The processor is flat out ({cpu['pct']:.0f}%).")
    temp = cpu.get("temp")
    if temp is not None and temp >= 90:
        add("warn", f"It is running very hot ({temp:.0f}°C). Check the vents are clear and nothing heavy is running.")
    elif temp is not None and temp >= 80:
        add("note", f"It is running warm ({temp:.0f}°C).")
    for d in s.get("disks", []):
        if (d.get("pct") or 0) >= 95:
            add("warn", f"Drive {d['mount']} is almost full ({d['free']} GB free). Things can break when it is full.")
        elif (d.get("pct") or 0) >= 88:
            add("note", f"Drive {d['mount']} is getting full ({d['free']} GB free).")
    b = s.get("battery")
    if b and not b["plugged"] and b["pct"] <= 15:
        add("warn", f"Battery is low ({b['pct']}%). Plug in soon.")
    progs = [p for p in s.get("programs", []) if not p["protected"]]
    if progs and (progs[0]["cpu"] or 0) >= 50:
        add("note", f"{progs[0]['name']} is using {progs[0]['cpu']:.0f}% of the processor.")
    big = max(progs, key=lambda p: p["mem"], default=None)
    if big and big["mem"] >= 2000 and (mem.get("pct") or 0) >= 70:
        add("note", f"{big['name']} is holding about {big['mem'] / 1024:.1f} GB of memory.")
    ioload = (s.get("disk_io", {}).get("read", 0) + s.get("disk_io", {}).get("write", 0)) / 1024
    if ioload >= 40 and any(d["fs"] for d in s.get("disks", [])):
        add("note", "The hard drive is very busy right now. On an older drive this makes everything lag.")
    return out


def describe(s: dict) -> str:
    """Short spoken-style summary for the chat."""
    c, m = s["cpu"], s["mem"]
    parts = [f"Processor {c['pct']:.0f}%", f"memory {m['pct']:.0f}% ({m['used']} of {m['total']} GB)"]
    if c.get("temp") is not None:
        parts.append(f"{c['temp']:.0f}°C")
    for d in s.get("disks", [])[:2]:
        parts.append(f"drive {d['mount']} {d['pct']:.0f}% full")
    top = [p for p in s.get("programs", []) if not p["protected"]][:3]
    line = ", ".join(parts) + "."
    if top:
        line += " Busiest: " + ", ".join(f"{p['name']} ({p['mem']} MB)" for p in top) + "."
    fs = s.get("findings", [])
    return line + (" " + " ".join(f["text"] for f in fs[:2]) if fs else " Nothing looks wrong.")
