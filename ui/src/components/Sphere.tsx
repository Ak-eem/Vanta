import { useEffect, useRef } from 'react'
import { SphereEngine } from './SphereEngine'
import type { SphereState } from '../types'

/** React only mounts the canvas and forwards state; every frame runs inside SphereEngine, outside React. */
export function Sphere({ state, amplitude = 0, size = 150 }: { state: SphereState; amplitude?: number; size?: number }) {
  const canvas = useRef<HTMLCanvasElement>(null)
  const engine = useRef<SphereEngine | null>(null)

  useEffect(() => {
    const el = canvas.current
    if (!el) return
    let eng: SphereEngine
    try {
      const low = (navigator.hardwareConcurrency ?? 4) <= 4
      eng = new SphereEngine(el, low)
    } catch {
      return // no WebGL: the CSS fallback orb below stays visible
    }
    engine.current = eng
    eng.resize(size, size)
    eng.start()
    const onVis = () => (document.hidden ? eng.stop() : eng.start())
    document.addEventListener('visibilitychange', onVis)
    return () => { document.removeEventListener('visibilitychange', onVis); eng.dispose(); engine.current = null }
  }, [size])

  useEffect(() => { engine.current?.setState(state) }, [state])
  useEffect(() => { engine.current?.setAmplitude(amplitude) }, [amplitude])

  return (
    <div className={`sphere sphere-${state}`} style={{ width: size, height: size }} aria-hidden="true">
      <div className="sphere-fallback" />
      <canvas ref={canvas} />
    </div>
  )
}

export const STATE_LABEL: Record<SphereState, string> = {
  idle: 'Here', thinking: 'Thinking', speaking: 'Speaking', learning: 'Learning',
  sleeping: 'Resting', error: 'Something went wrong', alert: 'Concerned · watching',
}
