import { describe, it, expect } from 'vitest'
import { chooseMode, computeLayout, depths, type Box, type SphereSpot } from './layout'
import { sanitizeStage } from './sanitize'
import type { Stage } from '../types'

const mk = (n: number, extra: Partial<Stage> = {}): Stage => ({
  id: 's', title: 't', ts: 0,
  blocks: Array.from({ length: n }, (_, i) => ({ id: `b${i}`, type: 'text' as const, data: {} })), ...extra,
})
const hitsSphere = (b: Box, s: SphereSpot) => {
  const nx = Math.max(b.x, Math.min(s.cx, b.x + b.w)), ny = Math.max(b.y, Math.min(s.cy, b.y + b.h))
  return Math.hypot(nx - s.cx, ny - s.cy) < s.size / 2
}
const overlap = (a: Box, b: Box) => a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h

describe('which style: HUD orbit or connected lines', () => {
  it('unrelated things are orbit, even many of them', () => { expect(chooseMode(mk(1))).toBe('orbit'); expect(chooseMode(mk(6))).toBe('orbit') })
  it('related things are connected', () => expect(chooseMode(mk(3, { links: [{ from: 'b0', to: 'b1' }] }))).toBe('connected'))
  it('one block with a link is still orbit (nothing to connect)', () => expect(chooseMode(mk(1, { links: [{ from: 'b0', to: 'b0' }] }))).toBe('orbit'))
  it('explicit choice wins, old names accepted', () => {
    expect(chooseMode(mk(1, { layout: 'connected' }))).toBe('connected')
    expect(chooseMode(mk(3, { layout: 'investigation', links: [] }))).toBe('connected')
    expect(chooseMode(mk(3, { layout: 'compact' }))).toBe('orbit')
  })
})

describe('orbit layout', () => {
  const W = 1040, H = 800
  it('sphere is centred and large when nothing is on stage', () => {
    const l = computeLayout(null, W, H)
    expect(l.sphere.cx).toBe(W / 2); expect(l.sphere.size).toBeGreaterThanOrEqual(200); expect(Object.keys(l.boxes)).toHaveLength(0)
  })
  it('one block floats beside the sphere, not on top of it', () => {
    const l = computeLayout(mk(1), W, H)
    expect(l.boxes.b0.x).toBeGreaterThan(l.sphere.cx); expect(hitsSphere(l.boxes.b0, l.sphere)).toBe(false)
  })
  it('two blocks take opposite sides', () => {
    const l = computeLayout(mk(2), W, H)
    expect(l.boxes.b0.x).toBeGreaterThan(l.sphere.cx); expect(l.boxes.b1.x + l.boxes.b1.w).toBeLessThan(l.sphere.cx)
  })
  it('six blocks never overlap each other or the sphere, and draw no lines', () => {
    const l = computeLayout(mk(6), W, H)
    const ids = Object.keys(l.boxes)
    for (const id of ids) expect(hitsSphere(l.boxes[id], l.sphere)).toBe(false)
    for (let i = 0; i < ids.length; i++) for (let j = i + 1; j < ids.length; j++) expect(overlap(l.boxes[ids[i]], l.boxes[ids[j]])).toBe(false)
    expect(l.arrows).toHaveLength(0)
  })
  it('recommendation sits below, full width', () => {
    const s = mk(2); s.blocks.push({ id: 'r', type: 'recommendation', data: {} })
    const l = computeLayout(s, W, H)
    expect(l.boxes.r.w).toBe(W - 48); expect(l.boxes.r.y).toBeGreaterThanOrEqual(l.sphere.cy + l.sphere.size / 2)
  })
  it('narrow desktop falls back to sphere-on-top', () => {
    const l = computeLayout(mk(3), 840, 700)
    for (const id of Object.keys(l.boxes)) expect(hitsSphere(l.boxes[id], l.sphere)).toBe(false)
  })
})

describe('connected layout', () => {
  const s = mk(3, { links: [{ from: 'b0', to: 'b1' }, { from: 'b1', to: 'b2' }] })
  it('flows left to right with one arrow per link, sphere steps aside', () => {
    const l = computeLayout(s, 1040, 800)
    expect(l.mode).toBe('connected'); expect(l.arrows).toHaveLength(2)
    expect(l.boxes.b0.x).toBeLessThan(l.boxes.b1.x); expect(l.boxes.b1.x).toBeLessThan(l.boxes.b2.x)
    expect(l.sphere.size).toBeLessThan(150)
    for (const id of Object.keys(l.boxes)) expect(hitsSphere(l.boxes[id], l.sphere)).toBe(false)
  })
})

describe('phone width', () => {
  it('stacks in one column under a small sphere, no arrows', () => {
    const l = computeLayout(mk(3, { links: [{ from: 'b0', to: 'b1' }] }), 360, 700)
    expect(l.stacked && l.arrows.length === 0).toBe(true)
    expect(new Set(Object.values(l.boxes).map((b) => b.x)).size).toBe(1)
    expect(Object.values(l.boxes).every((b) => b.w <= 360 && b.y > l.sphere.cy)).toBe(true)
  })
})

describe('depths', () => {
  it('survives cycles', () => {
    const d = depths(mk(2).blocks, [{ from: 'b0', to: 'b1' }, { from: 'b1', to: 'b0' }])
    expect(Number.isFinite(d.b0) && Number.isFinite(d.b1)).toBe(true)
  })
})

describe('sanitizeStage treats input as untrusted', () => {
  it('drops unknown block types, bad links, long strings, odd image sources', () => {
    const s = sanitizeStage({
      title: 'x'.repeat(500),
      blocks: [{ id: 'a', type: 'node', data: {} }, { id: 'b', type: 'script', data: {} }, { id: 'c', type: 'image', data: { src: 'javascript:alert(1)' } }, { id: 'a', type: 'text', data: {} }],
      links: [{ from: 'a', to: 'nope' }, { from: 'a', to: 'c' }],
    })!
    expect(s.title.length).toBeLessThanOrEqual(80)
    expect(s.blocks.map((b) => b.type)).toEqual(['node', 'image', 'text'])
    expect(new Set(s.blocks.map((b) => b.id)).size).toBe(3)
    expect(s.blocks[1].data.src).toBe(''); expect(s.links).toHaveLength(1)
  })
  it('rejects junk and empty stages', () => {
    expect(sanitizeStage(null)).toBeNull(); expect(sanitizeStage({ blocks: [] })).toBeNull(); expect(sanitizeStage({ blocks: [{ type: 'nope' }] })).toBeNull()
  })
  it('caps the number of blocks', () => {
    expect(sanitizeStage({ blocks: Array.from({ length: 40 }, (_, i) => ({ id: `x${i}`, type: 'node', data: {} })) })!.blocks).toHaveLength(12)
  })
})
