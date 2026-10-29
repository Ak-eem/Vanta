import { useEffect, useState } from 'react'

export type LayoutPref = 'auto' | 'calm' | 'hud'
const KEY = 'vanta.layout'
const HOLD_MS = 8000   // stay in HUD this long after the last reason, so it never flickers

export const readPref = (): LayoutPref => {
  try { const v = localStorage.getItem(KEY); return v === 'calm' || v === 'hud' ? v : 'auto' } catch { return 'auto' }
}
export const writePref = (v: LayoutPref) => { try { localStorage.setItem(KEY, v) } catch { /* fine */ } }

/** Pure rule. `until` is the time HUD is held until; returns the new hold time and whether HUD shows. */
export function hudDecision(pref: LayoutPref, active: boolean, until: number, now: number): { hud: boolean; until: number } {
  if (pref === 'hud') return { hud: true, until }
  if (pref === 'calm') return { hud: false, until: 0 }
  const next = active ? now + HOLD_MS : until
  return { hud: active || now < next, until: next }
}

export function useHudMode(pref: LayoutPref, active: boolean): boolean {
  const [until, setUntil] = useState(0)
  const [, tick] = useState(0)
  const d = hudDecision(pref, active, until, Date.now())
  useEffect(() => { if (d.until !== until) setUntil(d.until) }, [d.until, until])
  useEffect(() => {
    if (pref !== 'auto' || active || !d.hud) return
    const id = window.setTimeout(() => tick((n) => n + 1), Math.max(50, until - Date.now() + 20))
    return () => window.clearTimeout(id)
  }, [pref, active, d.hud, until])
  return d.hud
}

/** How the dashboard and the chat share the screen. drawer: dashboard is home, chat slides over it. pages: separate Dashboard and Chat pages. */
export type ViewPref = 'drawer' | 'pages'
const VKEY = 'vanta.view'
export const readView = (): ViewPref => { try { return localStorage.getItem(VKEY) === 'pages' ? 'pages' : 'drawer' } catch { return 'drawer' } }
export const writeView = (v: ViewPref) => { try { localStorage.setItem(VKEY, v) } catch { /* fine */ } }
