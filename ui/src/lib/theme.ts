import { useEffect, useState } from 'react'

export type ThemePref = 'auto' | 'light' | 'dark'
export type Theme = 'light' | 'dark'
const KEY = 'vanta.theme'
export const DAY_START = 7    // light from 07:00 ...
export const DAY_END = 18     // ... until 18:59

export const readTheme = (): ThemePref => { try { const v = localStorage.getItem(KEY); return v === 'light' || v === 'dark' ? v : 'auto' } catch { return 'auto' } }
export const writeTheme = (v: ThemePref) => { try { localStorage.setItem(KEY, v) } catch { /* fine */ } }

/** Auto follows the clock: bright rooms are likelier in the day, so light; dark at night so it never blinds you. */
export function resolveTheme(pref: ThemePref, hour: number): Theme {
  if (pref !== 'auto') return pref
  return hour >= DAY_START && hour <= DAY_END ? 'light' : 'dark'
}

export function useTheme(): { pref: ThemePref; theme: Theme; setPref: (p: ThemePref) => void } {
  const [pref, setP] = useState<ThemePref>(readTheme)
  const [hour, setHour] = useState(() => new Date().getHours())
  useEffect(() => { const id = window.setInterval(() => setHour(new Date().getHours()), 60000); return () => window.clearInterval(id) }, [])
  const theme = resolveTheme(pref, hour)
  useEffect(() => { document.documentElement.dataset.theme = theme }, [theme])
  return { pref, theme, setPref: (p) => { writeTheme(p); setP(p) } }
}
