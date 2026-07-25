# PRODUCT.md — Tangison Ecosystem Entity Map

**Status**: Wave 1 audit documentation
**Source**: Repository inspection, live site, verified public references
**Last updated**: 2026-07-25

---

## Entity Definitions

### Tangison Technologies

- **Type**: Namibian technology company
- **Purpose**: Builds applied intelligence systems for complex, imperfect and operational environments
- **Core ideology**: "Intelligence for imperfect conditions."
- **Visual idea**: "Vast conditions. Precise intelligence."
- **Founder**: Tangi Iigonda
- **Location**: Windhoek, Namibia
- **Website (future)**: To be determined — the repository under audit will become this site
- **Current state**: The company identity exists in the brief. The website currently hosts a product marketing site, not the corporate site.
- **Role in ecosystem**: Parent entity. Owns the Tangison brand, the Tangison Agent product, and the Tangison Studio capability.

### Tangison Agent

- **Type**: Self-hosted AI agent platform (product)
- **Purpose**: An AI workforce that runs inside your infrastructure
- **Current state**: In development. Runtime not shipped. Marketing site exists at agent.tangison.com.
- **Repository (marketing site)**: github.com/tangison/agent
- **Repository (runtime, referenced)**: github.com/tangison/tangison-agent — existence not verified
- **Business model**: Planned tiers: Self-Host (free, MIT), Supported, Enterprise. BYO model key via OpenRouter.
- **Key coupling**: The current website is entirely structured around this product. Every route, every page, every metadata field, every illustration, every copy section, every API route, and every widget is Agent-specific.
- **Distinction**: Tangison Agent is a **product**, not the company. The corporate website must represent Tangison Technologies, not just one product.

### Tangison Studio

- **Type**: Design and engineering capability within Tangison
- **Referenced as**: "Made by Tangison Studio" (footer link target: studio.tangison.com)
- **Current state**: Referenced in the brief but no public site verified at studio.tangison.com
- **Role in ecosystem**: Internal production capability. The corporate site footer will link to studio.tangison.com.
- **Distinction**: Tangison Studio is a **capability/brand**, not a separate legal entity from Tangison Technologies.

### tangison.com

- **Type**: Parent domain (currently redirects or serves as brand homepage)
- **Referenced as**: `SITE.parentUrl` in the current codebase
- **Current state**: Exists. The marketing site references it as the parent brand URL.

---

## Entity Boundary Rules

1. **Do not blur** Tangison Technologies, Tangison Agent, and Tangison Studio into one identity.
2. The corporate website represents **Tangison Technologies** as the company.
3. Tangison Agent content belongs on **agent.tangison.com** (or a future product site), not on the corporate homepage.
4. Tangison Studio is credited as the maker, linked from the footer.
5. Team members (Tanguy, Son, Paulus, Margreta, Nangula) belong to Tangison Technologies. They should appear only in structured metadata, not in a visible team gallery.

---

## Current vs. Future Website Purpose

| Aspect | Current (agent.tangison.com) | Future (Tangison Technologies) |
|--------|------------------------------|--------------------------------|
| Represents | Tangison Agent product | Tangison Technologies company |
| Audience | Product seekers, waitlist signups | Corporate visitors, partners, investors |
| Architecture | 14 routes, product-focused | ~8 routes, company-focused |
| Tone | Product marketing, feature-driven | Corporate, editorial, ideology-driven |
| Visual | SaaS marketing template | Editorial, hyper-visual, hyper-minimal |
| Navigation | 6 product links + search + CTA | Technology, Company, Contact (3 links) |
| Footer | 5 columns, 402–775px | ~240px, wordmark + positioning + minimal links |
| Chat | Global AI concierge on every page | Not appropriate at corporate root level |
| Legal | Dark theme, disconnected from light pages | Integrated, consistent visual system |
