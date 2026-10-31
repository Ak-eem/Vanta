import type { SphereSpot } from '../stage/layout'

export type Place = 'center' | 'corner' | 'chat'

/** Where the orb sits inside the workspace. Centre when VANTA is only talking, the bottom-right corner while something is shown, a small badge in chat. */
export function orbSpot(place: Place, w: number, h: number, narrow: boolean): SphereSpot {
  if (place === 'corner') { const size = narrow ? 84 : 120; return { cx: w - size / 2 - 18, cy: h - size / 2 - 18, size } }
  if (place === 'chat') return { cx: 46, cy: 44, size: 56 }
  const size = Math.max(160, Math.min(w * 0.8, h * 0.58, 460))
  return { cx: w / 2, cy: h * 0.44, size }
}
