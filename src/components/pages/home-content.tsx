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
  CLIENT_WORK,
  STUDIO_CASE_HREF,
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
  const clientsRef = useRevealChildren<HTMLElement>();
  const complianceRef = useReveal<HTMLElement>();
  const heroImageRef = useHeroZoom();

  return (
    <PageShell>
      {/* ─── 1. HERO ─── */}
      <section ref={heroRef} className="hero-section noise-overlay reveal" aria-label="Introduction">
        {/* Hero image with parallax zoom */}
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
          {/* Gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(26,26,24,0.35)] via-[rgba(26,26,24,0.15)] to-transparent" />
        </div>

        {/* Hero content */}
        <div className="absolute inset-0 flex items-end">
          <div className="container-tangison pb-12 md:pb-16">
            <p className="eyebrow reveal-delay-1 mb-4 text-[var(--teal-text)]">
              {SITE.legalName} · Windhoek, Namibia
            </p>
            <h1 className="display display-lg text-[var(--teal-text)] reveal-delay-2">
              Intelligence for imperfect conditions.
            </h1>
            <p className="mt-4 text-sm text-[var(--teal-text)]/80 body-constrained reveal-delay-3">
              {SITE.name} builds the systems that keep Namibian businesses and
              institutions running. Information and communications technology.
              Applied artificial intelligence. Digital transformation.
              Strategic consulting. Applied research and development.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 reveal-delay-4">
              <Link href="/contact" className="btn-accent">
                Start a conversation
              </Link>
              <Link
                href="/capabilities"
                className="btn-outline border-[rgba(240,237,232,0.3)] text-[var(--teal-text)] hover:bg-[rgba(240,237,232,0.1)]"
              >
                View our capabilities
              </Link>
            </div>
            <p className="mt-8 text-[11px] md:text-xs uppercase tracking-[0.16em] text-[var(--teal-text)]/70 reveal-delay-4">
              Registered Close Corporation · BO compliant · 100% Namibian owned
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. CAPABILITIES INDEX ─── */}
      <section ref={capsRef} className="section-spacing bg-[var(--bg)]" aria-label="Capabilities">
        <div className="container-tangison">
          <div className="mb-10 md:mb-14">
            <p className="eyebrow mb-2">Capabilities</p>
            <h2 className="display display-md">Five competencies. One standard.</h2>
            <p className="body-constrained mt-4">
              Every capability below is one we deliver today, in-house or
              through{" "}
              <a
                href={SITE.studioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-[var(--hairline)] hover:decoration-[var(--ink)]"
              >
                Tangison Studio
              </a>
              , the design and engineering arm of the Tangison group.
            </p>
          </div>

          <ul className="border-t border-[var(--hairline)]">
            {CAPABILITIES.map((cap, i) => (
              <li key={cap.id} className="border-b border-[var(--hairline)]">
                <Link
                  href={cap.href}
                  className="group grid grid-cols-[auto_1fr] md:grid-cols-[80px_1fr_1fr_auto] gap-x-6 gap-y-2 py-6 md:py-8 items-baseline transition-colors hover:bg-[var(--surface)]"
                >
                  <span className="font-mono text-xs text-[var(--muted-ink)] pt-1">
                    0{i + 1}
                  </span>
                  <span className="text-lg md:text-2xl font-medium text-[var(--ink)] group-hover:text-[var(--teal)] transition-colors">
                    {cap.name}
                  </span>
                  <span className="col-span-2 md:col-span-1 text-sm text-[var(--muted-ink)]">
                    {cap.line}
                  </span>
                  <span aria-hidden="true" className="hidden md:block text-[var(--muted-ink)] group-hover:text-[var(--teal)] transition-all group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link href="/capabilities" className="btn-outline text-xs">
              All capabilities in detail
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 3. WORK WE STAND BEHIND ─── */}
      <section ref={workRef} className="section-spacing bg-[var(--surface-2)]" aria-label="Selected work">
        <div className="container-tangison">
          <div className="mb-10 md:mb-14">
            <p className="eyebrow mb-2">Work we stand behind</p>
            <h2 className="display display-md">Selected work, described as it stands.</h2>
            <p className="body-constrained mt-4">
              No invented metrics, no anonymous case studies. Each entry is
              real work, with its honest status.
            </p>
          </div>

          <div className="grid gap-px bg-[var(--hairline)] border border-[var(--hairline)] md:grid-cols-2">
            {FEATURED_PROJECTS.map((p) => (
              <article key={p.name} className="bg-[var(--surface)] p-8 md:p-10 reveal">
                <p className="eyebrow mb-3">{p.kind}</p>
                <h3 className="text-xl md:text-2xl font-medium text-[var(--ink)]">
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
                      className="text-sm text-[var(--ink)] underline underline-offset-4 decoration-[var(--hairline)] hover:decoration-[var(--ink)] [overflow-wrap:anywhere]"
                    >
                      {p.hrefLabel ?? "View"}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/projects" className="btn-outline text-xs">
              All projects and R&D
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 4. CLIENT STRIP ─── */}
      <section ref={clientsRef} className="section-spacing bg-[var(--bg)]" aria-label="Client work">
        <div className="container-tangison">
          <div className="mb-10 md:mb-14">
            <p className="eyebrow mb-2">Clients</p>
            <h2 className="display display-md">Selected client work, delivered through Tangison Studio.</h2>
            <p className="body-constrained mt-4">
              The Tangison group delivers client projects through{" "}
              <a
                href={SITE.studioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-[var(--hairline)] hover:decoration-[var(--ink)]"
              >
                Tangison Studio
              </a>
              . Fifteen selected projects, each linked to its full case study.
            </p>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-[var(--hairline)] border border-[var(--hairline)]">
            {CLIENT_WORK.map((w) => (
              <li key={w.slug} className="bg-[var(--surface)] reveal">
                <a
                  href={STUDIO_CASE_HREF(w.slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                  aria-label={`${w.name}, case study at Tangison Studio`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-2)]">
                    <Image
                      src={w.image}
                      alt={`Project artwork for ${w.name}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-medium text-[var(--ink)] group-hover:text-[var(--teal)] transition-colors">
                      {w.name}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--muted-ink)]">
                      {w.line}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <a
              href={STUDIO_PORTFOLIO_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs"
            >
              View the full portfolio at studio.tangison.com
            </a>
          </div>
        </div>
      </section>

      {/* ─── 5. COMPLIANCE ─── */}
      <section ref={complianceRef} className="section-spacing relative noise-overlay reveal" aria-label="Compliance and contact">
        <div className="absolute inset-0 bg-[var(--ink)]" aria-hidden="true" />
        <div className="container-tangison relative z-10 py-16 md:py-24">
          <p className="eyebrow mb-2 text-[var(--bg)]/60">Tangison Technologies CC</p>
          <h2 className="display display-lg text-[var(--bg)] max-w-2xl">
            Tell us what you need to run.
          </h2>
          <p className="body-constrained mt-5 text-[var(--bg)]/80">
            {SITE.legalName} is a registered Close Corporation in Namibia,
            registered 20 August 2026, 100% Namibian owned, and founded and
            operated in Windhoek.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn-accent">
              Contact and compliance
            </Link>
            <Link href="/profile" className="btn-outline btn-outline-invert">
              Company profile
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
