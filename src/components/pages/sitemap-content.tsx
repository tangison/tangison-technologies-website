'use client';

import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { useRevealChildren } from "@/hooks/use-reveal";
import { SITE, NAV_PRIMARY, NAV_SECONDARY, EcosystemEntities } from "@/lib/site";

const SITEMAP_STRUCTURE = [
  {
    group: "Primary pages",
    items: [
      { label: "Homepage", href: "/", description: "Tangison Technologies. Operational intelligence without assumptions." },
      ...NAV_PRIMARY.map((n) => ({
        label: n.label,
        href: n.href,
        description: n.label === "Technology" ? "Observe, Decide, Operate methodology and technology ecosystem." : n.label === "Company" ? "About Tangison Technologies, philosophy and Namibian context." : "Start a conversation with Tangison Technologies.",
      })),
    ],
  },
  {
    group: "Technology detail",
    items: [
      { label: "Observe", href: "/technology#observe", description: "Gather signals from environments where connectivity drops and data arrives late." },
      { label: "Decide", href: "/technology#decide", description: "Turn observations into operational decisions." },
      { label: "Operate", href: "/technology#operate", description: "Execute decisions under real constraints." },
      { label: "Tangison Agent", href: "/technology#agent", description: "Self-hosted AI agent platform." },
      { label: "Tangison Labs", href: "/technology#labs", description: "Research and experimental systems." },
    ],
  },
  {
    group: "Company detail",
    items: [
      { label: "Philosophy", href: "/company#philosophy", description: "Conditions shape the method." },
      { label: "Namibia", href: "/company#namibia", description: "Namibia as design brief, not edge case." },
    ],
  },
  {
    group: "Brand and legal",
    items: [
      ...NAV_SECONDARY.map((n) => ({
        label: n.label,
        href: n.href,
        description: n.label === "Brand" ? "Visual identity and guidelines." : n.label === "Privacy" ? "What we collect and how we handle your data." : "Terms for using the Tangison Technologies website.",
      })),
    ],
  },
  {
    group: "Ecosystem",
    items: EcosystemEntities.map((e) => ({
      label: e.name,
      href: e.href,
      description: e.description,
    })),
  },
];

export default function SitemapPage() {
  const contentRef = useRevealChildren<HTMLElement>();

  return (
    <PageShell>
      <section ref={contentRef} className="section-spacing bg-[var(--bg)]" aria-label="Site map">
        <div className="container-tangison">
          <div className="reveal">
            <p className="eyebrow mb-2">Navigation</p>
            <h1 className="display display-md text-[var(--ink)]">Site Map</h1>
            <p className="mt-3 text-[var(--muted-ink)] text-sm">
              A complete index of all pages on {SITE.siteUrl}.
            </p>
          </div>

          <hr className="hairline my-8" />

          <div className="space-y-10 max-w-2xl">
            {SITEMAP_STRUCTURE.map((group) => (
              <div key={group.group} className="reveal">
                <h2 className="text-sm font-semibold text-[var(--ink)] mb-4">{group.group}</h2>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm text-[var(--teal)] hover:text-[var(--ink)] transition-colors font-medium"
                      >
                        {item.label}
                        {item.href.startsWith("http") && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 inline"><path d="M7 17L17 7M7 7h10v10"/></svg>
                        )}
                      </Link>
                      <p className="text-xs text-[var(--muted-ink)] mt-0.5">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <hr className="hairline my-8" />

          <p className="text-xs text-[var(--muted-ink)] reveal">
            Machine-readable sitemap:{" "}
            <Link href="/sitemap.xml" className="text-[var(--teal)] hover:text-[var(--ink)] transition-colors">
              sitemap.xml
            </Link>
          </p>
        </div>
      </section>
    </PageShell>
  );
}
