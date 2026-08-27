# Local & Service Business Website Patterns
# Applies to ANY local/service business — gyms, law firms, dentists, salons,
# photographers, contractors, clinics, event planners, real estate agents,
# bakeries, hotels, non-profits, and anything else that converts through a
# call/booking/visit rather than a shopping cart. Restaurant, repair shop,
# and school sections below are worked examples of applying the same
# universal pattern to specific verticals — not the only three types this
# file covers. If your business type isn't one of the three detailed
# sections, the Universal Rules below still apply directly; treat the
# specific sections as a template for how to adapt them, not a checklist
# that only works for those three.

Sourced from current research (2026), not just general training knowledge —
treat this file as more reliable than the general design docs for this
specific category.

## The Core Difference From E-Commerce
These sites aren't selling a product through a cart — they're converting a
visit into a phone call, a booking, or a walk-in. Every design decision
should serve ONE of three actions: call, book, or get directions. If a
page doesn't obviously lead toward one of those, it's not pulling weight.
This holds regardless of the specific business — a locksmith, a wedding
photographer, and a dental practice all follow this same core logic even
though nothing else about their sites looks alike.

## Universal Rules — Apply to Any Local/Service Business

### Mobile Is Not Optional, It's Primary
The majority of local searches — for any business type, not just the ones
detailed below — happen on mobile, often someone deciding in the moment
whether to call or walk in. Design mobile first, not as an afterthought:
- Tap targets minimum 44x44px
- Click-to-call phone numbers, not just displayed text:
```html
<a href="tel:+2348012345678" class="call-button">Call Now</a>
```
- Sticky call/book button on mobile that stays visible while scrolling

### Above-the-Fold Essentials
Regardless of business type, these must be visible without scrolling:
- What the business is / does (one line, no jargon)
- Location or service area
- Hours (or "open now" / "closed" status if feasible)
- The ONE primary action (Call, Book, Order, Enroll)

### Trust Signals Near the Action, Not Buried in a Footer
Reviews, certifications, "licensed and insured," years in business — place
these physically close to the call-to-action button, not on a separate
"About" page nobody visits before deciding.

### Local SEO Basics (structurally, not copywriting)
- Consistent NAP (Name, Address, Phone) — identical formatting across every
  page and any listing (Google Business Profile, directories)
- Embed a real map, not just a text address
- Structured data markup for local business (helps search engines show
  hours/rating/address directly in results)

---

## Restaurants

### Above-the-Fold Priority Order
1. Hero image of food (real photography, not stock — this is the single
   biggest driver of whether someone stays or bounces)
2. Cuisine type + location in one line
3. Primary action: Reserve / Order Online / View Menu (pick ONE as primary,
   don't give five equal-weight buttons)

### Menu Display
- Real text, not a photo of a printed menu or a PDF — PDFs are hard to read
  on mobile and terrible for SEO (search engines can't index them well)
```html
<div class="menu-category">
  <h3>Starters</h3>
  <div class="menu-item">
    <div class="menu-item-header">
      <span class="menu-item-name">Suya Spring Rolls</span>
      <span class="menu-item-price">₦3,500</span>
    </div>
    <p class="menu-item-desc">Crispy rolls, spiced beef, yaji dust</p>
  </div>
</div>
```
- Group by category, keep descriptions short (one line, sell the dish
  without a paragraph)
- Mark dietary info inline (vegetarian, spicy, contains nuts) rather than
  a separate legend most people won't scroll to find

### Reservations / Ordering
- Embed the booking widget directly on the page — don't send people to a
  separate unbranded third-party site if avoidable, breaks trust/flow
- If using WhatsApp ordering (common, low-friction for smaller/local
  spots): make the button prominent, not buried — same pattern as the
  e-commerce WhatsApp checkout, applies directly here too

---

## Local Service Businesses (car repair, salons, clinics, contractors)

### The Booking Page Is the Whole Game
Appointment booking pages consistently convert better than phone-only
scheduling — customers book outside business hours (evenings, weekends)
when the phone isn't being answered anyway. A missed call is a lost
customer; an available booking form isn't.

### What the Booking Page Needs, Above the Fold
- Service category + service area/city
- Hours or typical response time
- Primary "Book" action
- Let the customer pick the SPECIFIC service (oil change vs. brake repair,
  haircut vs. color) — a generic "book now" that doesn't ask what for feels
  slower and less trustworthy than one that shows you understand the range
  of what they might need

### Trust Elements Directly Beside the Booking Form
- Review snippet (actual quoted rating/count, not just a star icon)
- Licensing/insurance/certification badges if applicable
- A line on what happens next ("We'll confirm within 1 hour")

### Form Design
- Minimal required fields — every extra field measurably drops completion
- Large tap targets, autofill-friendly (`autocomplete="tel"`,
  `autocomplete="name"` etc.)
- Clear inline error messages, not a generic "form invalid" at the top
```html
<input type="tel" name="phone" autocomplete="tel"
       placeholder="080..." required
       aria-describedby="phone-error">
<span id="phone-error" role="alert"></span>
```

### Confirmation Step Matters
Don't let the form just "submit" into silence — a clear confirmation
screen or message that states what happens next (call, SMS, email) is
what actually reduces no-shows and follow-up phone calls asking "did that
go through?"

---

## Schools

### Different Job Entirely: This Is Not a Conversion Funnel, It's Trust-Building
Parents research schools slowly, over multiple visits, before ever
inquiring — closer to how someone shops for a house than a haircut. The
website's job is to answer concerns thoroughly enough that a parent feels
comfortable enough to reach out, not to rush them into a single CTA click.

### What Parents Are Actually Looking For (in priority order)
1. Curriculum / what their child will actually learn
2. Culture, safety, and pastoral care — not just academics
3. Clear, upfront cost and enrollment timeline information — vague or
   hidden fee information creates real friction and distrust
4. Social proof: testimonials, outcomes, accreditation

### Homepage Structure That Works
- Strong visual + one-line mission statement, not a wall of text
- Clear navigation split by audience (Prospective Parents / Current
  Families / Students / Staff) — these groups want completely different
  information and shouldn't have to dig through the same menu
- A specific, non-generic call-to-action: "Book a Tour," "Apply for
  [specific term]" — not just a flat "Contact Us"

### Imagery
Real photos of actual students/campus life land far better than stock
photography — parents are looking for an emotional read on whether their
child would belong there, not just information.

### Practical Requirements
- Multi-stakeholder navigation (parents, students, staff all need
  different entry points from the same homepage)
- Security matters more here than most local-business sites — schools
  handle real student/family data, so this is one category where the
  `security` knowledge base docs genuinely apply, not just webdev polish
- Mobile-first — most parent research happens on a phone between other
  tasks, not sitting at a desktop

---

## Quick Reference: Primary CTA by Business Type
| Type | Primary Action | Secondary |
|---|---|---|
| Restaurant | Reserve / Order | View menu, directions |
| Repair shop / salon / clinic | Book appointment | Call now |
| School | Book a tour / Apply | Download brochure, contact |
