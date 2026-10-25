// Same scheme as vanta_sync/crypto.py: PBKDF2-SHA256 (600k) -> AES-256-GCM, blob = base64(iv || ct), AAD = "kind:id".
const enc = new TextEncoder(), dec = new TextDecoder()
export const ITERATIONS = 600_000
export class WrongPassphrase extends Error {}

const b64 = (u: Uint8Array) => btoa(String.fromCharCode(...u))
const unb64 = (s: string) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0))

export async function deriveKey(passphrase: string, salt: Uint8Array, iterations = ITERATIONS): Promise<CryptoKey> {
  const base = await crypto.subtle.importKey('raw', enc.encode(passphrase), 'PBKDF2', false, ['deriveKey'])
  // non-extractable: the page (and anything injected into it later) can use the key but never read it out
  return crypto.subtle.deriveKey({ name: 'PBKDF2', salt, iterations, hash: 'SHA-256' }, base, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt'])
}

export async function encrypt(key: CryptoKey, text: string, id: string, kind: string): Promise<string> {
  const iv = crypto.getRandomValues(new Uint8Array(12))
  const ct = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv, additionalData: enc.encode(`${kind}:${id}`) }, key, enc.encode(text)))
  const out = new Uint8Array(12 + ct.length); out.set(iv); out.set(ct, 12)
  return b64(out)
}

export async function decrypt(key: CryptoKey, blob: string, id: string, kind: string): Promise<string> {
  const raw = unb64(blob)
  try {
    return dec.decode(await crypto.subtle.decrypt({ name: 'AES-GCM', iv: raw.slice(0, 12), additionalData: enc.encode(`${kind}:${id}`) }, key, raw.slice(12)))
  } catch { throw new WrongPassphrase('cannot decrypt') }
}

export const CHECK_TEXT = 'vanta-vault-ok'

/** Open the vault record ("<saltB64>.<encrypted check>") with a passphrase. */
export async function openVault(blob: string, passphrase: string, iterations = ITERATIONS): Promise<CryptoKey> {
  const dot = blob.indexOf('.')
  const salt = blob.slice(0, dot), check = blob.slice(dot + 1)
  const key = await deriveKey(passphrase, unb64(salt), iterations)
  if ((await decrypt(key, check, '_vault', 'vault')) !== CHECK_TEXT) throw new WrongPassphrase('wrong passphrase')
  return key
}

export async function createVault(passphrase: string, iterations = ITERATIONS): Promise<{ key: CryptoKey; blob: string }> {
  const salt = crypto.getRandomValues(new Uint8Array(16))
  const key = await deriveKey(passphrase, salt, iterations)
  return { key, blob: `${b64(salt)}.${await encrypt(key, CHECK_TEXT, '_vault', 'vault')}` }
}
