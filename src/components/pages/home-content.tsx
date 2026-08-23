'use client';

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { useReveal, useRevealChildren } from "@/hooks/use-reveal";
import {
  SITE,
  CAPABILITIES,
  FEATURED_PROJECTS,
  STUDIO_PORTFOLIO_HREF,
} from "@/lib/site";

/* ─── Hero zoom on scroll (kept from the editorial system) ─── */
function useHeroZoom() {
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroImage = heroImageRef.current;
    if (!heroImage) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const onScroll = () => {
      const y = window.scrollY;
      const scale = 1 + Math.min(y / 5000, 0.08);
      heroImage.style.transform = `scale(${scale})`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return heroImageRef;
}

export default function Home() {
  const heroRef = useReveal<HTMLElement>();
  const capsRef = useRevealChildren<HTMLElement>();
  const workRef = useRevealChildren<HTMLElement>();
  const studioRef = useReveal<HTMLElement>();
  const complianceRef = useReveal<HTMLElement>();
  const heroImageRef = useHeroZoom();

  return (
    <PageShell>
      {/* ─── 1. HERO: one sentence, one action ─── */}
      <section ref={heroRef} className="hero-section noise-overlay reveal" aria-label="Introduction">
        <div ref={heroImageRef} className="absolute inset-0 hero-zoom">
          <Image
            src="/images/tangison/webp/01-skeleton-coast-hero-1920x1080.webp"
            alt="The Namib Desert meeting the Atlantic Ocean through coastal fog on the Skeleton Coast"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(26,26,24,0.4)] via-[rgba(26,26,24,0.18)] to-transparent" />
        </div>

        <div className="absolute inset-0 flex items-end">
          <div className="container-tangison pb-14 md:pb-20">
            <h1 className="display display-lg text-[var(--teal-text)] max-w-4xl">
              Intelligence for imperfect conditions.
            </h1>
            <div className="mt-8">
              <Link href="/contact" className="btn-accent">
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. CAPABILITIES ─── */}
      <section ref={capsRef} className="section-spacing bg-[var(--bg)]" aria-label="Capabilities">
        <div className="container-tangison">
          <h2 className="display display-md mb-12 md:mb-16">Five competencies. One standard.</h2>

          <ul className="border-t border-[var(--hairline)]">
            {CAPABILITIES.map((cap, i) => (
              <li key={cap.id} className="border-b border-[var(--hairline)] reveal">
                <Link
                  href={cap.href}
                  className="group block py-6 md:py-8 transition-colors hover:bg-[var(--surface)] md:grid md:grid-cols-[96px_1.1fr_1.5fr_auto] md:items-center md:gap-8"
                >
                  <span className="relative hidden h-24 w-24 overflow-hidden bg-[var(--surface-2)] md:block">
                    <Image
                      src={cap.image}
                      alt={cap.imageAlt}
                      fill
                      sizes="96px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </span>
                  <span className="block">
                    <span className="font-mono text-xs text-[var(--muted-ink)]">0{i + 1}</span>
                    <span className="mt-1 block text-lg font-medium text-[var(--ink)] transition-colors group-hover:text-[var(--teal)] md:mt-0 md:text-2xl">
                      {cap.name}
                    </span>
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-[var(--muted-ink)] md:mt-0">
                    {cap.line}
                  </span>
                  <span
                    aria-hidden="true"
                    className="hidden justify-self-end text-[var(--muted-ink)] transition-all duration-500 group-hover:translate-x-1 group-hover:text-[var(--teal)] md:block"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Link href="/capabilities" className="btn-outline text-xs">
              All capabilities in detail
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 3. WORK ─── */}
      <section ref={workRef} className="section-spacing bg-[var(--surface-2)]" aria-label="Selected work">
        <div className="container-tangison">
          <h2 className="display display-md mb-12 md:mb-16">
            Selected work, described as it stands.
          </h2>

          <div className="grid gap-px bg-[var(--hairline)] border border-[var(--hairline)] md:grid-cols-2">
            {FEATURED_PROJECTS.map((p) => (
              <article key={p.name} className="bg-[var(--surface)] p-8 md:p-10 reveal">
                <p className="eyebrow mb-3">{p.kind}</p>
                <h3 className="text-xl font-medium text-[var(--ink)] md:text-2xl">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted-ink)]">
                  {p.description}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  {p.status && (
                    <span className="text-xs uppercase tracking-[0.14em] text-[var(--destructive)]">
                      Status: {p.status}
                    </span>
                  )}
                  {p.href && (
                    <a
                      href={p.href}
                      target={p.href.startsWith("http") ? "_blank" : undefined}
                      rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-[var(--ink)] underline decoration-[var(--hairline)] underline-offset-4 [overflow-wrap:anywhere] hover:decoration-[var(--ink)]"
                    >
                      {p.hrefLabel ?? "View"}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/projects" className="btn-outline text-xs">
              All projects and R&D
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 4. CLIENT WORK: one line, one button ─── */}
      <section ref={studioRef} className="section-spacing bg-[var(--bg)] reveal" aria-label="Client work">
        <div className="container-tangison flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Client work</p>
            <p className="display-sm leading-snug text-[var(--ink)]">
              Client work is delivered through Tangison Studio, the design and
              engineering arm of the Tangison group.
            </p>
          </div>
          <a
            href={STUDIO_PORTFOLIO_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline shrink-0 text-xs"
          >
            View the studio portfolio
          </a>
        </div>
      </section>

      {/* ─── 5. COMPLIANCE ─── */}
      <section ref={complianceRef} className="section-spacing relative noise-overlay reveal" aria-label="Compliance">
        <div className="absolute inset-0 bg-[var(--ink)]" aria-hidden="true" />
        <div className="container-tangison relative z-10">
          <h2 className="display display-lg max-w-2xl text-[var(--bg)]">
            Built to be verified.
          </h2>
          <p className="body-constrained mt-5 text-[var(--bg)]/80">
            {SITE.legalName} is a registered Close Corporation in Namibia,
            registered 20 August 2026, 100% Namibian owned, and founded and
            operated in Windhoek. Every detail on this site can be checked
            against the Namibian business registry.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-accent">
              Contact and compliance
            </Link>
            <Link
              href="/profile"
              className="btn-outline border-[rgba(240,237,232,0.3)] text-[var(--teal-text)]"
            >
              Company profile
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
