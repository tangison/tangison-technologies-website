# Tangison Technologies Corporate Website Build

**Task ID**: tangison-site-build
**Agent**: main
**Date**: 2025-07-25
**Status**: COMPLETE

## What Was Built

A complete, production-ready Next.js 16 corporate website for Tangison Technologies, following editorial design principles and Namibian context.

## Architecture

### Root Layout (`src/app/layout.tsx`)
- Server component with full Tangison metadata (title template, OG, Twitter, keywords)
- Inter + Geist Mono font configuration
- Skip link for accessibility
- No Toaster (removed since not needed for corporate site)

### Server-Client Pattern
Each page route follows this pattern:
- `src/app/[route]/page.tsx` — **server component** that exports Metadata and renders the client content
- `src/components/pages/[route]-content.tsx` — **'use client' component** with interactive content (useReveal hooks, PageShell wrapper)

This enables proper Next.js Metadata exports from server components while allowing client-side interactivity.

## Components Built

### Site Components (`src/components/site/`)
1. **logo.tsx** — PNG logo component with SVG-swap-ready architecture. Sizes: sm/md/lg. Linked by default.
2. **nav.tsx** — Full navigation system:
   - Minimal resting header with logo, primary links, search trigger, menu trigger
   - Desktop dropdowns (Technology: Overview/Observe/Decide/Operate/Agent; Company: Overview/Philosophy/Namibia/Brand/Contact)
   - Off-canvas menu (near-full-viewport, image changes with active nav item, ecosystem links, location, studio credit, focus trap, Escape close)
   - Mobile uses off-canvas as primary nav
3. **footer.tsx** — Restrained footer (~240px): logo, tagline, location, email, primary/secondary nav links, "Made by Tangison Studio" credit
4. **page-shell.tsx** — Wraps pages with Nav + Footer + min-h-screen flex layout
5. **search-dialog.tsx** — CMD+K accessible search against SEARCH_INDEX, with categories, keyboard navigation

### Hooks (`src/hooks/`)
- **use-reveal.ts** — IntersectionObserver that adds "visible" class for CSS reveal animations
- **useRevealChildren** — Batch reveal for all children with .reveal/.reveal-left/.reveal-image classes

### SEO (`src/lib/seo.tsx`)
- organizationJsonLd() — Organization structured data
- websiteJsonLd() — WebSite structured data
- pageJsonLd() — Per-page WebPage structured data
- JsonLdScript component — Renders JSON-LD as script tag

## Pages Built

| Route | Title | Description |
|-------|-------|-------------|
| `/` | Tangison Technologies | Homepage with full narrative (hero, methodology, carousel, Namibia context, ecosystem, contact closing) |
| `/technology` | Technology | Observe/Decide/Operate methodology phases, Tangison Agent, Tangison Labs |
| `/company` | Company | Overview, philosophy, principles, Namibia context |
| `/contact` | Contact | Contact hero, email, location, ecosystem links |
| `/brand` | Brand | Logo, colour palette, typography, imagery, tone, motion guidelines |
| `/privacy` | Privacy Policy | 10-section privacy policy |
| `/terms` | Terms of Service | 10-section terms of service |
| `/sitemap-overview` | Site Map | Human-readable complete index of all pages |
| 404 | Not Found | Custom 404 page with homepage and site map links |

## Auto-Generated Routes

| Route | Source |
|-------|--------|
| `/sitemap.xml` | `src/app/sitemap.ts` (MetadataRoute.Sitemap) |
| `/robots.txt` | `src/app/robots.ts` (MetadataRoute.Robots) |
| `/opengraph-image` | `src/app/opengraph-image.tsx` (ImageResponse) |

## Design Tokens Used

- Background: #F0EDE8 (warm off-white)
- Surface: #FFFFFF
- Accent: #2B6B5E (muted teal)
- Ink: #1A1A18 (warm near-black, NO pure #000)
- Hairline: #D4CFC7
- Muted ink: #6B6760
- Teal-text: #F0EDE8 (on teal backgrounds)
- CSS classes: .display, .display-lg, .eyebrow, .container-tangison, .section-spacing, .hairline, .btn-accent, .btn-outline, .nav-link, .image-rail, .reveal, .noise-overlay, .hero-section, .skip-link, .body-constrained, .label

## Motion System

All animations are CSS-based (no framer-motion):
- `.reveal` + `.visible` via IntersectionObserver (useReveal hook)
- `.reveal-left` for directional reveals
- `.reveal-image` for image fade-in
- `.reveal-delay-1` through `.reveal-delay-6` for stagger
- Reduced-motion: all reveals instant via globals.css overrides

## Issues Resolved During Build

1. **seo.ts → seo.tsx**: Converted because JsonLdScript contains JSX
2. **Sitemap route conflict**: `sitemap.ts` and `sitemap/page.tsx` conflicted at `/sitemap`. Resolved by moving human-readable page to `/sitemap-overview`
3. **robots.txt conflict**: `public/robots.txt` and `src/app/robots.ts` conflicted. Resolved by removing static file
4. **setState-in-effect lint warnings**: Added eslint-disable comments for legitimate UI cleanup effects (closing menu on route change, clearing search on dialog close)
5. **Unused eslint-disable directive**: Removed `@next/next/no-img-element` disable since the rule is already off in eslint config

## Lint Status

**CLEAN** — `bun run lint` passes with zero errors or warnings.

## All Routes Return 200 Status

Verified via curl: /, /technology, /company, /contact, /brand, /privacy, /terms, /sitemap-overview, /sitemap.xml, /robots.txt
404 page returns correct 404 status for non-existent routes.
