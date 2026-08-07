# E-Commerce Patterns Reference

## Product Catalog UX

### Product Card Anatomy
Every product card needs, in this visual priority order:
1. Image (largest element, consistent aspect ratio across all cards — 4:5 or 1:1)
2. Price (visible without hovering — mobile users can't hover)
3. Name/title (truncate gracefully at 2 lines, don't wrap awkwardly)
4. Quick-add or "view" action (appears on hover for desktop, always visible on mobile)

```css
.product-card {
  display: flex;
  flex-direction: column;
  aspect-ratio: 4/5; /* image */
}
.product-card img {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.product-card:hover img {
  transform: scale(1.04); /* subtle zoom, never more than 1.1 */
}
```

### Product Grid Responsive Rules
- Mobile: 2 columns minimum (never 1 — feels empty and requires excess scrolling)
- Tablet: 3 columns
- Desktop: 4 columns standard, 3 for luxury/editorial (more breathing room = more premium feel)
- Gap: 16-24px mobile, 24-32px desktop

## Cart UX

### Cart Drawer vs Full Page
- Drawer (slide-in panel): better for quick add-to-cart confirmation, keeps user in shopping flow
- Full page: better for complex carts (many items, bundles, gift options)
- Luxury brands lean drawer — reduces friction, keeps the browsing experience uninterrupted

```javascript
function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  drawer.classList.add('open');
  overlay.classList.add('visible');
  document.body.style.overflow = 'hidden'; // prevent background scroll
}
```

### Cart State Management (localStorage pattern for static/no-backend sites)
```javascript
const Cart = {
  KEY: 'cart_v1',

  get() {
    return JSON.parse(localStorage.getItem(this.KEY) || '[]');
  },

  add(product, qty = 1) {
    const cart = this.get();
    const existing = cart.find(i => i.id === product.id && i.variant === product.variant);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ ...product, qty });
    }
    localStorage.setItem(this.KEY, JSON.stringify(cart));
    this.render();
  },

  remove(id, variant) {
    const cart = this.get().filter(i => !(i.id === id && i.variant === variant));
    localStorage.setItem(this.KEY, JSON.stringify(cart));
    this.render();
  },

  updateQty(id, variant, qty) {
    const cart = this.get();
    const item = cart.find(i => i.id === id && i.variant === variant);
    if (item) {
      if (qty <= 0) return this.remove(id, variant);
      item.qty = qty;
      localStorage.setItem(this.KEY, JSON.stringify(cart));
    }
    this.render();
  },

  total() {
    return this.get().reduce((sum, i) => sum + (i.price * i.qty), 0);
  },

  render() {
    // Update cart badge count, drawer contents, total — call after every mutation
    document.querySelectorAll('.cart-count').forEach(el => {
      el.textContent = this.get().reduce((n, i) => n + i.qty, 0);
    });
  }
};
```

### WhatsApp Checkout Pattern (no payment gateway needed — common for smaller/emerging brands)
```javascript
function checkoutViaWhatsApp(phoneNumber) {
  const cart = Cart.get();
  if (cart.length === 0) return alert('Cart is empty');

  let message = "Hi! I'd like to order:\n\n";
  cart.forEach(item => {
    message += `• ${item.name} (${item.variant || 'Standard'}) x${item.qty} — ₦${(item.price * item.qty).toLocaleString()}\n`;
  });
  message += `\nTotal: ₦${Cart.total().toLocaleString()}`;

  const encodedMsg = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMsg}`, '_blank');
}
```

## Checkout Flow

### Reducing Drop-off
- Never force account creation before checkout — always offer guest checkout
- Show total cost (including shipping estimate) as early as possible — hidden costs at the final step is the #1 cause of cart abandonment
- Progress indicator for multi-step checkout (Cart → Shipping → Payment → Confirm) so users know how much is left
- Auto-fill and validate as you type, not just on submit

### Trust Signals at Checkout
Place near the payment button, not buried in a footer:
- Security badge / "secure checkout" label
- Accepted payment icons
- Return/refund policy link
- Customer service contact (visible, not just in FAQ)

## Product Photography Considerations (layout, not the photos themselves)

### Image Gallery Pattern
```html
<div class="product-gallery">
  <div class="gallery-main">
    <img id="gallery-current" src="" alt="">
  </div>
  <div class="gallery-thumbs">
    <!-- thumbnails, click to swap gallery-main src -->
  </div>
</div>
```
```javascript
document.querySelectorAll('.gallery-thumb').forEach(thumb => {
  thumb.addEventListener('click', () => {
    document.getElementById('gallery-current').src = thumb.dataset.fullSrc;
    document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
  });
});
```

### Zoom on Hover (desktop) / Pinch (mobile)
```css
.gallery-main {
  overflow: hidden;
  cursor: zoom-in;
}
.gallery-main img {
  transition: transform 0.3s ease;
}
.gallery-main:hover img {
  transform: scale(1.5);
}
```
Always lazy-load gallery/thumbnail images below the fold:
```html
<img loading="lazy" src="..." alt="...">
```

## Size/Variant Selectors

### Pattern for Size Selection
```html
<div class="size-selector">
  <button class="size-option" data-size="S">S</button>
  <button class="size-option" data-size="M">M</button>
  <button class="size-option out-of-stock" data-size="L" disabled>L</button>
  <button class="size-option" data-size="XL">XL</button>
</div>
```
- Out-of-stock sizes: show but disable, strike through — don't just hide (hiding causes confusion about what sizes normally exist)
- Selected state needs strong visual contrast, not just a subtle border change

## Common E-Commerce Mistakes to Avoid
- [ ] Auto-playing video/carousel on product pages (distracting, hurts load time)
- [ ] No visible price until scroll or hover
- [ ] Checkout button not sticky/visible when cart has many items
- [ ] No loading state on "Add to Cart" (feels broken on slow connections)
- [ ] Missing empty-cart state (blank white space instead of a helpful message + CTA)
- [ ] Currency not clearly labeled (₦ vs $ ambiguity for international-facing brands)
