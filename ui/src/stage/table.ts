import type { Block, BlockType } from '../types'

export type Size = 's' | 'm' | 'l' | 'full'
/** How many of the 12 table columns each size takes. */
export const COLS: Record<Size, number> = { s: 4, m: 6, l: 8, full: 12 }

const DEFAULT: Record<BlockType, Size> = {
  text: 'm', node: 's', news: 'm', chart: 'm', code: 'l', table: 'l', image: 'm', steps: 'm', svg: 'l', html: 'l',
  weather: 's', recommendation: 'full', stat: 's', bars: 'm', source: 's',
}

/** VANTA says how much room a thing needs (block.size); if it does not say, the kind of content decides. */
export const sizeOf = (b: Block): Size => b.size ?? DEFAULT[b.type] ?? 'm'

/** On a narrow screen everything is full width, except small things which pair up. */
export function spanFor(b: Block, narrow: boolean): number {
  const c = COLS[sizeOf(b)]
  return narrow ? (c <= 4 ? 6 : 12) : c
}

/** Rows of a 12-column table, for tests: how the engine packs spans in order, backfilling gaps like CSS `dense`. */
export function pack(spans: number[]): number[][] {
  const rows: { used: number; items: number[] }[] = []
  spans.forEach((sp, i) => {
    const row = rows.find((r) => r.used + sp <= 12)
    if (row) { row.used += sp; row.items.push(i) } else rows.push({ used: sp, items: [i] })
  })
  return rows.map((r) => r.items)
}
