import * as THREE from 'three'
import type { SphereState } from '../types'

/** Per-state look. The sphere eases toward these values, so changing state never snaps. */
interface Look {
  rot: number; breathAmp: number; breathFreq: number; wobble: number; bright: number
  inward: number; pulse: number; color: THREE.Color; glow: THREE.Color; spread: number
}
const c = (hex: string) => new THREE.Color(hex)
export const LOOKS: Record<SphereState, Look> = {
  idle:     { rot: 0.10, breathAmp: 0.020, breathFreq: 0.8, wobble: 0.010, bright: 1.0,  inward: 0,    pulse: 0,   color: c('#7EC8FF'), glow: c('#2596FF'), spread: 1 },
  thinking: { rot: 0.45, breathAmp: 0.030, breathFreq: 2.2, wobble: 0.030, bright: 1.25, inward: 0,    pulse: 0,   color: c('#9AD6FF'), glow: c('#2596FF'), spread: 1 },
  speaking: { rot: 0.18, breathAmp: 0.040, breathFreq: 3.0, wobble: 0.020, bright: 1.15, inward: 0,    pulse: 0,   color: c('#7EC8FF'), glow: c('#2596FF'), spread: 1 },
  learning: { rot: 0.22, breathAmp: 0.025, breathFreq: 1.4, wobble: 0.015, bright: 1.1,  inward: 0.16, pulse: 0,   color: c('#A6EBFF'), glow: c('#2FB6FF'), spread: 1 },
  sleeping: { rot: 0.03, breathAmp: 0.015, breathFreq: 0.35, wobble: 0.004, bright: 0.32, inward: 0,   pulse: 0,   color: c('#5F8FB8'), glow: c('#1B4F86'), spread: 0.92 },
  // Error and alert read as concern, not malfunction: warm, slow, never flashing.
  error:    { rot: 0.06, breathAmp: 0.025, breathFreq: 0.6, wobble: 0.012, bright: 0.75, inward: 0,    pulse: 0,   color: c('#E7A3AB'), glow: c('#B8535F'), spread: 1.02 },
  alert:    { rot: 0.12, breathAmp: 0.030, breathFreq: 1.3, wobble: 0.015, bright: 1.2,  inward: 0,    pulse: 1,   color: c('#F2B35E'), glow: c('#C9822B'), spread: 1.03 },
}

const VERT = /* glsl */ `
  uniform float uTime, uBreathAmp, uBreathFreq, uWobble, uInward, uPulse, uSize, uAmp, uPixel, uScale;
  attribute float aSeed;
  varying float vDepth, vTwinkle;
  void main() {
    vec3 p = position;
    float t = uTime;
    float wob = sin(t * 1.3 + aSeed * 40.0) * uWobble + sin(t * 0.7 + aSeed * 90.0) * uWobble * 0.6;
    float breath = 1.0 + sin(t * uBreathFreq) * uBreathAmp + uAmp * 0.10;
    float inward = fract(t * 0.18 + aSeed) * uInward;
    float ring = uPulse * 0.035 * sin(length(p) * 9.0 - t * 2.4);
    p *= (breath + wob + ring) * (1.0 - inward);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vDepth = clamp((-mv.z - 2.2) / 2.6, 0.0, 1.0);          // 0 = front, 1 = back
    vTwinkle = 0.75 + 0.25 * sin(t * 2.0 + aSeed * 120.0);
    gl_PointSize = uSize * uPixel * uScale * (1.0 - 0.4 * vDepth) * (4.1 / max(0.5, -mv.z)) * 1.35;
    gl_Position = projectionMatrix * mv;
  }`
const FRAG = /* glsl */ `
  uniform vec3 uColor, uGlow; uniform float uBright, uBase;
  varying float vDepth, vTwinkle;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float soft = smoothstep(1.0, 0.0, d);
    soft *= soft;
    vec3 col = mix(uColor, uGlow, vDepth * 0.85);
    float a = clamp(soft * (1.0 - 0.6 * vDepth) * vTwinkle * uBright * uBase * 1.9, 0.0, 1.0);
    gl_FragColor = vec4(col, a);
  }`

function shell(count: number, radius: number, jitter: number): THREE.BufferGeometry {
  const pos = new Float32Array(count * 3), seed = new Float32Array(count)
  const golden = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2
    const r = Math.sqrt(1 - y * y), th = golden * i
    const k = radius * (1 + (Math.random() - 0.5) * jitter)
    pos.set([Math.cos(th) * r * k, y * k, Math.sin(th) * r * k], i * 3)
    seed[i] = Math.random()
  }
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1))
  return g
}

export class SphereEngine {
  private renderer: THREE.WebGLRenderer
  private scene = new THREE.Scene()
  private camera = new THREE.PerspectiveCamera(40, 1, 0.1, 20)
  private group = new THREE.Group()
  private mats: THREE.ShaderMaterial[] = []
  private target: SphereState = 'idle'
  private cur = { ...LOOKS.idle, color: LOOKS.idle.color.clone(), glow: LOOKS.idle.glow.clone() }
  private amp = 0
  private ampTarget = 0
  private raf = 0
  private last = 0
  private t = 0
  private reduced = false
  private running = false

  constructor(private canvas: HTMLCanvasElement, low = false) {
    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'low-power' })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, low ? 1 : 1.75))
    this.renderer.setClearColor(0x000000, 0)
    this.camera.position.z = 4.1
    this.reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    const [inner, outer] = low ? [1400, 500] : [2800, 1100]
    for (const [geo, size, base] of [[shell(inner, 1.0, 0.04), 2.1, 1.0], [shell(outer, 1.38, 0.18), 1.5, 0.45]] as const) {
      const mat = new THREE.ShaderMaterial({
        vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
        uniforms: {
          uTime: { value: 0 }, uBreathAmp: { value: 0.02 }, uBreathFreq: { value: 0.8 }, uWobble: { value: 0.01 },
          uInward: { value: 0 }, uPulse: { value: 0 }, uSize: { value: size }, uAmp: { value: 0 },
          uPixel: { value: this.renderer.getPixelRatio() }, uColor: { value: this.cur.color }, uGlow: { value: this.cur.glow },
          uBright: { value: 1 }, uBase: { value: base }, uScale: { value: 1 },
        },
      })
      this.mats.push(mat)
      this.group.add(new THREE.Points(geo, mat))
    }
    this.scene.add(this.group)
  }

  setState(s: SphereState) { this.target = s }
  /** 0..1 loudness while speaking (voice mode) */
  setAmplitude(a: number) { this.ampTarget = Math.max(0, Math.min(1, a)) }

  resize(w: number, h: number) {
    const s = Math.max(1, Math.floor(Math.min(w, h)))
    this.renderer.setSize(s, s, false)
    this.canvas.style.width = `${s}px`; this.canvas.style.height = `${s}px`
    this.camera.aspect = 1; this.camera.updateProjectionMatrix()
    for (const m of this.mats) m.uniforms.uScale.value = s / 150
  }

  private ease(dt: number) {
    const L = LOOKS[this.target], k = 1 - Math.exp(-dt * 3.2)
    const c = this.cur
    c.rot += (L.rot - c.rot) * k; c.breathAmp += (L.breathAmp - c.breathAmp) * k; c.breathFreq += (L.breathFreq - c.breathFreq) * k
    c.wobble += (L.wobble - c.wobble) * k; c.bright += (L.bright - c.bright) * k; c.inward += (L.inward - c.inward) * k
    c.pulse += (L.pulse - c.pulse) * k; c.spread += (L.spread - c.spread) * k
    c.color.lerp(L.color, k); c.glow.lerp(L.glow, k)
    this.amp += (this.ampTarget - this.amp) * (1 - Math.exp(-dt * 12))
  }

  private frame = (now: number) => {
    if (!this.running) return
    const dt = Math.min(0.05, (now - (this.last || now)) / 1000); this.last = now
    this.t += dt
    this.ease(dt)
    const c = this.cur, motion = this.reduced ? 0.15 : 1
    this.group.rotation.y += dt * c.rot * motion
    this.group.rotation.x = Math.sin(this.t * 0.25) * 0.12 * motion
    this.group.scale.setScalar(c.spread)
    for (const m of this.mats) {
      const u = m.uniforms
      u.uTime.value = this.t * motion; u.uBreathAmp.value = c.breathAmp; u.uBreathFreq.value = c.breathFreq
      u.uWobble.value = c.wobble; u.uInward.value = c.inward; u.uPulse.value = c.pulse; u.uBright.value = c.bright
      u.uAmp.value = this.amp
    }
    this.renderer.render(this.scene, this.camera)
    this.raf = requestAnimationFrame(this.frame)
  }

  start() { if (!this.running) { this.running = true; this.last = 0; this.raf = requestAnimationFrame(this.frame) } }
  stop() { this.running = false; cancelAnimationFrame(this.raf) }
  dispose() {
    this.stop()
    this.group.traverse((o) => { if (o instanceof THREE.Points) o.geometry.dispose() })
    this.mats.forEach((m) => m.dispose())
    this.renderer.dispose()
  }
}
