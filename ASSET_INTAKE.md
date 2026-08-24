# ASSET_INTAKE.md — Tangison Technologies Website Asset Requirements

**Status**: Wave 1 audit documentation — specification only, no assets imported or generated
**Last updated**: 2026-07-25

---

## Required Assets for Wave 2 Build

### 1. Official SVG Wordmark

| Property | Requirement |
|----------|-------------|
| Format | SVG (scalable vector) |
| Content | "Tangison" or "Tangison Technologies" — whichever is the official wordmark |
| Colour | Brand primary colour (to be defined in brand guidelines or specified here) |
| Clear space | Minimum clear space specification around the wordmark |
| Minimum size | Minimum rendering size for legibility (e.g. 24px height) |
| Background rules | Which backgrounds it can appear on (light, dark, photographic) |
| Variants | Light-on-dark variant if applicable |
| Source file | Original design file (Figma, Illustrator, or equivalent) |
| Usage | Header logo, footer wordmark, OG image, favicon base |

### 2. Official SVG Symbol / Monogram

| Property | Requirement |
|----------|-------------|
| Format | SVG (scalable vector) |
| Content | Tangison symbol or monogram (if separate from the wordmark) |
| Colour | Brand primary colour |
| Clear space | Minimum clear space specification |
| Usage | Favicon, mobile app icon, social media avatar, small-size contexts |

**Note**: If the wordmark and symbol are the same mark (e.g. the word "Tangison" IS the logo), then only one SVG is needed with clear rules for full and compact rendering.

### 3. Transparent PNG Fallback

| Property | Requirement |
|----------|-------------|
| Format | PNG with transparency |
| Sizes | Minimum: 32x32 (favicon), 180x180 (apple-touch-icon), 512x512 (OG image base) |
| Colour | Same as SVG variants |
| Usage | Contexts where SVG is not supported (email, some social platforms) |

### 4. Asset ZIP

| Property | Requirement |
|----------|-------------|
| Content | All brand assets in one package: SVG wordmark, SVG symbol, PNG fallbacks, source files, brand guidelines document (if exists) |
| Organisation | Clear directory structure with naming conventions |
| Delivery | Download link, cloud storage, or email attachment |

### 5. Original Source Images

| Property | Requirement |
|----------|-------------|
| Hero photography | Skeleton Coast, Namib Desert, or Namibian operational environments — as real photography |
| Context images | Images that convey "vast conditions" and "imperfect environments" — operational, industrial, landscape |
| Technology images | If available: infrastructure, server environments, operational technology (not busy dashboards) |
| Format | Highest available resolution (JPEG, PNG, or RAW processed) |
| Dimensions | Minimum 1920px wide for hero use; 1200px wide for editorial sequences |
| Orientation | Mix of horizontal (hero, sequences) and vertical (detail shots) |
| Quantity | Minimum: 1 hero image + 3–5 editorial sequence images + 2–3 detail/context images |
| Prohibited content | No faces, no visible hands, no crowds, no AI-generated text, no busy dashboards, no stock-business photography |

### 6. Rights and Attribution Information

| Property | Requirement |
|----------|-------------|
| Photography rights | Who owns each image, what licence applies (owned, licensed, CC), any usage restrictions |
| Attribution requirements | Whether any images require attribution text in the footer or elsewhere |
| Brand guidelines rights | Whether the brand guidelines document can be published on the /brand page or is internal-only |
| Logo usage rights | Whether the SVG/PNG can be embedded in the website source code (MIT-licensed repo) or must remain proprietary |
| Editorial restrictions | Any images that cannot be cropped, overlaid, or used in specific contexts |

### 7. Preferred Crops or Focal Points

| Property | Requirement |
|----------|-------------|
| Hero image | Preferred focal point for 16:9 crop (e.g. "horizon line at 40% from top") |
| Sequence images | Preferred horizontal flow direction (left-to-right narrative) |
| Detail shots | Preferred aspect ratio and focal subject |

---

## What Is NOT Required

- **Team photographs** — explicitly not requested
- **Product screenshots** — Tangison Agent UI screenshots belong on agent.tangison.com, not the corporate site
- **Icon sets** — Icons will be selected from Phosphor, Heroicons, or a custom set per brand direction
- **Illustrations** — The site direction is photography-led, not illustration-led. Agent-specific SVG illustrations will be removed.
- **Mock-ups or placeholders** — No placeholder images that could become accidental production assets

---

## Delivery Checklist

When the owner provides the asset package, verify:

1. [ ] SVG wordmark received and renders correctly
2. [ ] SVG symbol/monogram received (or confirmed that wordmark serves both purposes)
3. [ ] PNG fallbacks received at required sizes
4. [ ] Photography assets received at sufficient resolution
5. [ ] Rights and attribution information documented for each asset
6. [ ] Brand guidelines document received (if exists) — contains colour system, typography, spacing, usage rules
7. [ ] Focal point preferences documented for hero and sequence images
8. [ ] Logo usage rules confirmed (can be in open-source repo or proprietary)
9. [ ] No placeholder or AI-generated images included in the package
10. [ ] Original Tangison logo PNG preserved (not regenerated or approximated)

---

## Current Asset Status

| Asset | Current State | Required Action |
|-------|--------------|-----------------|
| Logo image (tangison-logo.png) | Exists in `public/tangison-logo.png` — 51-line next/image Logo component renders it | Preserve; do not regenerate. Will be replaced by official SVG when received. |
| Favicon (favicon.png) | Exists in `public/favicon.png` | Preserve; will be replaced by official favicon derived from SVG symbol. |
| Illustrations (13 SVG components) | Agent-specific geometric SVGs in `src/components/illustrations/index.tsx` | Remove — product-specific, not corporate. Photography will replace. |
| OG image generation | `src/app/opengraph-image.tsx` (edge runtime, 1200x630) | Rebuild for Tangison Technologies with official logo and brand colours. |
| No photography assets | None in repo or public directory | Await owner delivery. |
| No brand guidelines document | None in repo | Await owner delivery. |
