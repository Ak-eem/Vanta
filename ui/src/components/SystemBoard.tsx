import { useMemo, useState } from 'react'
import type { FilesState, HwState, SphereState, WeatherState } from '../types'
import { Sphere, STATE_LABEL } from './Sphere'
import { disk, headline, heat, mb, rankCards, rate, size, spark, tone, up, type CardId } from '../lib/hw'

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

const SKY: Record<string, string> = {
  clear: 'M12 7a5 5 0 100 10 5 5 0 000-10zM12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1',
  cloud: 'M7 18a4 4 0 010-8 5.5 5.5 0 0110.6 1.5A3.3 3.3 0 0117 18z',
  rain: 'M7 14a4 4 0 010-8 5.5 5.5 0 0110.6 1.5A3.3 3.3 0 0117 14zM8 17l-1 3M12 17l-1 3M16 17l-1 3',
  storm: 'M7 13a4 4 0 010-8 5.5 5.5 0 0110.6 1.5A3.3 3.3 0 0117 13zM12 13l-2 4h3l-2 4',
  fog: 'M5 9h14M3 13h18M6 17h12', snow: 'M12 2v20M4 7l16 10M20 7L4 17',
  moon: 'M20 14.5A8 8 0 019.5 4a8 8 0 1010.5 10.5z',
}
function Sky({ kind, night, big }: { kind: string; night?: boolean; big?: boolean }) {
  const k = night && kind === 'clear' ? 'moon' : kind
  return (<svg className={`sky ${k} ${big ? 'big' : ''}`} viewBox="0 0 24 24" aria-hidden="true"><path d={SKY[k] ?? SKY.cloud} /></svg>)
}

function WeatherCard({ w, rank, onCity }: { w: WeatherState | null; rank: { order: CardId[]; alert: Set<CardId> } | null; onCity: (c: string) => void }) {
  const [q, setQ] = useState('')
  return (
    <Card id="weather" rank={rank} title="WEATHER" aside={w && !w.error ? `${w.city}${w.country ? ', ' + w.country : ''}` : undefined} wide>
      {!w ? <p className="hint">Looking at the sky…</p> : w.error ? <p className="hint">{w.error}</p> : (<>
        <div className="wx-now">
          <Sky kind={w.icon} night={w.night} big />
          <div><b className="wx-temp">{w.temp}°</b><span>{w.desc} · feels {w.feels}° · {w.humidity}% humid · wind {w.wind} km/h</span>
            {w.hint ? <em className="wx-hint">{w.hint}</em> : null}</div>
        </div>
        <div className="wx-hours" aria-label="Next hours">{w.hours.slice(0, 8).map((h, i) => (
          <div key={i}><span>{i === 0 ? 'Now' : h.label}</span><Sky kind={h.icon} /><b>{h.temp}°</b>{h.rain >= 30 ? <em>{h.rain}%</em> : <em />}</div>))}</div>
        <div className="wx-days">{w.days.map((d, i) => (
          <div key={i}><span>{i === 0 ? 'Today' : d.label}</span><Sky kind={d.icon} /><em>{d.rain >= 30 ? `${d.rain}%` : ''}</em><b>{d.hi}°</b><span className="lo">{d.lo}°</span></div>))}</div>
      </>)}
      <form className="wx-city" onSubmit={(e) => { e.preventDefault(); if (q.trim()) { onCity(q.trim()); setQ('') } }}>
        <input className="search" placeholder="Another city" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Another city" />
      </form>
    </Card>)
}

function FilesCard({ f, rank }: { f: FilesState | null; rank: { order: CardId[]; alert: Set<CardId> } | null }) {
  return (
    <Card id="files" rank={rank} title="MY FILES" aside={f ? `${f.files.length}` : undefined}>
      {!f || !f.files.length ? <p className="hint">Files VANTA makes for you appear here with a download button. They are saved in your VANTA folder{f ? `: ${f.folder}` : ''}.</p> : (
        <div className="flist">{f.files.slice(0, 8).map((x) => (
          <div className="frow" key={x.name}><span className="pname">{x.name}</span><span className="pmem">{size(x.size)}</span>
            <a className="btn sm" href={`/files/${encodeURIComponent(x.name)}`} download>Download</a></div>))}</div>)}
    </Card>)
}

function Card({ id, rank, title, aside, children, wide }: { id: CardId; rank: { order: CardId[]; alert: Set<CardId> } | null; title: string; aside?: React.ReactNode; children: React.ReactNode; wide?: boolean }) {
  return (<section className={`bcard ${wide ? 'wide' : ''} ${rank?.alert.has(id) ? 'alert' : ''}`} style={{ order: rank ? rank.order.indexOf(id) : 0 }}><header><span className="k">{title}</span>{aside ? <span className="aside">{aside}</span> : null}</header>{children}</section>)
}

export function SystemBoard({ hw, weather, files, onCity, focus, sphere, amplitude, low, onEnd, onUninstall, onAsk }: {
  hw: HwState | null; weather?: WeatherState | null; files?: FilesState | null; onCity?: (c: string) => void; focus?: CardId | null; sphere: SphereState; amplitude: number; low: boolean
  onEnd: (pid: number) => void; onUninstall: (id: string) => void; onAsk: (q: string) => void
}) {
  const [q, setQ] = useState('')
  const [showInstalled, setShowInstalled] = useState(false)
  const rank = useMemo(() => (hw ? rankCards(hw, focus) : null), [hw, focus])
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
          <Card id="installed" rank={null} title="THINGS I NOTICED" wide>
            <ul className="finds">{hw.findings.map((f, i) => <li key={i} className={f.level}><i />{f.text}</li>)}</ul>
          </Card>) : null}

        <div className="bgrid">
          <WeatherCard w={weather ?? null} rank={rank} onCity={onCity ?? (() => {})} />
          <FilesCard f={files ?? null} rank={rank} />
          <Card id="cpu" rank={rank} title="PROCESSOR" aside={hw.cpu.freq ? `${(hw.cpu.freq.mhz / 1000).toFixed(1)} GHz` : undefined}>
            <div className="gauge-row">
              <Ring pct={hw.cpu.pct} label="Processor" sub={hw.cpu.temp != null ? `${Math.round(hw.cpu.temp)}°C` : `${hw.cpu.count} cores`} />
              <div className="gauge-side"><Spark values={hw.history.cpu} max={100} /><div className="cores" aria-label="Per core load">
                {hw.cpu.cores.map((c, i) => <i key={i} className={tone(c)} title={`Core ${i + 1}: ${Math.round(c)}%`}><b style={{ height: `${Math.max(6, c)}%` }} /></i>)}</div></div>
            </div>
          </Card>

          <Card id="mem" rank={rank} title="MEMORY" aside={`${hw.mem.used} / ${hw.mem.total} GB`}>
            <div className="gauge-row">
              <Ring pct={hw.mem.pct} label="Memory" sub={hw.mem.swap.total ? `swap ${Math.round(hw.mem.swap.pct)}%` : undefined} />
              <div className="gauge-side"><Spark values={hw.history.mem} max={100} /><p className="hint">{hw.mem.pct >= 85 ? 'Tight. Close something heavy.' : 'Plenty of room.'}</p></div>
            </div>
          </Card>

          <Card id="disks" rank={rank} title="DRIVES" aside={`↓ ${disk(hw.disk_io.read)}  ↑ ${disk(hw.disk_io.write)}`}>
            {hw.disks.length ? hw.disks.map((d) => (
              <div className="drive" key={d.mount}>
                <div className="drow"><span>{d.mount}</span><em>{d.free} GB free of {d.total}</em></div>
                <i className={`meter ${tone(d.pct)}`}><b style={{ width: `${d.pct}%` }} /></i>
              </div>)) : <p className="hint">No drives reported.</p>}
            <Spark values={hw.history.disk} cls="alt" />
          </Card>

          <Card id="heat" rank={rank} title="HEAT & FANS" wide={!(hw.thermal.temps.length || hw.thermal.fans.length)} aside={hw.thermal.source !== 'none' ? hw.thermal.source : undefined}>
            {hw.thermal.temps.length || hw.thermal.fans.length ? (<>
              <div className="temps">{hw.thermal.temps.slice(0, 6).map((t, i) => <div key={i} className={`temp ${heat(t.c)}`}><b>{Math.round(t.c)}°</b><span>{t.label}</span></div>)}</div>
              {hw.thermal.fans.length ? <div className="fans">{hw.thermal.fans.map((f, i) => <span key={i} className="fan"><svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M12 12c0-4 2-6 5-6-.5 3-2 5-5 6zm0 0c4 0 6 2 6 5-3-.5-5-2-6-5zm0 0c0 4-2 6-5 6 .5-3 2-5 5-6zm0 0c-4 0-6-2-6-5 3 .5 5 2 6 5z" fill="currentColor" /></svg>{f.rpm} rpm</span>)}</div> : null}
            </>) : <p className="hint">Windows doesn't share temperature or fan speed with programs. Run the free LibreHardwareMonitor app, switch on its web server, and these appear here.</p>}
            {hw.battery ? <div className="batt"><i className="meter cool"><b style={{ width: `${hw.battery.pct}%` }} /></i><span>Battery {hw.battery.pct}%{hw.battery.plugged ? ' · charging' : hw.battery.mins ? ` · ${Math.floor(hw.battery.mins / 60)}h ${hw.battery.mins % 60}m left` : ''}</span></div> : null}
          </Card>

          <Card id="programs" rank={rank} title="PROGRAMS" aside={`${hw.programs.length} busiest`} wide>
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

          <Card id="network" rank={rank} title="NETWORK" aside={`↓ ${rate(hw.net.down)}  ↑ ${rate(hw.net.up)}`}>
            <div className="sparks"><Spark values={hw.history.down} /><Spark values={hw.history.up} cls="alt" /></div>
            {hw.network.interfaces.map((n) => <div className="kv" key={n.name}><span>{n.name}</span><em>{n.ip}{n.speed ? ` · ${n.speed} Mb/s` : ''}</em></div>)}
            {hw.network.connected.slice(0, 4).map((c) => <div className="kv" key={c.program}><span>{c.program}</span><em>{c.count} connections{c.outside ? ` · ${c.outside} to the internet` : ''}</em></div>)}
          </Card>

          <Card id="security" rank={rank} title="SECURITY" aside={hw.network.limited ? 'limited view' : undefined}>
            <div className="sec">{hw.network.security.map((s) => (
              <div key={s.name} className={`secrow ${s.state}`}><i /><div><b>{s.name}: {s.state === 'unknown' ? 'not checked' : s.state}</b><span>{s.note}</span></div></div>))}</div>
            <div className="doors"><span className="k">OPEN DOORS</span>
              {hw.network.listening.filter((l) => l.scope !== 'this computer only').slice(0, 5).map((l, i) => (
                <div className={`kv ${l.risk ? 'risk' : ''}`} key={i}><span>{l.program}</span><em>port {l.port} · {l.scope}{l.risk ? ` · ${l.risk}` : ''}</em></div>))}
              {!hw.network.listening.some((l) => l.scope !== 'this computer only') ? <p className="hint">Nothing is open to other computers.</p> : null}
            </div>
          </Card>

          <Card id="installed" rank={rank} title="INSTALLED PROGRAMS" aside={hw.can_uninstall ? `${hw.installed.length}` : undefined} wide>
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
