import { useState } from 'react'
import type { Block } from '../types'

const Head = ({ kind, title, right }: { kind: string; title?: string; right?: React.ReactNode }) => (
  <div className="block-head"><span className="k">{kind}</span><span className="t">{title}</span>{right}</div>
)
const str = (v: unknown) => (v == null ? '' : String(v))

function Text({ b }: { b: Block }) {
  const paras = str(b.data.body ?? b.data.text).split(/\n{2,}/).filter(Boolean)
  return (<><Head kind={str(b.data.kind) || 'note'} title={b.title} />
    <div className="block-body">{paras.map((p, i) => <p key={i} style={{ margin: i ? '10px 0 0' : 0 }}>{p}</p>)}</div></>)
}

function Node({ b }: { b: Block }) {
  return <div className="block-body"><span><b>{b.title}</b><br />{str(b.data.value ?? b.data.label)}</span></div>
}

function News({ b }: { b: Block }) {
  return (<>
    <div className="block-head" style={{ borderBottom: 0, paddingTop: 12 }}><span className="k2" style={{ font: '500 11px var(--mono)', letterSpacing: '.14em', color: 'var(--accent)' }}>NEWS</span>
      <span className="t" style={{ color: 'var(--muted)', fontSize: 12 }}>{str(b.data.source)} · {str(b.data.time)}</span></div>
    <div className="block-body news" style={{ paddingTop: 0 }}>
      <div className="headline">{str(b.data.headline ?? b.title)}</div>
      {b.data.tag ? <div style={{ marginTop: 10 }}><span className="chip">{str(b.data.tag)}</span></div> : null}
    </div></>)
}

function Chart({ b }: { b: Block }) {
  const vals: number[] = Array.isArray(b.data.values) ? b.data.values.map(Number).filter(Number.isFinite) : []
  const max = Math.max(1, ...vals), hi = typeof b.data.highlightFrom === 'number' ? b.data.highlightFrom : Infinity
  const W = 408, H = 70, n = Math.max(1, vals.length), bw = Math.max(3, Math.min(14, (W / n) * 0.62)), step = W / n
  return (<><Head kind="chart" title={b.title} right={b.data.note ? <span style={{ font: '10px var(--mono)', color: 'var(--muted)' }}>{str(b.data.note)}</span> : null} />
    <div className="block-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} preserveAspectRatio="none" role="img" aria-label={b.title || 'chart'}>
        {vals.map((v, i) => { const h = Math.max(3, (v / max) * (H - 4)); return <rect key={i} x={i * step + (step - bw) / 2} y={H - h} width={bw} height={h} rx={2} style={{ fill: i >= hi ? 'var(--alert)' : 'var(--accent-line)' }} /> })}
      </svg>
      <div style={{ display: 'flex', justifyContent: 'space-between', font: '10px var(--mono)', color: 'var(--muted)' }}><span>{str(b.data.from)}</span><span>{str(b.data.to ?? 'now')}</span></div>
    </div></>)
}

function Code({ b }: { b: Block }) {
  const [copied, setCopied] = useState(false)
  const code = str(b.data.code)
  return (<><Head kind="code" title={str(b.data.filename) || b.title}
    right={<button className="btn ghost sm" style={{ height: 28, padding: '0 8px' }} onClick={() => { navigator.clipboard?.writeText(code).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500) }) }}>{copied ? 'Copied' : 'Copy'}</button>} />
    <div className="block-body"><pre className="code">{code}</pre></div></>)
}

function Table({ b }: { b: Block }) {
  const cols: string[] = Array.isArray(b.data.columns) ? b.data.columns.map(str) : []
  const rows: unknown[][] = Array.isArray(b.data.rows) ? b.data.rows.slice(0, 50) : []
  return (<><Head kind="table" title={b.title} />
    <div className="block-body"><table className="tbl"><thead><tr>{cols.map((c, i) => <th key={i}>{c}</th>)}</tr></thead>
      <tbody>{rows.map((r, i) => <tr key={i}>{(Array.isArray(r) ? r : [r]).map((c, j) => <td key={j}>{str(c)}</td>)}</tr>)}</tbody></table></div></>)
}

function Stat({ b }: { b: Block }) {
  return (<><Head kind="stat" title={b.title} /><div className="block-body stat"><b>{str(b.data.value)}</b><span>{str(b.data.label)}</span></div></>)
}

function Bars({ b }: { b: Block }) {
  const pts: { label: string; value: number }[] = Array.isArray(b.data.points) ? b.data.points.map((p: { label?: unknown; value?: unknown }) => ({ label: str(p.label), value: Number(p.value) })).filter((p: { value: number }) => Number.isFinite(p.value)) : []
  const max = Math.max(1, ...pts.map((p) => p.value))
  return (<><Head kind="chart" title={b.title} right={b.data.unit ? <span style={{ font: '10px var(--mono)', color: 'var(--muted)' }}>{str(b.data.unit)}</span> : null} />
    <div className="block-body barchart" role="img" aria-label={b.title || 'bar chart'}>
      {pts.map((p, i) => (<div className="bar-col" key={i}><em>{p.value}</em><i style={{ height: `${Math.max(4, (p.value / max) * 100)}%` }} /><span>{p.label}</span></div>))}
    </div></>)
}

function Source({ b }: { b: Block }) {
  const url = str(b.data.url), img = str(b.data.image)
  let host = ''
  try { host = new URL(url).hostname.replace(/^www\./, '') } catch { /* no link */ }
  const body = (<>
    {img ? <img className="src-img" src={img} alt="" loading="lazy" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.style.display = 'none' }} /> : null}
    <div className="block-body src"><span className="src-n">{str(b.data.n)}</span><b>{b.title}</b><em>{host}</em></div></>)
  return url ? <a className="src-link" href={url} target="_blank" rel="noopener noreferrer">{body}</a> : body
}

function Steps({ b }: { b: Block }) {
  const items: { label: string; state?: string }[] = (Array.isArray(b.data.items) ? b.data.items : []).map((x: unknown) =>
    typeof x === 'string' ? { label: x } : { label: str((x as { label?: unknown }).label), state: str((x as { state?: unknown }).state) })
  return (<><Head kind="steps" title={b.title} /><div className="block-body"><ul className="steplist">
    {items.map((it, i) => <li key={i} className={it.state === 'done' ? 'done' : it.state === 'active' ? 'active' : it.state === 'todo' ? 'todo' : ''}>
      <span className="m">{it.state === 'done' ? '✓' : ''}</span>{it.label}</li>)}</ul></div></>)
}

function ImageBlock({ b }: { b: Block }) {
  const [ratio, setRatio] = useState<number | null>(null)
  const ann: { x: number; y: number; w: number; h: number; label?: string }[] = Array.isArray(b.data.annotations) ? b.data.annotations : []
  const src = str(b.data.src)
  return (<><Head kind={str(b.data.kind) || 'image'} title={b.title} right={ann.length ? <span style={{ fontSize: 11, color: 'var(--accent)', border: '1px solid var(--border-2)', borderRadius: 999, padding: '2px 8px' }}>annotated</span> : null} />
    <div className="block-body flush" style={{ display: 'grid', placeItems: 'center', background: '#0A1020' }}>
      {src ? <div className="shot" style={{ aspectRatio: ratio ? String(ratio) : undefined, width: ratio ? undefined : '100%', height: '100%', maxWidth: '100%' }}>
        <img src={src} alt={b.title || 'screenshot'} onLoad={(e) => setRatio(e.currentTarget.naturalWidth / e.currentTarget.naturalHeight)} style={{ objectFit: 'fill' }} />
        {ann.slice(0, 6).map((a, i) => (<div key={i}>
          <div className={`box ${i ? 'second' : ''}`} style={{ left: `${a.x * 100}%`, top: `${a.y * 100}%`, width: `${a.w * 100}%`, height: `${a.h * 100}%` }} />
          {a.label ? <div className="badge" style={{ left: `${a.x * 100}%`, top: `${a.y * 100}%` }}>{i + 1} · {String(a.label).slice(0, 40)}</div> : null}
        </div>))}
      </div> : <span style={{ color: 'var(--muted)', fontSize: 13 }}>No image</span>}
    </div></>)
}

/** Free-form SVG/HTML from a model runs in a locked iframe: no scripts, no network, no access to VANTA. */
function Sandboxed({ b }: { b: Block }) {
  const markup = str(b.data.markup)
  const doc = `<!doctype html><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src data:;"><style>html,body{margin:0;height:100%;background:#0A1020;color:#E8EEF8;font:14px system-ui}svg{max-width:100%;max-height:100%}</style><body>${markup}</body>`
  return (<><Head kind={b.type} title={b.title} /><div className="block-body flush">
    <iframe className="sandboxed" sandbox="" referrerPolicy="no-referrer" srcDoc={doc} title={b.title || 'visual'} /></div></>)
}

function Weather({ b }: { b: Block }) {
  return (<><Head kind="weather" title={b.title || str(b.data.city)} /><div className="block-body wx">
    <b>{Math.round(Number(b.data.temp))}°</b><span style={{ color: 'var(--muted)' }}>{str(b.data.condition)}</span></div></>)
}

export function BlockBody({ b }: { b: Block }) {
  switch (b.type) {
    case 'text': return <Text b={b} />
    case 'node': return <Node b={b} />
    case 'news': return <News b={b} />
    case 'chart': return <Chart b={b} />
    case 'code': return <Code b={b} />
    case 'table': return <Table b={b} />
    case 'steps': return <Steps b={b} />
    case 'image': return <ImageBlock b={b} />
    case 'svg': case 'html': return <Sandboxed b={b} />
    case 'weather': return <Weather b={b} />
    case 'stat': return <Stat b={b} />
    case 'bars': return <Bars b={b} />
    case 'source': return <Source b={b} />
    default: return null
  }
}
