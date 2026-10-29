import { useMemo, useState } from 'react'
import type { HwState, SphereState } from '../types'
import { Sphere, STATE_LABEL } from './Sphere'
import { disk, headline, heat, mb, rate, spark, tone, up } from '../lib/hw'

function Ring({ pct, label, sub, big }: { pct: number; label: string; sub?: string; big?: boolean }) {
  const r = 42, c = 2 * Math.PI * r, t = tone(pct)
  return (
    <svg className={`ring ${t} ${big ? 'big' : ''}`} viewBox="0 0 100 100" role="img" aria-label={`${label} ${Math.round(pct)} percent`}>
      <circle cx="50" cy="50" r={r} className="track" />
      <circle cx="50" cy="50" r={r} className="arc" strokeDasharray={`${(Math.min(100, pct) / 100) * c} ${c}`} transform="rotate(-90 50 50)" />
      <text x="50" y={sub ? 49 : 55} className="num">{Math.round(pct)}<tspan className="pc">%</tspan></text>
      {sub ? <text x="50" y="66" className="sub">{sub}</text> : null}
    </svg>)
}

function Spark({ values, max, cls }: { values: number[]; max?: number; cls?: string }) {
  const pts = spark(values, 160, 34, max)
  if (!pts) return <div className="spark empty" />
  return (<svg className={`spark ${cls ?? ''}`} viewBox="0 0 160 34" preserveAspectRatio="none" aria-hidden="true">
    <polyline points={`0,34 ${pts} 160,34`} className="fill" /><polyline points={pts} className="line" /></svg>)
}

function Card({ title, aside, children, wide }: { title: string; aside?: React.ReactNode; children: React.ReactNode; wide?: boolean }) {
  return (<section className={`bcard ${wide ? 'wide' : ''}`}><header><span className="k">{title}</span>{aside ? <span className="aside">{aside}</span> : null}</header>{children}</section>)
}

export function SystemBoard({ hw, sphere, amplitude, low, onEnd, onUninstall, onAsk }: {
  hw: HwState | null; sphere: SphereState; amplitude: number; low: boolean
  onEnd: (pid: number) => void; onUninstall: (id: string) => void; onAsk: (q: string) => void
}) {
  const [q, setQ] = useState('')
  const [showInstalled, setShowInstalled] = useState(false)
  const head = hw ? headline(hw.findings) : null
  const apps = useMemo(() => (hw?.installed ?? []).filter((p) => p.name.toLowerCase().includes(q.toLowerCase())).slice(0, 40), [hw?.installed, q])

  return (
    <div className="board">
      <div className="board-hero">
        <div className="hero-sphere"><Sphere state={sphere} amplitude={amplitude} spot={{ cx: 70, cy: 70, size: 132 }} low={low} /></div>
        <div className="hero-text">
          <span className="k">{STATE_LABEL[sphere]}</span>
          <h3 className={head?.tone ?? ''}>{head ? head.text : 'Reading your computer…'}</h3>
          <p>{hw ? (hw.findings[0]?.text ?? `Everything looks normal. Up for ${up(hw.uptime)}.`) : 'Give me a second.'}</p>
        </div>
        <div className="hero-ask">
          <button className="chip" onClick={() => onAsk('how is my laptop doing')}>Explain it</button>
          <button className="chip" onClick={() => onAsk('what is slowing my computer down')}>Why slow?</button>
        </div>
      </div>

      {!hw ? <div className="board-wait">Waiting for the first reading…</div> : (<>
        {hw.findings.length > 1 ? (
          <Card title="THINGS I NOTICED" wide>
            <ul className="finds">{hw.findings.map((f, i) => <li key={i} className={f.level}><i />{f.text}</li>)}</ul>
          </Card>) : null}

        <div className="bgrid">
          <Card title="PROCESSOR" aside={hw.cpu.freq ? `${(hw.cpu.freq.mhz / 1000).toFixed(1)} GHz` : undefined}>
            <div className="gauge-row">
              <Ring pct={hw.cpu.pct} label="Processor" sub={hw.cpu.temp != null ? `${Math.round(hw.cpu.temp)}°C` : `${hw.cpu.count} cores`} />
              <div className="gauge-side"><Spark values={hw.history.cpu} max={100} /><div className="cores" aria-label="Per core load">
                {hw.cpu.cores.map((c, i) => <i key={i} className={tone(c)} title={`Core ${i + 1}: ${Math.round(c)}%`}><b style={{ height: `${Math.max(6, c)}%` }} /></i>)}</div></div>
            </div>
          </Card>

          <Card title="MEMORY" aside={`${hw.mem.used} / ${hw.mem.total} GB`}>
            <div className="gauge-row">
              <Ring pct={hw.mem.pct} label="Memory" sub={hw.mem.swap.total ? `swap ${Math.round(hw.mem.swap.pct)}%` : undefined} />
              <div className="gauge-side"><Spark values={hw.history.mem} max={100} /><p className="hint">{hw.mem.pct >= 85 ? 'Tight. Close something heavy.' : 'Plenty of room.'}</p></div>
            </div>
          </Card>

          <Card title="DRIVES" aside={`↓ ${disk(hw.disk_io.read)}  ↑ ${disk(hw.disk_io.write)}`}>
            {hw.disks.length ? hw.disks.map((d) => (
              <div className="drive" key={d.mount}>
                <div className="drow"><span>{d.mount}</span><em>{d.free} GB free of {d.total}</em></div>
                <i className={`meter ${tone(d.pct)}`}><b style={{ width: `${d.pct}%` }} /></i>
              </div>)) : <p className="hint">No drives reported.</p>}
            <Spark values={hw.history.disk} cls="alt" />
          </Card>

          <Card title="HEAT & FANS" aside={hw.thermal.source !== 'none' ? hw.thermal.source : undefined}>
            {hw.thermal.temps.length || hw.thermal.fans.length ? (<>
              <div className="temps">{hw.thermal.temps.slice(0, 6).map((t, i) => <div key={i} className={`temp ${heat(t.c)}`}><b>{Math.round(t.c)}°</b><span>{t.label}</span></div>)}</div>
              {hw.thermal.fans.length ? <div className="fans">{hw.thermal.fans.map((f, i) => <span key={i} className="fan"><svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M12 12c0-4 2-6 5-6-.5 3-2 5-5 6zm0 0c4 0 6 2 6 5-3-.5-5-2-6-5zm0 0c0 4-2 6-5 6 .5-3 2-5 5-6zm0 0c-4 0-6-2-6-5 3 .5 5 2 6 5z" fill="currentColor" /></svg>{f.rpm} rpm</span>)}</div> : null}
            </>) : <p className="hint">Windows doesn't share temperature or fan speed with programs. Run the free LibreHardwareMonitor app, switch on its web server, and these appear here.</p>}
            {hw.battery ? <div className="batt"><i className="meter cool"><b style={{ width: `${hw.battery.pct}%` }} /></i><span>Battery {hw.battery.pct}%{hw.battery.plugged ? ' · charging' : hw.battery.mins ? ` · ${Math.floor(hw.battery.mins / 60)}h ${hw.battery.mins % 60}m left` : ''}</span></div> : null}
          </Card>

          <Card title="PROGRAMS" aside={`${hw.programs.length} busiest`} wide>
            <div className="ptable" role="table">
              <div className="prow phead" role="row"><span>Program</span><span>Processor</span><span>Memory</span><span /></div>
              {hw.programs.slice(0, 9).map((p) => (
                <div className="prow" role="row" key={p.name}>
                  <span className="pname">{p.name}{p.count > 1 ? <em> ×{p.count}</em> : null}</span>
                  <span><i className={`meter thin ${tone(p.cpu * 2)}`}><b style={{ width: `${Math.min(100, p.cpu)}%` }} /></i><em>{p.cpu.toFixed(0)}%</em></span>
                  <span className="pmem">{mb(p.mem)}</span>
                  <span>{p.protected ? <em className="lock" title="Part of the system, VANTA won't stop it">system</em> : <button className="btn sm" onClick={() => onEnd(p.pid)}>End</button>}</span>
                </div>))}
            </div>
          </Card>

          <Card title="NETWORK" aside={`↓ ${rate(hw.net.down)}  ↑ ${rate(hw.net.up)}`}>
            <div className="sparks"><Spark values={hw.history.down} /><Spark values={hw.history.up} cls="alt" /></div>
            {hw.network.interfaces.map((n) => <div className="kv" key={n.name}><span>{n.name}</span><em>{n.ip}{n.speed ? ` · ${n.speed} Mb/s` : ''}</em></div>)}
            {hw.network.connected.slice(0, 4).map((c) => <div className="kv" key={c.program}><span>{c.program}</span><em>{c.count} connections{c.outside ? ` · ${c.outside} to the internet` : ''}</em></div>)}
          </Card>

          <Card title="SECURITY" aside={hw.network.limited ? 'limited view' : undefined}>
            <div className="sec">{hw.network.security.map((s) => (
              <div key={s.name} className={`secrow ${s.state}`}><i /><div><b>{s.name}: {s.state === 'unknown' ? 'not checked' : s.state}</b><span>{s.note}</span></div></div>))}</div>
            <div className="doors"><span className="k">OPEN DOORS</span>
              {hw.network.listening.filter((l) => l.scope !== 'this computer only').slice(0, 5).map((l, i) => (
                <div className={`kv ${l.risk ? 'risk' : ''}`} key={i}><span>{l.program}</span><em>port {l.port} · {l.scope}{l.risk ? ` · ${l.risk}` : ''}</em></div>))}
              {!hw.network.listening.some((l) => l.scope !== 'this computer only') ? <p className="hint">Nothing is open to other computers.</p> : null}
            </div>
          </Card>

          <Card title="INSTALLED PROGRAMS" aside={hw.can_uninstall ? `${hw.installed.length}` : undefined} wide>
            {!hw.can_uninstall ? <p className="hint">Listing installed programs works on Windows. You can still tell me what to remove.</p> : (<>
              <button className="btn sm" aria-expanded={showInstalled} onClick={() => setShowInstalled((v) => !v)}>{showInstalled ? 'Hide list' : 'Show list'}</button>
              {showInstalled ? (<>
                <input className="search" placeholder="Find a program" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Find a program" />
                <div className="ilist">{apps.map((p) => (
                  <div className="irow" key={p.id}><span className="pname">{p.name}<em>{p.version ? ` ${p.version}` : ''}</em></span><span className="pmem">{p.mb ? mb(p.mb) : ''}</span>
                    {p.protected ? <em className="lock" title="Windows or a driver needs this">system</em> : <button className="btn sm danger" onClick={() => onUninstall(p.id)}>Uninstall</button>}</div>))}</div>
                <p className="hint">VANTA asks you first, then starts the program's own uninstaller. You get its confirmation window too.</p></>) : null}
            </>)}
          </Card>
        </div>
      </>)}
    </div>)
}
