"""Installed programs, and how to remove one properly.

Removing a program means running the program's OWN uninstaller (the same one Windows Settings runs), so it cleans up
after itself and you see its own confirmation window. VANTA never deletes program folders by hand."""
from __future__ import annotations

import re
import sys
from typing import Callable, Optional

# Things that are part of Windows, drivers, or what other programs need to run. Removing them breaks the computer.
PROTECTED_RE = re.compile(
    r"redistributable|\.net\b|runtime|webview2|driver|firmware|bios|chipset|^windows\b|\bwindows (?:sdk|driver|update)|"
    r"hp (?:support|system|hotkey|wireless)|intel\(r\)|realtek|nvidia|amd (?:software|chipset)|bluetooth|touchpad|synaptics|vanta", re.I)
MSI_RE = re.compile(r"msiexec(?:\.exe)?\s+/[iI]\s*(\{[0-9A-Fa-f-]{36}\})")


def is_protected(name: str) -> bool:
    return bool(PROTECTED_RE.search(name or ""))


def _win_reader() -> list[dict]:
    """Raw uninstall entries from the Windows registry."""
    import winreg  # type: ignore
    rows = []
    roots = [(winreg.HKEY_LOCAL_MACHINE, r"SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall", "HKLM"),
             (winreg.HKEY_LOCAL_MACHINE, r"SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall", "HKLM32"),
             (winreg.HKEY_CURRENT_USER, r"SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall", "HKCU")]
    for hive, path, tag in roots:
        try:
            with winreg.OpenKey(hive, path) as k:
                for i in range(winreg.QueryInfoKey(k)[0]):
                    sub = winreg.EnumKey(k, i)
                    try:
                        with winreg.OpenKey(k, sub) as sk:
                            def val(n):
                                try:
                                    return winreg.QueryValueEx(sk, n)[0]
                                except OSError:
                                    return None
                            rows.append({"id": f"{tag}\\{sub}", "name": val("DisplayName"), "version": val("DisplayVersion"), "publisher": val("Publisher"),
                                         "size_kb": val("EstimatedSize"), "uninstall": val("UninstallString"), "system": val("SystemComponent"), "parent": val("ParentKeyName")})
                    except OSError:
                        continue
        except OSError:
            continue
    return rows


def installed(reader: Optional[Callable[[], list[dict]]] = None, platform: Optional[str] = None) -> list[dict]:
    """Programs you installed, most space first. Empty when this system isn't supported."""
    plat = platform or sys.platform
    if reader is None:
        if not plat.startswith("win"):
            return []
        reader = _win_reader
    try:
        raw = reader()
    except Exception:
        return []
    out, seen = [], set()
    for r in raw:
        name = (r.get("name") or "").strip()
        if not name or r.get("system") == 1 or r.get("parent") or not r.get("uninstall") or name.lower() in seen:
            continue
        seen.add(name.lower())
        out.append({"id": r["id"], "name": name, "version": r.get("version") or "", "publisher": r.get("publisher") or "",
                    "mb": round((r.get("size_kb") or 0) / 1024), "protected": is_protected(name), "uninstall": r["uninstall"]})
    out.sort(key=lambda p: (-p["mb"], p["name"].lower()))
    return out


def uninstall_command(entry: dict) -> str:
    """The exact command that is run. For Windows Installer packages the 'install' command is switched to 'remove'."""
    cmd = str(entry.get("uninstall") or "").strip()
    m = MSI_RE.search(cmd)
    if m:
        return f"msiexec.exe /X{m.group(1)}"
    return cmd


def public(entry: dict) -> dict:
    """What the UI sees: never the command itself."""
    return {k: entry[k] for k in ("id", "name", "version", "publisher", "mb", "protected")}


def find(programs: list[dict], query: str) -> list[dict]:
    q = re.sub(r"\s+", " ", query.lower()).strip()
    exact = [p for p in programs if p["name"].lower() == q]
    if exact:
        return exact
    return [p for p in programs if q and q in p["name"].lower()]


def find_by_id(programs: list[dict], pid: str) -> Optional[dict]:
    return next((p for p in programs if p["id"] == pid), None)
