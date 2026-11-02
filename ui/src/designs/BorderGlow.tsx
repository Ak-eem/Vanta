import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties, type PointerEvent, type ReactNode } from 'react'
import './BorderGlow.css'

export interface BorderGlowProps {
  children?: ReactNode
  className?: string
  edgeSensitivity?: number
  glowColor?: string
  backgroundColor?: string
  borderRadius?: number
  glowRadius?: number
  glowIntensity?: number
  coneSpread?: number
  animated?: boolean
  colors?: string[]
  fillOpacity?: number
}

const DEFAULT_COLORS = ['#c084fc', '#f472b6', '#38bdf8']
const GRADIENT_POSITIONS = ['80% 55%', '69% 34%', '8% 6%', '41% 38%', '86% 85%', '82% 18%', '51% 4%']
const COLOR_MAP = [0, 1, 2, 0, 1, 2, 1]

function parseHSL(value: string) {
  const match = value.match(/([\d.]+)\s+([\d.]+)%?\s+([\d.]+)%?/)
  if (!match) return { h: 40, s: 80, l: 80 }
  return { h: Number(match[1]), s: Number(match[2]), l: Number(match[3]) }
}

function buildBoxShadow(glowColor: string, intensity: number) {
  const { h, s, l } = parseHSL(glowColor)
  const base = `${h}deg ${s}% ${l}%`
  const layers: [number, number, number, number, number, boolean][] = [
    [0, 0, 0, 1, 100, true], [0, 0, 1, 0, 60, true], [0, 0, 3, 0, 50, true],
    [0, 0, 6, 0, 40, true], [0, 0, 15, 0, 30, true], [0, 0, 25, 2, 20, true],
    [0, 0, 50, 2, 10, true],
    [0, 0, 1, 0, 60, false], [0, 0, 3, 0, 50, false], [0, 0, 6, 0, 40, false],
    [0, 0, 15, 0, 30, false], [0, 0, 25, 2, 20, false], [0, 0, 50, 2, 10, false],
  ]
  return layers.map(([x, y, blur, spread, alpha, inset]) => {
    const opacity = Math.min(alpha * intensity, 100)
    return `${inset ? 'inset ' : ''}${x}px ${y}px ${blur}px ${spread}px hsl(${base} / ${opacity}%)`
  }).join(', ')
}

function easeOutCubic(value: number) { return 1 - Math.pow(1 - value, 3) }
function easeInCubic(value: number) { return value * value * value }

function buildMeshGradients(colors: string[]) {
  const gradients = GRADIENT_POSITIONS.map((position, index) => {
    const color = colors[Math.min(COLOR_MAP[index], colors.length - 1)]
    return `radial-gradient(at ${position}, ${color} 0px, transparent 50%)`
  })
  return [...gradients, `linear-gradient(${colors[0]} 0 100%)`]
}

function isLightColor(color: string) {
  const value = color.trim().replace('#', '')
  if (!/^[\da-f]{3}([\da-f]{3})?$/i.test(value)) return false
  const hex = value.length === 3 ? value.split('').map((char) => char + char).join('') : value
  const red = parseInt(hex.slice(0, 2), 16)
  const green = parseInt(hex.slice(2, 4), 16)
  const blue = parseInt(hex.slice(4, 6), 16)
  return red * 0.2126 + green * 0.7152 + blue * 0.0722 > 180
}

export default function BorderGlow({
  children,
  className = '',
  edgeSensitivity = 30,
  glowColor = '40 80 80',
  backgroundColor = '#120F17',
  borderRadius = 28,
  glowRadius = 40,
  glowIntensity = 1,
  coneSpread = 25,
  animated = false,
  colors = DEFAULT_COLORS,
  fillOpacity = 0.5,
}: BorderGlowProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [cursorAngle, setCursorAngle] = useState(45)
  const [edgeProximity, setEdgeProximity] = useState(0)
  const [sweepActive, setSweepActive] = useState(false)
  const safeColors = useMemo(() => colors.length ? colors : DEFAULT_COLORS, [colors])

  const handlePointerMove = useCallback((event: PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    const proximity = Math.max(Math.abs(x) / (rect.width / 2), Math.abs(y) / (rect.height / 2))
    const angle = x === 0 && y === 0 ? 0 : (Math.atan2(y, x) * 180 / Math.PI + 450) % 360
    setEdgeProximity(Math.max(0, Math.min(proximity, 1)))
    setCursorAngle(angle)
  }, [])

  useEffect(() => {
    if (!animated) return
    let frame = 0
    let start = 0
    setSweepActive(true)
    setCursorAngle(110)
    const tick = (now: number) => {
      if (!start) start = now
      const elapsed = now - start
      const angleProgress = Math.min(Math.max((elapsed - 500) / 3250, 0), 1)
      const edgeIn = Math.min(elapsed / 500, 1)
      const edgeOut = Math.max(1 - (elapsed - 2500) / 1500, 0)
      setEdgeProximity(Math.min(easeOutCubic(edgeIn), edgeOut))
      setCursorAngle(110 + 355 * easeInCubic(angleProgress))
      if (elapsed < 4000) frame = requestAnimationFrame(tick)
      else {
        setEdgeProximity(0)
        setSweepActive(false)
      }
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [animated])

  const sensitivity = Math.max(0, Math.min(edgeSensitivity, 99))
  const colorSensitivity = Math.min(sensitivity + 20, 99)
  const spread = Math.max(5, Math.min(coneSpread, 45))
  const visible = isHovered || sweepActive
  const borderOpacity = visible
    ? Math.max(0, (edgeProximity * 100 - colorSensitivity) / (100 - colorSensitivity))
    : 0
  const glowOpacity = visible
    ? Math.max(0, (edgeProximity * 100 - sensitivity) / (100 - sensitivity))
    : 0
  const meshGradients = buildMeshGradients(safeColors)
  const angle = `${cursorAngle.toFixed(3)}deg`
  const lightSurface = isLightColor(backgroundColor)
  const mask = `conic-gradient(from ${angle} at center, black ${spread}%, transparent ${spread + 15}%, transparent ${85 - spread}%, black ${100 - spread}%)`
  const fillMask = [
    'linear-gradient(to bottom, black, black)',
    'radial-gradient(ellipse at 50% 50%, black 40%, transparent 65%)',
    'radial-gradient(ellipse at 66% 66%, black 5%, transparent 40%)',
    'radial-gradient(ellipse at 33% 33%, black 5%, transparent 40%)',
    'radial-gradient(ellipse at 66% 33%, black 5%, transparent 40%)',
    'radial-gradient(ellipse at 33% 66%, black 5%, transparent 40%)',
    `conic-gradient(from ${angle} at center, transparent 5%, black 15%, black 85%, transparent 95%)`,
  ].join(', ')
  const transition = visible ? 'opacity 0.25s ease-out' : 'opacity 0.75s ease-in-out'

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      className={`border-glow-card ${className}`.trim()}
      style={{
        background: backgroundColor,
        borderColor: lightSurface ? 'rgb(24 24 27 / 12%)' : 'rgb(255 255 255 / 15%)',
        borderRadius: `${borderRadius}px`,
        boxShadow: lightSurface
          ? 'rgb(24 24 27 / 4%) 0 1px 2px, rgb(24 24 27 / 5%) 0 8px 24px'
          : 'rgba(0,0,0,0.1) 0 1px 2px, rgba(0,0,0,0.1) 0 2px 4px, rgba(0,0,0,0.1) 0 4px 8px, rgba(0,0,0,0.1) 0 8px 16px, rgba(0,0,0,0.1) 0 16px 32px, rgba(0,0,0,0.1) 0 32px 64px',
      }}
    >
      <div
        className="border-glow-layer"
        style={{
          background: [
            `linear-gradient(${backgroundColor} 0 100%) padding-box`,
            'linear-gradient(rgb(255 255 255 / 0%) 0% 100%) border-box',
            ...meshGradients.map((gradient) => `${gradient} border-box`),
          ].join(', '),
          opacity: borderOpacity,
          maskImage: mask,
          WebkitMaskImage: mask,
          transition,
        }}
      />
      <div
        className="border-glow-layer"
        style={{
          background: meshGradients.map((gradient) => `${gradient} padding-box`).join(', '),
          maskImage: fillMask,
          WebkitMaskImage: fillMask,
          maskComposite: 'subtract, add, add, add, add, add',
          WebkitMaskComposite: 'source-out, source-over, source-over, source-over, source-over, source-over',
          opacity: borderOpacity * fillOpacity,
          mixBlendMode: lightSurface ? 'normal' : 'soft-light',
          transition,
        } as CSSProperties}
      />
      <span
        className="border-glow-outer"
        style={{
          inset: `${-glowRadius}px`,
          maskImage: `conic-gradient(from ${angle} at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%)`,
          WebkitMaskImage: `conic-gradient(from ${angle} at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%)`,
          opacity: glowOpacity,
          mixBlendMode: lightSurface ? 'normal' : 'plus-lighter',
          transition,
        } as CSSProperties}
      >
        <span className="border-glow-shadow" style={{ inset: `${glowRadius}px`, boxShadow: buildBoxShadow(glowColor, glowIntensity) }} />
      </span>
      <div className="border-glow-content">{children}</div>
    </div>
  )
}
