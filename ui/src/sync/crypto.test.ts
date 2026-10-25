import { describe, expect, it } from 'vitest'
import { decrypt, deriveKey, encrypt, openVault, WrongPassphrase } from './crypto'

// Produced by vanta_sync/crypto.py (Python) with passphrase "pw", 1000 iterations: proves the phone can read what the laptop writes.
const FX = {"salt": "MDEyMzQ1Njc4OWFiY2RlZg==", "blob": "r4TfiJm6EXxoSMQ9rlVdHz/hHm4vJwASSlTOB/sKgTXAIaPetfMTfS74Zn4iEg==", "vault": "MDEyMzQ1Njc4OWFiY2RlZg==.xVwq7koICelUOxlNobwRipFUMIJhrWhGEeRvHDx40Sh3eRf76wlp4Qan"}
const salt = Uint8Array.from(atob(FX.salt), (c) => c.charCodeAt(0))

describe('phone crypto is compatible with the laptop', () => {
  it('decrypts a Python-encrypted record', async () => {
    expect(await decrypt(await deriveKey('pw', salt, 1000), FX.blob, 'people:1', 'people')).toBe('héllo lives alone')
  })
  it('opens the vault and rejects a wrong passphrase', async () => {
    await openVault(FX.vault, 'pw', 1000)
    await expect(openVault(FX.vault, 'nope', 1000)).rejects.toBeInstanceOf(WrongPassphrase)
  })
  it('refuses a record moved to another id', async () => {
    await expect(decrypt(await deriveKey('pw', salt, 1000), FX.blob, 'people:2', 'people')).rejects.toBeInstanceOf(WrongPassphrase)
  })
  it('round-trips its own output', async () => {
    const k = await deriveKey('pw', salt, 1000)
    expect(await decrypt(k, await encrypt(k, 'buy data', 'notes:9', 'notes'), 'notes:9', 'notes')).toBe('buy data')
  })
})
