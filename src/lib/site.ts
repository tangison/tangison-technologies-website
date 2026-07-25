/**
 * Tangison Technologies — site-wide constants.
 * Owner: Tangi Iigonda (Windhoek, Namibia)
 * This is the CORPORATE site, not the Agent product site.
 */

export const SITE = {
  name: "Tangison Technologies",
  tagline: "Intelligence for imperfect conditions.",
  visualIdea: "Vast conditions. Precise intelligence.",
  owner: "Tangi Iigonda",
  location: "Windhoek, Namibia",
  brand: "Tangison",
  company: "Tangison Technologies",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tangison.com",
  agentUrl: "https://agent.tangison.com",
  studioUrl: "https://studio.tangison.com",
  description:
    "Tangison Technologies designs operational intelligence systems for environments where connectivity, data and infrastructure cannot be assumed.",
  email: "contact@tangison.com",
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
    description: "A self-hosted AI agent platform that runs inside your infrastructure.",
    href: "https://agent.tangison.com",
    image: "/images/tangison/webp/08-ecosystem-agent.webp",
    focal: "left bottom",
  },
  {
    name: "Tangison Studio",
    description: "Design and engineering capability within Tangison.",
    href: "https://studio.tangison.com",
    image: "/images/tangison/webp/07-ecosystem-studio.webp",
    focal: "center",
  },
  {
    name: "Tangison Labs",
    description: "Research and experimental systems for imperfect conditions.",
    href: "/technology#labs",
    image: "/images/tangison/webp/09-ecosystem-labs.webp",
    focal: "right top",
  },
] as const;

/** Search index for the corporate site — every entry must point to a real route. */
export const SEARCH_INDEX = [
  { title: "Technology", path: "/technology", category: "System", summary: "Observe, Decide, Operate: Tangison's operational intelligence methodology and its technology ecosystem." },
  { title: "Observe", path: "/technology#observe", category: "System", summary: "The first phase: gathering signals from imperfect conditions." },
  { title: "Decide", path: "/technology#decide", category: "System", summary: "The second phase: turning observations into operational decisions." },
  { title: "Operate", path: "/technology#operate", category: "System", summary: "The third phase: executing decisions under real constraints." },
  { title: "Tangison Agent", path: "/technology#agent", category: "Product", summary: "A self-hosted AI agent platform that runs inside your infrastructure." },
  { title: "Company", path: "/company", category: "Company", summary: "About Tangison Technologies, its philosophy, and its Namibian context." },
  { title: "Contact", path: "/contact", category: "Contact", summary: "Start a conversation with Tangison Technologies." },
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
