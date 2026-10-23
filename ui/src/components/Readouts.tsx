import type { Telemetry } from '../types'

const rate = (kbit: number) => (kbit >= 1000 ? `${(kbit / 1000).toFixed(1)} Mb/s` : `${Math.round(kbit)} kb/s`)
const bar = (pct: number) => <i className="bar"><b style={{ width: `${Math.min(100, Math.max(2, pct))}%` }} /></i>

/** Small live readouts along the bottom of the HUD. Hidden entirely until the first sample arrives. */
export function Readouts({ tel }: { tel: Telemetry | null }) {
  if (!tel) return null
  return (
    <div className="readouts" aria-label="System readouts">
      <span className="ro"><em>CPU</em>{Math.round(tel.cpu)}%{bar(tel.cpu)}</span>
      <span className="ro"><em>MEM</em>{Math.round(tel.mem)}%{bar(tel.mem)}</span>
      <span className="ro"><em>NET</em>↓ {rate(tel.down)} ↑ {rate(tel.up)}</span>
      <span className="ro"><em>PROGRAMS</em>{tel.procs}</span>
      {tel.battery ? <span className="ro"><em>POWER</em>{tel.battery.pct}%{tel.battery.plugged ? ' ⚡' : ''}</span> : null}
      {tel.app ? <span className="ro app"><em>FOCUS</em>{tel.app}</span> : null}
    </div>)
}
