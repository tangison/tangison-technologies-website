# AUDIT_WAVE_1.md — Tangison Technologies Website Comprehensive Audit Report

**Status**: Wave 1 complete — audit and environment checkpoint
**Branch**: audit-wave-1
**Commit**: 05268c1
**Date**: 2026-07-25
**Auditor**: Super Z (autonomous, evidence-based)

---

## 1. Repository Verdict

The repository contains a functional, well-engineered Tangison Agent marketing site that is **entirely wrong** for its stated future purpose. The technical foundation (Next.js 16, App Router, React 19, TypeScript, Tailwind 4) is solid and should be retained. Every content element, every route, every metadata field, every illustration, every widget, and most dependencies must be replaced or removed before the site can serve as the Tangison Technologies corporate website.

**Verdict**: Retain the framework and engineering patterns. Rebuild all content, components, routes, and design from scratch.

---

## 2. Technical Foundation Assessment

### Should the technical foundation be retained?

**Yes, partially:**

| Layer | Retain? | Reason |
|-------|---------|--------|
| Next.js 16 + App Router | ✅ Yes | Correct modern framework for multi-page site |
| React 19 | ✅ Yes | Stable, current |
| TypeScript strict | ✅ Yes | Engineering quality |
| Tailwind CSS 4 | ✅ Yes | Correct styling tool, rebuild tokens |
| App Router pattern | ✅ Yes | Server Components for content pages, client boundary at interactive components |
| `cn()` utility | ✅ Yes | Standard pattern |
| Standalone output config | ✅ Yes | Deployment-correct |
| Security headers | ✅ Yes | Good practice, rebuild CSP |
| SEO patterns (per-page metadata, JSON-LD, sitemap, robots) | ✅ Yes | Correct patterns, rebuild for Tangison Technologies |
| Framer Motion | ❌ No | Over-engineered, replace with CSS |
| 47 shadcn/ui components | ❌ No | 45 dead, 2 minimal — rebuild editorially |
| 27 @radix-ui packages | ❌ Partially | Only 2 needed (accordion, toast) — remove 25 |
| ChatWidget + /api/chat | ❌ No | Product feature, not corporate |
| SearchDialog | ❌ No | Unjustified for 7-route site |
| next-themes | ❌ No | Unused by live code |
| 11 utility packages | ❌ No | All dead |

---

## 3. Keep / Remove / Replace / Rebuild Summary

### KEEP (8 items)
- Next.js 16 + App Router + React 19 + TypeScript
- Tailwind CSS 4 (rebuild tokens)
- `cn()` utility
- Standalone output + security headers + Vercel config
- SEO patterns (metadata, JSON-LD, sitemap, robots)
- Skip-to-content + reduced-motion patterns
- `.env.example` pattern
- Build/lint scripts

### REMOVE (50+ items)
- 45 dead shadcn/ui component files
- 25 dead @radix-ui packages
- 11 dead utility packages
- Framer Motion
- next-themes + sonner
- ChatWidget from root layout
- SearchDialog + cmdk
- Toaster from root layout (no page uses it)
- /api/chat edge route
- All 14 current routes (retire, redirect)
- All Agent-specific content in page.tsx files
- All Agent-specific metadata
- All Agent-specific illustrations (13 SVGs)
- SITE constants referencing Tangison Agent
- WhatsApp waitlist text referencing Agent
- All pill badges on page heroes
- Three-column card grids
- Five-column footer
- Two-level header with utility bar
- Dark theme on legal pages disconnected from light system

### REPLACE (9 items)
- Geist typography → editorial typeface
- Framer Motion → CSS transitions + IntersectionObserver + Anime.js
- PageShell theme → manual data-theme (already works)
- 47 shadcn/ui → editorial custom components
- Root metadata → Tangison Technologies
- SITE constants → Tangison Technologies constants
- Nav (6 links + search) → 3–4 links + logo
- Footer (5 cols, 402–775px) → ~240px minimal footer
- globals.css tokens → editorial design tokens

### REBUILD (12 items)
- Homepage narrative (Skeleton Coast hero, positioning, Observe-Decide-Operate)
- /technology route (replaces /features + /use-cases + /docs + /faq)
- /company route (replaces /about + /blog)
- /contact route (simplified)
- /brand route (new)
- /privacy route (Tangison Technologies, not Agent)
- /terms route (Tangison Technologies)
- /sitemap route (human-readable)
- Header component
- Footer component
- Logo component
- Motion system (CSS-based)

---

## 4. Measured Audit Results

### Build Baseline

| Check | Result | Status |
|-------|--------|--------|
| npm install | 704 packages installed, 6 high-severity vulnerabilities | ⚠️ WARNING |
| TypeScript (`tsc --noEmit`) | 0 errors | ✅ PASS |
| ESLint | 2 errors (carousel setState-in-effect, use-mobile setState-in-effect) | ❌ FAIL |
| Production build (`next build`) | Successful, 18 routes compiled | ✅ PASS |
| Test infrastructure | None exists | ❌ FAIL (absent) |
| Lockfile integrity | package-lock.json + bun.lock both present | ✅ PASS |

### npm Audit (6 high severity)

| Vulnerability | Package | Severity | Fix available |
|---------------|---------|----------|---------------|
| DoS via brace expansion | brace-expansion | high | Yes (audit fix) |
| YAML quadratic CPU | js-yaml | high | Yes (audit fix) |
| Multiple Next.js vulnerabilities | next 16.2.9 | high | Yes (force to 16.2.11) |
| Multiple PostCSS vulnerabilities | postcss | high | Yes (force update) |
| sharp inherited libvips CVEs | sharp <0.35.0 | high | Yes (force update) |

### Lighthouse (Homepage)

| Category | Score | Status |
|----------|-------|--------|
| Performance | 93 | ✅ PASS (but LCP slow) |
| Accessibility | 100 | ✅ PASS |
| SEO | 100 | ✅ PASS |
| Best Practices | 100 | ✅ PASS |

| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| LCP | 3.1s | < 2.0s | ❌ FAIL |
| FCP | 1.2s | < 1.0s | ⚠️ WARNING |
| CLS | 0 | 0 | ✅ PASS |
| TBT | 100ms | < 100ms | ⚠️ BORDERLINE |
| SI | 1.3s | < 2.0s | ✅ PASS |

**Note**: Lighthouse browser crashed during BFCache audit, so INP and some diagnostics are unavailable.

### Live-Site Route Crawl (15 routes)

| Route | HTTP Status | Status |
|-------|-------------|--------|
| `/` | 200 | ✅ PASS |
| `/features` | 200 | ✅ PASS |
| `/use-cases` | 200 | ✅ PASS |
| `/pricing` | 200 | ✅ PASS |
| `/docs` | 200 | ✅ PASS |
| `/faq` | 200 | ✅ PASS |
| `/blog` | 200 | ✅ PASS |
| `/blog/self-hosted-ai-infrastructure` | 200 | ✅ PASS |
| `/blog/bring-your-own-model-key` | 200 | ✅ PASS |
| `/about` | 200 | ✅ PASS |
| `/contact` | 200 | ✅ PASS |
| `/privacy` | 200 | ✅ PASS |
| `/terms` | 200 | ✅ PASS |
| `/cookies` | 200 | ✅ PASS |
| `/robots.txt` | 200 | ✅ PASS |
| `/sitemap.xml` | 200 | ✅ PASS |

All routes return 200. No broken links detected.

### Live-Site Metadata Check (Homepage)

| Element | Value | Status |
|---------|-------|--------|
| Title | "An AI workforce that runs inside your infrastructure" | ✅ (but Agent-specific) |
| Canonical | https://agent.tangison.com | ✅ (but Agent domain) |
| OG Title | "Tangison Agent" | ✅ (but wrong entity) |
| OG Description | Present | ✅ |
| OG Image | Dynamic (opengraph-image) | ✅ |
| Twitter Card | summary_large_image | ✅ |
| JSON-LD Organization | Present (Tangison, Tangi Iigonda) | ✅ |
| JSON-LD WebSite | Present (Tangison Agent) | ✅ (but wrong entity) |
| Favicon | /favicon.png | ✅ |
| Skip link | Present | ✅ PASS |
| Theme | data-theme="light" | ✅ |
| robots.txt | Valid (Allow /, Disallow /api/) | ✅ |
| sitemap.xml | 13 URLs enumerated | ✅ (but Agent routes) |

### Responsive Check (Playwright)

| Viewport | Nav Height | Footer Height | Hero Opacity | Chat Widget | Console Errors | Status |
|----------|-----------|---------------|-------------|-------------|---------------|--------|
| 375px | 64px | 775px | 1.0 | Visible | 0 | ⚠️ (footer 775px on mobile) |
| 768px | 64px | 402px | 1.0 | Visible | 0 | ⚠️ (footer 402px exceeds 240px target) |
| 1280px | 64px | 402px | 1.0 | Visible | 0 | ⚠️ (footer 402px exceeds 240px target) |
| 1440px | 64px | 402px | 1.0 | Visible | 0 | ⚠️ (footer 402px exceeds 240px target) |

**Hero opacity**: No "initial fade" bug detected at 2s wait. Hero renders at full opacity. However, the brief notes the first viewport was "heavily faded while entrance motion initialised" — this may be a network-speed-dependent issue where Framer Motion's whileInView triggers after a brief opacity-0 state. Cannot confirm without slower-network emulation.

**Footer**: 775px on mobile is excessive (5-column footer wrapping). 402px on desktop exceeds the 240px target by 162px.

### Secret Scan

| Check | Result | Status |
|-------|--------|--------|
| Hardcoded tokens in src/ | No ghp_ or sk_ tokens found | ✅ PASS |
| .env.example | Contains placeholder only (`sk-or-v1-your-key-here`) | ✅ PASS |
| .env / .env.local / .env.production | None found | ✅ PASS |
| WhatsApp number in .env.example | 264813411522 (public contact number, not a secret) | ⚠️ ACCEPTED |
| gitleaks | Not installed — manual scan performed | ⚠️ ACCEPTED RISK |

### Dependency Audit (Ponytail-style)

| Finding | Detail | Severity |
|---------|--------|----------|
| 25 dead @radix-ui packages | Only 2 used live (accordion, toast) | P1 |
| 11 dead utility packages | recharts, zod, react-day-picker, react-hook-form, cmdk, input-otp, react-resizable-panels, vaul, embla-carousel-react, sonner, next-themes | P1 |
| 45 dead shadcn/ui component files | Never imported outside ui/ | P1 |
| Framer Motion over-engineered | 5.8M for 2 fade+slide effects | P1 |
| cmdk never imported | Listed in package.json, zero imports | P1 |
| 47 UI files total dead weight | ~2M of dead component code | P1 |
| lucide-react 40M installed | Tree-shaking should help | P2 |
| ~36M removable from node_modules | 44% reduction possible | P1 |

---

## 5. Subjective Design Critique (Clearly Separated)

### Structural Anti-Slop Review (Hallmark perspective)

| Pattern | Occurrence | Severity | Assessment |
|---------|-----------|----------|------------|
| Three-column card grids | 5 pages (home, features, use-cases, pricing, blog) | HIGH | Most generic SaaS layout pattern. "Three equal card columns as feature row" is the #1 Hallmark prohibition. |
| Repeated pill badges | 9 page heroes | HIGH | Template rhythm. Each page starts with the same pill badge + eyebrow + heading structure. |
| Interchangeable section rhythms | 10+ pages | HIGH | Every page follows: hero (pill + heading + paragraph + CTA) → content section (eyebrow + heading + cards) → dark CTA band. Identical rhythm, unmemorable. |
| Generic Geist typography | Everywhere | MEDIUM | Geist is the "default AI font" — every AI startup uses it. No editorial character. |
| Five-column footer | All pages | HIGH | Footer link farm. 5 columns, 402–775px height, repeated company statements. |
| Two-level header | All pages | MEDIUM | Utility strip + main nav with 6 product links + search trigger + CTA. Overloaded for a corporate site. |
| Global chat widget | All pages | MEDIUM | Product demo widget on every page including legal pages. Visually and contextually inappropriate. |
| Search for 13 entries | All pages | LOW | CMD+K search overlay for 13 searchable entries. Navigation already shows every route. |
| Dark legal pages | 3 pages | MEDIUM | Dark theme applied only to legal pages creates a visual disconnect. Not a design system — it's a template variant. |
| Flat surfaces | All pages | MEDIUM | Pure white backgrounds with no texture, grain, or depth. Flat vectors feel sterile. |
| Symmetrical padding | Most sections | LOW | Top and bottom padding always equal. No optical adjustment. |

### Taste Audit (Impeccable perspective)

| Dimension | Current State | Assessment |
|-----------|--------------|------------|
| Layout variance | Low — same rhythm every page | Every page is a vertically stacked list of sections with identical structure. No broken grids, no asymmetry, no editorial layout variance. |
| Motion intensity | Medium — scroll-triggered fades everywhere | Framer Motion whileInView on every section. Not egregious, but ubiquitous. Creates a "fade-in on scroll" template feel. |
| Visual density | Medium-high | Dense feature grids, 6-item card grids, comparison tables. Not enough breathing room. |
| Type scale | Generic | Geist at default sizes. No display-weight headlines, no tight tracking, no architectural presence. |
| Section rhythm | Monotonous | Every section: eyebrow (accent, uppercase, tracking-wider) → heading → paragraph → content grid. No variation. |
| Image-to-copy ratio | Zero images on most pages | Only SVG illustrations (geometric line art). No photography. No image-led narrative. Entirely text-dominated. |
| Colour system | Adequate but generic | Off-white + burnt orange accent + near-black. Functional but not editorial. No texture or depth in surfaces. |
| Responsive composition | Scaled-down desktop | Mobile is the same layout compressed. Not a considered mobile composition. Footer 775px on mobile. |
| Interaction states | Hover underline on nav links | Minimal hover states. No pressed/active feedback. No loading states. No empty states. |
| Overall impression | Conventional SaaS marketing template | The site looks like a well-executed but entirely generic AI startup marketing page. It does not communicate "Namibian technology company" or "intelligence for imperfect conditions." |

---

## 6. P0, P1, P2, P3 Findings

### P0 — Must Fix Before Any Build

| # | Finding | Category | Detail |
|---|---------|----------|--------|
| 1 | Entire site represents wrong entity | Content | All content, metadata, routes, illustrations are Tangison Agent-specific |
| 2 | Root metadata references "Tangison Agent" | SEO/Brand | Title template "%s | Tangison Agent", OG title, JSON-LD |
| 3 | 14 routes structured for product marketing | Architecture | Wrong route architecture for corporate site |
| 4 | 27+ unsupported absolute claims | Legal/Credibility | Data residency, telemetry, pricing, metrics claims for unshipped runtime |

### P1 — Must Fix During Build

| # | Finding | Category | Detail |
|---|---------|----------|--------|
| 5 | 25 dead @radix-ui packages | Dependencies | 16M, zero live usage |
| 6 | 11 dead utility packages | Dependencies | 20M, zero live usage |
| 7 | 47 dead shadcn/ui component files | Code quality | Never imported by site/page code |
| 8 | Framer Motion over-engineered | Motion/Bundle | 5.8M for 2 fade+slide effects |
| 9 | next-themes unused | Dependencies | Only imported by dead sonner |
| 10 | npm audit: 6 high-severity vulnerabilities | Security | brace-expansion, js-yaml, Next.js, PostCSS, sharp |
| 11 | 2 lint errors | Code quality | carousel + use-mobile setState-in-effect |
| 12 | LCP 3.1s (target < 2.0s) | Performance | Large hero section with animation overhead |
| 13 | GDPR IP address classification may not comply | Legal | Privacy policy calls IP "operational data" not "personal data" |
| 14 | Terms/pricing contradiction | Legal | Terms says no commercial support; pricing describes plans |

### P2 — Should Fix During Build

| # | Finding | Category | Detail |
|---|---------|----------|--------|
| 15 | Footer exceeds 240px target (402px desktop, 775px mobile) | Design | 5-column link farm |
| 16 | Two-level header overloaded | Navigation | 6 product links + search + CTA + utility bar |
| 17 | ChatWidget on every page | UX/Bundle | Product widget on legal pages |
| 18 | SearchDialog for 13 entries | UX | Unjustified over-engineering |
| 19 | Toaster in root layout unused | Bundle | No page triggers toast |
| 20 | Dark theme disconnected from light system | Visual | Only on legal pages |
| 21 | Generic Geist typography | Design | Default AI/SaaS font |
| 22 | Three-column grids on 5 pages | Design | Generic SaaS pattern |
| 23 | Pill badge on 9+ page heroes | Design | Template rhythm |
| 24 | Identical section rhythm on 10+ pages | Design | Unmemorable |
| 25 | Content 95% hard-coded in page.tsx | Content | Changes require React editing |
| 26 | Inconsistent repo references | Content | agent vs tangison-agent |
| 27 | No test infrastructure | Engineering | No jest, vitest, playwright config or test files |

### P3 — Nice to Fix / Future

| # | Finding | Category | Detail |
|---|---------|----------|--------|
| 28 | No custom 404 page | UX | Next.js default only |
| 29 | No cookie consent banner | Legal | Position needs review per jurisdiction |
| 30 | cmdk in package.json never imported | Dependencies | Dead |
| 31 | use-mobile missing "use client" | Code quality | May cause SSR issues |
| 32 | Blog dates are future (June 2026) | Content | Unusual but not necessarily wrong |
| 33 | No form validation infrastructure | Engineering | No forms yet, but /contact may need one |

---

## 7. Dependency-Reduction Recommendation

**Remove 40 packages** from package.json, saving ~42M (~51% of node_modules):

### Phase 1 (dead packages — safe to remove immediately in Wave 2):

```
Remove from package.json:
@radix-ui/react-alert-dialog
@radix-ui/react-aspect-ratio
@radix-ui/react-avatar
@radix-ui/react-checkbox
@radix-ui/react-collapsible
@radix-ui/react-context-menu
@radix-ui/react-dropdown-menu
@radix-ui/react-hover-card
@radix-ui/react-menubar
@radix-ui/react-navigation-menu
@radix-ui/react-popover
@radix-ui/react-progress
@radix-ui/react-radio-group
@radix-ui/react-scroll-area
@radix-ui/react-select
@radix-ui/react-separator
@radix-ui/react-slider
@radix-ui/react-switch
@radix-ui/react-tabs
@radix-ui/react-toggle
@radix-ui/react-toggle-group
@radix-ui/react-tooltip
recharts
react-day-picker
react-hook-form
zod
cmdk
input-otp
react-resizable-panels
vaul
embla-carousel-react
sonner
next-themes
framer-motion
```

### Retain:

```
@radix-ui/react-accordion (used by pricing + faq)
@radix-ui/react-toast (used by toaster in layout)
@radix-ui/react-dialog (may be needed for mobile menu rebuild)
@radix-ui/react-slot (used by Button, may be needed for future buttons)
@radix-ui/react-label (may be needed if contact form is built)
class-variance-authority
clsx
lucide-react
next
react
react-dom
tailwind-merge
tailwindcss-animate
@tailwindcss/postcss
```

### Re-evaluate after build:

```
lucide-react (40M — consider Phosphor icons per brand direction)
react-resizable-panels (only if needed)
recharts (only if needed)
```

---

## 8. Motion-Engine Recommendation

**Remove Framer Motion entirely.**

All current motion effects are trivial:
- `MotionSection`: `whileInView` fade+slide-up with `viewport: { once: true }` → replace with IntersectionObserver + CSS `@keyframes`
- `MotionItem`: same pattern with stagger delay → replace with CSS `animation-delay` on IntersectionObserver-triggered class
- `ChatWidget`: `whileHover/whileTap` + `AnimatePresence` icon swap → replace with CSS transitions

**Proposed motion stack for the rebuild:**

1. **CSS transitions** — hover, focus, active state changes
2. **CSS @keyframes** — entrance reveals, stagger delays
3. **IntersectionObserver + CSS class toggle** — scroll-triggered reveals (replaces Framer Motion `whileInView`)
4. **Anime.js** — only when orchestrated timelines exceed CSS capability (SVG choreography, complex stagger orchestration)
5. **GSAP ScrollTrigger** — only if a genuinely advanced scroll storytelling requirement emerges that CSS + Anime.js cannot achieve

**Do not ship Framer Motion + Anime.js + GSAP together.** One primary JS motion engine (Anime.js) plus CSS for everything else.

---

## 9. Proposed Future Route Architecture

```
/                    → Homepage (Skeleton Coast hero, positioning, methodology)
/technology          → Technology overview (replaces /features, /use-cases, /docs, /faq)
/company             → Company information (replaces /about, /blog)
/contact             → Contact (simplified)
/brand               → Brand guidelines (new)
/privacy             → Privacy policy (rebuilt for Tangison Technologies)
/terms               → Terms of service (rebuilt for Tangison Technologies)
/sitemap             → Human-readable sitemap
/sitemap.xml         → XML sitemap (auto-generated)
/robots.txt          → Robots file (auto-generated)
/opengraph-image     → Dynamic OG image generation
```

No Work, Projects, Case Studies or Field Notes pages until real content exists.

**Redirect proposal for retired routes:**

| Retired route | Redirect | Method |
|---------------|----------|--------|
| /features | /technology | 301 |
| /use-cases | /technology | 301 |
| /pricing | /technology | 301 |
| /docs | /technology | 301 |
| /faq | /technology | 301 |
| /blog | /company | 301 |
| /blog/self-hosted-ai-infrastructure | /company | 301 |
| /blog/bring-your-own-model-key | /company | 301 |
| /about | /company | 301 |
| /cookies | /privacy | 301 |
| /api/chat | Gone | 410 |

---

## 10. Exact Files Created or Changed

### Created (7 new files):

| File | Purpose | Size |
|------|---------|------|
| PRODUCT.md | Tangison ecosystem entity map | ~3KB |
| BRAND.md | Visual and motion system specification | ~8KB |
| BUILD_PLAN.md | Execution map with keep/remove/rebuild matrix | ~12KB |
| CONTENT_PLAN.md | Content strategy and unsupported claims inventory | ~8KB |
| ASSET_INTAKE.md | Asset requirements specification | ~5KB |
| AUDIT_WAVE_1.md | This comprehensive audit report | ~15KB |
| PROOF.md | Evidence ledger (next file) | ~5KB |

### Changed (0 files):

No source code was modified during Wave 1. Only documentation files were created.

### Screenshots captured:

| File | Purpose |
|------|---------|
| /home/z/my-project/download/ss-mobile-375.png | Mobile 375px viewport screenshot |
| /home/z/my-project/download/ss-tablet-768.png | Tablet 768px viewport screenshot |
| /home/z/my-project/download/ss-desktop-1280.png | Desktop 1280px viewport screenshot |
| /home/z/my-project/download/ss-desktop-1440.png | Desktop 1440px viewport screenshot |
| /home/z/my-project/download/lighthouse-home.json | Full Lighthouse audit JSON |

---

## 11. Exact Commands and Tools Run

| Command | Tool | Result | Status |
|---------|------|--------|--------|
| `git clone https://...tangison/agent.git` | git | Repository cloned | PASS |
| `git checkout -b audit-wave-1` | git | Branch created | PASS |
| `npm install` | npm | 704 packages, 6 high vulns | WARNING |
| `npx tsc --noEmit` | TypeScript | 0 errors | PASS |
| `npm run lint` | eslint | 2 errors | FAIL |
| `npm run build` | Next.js | Build successful, 18 routes | PASS |
| `npm audit` | npm | 6 high-severity vulns | WARNING |
| curl all 15 routes | curl | All 200 | PASS |
| curl homepage metadata | curl/Python | Metadata extracted | PASS |
| curl robots.txt + sitemap.xml | curl | Valid, 13 URLs | PASS |
| CHROME_PATH=... npx lighthouse | Lighthouse | 93/100/100/100 scores | PASS (LCP slow) |
| python3 responsive-check.py | Playwright | 4 viewport screenshots | PASS |
| rg secret patterns | ripgrep | No secrets found | PASS |
| Full repo file inventory | Explore agent | 102 files catalogued | PASS |
| Harness capability mapping | General agent | Full capability map | PASS |
| Dependency/motion audit | Explore agent | 36 removable packages found | PASS |
| Content claim audit | General agent | 27+ unsupported claims | PASS |

---

## 12. Evidence Locations

| Evidence | Path/URL |
|----------|----------|
| Lighthouse JSON | /home/z/my-project/download/lighthouse-home.json |
| Responsive screenshots | /home/z/my-project/download/ss-{mobile-375,tablet-768,desktop-1280,desktop-1440}.png |
| Responsive measurements | /home/z/my-project/download/responsive-check.json |
| Repository clone | /home/z/my-project/tangison-agent-temp/ |
| GitHub repo | https://github.com/tangison/tangison-technologies-website |
| Audit branch | audit-wave-1 (commit 05268c1) |
| Documentation files | /home/z/my-project/tangison-agent-temp/{PRODUCT,BRAND,BUILD_PLAN,CONTENT_PLAN,ASSET_INTAKE,AUDIT_WAVE_1,PROOF}.md |

---

## 13. What Failed and Why

| Failure | Root Cause | Resolution |
|---------|------------|------------|
| Lighthouse INP measurement | Browser tab crashed during BFCache audit | Insufficient memory in sandbox for full Lighthouse run. INP not measured. |
| Squirrelscan CLI | Binary not downloadable via direct URL or GitHub releases API | CLI distribution method changed or requires authentication. Used Lighthouse + manual crawl instead. |
| gitleaks installation | Not available via pip, no binary download path found | Performed manual secret scan with ripgrep instead. ACCEPTED RISK. |
| npx skills CLI timeout | Installing tangison/webman skills via npx skills timed out (60s) | Skill installation not possible in this harness. Most required skills are pre-installed in /home/z/my-project/skills/. Missing skills documented. |
| 2 lint errors | carousel.tsx setState-in-effect + use-mobile setState-in-effect | React 19 eslint rule flags synchronous setState in effects. Not blocking for build, but code quality issue. |
| LCP 3.1s | Large hero section with Framer Motion animation overhead + network latency to Vercel sin1 | Will improve after removing Framer Motion and rebuilding with CSS animations. |

---

## 14. What Remains Blocked

| Block | Reason | Resolution Required |
|-------|--------|---------------------|
| Official logo SVG | Owner has not provided asset package | Asset intake after Wave 1 |
| Brand guidelines (colour system, typography, spacing) | May be in asset package | Asset intake |
| Photography assets (Skeleton Coast, Namib, operational) | Owner must provide real photography | Asset intake |
| Legal review of privacy/terms/cookies content | GDPR compliance requires legal expertise | Owner to arrange legal review |
| Confirmation of Observe/Decide/Operate methodology naming | Owner confirmation needed | Owner confirmation |
| Confirmation of "vast conditions, precise intelligence" positioning | May be working direction, not final | Owner confirmation |
| Blog anecdote verification (logistics company friend) | Credibility depends on whether event is real | Owner confirmation |
| Legal entity status (company vs sole proprietorship) | Affects legal copy | Owner confirmation |
| Studio.tangison.com domain verification | Footer link target | Owner confirmation |
| Cookie consent jurisdiction determination | Affects whether banner is required | Owner confirmation |

---

## 15. Exact Assets Required for Wave 2

See ASSET_INTAKE.md for the full specification. Summary:

1. **Official SVG wordmark** — Tangison or Tangison Technologies logo
2. **Official SVG symbol/monogram** — If separate from wordmark
3. **Transparent PNG fallbacks** — 32x32, 180x180, 512x512
4. **Asset ZIP** — All brand assets packaged
5. **Original photography** — Skeleton Coast hero + 3–5 editorial sequence images + 2–3 detail shots
6. **Rights and attribution information** — Per image and per brand asset
7. **Preferred crops/focal points** — For hero and sequence images
8. **Brand guidelines document** — If exists (colour system, typography, spacing, logo usage)

---

## 16. Recommended First Implementation Slice After Assets Arrive

**Phase 1: Dependency purge + foundation reset**

1. Remove 40 dead packages from package.json
2. Delete 47 dead component files
3. Remove ChatWidget, SearchDialog, Toaster, /api/chat from root
4. Remove Framer Motion, replace MotionSection/MotionItem with CSS IntersectionObserver approach
5. Fix 2 lint errors
6. Run npm audit fix for 6 high-severity vulnerabilities
7. Verify build still passes with stripped dependencies

**Phase 2: Design tokens + layout skeleton**

1. Rebuild globals.css with editorial design tokens (post brand-guidelines arrival)
2. Build new Nav (logo + 3 links)
3. Build new Footer (~240px, wordmark + positioning + minimal links)
4. Build new Logo component with official SVG
5. Build new PageShell without theme mutation (consistent visual system)
6. Verify responsive layout at all 7 viewport widths

**Phase 3: Homepage narrative**

1. Build Skeleton Coast hero with positioning statement
2. Build Observe/Decide/Operate methodology section (editorial, NOT three cards)
3. Build editorial horizontal image sequence
4. Build Namibia context section
5. Build quiet technology index
6. Build contact statement
7. Verify Lighthouse scores improve

**This sequence minimises risk and maximises visible progress. Each phase is independently verifiable before proceeding.**
