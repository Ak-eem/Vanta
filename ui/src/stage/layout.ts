import type { Block, BlockType, Stage } from '../types'

export interface Box { x: number; y: number; w: number; h: number }
export interface Arrow { from: string; to: string; d: string; label?: string; dashed: boolean; lx: number; ly: number }
export interface SphereSpot { cx: number; cy: number; size: number }
export type Mode = 'orbit' | 'connected'
export interface Layout {
  mode: Mode
  stacked: boolean
  boxes: Record<string, Box>
  arrows: Arrow[]
  height: number
  sphere: SphereSpot
}

export const GAP = 24
export const HGAP = 64          // room for arrow labels between connected columns
export const MARGIN = 24
export const MOBILE_BREAKPOINT = 820

const HEIGHTS: Record<BlockType, number> = {
  text: 150, node: 84, news: 150, chart: 160, code: 260, table: 220, image: 300,
  steps: 200, svg: 300, html: 300, weather: 140, recommendation: 116, stat: 120, bars: 180, source: 140,
}
const h = (b: Block) => HEIGHTS[b.type] ?? 150
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v))

/** Related things get lines; things that merely sit side by side do not. */
export function chooseMode(stage: Stage): Mode {
  if (stage.layout === 'connected' || stage.layout === 'investigation') return 'connected'
  if (stage.layout) return 'orbit'
  const body = stage.blocks.filter((b) => b.type !== 'recommendation')
  return (stage.links?.length ?? 0) > 0 && body.length > 1 ? 'connected' : 'orbit'
}

/** Longest-path depth per block so linked blocks flow left to right. Cycle-safe. */
export function depths(blocks: Block[], links: { from: string; to: string }[]): Record<string, number> {
  const ids = new Set(blocks.map((b) => b.id))
  const edges = links.filter((l) => ids.has(l.from) && ids.has(l.to) && l.from !== l.to)
  const depth: Record<string, number> = Object.fromEntries(blocks.map((b) => [b.id, 0]))
  for (let pass = 0; pass < blocks.length; pass++) {
    let changed = false
    for (const e of edges) {
      if (depth[e.to] < depth[e.from] + 1 && depth[e.from] + 1 < blocks.length) { depth[e.to] = depth[e.from] + 1; changed = true }
    }
    if (!changed) break
  }
  return depth
}

function column(blocks: Block[], x: number, w: number, y0: number, boxes: Record<string, Box>): number {
  let y = y0
  for (const b of blocks) {
    const bw = b.type === 'node' ? Math.min(w, 260) : w
    boxes[b.id] = { x: b.type === 'node' && bw < w ? x + (w - bw) / 2 : x, y, w: bw, h: h(b) }
    y += h(b) + GAP
  }
  return y
}

function grid(blocks: Block[], width: number, cols: number, startY: number, boxes: Record<string, Box>): number {
  const colW = Math.floor((width - GAP * (cols - 1)) / cols)
  let y = startY
  for (let i = 0; i < blocks.length; i += cols) {
    const row = blocks.slice(i, i + cols)
    const rowH = Math.max(...row.map(h))
    row.forEach((b, c) => { boxes[b.id] = { x: c * (colW + GAP), y, w: colW, h: rowH } })
    y += rowH + GAP
  }
  return y
}

export function computeLayout(stage: Stage | null, width: number, height: number): Layout {
  const stacked = width < MOBILE_BREAKPOINT
  const boxes: Record<string, Box> = {}
  const arrows: Arrow[] = []
  const mode: Mode = stage ? chooseMode(stage) : 'orbit'
  const body = stage ? stage.blocks.filter((b) => b.type !== 'recommendation') : []
  const recs = stage ? stage.blocks.filter((b) => b.type === 'recommendation') : []

  // ── phone: sphere on top, everything else in one column ──────────────────
  if (stacked) {
    const sphere = { cx: width / 2, cy: 84, size: stage ? 132 : 200 }
    let y = sphere.cy + sphere.size / 2 + 44
    y = grid([...body, ...recs], width, 1, y, boxes)
    return { mode, stacked, boxes, arrows, height: Math.max(height, y), sphere }
  }

  // ── connected: related things, linked with lines; sphere steps aside ─────
  if (mode === 'connected' && stage) {
    const sphere = { cx: MARGIN + 52, cy: MARGIN + 52, size: 104 }
    const links = stage.links ?? []
    const top = 140
    const d = depths(body, links)
    const linked = new Set(links.flatMap((l) => [l.from, l.to]))
    const graph = body.filter((b) => linked.has(b.id))
    const loose = body.filter((b) => !linked.has(b.id))
    const cols = graph.length ? Math.max(...graph.map((b) => d[b.id])) + 1 : 1
    const colW = clamp(Math.floor((width - HGAP * (cols - 1)) / cols), 150, 300)
    const used = cols * colW + (cols - 1) * HGAP
    const x0 = Math.max(0, Math.round((width - used) / 2))
    const colY: number[] = Array(cols).fill(top)
    for (const b of graph) {
      const c = d[b.id]
      boxes[b.id] = { x: x0 + c * (colW + HGAP), y: colY[c], w: colW, h: h(b) }
      colY[c] += h(b) + GAP
    }
    let y = graph.length ? Math.max(...colY) : top
    if (loose.length) y = grid(loose, width, width >= 900 ? 2 : 1, y, boxes)
    for (const l of links) {
      const a = boxes[l.from], b = boxes[l.to]
      if (!a || !b) continue
      const forward = b.x > a.x + a.w - 1
      const x1 = forward ? a.x + a.w : a.x + a.w / 2, y1 = forward ? a.y + a.h / 2 : a.y + a.h
      const x2 = forward ? b.x : b.x + b.w / 2, y2 = forward ? b.y + b.h / 2 : b.y
      const mx = (x1 + x2) / 2
      const dPath = forward
        ? (Math.abs(y1 - y2) < 2 ? `M ${x1} ${y1} L ${x2} ${y2}` : `M ${x1} ${y1} L ${mx} ${y1} L ${mx} ${y2} L ${x2} ${y2}`)
        : `M ${x1} ${y1} L ${x2} ${y2}`
      arrows.push({ from: l.from, to: l.to, d: dPath, label: l.label, dashed: l.style === 'dashed',
        lx: forward ? x2 - HGAP / 2 : (x1 + x2) / 2, ly: forward ? y2 - 4 : (y1 + y2) / 2 })
    }
    for (const r of recs) { boxes[r.id] = { x: MARGIN, y, w: width - MARGIN * 2, h: h(r) }; y += h(r) + GAP }
    return { mode, stacked, boxes, arrows, height: Math.max(height, y), sphere }
  }

  // ── orbit: unrelated things float around the sphere, no lines between them ─
  const size = clamp(Math.min(width * 0.34, height * 0.52), 200, 360)
  const cx = width / 2
  const cy = clamp(height * 0.44, size / 2 + 56, Math.max(size / 2 + 56, height))
  const side = cx - size / 2 - 56 - MARGIN
  const sphere = { cx, cy, size }
  if (!stage || body.length === 0) return { mode, stacked, boxes, arrows, height, sphere }

  let bottom: number
  if (side < 220) {
    // too narrow to orbit: sphere on top, panels in a column beneath
    const small = { cx, cy: 150, size: 200 }
    bottom = grid(body, width, 1, small.cy + small.size / 2 + 40, boxes)
    sphere.cy = small.cy; sphere.size = small.size
  } else {
    const colW = Math.min(400, side)
    const right: Block[] = [], left: Block[] = []
    body.forEach((b, i) => (i % 2 === 0 ? right : left).push(b))
    const total = (arr: Block[]) => arr.reduce((n, b) => n + h(b) + GAP, -GAP)
    const startY = (arr: Block[]) => Math.max(48, Math.round(cy - total(arr) / 2))
    const rb = column(right, cx + size / 2 + 56, colW, startY(right), boxes)
    const lb = column(left, cx - size / 2 - 56 - colW, colW, startY(left), boxes)
    bottom = Math.max(rb, lb, cy + size / 2 + 56)
  }
  let y = Math.max(bottom, cy + size / 2 + 56)
  for (const r of recs) { boxes[r.id] = { x: MARGIN, y, w: width - MARGIN * 2, h: h(r) }; y += h(r) + GAP }
  return { mode, stacked, boxes, arrows, height: Math.max(height, y), sphere }
}
