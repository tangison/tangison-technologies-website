/**
 * Tangison Technologies CC — site-wide constants.
 * Tender-ready capability statement. Windhoek, Namibia.
 *
 * Registration facts are verified against the BIPA public registry
 * (bipa.na, retrieved 2026-08-23). The registration number is published
 * in structured data only (see seo.tsx) and is not shown in visible copy.
 */

export const SITE = {
  name: "Tangison Technologies",
  legalName: "Tangison Technologies CC",
  tagline: "Intelligence for imperfect conditions.",
  owner: "Tangi Iigonda",
  ownerRole: "Founder and Director",
  location: "Windhoek West, Namibia",
  brand: "Tangison",
  company: "Tangison Technologies CC",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tangison.com",
  studioUrl: "https://studio.tangison.com",
  /** Schema-only. Not rendered in visible copy. */
  regNumber: "CC/2026/10147",
  registeredOn: "20 August 2026",
  description:
    "Tangison Technologies CC is a 100% Namibian owned technology company in Windhoek. Information and communications technology, applied AI, digital transformation, consulting, and research and development.",
  email: "info@tangison.com",
  phoneDisplay: "081 341 1522",
  phoneE164: "+264813411522",
  /** wa.me wants digits only. */
  phoneWa: "264813411522",
  address:
    "Corner Dr Frans Indongo St and John Meinert St, Windhoek West, Namibia 10005",
  addressMap:
    "https://www.google.com/maps/search/?api=1&query=Corner+Dr+Frans+Indongo+Street+and+John+Meinert+Street+Windhoek+Namibia",
} as const;

export const NAV_PRIMARY = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Company", href: "/profile" },
  { label: "Contact", href: "/contact" },
] as const;

export const NAV_SECONDARY = [
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Site map", href: "/sitemap" },
] as const;

/** Studio cross-site links, with UTM on footer and CTA placements. */
export const STUDIO_HREF =
  "https://studio.tangison.com/?utm_source=tangison.com&utm_medium=footer&utm_campaign=cross-site";
export const STUDIO_PORTFOLIO_HREF =
  "https://studio.tangison.com/work?utm_source=tangison.com&utm_medium=projects&utm_campaign=cross-site";

export const CAPABILITIES = [
  {
    id: "ict",
    name: "Information and Communications Technology",
    line: "Systems development, technical infrastructure, and IT support built for Namibian operating conditions.",
    href: "/capabilities#ict",
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    line: "Applied AI solutions, automation systems, and intelligent tooling that run where your data stays.",
    href: "/capabilities#ai",
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation Services",
    line: "Advisory and implementation support that moves an institution from manual to measurable.",
    href: "/capabilities#digital-transformation",
  },
  {
    id: "consulting",
    name: "Consulting",
    line: "Strategic and technical consulting for decisions that have to hold up under scrutiny.",
    href: "/capabilities#consulting",
  },
  {
    id: "rnd",
    name: "Research and Development",
    line: "Applied research, prototyping, and product development, done in-house.",
    href: "/capabilities#rnd",
  },
] as const;

export type FeaturedProject = {
  name: string;
  kind: string;
  description: string;
  status?: string;
  href?: string;
  hrefLabel?: string;
};

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    name: "Tangison Agent",
    kind: "Research and Development, in-house",
    description:
      "A self-hosted AI agent platform: an AI workforce that runs inside your infrastructure. Developed in-house as applied research into autonomous, auditable agent systems.",
    status: "Discontinued.",
  },
  {
    name: "Times of Namibia",
    kind: "Client work, Information and Communications Technology",
    description:
      "A real-time digital portal and weekly print gazette compiler for one of Namibia's national newspapers.",
    href: "https://timesofnamibia.com",
    hrefLabel: "timesofnamibia.com",
  },
  {
    name: "Oryx Institute",
    kind: "Client work, Information and Communications Technology",
    description:
      "The digital platform for a multidisciplinary vocational education and training institution being established in Windhoek.",
    href: "https://oryx-institute.vercel.app",
    hrefLabel: "oryx-institute.vercel.app",
  },
  {
    name: "Feorm",
    kind: "Client work, Information and Communications Technology",
    description:
      "A Namibian agrotourism and equipment rental marketplace connecting travellers with working farms, guesthouses, and lodges across the country.",
    status: "Delivered and discontinued.",
    href: "https://studio.tangison.com/work/feorm",
    hrefLabel: "Case study",
  },
];

export type ClientWork = {
  name: string;
  line: string;
  slug: string;
  image: string;
};

/** Fifteen selected projects from the Tangison Studio portfolio. */
export const CLIENT_WORK: ClientWork[] = [
  { name: "Mendozer Investments", line: "Multi-sector group: construction, technology, cooling, logistics, fuel and energy, tourism and agriculture", slug: "mendozer", image: "/images/projects/mendozer.webp" },
  { name: "Weca Offroad Centre", line: "4x4 offroad fitment and accessories, Swakopmund", slug: "weca", image: "/images/projects/weca.webp" },
  { name: "Enchanted Artistry CC", line: "Cosmetology, arts, and mentorship", slug: "enchanted", image: "/images/projects/enchanted.webp" },
  { name: "Dieselman Nam", line: "Diesel service and mobile mechanics, Walvis Bay", slug: "dieselman", image: "/images/projects/dieselman.webp" },
  { name: "MI-WAY by Malu Investment", line: "Northern Namibia multi-service enterprise: taxi, construction, logistics, cleaning", slug: "miway", image: "/images/projects/miway.webp" },
  { name: "Revive Auto Works", line: "Automotive repair and servicing", slug: "reviveautoworks", image: "/images/projects/reviveautoworks.webp" },
  { name: "L&R Clearing Agency", line: "Customs clearing and freight forwarding: Walvis Bay, Lüderitz, and Southern African borders", slug: "lrclearing", image: "/images/projects/lrclearing.webp" },
  { name: "Feorm", line: "Agrotourism and equipment rental marketplace (discontinued)", slug: "feorm", image: "/images/projects/feorm.webp" },
  { name: "Crescendo Namibia", line: "Musical instruments, lessons, and academy platform since 2009", slug: "crescendo", image: "/images/projects/crescendo.webp" },
  { name: "Tangison Systems", line: "In-house systems platform", slug: "tangison-systems", image: "/images/projects/tangison-systems.webp" },
  { name: "Petrocor", line: "Wholesale petroleum and chemical distribution across Southern Africa", slug: "petrocor", image: "/images/projects/petrocor.webp" },
  { name: "SMEFrog", line: "Remote business registration and compliance for Namibian SMEs", slug: "smefrog", image: "/images/projects/smefrog.webp" },
  { name: "Cluster Leaf Safaris", line: "Owner-operated safari experiences across Southern Africa", slug: "clusterleaf", image: "/images/projects/clusterleaf-v2.webp" },
  { name: "Nalago Skincare", line: "Kalahari-inspired organic skincare for the African market", slug: "nalago", image: "/images/projects/nalago-v2.webp" },
  { name: "ProAvia Travel & Tours", line: "Travel logistics and curated tours from Walvis Bay", slug: "proavia", image: "/images/projects/proavia-v3.webp" },
];

export const STUDIO_CASE_HREF = (slug: string) =>
  `https://studio.tangison.com/work/${slug}`;
