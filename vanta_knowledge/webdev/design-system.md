# Design System Reference

## Color Palettes by Mood

### Dark / Cinematic / Technical
- Background: #0a0a0a or #0d0d0d
- Surface: #111111 or #161616
- Border: #1f1f1f or #2a2a2a
- Primary accent: #00d4ff (electric blue) or #7c3aed (deep violet) or #00ff88 (matrix green)
- Text primary: #f0f0f0
- Text secondary: #888888
- Danger/alert: #ff3b3b
- Success: #00ff88

### Luxury / High-End Minimal
- Background: #fafaf8 or #0c0c0c
- Surface: #ffffff or #111
- Accent: #c9a96e (gold) or #b8860b (dark gold)
- Text: #1a1a1a or #f5f5f5
- Supporting: #6b6b6b

### Bold / Youth / Energy
- Background: #ffffff or #0f0f0f
- Accent 1: #ff3cac
- Accent 2: #784ba0
- Accent 3: #2b86c5
- Gradient: linear-gradient(225deg, #FF3CAC, #784BA0, #2B86C5)

### Corporate / Professional
- Background: #ffffff
- Primary: #1a1a2e or #0f3460
- Accent: #e94560 or #533483
- Text: #333333
- Light gray: #f4f4f4

## Typography Pairings

### Technical / Dark UI
- Heading: 'Space Grotesk' or 'Syne' — bold, geometric
- Body: 'Inter' or 'DM Sans' — highly legible
- Mono/code: 'JetBrains Mono' or 'Fira Code'

### Luxury / Editorial
- Heading: 'Playfair Display' or 'Cormorant Garamond' — elegant serif
- Body: 'Jost' or 'Raleway' — clean, modern
- Accent: 'Italiana' for large display text

### Bold / Modern
- Heading: 'Bebas Neue' or 'Black Han Sans' — ultra bold
- Body: 'Nunito' or 'Poppins'

### Minimal / Clean
- Heading: 'Montserrat' weight 800
- Body: 'Lato' or 'Source Sans Pro'

## Spacing System
Use an 8px base grid:
- xs: 8px
- sm: 16px
- md: 24px
- lg: 48px
- xl: 96px
- xxl: 160px

Section padding: minimum 100px top and bottom on desktop, 60px on mobile.
Never let content touch viewport edges — minimum 24px horizontal padding.

## Layout Principles

### Hero Sections
- Full viewport height (100vh)
- Content centered or left-aligned with strong typographic hierarchy
- H1: 64-96px on desktop, 40-56px on mobile
- Subtext: 18-24px, lighter weight, secondary color
- CTA button: clear, high contrast, minimum 48px height
- Always include a subtle scroll indicator

### Cards
- Border-radius: 12px-20px for modern feel
- Box-shadow: 0 8px 32px rgba(0,0,0,0.12) for light, 0 8px 32px rgba(0,0,0,0.4) for dark
- Hover: translateY(-4px) with shadow intensification
- Glassmorphism: background: rgba(255,255,255,0.05), backdrop-filter: blur(10px), border: 1px solid rgba(255,255,255,0.1)

### Navigation
- Fixed or sticky, never static on scroll
- Background: transparent on hero, solid/blurred on scroll
- Blur nav on scroll: backdrop-filter: blur(20px), background: rgba(10,10,10,0.8)
- Height: 64-72px
- Logo left, links right, CTA button far right

## Animation Principles

### Performance Rules
- Only animate: transform, opacity, filter (GPU-accelerated)
- Never animate: width, height, top, left, margin, padding (causes reflow)
- Use will-change: transform sparingly on elements that animate frequently

### Entrance Animations
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
```
- Stagger delay: 0.1s-0.15s between sibling elements
- Duration: 0.6s-0.8s for entrances, 0.2s-0.3s for interactions
- Easing: cubic-bezier(0.16, 1, 0.3, 1) for snappy, ease-out for smooth

### Scroll-Triggered Animations (Intersection Observer)
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = `${i * 0.1}s`;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.animate').forEach(el => observer.observe(el));
```

### Custom Cursor (Desktop Only)
```javascript
const cursor = document.createElement('div');
const ring = document.createElement('div');
cursor.className = 'cursor-dot';
ring.className = 'cursor-ring';
document.body.append(cursor, ring);

let ringX = 0, ringY = 0, curX = 0, curY = 0;
document.addEventListener('mousemove', e => {
  curX = e.clientX; curY = e.clientY;
  cursor.style.transform = `translate(${curX}px, ${curY}px)`;
});
function animateRing() {
  ringX += (curX - ringX) * 0.12;
  ringY += (curY - ringY) * 0.12;
  ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
  requestAnimationFrame(animateRing);
}
animateRing();
```
CSS: cursor-dot is 6px solid accent color, cursor-ring is 36px border-only circle, both position:fixed, pointer-events:none, translate(-50%,-50%).

## Component Patterns

### Glassmorphism Card
```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 32px;
}
```

### Gradient Text
```css
.gradient-text {
  background: linear-gradient(135deg, #00d4ff, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Glow Effect
```css
.glow {
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.3), 0 0 60px rgba(0, 212, 255, 0.1);
}
.glow-text {
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
}
```

### Animated Gradient Border
```css
.gradient-border {
  position: relative;
  border-radius: 16px;
}
.gradient-border::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 17px;
  background: linear-gradient(135deg, #00d4ff, #7c3aed, #ff3cac);
  z-index: -1;
  animation: rotateBorder 4s linear infinite;
}
@keyframes rotateBorder {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
```

## Responsive Breakpoints
```css
/* Mobile first */
/* sm */ @media (min-width: 640px) {}
/* md */ @media (min-width: 768px) {}
/* lg */ @media (min-width: 1024px) {}
/* xl */ @media (min-width: 1280px) {}
```
- Stack columns on mobile, grid on desktop
- Font sizes scale down 20-30% on mobile
- Hide cursor effects on touch devices: @media (hover: none)
- Reduce animations on prefers-reduced-motion
