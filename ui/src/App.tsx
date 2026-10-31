import { useEffect, useMemo, useRef, useState } from 'react'
import { STATE_LABEL, Sphere } from './components/Sphere'
import { ApprovalModal, NudgeToast, SettingsDrawer } from './components/Overlays'
import { SetupSwitcher } from './components/Panels'
import { Sidebar, useSidebar, type Mode, type Screen } from './components/Sidebar'
import { VoiceMode } from './components/VoiceMode'
import { ChatMode } from './components/ChatMode'
import { SystemBoard } from './components/SystemBoard'
import { ReportView } from './components/ReportView'
import { Canvas } from './stage/Canvas'
import { StageView } from './stage/StageView'
import { chooseMode } from './stage/layout'
import { useFx } from './lib/useFx'
import { useTheme } from './lib/theme'
import { useSpeaker, speakable } from './lib/speaker'
import { useRecorder } from './lib/recorder'
import { orbSpot } from './lib/orb'
import { sphereState, useVanta } from './lib/useVanta'
import type { SphereState, StageAction } from './types'
import './shell.css'

const NAMES: Record<string, string> = { window: 'windows', browser: 'browser', process: 'programs', screen: 'screen' }
const MKEY = 'vanta.mode'
const readMode = (): Mode => { try { return localStorage.getItem(MKEY) === 'chat' ? 'chat' : 'voice' } catch { return 'voice' } }

function useSize() {
  const ref = useRef<HTMLElement>(null)
  const [s, setS] = useState({ w: 900, h: 600 })
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const read = () => setS({ w: Math.floor(el.clientWidth), h: Math.floor(el.clientHeight) })
    const ro = new ResizeObserver(read); ro.observe(el); read()
    return () => ro.disconnect()
  }, [])
  return { ref, ...s }
}

export default function App() {
  const { state, api } = useVanta()
  const { pref: themePref, theme, setPref: setThemePref } = useTheme()
  const [fx, setFx, fxAuto] = useFx()
  const sb = useSidebar()
  const [mode, setModeState] = useState<Mode>(readMode)
  const setMode = (m: Mode) => { try { localStorage.setItem(MKEY, m) } catch { /* fine */ } setModeState(m) }
  const [screen, setScreen] = useState<Screen>('home')
  const [settings, setSettings] = useState(false)
  const { ref: ws, w, h } = useSize()
  const narrow = w < 820

  const stage = useMemo(() => state.stages.find((s) => s.id === state.activeStageId) ?? null, [state.stages, state.activeStageId])
  const speaker = useSpeaker(state.messages, mode === 'voice')
  const rec = useRecorder((t) => api.send(t), (m) => api.dispatch({ t: 'error', message: m }))

  const base = sphereState(state)
  const orbState: SphereState = rec.rec ? 'listening' : speaker.speaking && base === 'idle' ? 'speaking' : rec.busy ? 'thinking' : base
  const amplitude = rec.rec ? rec.level : speaker.speaking || orbState === 'speaking' ? 0.5 : 0
  const presenting = screen === 'home' && !!stage
  const place = screen === 'overview' || (presenting && mode === 'voice') ? 'corner' : mode === 'chat' ? 'chat' : 'center'
  const split = mode === 'chat' && !!stage && !narrow
  const spot = orbSpot(place, w, h, narrow, split ? Math.min(440, w * 0.42) : 0)

  const lastUser = [...state.messages].reverse().find((m) => m.role === 'user')?.text ?? ''
  const lastVanta = [...state.messages].reverse().find((m) => m.role === 'vanta')
  const lineAll = lastVanta ? speakable(lastVanta.text) : 'Tap the mic and talk to me.'
  const line = lineAll.length > 260 ? '…' + lineAll.slice(-240) : lineAll

  const on = Object.entries(state.privacy.sources).filter(([, v]) => v).map(([k]) => NAMES[k] ?? k)
  const watching = state.privacy.watching && !state.privacy.paused
  const pillText = state.privacy.paused ? 'Paused' : on.length ? `Watching: ${on.join(', ')}` : 'Not watching'

  useEffect(() => { const id = window.setInterval(() => { if (!document.hidden) { api.getWeather(); api.getFiles() } }, 120000); return () => window.clearInterval(id) }, [api])
  useEffect(() => { if (stage) setScreen('home') }, [stage?.id]) // eslint-disable-line react-hooks/exhaustive-deps

  const openStage = (id: string) => { api.openStage(id); setScreen('home') }
  const onAction = (stageId: string, a: StageAction) => {
    if (a.id.startsWith('ask:')) api.send(a.id.slice(4))
    else if (a.id === 'dismiss') api.clearStage()
    else api.stageAction(stageId, a.id)
  }
  const earlier = state.stages.filter((x) => x.id !== stage?.id)

  const presentation = stage ? (
    stage.layout === 'report' ? <section className="canvas report" aria-label="Report"><ReportView stage={stage} onClear={api.clearStage} onAction={onAction} history={[]} onOpen={openStage} /></section>
    : chooseMode(stage) === 'connected' ? <StageView noOrb stage={stage} history={[]} pinned={state.pinned} sphere={orbState} amplitude={0} low={fx === 'low'} onOpen={openStage} onPin={api.pinStage} onClear={api.clearStage} onAction={onAction} />
    : <Canvas stage={stage} narrow={narrow} pinned={state.pinned} onPin={api.pinStage} onClear={api.clearStage} onAction={onAction} />
  ) : null

  return (
    <div className="shell" data-mode={mode} data-side={sb.open ? 'open' : 'closed'} data-place={place} data-theme-now={theme}>
      <Sidebar sb={sb} mode={mode} onMode={(m) => { setMode(m); setScreen('home') }} screen={screen} onScreen={(s) => { setScreen(s); if (narrow) sb.hide() }}
        history={earlier} onOpenStage={(id) => { openStage(id); if (narrow) sb.hide() }} onSettings={() => setSettings(true)}
        pill={pillText} paused={state.privacy.paused} watching={watching} onPause={() => api.pause(!state.privacy.paused)} theme={themePref} onTheme={setThemePref}
        footer={<SetupSwitcher s={state.setup} onSet={api.setSetup} />} />

      <main className="workspace" ref={ws}>
        {screen === 'overview' ? (
          <section className="overview" aria-label="This computer">
            <div className="canvas-head"><div className="canvas-title"><span className="k">SYSTEM</span><h2>This computer</h2></div></div>
            <div className="canvas-scroll"><SystemBoard orb={false} hw={state.hw} weather={state.weather} files={state.files} onCity={api.getWeather} focus={state.focus as never} sphere={orbState} amplitude={0} low={fx === 'low'}
              onEnd={api.hwEnd} onUninstall={api.hwUninstall} onAsk={(q) => { api.send(q); setScreen('home') }} /></div>
          </section>
        ) : mode === 'voice' ? (
          <VoiceMode presenting={presenting} status={state.statusText} you={lastUser} line={line} rec={rec.rec} busy={rec.busy || state.status === 'thinking'} speaking={speaker.speaking}
            muted={speaker.muted} supported={speaker.supported} onMic={rec.toggle} onStop={speaker.stop} onMute={() => speaker.setMuted(!speaker.muted)} onSend={api.send}>{presentation}</VoiceMode>
        ) : (
          <ChatMode messages={state.messages} onOpenStage={openStage} onSend={api.send} disabled={state.conn !== 'online'} onVoiceError={(m) => api.dispatch({ t: 'error', message: m })} status={state.statusText}>{presentation}</ChatMode>
        )}

        <div className="orb" data-place={place}>
          <div className="orb-back" style={{ left: spot.cx - spot.size / 2 + 4, top: spot.cy - spot.size / 2 + 4, width: spot.size - 8, height: spot.size - 8 }} />
          <Sphere state={orbState} amplitude={amplitude} spot={spot} low={fx === 'low'} light={theme === 'light'} />
          {place === 'center' ? <div className={`orb-label ${orbState}`} style={{ left: spot.cx, top: spot.cy + spot.size / 2 + 4 }}>{STATE_LABEL[orbState]}</div> : null}
        </div>
      </main>

      {state.conn === 'offline' && <div className="offline-bar" role="status">Reconnecting… I'll be right back.</div>}
      <SettingsDrawer open={settings} privacy={state.privacy} onSource={api.setSource} onClose={() => setSettings(false)}
        projects={state.projects} guardian={state.guardian} onSaveProject={api.saveProject} onRemoveProject={api.removeProject} onRestore={api.restore} onGuardMode={api.setGuardMode} scans={state.scans} onScan={api.scanFile} onEmergency={api.setEmergency} onCheckProject={api.checkProject} onAgentMode={api.setAgentMode} setup={state.setup} onSetup={api.setSetup} onBuilderFast={api.setBuilderFast} onPurge={api.purge} onOpenPanels={api.loadPanels}
        sync={state.sync} onUnlock={api.syncUnlock} onSyncNow={api.syncNow} fx={fx} fxAuto={fxAuto} onFx={setFx} />
      <NudgeToast nudge={state.nudge} onAck={api.ackNudge} />
      <ApprovalModal approval={state.approval} onAnswer={api.answerApproval} />
    </div>)
}
