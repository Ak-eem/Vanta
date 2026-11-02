import BorderGlow from './BorderGlow'
import './BorderGlowPreview.css'

export default function BorderGlowPreview() {
  return (
    <main className="border-glow-preview">
      <BorderGlow
        edgeSensitivity={30}
        glowColor="40 80 80"
        backgroundColor="#120F17"
        borderRadius={28}
        glowRadius={40}
        glowIntensity={1}
        coneSpread={25}
        colors={['#7EC8FF', '#2596FF', '#A6EBFF']}
      >
        <section className="border-glow-preview-card">
          <span className="border-glow-preview-eyebrow">VANTA / DESIGN PREVIEW</span>
          <h1>Border glow</h1>
          <p>Move your pointer near the card edges to explore the glow.</p>
        </section>
      </BorderGlow>
    </main>
  )
}
