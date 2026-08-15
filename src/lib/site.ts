/**
 * Tangison Technologies — site-wide constants.
 * Owner: Tangi Iigonda (Windhoek, Namibia)
 * This is the CORPORATE site, not the Agent product site.
 */

export const SITE = {
  name: "Tangison Technologies",
  tagline: "Operational intelligence without assumptions.",
  visualIdea: "Vast conditions. Precise intelligence.",
  owner: "Tangi Iigonda",
  location: "Windhoek, Namibia",
  brand: "Tangison",
  company: "Tangison Technologies",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tangison.com",
  agentUrl: "https://agent.tangison.com",
  studioUrl: "https://studio.tangison.com",
  description:
    "Tangison Technologies builds operational intelligence systems that work where connectivity drops, data arrives late, and infrastructure is uneven.",
  email: "contact@tangison.com",
  /** Main business line. MTC mobile, national format 081 341 1522. */
  phoneMain: "0813411522",
  phoneMainDisplay: "081 341 1522",
  phoneMainE164: "+264813411522",
  /** Tangison Studio line. TN Mobile, national format 085 341 1522. */
  phoneStudio: "0853411522",
  phoneStudioDisplay: "085 341 1522",
  phoneStudioE164: "+264853411522",
} as const;

export const NAV_PRIMARY = [
  { label: "Technology", href: "/technology" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
] as const;

export const NAV_SECONDARY = [
  { label: "Brand", href: "/brand" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;

export const EcosystemEntities = [
  {
    name: "Tangison Agent",
    description: "Self-hosted AI agents that keep your data on your hardware and your operations running when connectivity drops.",
    href: "https://agent.tangison.com",
    image: "/images/tangison/webp/08-ecosystem-agent.webp",
    focal: "left bottom",
  },
  {
    name: "Tangison Studio",
    description: "Digital products built to work where conditions are unforgiving.",
    href: "https://studio.tangison.com",
    image: "/images/tangison/webp/07-ecosystem-studio.webp",
    focal: "center",
  },
  {
    name: "Tangison Labs",
    description: "Experimental systems tested where existing technology fails.",
    href: "/technology#labs",
    image: "/images/tangison/webp/09-ecosystem-labs.webp",
    focal: "right top",
  },
] as const;

/** Search index for the corporate site — every entry must point to a real route. */
export const SEARCH_INDEX = [
  { title: "Technology", path: "/technology", category: "System", summary: "Observe, Decide, Operate: Tangison's operational intelligence methodology and its technology ecosystem." },
  { title: "Observe", path: "/technology#observe", category: "System", summary: "The first phase: gathering signals from environments where connectivity drops and data arrives late." },
  { title: "Decide", path: "/technology#decide", category: "System", summary: "The second phase: turning observations into operational decisions." },
  { title: "Operate", path: "/technology#operate", category: "System", summary: "The third phase: executing decisions under real constraints." },
  { title: "Tangison Agent", path: "/technology#agent", category: "Product", summary: "A self-hosted AI agent platform that runs inside your infrastructure." },
  { title: "Company", path: "/company", category: "Company", summary: "About Tangison Technologies, its philosophy, and its Namibian context." },
  { title: "Contact", path: "/contact", category: "Contact", summary: "Tell us what conditions you face and what you need to keep running." },
  { title: "Brand", path: "/brand", category: "Brand", summary: "Tangison brand guidelines, identity, and visual system." },
  { title: "Privacy Policy", path: "/privacy", category: "Legal", summary: "What the Tangison Technologies website collects and how it handles your data." },
  { title: "Terms of Service", path: "/terms", category: "Legal", summary: "Terms for using the Tangison Technologies website." },
] as const;

/** Known team names — for structured metadata only. Never invent surnames, titles or bios. */
export const TEAM_NAMES = [
  "Tanguy",
  "Son",
  "Paulus",
  "Margreta",
  "Nangula",
] as const;
