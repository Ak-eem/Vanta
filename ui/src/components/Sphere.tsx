import { useEffect, useRef, useState } from 'react'
import { SphereEngine } from './SphereEngine'
import type { SphereState } from '../types'
import type { SphereSpot } from '../stage/layout'

const BOX = 440      // the sphere plus its rings are drawn in a 440px box, then scaled to fit
const CANVAS = 340

/** React mounts the canvas and forwards state; every frame runs inside SphereEngine, outside React.
 *  Moving/resizing is a CSS transform, so the sphere glides between layouts without re-rendering WebGL. */
export function Sphere({ state, amplitude = 0, spot, low, light = false }: { state: SphereState; amplitude?: number; spot: SphereSpot; low: boolean; light?: boolean }) {
  const canvas = useRef<HTMLCanvasElement>(null)
  const engine = useRef<SphereEngine | null>(null)
  const [noGl, setNoGl] = useState(false)   // the soft gradient is only a stand-in when WebGL can't start

  useEffect(() => {
    const el = canvas.current
    if (!el) return
    let eng: SphereEngine
    try { eng = new SphereEngine(el, low || (navigator.hardwareConcurrency ?? 4) <= 4) } catch { setNoGl(true); return }
    engine.current = eng
    eng.resize(CANVAS, CANVAS)
    eng.setState(state); eng.setLight(light)
    eng.start()
    const onVis = () => (document.hidden ? eng.stop() : eng.start())
    document.addEventListener('visibilitychange', onVis)
    return () => { document.removeEventListener('visibilitychange', onVis); eng.dispose(); engine.current = null }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [low])

  useEffect(() => { engine.current?.setState(state) }, [state])
  useEffect(() => { engine.current?.setLight(light) }, [light])
  useEffect(() => { engine.current?.setAmplitude(amplitude) }, [amplitude])

  const scale = spot.size / BOX
  return (
    <div className={`sphere sphere-${state}`} aria-hidden="true"
      style={{ transform: `translate(${spot.cx - spot.size / 2}px, ${spot.cy - spot.size / 2}px) scale(${scale})` }}>
      <svg className="rings" viewBox="0 0 440 440" width={BOX} height={BOX}>
        <circle className="r-glow" cx="220" cy="220" r="214" />
        <circle className="r-ticks" cx="220" cy="220" r="206" />
        <circle className="r-arcs" cx="220" cy="220" r="192" />
        <circle className="r-thin" cx="220" cy="220" r="176" />
        <circle className="r-arcs2" cx="220" cy="220" r="184" />
        {[0, 90, 180, 270].map((a) => <line key={a} className="r-cross" x1="220" y1="2" x2="220" y2="16" transform={`rotate(${a} 220 220)`} />)}
      </svg>
      {noGl ? <div className="sphere-fallback" /> : null}
      <canvas ref={canvas} />
    </div>
  )
}

export const STATE_LABEL: Record<SphereState, string> = {
  idle: 'Here', thinking: 'Thinking', speaking: 'Speaking', listening: 'Listening', learning: 'Learning',
  sleeping: 'Resting', error: 'Something went wrong', alert: 'Concerned · watching',
}
