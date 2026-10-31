import { useEffect, useRef, useState } from 'react'
import type { Stage } from '../types'
import type { ThemePref } from '../lib/theme'

export type Mode = 'voice' | 'chat'
export type Screen = 'home' | 'overview'
const IDLE_MS = 6000

/** Open/closed state with the behaviour you asked for: starts open, folds away after 6 quiet seconds, and leaves a small button to bring it back.
 *  That button fades too, but moving the mouse to the left edge (or swiping from it on a phone) shows it again. */
export function useSidebar() {
  const [open, setOpen] = useState(true)
  const [handle, setHandle] = useState(true)
  const last = useRef(Date.now())
  const inside = useRef(false)
  const poke = () => { last.current = Date.now() }

  useEffect(() => {
    const id = window.setInterval(() => {
      const quiet = Date.now() - last.current > IDLE_MS
      const busy = inside.current || !!document.activeElement?.closest('.side')
      if (open && quiet && !busy) { setOpen(false); setHandle(true); last.current = Date.now() }
      else if (!open && quiet) setHandle(false)
    }, 500)
    return () => window.clearInterval(id)
  }, [open])

  useEffect(() => {
    let sx = -1
    const move = (e: PointerEvent) => { if (!open && e.clientX < 28) { setHandle(true); last.current = Date.now() } }
    const ts = (e: TouchEvent) => { sx = e.touches[0].clientX < 28 ? e.touches[0].clientX : -1 }
    const tm = (e: TouchEvent) => { if (sx >= 0 && e.touches[0].clientX - sx > 50) { sx = -1; setOpen(true); poke() } }
    window.addEventListener('pointermove', move); window.addEventListener('touchstart', ts, { passive: true }); window.addEventListener('touchmove', tm, { passive: true })
    return () => { window.removeEventListener('pointermove', move); window.removeEventListener('touchstart', ts); window.removeEventListener('touchmove', tm) }
  }, [open])

  return {
    open, handle,
    show: () => { setOpen(true); poke() },
    hide: () => { setOpen(false); setHandle(true); last.current = Date.now() },
    bind: { onPointerEnter: () => { inside.current = true; poke() }, onPointerLeave: () => { inside.current = false; poke() }, onPointerMove: poke, onKeyDown: poke, onFocus: poke },
  }
}

const Icon = ({ d }: { d: string }) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>

export function Sidebar({ sb, mode, onMode, screen, onScreen, history, onOpenStage, onSettings, pill, paused, watching, onPause, theme, onTheme, footer }: {
  sb: ReturnType<typeof useSidebar>; mode: Mode; onMode: (m: Mode) => void; screen: Screen; onScreen: (s: Screen) => void
  history: Stage[]; onOpenStage: (id: string) => void; onSettings: () => void
  pill: string; paused: boolean; watching: boolean; onPause: () => void; theme: ThemePref; onTheme: (t: ThemePref) => void; footer?: React.ReactNode
}) {
  return (<>
    <aside className="side" data-open={sb.open} aria-label="Sidebar" {...sb.bind} {...(!sb.open ? ({ inert: '' } as Record<string, string>) : {})}>
      <div className="side-top">
        <span className="wordmark">VANTA</span>
        <button className="btn icon ghost" aria-label="Collapse sidebar" onClick={sb.hide}><Icon d="M15 6l-6 6 6 6" /></button>
      </div>
      <div className="seg2" role="radiogroup" aria-label="Mode">
        <button role="radio" aria-checked={mode === 'voice'} onClick={() => onMode('voice')}><Icon d="M12 4v16M8 8v8M16 8v8M4 11v2M20 11v2" />Voice</button>
        <button role="radio" aria-checked={mode === 'chat'} onClick={() => onMode('chat')}><Icon d="M5 6h14v10H9l-4 3z" />Chat</button>
      </div>
      <nav className="side-nav" aria-label="Screens">
        <button aria-current={screen === 'home'} onClick={() => onScreen('home')}><Icon d="M4 11l8-7 8 7v8H4z" />Home</button>
        <button aria-current={screen === 'overview'} onClick={() => onScreen('overview')}><Icon d="M4 18V9M10 18V5M16 18v-7M22 18H2" />This computer</button>
        <button onClick={onSettings}><Icon d="M4 7h10M18 7h2M4 17h2M10 17h10" />Settings</button>
      </nav>
      {history.length ? (
        <div className="side-hist"><span className="k">RECENT</span>
          {history.slice(0, 6).map((h) => <button key={h.id} onClick={() => onOpenStage(h.id)} title={h.title}>{h.title}</button>)}</div>) : <div className="side-hist" />}
      <div className="side-foot">
        {footer}
        <div className="seg3" role="radiogroup" aria-label="Look">
          {(['auto', 'light', 'dark'] as ThemePref[]).map((t) => <button key={t} role="radio" aria-checked={theme === t} onClick={() => onTheme(t)}>{t[0].toUpperCase() + t.slice(1)}</button>)}
        </div>
        <div className="side-privacy"><span className={`pill ${watching ? 'on' : ''}`} role="status"><span className="dot" /><span className="label-long">{pill}</span></span>
          <button className="btn sm" onClick={onPause}>{paused ? 'Resume' : 'Pause'}</button></div>
      </div>
    </aside>
    <button className="side-handle" data-show={sb.handle || sb.open} data-hidden={sb.open} aria-label="Open sidebar" onClick={sb.show} tabIndex={sb.open ? -1 : 0}><Icon d="M4 6h16M4 12h16M4 18h16" /></button>
  </>)
}
