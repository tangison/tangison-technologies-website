'use client';

import Link from "next/link";
import { TangisonMark } from "@/components/shared/tangison-mark";
import { SITE, NAV_SECONDARY, STUDIO_HREF } from "@/lib/site";

/**
 * Footer — the compliance and trust anchor of the site.
 *
 * Shows the company, its address, its public contact routes, and its
 * registered status. The BIPA registration number is deliberately not
 * printed here; it lives in the Organization JSON-LD on every page.
 * "Made by Tangison Studio" is the standing cross-site credit.
 */

const LINKS = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Company", href: "/profile" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
  ...NAV_SECONDARY.slice(2), // Privacy, Terms, Site map
];

export function Footer() {
  return (
    <footer
      className="border-t border-[var(--hairline)] bg-[var(--bg)] mt-auto"
      role="contentinfo"
    >
      <div className="container-tangison py-10 md:py-14">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Identity + status */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link
              href="/"
              aria-label={`${SITE.name}, home`}
              className="inline-block text-[var(--ink)] self-start"
            >
              <TangisonMark height={24} title={null} />
            </Link>
            <p className="text-sm text-[var(--muted-ink)] max-w-xs">
              {SITE.tagline}
            </p>
            <p className="text-xs text-[var(--muted-ink)]">
              Registered Close Corporation in Namibia. BO compliant.
            </p>
          </div>

          {/* Address + contact */}
          <div className="md:col-span-4 flex flex-col gap-2">
            <p className="eyebrow mb-3">Tangison Technologies CC</p>
            <p className="text-sm text-[var(--muted-ink)]">
              {SITE.address}
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="text-sm text-[var(--ink)] underline underline-offset-4 decoration-[var(--hairline)] hover:decoration-[var(--ink)]"
            >
              {SITE.email}
            </a>
            <a
              href={`tel:${SITE.phoneE164}`}
              className="text-sm text-[var(--ink)]"
            >
              {SITE.phoneDisplay}
            </a>
            <a
              href={SITE.studioUrl}
              className="text-xs text-[var(--muted-ink)] hover:text-[var(--ink)] transition-colors"
            >
              Made by Tangison Studio ↗
            </a>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <nav aria-label="Footer" className="flex flex-col gap-2">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-[var(--muted-ink)] hover:text-[var(--ink)] transition-colors w-fit"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--hairline)] flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p className="text-xs text-[var(--muted-ink)]">
            © 2026 {SITE.company}. All rights reserved.
          </p>
          <a
            href={STUDIO_HREF}
            className="text-xs text-[var(--muted-ink)] hover:text-[var(--ink)] transition-colors"
          >
            studio.tangison.com
          </a>
        </div>
      </div>
    </footer>
  );
}
