# Accessibility (a11y) Reference

## Why This Matters for Client Work
Accessibility isn't optional polish — for a paying client, an inaccessible
site is a legal/reputational risk (ADA/WCAG lawsuits are common for
e-commerce specifically) and simply excludes real customers. Building it
in from the start costs almost nothing extra; retrofitting it later costs a lot.

## Semantic HTML First (fixes most issues before CSS/JS is even involved)

```html
<!-- WRONG - a div is not a button -->
<div class="btn" onclick="submit()">Submit</div>

<!-- RIGHT -->
<button type="submit">Submit</button>

<!-- WRONG - no landmark structure -->
<div class="header">...</div>
<div class="nav">...</div>
<div class="main">...</div>

<!-- RIGHT - screen readers navigate by these -->
<header>...</header>
<nav>...</nav>
<main>...</main>
<footer>...</footer>
```

## Images
```html
<!-- Decorative image - empty alt, screen reader skips it -->
<img src="divider.svg" alt="">

<!-- Meaningful image - describe what it conveys, not what it literally shows -->
<img src="product-red-dress.jpg" alt="Red satin evening dress, knee-length">

<!-- NOT this - too literal, unhelpful -->
<img src="product-red-dress.jpg" alt="Image of a dress">
```

## Color Contrast (this one gets missed constantly on low-brightness UI themes)
Minimum ratios (WCAG AA):
- Normal text: 4.5:1 against background
- Large text (18px+ or 14px+ bold): 3:1
- UI components/icons: 3:1

```
Common failure: light gray text (#888) on near-black (#0a0a0a) background
  → contrast ratio ~3.5:1 — FAILS for body text, borderline for large text

Fix: lighten to at least #a0a0a0 on that same background for 4.5:1+
```
Check with browser devtools (Chrome/Firefox both show contrast ratio when
inspecting a text element) or webaim.org/resources/contrastchecker.

## Focus States (critical, frequently deleted by accident)
```css
/* NEVER do this globally */
*:focus { outline: none; }

/* RIGHT - replace with a visible custom focus style, don't remove it */
button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}
```
`:focus-visible` (not just `:focus`) shows the outline for keyboard
navigation specifically, without showing it on mouse clicks — best of both.

## Keyboard Navigation
Every interactive element must be reachable and operable via Tab/Enter/Space
alone, no mouse:
```javascript
// Custom dropdown/modal needs manual keyboard handling
element.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    triggerAction();
  }
});
```
Test manually: unplug the mouse, navigate the whole site with Tab, Shift+Tab,
Enter, and arrow keys only. If anything is unreachable or you get "lost"
(no visible focus indicator), that's a real bug.

## ARIA — Use Sparingly, Only When Semantic HTML Isn't Enough
```html
<!-- Custom components that aren't native HTML elements need ARIA roles -->
<div role="tablist">
  <button role="tab" aria-selected="true" aria-controls="panel-1">Tab 1</button>
  <button role="tab" aria-selected="false" aria-controls="panel-2">Tab 2</button>
</div>
<div role="tabpanel" id="panel-1">...</div>

<!-- Icon-only buttons need an accessible label -->
<button aria-label="Close menu">
  <svg>...</svg>
</button>

<!-- Loading states -->
<div aria-live="polite" aria-busy="true">Loading products...</div>
```
Rule of thumb: if a native HTML element already does the job (`<button>`,
`<nav>`, `<select>`), use it instead of recreating it with a styled `<div>`
plus ARIA — native elements come with correct behavior for free.

## Forms
```html
<label for="email">Email address</label>
<input type="email" id="email" name="email" required
       aria-describedby="email-error">
<span id="email-error" role="alert"></span>
```
- Every input needs a real, associated `<label>` — placeholder text alone
  is not a label (disappears on focus, not read consistently by screen readers)
- Error messages need `role="alert"` so they're announced when they appear
- Group related fields with `<fieldset>` + `<legend>` (e.g. shipping address fields)

## Motion / Animation
Respect the user's OS-level preference to reduce motion (vestibular disorders,
motion sensitivity):
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Quick Pre-Ship Checklist
- [ ] Every image has appropriate alt text (empty alt="" for decorative)
- [ ] Color contrast checked, especially light text on dark backgrounds
- [ ] Every interactive element reachable via keyboard alone
- [ ] Focus states visible, not deleted with `outline: none`
- [ ] Forms have real `<label>` elements, not placeholder-only
- [ ] Headings in logical order (one `<h1>`, then `<h2>`, don't skip levels)
- [ ] `prefers-reduced-motion` respected for any significant animation
- [ ] Page has a `<title>` that describes the actual page, not just the site name
