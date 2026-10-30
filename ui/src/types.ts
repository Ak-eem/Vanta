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
export interface GuardianState { quarantined: { id: string; original: string; sha256: string; ts: number }[]; audit: { n: number; ts: number; event: string; detail: Record<string, unknown> }[]; chain_ok: boolean; mode?: 'ask' | 'auto'; emergency?: boolean; agent_mode?: 'plan' | 'ask' | 'accept_edits' | 'auto'; veto?: number; max_per_hour?: number }

export interface SetupProfile { id: string; label: string; desc: string }
export interface SetupState { current: string; builder_fast: 'cloud' | 'local'; local_ready: boolean; profiles: SetupProfile[] }

export interface ScanResult { sha256: string; name: string; path: string; ts: number; label: 'safe' | 'unknown' | 'suspicious' | 'dangerous'; score: number; reasons: string[]; vouched: string[]; family?: { family: string; does: string; you: string } | null; about?: string; publisher?: string; kind?: string }

export interface HwProgram { name: string; count: number; cpu: number; mem: number; pid: number; created: number; protected: boolean }
export interface HwFinding { level: 'warn' | 'note'; text: string }
export interface HwState {
  cpu: { pct: number; cores: number[]; freq: { mhz: number; max: number | null } | null; count: number; temp: number | null }
  mem: { pct: number; used: number; total: number; swap: { pct: number; used: number; total: number } }
  disk_io: { read: number; write: number }
  net: { down: number; up: number }
  thermal: { temps: { label: string; c: number; high?: number | null }[]; fans: { label: string; rpm: number }[]; source: string }
  battery: { pct: number; plugged: boolean; mins: number | null } | null
  uptime: number | null
  history: Record<'cpu' | 'mem' | 'down' | 'up' | 'disk', number[]>
  disks: { mount: string; fs: string; pct: number; used: number; total: number; free: number }[]
  programs: HwProgram[]
  findings: HwFinding[]
  installed: { id: string; name: string; version: string; publisher: string; mb: number; protected: boolean }[]
  can_uninstall: boolean
  network: {
    interfaces: { name: string; ip: string; speed: number | null }[]
    listening: { port: number; program: string; scope: string; risk: string | null }[]
    connected: { program: string; count: number; outside: number; sample: string[] }[]
    security: { name: string; state: 'on' | 'off' | 'unknown'; note: string }[]
    limited?: boolean
  }
}

export interface WeatherState {
  city: string; country: string; temp: number; feels: number; humidity: number; wind: number; desc: string; icon: string; night: boolean; hint: string
  hours: { label: string; temp: number; rain: number; icon: string }[]
  days: { label: string; hi: number; lo: number; rain: number; icon: string; desc: string }[]
  error?: string
}
export interface FilesState { folder: string; files: { name: string; size: number; ts: number }[] }
