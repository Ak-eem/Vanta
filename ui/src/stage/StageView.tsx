import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import type { Stage, StageAction } from '../types'
import { computeLayout } from './layout'
import { BlockBody } from './Blocks'

function useWidth(ref: React.RefObject<HTMLElement>) {
  const [w, setW] = useState(900)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(() => setW(Math.floor(el.clientWidth)))
    ro.observe(el); setW(Math.floor(el.clientWidth))
    return () => ro.disconnect()
  }, [ref])
  return w
}

const fmt = (ts: number) => new Date(ts * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

function Shield() {
  return (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F2B35E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /><path d="M12 9v4M12 16v.5" /></svg>)
}

export function StageView({ stage, history, pinned, onOpen, onPin, onClear, onAction }: {
  stage: Stage | null; history: Stage[]; pinned: boolean
  onOpen: (id: string) => void; onPin: () => void; onClear: () => void; onAction: (stageId: string, a: StageAction) => void
}) {
  const wrap = useRef<HTMLDivElement>(null)
  const width = Math.max(280, useWidth(wrap) - 0)
  const layout = useMemo(() => (stage ? computeLayout(stage, width) : null), [stage, width])
  const earlier = history.filter((h) => h.id !== stage?.id).slice(0, 4)
  const recBlock = stage?.blocks.find((b) => b.type === 'recommendation')

  const actions = (stage?.actions ?? []).map((a) => (
    <button key={a.id} className={`btn ${a.kind ?? 'secondary'}`} onClick={() => stage && onAction(stage.id, a)}>{a.label}</button>))

  return (
    <section className="stage" aria-label="Stage">
      <div className="stage-head">
        <div className="stage-title"><span className="k">STAGE</span><h2>{stage?.title ?? 'Nothing on stage'}</h2>{stage ? <span className="time">{fmt(stage.ts)}</span> : null}</div>
        {stage ? <div className="stage-actions"><button className="btn sm" aria-pressed={pinned} onClick={onPin}>{pinned ? 'Unpin' : 'Pin'}</button><button className="btn sm" onClick={onClear}>Clear</button></div> : null}
      </div>
      <div className="stage-scroll">
        <div ref={wrap} style={{ width: '100%' }}>
        {!stage || !layout ? (
          <div className="empty-stage"><b>Quiet for now.</b>When I find something worth looking at, or you ask me to show you something, it will appear here.</div>
        ) : (
          <div className="canvas" style={{ width: '100%', height: layout.height }} data-mode={layout.mode}>
            {layout.arrows.length > 0 && (
              <svg className="arrows" width={width} height={layout.height} aria-hidden="true">
                <defs>
                  <marker id="ah" orient="auto" markerWidth="6" markerHeight="6" refX="5" refY="3"><path d="M0 0 L6 3 L0 6 Z" fill="#8A9AB8" /></marker>
                  <marker id="ahd" orient="auto" markerWidth="6" markerHeight="6" refX="5" refY="3"><path d="M0 0 L6 3 L0 6 Z" fill="#7EC8FF" /></marker>
                </defs>
                {layout.arrows.map((a, i) => (
                  <path key={i} d={a.d} fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                    stroke={a.dashed ? '#7EC8FF' : '#8A9AB8'} strokeDasharray={a.dashed ? '6 6' : undefined} markerEnd={`url(#${a.dashed ? 'ahd' : 'ah'})`} />))}
              </svg>)}
            {layout.arrows.filter((a) => a.label).map((a, i) => <div key={i} className="arrow-label" style={{ left: a.lx, top: a.ly }}>{a.label}</div>)}
            {stage.blocks.map((b, i) => {
              const box = layout.boxes[b.id]
              if (!box) return null
              const isRec = b.type === 'recommendation'
              return (
                <motion.div key={b.id} className={`block ${b.type} ${b.tone ?? ''} ${isRec ? 'rec' : ''}`}
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28, delay: Math.min(i * 0.05, 0.3) }}
                  style={{ left: box.x, top: box.y, width: box.w, height: box.h }}>
                  {isRec ? (<>
                    <Shield />
                    <div className="txt"><h3>{String(b.data.title ?? b.title ?? '')}</h3><p>{String(b.data.reason ?? '')}</p></div>
                    <div className="acts">{actions}</div></>) : <BlockBody b={b} />}
                </motion.div>)
            })}
          </div>)}
        </div>
      </div>
      {stage && !recBlock && actions.length > 0 ? <div className="earlier" style={{ paddingTop: 0 }}>{actions}</div> : null}
      {earlier.length > 0 ? (
        <div className="earlier"><span className="k">EARLIER ON STAGE</span>
          {earlier.map((h) => <button key={h.id} onClick={() => onOpen(h.id)}>{h.title} · {fmt(h.ts)}</button>)}</div>) : null}
    </section>)
}
