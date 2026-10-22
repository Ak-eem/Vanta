import { describe, it, expect } from 'vitest'
import { chooseMode, computeLayout, depths } from './layout'
import { sanitizeStage } from './sanitize'
import type { Stage } from '../types'

const mk = (n: number, extra: Partial<Stage> = {}): Stage => ({
  id: 's', title: 't', ts: 0,
  blocks: Array.from({ length: n }, (_, i) => ({ id: `b${i}`, type: 'node' as const, data: {} })), ...extra,
})

describe('layout choice: simple things stay simple', () => {
  it('one block is single, not three cards', () => {
    expect(chooseMode(mk(1))).toBe('single')
    const l = computeLayout(mk(1), 928)
    expect(Object.keys(l.boxes)).toHaveLength(1)
    expect(l.boxes.b0.x).toBeGreaterThan(0) // centred
  })
  it('2-4 unlinked blocks are compact', () => expect(chooseMode(mk(3))).toBe('compact'))
  it('linked blocks become an investigation with arrows', () => {
    const s = mk(3, { links: [{ from: 'b0', to: 'b1' }, { from: 'b1', to: 'b2' }] })
    expect(chooseMode(s)).toBe('investigation')
    const l = computeLayout(s, 928)
    expect(l.arrows).toHaveLength(2)
    expect(l.boxes.b0.x).toBeLessThan(l.boxes.b1.x)
    expect(l.boxes.b1.x).toBeLessThan(l.boxes.b2.x)
  })
  it('explicit layout wins', () => expect(chooseMode(mk(1, { layout: 'investigation' }))).toBe('investigation'))
  it('recommendation sits below the graph, full width', () => {
    const s = mk(2, { links: [{ from: 'b0', to: 'b1' }] })
    s.blocks.push({ id: 'r', type: 'recommendation', data: {} })
    const l = computeLayout(s, 928)
    expect(l.boxes.r.w).toBe(928)
    expect(l.boxes.r.y).toBeGreaterThan(l.boxes.b0.y)
  })
})

describe('phone width', () => {
  it('stacks everything in one column with no arrows', () => {
    const s = mk(3, { links: [{ from: 'b0', to: 'b1' }] })
    const l = computeLayout(s, 360)
    expect(l.stacked && l.arrows.length === 0).toBe(true)
    const xs = new Set(Object.values(l.boxes).map((b) => b.x)); expect(xs.size).toBe(1)
    expect(Object.values(l.boxes).every((b) => b.w <= 360)).toBe(true)
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
      blocks: [
        { id: 'a', type: 'node', data: {} },
        { id: 'b', type: 'script', data: {} },
        { id: 'c', type: 'image', data: { src: 'javascript:alert(1)' } },
        { id: 'a', type: 'text', data: {} },
      ],
      links: [{ from: 'a', to: 'nope' }, { from: 'a', to: 'c' }],
    })!
    expect(s.title.length).toBeLessThanOrEqual(80)
    expect(s.blocks.map((b) => b.type)).toEqual(['node', 'image', 'text'])
    expect(new Set(s.blocks.map((b) => b.id)).size).toBe(3)
    expect(s.blocks[1].data.src).toBe('')
    expect(s.links).toHaveLength(1)
  })
  it('rejects junk and empty stages', () => {
    expect(sanitizeStage(null)).toBeNull()
    expect(sanitizeStage({ blocks: [] })).toBeNull()
    expect(sanitizeStage({ blocks: [{ type: 'nope' }] })).toBeNull()
  })
  it('caps the number of blocks', () => {
    const blocks = Array.from({ length: 40 }, (_, i) => ({ id: `x${i}`, type: 'node', data: {} }))
    expect(sanitizeStage({ blocks })!.blocks).toHaveLength(12)
  })
})
