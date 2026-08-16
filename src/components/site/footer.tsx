'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TangisonMark } from "@/components/shared/tangison-mark";
import { SITE } from "@/lib/site";

/**
 * Footer — hyper-minimal, per-page-category.
 *
 * Structurally the twin of the footer on studio.tangison.com: same lead line,
 * same single CTA, same short link row, same relationship line. Rendered in
 * this site's own palette via the existing CSS variables, so nothing from the
 * Studio's visual language crosses over.
 *
 * The mark is the real Tangison logo, the same file both sites use. It is
 * fill="currentColor", so it simply takes this site's ink colour.
 */

type Category = "technology" | "company" | "legal" | "default";

function categoryFor(pathname: string): Category {
  if (pathname.startsWith("/privacy") || pathname.startsWith("/terms")) return "legal";
  if (pathname.startsWith("/technology")) return "technology";
  if (pathname.startsWith("/company") || pathname.startsWith("/brand")) return "company";
  return "default";
}

const STUDIO_HREF =
  "https://studio.tangison.com/?utm_source=tangison.com&utm_medium=footer&utm_campaign=cross-site";

const CONTENT: Record<
  Category,
  { line: string; cta: { label: string; href: string; external?: boolean } | null; links: { label: string; href: string }[] }
> = {
  // Reader is evaluating the technology. Push the conversation.
  technology: {
    line: "Tell us where your operations lose visibility.",
    cta: { label: "Start a conversation", href: "/contact" },
    links: [
      { label: "Technology", href: "/technology" },
      { label: "Company", href: "/company" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  // Reader is looking at who we are. Push the creative arm.
  company: {
    line: "Brand and digital product work runs through Tangison Studio.",
    cta: { label: "Visit Tangison Studio", href: STUDIO_HREF, external: true },
    links: [
      { label: "Company", href: "/company" },
      { label: "Careers", href: "/careers" },
      { label: "Brand", href: "/brand" },
      { label: "Contact", href: "/contact" },
    ],
  },
  // Stripped. No CTA on legal pages.
  legal: {
    line: "",
    cta: null,
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
  default: {
    line: SITE.tagline,
    cta: { label: "Start a conversation", href: "/contact" },
    links: [
      { label: "Technology", href: "/technology" },
      { label: "Company", href: "/company" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
};

export function Footer() {
  const pathname = usePathname() || "/";
  const category = categoryFor(pathname);
  const { line, cta, links } = CONTENT[category];
  const isLegal = category === "legal";

  return (
    <footer
      className="border-t border-[var(--hairline)] bg-[var(--bg)] mt-auto"
      role="contentinfo"
    >
      <div className="container-tangison py-10 md:py-12">
        {/* Lead row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              aria-label={`${SITE.name}, home`}
              className="inline-block text-[var(--ink)]"
            >
              <TangisonMark height={22} title={null} />
            </Link>
            {line ? (
              <p className="text-base md:text-lg text-[var(--muted-ink)] max-w-sm">
                {line}
              </p>
            ) : null}
          </div>

          {cta ? (
            cta.external ? (
              <a
                href={cta.href}
                className="group inline-flex items-center gap-2 self-start text-base text-[var(--ink)] underline-offset-4 hover:text-[var(--teal)] hover:underline transition-colors md:self-end"
              >
                {cta.label}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            ) : (
              <Link
                href={cta.href}
                className="group inline-flex items-center gap-2 self-start text-base text-[var(--ink)] underline-offset-4 hover:text-[var(--teal)] hover:underline transition-colors md:self-end"
              >
                {cta.label}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            )
          ) : null}
        </div>

        {/* Hairline, then the short link row */}
        <div className="mt-8 border-t border-[var(--hairline)] pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-[var(--muted-ink)] hover:text-[var(--ink)] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              {!isLegal && (
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-[var(--muted-ink)] hover:text-[var(--ink)] transition-colors"
                >
                  {SITE.email}
                </a>
              )}
            </nav>

            {/* Relationship line, mirrored from the Studio footer. */}
            <a
              href={STUDIO_HREF}
              className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted-ink)] hover:text-[var(--teal)] transition-colors"
            >
              Tangison Studio, our creative arm
            </a>
          </div>

          <p className="mt-5 text-[9px] uppercase tracking-[0.18em] text-[var(--muted-ink)]">
            &copy; {new Date().getFullYear()} {SITE.company} &middot; {SITE.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
