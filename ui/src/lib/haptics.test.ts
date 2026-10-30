import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { PATTERNS, buzz, canBuzz, hapticsOn, setHaptics, setNativeHaptics } from './haptics'
import { feel } from './feel'

const store: Record<string, string> = {}
beforeEach(() => {
  for (const k of Object.keys(store)) delete store[k]
  vi.stubGlobal('localStorage', { getItem: (k: string) => store[k] ?? null, setItem: (k: string, v: string) => { store[k] = v } })
})
afterEach(() => { setNativeHaptics(null); vi.unstubAllGlobals() })

describe('haptics', () => {
  it('sends the short buzz through navigator.vibrate', () => {
    const vibrate = vi.fn(() => true)
    vi.stubGlobal('navigator', { vibrate })
    expect(canBuzz()).toBe(true)
    expect(buzz()).toBe(true)
    expect(vibrate).toHaveBeenCalledWith(PATTERNS.tick)
    expect(PATTERNS.tick).toBeLessThanOrEqual(15)
  })
  it('does nothing, quietly, where vibration is not supported', () => {
    vi.stubGlobal('navigator', {})
    expect(canBuzz()).toBe(false)
    expect(buzz('hit')).toBe(false)
  })
  it('can be switched off and on', () => {
    const vibrate = vi.fn(() => true)
    vi.stubGlobal('navigator', { vibrate })
    expect(hapticsOn()).toBe(true)
    setHaptics(false)
    expect(hapticsOn()).toBe(false)
    expect(buzz()).toBe(false)
    expect(vibrate).not.toHaveBeenCalled()
    setHaptics(true)
    expect(buzz('soft')).toBe(true)
  })
  it('never throws when the browser refuses', () => {
    vi.stubGlobal('navigator', { vibrate: () => { throw new Error('blocked') } })
    expect(buzz()).toBe(false)
  })
  it('uses a native buzzer when one is plugged in', () => {
    const native = vi.fn()
    setNativeHaptics(native)
    vi.stubGlobal('navigator', {})
    expect(buzz('confirm')).toBe(true)
    expect(native).toHaveBeenCalledWith(PATTERNS.confirm)
  })
  it('feel() buzzes for the moment and stays quiet about sound by default', () => {
    const vibrate = vi.fn(() => true)
    vi.stubGlobal('navigator', { vibrate })
    feel('send')
    expect(vibrate).toHaveBeenCalledWith(PATTERNS.tick)
  })
})
