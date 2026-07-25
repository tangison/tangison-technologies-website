'use client';

import Link from "next/link";
import { Logo } from "./logo";
import { SITE, NAV_PRIMARY, NAV_SECONDARY } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--hairline)] bg-[var(--bg)] mt-auto" role="contentinfo">
      <div className="container-tangison py-8 md:py-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* Left: Logo + tagline + location */}
          <div className="flex flex-col gap-3">
            <Logo linked size="sm" />
            <p className="text-sm text-[var(--muted-ink)]">{SITE.tagline}</p>
            <div className="flex flex-col gap-1 text-xs text-[var(--muted-ink)]">
              <span>{SITE.location}</span>
              <a
                href={`mailto:${SITE.email}`}
                className="hover:text-[var(--teal)] transition-colors"
              >
                {SITE.email}
              </a>
            </div>
          </div>

          {/* Right: Nav links */}
          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
            <nav aria-label="Primary footer navigation">
              <ul className="flex flex-col gap-2">
                {NAV_PRIMARY.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="nav-link text-xs"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Secondary footer navigation">
              <ul className="flex flex-col gap-2">
                {NAV_SECONDARY.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="nav-link text-xs"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom credit */}
        <div className="mt-8 pt-4 border-t border-[var(--hairline)]">
          <p className="text-xs text-[var(--muted-ink)]">
            &copy; {new Date().getFullYear()} {SITE.company}.{" "}
            <a
              href={SITE.studioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--teal)] transition-colors"
            >
              Made by Tangison Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
