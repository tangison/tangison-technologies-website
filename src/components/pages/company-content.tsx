'use client';

import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { useReveal, useRevealChildren } from "@/hooks/use-reveal";
import { SITE } from "@/lib/site";

export default function CompanyPage() {
  const heroRef = useReveal<HTMLElement>();
  const philosophyRef = useRevealChildren<HTMLElement>();
  const namibiaRef = useRevealChildren<HTMLElement>();

  return (
    <PageShell>
      {/* ─── HERO ─── */}
      <section ref={heroRef} className="hero-section noise-overlay reveal" aria-label="Company hero">
        <div className="absolute inset-0">
          <Image
            src="/images/tangison/webp/01-skeleton-coast-hero-1920x1080.webp"
            alt="The Namib Desert meeting the Atlantic Ocean through coastal fog on the Skeleton Coast"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(26,26,24,0.45)] via-[rgba(26,26,24,0.2)] to-transparent" />
        </div>

        <div className="absolute inset-0 flex items-end">
          <div className="container-tangison pb-12 md:pb-16">
            <p className="eyebrow mb-4 reveal-delay-1">Company</p>
            <h1 className="display display-lg text-[var(--teal-text)] reveal-delay-2">
              Built in Namibia.<br />Built for conditions<br />like these.
            </h1>
            <p className="mt-4 text-sm text-[var(--teal-text)]/80 body-constrained reveal-delay-3">
              Tangison Technologies operates from Windhoek, designing systems
              for environments where connectivity, data and infrastructure
              cannot be assumed.
            </p>
          </div>
        </div>
      </section>

      {/* ─── OVERVIEW ─── */}
      <section className="section-spacing bg-[var(--bg)]">
        <div className="container-tangison">
          <div className="reveal">
            <p className="eyebrow mb-2">Overview</p>
            <h2 className="display-md text-[var(--ink)]">
              Intelligence for imperfect conditions
            </h2>
            <p className="mt-4 text-[var(--muted-ink)] body-constrained">
              Tangison Technologies is a technology company based in Windhoek,
              Namibia. It designs operational intelligence systems for
              environments where connectivity, data and infrastructure cannot
              be assumed. The company does not build for ideal conditions. It
              builds for the conditions that actually exist.
            </p>
            <p className="mt-3 text-[var(--muted-ink)] body-constrained">
              Founded by Tangi Iigonda, Tangison operates as a connected
              ecosystem: an AI agent platform (Tangison Agent), a design and
              engineering studio (Tangison Studio), and a research lab
              (Tangison Labs). Each capability serves the same purpose:
              making intelligence work where it is needed most.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="reveal reveal-delay-1 p-6 bg-[var(--surface)] border border-[var(--hairline)] rounded-md">
              <span className="text-[var(--teal)] font-mono text-xs">01</span>
              <h3 className="text-sm font-semibold text-[var(--ink)] mt-2">Location</h3>
              <p className="text-[var(--muted-ink)] mt-1 text-xs">{SITE.location}</p>
            </div>
            <div className="reveal reveal-delay-2 p-6 bg-[var(--surface)] border border-[var(--hairline)] rounded-md">
              <span className="text-[var(--teal)] font-mono text-xs">02</span>
              <h3 className="text-sm font-semibold text-[var(--ink)] mt-2">Owner</h3>
              <p className="text-[var(--muted-ink)] mt-1 text-xs">{SITE.owner}</p>
            </div>
            <div className="reveal reveal-delay-3 p-6 bg-[var(--surface)] border border-[var(--hairline)] rounded-md">
              <span className="text-[var(--teal)] font-mono text-xs">03</span>
              <h3 className="text-sm font-semibold text-[var(--ink)] mt-2">Intent</h3>
              <p className="text-[var(--muted-ink)] mt-1 text-xs">{SITE.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHY ─── */}
      <section id="philosophy" ref={philosophyRef} className="section-spacing bg-[var(--surface)]" aria-label="Philosophy">
        <div className="container-tangison">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
            <div className="reveal">
              <p className="eyebrow mb-2">Philosophy</p>
              <h2 className="display-md text-[var(--ink)]">
                Conditions shape the method.
              </h2>
              <p className="mt-4 text-[var(--muted-ink)] body-constrained">
                Most technology is built for conditions that barely exist:
                always-on connectivity, clean data, reliable infrastructure.
                Tangison starts from the opposite premise. The conditions that
                matter most are the ones that resist ideal assumptions.
              </p>
              <p className="mt-3 text-[var(--muted-ink)] body-constrained">
                This is not a philosophical stance. It is a design constraint.
                When connectivity drops, systems must still work. When data
                arrives late or incomplete, decisions must still be possible.
                When infrastructure is uneven, operations must still run.
              </p>
              <p className="mt-3 text-[var(--muted-ink)] body-constrained">
                The Observe, Decide, Operate methodology is the result of
                working with these constraints, not around them. Each phase
                is designed to handle the imperfections the next phase will
                encounter.
              </p>
            </div>

            <div className="reveal reveal-delay-2">
              <Image
                src="/images/tangison/webp/06-strategy-deployment-ring.webp"
                alt="A weathered metal ring aligned with one line across pale coastal sand"
                width={600}
                height={450}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-md w-full h-auto object-cover"
                style={{ objectPosition: "center" }}
              />
            </div>
          </div>

          <hr className="hairline my-12 md:my-16" />

          <div className="grid md:grid-cols-3 gap-6">
            <div className="reveal reveal-delay-1">
              <h3 className="text-sm font-semibold text-[var(--ink)]">Principle one</h3>
              <p className="mt-2 text-[var(--muted-ink)] text-sm">
                Work with what exists, not what should exist. Design for
                the conditions on the ground, not the conditions in the
                specification.
              </p>
            </div>
            <div className="reveal reveal-delay-2">
              <h3 className="text-sm font-semibold text-[var(--ink)]">Principle two</h3>
              <p className="mt-2 text-[var(--muted-ink)] text-sm">
                Degrade gracefully, do not fail catastrophically. When
                conditions worsen, systems should still function, even
                if at reduced capability.
              </p>
            </div>
            <div className="reveal reveal-delay-3">
              <h3 className="text-sm font-semibold text-[var(--ink)]">Principle three</h3>
              <p className="mt-2 text-[var(--muted-ink)] text-sm">
                Traceability over opacity. Every observation and every
                decision should be traceable to its source. Intelligence
                that cannot be examined cannot be trusted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NAMIBIA ─── */}
      <section id="namibia" ref={namibiaRef} className="section-spacing bg-[var(--bg)]" aria-label="Namibia context">
        <div className="container-tangison">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="reveal-image reveal-delay-1">
              <Image
                src="/images/tangison/webp/10-about-namibia-signal.webp"
                alt="A single distant signal mast on a vast Namibian gravel horizon"
                width={600}
                height={450}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-md w-full h-auto object-cover"
                style={{ objectPosition: "right center" }}
              />
            </div>
            <div className="reveal reveal-delay-2">
              <p className="eyebrow mb-2">Context</p>
              <h2 className="display-md text-[var(--ink)]">
                Namibia is not an edge case.
              </h2>
              <p className="mt-4 text-[var(--muted-ink)] body-constrained">
                Namibia is a country of vast distances, sparse connectivity
                and extreme environmental conditions. The Skeleton Coast,
                the Namib Desert, the Kalahari: these are not exotic
                exceptions. They are everyday reality for millions of people
                and thousands of operations.
              </p>
              <p className="mt-3 text-[var(--muted-ink)] body-constrained">
                That context is the design brief. Technology that works in
                Windhoek, that works on the gravel plains, that works where
                the fog rolls in from the Atlantic, is technology that works
                anywhere conditions are imperfect. And imperfect conditions
                are far more common than ideal ones.
              </p>
              <p className="mt-3 text-[var(--muted-ink)] body-constrained">
                Tangison Technologies does not treat Namibia as a limitation
                to overcome. It treats Namibia as the environment that
                teaches the methodology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLOSING ─── */}
      <section className="section-spacing bg-[var(--surface)]">
        <div className="container-tangison text-center">
          <div className="reveal">
            <p className="eyebrow mb-2">Next step</p>
            <h2 className="display-md text-[var(--ink)]">
              See how the methodology works
            </h2>
            <Link href="/technology" className="mt-5 btn-accent inline-flex">
              Technology
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
