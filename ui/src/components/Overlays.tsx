import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import type { Approval, Nudge, PrivacyState } from '../types'
import type { LayoutPref } from '../lib/hudMode'
import type { Fx } from '../lib/useFx'

export function NudgeToast({ nudge, onAck }: { nudge: Nudge | null; onAck: (id: string) => void }) {
  useEffect(() => {
    if (!nudge) return
    const t = setTimeout(() => onAck(nudge.id), nudge.severity === 'low' ? 9000 : 30000)
    return () => clearTimeout(t)
  }, [nudge, onAck])
  return (
    <AnimatePresence>
      {nudge ? (
        <motion.div key={nudge.id} className={`toast ${nudge.severity}`} role="status" initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 80, opacity: 0 }}>
          <b>{nudge.title}</b><span>{nudge.message}</span><br />
          <button className="btn sm" onClick={() => onAck(nudge.id)}>Got it</button>
        </motion.div>) : null}
    </AnimatePresence>)
}

export function ApprovalModal({ approval, onAnswer }: { approval: Approval | null; onAnswer: (ok: boolean, a: Approval) => void }) {
  if (!approval) return null
  return (
    <div className="scrim" role="dialog" aria-modal="true" aria-label="Approval needed">
      <div className="modal">
        <h3>VANTA wants to: {approval.action}</h3>
        <pre>{approval.detail}</pre>
        <div className="row"><button className="btn" onClick={() => onAnswer(false, approval)}>Deny</button><button className="btn primary" autoFocus={false} onClick={() => onAnswer(true, approval)}>Approve</button></div>
      </div>
    </div>)
}

const SOURCES: { key: string; label: string; hint: string }[] = [
  { key: 'window', label: 'Windows and apps', hint: 'Which app and window title you are using. Never keystrokes.' },
  { key: 'browser', label: 'Browser pages', hint: 'Page titles and visible text, through the Chrome extension. Never passwords.' },
  { key: 'process', label: 'Running programs', hint: 'Watches for unfamiliar or runaway programs.' },
  { key: 'screen', label: 'Screen changes', hint: 'Notices when the screen changes. Pixels are never saved.' },
]

const LOOKS: { v: LayoutPref; label: string }[] = [{ v: 'auto', label: 'Auto' }, { v: 'calm', label: 'Calm' }, { v: 'hud', label: 'HUD' }]

export function SettingsDrawer({ open, privacy, onSource, onClose, layout, onLayout, fx, fxAuto, onFx }: {
  open: boolean; privacy: PrivacyState; onSource: (k: string, v: boolean) => void; onClose: () => void
  layout: LayoutPref; onLayout: (v: LayoutPref) => void; fx: Fx; fxAuto: boolean; onFx: (v: Fx) => void
}) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.aside className="drawer" initial={{ x: 360 }} animate={{ x: 0 }} exit={{ x: 360 }} transition={{ type: 'tween', duration: 0.22 }} aria-label="Settings">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><h3>What I can see</h3><button className="btn ghost sm" onClick={onClose}>Close</button></div>
          <p>You decide. Pausing stops everything at once. Password managers, private windows and banking pages are never read.</p>
          {SOURCES.map((s) => (
            <div className="toggle" key={s.key}>
              <div>{s.label}<small>{s.hint}</small></div>
              <button className="switch" role="switch" aria-label={s.label} aria-checked={!!privacy.sources[s.key]} onClick={() => onSource(s.key, !privacy.sources[s.key])} />
            </div>))}
          <h3 style={{ marginTop: 22 }}>How it looks</h3>
          <p>Auto keeps things calm while we chat and switches to the full HUD when there is something to show or I am working.</p>
          <div className="seg" role="radiogroup" aria-label="Layout">
            {LOOKS.map((l) => <button key={l.v} role="radio" aria-checked={layout === l.v} onClick={() => onLayout(l.v)}>{l.label}</button>)}
          </div>
          <div className="toggle"><div>Light effects<small>{fxAuto ? 'Turned on because this screen was struggling.' : 'Fewer glows and animations. Easier on an older laptop.'}</small></div>
            <button className="switch" role="switch" aria-label="Light effects" aria-checked={fx === 'low'} onClick={() => onFx(fx === 'low' ? 'full' : 'low')} /></div>
          <div className="toggle"><div>Sign out<small>Locks VANTA in this browser.</small></div><a className="btn sm" style={{ display: 'grid', placeItems: 'center', textDecoration: 'none' }} href="/logout">Sign out</a></div>
        </motion.aside>) : null}
    </AnimatePresence>)
}
