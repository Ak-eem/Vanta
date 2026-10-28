import type { SetupState } from '../types'

const str = (x: unknown, max: number) => (typeof x === 'string' ? x.slice(0, max) : '')

/** The server sends the available setups. Never trust the shape: keep only what we can show safely. */
export function sanitizeSetup(d: unknown): SetupState | null {
  if (!d || typeof d !== 'object') return null
  const o = d as Record<string, unknown>
  const profiles = (Array.isArray(o.profiles) ? o.profiles : []).slice(0, 8)
    .map((p) => (p && typeof p === 'object' ? { id: str((p as Record<string, unknown>).id, 24), label: str((p as Record<string, unknown>).label, 32), desc: str((p as Record<string, unknown>).desc, 160) } : null))
    .filter((p): p is { id: string; label: string; desc: string } => !!p && !!p.id && !!p.label)
  if (!profiles.length) return null
  const current = profiles.some((p) => p.id === o.current) ? String(o.current) : profiles[0].id
  return { current, builder_fast: o.builder_fast === 'local' ? 'local' : 'cloud', local_ready: o.local_ready === true, profiles }
}
