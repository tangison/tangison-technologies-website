# Tangison Technologies — Website Rebuild Package

## What's in here
- `00-IP/` — the single source of truth: brand identity, contacts, team, and the compliance
  proof register every claim on the site must trace back to. Also holds the founder's CV
  reference PDF.
- `01-agent-prompt/MASTER-BUILD-PROMPT.md` — paste this into your build agent to actually
  generate the site. Read the caution note at the top before letting it install anything.
- `02-sitemap/sitemap.json` — every page, its cluster, theme, and footer assignment.
- `03-pages/` — one build brief per page, including the 20-article Namibia insights set.
- `04-design-system/` — colour/type tokens, the unique footer spec per cluster, the
  anti-AI-pattern checklist, and the imagery rules.
- `05-assets/images/` — founder photo (source, webp, and a rough background-removed
  version) and the CV reference.

## What this package is and isn't
This is a complete build specification, not a live website. Generating and deploying the
actual site (fetching live reference sites, running Lighthouse/accessibility audits,
connecting a domain) needs an agent with real network and deployment access, which this
environment doesn't have. Hand this zip to that agent and run the master prompt.

## Known open items before anything ships
1. Recognition-programme logos beyond NCRST need written permission (00-IP/compliance.md).
2. Founder photo needs a proper background-removal or reshoot pass (05-assets/images/).
3. Confirm whether Times of Namibia, Oryx Institute, and Feorm were delivered under
   GemsWeb Digital or Tangison Technologies before publishing case-study attribution.
4. Several insight-article topics are marked "needs verification", confirm sources before
   those go live.
