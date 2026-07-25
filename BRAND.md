# BRAND.md — Tangison Technologies Visual and Motion System

**Status**: Wave 1 audit documentation — principles and criteria defined, implementation deferred to post-asset-intake
**Last updated**: 2026-07-25

---

## Core Ideology

**"Intelligence for imperfect conditions."**

Supporting visual idea:

**"Vast conditions. Precise intelligence."**

The website must communicate: a credible Namibian technology company building applied intelligence systems for complex, imperfect and operational environments.

---

## What the Website Must Not Resemble

- A generic AI startup
- A fictional defence contractor
- A conventional web-design agency portfolio
- A dark cyberpunk laboratory
- A SaaS feature catalogue
- A collection of unrelated services

---

## Visual Principles

### Hyper-visual
Real photography and considered imagery lead every section. Text follows imagery, not the reverse.

### Hyper-minimal
Every element earns its place. Remove anything that does not communicate hierarchy, meaning, or interaction. Double the whitespace. Let the design breathe.

### Editorial
Inspired by COLLINS' strategic discipline — editorial confidence, image control, typography as architecture, contrast as meaning, restraint as power. Do not copy COLLINS layouts, identity assets or proprietary work.

### Precise
Margins, spacing, type scale, and alignment are intentional and measured. No arbitrary values. Optical adjustments where math looks wrong.

### Confident
Large type, generous negative space, strong contrast. The layout projects authority without volume.

### Responsive
Every viewport from 320 to 1440 is a considered composition, not a scaled-down desktop layout.

### Image-led
Photography and imagery establish the visual narrative. Text supports and contextualises.

### Motion-aware
Animation communicates hierarchy, continuity, causality, spatial relationships or interaction feedback. It never decorates.

### Clearly Namibian without tourism cliches
Landscape references (Skeleton Coast, Namib) convey vastness, imperfection, and operational reality. No resort photography, no sunset postcards, no "Africa" stereotypes.

---

## Typography Criteria

### Current state (to replace)
- **Geist Sans** — generic, overused in AI/SaaS products
- **Geist Mono** — functional but carries no editorial character

### Desired criteria
- **Headings**: A typeface with architectural presence, confident weight range, and tight letter-spacing at display sizes. Should feel editorial and precise, not tech-startup-casual. Consider: Tinos (available on system), or a serif with strong display presence (Noto Serif SC for CJK fallback).
- **Body**: A readable sans-serif with medium x-height and moderate contrast. Must pair cleanly with the heading face. Consider: Carlito (available on system) or a bespoke selection after asset intake.
- **Mono**: Reserved for code, data, and technical specifications only. Not for marketing copy.
- **CJK fallback**: Noto Serif SC (available) for Chinese headings; Noto Sans SC for Chinese body.
- **Number display**: Tabular figures (`font-variant-numeric: tabular-nums`) for any data presentation.

### Scale and spacing
- Display text: tight tracking (negative letter-spacing), reduced line-height (1.05–1.1)
- Body text: line-length capped at ~65 characters; line-height 1.5–1.6
- Subheaders: sentence case or small caps, not all-caps everywhere
- Orphan control: `text-wrap: balance` or `text-wrap: pretty` on key headings

### Weight hierarchy
- Regular (400) for body
- Medium (500) for labels and subheadings
- SemiBold (600) for emphasis
- Black/ExtraBold (800–900) for display headlines only
- Never rely solely on 400 and 700

---

## Colour Criteria

### Current state (to replace)
- Light background: `#F5F4F0` (warm off-white)
- Dark background: `#0A0A0A` (near-black, only on legal pages)
- Accent: `#B83A00` / `#CC4400` (burnt orange)
- Surface: `#FFFFFF` (pure white)
- Ink: `#0A0A0A`

### Desired criteria
- **One primary neutral family**: All grays tinted consistently (warm or cool, not both). Avoid mixing warm and cool grays.
- **One accent**: A single considered colour. Desaturation below 80% so it blends with neutrals rather than screaming. No multiple accent colours.
- **No purple/blue AI gradient**: This is the most common AI design fingerprint. Replace with neutral bases and a single accent.
- **No pure #000000 background**: Use off-black, dark charcoal, or tinted dark (#0a0a0a, #121212, or dark navy).
- **Tinted shadows**: Shadows carry the hue of the background, not generic black at low opacity.
- **No random dark sections** breaking a light page: If contrast is needed, use a slightly darker shade of the same palette, not a sudden jump to #111.
- **Subtle texture**: Noise, grain, or micro-pattern on backgrounds to break digital flatness. Pure flat vectors feel sterile.

### Prohibited
- Purple-gradient AI imagery
- Oversaturated accents above 80% saturation
- Pure #000 backgrounds
- Multiple competing accent colours
- Mixed warm/cool gray families
- Generic black-opacity shadows

---

## Image Rules

- Maximum two dominant elements per image
- Hyper-realistic
- Generous negative space
- No faces
- No visible hands
- No crowds
- No AI-generated text in images
- No malformed technology
- No busy dashboards
- No random floating objects
- No purple-gradient AI imagery
- No generic stock-business photography
- Skeleton Coast and Namibian landscape references use real photography when supplied
- Preserve every original asset
- Never regenerate, redraw or approximate the Tangison logo
- Never rasterise an SVG logo for normal interface use

---

## Motion Purpose

Motion communicates one of:
1. **Hierarchy** — which element matters first, second, third
2. **Continuity** — where the viewer's attention should flow next
3. **Causality** — what happened because of what
4. **Spatial relationships** — where elements exist in the layout
5. **Interaction feedback** — what the user's action caused

Motion that decorates without purpose is prohibited.

---

## Motion Hierarchy

1. **CSS transitions** for simple state changes (hover, focus, active)
2. **CSS animations** (`@keyframes`) for entrance effects, stagger reveals, scroll-driven animations where browser support exists
3. **IntersectionObserver + CSS class toggle** for scroll-triggered reveals (replaces framer-motion `whileInView`)
4. **Anime.js** for deliberate timelines, SVG choreography, stagger orchestration, and interaction choreography that exceeds CSS capability
5. **GSAP ScrollTrigger** only for genuinely advanced scroll storytelling that requires frame-level control

**One primary runtime engine**: Anime.js for JS-driven motion. CSS for everything else. GSAP only if a specific scroll storytelling requirement cannot be achieved with CSS + Anime.js.

**Do not ship Framer Motion, Anime.js and GSAP together without a measured, documented requirement.**

---

## Timing Ranges

- **Micro-interactions** (hover, press, focus): 150–250ms, ease-out
- **Entrance reveals**: 300–600ms, ease-out
- **Stagger delays**: 60–120ms per item
- **Scroll-driven sequences**: 400–800ms per section
- **Exit transitions**: 200–400ms, ease-in
- **Large spatial shifts**: 500–1000ms, ease-out with slight overshoot

---

## Easing Rules

- **Entrances**: ease-out or ease-out-back (slight overshoot feels natural)
- **Exits**: ease-in
- **Hover/active**: ease-out, 200ms
- **Scroll-driven**: ease-out for reveals, ease-in-out for parallax
- **Spring physics**: Not required by default. Use only for drag interactions or genuinely spring-like UI behaviour.

---

## Scroll Behaviour

- No scroll-jacking
- No excessive parallax (max 2 parallax elements per viewport)
- `scroll-behavior: smooth` for anchor navigation only
- Scroll-triggered reveals use IntersectionObserver with `threshold: 0.1–0.2`
- No permanent decorative scroll-linked motion
- Clean up ScrollTrigger instances on route change

---

## Reduced-Motion Behaviour

- `prefers-reduced-motion: reduce` disables all entrance animations, stagger reveals, and scroll-driven motion
- Content must be fully visible and readable before JavaScript hydration
- No animation dependency for content comprehension
- Reduced-motion users see static, fully composed layouts
- The `reduced-motion` media query is not an enhancement — it is a baseline requirement

---

## Runtime-Engine Decision Criteria

| Question | Yes → | No → |
|----------|-------|------|
| Can the effect be achieved with CSS transitions? | Use CSS | Consider Anime.js |
| Is the effect a scroll-triggered reveal? | Use IntersectionObserver + CSS | Consider Anime.js |
| Is the effect a timeline with multiple orchestrated steps? | Use Anime.js | Consider GSAP |
| Is the effect a frame-level scroll storytelling requirement? | Consider GSAP ScrollTrigger | Re-examine the requirement |
| Does the effect require SVG path animation? | Use Anime.js | CSS where possible |

**Current recommendation**: Remove Framer Motion entirely. Replace with CSS + IntersectionObserver for reveals. Introduce Anime.js only for future orchestrated motion needs. GSAP only if scroll storytelling requirements emerge post-asset-intake.

---

## Performance Budget

- **LCP target**: < 2.0s (current: 3.1s)
- **INP target**: < 200ms
- **CLS target**: 0 (current: 0 — good)
- **FCP target**: < 1.0s (current: 1.2s)
- **TBT target**: < 100ms (current: 100ms — borderline)
- **Total JS bundle**: < 150KB compressed (current framer-motion alone is significant)
- **No layout shift during hydration**: Content must be visible before JS runs
- **First viewport must not render faded**: Content at full opacity before animation initialises

---

## Anti-Slop Prohibitions

The Hallmark structural anti-slop gate prohibits:

- Three-column card grids as default feature layout
- Repeated pill badges on every page hero
- Interchangeable section rhythms (hero + cards + dark CTA)
- Generic typography (Inter/Geist everywhere)
- Purple-gradient AI aesthetic
- Footer link farms with 4+ columns
- Arbitrary blobs or decorative shapes without meaning
- Decoration without purpose
- All-caps subheaders everywhere
- Generic box-shadow
- Flat design with zero texture
- Symmetrical padding (top = bottom always)

---

## Unresolved Inputs

These require the owner's asset package after Wave 1:

1. **Official SVG wordmark** — exact path, colour, spacing
2. **Official SVG symbol/monogram** — if separate from wordmark
3. **Transparent PNG fallback** — for contexts where SVG is not supported
4. **Typography selection** — may be influenced by brand guidelines in the asset package
5. **Colour system** — may be defined in brand guidelines
6. **Photography assets** — Skeleton Coast, Namib, operational environments
7. **Logo usage rules** — clear space, minimum size, background requirements
