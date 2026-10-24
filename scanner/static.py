"""Static inspection: hashes, file type, tricks, suspicious strings, signature. Never executes the file."""
from __future__ import annotations

import hashlib
import json
import math
import re
import subprocess
import sys
import zipfile
from pathlib import Path
from typing import Callable, Optional

EICAR = b"X5O!P%@AP[4\\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*"
EXEC_EXT = {".exe", ".dll", ".scr", ".com", ".msi", ".bat", ".cmd", ".ps1", ".vbs", ".js", ".jse", ".wsf", ".jar", ".lnk", ".hta", ".sh", ".apk", ".pif", ".cpl"}
SCRIPT_EXT = {".bat", ".cmd", ".ps1", ".vbs", ".js", ".jse", ".wsf", ".hta", ".sh", ".py"}
DOC_EXT = {".pdf", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".jpg", ".jpeg", ".png", ".txt", ".mp3", ".mp4", ".zip", ".rar"}
MAX_READ = 8 * 1024 * 1024

# (id, points, regex on text/bytes, plain-English meaning)
INDICATORS: list[tuple[str, int, str, str]] = [
    ("ps_encoded", 25, r"powershell[^\n]{0,40}\s-e(nc|ncodedcommand)?\s", "Runs hidden, scrambled PowerShell commands"),
    ("download_exec", 25, r"(certutil[^\n]{0,30}-urlcache|bitsadmin[^\n]{0,30}/transfer|Invoke-WebRequest|DownloadString|DownloadFile)", "Downloads more code from the internet"),
    ("inject", 30, r"(CreateRemoteThread|WriteProcessMemory|VirtualAllocEx|NtUnmapViewOfSection|QueueUserAPC)", "Can inject code into other programs"),
    ("keylog", 30, r"(SetWindowsHookEx|GetAsyncKeyState|GetKeyboardState)", "Can record what you type"),
    ("miner", 35, r"(stratum\+tcp|xmrig|cryptonight|monero|minerd)", "Looks like a crypto miner"),
    ("stealer", 35, r"(Login Data|Web Data|cookies\.sqlite|leveldb|discord(canary|ptb)?[\\/]+Local Storage|wallet\.dat|\.metamask)", "Reads browser or wallet data"),
    ("persist", 15, r"(schtasks[^\n]{0,20}/create|CurrentVersion\\Run|Startup\\)", "Installs itself to start automatically"),
    ("defender_off", 35, r"(Set-MpPreference[^\n]{0,40}Disable|DisableRealtimeMonitoring|DisableAntiSpyware|netsh advfirewall[^\n]{0,30}off)", "Tries to switch off your antivirus or firewall"),
    ("shadow_del", 40, r"(vssadmin[^\n]{0,20}delete shadows|wbadmin delete|bcdedit[^\n]{0,30}recoveryenabled)", "Deletes backups (typical of ransomware)"),
    ("ransom_note", 35, r"(your files (have been|are) encrypted|decrypt your files|bitcoin address|\.onion)", "Contains ransom-style text"),
    ("screen_cap", 12, r"(BitBlt|GetDesktopWindow|PrintWindow)", "Can take screenshots"),
    ("anti_vm", 15, r"(VBoxService|VMwareTray|SbieDll|IsDebuggerPresent|vmware|qemu)", "Checks whether it is being analysed"),
    ("tor_c2", 15, r"(torproject|onion-?routing|ngrok\.io|pastebin\.com/raw|api\.telegram\.org/bot)", "Talks to anonymous or chat-bot servers"),
    ("obf_eval", 15, r"(eval\(\s*(atob|unescape|base64)|FromBase64String|\[Convert\]::FromBase64|fromCharCode\(\s*\d+\s*,)", "Hides its real code with encoding"),
]
_COMPILED = [(i, p, re.compile(rx.encode(), re.I), m) for i, p, rx, m in INDICATORS]


def sha256_of(path: Path) -> str:
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def entropy(data: bytes) -> float:
    if not data:
        return 0.0
    counts = [0] * 256
    for b in data:
        counts[b] += 1
    n = len(data)
    return -sum(c / n * math.log2(c / n) for c in counts if c)


def file_kind(head: bytes, ext: str) -> str:
    if head[:2] == b"MZ":
        return "windows program"
    if head[:4] == b"\x7fELF":
        return "linux program"
    if head[:4] in (b"PK\x03\x04",) or ext in (".jar", ".apk"):
        return "archive/package"
    if head[:2] == b"#!" or ext in SCRIPT_EXT:
        return "script"
    if head[:4] == b"%PDF":
        return "pdf"
    if head[:8] == b"\xd0\xcf\x11\xe0\xa1\xb1\x1a\xe1":
        return "old office file (can hold macros)"
    if head[:4] == b"Rar!":
        return "archive/package"
    return "other"


def default_signature(path: Path) -> Optional[dict]:
    """Windows only. Returns {status, publisher} or None when it can't be checked."""
    if sys.platform != "win32":
        return None
    cmd = ("$s=Get-AuthenticodeSignature -LiteralPath $args[0]; "
           "[pscustomobject]@{status=[string]$s.Status;subject=[string]$s.SignerCertificate.Subject}|ConvertTo-Json -Compress")
    try:
        out = subprocess.run(["powershell", "-NoProfile", "-NonInteractive", "-Command", cmd, str(path)], capture_output=True, text=True, timeout=20).stdout
        j = json.loads(out)
        m = re.search(r"CN=([^,]+)", j.get("subject") or "")
        return {"status": j.get("status", "Unknown"), "publisher": m.group(1).strip('" ') if m else ""}
    except Exception:
        return None


def analyze(path: Path, signature: Callable[[Path], Optional[dict]] = default_signature) -> dict:
    path = Path(path)
    size = path.stat().st_size
    with open(path, "rb") as f:
        head = f.read(MAX_READ)
        tail = b""
        if size > MAX_READ:
            f.seek(max(MAX_READ, size - 2 * 1024 * 1024))
            tail = f.read()
    data = head + tail
    ext = path.suffix.lower()
    kind = file_kind(head[:16], ext)
    findings: list[dict] = []

    def add(fid: str, pts: int, text: str) -> None:
        findings.append({"id": fid, "points": pts, "text": text})

    if EICAR in head[:256]:
        add("eicar", 100, "This is the standard antivirus test file (harmless, but proves detection works)")
    parts = path.name.lower().split(".")
    if len(parts) > 2 and "." + parts[-1] in EXEC_EXT and "." + parts[-2] in DOC_EXT:
        add("double_ext", 50, f"Pretends to be a {parts[-2]} file but is really a .{parts[-1]} program")
    if re.search(r"[‮​]", path.name):
        add("rtl_trick", 40, "The file name contains hidden characters used to disguise its type")
    if ext in DOC_EXT and kind in ("windows program", "linux program"):
        add("ext_mismatch", 40, f"Named like a {ext} file but it is actually a program")
    ent = entropy(head[:1 << 20])
    if kind in ("windows program", "linux program") and ent > 7.4:
        add("packed", 15, "Heavily scrambled or packed code, which malware uses to hide")
    if kind == "windows program" and size < 200 * 1024 and ent > 7.0:
        add("tiny_packed", 10, "Very small and scrambled: often a dropper that fetches the real malware")

    inner: list[str] = []
    if kind == "archive/package" and zipfile.is_zipfile(path):
        try:
            with zipfile.ZipFile(path) as z:
                inner = [i.filename for i in z.infolist()][:200]
                if any(i.flag_bits & 0x1 for i in z.infolist()):
                    add("zip_encrypted", 25, "Password-protected archive (a common way to slip past scanners)")
        except Exception:
            pass
        bad = [n for n in inner if Path(n).suffix.lower() in EXEC_EXT and not n.endswith("/")]
        if bad and ext not in (".jar", ".apk"):
            add("zip_exec", 15, f"Contains {len(bad)} program/script file(s), e.g. {bad[0][:40]}")

    for fid, pts, rx, meaning in _COMPILED:
        if rx.search(data):
            add(fid, pts, meaning)
    if kind in ("windows program",):
        n_imports = len(re.findall(rb"(LoadLibrary|GetProcAddress)", data))
        if n_imports and not re.search(rb"(KERNEL32|kernel32)", data):
            add("hidden_imports", 15, "Loads system functions in a hidden way")

    sig = signature(path) if kind in ("windows program", "script") or ext in (".msi", ".dll") else None
    if sig:
        if sig["status"] == "Valid":
            add("signed", -40, f"Digitally signed and intact by {sig['publisher'] or 'a publisher'}")
        elif sig["status"] in ("HashMismatch", "NotTrusted", "Invalid"):
            add("bad_sig", 40, "Has a signature that does NOT check out (it was changed or faked)")
        elif sig["status"] == "NotSigned" and kind == "windows program":
            add("unsigned", 8, "Not digitally signed, so nobody vouches for who made it")

    strings = sorted(set(m.decode("ascii", "ignore") for m in re.findall(rb"[ -~]{8,60}", head[:1 << 20])), key=len, reverse=True)[:12] if kind != "other" else []
    text_sample = ""
    if kind == "script" or ext in SCRIPT_EXT:
        text_sample = head[:6000].decode("utf-8", "ignore")
    return {"path": str(path), "name": path.name, "size": size, "sha256": sha256_of(path), "kind": kind, "ext": ext,
            "entropy": round(ent, 2), "findings": findings, "signature": sig, "inside": inner[:20], "strings": strings, "text": text_sample}
