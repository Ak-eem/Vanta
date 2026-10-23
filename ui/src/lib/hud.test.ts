import { describe, expect, it } from 'vitest'
import { hudDecision } from './hudMode'
import { initial, reducer } from './useVanta'

describe('auto layout rule', () => {
  it('stays calm until something is happening', () => {
    expect(hudDecision('auto', false, 0, 1000).hud).toBe(false)
  })
  it('goes HUD when active and holds for a few seconds after, so it never flickers', () => {
    const a = hudDecision('auto', true, 0, 1000)
    expect(a.hud).toBe(true)
    expect(hudDecision('auto', false, a.until, 3000).hud).toBe(true)
    expect(hudDecision('auto', false, a.until, 20000).hud).toBe(false)
  })
  it('calm and hud settings ignore activity', () => {
    expect(hudDecision('calm', true, 0, 1).hud).toBe(false)
    expect(hudDecision('hud', false, 0, 1).hud).toBe(true)
  })
})

describe('telemetry in state', () => {
  it('keeps clean numbers and trims text', () => {
    const s = reducer(initial, { t: 'tel', v: { cpu: 12.5, mem: 'x', down: 5, up: 1, procs: 200, battery: { pct: 80, plugged: true }, idle: false, app: 'a'.repeat(100) } })
    expect(s.tel!.cpu).toBe(12.5); expect(s.tel!.mem).toBe(0); expect(s.tel!.app!.length).toBe(40); expect(s.tel!.battery!.pct).toBe(80)
  })
  it('ignores junk', () => { expect(reducer(initial, { t: 'tel', v: 'nope' }).tel).toBeNull() })
})
