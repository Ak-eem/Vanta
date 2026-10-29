# System board

When no stage is open, the right-hand side shows a live board of this computer instead of an empty screen.

**Shows:** processor (total, per core, speed), memory and swap, drives (space, read/write speed), temperatures and fans, battery,
the busiest programs (grouped, so Chrome is one row), network speed and connections per program, open doors (listening ports),
firewall and antivirus status, and "things I noticed" in plain words.

**Acts (always asks you first, every step audited):**
- **End** (or say "close chrome"): stops the program and everything it started. System programs and VANTA itself are refused.
- **Uninstall** (or say "uninstall X"): starts the program's own uninstaller, which shows its own window. Windows files, drivers and runtimes are protected.
- Say "how is my laptop" or "why is it slow" for a spoken summary.

**Limits:** Windows rarely shares temperature/fan data; run LibreHardwareMonitor with its web server on (port 8085, or set `VANTA_LHM_URL`).
Firewall/antivirus checks and the installed-program list/uninstall only work on Windows, and were not run on real Windows here (tested with fake data).
Readings stream only while the page is open.

## Dashboard and chat
Settings > Dashboard and chat: **Chat drawer** (dashboard stays on screen, chat slides over it) or **Separate pages** (Dashboard / Chat tabs at the top). Phones always use tabs.

## VANTA chooses what to show
Cards that need attention (full memory, a hot processor, nearly full drive, firewall off, risky open port, a runaway program) rise to the top and glow amber without you asking.
Say "show my network" (or memory, drives, heat, programs, security, installed) to bring a card to the front.
