import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import type { Stage, StageAction } from '../types'
import { BlockBody } from '../stage/Blocks'

const SPAN: Record<string, string> = { text: 'w2', bars: 'w2', steps: 'w2', source: 'w1', stat: 'w1', image: 'w2', table: 'w2', code: 'w2' }
const RANK: Record<string, number> = { text: 0, stat: 1, bars: 2, steps: 0, source: 3 }

/** A research report as a mosaic of panels. While the agent works there is a small progress card and the orb sits in the corner. */
export function ReportView({ stage, onClear, onAction, history, onOpen }: {
  stage: Stage; onClear: () => void; onAction: (id: string, a: StageAction) => void
  history: Stage[]; onOpen: (id: string) => void
}) {
  const [tidy, setTidy] = useState(false)
  const blocks = useMemo(() => {
    if (!tidy) return stage.blocks
    return [...stage.blocks].sort((a, b) => (RANK[a.type] ?? 4) - (RANK[b.type] ?? 4))
  }, [stage.blocks, tidy])
  const working = !!stage.working
  return (
    <>
      <div className="hud-head">
        <div className="hud-title"><span className="k">{working ? 'RESEARCHING' : 'REPORT'}</span><h2>{stage.title.replace(/^Report: /, '')}</h2></div>
        <div className="hud-actions">
          <button className="btn sm" aria-pressed={tidy} onClick={() => setTidy((t) => !t)}>Tidy</button>
          <button className="btn sm" onClick={onClear}>Clear view</button>
          {(stage.actions ?? []).filter((a) => a.id !== 'dismiss').map((a) => <button key={a.id} className={`btn sm ${a.kind ?? ''}`} onClick={() => onAction(stage.id, a)}>{a.label}</button>)}
        </div>
      </div>
      <div className="hud-scroll">
        <div className={`mosaic ${working ? 'working' : ''}`}>
          {blocks.map((b, i) => (
            <motion.div key={b.id} layout className={`block ${b.type} ${SPAN[b.type] ?? 'w1'} ${b.tone ?? ''}`}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: Math.min(i * 0.05, 0.4) }}>
              <BlockBody b={b} />
            </motion.div>))}
        </div>
      </div>
      {history.length > 0 ? (
        <div className="earlier"><span className="k">HISTORY</span>
          {history.map((e) => <button key={e.id} onClick={() => onOpen(e.id)}>{e.title}</button>)}</div>) : null}
    </>)
}
