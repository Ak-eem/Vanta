import { describe, expect, it } from 'vitest'
import { pack, sizeOf, spanFor } from './table'
import type { Block } from '../types'

const b = (type: Block['type'], size?: Block['size']): Block => ({ id: 'x', type, data: {}, size })

describe('table sizes', () => {
  it('VANTA\'s size wins, otherwise the content type decides', () => {
    expect(sizeOf(b('text', 'full'))).toBe('full'); expect(sizeOf(b('code'))).toBe('l'); expect(sizeOf(b('stat'))).toBe('s')
  })
  it('narrow screens: full width, small ones pair up', () => {
    expect(spanFor(b('code'), true)).toBe(12); expect(spanFor(b('stat'), true)).toBe(6); expect(spanFor(b('code'), false)).toBe(8)
  })
  it('packs into rows of 12 and backfills gaps', () => {
    expect(pack([8, 6, 4])).toEqual([[0, 2], [1]])
    expect(pack([4, 4, 4, 12])).toEqual([[0, 1, 2], [3]])
  })
})
