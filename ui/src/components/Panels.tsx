import { useState } from 'react'
import type { GuardianState, Project, ScanResult } from '../types'

const WORDS: Record<string, string> = { proposed: 'Asked you', mode_changed: 'Autopilot changed', emergency_changed: 'Emergency stop changed', approved: 'You approved', denied: 'You said no', done: 'Done', failed: 'Could not do it', expired: 'Expired' }
const when = (ts: number) => new Date(ts * 1000).toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
const name = (p: string) => p.split(/[\\/]/).pop() ?? p

export function ProjectsPanel({ projects, onSave, onRemove }: { projects: Project[]; onSave: (p: Partial<Project>) => void; onRemove: (id: string) => void }) {
  const [n, setN] = useState(''), [f, setF] = useState('')
  return (<>
    <p>What you are building. I read these folders (never change them) so I can answer "how is X going?"</p>
    {projects.map((p) => (
      <div className="proj" key={p.id}>
        <div className="proj-h"><b>{p.name}</b><span className="chip">{p.status}</span></div>
        {p.summary ? <div className="proj-s">{p.summary}</div> : null}
        <div className="proj-m">
          {p.health?.branch ? `${p.health.branch} · ${p.health.uncommitted ? `${p.health.uncommitted} unsaved change${p.health.uncommitted > 1 ? 's' : ''}` : 'all saved'} · ${p.health.last_commit}` : p.folder && p.health?.exists === false ? 'Folder not found on this computer' : p.stack || ''}
        </div>
        <input className="proj-in" aria-label={`Next step for ${p.name}`} placeholder="Next step…" defaultValue={p.next_step} onBlur={(e) => e.target.value !== p.next_step && onSave({ id: p.id, next_step: e.target.value })} />
        <button className="btn ghost sm" onClick={() => onRemove(p.id)}>Remove</button>
      </div>))}
    {!projects.length ? <p>No projects yet.</p> : null}
    <div className="proj add">
      <input className="proj-in" aria-label="Project name" placeholder="Project name" value={n} onChange={(e) => setN(e.target.value)} />
      <input className="proj-in" aria-label="Folder path" placeholder="Folder (optional), e.g. C:\\Users\\you\\vanta" value={f} onChange={(e) => setF(e.target.value)} />
      <button className="btn sm primary" disabled={!n.trim()} onClick={() => { onSave({ name: n, folder: f }); setN(''); setF('') }}>Add project</button>
    </div>
  </>)
}

export function SafetyPanel({ g, onRestore, onMode, scans, onScan, onEmergency, onPurge }: {
  onEmergency: (on: boolean) => void; onPurge: (id: string) => void; g: GuardianState | null; onRestore: (id: string) => void; onMode: (m: 'ask' | 'auto') => void; scans: ScanResult[]; onScan: (p: string) => void }) {
  const [path, setPath] = useState('')
  if (!g) return <p>Loading…</p>
  return (<>
    <div className="toggle" style={{ borderTop: 0 }}>
      <div>Let VANTA act on its own<small>{g.mode === 'auto'
        ? `On. When I find a threat I wait ${g.veto ?? 30} seconds so you can press Stop, then deal with it (up to ${g.max_per_hour ?? 3} times an hour).`
        : 'Off. I ask you every time.'}</small></div>
      <button className="switch" role="switch" aria-label="Let VANTA act on its own" aria-checked={g.mode === 'auto'}
        onClick={() => { if (g.mode === 'auto' || window.confirm('Let VANTA end programs and quarantine files by itself?\n\nIt waits 30 seconds first so you can stop it, never deletes anything, and you can undo file moves. Ending a program loses anything unsaved in it.')) onMode(g.mode === 'auto' ? 'ask' : 'auto') }} />
    </div>
    <div className="toggle">
      <div>Stop confirmed malware immediately<small>{g.emergency === false ? 'Off. I will only warn you.' : 'On. When I confirm a file is malware (any type), or see files being locked fast, I end it and quarantine it straight away, without asking. Programs I am only unsure about, verified apps, and ones you trust are never touched without your say-so.'}</small></div>
      <button className="switch" role="switch" aria-label="Emergency stop" aria-checked={g.emergency !== false} onClick={() => onEmergency(g.emergency === false)} />
    </div>
    <p>Files go to a locked folder. Everything is written here.</p>
    <div className={`chain ${g.chain_ok ? 'ok' : 'bad'}`} role="status">{g.chain_ok ? 'Log intact: nothing has been edited or removed.' : 'Warning: this log has been changed after the fact.'}</div>
    <h3>Recent scans</h3>
    <p>I check every download and every running program, reading what's inside without running it. Only a file's fingerprint is ever sent out, and only if you add a VirusTotal key.</p>
    <div className="composer" style={{ marginBottom: 10 }}>
      <input aria-label="File to scan" placeholder="Scan a file: paste its path" value={path} onChange={(e) => setPath(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' && path.trim()) { onScan(path.trim()); setPath('') } }} />
      <button className="btn sm primary" disabled={!path.trim()} onClick={() => { onScan(path.trim()); setPath('') }}>Scan</button>
    </div>
    {scans.slice(0, 12).map((x) => (
      <div className="proj" key={x.sha256}>
        <div className="proj-h"><b style={{ overflowWrap: 'anywhere' }}>{x.name}</b><span className={`chip scan-${x.label}`}>{x.family ? x.family.family : x.label}</span></div>
        {x.family ? <div className="proj-s">{x.family.does}</div> : null}
        {x.about ? <div className="proj-s">{x.about}</div> : null}
        <div className="proj-m">{[...x.reasons, ...x.vouched].slice(0, 3).join(' · ') || 'Nothing unusual found.'}{x.publisher ? ` · ${x.publisher}` : ''}</div>
      </div>))}
    {!scans.length ? <p>Nothing scanned yet.</p> : null}
    <h3 style={{ marginTop: 16 }}>Quarantined files</h3>
    {g.quarantined.map((q) => (
      <div className="proj" key={q.id}><div className="proj-h"><b>{name(q.original)}</b></div><div className="proj-m">{q.original}<br />Locked {when(q.ts)}</div>
        <div style={{ display: 'flex', gap: 8 }}><button className="btn sm" onClick={() => onRestore(q.id)}>Put it back</button>
          <button className="btn sm ghost" onClick={() => { if (window.confirm('Delete this file permanently? This cannot be undone.')) onPurge(q.id) }}>Delete for good</button></div></div>))}
    {!g.quarantined.length ? <p>Nothing quarantined.</p> : null}
    <h3 style={{ marginTop: 16 }}>Recent activity</h3>
    {g.audit.map((a) => (
      <div className="log" key={a.n}><span>{when(a.ts)}</span><span>{WORDS[a.event] ?? a.event}</span><em>{String((a.detail as { kind?: string; target?: { name?: string; path?: string } }).target?.name ?? name(String((a.detail as { target?: { path?: string } }).target?.path ?? '')) ?? '')}</em></div>))}
    {!g.audit.length ? <p>No actions yet.</p> : null}
  </>)
}
