"""Passphrase -> key -> AES-256-GCM. Same scheme is implemented with WebCrypto in ui/src/sync/crypto.ts.

Wire format of a blob: base64( iv(12) || ciphertext||tag ). The record id and kind are bound in as
associated data, so a server can't swap one record's ciphertext into another."""
from __future__ import annotations

import base64
import hashlib
import os

from cryptography.exceptions import InvalidTag
from cryptography.hazmat.primitives.ciphers.aead import AESGCM

ITERATIONS = 600_000
CHECK_TEXT = b"vanta-vault-ok"


class WrongPassphrase(Exception):
    pass


def derive_key(passphrase: str, salt: bytes, iterations: int = ITERATIONS) -> bytes:
    return hashlib.pbkdf2_hmac("sha256", passphrase.encode("utf-8"), salt, iterations, 32)


def new_salt() -> bytes:
    return os.urandom(16)


def _aad(rid: str, kind: str) -> bytes:
    return f"{kind}:{rid}".encode("utf-8")


def encrypt(key: bytes, plaintext: bytes, rid: str, kind: str) -> str:
    iv = os.urandom(12)
    return base64.b64encode(iv + AESGCM(key).encrypt(iv, plaintext, _aad(rid, kind))).decode("ascii")


def decrypt(key: bytes, blob: str, rid: str, kind: str) -> bytes:
    raw = base64.b64decode(blob)
    try:
        return AESGCM(key).decrypt(raw[:12], raw[12:], _aad(rid, kind))
    except InvalidTag as exc:
        raise WrongPassphrase("cannot decrypt (wrong passphrase or tampered data)") from exc
