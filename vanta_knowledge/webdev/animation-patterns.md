# Animation Patterns Reference

## Page Load Sequence
Always stagger page load animations in this order:
1. Nav (0ms delay)
2. Hero headline (100ms)
3. Hero subtext (200ms)
4. Hero CTA (300ms)
5. Hero visual/image (400ms)
6. Scroll indicator (600ms)

## Micro-interactions

### Button Hover
```css
.btn {
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.2s ease,
              background 0.2s ease;
}
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}
.btn:active {
  transform: translateY(0);
}
```

### Link Underline Animation
```css
.link {
  position: relative;
  text-decoration: none;
}
.link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: currentColor;
  transition: width 0.3s ease;
}
.link:hover::after { width: 100%; }
```

### Card Hover Lift
```css
.card {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}
```

## Loading States

### Skeleton Screen
```css
.skeleton {
  background: linear-gradient(90deg, #1a1a1a 25%, #2a2a2a 50%, #1a1a1a 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### Spinner
```css
.spinner {
  width: 24px; height: 24px;
  border: 2px solid rgba(255,255,255,0.1);
  border-top-color: #00d4ff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
```

## Scroll Effects

### Parallax Hero
```javascript
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  document.querySelector('.hero-bg').style.transform = 
    `translateY(${scrolled * 0.4}px)`;
});
```

### Reveal on Scroll (production pattern)
```javascript
const revealElements = document.querySelectorAll('[data-reveal]');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('revealed');
      }, delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
revealElements.forEach(el => revealObserver.observe(el));
```
```css
[data-reveal] {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
[data-reveal].revealed {
  opacity: 1;
  transform: translateY(0);
}
```

## Text Animations

### Typewriter Effect
```javascript
function typewriter(element, text, speed = 50) {
  let i = 0;
  element.textContent = '';
  const timer = setInterval(() => {
    element.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(timer);
  }, speed);
}
```

### Scramble Text on Hover
```javascript
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function scramble(element) {
  const original = element.dataset.text || element.textContent;
  let iteration = 0;
  const interval = setInterval(() => {
    element.textContent = original.split('').map((char, i) => {
      if (i < iteration) return original[i];
      return chars[Math.floor(Math.random() * chars.length)];
    }).join('');
    if (iteration >= original.length) clearInterval(interval);
    iteration += 1/3;
  }, 30);
}
```

### Counter Animation
```javascript
function animateCounter(element, target, duration = 2000) {
  const start = performance.now();
  const update = (currentTime) => {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    element.textContent = Math.floor(eased * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}
```

## Background Effects

### Animated Gradient Background
```css
.animated-gradient {
  background: linear-gradient(-45deg, #0a0a0a, #0d1b2a, #0a0a0a, #1a0a2e);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
}
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### Particle/Star Field (Canvas)
```javascript
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particles = Array.from({length: 80}, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 1.5 + 0.5,
  dx: (Math.random() - 0.5) * 0.3,
  dy: (Math.random() - 0.5) * 0.3,
  alpha: Math.random() * 0.5 + 0.3
}));
function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`;
    ctx.fill();
    p.x += p.dx; p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();
```

### Grid/Dot Pattern Background
```css
.grid-bg {
  background-image: 
    linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px);
  background-size: 50px 50px;
}
.dot-bg {
  background-image: radial-gradient(rgba(0,212,255,0.15) 1px, transparent 1px);
  background-size: 24px 24px;
}
```
