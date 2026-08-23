'use client';

import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { SITE } from "@/lib/site";

const PAGES = [
  { label: "Home", href: "/", description: "Executive summary and company overview" },
  { label: "Capabilities", href: "/capabilities", description: "ICT, AI, digital transformation, consulting, and R&D" },
  { label: "Company Profile", href: "/profile", description: "Ownership, registration, mission, leadership, and local presence" },
  { label: "Projects and R&D", href: "/projects", description: "Selected work and fifteen client projects through Tangison Studio" },
  { label: "Contact and Compliance", href: "/contact", description: "Address, phone, email, and registration details" },
  { label: "Careers", href: "/careers", description: "Working with Tangison Technologies" },
  { label: "Privacy Policy", href: "/privacy", description: "How this website handles visitor data" },
  { label: "Terms of Service", href: "/terms", description: "Terms for using this website" },
];

const RELATED = [
  { label: "Tangison Studio", href: SITE.studioUrl, description: "The design and engineering arm of the Tangison group" },
];

export default function SitemapContent() {
  return (
    <PageShell>
      <section className="section-spacing bg-[var(--bg)]" aria-label="Site map">
        <div className="container-tangison max-w-3xl">
          <p className="eyebrow mb-2">Site map</p>
          <h1 className="display display-md">Every page on this site.</h1>

          <ul className="mt-10 border-t border-[var(--hairline)]">
            {PAGES.map((p) => (
              <li key={p.href} className="border-b border-[var(--hairline)]">
                <Link href={p.href} className="group py-4 flex flex-col gap-1">
                  <span className="text-base font-medium text-[var(--ink)] group-hover:text-[var(--teal)] transition-colors">
                    {p.label}
                  </span>
                  <span className="text-sm text-[var(--muted-ink)]">{p.description}</span>
                </Link>
              </li>
            ))}
          </ul>

          <p className="eyebrow mt-10 mb-4">Related properties</p>
          <ul>
            {RELATED.map((r) => (
              <li key={r.href} className="py-3 border-b border-[var(--hairline)]">
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-1"
                >
                  <span className="text-base font-medium text-[var(--ink)] group-hover:text-[var(--teal)] transition-colors">
                    {r.label} ↗
                  </span>
                  <span className="text-sm text-[var(--muted-ink)]">{r.description}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
