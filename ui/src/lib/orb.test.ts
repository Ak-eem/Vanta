import { describe, expect, it } from 'vitest'
import { orbSpot } from './orb'

describe('orbSpot', () => {
  it('centres the orb for voice and docks it bottom-right when presenting', () => {
    const c = orbSpot('center', 1000, 700, false), k = orbSpot('corner', 1000, 700, false)
    expect(c.cx).toBe(500); expect(c.size).toBeGreaterThan(300)
    expect(k.cx).toBeGreaterThan(850); expect(k.cy).toBeGreaterThan(550); expect(k.size).toBeLessThan(c.size / 2)
  })
  it('stays inside small screens', () => {
    const c = orbSpot('center', 360, 640, true)
    expect(c.size).toBeLessThanOrEqual(360 * 0.8); expect(c.cx - c.size / 2).toBeGreaterThanOrEqual(0)
  })
})
