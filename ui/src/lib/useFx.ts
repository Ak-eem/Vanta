import { useEffect, useState } from 'react'

export type Fx = 'full' | 'low'
const KEY = 'vanta.fx'
const read = (): Fx => { try { return localStorage.getItem(KEY) === 'low' ? 'low' : 'full' } catch { return 'full' } }
const write = (v: Fx) => { try { localStorage.setItem(KEY, v) } catch { /* private mode: fine */ } }

/** Full glow by default. If frames come slower than ~30fps twice in a row, quietly switch to light effects.
 *  Never switches back up by itself; the settings toggle does that. */
export function useFx(): [Fx, (v: Fx) => void, boolean] {
  const [fx, setFx] = useState<Fx>(read)
  const [auto, setAuto] = useState(false)

  useEffect(() => { document.documentElement.dataset.fx = fx }, [fx])

  useEffect(() => {
    if (fx === 'low') return
    let raf = 0, last = 0, frames = 0, sum = 0, slow = 0, start = performance.now()
    const loop = (now: number) => {
      if (!document.hidden && last) {
        const dt = now - last
        if (dt < 250) { sum += dt; frames++ }          // ignore tab-switch gaps
        if (now - start > 3000 && frames > 20) {
          slow = sum / frames > 34 ? slow + 1 : 0
          frames = 0; sum = 0; start = now
          if (slow >= 2) { setFx('low'); setAuto(true); return }
        }
      }
      last = now
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [fx])

  const set = (v: Fx) => { write(v); setAuto(false); setFx(v) }
  return [fx, set, auto]
}
