'use client';

import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { SITE } from "@/lib/site";

export default function NotFound() {
  return (
    <PageShell>
      <section className="section-spacing bg-[var(--bg)]" aria-label="Page not found">
        <div className="container-tangison text-center">
          <p className="eyebrow mb-4">404</p>
          <h1 className="display display-md text-[var(--ink)]">
            This page does not exist.
          </h1>
          <p className="mt-4 text-[var(--muted-ink)] max-w-md mx-auto">
            The page you are looking for is not part of the {SITE.name}
            website. It may have been moved or removed, or the address
            may be incorrect.
          </p>
          <div className="mt-6 flex gap-3 justify-center">
            <Link href="/" className="btn-accent">
              Homepage
            </Link>
            <Link href="/sitemap-overview" className="btn-outline">
              Site map
            </Link>
          </div>
          <p className="mt-8 text-xs text-[var(--muted-ink)]">
            If you reached this page from a link on our site, please let us know at{" "}
            <a href={`mailto:${SITE.email}`} className="text-[var(--teal)] hover:text-[var(--ink)] transition-colors">
              {SITE.email}
            </a>.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
