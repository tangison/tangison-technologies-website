# DESIGN.md — Tangison Technologies Rebuild (Wave 8+)

## Design read

Reading this as: a B2B systems company site for Namibian public-sector and
enterprise buyers, dual register: Collins-restrained editorial for
Company/Products/Case Studies/Insights/Legal, Vercel/DigitalOcean-dense
technical for Solutions/Process/Open-Source, on the existing Next.js 16 +
Tailwind 4 + Satoshi/Geist Mono stack (brand-locked, no new fonts).

Dials: editorial clusters VARIANCE 5 / MOTION 3 / DENSITY 3; systems
clusters VARIANCE 6 / MOTION 4 / DENSITY 7.

## Palette (locked per cluster, per 04-design-system/design-tokens.md)

- Editorial (Namib register): base #F2EDE4 (dune-grounded warm neutral),
  surface #FBF8F2, ink #1B1A17 (deep charcoal), muted #6E675C, hairline
  #D8CFBF, single accent #2B6B5E (brand teal, the accent repeated in the
  brand's own generated plates).
- Systems light: base #F4F5F7, surface #FFFFFF, ink #16181D, chrome/silver
  grey #5C636E, single accent #0B8A68 (emerald status green).
- Systems dark: base #14161A, surface #1B1E24, ink #F2F4F7, chrome #9AA1AB,
  accent #12B981.
- Theme toggle exists only on systems clusters (data-theme on the cluster
  wrapper), per spec.
- Corner radius: 2px sharp, site-wide (one scale, per the consistency lock).

## Imagery

Real assets win (04-design-system/imagery-spec.md).

| Asset | Source | Status |
|---|---|---|
| 14-master hyper-minimal set (01-14 webp + png) | Existing brand asset package (repo) | Reused |
| 15-ict-coastal-backbone.jpg, 16-consulting-decision-horizon.jpg, 17-presence-dune-signal.jpg | Generated (Wave 7), masters as style references | GENERATED, mood/texture use only |
| windhoek-architecture.jpg, namib-dune-ridge.jpg, server-room-dark.jpg, cabling-macro.jpg | Generated (Wave 8) | GENERATED, mood/texture backgrounds only; never presented as a real facility |
| founder tangi-nobg.webp | Package 05-assets (rough color-key cutout) | PLACEHOLDER per package note; pending proper matte or reshoot; never presented as a finished portrait |
| ton-og.png | timesofnamibia project, live at ton.tangison.com | Real project asset |
| oryx-hero.webp | oryx-institute.vercel.app /hero/oryx-loop-poster.jpg | Real project asset |
| feorm-logo.png | feorm.vercel.app | Real project asset |
| hola-logo.svg, hola-og.webp | hola.tangison.com | Real project asset |

Rule in force: no generated image is presented as a real team photo, real
facility, or real product screenshot. Generated files are logged above.

## Open-source tool marks (official SVG only, never redrawn)

| Tool | Source (fetched 2026-08-24) |
|---|---|
| Ubuntu | https://assets.ubuntu.com/v1/82818827-CoF_white.svg (Canonical brand page, canonical.com/brand) |
| Debian | https://www.debian.org/Pics/debian-logo-1024x576.png (official site; the project's own site serves the mark as PNG, documented deviation from SVG-only) |
| Docker | Inline logo SVG from the docker.com header (official site) |
| PostgreSQL | https://www.postgresql.org/media/img/PostgreSQL_Badge1.svg (official site) |
| Nginx | https://nginx.org/img/nginx_logo.svg and nginx_logo_dark.svg (official site; dark variant used on light surfaces) |
| Nextcloud | https://nextcloud.com/c/uploads/2022/11/logo_nextcloud_white.svg (official site) |
| Fedora | https://fedoraproject.org/assets/images/logos/fedora-logo-white-official.svg (official site) |

Header is "Tools we build with", never "Partners". No vendor-partnership
claims (no Microsoft, Acumatica, or any other) anywhere on the site.

## Recognition marks

Per 03-pages/company/recognition.json: only NCRST is "confirmed usable", and
no NCRST logo file was supplied in the package, so NCRST renders as a
typographic mark with its detail line. NIPDB, GEN Namibia, Basecamp, and the
Mandela Washington Fellowship render text-only ("Pending written
confirmation") until written permission and official marks are on file.

## Contact form delivery

No backend. Primary action opens WhatsApp with a prefilled message to
081 341 1522; secondary opens the visitor's mail app prefilled to
info@tangison.com. Zero third-party dependencies. Upgrade path (only if
wanted): one approved email-provider key (e.g. Resend) plus a route handler;
that is the single third-party item that would require owner approval.

## Systems footer interpretation

footer-clusters.md assigns systems-footer to three clusters (solutions,
process, open-source). To satisfy "two clusters must never render the
identical footer", the systems footer takes a cluster prop and renders a
different middle column (Stack / Solutions / Process) plus cluster label in
the nav. Design language shared, content and chrome distinct.

## Bar references (fetched 2026-08-24, stored in rebuild-spec/bars/)

- Editorial bar: wearecollins.com (home + programs)
- Systems bar: vercel.com (home), digitalocean.com (home)

Each page's critic pass compares the built page against the fetched bar
page directly, not against a description of it.

## House style (in force on every page)

- No em dashes in shipped copy.
- No "AI" or "Artificial Intelligence" as a standalone section heading;
  automation lives inside Custom Software; agent.tangison.com (formerly
  NangulaAI) is framed as discontinued build history only.
- No exclamation points.
- Rasters ship WebP where generated by the pipeline; declared dimensions;
  lazy below the fold. SVG logos never rasterized.
- One CTA intent per page (no "Contact us" + "Get in touch" pairs).
