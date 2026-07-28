'use client';

import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { useReveal, useRevealChildren } from "@/hooks/use-reveal";
import { SITE } from "@/lib/site";
import { Accordion } from "@/components/ui/accordion";
import { ClipReveal } from "@/components/ui/clip-reveal";
import { ZoomReveal } from "@/components/ui/zoom-reveal";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";

/* ─── Philosophy accordion items ─── */
const PHILOSOPHY_ITEMS = [
  {
    id: "philosophy-design",
    title: "Design for what exists",
    body: "Work with what exists, not what should exist. Design for the conditions on the ground, not the conditions in the specification. Most technology is built for conditions that barely exist: always-on connectivity, clean data, reliable infrastructure. Tangison starts from the opposite premise. The conditions that matter most are the ones that resist ideal assumptions. When connectivity drops, systems must still work. When data arrives late or incomplete, decisions must still be possible. When infrastructure is uneven, operations must still run.",
  },
  {
    id: "philosophy-degrade",
    title: "Degrade, not crash",
    body: "When conditions worsen, systems should still function, even if at reduced capability. Operations continue, not halt. The Observe, Decide, Operate methodology is built around this principle. Each phase is designed to handle the imperfections the next phase will encounter. If bandwidth drops, the system compresses transmissions. If sensor data becomes unreliable, the system falls back to simpler heuristics. If compute resources shrink, the system prioritises critical tasks. The principle is: operations continue, even if at reduced capability. They never halt silently.",
  },
  {
    id: "philosophy-traceable",
    title: "Traceable, not opaque",
    body: "Every observation and every decision should be traceable to its source. Intelligence that cannot be examined cannot be trusted. Audit logs are a feature, not an afterthought. The Tangison system logs provenance at every stage. This means the reasoning chain can be inspected, audited and reproduced. In operational environments, traceability is the difference between a decision that works and a decision that nobody can explain or verify. Decisions are never presented as absolute when the inputs are not.",
  },
];

/* ─── Company info cards ─── */
const COMPANY_CARDS = [
  {
    heading: "Location",
    body: `Based in ${SITE.location}. Operations run from the conditions that teach the methodology. Windhoek is not an exotic outlier. It is a real city with real infrastructure gaps that shape real systems.`,
  },
  {
    heading: "Founded by",
    body: `${SITE.owner}. A solo founder building systems for conditions others ignore. The methodology was developed from direct experience with Namibian operational conditions, not from a textbook.`,
  },
  {
    heading: "Intent",
    body: "Operational intelligence without assumptions. Systems that work where others assume they cannot. This is a design constraint, not a marketing claim.",
  },
];

export default function CompanyPage() {
  const heroRef = useReveal<HTMLElement>();
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
              Operational intelligence<br/>built where conditions<br/>are the harshest.
            </h1>
            <p className="mt-4 text-sm text-[var(--teal-text)]/80 body-constrained reveal-delay-3">
              Tangison Technologies operates from Windhoek, building systems
              that work where connectivity drops, data arrives late,
              and infrastructure is uneven.
            </p>
          </div>
        </div>
      </section>

      {/* ─── OVERVIEW ─── */}
      <section className="section-spacing bg-[var(--bg)]">
        <div className="container-tangison">
          <div className="reveal">
            <h2 className="display-md text-[var(--ink)]">
              Operational intelligence without assumptions
            </h2>
            <p className="mt-4 text-[var(--muted-ink)] body-constrained">
              Tangison Technologies is a technology company based in Windhoek,
              Namibia. It builds operational intelligence systems that work
              where connectivity drops, data arrives late, and infrastructure
              is uneven. The company does not build for ideal conditions. It
              builds for the conditions that actually exist.
            </p>
            <p className="mt-3 text-[var(--muted-ink)] body-constrained">
              Founded by Tangi Iigonda, Tangison operates as a connected
              ecosystem: an AI agent platform (Tangison Agent), a design and
              engineering studio (Tangison Studio), and a research lab
              (Tangison Labs). Each capability builds systems that work
              without assuming perfect conditions.
            </p>
          </div>

          <StaggerReveal staggerDelay={0.1} className="mt-8 grid md:grid-cols-3 gap-6">
            {COMPANY_CARDS.map((card) => (
              <StaggerItem key={card.heading} className="p-6 bg-[var(--surface)] border border-[var(--hairline)] rounded-md card-hover-lift">
                <h3 className="text-sm font-semibold text-[var(--ink)]">{card.heading}</h3>
                <p className="text-[var(--muted-ink)] mt-2 text-sm">{card.body}</p>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ─── PHILOSOPHY (Accordion) ─── */}
      <section id="philosophy" className="section-spacing bg-[var(--surface)]" aria-label="Philosophy">
        <div className="container-tangison">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
            <div>
              <ZoomReveal origin="center">
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
              </ZoomReveal>

              {/* Philosophy accordion */}
              <div className="mt-8">
                <p className="eyebrow mb-4">Principles</p>
                <Accordion items={PHILOSOPHY_ITEMS} />
              </div>
            </div>

            <ClipReveal direction="right" delay={0.1}>
              <Image
                src="/images/tangison/webp/06-strategy-deployment-ring.webp"
                alt="A weathered metal ring aligned with one line across pale coastal sand"
                width={600}
                height={450}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-md w-full h-auto object-cover"
                style={{ objectPosition: "center" }}
              />
            </ClipReveal>
          </div>
        </div>
      </section>

      {/* ─── NAMIBIA ─── */}
      <section id="namibia" ref={namibiaRef} className="section-spacing bg-[var(--bg)]" aria-label="Namibia context">
        <div className="container-tangison">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <ClipReveal direction="right" className="reveal-delay-1">
              <Image
                src="/images/tangison/webp/10-about-namibia-signal.webp"
                alt="A single distant signal mast on a vast Namibian gravel horizon"
                width={600}
                height={450}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-md w-full h-auto object-cover"
                style={{ objectPosition: "right center" }}
              />
            </ClipReveal>
            <div className="reveal reveal-delay-2">
              <h2 className="display-md text-[var(--ink)]">
                Namibia is not an edge case.
              </h2>
              <p className="mt-4 text-[var(--muted-ink)] body-constrained">
                Namibia is a country of vast distances, sparse connectivity
                and extreme environmental conditions. The Skeleton Coast,
                the Namib Desert, the Kalahari: these are not exotic
                exceptions. They are everyday reality for millions of people
                and thousands of operations that need technology to work
                under exactly these conditions.
              </p>
              <p className="mt-3 text-[var(--muted-ink)] body-constrained">
                That context is the design brief. Technology that works in
                Windhoek, that works on the gravel plains, that works where
                the fog rolls in from the Atlantic, is technology that works
                anywhere conditions are less than ideal. And conditions that
                are less than ideal are far more common than perfect ones.
              </p>
              <p className="mt-3 text-[var(--muted-ink)] body-constrained">
                Tangison Technologies does not treat Namibia as a limitation
                to overcome. It treats Namibia as the environment that
                proves the methodology. Every system is tested where the
                conditions are the harshest, not where they are the easiest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLOSING ─── */}
      <section className="section-spacing bg-[var(--surface)]">
        <div className="container-tangison text-center">
          <div className="reveal">
            <h2 className="display-md text-[var(--ink)]">
              Understand how the methodology delivers results
            </h2>
            <Link href="/technology" className="mt-5 btn-accent inline-flex">
              See the technology
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
