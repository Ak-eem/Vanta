"""Live machine readouts for the HUD: CPU, memory, network speed, program count.
Cheap (psutil counters). The active-window name is only included when privacy allows it."""
from __future__ import annotations

import time
from typing import Callable, Optional

import psutil


class Telemetry:
    def __init__(self, net=psutil.net_io_counters, clock: Callable[[], float] = time.time) -> None:
        self._net, self._clock = net, clock
        self._last: Optional[tuple[float, int, int]] = None
        psutil.cpu_percent(interval=None)  # prime the counter

    def sample(self, window: Optional[tuple[str, str]] = None, idle: bool = False) -> dict:
        now = self._clock()
        n = self._net()
        down = up = 0.0
        if self._last:
            dt = max(0.001, now - self._last[0])
            down = max(0.0, (n.bytes_recv - self._last[1]) * 8 / 1000 / dt)   # kbit/s
            up = max(0.0, (n.bytes_sent - self._last[2]) * 8 / 1000 / dt)
        self._last = (now, n.bytes_recv, n.bytes_sent)
        batt = None
        try:
            b = psutil.sensors_battery()
            batt = {"pct": round(b.percent), "plugged": bool(b.power_plugged)} if b else None
        except Exception:
            pass
        out = {"cpu": round(psutil.cpu_percent(interval=None), 1), "mem": round(psutil.virtual_memory().percent, 1),
               "down": round(down, 1), "up": round(up, 1), "procs": len(psutil.pids()), "battery": batt, "idle": idle}
        if window:
            out["app"], out["title"] = window[0], window[1][:80]
        return out
