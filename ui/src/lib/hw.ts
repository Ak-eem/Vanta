/** Small formatting helpers for the System board. */
export const rate = (kbit: number) => (kbit >= 1000 ? `${(kbit / 1000).toFixed(1)} Mb/s` : `${Math.round(kbit)} kb/s`)
export const disk = (kb: number) => (kb >= 1024 ? `${(kb / 1024).toFixed(1)} MB/s` : `${Math.round(kb)} KB/s`)
export const mb = (m: number) => (m >= 1024 ? `${(m / 1024).toFixed(1)} GB` : `${m} MB`)
export const up = (s: number | null) => {
  if (s == null) return ''
  const d = Math.floor(s / 86400), h = Math.floor((s % 86400) / 3600), m = Math.floor((s % 3600) / 60)
  return d ? `${d}d ${h}h` : h ? `${h}h ${m}m` : `${m}m`
}
/** Colour tone for a percentage: calm, busy, or strained. */
export const tone = (pct: number) => (pct >= 90 ? 'hot' : pct >= 70 ? 'warm' : 'cool')
export const heat = (c: number) => (c >= 90 ? 'hot' : c >= 80 ? 'warm' : 'cool')
/** Polyline points for a sparkline in a w×h box. `max` fixes the scale (e.g. 100 for percentages). */
export function spark(values: number[], w: number, h: number, max?: number): string {
  if (values.length < 2) return ''
  const top = Math.max(max ?? 0, ...values, 1)
  return values.map((v, i) => `${((i / (values.length - 1)) * w).toFixed(1)},${(h - (Math.max(0, v) / top) * (h - 2) - 1).toFixed(1)}`).join(' ')
}
export function headline(findings: { level: string }[]): { text: string; tone: 'ok' | 'note' | 'warn' } {
  if (findings.some((f) => f.level === 'warn')) return { text: 'Needs attention', tone: 'warn' }
  if (findings.length) return { text: 'Worth a look', tone: 'note' }
  return { text: 'All calm', tone: 'ok' }
}

export type CardId = 'weather' | 'files' | 'cpu' | 'mem' | 'disks' | 'heat' | 'programs' | 'network' | 'security' | 'installed'
export const CARD_ORDER: CardId[] = ['weather', 'files', 'cpu', 'mem', 'disks', 'heat', 'programs', 'network', 'security', 'installed']
export const CARD_WORDS: Record<CardId, RegExp> = {
  weather: /^(weather|forecast)$/, files: /^(files?|downloads?)$/,
  cpu: /^(processor|cpu)$/, mem: /^(memory|ram)$/, disks: /^(drives?|disks?|storage)$/, heat: /^(heat|temperatures?|fans?|temp)$/,
  programs: /^(programs?|apps?|processes)$/, network: /^(network|internet|wifi|connections?)$/, security: /^(security|firewall|antivirus)$/, installed: /^(installed|installed programs)$/,
}
interface RankIn {
  cpu: { pct: number; temp: number | null }; mem: { pct: number }; disks: { pct: number }[]; programs: { cpu: number; protected: boolean }[]
  thermal: { temps: unknown[] }; network: { security: { state: string }[]; listening: { risk: string | null; scope: string }[]; connected: { outside: number }[] }
}
/** VANTA decides what matters: cards that need attention rise to the top and glow. `focus` is a card you asked for ("show my network"). */
export function rankCards(hw: RankIn, focus?: CardId | null): { order: CardId[]; alert: Set<CardId> } {
  const score: Record<CardId, number> = { weather: 0, files: 0, cpu: 0, mem: 0, disks: 0, heat: 0, programs: 0, network: 0, security: 0, installed: 0 }
  score.cpu = hw.cpu.pct >= 90 ? 80 : hw.cpu.pct >= 70 ? 40 : 0
  score.mem = hw.mem.pct >= 90 ? 90 : hw.mem.pct >= 80 ? 50 : 0
  score.disks = Math.max(0, ...hw.disks.map((d) => (d.pct >= 95 ? 85 : d.pct >= 88 ? 55 : 0)))
  const t = hw.cpu.temp
  score.heat = t != null ? (t >= 90 ? 95 : t >= 80 ? 60 : 0) : 0
  const top = hw.programs.find((p) => !p.protected)
  score.programs = top && top.cpu >= 50 ? 65 : 0
  score.security = hw.network.security.some((s) => s.state === 'off') ? 100 : 0
  score.network = hw.network.listening.some((l) => l.risk && l.scope === 'everyone') ? 90 : hw.network.connected.some((c) => c.outside >= 25) ? 30 : 0
  const order = [...CARD_ORDER].sort((a, b) => score[b] - score[a] || CARD_ORDER.indexOf(a) - CARD_ORDER.indexOf(b))
  const alert = new Set(CARD_ORDER.filter((c) => score[c] >= 55))
  if (focus) { order.splice(order.indexOf(focus), 1); order.unshift(focus) }
  return { order, alert }
}

export const size = (b: number) => (b >= 1048576 ? `${(b / 1048576).toFixed(1)} MB` : b >= 1024 ? `${Math.round(b / 1024)} KB` : `${b} B`)
