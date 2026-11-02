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

## Weather
A Weather card (now, next 8 hours, 5 days, "Rain likely around 3 PM") from Open-Meteo: free, no key, no account. Default city is `VANTA_DEFAULT_CITY` (Lagos). Say "weather in Ikeja" or type a city in the card. Cached 20 minutes. If an `OPENWEATHER_API_KEY` is set it is still used for the chat one-liner. Offline mode never looks anything up. If it fails the card says so instead of showing made-up numbers.

## My files (download button)
Files VANTA makes (`save_file`, `send_file` agent tools) go into one folder, `~/Documents/VANTA` (change with `VANTA_FILES`), and show on the dashboard with a Download button. It never overwrites, never writes outside that folder, never hands out secret files, and the download link needs your login.
