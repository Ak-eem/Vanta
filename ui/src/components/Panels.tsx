import { useState } from 'react'
import type { GuardianState, Project } from '../types'

const WORDS: Record<string, string> = { proposed: 'Asked you', approved: 'You approved', denied: 'You said no', done: 'Done', failed: 'Could not do it', expired: 'Expired' }
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

export function SafetyPanel({ g, onRestore }: { g: GuardianState | null; onRestore: (id: string) => void }) {
  if (!g) return <p>Loading…</p>
  return (<>
    <p>I never act on a threat without you pressing a button. Files go to a locked folder (never deleted). Everything is written here.</p>
    <div className={`chain ${g.chain_ok ? 'ok' : 'bad'}`} role="status">{g.chain_ok ? 'Log intact: nothing has been edited or removed.' : 'Warning: this log has been changed after the fact.'}</div>
    <h3>Quarantined files</h3>
    {g.quarantined.map((q) => (
      <div className="proj" key={q.id}><div className="proj-h"><b>{name(q.original)}</b></div><div className="proj-m">{q.original}<br />Locked {when(q.ts)}</div>
        <button className="btn sm" onClick={() => onRestore(q.id)}>Put it back</button></div>))}
    {!g.quarantined.length ? <p>Nothing quarantined.</p> : null}
    <h3 style={{ marginTop: 16 }}>Recent activity</h3>
    {g.audit.map((a) => (
      <div className="log" key={a.n}><span>{when(a.ts)}</span><span>{WORDS[a.event] ?? a.event}</span><em>{String((a.detail as { kind?: string; target?: { name?: string; path?: string } }).target?.name ?? name(String((a.detail as { target?: { path?: string } }).target?.path ?? '')) ?? '')}</em></div>))}
    {!g.audit.length ? <p>No actions yet.</p> : null}
  </>)
}
