export type SphereState = 'idle' | 'thinking' | 'speaking' | 'learning' | 'sleeping' | 'error' | 'alert'
/** orbit = unrelated items float around the sphere; connected = related items linked with lines.
 *  single/compact/investigation are older names, still accepted. */
export type LayoutMode = 'orbit' | 'connected' | 'single' | 'compact' | 'investigation'
export type BlockType =
  | 'text' | 'node' | 'news' | 'chart' | 'code' | 'table' | 'image'
  | 'steps' | 'svg' | 'html' | 'weather' | 'recommendation'
export type Tone = 'normal' | 'warn' | 'danger' | 'good'

export interface Block {
  id: string
  type: BlockType
  title?: string
  tone?: Tone
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>
}
export interface Link { from: string; to: string; label?: string; style?: 'solid' | 'dashed' }
export interface StageAction { id: string; label: string; kind?: 'primary' | 'secondary' | 'ghost' }
export interface Stage {
  id: string
  title: string
  ts: number
  layout?: LayoutMode
  blocks: Block[]
  links?: Link[]
  actions?: StageAction[]
  summary?: string
}

export interface ChatMessage {
  id: string
  role: 'user' | 'vanta'
  text: string
  tag?: 'heads-up' | 'error'
  stageId?: string
  stageLabel?: string
  streaming?: boolean
}

export interface PrivacyState { paused: boolean; watching: boolean; sources: Record<string, boolean> }
export interface Nudge { id: string; severity: 'low' | 'medium' | 'high'; title: string; message: string }
export interface Approval { action: string; detail: string; ack: (reply: { approved: boolean }) => void }

export interface Telemetry {
  cpu: number; mem: number; down: number; up: number; procs: number
  battery: { pct: number; plugged: boolean } | null; idle: boolean; app?: string; title?: string
}

export interface SyncState { configured: boolean; unlocked: boolean; last: number; error: string }

export interface Project { id: string; name: string; folder: string; summary: string; stack: string; status: string; next_step: string; health?: { exists?: boolean; branch?: string; uncommitted?: number; last_commit?: string } }
export interface GuardianState { quarantined: { id: string; original: string; sha256: string; ts: number }[]; audit: { n: number; ts: number; event: string; detail: Record<string, unknown> }[]; chain_ok: boolean; mode?: 'ask' | 'auto'; emergency?: boolean; veto?: number; max_per_hour?: number }

export interface ScanResult { sha256: string; name: string; path: string; ts: number; label: 'safe' | 'unknown' | 'suspicious' | 'dangerous'; score: number; reasons: string[]; vouched: string[]; family?: { family: string; does: string; you: string } | null; about?: string; publisher?: string; kind?: string }
