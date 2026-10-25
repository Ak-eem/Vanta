import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { Approval, GuardianState, Nudge, PrivacyState, Project, ScanResult, SyncState } from '../types'
import { ProjectsPanel, SafetyPanel } from './Panels'
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

function SyncPanel({ sync, onUnlock, onSyncNow }: { sync: SyncState | null; onUnlock: (pw: string) => void; onSyncNow: () => void }) {
  const [pw, setPw] = useState('')
  if (!sync) return null
  const when = sync.last ? new Date(sync.last * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''
  return (<>
    <h3 style={{ marginTop: 22 }}>Phone sync</h3>
    {!sync.configured ? <p>Not set up yet. See "Phone sync" in the README: it takes about five minutes.</p> : sync.unlocked ? (
      <p>Connected{when ? ` · last synced ${when}` : ''}. Everything is scrambled on this laptop before it leaves.
        <button className="btn ghost sm" onClick={onSyncNow}>Sync now</button></p>) : (<>
      <p>Enter your vault passphrase to start syncing. It stays on this laptop and is never saved.</p>
      <div className="composer" style={{ marginBottom: 12 }}>
        <input type="password" aria-label="Vault passphrase" placeholder="Vault passphrase" value={pw} onChange={(e) => setPw(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' && pw) { onUnlock(pw); setPw('') } }} />
        <button className="btn sm primary" disabled={pw.length < 8} onClick={() => { onUnlock(pw); setPw('') }}>Unlock</button>
      </div></>)}
    {sync.error ? <p style={{ color: '#E7A3AB' }}>{sync.error}</p> : null}
  </>)
}

export function SettingsDrawer({ open, privacy, onSource, onClose, layout, onLayout, fx, fxAuto, onFx, sync, onUnlock, onSyncNow, projects, guardian, onSaveProject, onRemoveProject, onRestore, onOpenPanels, onGuardMode, scans, onScan, onEmergency, onPurge, onCheckProject }: {
  onCheckProject: (id: string) => void
  onEmergency: (on: boolean) => void; onPurge: (id: string) => void
  scans: ScanResult[]; onScan: (p: string) => void
  onGuardMode: (m: 'ask' | 'auto') => void
  projects: Project[]; guardian: GuardianState | null; onSaveProject: (p: Partial<Project>) => void; onRemoveProject: (id: string) => void; onRestore: (id: string) => void; onOpenPanels: () => void
  sync: SyncState | null; onUnlock: (pw: string) => void; onSyncNow: () => void
  open: boolean; privacy: PrivacyState; onSource: (k: string, v: boolean) => void; onClose: () => void
  layout: LayoutPref; onLayout: (v: LayoutPref) => void; fx: Fx; fxAuto: boolean; onFx: (v: Fx) => void
}) {
  const [tab, setTab] = useState<'privacy' | 'projects' | 'safety'>('privacy')
  useEffect(() => { if (open) onOpenPanels() }, [open]) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <AnimatePresence>
      {open ? (
        <motion.aside className="drawer" initial={{ x: 360 }} animate={{ x: 0 }} exit={{ x: 360 }} transition={{ type: 'tween', duration: 0.22 }} aria-label="Settings">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><h3>{tab === 'privacy' ? 'What I can see' : tab === 'projects' ? 'Projects' : 'Safety log'}</h3><button className="btn ghost sm" onClick={onClose}>Close</button></div>
          <div className="seg" role="tablist" aria-label="Settings sections" style={{ margin: '10px 0 14px' }}>
            {(['privacy', 'projects', 'safety'] as const).map((t) => <button key={t} role="tab" aria-checked={tab === t} onClick={() => setTab(t)}>{t === 'privacy' ? 'General' : t === 'projects' ? 'Projects' : 'Safety'}</button>)}
          </div>
          {tab === 'projects' ? <ProjectsPanel projects={projects} onSave={onSaveProject} onRemove={onRemoveProject} onCheck={onCheckProject} /> : null}
          {tab === 'safety' ? <SafetyPanel g={guardian} onRestore={onRestore} onMode={onGuardMode} scans={scans} onScan={onScan} onEmergency={onEmergency} onPurge={onPurge} /> : null}
          {tab === 'privacy' ? <>
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
          <SyncPanel sync={sync} onUnlock={onUnlock} onSyncNow={onSyncNow} />
          <div className="toggle" style={{ marginTop: 12 }}><div>Sign out<small>Locks VANTA in this browser.</small></div><a className="btn sm" style={{ display: 'grid', placeItems: 'center', textDecoration: 'none' }} href="/logout">Sign out</a></div>
          </> : null}
        </motion.aside>) : null}
    </AnimatePresence>)
}
