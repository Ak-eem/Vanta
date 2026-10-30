/** Short phone buzzes. Android Chrome can vibrate from a web page; iPhone Safari cannot (it needs a native wrapper).
 *  Callers only say what happened. This file decides whether and how to buzz.
 *  When VANTA is wrapped with Capacitor, call setNativeHaptics(fn) once and nothing else has to change. */
export type Buzz = 'tick' | 'soft' | 'confirm' | 'hit' | 'whoosh' | 'alert' | 'heartbeat'

// Milliseconds. "tick" is the short buzz. Very small values can be too faint on some motors: tune here.
export const PATTERNS: Record<Buzz, number | number[]> = {
  tick: 12, soft: 20, confirm: [12, 40, 20], hit: 45, whoosh: [10, 30, 22], alert: [40, 60, 40], heartbeat: [30, 80, 30],
}

const KEY = 'vanta.haptics'
type Native = (pattern: number | number[]) => void
let native: Native | null = null

export const setNativeHaptics = (fn: Native | null): void => { native = fn }
export const hapticsOn = (): boolean => { try { return localStorage.getItem(KEY) !== 'off' } catch { return true } }
export const setHaptics = (on: boolean): void => { try { localStorage.setItem(KEY, on ? 'on' : 'off') } catch { /* private mode: fine */ } }
export const canBuzz = (): boolean => !!native || (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function')

/** Returns true if a buzz was sent. Never throws. Browsers ignore it until the first tap or click on the page. */
export function buzz(kind: Buzz = 'tick'): boolean {
  if (!hapticsOn()) return false
  const pattern = PATTERNS[kind]
  try {
    if (native) { native(pattern); return true }
    if (typeof navigator === 'undefined' || typeof navigator.vibrate !== 'function') return false
    return navigator.vibrate(pattern)
  } catch { return false }
}
