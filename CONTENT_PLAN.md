# CONTENT_PLAN.md — Tangison Technologies Website Content Strategy

**Status**: Wave 1 audit documentation
**Last updated**: 2026-07-25

---

## Exact Approved Positioning

**Core ideology**: "Intelligence for imperfect conditions."

**Supporting visual idea**: "Vast conditions. Precise intelligence."

**Desired impression**: A credible Namibian technology company building applied intelligence systems for complex, imperfect and operational environments.

**Language**: Namibian business English. Avoid em dashes. Prefer evidence, systems and operational meaning over hype.

---

## Proposed Route-Level Content Responsibilities

### `/` — Homepage

| Section | Content Responsibility | Source |
|---------|----------------------|--------|
| Minimal header | Logo, Technology, Company, Contact links | Brand guidelines |
| Skeleton Coast-led hero | One positioning statement + real photography | Owner photography |
| Observe, Decide, Operate system | Three-phase methodology description (NOT three generic cards) | Owner confirmation |
| Editorial horizontal image sequence | Namibia context, operational environments | Owner photography |
| Namibia and imperfect-conditions context | Geographic and operational positioning | Owner confirmation |
| Quiet ecosystem/technology index | Tangison Agent, Tangison Studio, future systems (no detail until real content) | Verified facts |
| Contact statement | Simple invitation to reach out | Owner confirmation |
| Restrained footer | Wordmark, positioning, Windhoek Namibia, email, minimal links, Studio credit | Brand guidelines |

**Critical rule**: Observe, Decide, Operate must NOT become three generic cards. These represent a methodology, not features. The presentation must be editorial and spatial, not a card grid.

### `/technology` — Technology Overview

| Section | Content Responsibility | Source |
|---------|----------------------|--------|
| Tangison Agent overview | What it is, self-hosted nature, BYO key model | Verified product description |
| How it works | Send → Plan → Execute → Deliver (from existing homepage) | Existing content, rephrased |
| Architecture overview | Runtime, skills, channels — stated as planned with honest status markers | Verified architecture |
| FAQ | Honest answers on status, self-hosting, data, pricing | Existing FAQ, verified |
| No fabricated metrics or case studies | — | Mandatory |

### `/company` — Company Information

| Section | Content Responsibility | Source |
|---------|----------------------|--------|
| About Tangison Technologies | Founder story, Windhoek Namibia, ideology | Owner confirmation |
| Field notes (if real content exists) | Blog-style articles about conditions and technology | Owner writing |
| No team gallery | Names only in structured metadata, not visible | Mandatory |

### `/contact` — Contact

| Section | Content Responsibility | Source |
|---------|----------------------|--------|
| Email contact | contact@tangison.com | Verified |
| WhatsApp contact | Existing number, rephrased message for corporate context | Owner confirmation |
| No fabricated address or phone | Only verified contact methods | Mandatory |

### `/brand` — Brand Reference

| Section | Content Responsibility | Source |
|---------|----------------------|--------|
| Brand guidelines | Logo usage, colour system, typography, image rules | Owner asset package |
| Identity reference | Wordmark, monogram, positioning | Owner asset package |

### `/privacy` — Privacy Policy

| Section | Content Responsibility | Source |
|---------|----------------------|--------|
| Data handling for corporate site | What the Tangison Technologies site collects, how, why | Legal review required |
| IP address classification | Must comply with GDPR (IP = personal data) | Legal review required |
| No false claims about logging | Must match actual implementation exactly | Code audit required |

### `/terms` — Terms of Service

| Section | Content Responsibility | Source |
|---------|----------------------|--------|
| Terms for corporate site | Using the website, not the product runtime | Legal review required |
| No contradiction with product terms | Corporate terms ≠ Agent product terms | Legal review required |

---

## Current Unsupported Claims (Must Fix)

### Category 1: Absolute data-residency claims

| Claim | Where | Problem | Fix |
|-------|-------|---------|-----|
| "No third party ever sees your prompts" | Homepage, Features | Prompts transit to OpenRouter (model provider) | Rephrase: "Only your configured model provider sees your prompts. No other third party has access." |
| "Your prompts, your transcripts, and your tool calls never leave your network" | Homepage, FAQ | Same contradiction — they leave to OpenRouter | Rephrase: "never leave your infrastructure except to reach the model provider you configure" |
| "Tangison never sees the prompt. Tangison never sees the response. Tangison never sees the bill" | Blog, Features | Runtime not shipped, claim unverifiable | Prefix: "By design, when the runtime ships..." |
| "we have no telemetry server to phone home to" | Features, Pricing, FAQ, Cookies | Runtime not shipped | Prefix: "By design..." or "When shipped..." |

### Category 2: Fabricated metrics

| Claim | Where | Problem | Fix |
|-------|-------|---------|-----|
| "reclaims ten hours a week" | Use-cases | No real deployment exists | Remove or replace with qualitative outcome |
| "30-second loop from 'fix this' to a preview URL" | Use-cases | No real deployment exists | Remove or replace with design intent |
| "100% of messages reach the right person" | Use-cases | Impossible absolute | Remove |

### Category 3: Unshipped feature claims stated as present facts

| Claim | Where | Problem | Fix |
|-------|-------|---------|-----|
| "Seven built-in skills" | Homepage, Features, About | Runtime not shipped | Add "When shipped, seven skills will be available" |
| "Ship the agent to Telegram, WhatsApp, and the web dashboard" | Homepage | Runtime not shipped | Add "Planned channels" |
| "Unlimited agents, unlimited conversations, unlimited seats" | Pricing | Runtime not shipped | Add "Planned" |
| "SAML SSO... Okta and Azure AD tested" | Pricing | No code evidence | Remove "tested" claim |
| "The audit log is a SQLite database" | About | Runtime not shipped | Add "Planned: audit log stored as SQLite" |

### Category 4: Legal contradictions

| Claim | Where | Problem | Fix |
|-------|-------|---------|-----|
| "we do not currently offer" commercial support | Terms line 198 | Directly contradicts Pricing page | Resolve: either remove from terms or add "Planned" to pricing |
| IP addresses classified as "operational data, not personal data" | Privacy line 197 | GDPR classifies IP as personal data | Legal review required |
| MIT License claim for unshipped runtime | Terms line 67 | Cannot license code that doesn't exist | Rephrase: "When released, the runtime will be MIT licensed" |

---

## Content Requiring Owner Confirmation

1. **Observe, Decide, Operate** — Is this the official methodology name? What is the exact definition of each phase?
2. **Skeleton Coast hero imagery** — Which specific photographs? What is the desired narrative?
3. **"Vast conditions. Precise intelligence."** — Is this the exact final positioning statement, or a working direction?
4. **Use-cases page metrics** — Are there any real deployment outcomes to reference? If not, all metrics must be removed.
5. **Blog anecdote (logistics company friend)** — Is this a real event or invented for marketing? Must be confirmed for credibility.
6. **"Industry numbers we have seen range from 1.5x to 3x"** — Is there a source? Must be cited or removed.
7. **Corporate contact methods** — Beyond email and WhatsApp, what contact methods should the corporate site offer?
8. **Studio.tangison.com** — Does this domain exist? What should the footer link point to?
9. **Legal entity status** — Is Tangison a registered company, a sole proprietorship, or a brand? This affects legal copy.
10. **Cookie consent position** — What jurisdictions are targeted? This determines whether a cookie banner is required.

---

## Metadata Requirements

### Per-page metadata pattern (rebuild for Tangison Technologies)

```typescript
export const metadata: Metadata = {
  title: "Page title",
  description: "Page description in Namibian business English",
  alternates: { canonical: "/route" },
  openGraph: {
    type: "website",
    url: SITE.siteUrl + "/route",
    title: "Page title",
    description: "Page description",
    siteName: "Tangison Technologies",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Page title",
    description: "Page description",
  },
};
```

**Title template**: `"%s | Tangison Technologies"` (not "%s | Tangison Agent")

### Structured-data requirements

| Route | JSON-LD Type | Content |
|-------|-------------|---------|
| `/` | Organization + WebSite | Tangison Technologies, Tangi Iigonda, Windhoek Namibia |
| `/technology` | SoftwareApplication (Tangison Agent) | Product description, planned status |
| `/company` | Organization | Extended company information |
| `/contact` | ContactPoint | Email, WhatsApp |

---

## Team Metadata Limitations

- **Known names**: Tanguy, Son, Paulus, Margreta, Nangula
- **Rules**: Use only in structured metadata when technically and semantically appropriate
- **Never invent**: surnames, job titles, biographies, credentials, photographs, responsibilities
- **No visible team gallery** during initial build
- **Structured metadata only**: JSON-LD Organization `employee` field with name only, no fabricated title/role

---

## Legal-Content Review Requirements

1. **Privacy policy**: Must be reviewed for GDPR compliance (IP address classification, data handling claims, cookie position)
2. **Terms of service**: Must resolve contradiction with pricing page. Must clarify legal entity status.
3. **Cookie policy**: Must verify exact cookie set matches claims. Must determine if cookie consent banner is required.
4. **All legal pages**: Must rebuild for Tangison Technologies (corporate site), not Tangison Agent (product site)
5. **Legal review**: Required before deployment. The current content has legal risks that cannot be resolved by engineering alone.

---

## Forbidden Language (AI Cliche Prohibition)

Avoid: revolutionise, unlock, cutting-edge, next-generation, game-changing, seamless, transformative, leverage, empower, harness, reimagine, disrupt, pioneer, innovate, supercharge, amplify, catalyse, propel, AI-powered (borderline), "In the world of..."

**Current assessment**: 0 forbidden-word hits found in existing copy. 1 borderline hit ("AI-powered" in chat-widget). The existing copy discipline is excellent. Maintain this standard.

**Paragraph rules**: Keep paragraphs concise. Prefer evidence, systems and operational meaning over hype. Single-sentence paragraphs forbidden (except transitions). Each section minimum 150–200 words body content.
