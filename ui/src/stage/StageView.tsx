import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import type { SphereState, Stage, StageAction } from '../types'
import { computeLayout } from './layout'
import { BlockBody } from './Blocks'
import { Sphere, STATE_LABEL } from '../components/Sphere'
import { SystemBoard } from '../components/SystemBoard'
import { ReportView } from '../components/ReportView'
import type { FilesState, HwState, WeatherState } from '../types'
import type { CardId } from '../lib/hw'

function useSize(ref: React.RefObject<HTMLElement>) {
  const [s, setS] = useState({ w: 900, h: 700 })
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const read = () => setS({ w: Math.floor(el.clientWidth), h: Math.floor(el.clientHeight) })
    const ro = new ResizeObserver(read); ro.observe(el); read()
    return () => ro.disconnect()
  }, [ref])
  return s
}

const fmt = (ts: number) => new Date(ts * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

function Shield() {
  return (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#F2B35E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /><path d="M12 9v4M12 16v.5" /></svg>)
}

export function StageView({ stage, history, pinned, sphere, amplitude, low, caption, footer, hw, weather, files, onCity, focus, onEnd, onUninstall, onAsk, onOpen, onPin, onClear, onAction }: {
  stage: Stage | null; history: Stage[]; pinned: boolean; sphere: SphereState; amplitude: number; low: boolean
  caption?: string; footer?: React.ReactNode
  hw?: HwState | null; weather?: WeatherState | null; files?: FilesState | null; onCity?: (c: string) => void; focus?: string | null; onEnd?: (pid: number) => void; onUninstall?: (id: string) => void; onAsk?: (q: string) => void
  onOpen: (id: string) => void; onPin: () => void; onClear: () => void; onAction: (stageId: string, a: StageAction) => void
}) {
  const view = useRef<HTMLDivElement>(null)
  const { w, h } = useSize(view)
  const layout = useMemo(() => computeLayout(stage, Math.max(280, w - 48), Math.max(360, h)), [stage, w, h])
  const earlier = history.filter((x) => x.id !== stage?.id).slice(0, 4)
  const recBlock = stage?.blocks.find((b) => b.type === 'recommendation')
  const actions = (stage?.actions ?? []).map((a) => (
    <button key={a.id} className={`btn ${a.kind ?? 'secondary'}`} onClick={() => stage && onAction(stage.id, a)}>{a.label}</button>))
  const labelY = layout.sphere.cy + layout.sphere.size / 2 + 6

  if (stage?.layout === 'report') {
    return (
      <section className="hud report-mode" aria-label="Report">
        <ReportView stage={stage} sphere={sphere} amplitude={amplitude} low={low} onClear={onClear} onAction={onAction} history={earlier} onOpen={onOpen} />
      </section>)
  }

  if (!stage && onEnd && onUninstall && onAsk) {
    return (
      <section className="hud board-mode" aria-label="System board">
        <div className="hud-head"><div className="hud-title"><span className="k">SYSTEM</span><h2>This computer</h2></div></div>
        <div className="hud-scroll"><SystemBoard hw={hw ?? null} weather={weather} files={files} onCity={onCity} focus={(focus as CardId | null) ?? null} sphere={sphere} amplitude={amplitude} low={low} onEnd={onEnd} onUninstall={onUninstall} onAsk={onAsk} /></div>
        {earlier.length > 0 ? (
          <div className="earlier"><span className="k">EARLIER</span>
            {earlier.map((e) => <button key={e.id} onClick={() => onOpen(e.id)}>{e.title} · {fmt(e.ts)}</button>)}</div>) : null}
      </section>)
  }

  return (
    <section className={`hud ${layout.mode}`} aria-label="Stage" data-mode={layout.mode}>
      <div className="hud-head">
        <div className="hud-title">
          <span className="k">{layout.mode === 'connected' ? 'LINKED' : 'STAGE'}</span>
          <h2>{stage?.title ?? 'Standing by'}</h2>
          {stage ? <span className="time">{fmt(stage.ts)}</span> : null}
        </div>
        {stage ? <div className="hud-actions"><button className="btn sm" aria-pressed={pinned} onClick={onPin}>{pinned ? 'Unpin' : 'Pin'}</button><button className="btn sm" onClick={onClear}>Clear</button></div> : null}
      </div>

      <div className="hud-scroll" ref={view}>
        <div className="hud-field" style={{ width: Math.max(280, w - 48), height: layout.height }}>
          <Sphere state={sphere} amplitude={amplitude} spot={layout.sphere} low={low} />
          <div className={`state-label ${sphere} ${layout.mode === 'connected' && !layout.stacked ? 'side' : ''}`}
            style={layout.mode === 'connected' && !layout.stacked ? { left: layout.sphere.cx + layout.sphere.size / 2 + 10, top: layout.sphere.cy } : { left: layout.sphere.cx, top: labelY }}>{STATE_LABEL[sphere]}</div>
          {!stage ? <div className="standing" style={{ left: layout.sphere.cx, top: labelY + 40 }}>Nothing needs your attention.<br />Ask me to show you something and it appears here.</div> : null}
          {caption && !stage ? <div className="caption" style={{ left: layout.sphere.cx, top: labelY + 110 }}>{caption}</div> : null}

          {layout.arrows.length > 0 && (
            <svg className="arrows" width={Math.max(280, w - 48)} height={layout.height} aria-hidden="true">
              <defs>
                <marker id="ah" orient="auto" markerWidth="7" markerHeight="7" refX="6" refY="3.5"><path d="M0 0 L7 3.5 L0 7 Z" fill="#7EC8FF" /></marker>
                <marker id="ahd" orient="auto" markerWidth="7" markerHeight="7" refX="6" refY="3.5"><path d="M0 0 L7 3.5 L0 7 Z" fill="#F2B35E" /></marker>
              </defs>
              {layout.arrows.map((a, i) => (
                <path key={i} className={a.dashed ? 'flow' : ''} d={a.d} fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"
                  stroke={a.dashed ? '#F2B35E' : '#7EC8FF'} strokeDasharray={a.dashed ? '6 6' : undefined} markerEnd={`url(#${a.dashed ? 'ahd' : 'ah'})`} />))}
            </svg>)}
          {layout.arrows.filter((a) => a.label).map((a, i) => <div key={i} className="arrow-label" style={{ left: a.lx, top: a.ly }}>{a.label}</div>)}

          {stage?.blocks.map((b, i) => {
            const box = layout.boxes[b.id]
            if (!box) return null
            const isRec = b.type === 'recommendation'
            return (
              <motion.div key={b.id} className={`block ${b.type} ${b.tone ?? ''} ${isRec ? 'rec' : ''}`}
                initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: Math.min(i * 0.07, 0.35) }}
                style={{ left: box.x, top: box.y, width: box.w, height: box.h }}>
                {isRec ? (<>
                  <Shield />
                  <div className="txt"><h3>{String(b.data.title ?? b.title ?? '')}</h3><p>{String(b.data.reason ?? '')}</p></div>
                  <div className="acts">{actions}</div></>) : <BlockBody b={b} />}
              </motion.div>)
          })}
        </div>
      </div>

      {stage && !recBlock && actions.length > 0 ? <div className="hud-bar">{actions}</div> : null}
      {earlier.length > 0 ? (
        <div className="earlier"><span className="k">EARLIER</span>
          {earlier.map((e) => <button key={e.id} onClick={() => onOpen(e.id)}>{e.title} · {fmt(e.ts)}</button>)}</div>) : null}
      {footer}
    </section>)
}
