# AUDIT_WAVE_4.md — Production Audit, Agent Discontinuation Announcement, and Pre-Rebuild Readiness

**Status**: Complete (audit + fixes + announcement delivered, deployment pending owner approval)
**Date**: 2026-08-23
**Branch**: main (local commit, not yet pushed)
**Live target**: https://www.tangison.com (apex 308-redirects to www)
**Repo**: github.com/tangison/tangison-technologies-website
**Vercel project**: tangison-technologies-website (prj_SQEebTIElefHUbgQ1kfMHH2PqWO8), domains tangison.com + www.tangison.com
**Auditor**: Arena.ai agent, Tangison skill stack (tangison-web-build preflight, tangison-web-audit scope, full-output enforcement)

---

## 1. Scope of this wave

1. Pull the tangison.com website from GitHub and cross-verify the GitHub to Vercel mapping.
2. Full production audit of the live site and the repository (code, build, security, SEO, accessibility, content, dependencies, documentation).
3. Add a site-wide announcement that agent.tangison.com (Tangison Agent) is being discontinued and that the tangison.com website is being restructured and rebuilt.
4. Readiness notes for the planned full restructure and rebuild of the site.

Locked deliverable count: 6 (announcement bar, nav and shell wiring, lint fix, seven canonical fixes, documentation fixes, evidence ledger). All six delivered.

---

## 2. Repository and platform identification

| Check | Method | Result |
|-------|--------|--------|
| GitHub identity | GET api.github.com/user | login `tangison`, 51 repositories |
| Vercel identity | GET api.vercel.com/v2/user | `tangison-47` (tangison@proton.me), team `team_rd7rpL7DUcxil6SJCTCRCEug` |
| Domain to project mapping | GET api.vercel.com/v2/projects/{id}/domains | tangison.com + www.tangison.com -> project `tangison-technologies-website` |
| Project to repository mapping | Repo cross-check against live content | github.com/tangison/tangison-technologies-website (public, branch main) |
| Clone | git clone with provided token | Clean tree, 112eb04 at HEAD before changes |
| Related properties checked | curl | agent.tangison.com live (200), studio.tangison.com live (200) |

Note: the `tangison/tangison` repository ("TANGISON SYSTEMS") is a different site and is not what serves tangison.com. This was confirmed against the live sitemap, matching the pivot documented in the 2026-08-08 worklog.

---

## 3. Findings

### 3.1 Fixed in this wave

| # | Severity | Finding | Location | Fix | Verification |
|---|----------|---------|----------|-----|--------------|
| W4-1 | P1 | `npm run lint` failed on main with 1 error: `react-hooks/set-state-in-effect` (setState called synchronously in a pathname effect) | src/components/shared/contact-cluster.tsx:54 | Replaced the effect with the React-recommended render-time state reset (`prevPathname` ref-state pattern) | `npm run lint` -> 0 problems; `npx tsc --noEmit` -> 0 errors; production build 15/15 routes |
| W4-2 | P1 | Seven subpages declared the homepage URL as their canonical, so each page told search engines the home page is its canonical version. Only /careers set a page-level canonical. The root layout's `alternates: { canonical: SITE.siteUrl }` leaks into every page that does not override it | /technology, /company, /brand, /contact, /privacy, /terms, /sitemap (live HTML `<link rel="canonical">` all pointed at https://www.tangison.com) | Added `alternates: { canonical: "/<path>" }` to each of the seven page metadata blocks | Build output: all 9 pages emit their own absolute canonical (e.g. /brand -> https://www.tangison.com/brand), verified in .next/server/app/*.html and on the local production server |
| W4-3 | P3 | README route list said "8 page routes" and omitted /careers (the site has 9 page routes) | README.md | Corrected to 9 routes, added /careers | File diff |
| W4-4 | P3 | llms.txt listed 8 pages and omitted /careers, which is a public route and is in sitemap.xml | public/llms.txt | Added the Careers line, wording taken from the page's own description | File diff |

### 3.2 Flagged for the planned restructure and rebuild (not changed in this wave)

| # | Severity | Finding | Evidence | Recommended action during rebuild |
|---|----------|---------|----------|-----------------------------------|
| W4-5 | P1 (time-bound) | Tangison Agent discontinuation leaves live references that will point at a retired site. External links to https://agent.tangison.com: 4 across pages (home ecosystem card, /technology "Visit Tangison Agent" CTA, footer context). Internal references: /technology#agent section with full product copy, "Tangison Agent" entry on the /sitemap page, JSON-LD `subOrganization` entry in src/lib/seo.tsx, 2 mentions in public/llms.txt, copy mentions in /company, /contact, /privacy, /terms, and the Technology nav dropdown | grep across src/ and public/, live HTML crawl | Decide the end state of agent.tangison.com (soft 404, redirect to tangison.com/technology#agent, or a final notice page in the tangison/agent repo). Then remove or re-point every reference above in one coordinated pass. The homepage ecosystem card currently promotes the discontinued product as a current entity, which conflicts with the announcement bar until this is resolved |
| W4-6 | P2 | Six high + one moderate npm audit vulnerabilities, all transitive: next <16.2.11 (middleware bypass, Server Actions DoS), sharp <0.35.0 (libvips CVEs), postcss (file read), nanoid, js-yaml, brace-expansion. Same count as the Wave 1 baseline, so this is a known chronic item | `npm audit --json` 2026-08-23 | Practical exposure on this site is low: no middleware, no Server Actions, all routes static, no API routes. Still, a one-line `next@^16.2.11` + `sharp@^0.35` bump in the rebuild resolves the two highest-impact advisories |
| W4-7 | P2 | BUILD_PLAN.md recommended removing framer-motion (replace with CSS + IntersectionObserver). The rebuild retained it, and four reveal components plus tabs use it (clip-reveal, stagger-reveal, zoom-reveal, tabs, carousel via embla) | grep -rn "framer-motion" src/ | Documented plan deviation. If the rebuild keeps the motion system, update BUILD_PLAN.md to match reality; if not, proceed with the planned removal |
| W4-8 | P3 | Announcement bar is part of PageShell, so the branded 404 and error pages intentionally do not show it | src/app/not-found.tsx, src/app/error.tsx | Acceptable by design (both pages are standalone, minimal, no nav or footer). If the owner wants the notice on every response including 404, it can be moved into the root layout in the rebuild |
| W4-9 | P3 | The 404 page copyright uses `new Date().getFullYear()` at render time while the build is static; harmless today but a latent inconsistency | src/app/not-found.tsx | Cosmetic. No action required unless the rebuild standardises footer/legal metadata |

---

## 4. Announcement implementation (owner-approved content)

**Copy (exact, as rendered):**

> NOTICE
> agent.tangison.com is being discontinued. tangison.com is being restructured and rebuilt.

**Placement and behaviour**

| Aspect | Implementation |
|--------|----------------|
| Component | src/components/site/announcement-bar.tsx (new, server component, no client state) |
| Mount point | PageShell, above Nav, so all 9 page routes render it; verified in build output for all 9 pages |
| Position | Fixed full-width strip at the top of the viewport, z-40, above the floating nav pill |
| Heights | --announce-h-mobile: 44px (two 13px lines), --announce-h: 40px (single line), tokens in src/app/globals.css |
| Nav offset | Floating header moved from top-3/top-4 to top-[calc(var(--announce-h-mobile)+12px)] / md:top-[calc(var(--announce-h)+16px)], preserving the original 12px/16px float offset |
| Content offset | main padding-top increased by the bar height: pt-[calc(var(--announce-h-mobile) + var(--nav-height-mobile) + 20px)] / md:pt-[calc(var(--announce-h) + var(--nav-height) + 24px)] |
| Visuals | Uses existing design tokens only: bg var(--ink), text var(--bg) (contrast 15:1), mono uppercase "NOTICE" label at 60% opacity, 13px body text, no new colours, radii, or components |
| Accessibility | role="status" (polite live region, announced on page load), no new focusable elements, no motion |
| Reduced motion | Not applicable (static bar) |
| Copy rules | No em dashes, no placeholders, no fabricated dates. No launch date or agent-site end date is stated because none was approved |

---

## 5. Verification gate (post-fix)

| Gate | Command | Result |
|------|---------|--------|
| Lint | npm run lint | 0 errors, 0 warnings |
| Typecheck | npx tsc --noEmit | 0 errors |
| Production build | npm run build | 15/15 routes, all static |
| Banner on every page | grep role="status" + exact text in .next/server/app/*.html | 9/9 pages, one instance each |
| Per-page canonical | grep canonical in build output | 9/9 pages correct (was 2/9 before W4-2) |
| Local production server | node .next/standalone/server.js on 0.0.0.0:3000 | Home and subpages serve banner, corrected canonical, and compiled CSS tokens |
| CSS compilation | served CSS chunk | --announce-h-mobile:44px and --announce-h:40px present, calc() utilities compiled |

---

## 6. Verified healthy (live, pre-change baseline, reconfirmed against build)

| Area | Check | Result |
|------|-------|--------|
| Routes | 9 public routes | All 200 |
| Legacy redirects | /features /use-cases /pricing /docs /faq -> /technology, /blog /about -> /company, /cookies -> /privacy | All 308 to correct targets |
| 404 | Unknown path | 404 with branded page |
| Apex | tangison.com | 308 to https://www.tangison.com/ |
| Security headers | CSP, X-Frame-Options DENY, nosniff, HSTS preload, Referrer-Policy, Permissions-Policy | All present, X-Powered-By absent |
| Caching | HTML max-age=60 swr=300, /images 1d swr 7d, fonts immutable | Correct |
| SEO | Title, description, OG (5-6 tags), Twitter card, JSON-LD (2-4 blocks), og:image resolvable (200) | Pass |
| Sitemap | sitemap.xml | 9 URLs, home without trailing slash (matches canonical) |
| robots.txt | Live | Clean, sitemap referenced |
| Accessibility | Exactly one h1 per page, 0 images missing alt, skip link, aria labels on nav and menu, focus trap in off-canvas menu, reduced-motion handling in loading screen | Pass |
| Page weight | HTML per page | 39-62 KB |
| External links | studio.tangison.com (14 refs), agent.tangison.com (4 refs), wa.me (8 refs) | All resolve (agent ref flagged W4-5 for the discontinuation) |
| Content | No lorem ipsum, no fabricated testimonials or metrics found in page copy | Pass |
| Secrets | No credentials in src/ or public/ | Pass |

---

## 7. Deployment state and next steps

- Changes are committed locally on main (two commits: code and docs, then the evidence ledger). Nothing has been pushed.
- Pushing to origin/main triggers Vercel auto-deploy to tangison.com and www.tangison.com. Because the announcement is a public business statement, the push is held for explicit owner approval.
- After approval: push, wait for the Vercel build (typically under two minutes), then re-run the live checks from section 5 against https://www.tangison.com (banner on 9/9 pages, per-page canonical, headers) and record live evidence in PROOF.md.
- The W4-5 agent reference pass and the W4-6 dependency bump belong to the planned restructure and rebuild scope.
