# BUILD_PLAN.md — Tangison Technologies Website Build Execution Map

**Status**: Wave 1 audit documentation — execution map, not ceremonial proposal
**Last updated**: 2026-07-25

---

## Current Architecture

| Layer | Technology | Status |
|-------|-----------|--------|
| Framework | Next.js 16.2.9 (App Router) | Retain framework, rebuild content |
| React | 19.2.0 | Retain |
| TypeScript | Strict mode | Retain |
| Styling | Tailwind CSS 4 + CSS variables | Retain Tailwind, rebuild design tokens |
| Fonts | Geist Sans + Geist Mono (next/font) | Replace typography selection |
| Animation | Framer Motion 12.40 | **Remove** — replace with CSS + IntersectionObserver |
| UI components | 49 shadcn/ui files (only 2 used live) | **Remove 47 dead**, rebuild needed components editorially |
| State | next-themes 0.4.6 | **Remove** — only used by dead sonner component |
| Chat | ChatWidget (framer-motion, fetches /api/chat) | **Remove from root layout** — product widget, not corporate |
| Search | SearchDialog (cmdk-based, 13 entries) | **Remove** — unjustified for 7-route corporate site |
| SEO | Per-page metadata, JSON-LD, sitemap.ts, robots.ts | **Retain pattern, rebuild for Tangison Technologies** |
| Deployment | Vercel (sin1 region), standalone output | **Retain config, rebuild content** |
| API | /api/chat edge route (OpenRouter proxy) | **Remove** — product feature, not corporate need |

### Dependency Surface

- **27 @radix-ui packages** — only 2 used live (accordion, toast)
- **11 dead utility packages** — recharts, zod, react-day-picker, react-hook-form, cmdk, input-otp, react-resizable-panels, vaul, embla-carousel-react, sonner, next-themes
- **1 over-engineered animation engine** — framer-motion (5.8M for 2 fade+slide effects)
- **~36M removable from node_modules** (44% reduction possible)

---

## Proposed Architecture

| Layer | Technology | Change |
|-------|-----------|--------|
| Framework | Next.js 16 (App Router) | Keep |
| React | 19 | Keep |
| TypeScript | Strict | Keep |
| Styling | Tailwind CSS 4 + rebuilt design tokens | Rebuild tokens |
| Fonts | Editorial heading + clean body (post-asset-intake) | Replace |
| Animation | CSS transitions + IntersectionObserver + Anime.js (when needed) | Replace framer-motion |
| UI components | Editorial custom components only | Rebuild from scratch |
| Theme | Manual data-theme attribute (no next-themes) | Simplify |
| Chat | None at root level | Remove |
| Search | None | Remove |
| SEO | Per-page metadata, JSON-LD, sitemap, robots | Rebuild for Tangison Technologies |
| Deployment | Vercel standalone | Keep |
| API | None required for corporate site | Remove /api/chat |

---

## Keep / Remove / Replace / Rebuild Matrix

### KEEP

| Item | Reason |
|------|--------|
| Next.js 16 + App Router | Strong framework, App Router is the right pattern for a multi-page corporate site |
| React 19 | Current, stable |
| TypeScript strict mode | Correct engineering practice |
| Tailwind CSS 4 | Right tool, rebuild tokens not framework |
| `cn()` utility (clsx + tailwind-merge) | Standard, useful |
| `output: "standalone"` in next.config.ts | Deployment-correct |
| Security headers (CSP, HSTS, X-Frame-Options, etc.) | Good practice, rebuild CSP for corporate context |
| Vercel deployment config (region sin1) | Keep unless owner requests change |
| Per-page metadata pattern | Correct SEO practice |
| JSON-LD structured data pattern | Correct, rebuild for Tangison Technologies |
| sitemap.ts pattern | Correct, rebuild route list |
| robots.ts pattern | Correct, rebuild for corporate domain |
| Skip-to-content link pattern | Accessibility requirement |
| Reduced-motion CSS block | Accessibility requirement |
| `.env.example` pattern | Good practice, rebuild vars for corporate site |

### REMOVE

| Item | Reason | Severity |
|------|--------|----------|
| Framer Motion dependency | Over-engineered for fade+slide effects; replace with CSS | P1 |
| 25 dead @radix-ui packages | Zero live usage outside dead UI components | P1 |
| 11 dead utility packages (recharts, zod, etc.) | Zero live usage | P1 |
| 47 dead shadcn/ui component files | Never imported by site/page code | P1 |
| ChatWidget from root layout | Product demo widget, inappropriate for corporate root | P2 |
| SearchDialog + cmdk | 13 entries searchable — unjustified for 7-route site | P2 |
| next-themes | Only used by dead sonner component | P1 |
| sonner package | Dead | P1 |
| Toaster from root layout | No page triggers a toast | P2 |
| /api/chat edge route | Product feature, not corporate | P2 |
| All Agent-specific content in page.tsx files | Wrong entity — product, not company | P0 |
| All Agent-specific metadata (title template, OG, etc.) | Wrong entity | P0 |
| All Agent-specific illustrations | Product-specific SVGs | P0 |
| SITE.name = "Tangison Agent" | Wrong entity | P0 |
| WhatsApp waitlist text referencing Agent | Wrong entity | P0 |
| All pill badges on every hero | Generic SaaS pattern | P2 |
| Three-column card grid pattern | Generic SaaS pattern | P2 |
| Five-column footer | Exceeds 240px target, link farm | P2 |
| Two-level header with utility bar | Excessive for corporate site | P2 |
| Dark theme on legal pages disconnected from light pages | Visual inconsistency | P2 |
| All 14 current routes (see redirect proposal below) | Wrong route architecture | P0 |

### REPLACE

| Item | Replacement | Reason |
|------|------------|--------|
| Geist Sans font | Editorial heading typeface (post-asset-intake) | Geist is the default AI/SaaS font |
| Geist Mono font | Keep for code contexts only, or replace per brand guidelines | Adequate for mono use |
| Framer Motion | CSS transitions + IntersectionObserver + Anime.js (when needed) | Remove 5.8M runtime, achieve same effects with CSS |
| PageShell theme mutation | Manual data-theme attribute (already works) | next-themes was never actually used |
| 47 shadcn/ui components | Editorial custom components built for the corporate site | shadcn is a UI kit, not an editorial design system |
| Root metadata ("Tangison Agent") | Tangison Technologies metadata | Wrong entity |
| SITE constants | Tangison Technologies site constants | Wrong entity |
| Nav (6 links + search) | 3–4 links (Technology, Company, Contact) + logo | Overloaded for corporate site |
| Footer (5 columns, 402–775px) | ~240px footer with wordmark + positioning + minimal links | Exceeds target |
| globals.css tokens | Rebuilt design tokens for editorial visual system | SaaS tokens, not editorial |

### REBUILD

| Item | Approach |
|------|----------|
| Homepage | Skeleton Coast-led hero, one positioning statement, Observe-Decide-Operate system, editorial image sequence, Namibia context, quiet tech index, contact statement |
| /technology route | Replaces /features + /use-cases + /docs |
| /company route | Replaces /about + /blog |
| /contact route | Replaces /contact (simplified) |
| /brand route | New — brand guidelines and identity reference |
| /privacy route | Rebuild legal content for Tangison Technologies (not Agent) |
| /terms route | Rebuild legal content for Tangison Technologies |
| /sitemap route | Human-readable sitemap page |
| Header | Minimal: logo + Technology + Company + Contact |
| Mobile header | Logo + menu button + simple list, inert when closed |
| Footer | Wordmark, positioning line, Windhoek Namibia, email, minimal links, "Made by Tangison Studio" |
| 404 page | Branded, helpful "not found" experience |
| All illustrations | Remove Agent-specific SVGs, rebuild with photography-led approach |
| All motion | CSS-based, Anime.js when orchestrated timelines are needed |

---

## Route Retirement and Redirect Proposal

### Current routes → proposed destination

| Current route | Proposed redirect target | Method |
|---------------|------------------------|--------|
| `/` | `/` (rebuilt homepage) | 200 — new content |
| `/features` | `/technology` | 301 |
| `/use-cases` | `/technology` | 301 |
| `/pricing` | `/technology` (pricing section) | 301 |
| `/docs` | `/technology` | 301 |
| `/faq` | `/technology` (FAQ section) | 301 |
| `/blog` | `/company` | 301 |
| `/blog/self-hosted-ai-infrastructure` | `/company` | 301 |
| `/blog/bring-your-own-model-key` | `/company` | 301 |
| `/about` | `/company` | 301 |
| `/contact` | `/contact` (rebuilt) | 200 — new content |
| `/privacy` | `/privacy` (rebuilt) | 200 — new content |
| `/terms` | `/terms` (rebuilt) | 200 — new content |
| `/cookies` | `/privacy` (cookies section) | 301 |
| `/api/chat` | Remove | 410 Gone |

**Do not apply redirects during Wave 1.** Document only. Apply during implementation after replacement passes release gates.

### Proposed future route architecture

```
/
/technology
/company
/contact
/brand
/privacy
/terms
/sitemap
/sitemap.xml
/robots.txt
/opengraph-image (dynamic)
```

No Work, Projects, Case Studies or Field Notes pages until real content exists.

---

## Dependency-Reduction Opportunities

| Phase | Action | Packages Removed | Size Saved |
|-------|--------|------------------|------------|
| Wave 2 pre-build | Delete 47 dead shadcn/ui component files | 0 packages (code only) | Code bloat |
| Wave 2 pre-build | Delete 25 dead @radix-ui packages from package.json | 25 | ~16M |
| Wave 2 pre-build | Delete 11 dead utility packages | 11 | ~20M |
| Wave 2 pre-build | Remove framer-motion | 1 | ~5.8M |
| Wave 2 pre-build | Remove next-themes, sonner, cmdk | 3 | ~368K |
| Wave 2 pre-build | Remove /api/chat route and ChatWidget | 0 (code only) | Client bundle |
| Post-build verify | Audit remaining dependencies for further reduction | TBD | TBD |
| **Total** | | **40 packages** | **~42M (~51%)** |

---

## Audit Findings Ordered by Severity

### P0 — Must Fix Before Any Build

| # | Finding | Impact |
|---|---------|--------|
| 1 | All content is Agent-specific, not company-specific | Entire site represents wrong entity |
| 2 | Root metadata, title template, OG all reference "Tangison Agent" | SEO, social sharing, brand confusion |
| 3 | 14 routes structured for product marketing, not corporate | Wrong architecture |
| 4 | 27+ unsupported absolute claims about unshipped runtime | Legal, credibility risk |

### P1 — Must Fix During Build

| # | Finding | Impact |
|---|---------|--------|
| 5 | 25 dead @radix-ui packages (16M) | Bundle size, security surface, maintenance burden |
| 6 | 11 dead utility packages (20M) | Same |
| 7 | 47 dead shadcn/ui component files | Code clutter, lint noise |
| 8 | Framer Motion over-engineered (5.8M for 2 effects) | Bundle, runtime, maintenance |
| 9 | next-themes unused by live code | Unnecessary dependency |
| 10 | npm audit: 6 high-severity vulnerabilities (brace-expansion, js-yaml, Next.js, PostCSS, sharp) | Security |
| 11 | 2 lint errors (carousel, use-mobile setState-in-effect) | Code quality |
| 12 | LCP 3.1s (target < 2.0s) | Performance |
| 13 | Hero initial render may fade before animation initialises | Visual, performance |
| 14 | GDPR classification of IP addresses as "operational data" may not comply | Legal risk |
| 15 | Terms/pricing contradiction (terms says no commercial support; pricing describes plans) | Legal, credibility |

### P2 — Should Fix During Build

| # | Finding | Impact |
|---|---------|--------|
| 16 | 5-column footer exceeds 240px target (775px mobile, 402px desktop) | Design, UX |
| 17 | Two-level header with utility bar + 6 product links + search | Overloaded navigation |
| 18 | ChatWidget on every page including legal pages | UX, bundle, inappropriate context |
| 19 | SearchDialog for 13 entries | Over-engineered |
| 20 | Toaster in root layout with no page triggering toast | Unnecessary |
| 21 | Dark theme on legal pages disconnected from light system | Visual inconsistency |
| 22 | Generic Geist typography | Default AI look |
| 23 | Three-column card grid pattern on 5 pages | Generic SaaS pattern |
| 24 | Pill badge on 9+ page heroes | Repetitive template rhythm |
| 25 | Identical section rhythm on 10+ pages | Interchangeable, unmemorable |
| 26 | 95% of content hard-coded in page.tsx files | Content changes require React editing |
| 27 | Inconsistent repo references (agent vs tangison-agent) | Confusing |
| 28 | No test infrastructure (no jest/vitest config, no test files) | Engineering quality |

### P3 — Nice to Fix / Future Improvement

| # | Finding | Impact |
|---|---------|--------|
| 29 | No custom 404 page | UX |
| 30 | No form validation (no forms exist yet, but /contact may need one) | Future |
| 31 | No cookie consent banner (legal position needs review per jurisdiction) | Legal |
| 32 | Blog post dates are future (June 2026) | Unusual but not necessarily wrong |
| 33 | CMDK package in package.json but never imported | Dead dependency |
| 34 | use-mobile hook lacks "use client" directive (may cause SSR issues) | Code quality |

---

## Implementation Sequence After Asset Intake

| Phase | Scope | Dependencies |
|-------|-------|-------------|
| **Phase 0**: Asset intake | Receive logo, brand guidelines, photography | Owner action |
| **Phase 1**: Dependency purge | Remove 40 dead packages, 47 dead component files, framer-motion, ChatWidget, SearchDialog, Toaster | None |
| **Phase 2**: Foundation rebuild | Rebuild globals.css tokens, typography, layout.tsx, PageShell, Nav, Footer, Logo | Phase 0 (logo) |
| **Phase 3**: Homepage rebuild | Hero, positioning statement, Observe-Decide-Operate, editorial sequence, contact | Phase 0 (images) + Phase 2 |
| **Phase 4**: Route rebuild | /technology, /company, /contact, /brand, /privacy, /terms | Phase 2 + Phase 3 |
| **Phase 5**: Motion system | CSS transitions, IntersectionObserver, Anime.js for orchestrated effects | Phase 2 |
| **Phase 6**: SEO and metadata | Rebuild per-page metadata, JSON-LD, sitemap, robots for Tangison Technologies | Phase 4 |
| **Phase 7**: Redirect configuration | 301 redirects for retired Agent routes | Phase 6 |
| **Phase 8**: Quality gates | Lighthouse, axe-core, responsive testing, performance audit, Hallmark review | All phases |
| **Phase 9**: Deployment staging | Deploy to preview domain, verify, then switch production | Phase 8 |

---

## Test and Release Gates

| Gate | Tool | Threshold | Current |
|------|------|-----------|---------|
| Lighthouse Performance | Lighthouse CLI | ≥ 90 | 93 ✅ |
| Lighthouse Accessibility | Lighthouse CLI | ≥ 95 | 100 ✅ |
| Lighthouse SEO | Lighthouse CLI | ≥ 95 | 100 ✅ |
| Lighthouse Best Practices | Lighthouse CLI | ≥ 95 | 100 ✅ |
| LCP | Lighthouse | < 2.0s | 3.1s ❌ |
| CLS | Lighthouse | 0 | 0 ✅ |
| INP | Lighthouse | < 200ms | N/A (crash) |
| Axe-core accessibility | Playwright + axe | 0 violations | Not yet run |
| Bundle size | next build analysis | < 150KB JS compressed | TBD after rebuild |
| Type-check | tsc --noEmit | 0 errors | 0 ✅ |
| Lint | eslint | 0 errors | 2 ❌ |
| Hallmark structural review | Hallmark skill | No anti-slop violations | TBD |
| Impeccable visual review | Impeccable skill | No design violations | TBD |
| Responsive | Playwright | All viewports render correctly | Screenshots captured |
| Reduced motion | Playwright | Content fully visible with reduced-motion | TBD |
| Keyboard navigation | Manual + axe | All controls reachable, focus visible | TBD |
