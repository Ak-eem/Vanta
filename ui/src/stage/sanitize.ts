import type { Block, BlockType, Link, LayoutMode, Stage, StageAction } from '../types'

const TYPES: BlockType[] = ['text', 'node', 'news', 'chart', 'code', 'table', 'image', 'steps', 'svg', 'html', 'weather', 'recommendation', 'stat', 'bars', 'source']
const MODES: LayoutMode[] = ['single', 'compact', 'investigation', 'report']
const TONES = ['normal', 'warn', 'danger', 'good']
const MAX_BLOCKS = 16
const MAX_MARKUP = 20_000

const str = (v: unknown, max = 400): string => (typeof v === 'string' ? v.slice(0, max) : v == null ? '' : String(v).slice(0, max))
const isObj = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v)

/** Anything arriving on the stage (from the server, or written by a model) is untrusted. Clean it here. */
export function sanitizeStage(raw: unknown): Stage | null {
  if (!isObj(raw) || !Array.isArray(raw.blocks)) return null
  const seen = new Set<string>()
  const blocks: Block[] = []
  for (const rb of raw.blocks.slice(0, MAX_BLOCKS)) {
    if (!isObj(rb) || !TYPES.includes(rb.type as BlockType)) continue
    let id = str(rb.id, 40) || `b${blocks.length + 1}`
    if (seen.has(id)) id = `${id}_${blocks.length}`
    seen.add(id)
    const data = isObj(rb.data) ? { ...rb.data } : {}
    if ((rb.type === 'svg' || rb.type === 'html') && typeof data.markup === 'string') data.markup = data.markup.slice(0, MAX_MARKUP)
    if (rb.type === 'image' && typeof data.src === 'string' && !/^(data:image\/|https:\/\/|\/)/.test(data.src)) data.src = ''
    if (rb.type === 'source') {
      if (typeof data.image === 'string' && !/^https:\/\//.test(data.image)) data.image = ''
      if (typeof data.url !== 'string' || !/^https:\/\//.test(data.url)) data.url = ''
    }
    if (rb.type === 'bars') data.points = (Array.isArray(data.points) ? data.points : []).slice(0, 8).filter((p: unknown) => isObj(p) && Number.isFinite(Number(p.value)))
    blocks.push({
      id, type: rb.type as BlockType, title: rb.title ? str(rb.title, 120) : undefined, size: (['s', 'm', 'l', 'full'] as const).find((x) => x === rb.size),
      tone: TONES.includes(rb.tone as string) ? (rb.tone as Block['tone']) : 'normal', data,
    })
  }
  if (!blocks.length) return null
  const links: Link[] = (Array.isArray(raw.links) ? raw.links : [])
    .filter(isObj)
    .filter((l) => seen.has(str(l.from, 40)) && seen.has(str(l.to, 40)))
    .slice(0, 24)
    .map((l) => ({ from: str(l.from, 40), to: str(l.to, 40), label: l.label ? str(l.label, 40) : undefined, style: l.style === 'dashed' ? 'dashed' : 'solid' }))
  const actions: StageAction[] = (Array.isArray(raw.actions) ? raw.actions : [])
    .filter(isObj)
    .slice(0, 4)
    .map((a) => ({ id: str(a.id, 40), label: str(a.label, 40), kind: (['primary', 'secondary', 'ghost'].includes(a.kind as string) ? a.kind : 'secondary') as StageAction['kind'] }))
    .filter((a) => a.id && a.label)
  return {
    id: str(raw.id, 60) || `stage-${Date.now()}`,
    title: str(raw.title, 80) || 'Stage',
    ts: typeof raw.ts === 'number' ? raw.ts : Date.now() / 1000,
    layout: MODES.includes(raw.layout as LayoutMode) ? (raw.layout as LayoutMode) : undefined, working: raw.working === true,
    blocks, links, actions, summary: raw.summary ? str(raw.summary, 300) : undefined,
  }
}
