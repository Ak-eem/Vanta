import type { Block, BlockType, LayoutMode, Stage } from '../types'

export interface Box { x: number; y: number; w: number; h: number }
export interface Arrow {
  from: string; to: string; d: string; label?: string; dashed: boolean; lx: number; ly: number
}
export interface Layout {
  mode: LayoutMode
  stacked: boolean
  boxes: Record<string, Box>
  arrows: Arrow[]
  height: number
}

export const GAP = 32
export const HGAP = 64   // room for arrow labels between columns
export const MOBILE_BREAKPOINT = 820

const HEIGHTS: Record<BlockType, number> = {
  text: 150, node: 76, news: 150, chart: 150, code: 240, table: 220, image: 320,
  steps: 200, svg: 300, html: 300, weather: 150, recommendation: 112,
}

/** Pick a layout from the content, unless the sender asked for one. Simple things stay simple. */
export function chooseMode(stage: Stage): LayoutMode {
  if (stage.layout) return stage.layout
  const visible = stage.blocks.filter((b) => b.type !== 'recommendation')
  if ((stage.links?.length ?? 0) > 0 && visible.length > 1) return 'investigation'
  if (visible.length <= 1) return 'single'
  return visible.length > 4 ? 'investigation' : 'compact'
}

function heightFor(b: Block): number {
  return HEIGHTS[b.type] ?? 150
}

/** Longest-path depth per block so linked blocks flow left to right. Cycle-safe. */
export function depths(blocks: Block[], links: { from: string; to: string }[]): Record<string, number> {
  const ids = new Set(blocks.map((b) => b.id))
  const edges = links.filter((l) => ids.has(l.from) && ids.has(l.to) && l.from !== l.to)
  const depth: Record<string, number> = Object.fromEntries(blocks.map((b) => [b.id, 0]))
  for (let pass = 0; pass < blocks.length; pass++) {
    let changed = false
    for (const e of edges) {
      if (depth[e.to] < depth[e.from] + 1 && depth[e.from] + 1 < blocks.length) {
        depth[e.to] = depth[e.from] + 1
        changed = true
      }
    }
    if (!changed) break
  }
  return depth
}

function grid(blocks: Block[], width: number, cols: number, startY: number, boxes: Record<string, Box>): number {
  const colW = Math.floor((width - GAP * (cols - 1)) / cols)
  let y = startY
  for (let i = 0; i < blocks.length; i += cols) {
    const row = blocks.slice(i, i + cols)
    const rowH = Math.max(...row.map(heightFor))
    row.forEach((b, c) => { boxes[b.id] = { x: c * (colW + GAP), y, w: colW, h: rowH } })
    y += rowH + GAP
  }
  return y
}

export function computeLayout(stage: Stage, width: number): Layout {
  const mode = chooseMode(stage)
  const stacked = width < MOBILE_BREAKPOINT
  const boxes: Record<string, Box> = {}
  const body = stage.blocks.filter((b) => b.type !== 'recommendation')
  const recs = stage.blocks.filter((b) => b.type === 'recommendation')
  const arrows: Arrow[] = []
  let y = 0

  if (stacked) {
    y = grid(body, width, 1, 0, boxes)
  } else if (mode === 'single') {
    body.forEach((b) => {
      const small = b.type === 'node' || b.type === 'weather'
      const w = Math.min(width, small ? 340 : 680)
      const h = Math.round(heightFor(b) * (small ? 1.0 : 1.35))
      boxes[b.id] = { x: Math.round((width - w) / 2), y, w, h }
      y += h + GAP
    })
  } else if (mode === 'compact') {
    y = grid(body, width, width >= 900 ? 2 : 1, 0, boxes)
  } else {
    const links = stage.links ?? []
    const d = depths(body, links)
    const linked = new Set(links.flatMap((l) => [l.from, l.to]))
    const graph = body.filter((b) => linked.has(b.id))
    const loose = body.filter((b) => !linked.has(b.id))
    const cols = graph.length ? Math.max(...graph.map((b) => d[b.id])) + 1 : 1
    const colW = Math.max(150, Math.min(300, Math.floor((width - HGAP * (cols - 1)) / cols)))
    const used = cols * colW + (cols - 1) * HGAP
    const x0 = Math.max(0, Math.round((width - used) / 2))
    const colY: number[] = Array(cols).fill(0)
    for (const b of graph) {
      const c = d[b.id]
      boxes[b.id] = { x: x0 + c * (colW + HGAP), y: colY[c], w: colW, h: heightFor(b) }
      colY[c] += heightFor(b) + GAP
    }
    y = graph.length ? Math.max(...colY) : 0
    if (loose.length) y = grid(loose, width, width >= 900 ? 2 : 1, y, boxes)
    for (const l of links) {
      const a = boxes[l.from], b = boxes[l.to]
      if (!a || !b) continue
      const forward = b.x > a.x + a.w - 1
      const x1 = forward ? a.x + a.w : a.x + a.w / 2
      const y1 = forward ? a.y + a.h / 2 : a.y + a.h
      const x2 = forward ? b.x : b.x + b.w / 2
      const y2 = forward ? b.y + b.h / 2 : b.y
      const mx = (x1 + x2) / 2
      const dPath = forward
        ? (Math.abs(y1 - y2) < 2 ? `M ${x1} ${y1} L ${x2} ${y2}` : `M ${x1} ${y1} L ${mx} ${y1} L ${mx} ${y2} L ${x2} ${y2}`)
        : `M ${x1} ${y1} L ${x2} ${y2}`
      arrows.push({
        from: l.from, to: l.to, d: dPath, label: l.label, dashed: l.style === 'dashed',
        lx: forward ? x2 - HGAP / 2 : (x1 + x2) / 2, ly: forward ? y2 - 4 : (y1 + y2) / 2,
      })
    }
  }

  for (const r of recs) {
    boxes[r.id] = { x: 0, y, w: width, h: stacked ? 150 : heightFor(r) }
    y += boxes[r.id].h + GAP
  }
  return { mode, stacked, boxes, arrows: stacked ? [] : arrows, height: Math.max(0, y - GAP) }
}
