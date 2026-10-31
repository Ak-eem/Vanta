import { motion } from 'framer-motion'
import type { Stage, StageAction } from '../types'
import { BlockBody } from './Blocks'
import { sizeOf, spanFor } from './table'

const fmt = (ts: number) => new Date(ts * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

/** The table. VANTA lays things on it and says how big each one should be; this packs them so nothing overlaps. */
export function Canvas({ stage, narrow, pinned, onPin, onClear, onAction }: {
  stage: Stage; narrow: boolean; pinned: boolean; onPin: () => void; onClear: () => void; onAction: (id: string, a: StageAction) => void
}) {
  const body = stage.blocks.filter((b) => b.type !== 'recommendation')
  const recs = stage.blocks.filter((b) => b.type === 'recommendation')
  const actions = (stage.actions ?? []).filter((a) => a.id !== 'dismiss')
  return (
    <section className="canvas" aria-label="Presentation">
      <div className="canvas-head">
        <div className="canvas-title"><span className="k">{stage.working ? 'WORKING' : 'SHOWING'}</span><h2>{stage.title}</h2><span className="time">{fmt(stage.ts)}</span></div>
        <div className="canvas-actions">
          <button className="btn sm" aria-pressed={pinned} onClick={onPin}>{pinned ? 'Unpin' : 'Pin'}</button>
          <button className="btn sm" onClick={onClear}>Close</button>
        </div>
      </div>
      <div className="canvas-scroll">
        <div className="tcanvas">
          {body.map((b, i) => (
            <motion.div key={b.id} layout className={`tcell block ${b.type} ${b.tone ?? ''}`} data-size={sizeOf(b)}
              style={{ gridColumn: `span ${spanFor(b, narrow)}` }}
              initial={{ opacity: 0, y: 14, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.4, delay: Math.min(i * 0.07, 0.4) }}>
              <BlockBody b={b} />
            </motion.div>))}
          {recs.map((r) => (
            <motion.div key={r.id} layout className="tcell block rec" style={{ gridColumn: 'span 12' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="txt"><h3>{String(r.data.title ?? r.title ?? '')}</h3><p>{String(r.data.reason ?? '')}</p></div>
              <div className="acts">{actions.map((a) => <button key={a.id} className={`btn ${a.kind ?? 'secondary'}`} onClick={() => onAction(stage.id, a)}>{a.label}</button>)}</div>
            </motion.div>))}
        </div>
        {!recs.length && actions.length ? <div className="canvas-bar">{actions.map((a) => <button key={a.id} className={`btn ${a.kind ?? 'secondary'}`} onClick={() => onAction(stage.id, a)}>{a.label}</button>)}</div> : null}
      </div>
    </section>)
}
