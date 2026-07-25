'use client';

import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { useReveal, useRevealChildren } from "@/hooks/use-reveal";
import { SITE } from "@/lib/site";

const PHASES = [
  {
    id: "observe",
    phase: "Observe",
    number: "01",
    headline: "Gather signals from conditions that resist measurement.",
    description:
      "The first discipline is observation: listening before speaking, sensing before acting. In environments where connectivity drops, data arrives late, and infrastructure is uneven, observation must work without assuming a steady stream of clean inputs. Tangison builds sensing systems that tolerate gaps, delays and noise.",
    details: [
      "Works with intermittent connectivity and delayed data",
      "Handles noisy, incomplete and unstructured signals",
      "Designed for environments where sensor networks are sparse",
    ],
    image: "/images/tangison/webp/03-ai-operations-node.webp",
    imageAlt: "A minimal graphite control node with a single teal status light",
    focal: "right center",
  },
  {
    id: "decide",
    phase: "Decide",
    number: "02",
    headline: "Turn observations into operational choices under real constraints.",
    description:
      "Decisions in imperfect conditions are not abstract analyses. They are concrete choices made under limited time, partial information and incomplete infrastructure. Tangison decision systems do not wait for perfect data. They work with what is available, weigh what is uncertain, and commit to what is actionable.",
    details: [
      "Operates with partial information and bounded confidence",
      "Balances speed and accuracy under time pressure",
      "Produces decisions that are traceable, not opaque",
    ],
    image: "/images/tangison/webp/04-data-decision-planes.webp",
    imageAlt: "Intersecting smoke-glass planes joined by a precise teal seam",
    focal: "left center",
  },
  {
    id: "operate",
    phase: "Operate",
    number: "03",
    headline: "Execute decisions where connectivity drops and conditions shift.",
    description:
      "Operation is the proof of the method. Systems that run where hardware ages, networks fragment and conditions change without warning. Tangison operational platforms are designed for the field, not the lab. They run locally when they must, connect when they can, and degrade gracefully when they cannot.",
    details: [
      "Designed for disconnected and intermittently connected environments",
      "Degrades gracefully rather than failing catastrophically",
      "Runs locally when connectivity is unavailable",
    ],
    image: "/images/tangison/webp/05-resilient-platform-monolith.webp",
    imageAlt: "A dark stone monolith with a narrow light seam emerging through coastal fog",
    focal: "left center",
  },
];

export default function TechnologyPage() {
  const heroRef = useReveal<HTMLElement>();
  const phasesRef = useRevealChildren<HTMLElement>();
  const agentRef = useRevealChildren<HTMLElement>();

  return (
    <PageShell>
      {/* ─── HERO ─── */}
      <section ref={heroRef} className="hero-section noise-overlay reveal" aria-label="Technology hero">
        <div className="absolute inset-0">
          <Image
            src="/images/tangison/webp/06-strategy-deployment-ring.webp"
            alt="A weathered metal ring aligned with one line across pale coastal sand"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(26,26,24,0.45)] via-[rgba(26,26,24,0.2)] to-transparent" />
        </div>

        <div className="absolute inset-0 flex items-end">
          <div className="container-tangison pb-12 md:pb-16">
            <p className="eyebrow mb-4 reveal-delay-1">Technology</p>
            <h1 className="display display-lg text-[var(--teal-text)] reveal-delay-2">
              Observe. Decide.<br />Operate.
            </h1>
            <p className="mt-4 text-sm text-[var(--teal-text)]/80 body-constrained reveal-delay-3">
              A methodology built for conditions that do not wait for
              ideal infrastructure. Three phases, one intention:
              operational intelligence where it matters most.
            </p>
          </div>
        </div>
      </section>

      {/* ─── METHODOLOGY OVERVIEW ─── */}
      <section className="section-spacing bg-[var(--bg)]">
        <div className="container-tangison">
          <div className="reveal">
            <p className="eyebrow mb-2">Overview</p>
            <h2 className="display-md text-[var(--ink)]">
              Intelligence as a discipline, not a feature
            </h2>
            <p className="mt-4 text-[var(--muted-ink)] body-constrained">
              Tangison does not offer three separate products labelled Observe,
              Decide and Operate. These are phases of a single methodology:
              the sequence that turns raw, imperfect signals into operational
              action. Each phase informs the next. The methodology works
              because the phases are connected.
            </p>
          </div>
        </div>
      </section>

      {/* ─── PHASES ─── */}
      <section ref={phasesRef} className="bg-[var(--surface)]" aria-label="Methodology phases">
        {PHASES.map((phase, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={phase.id}
              id={phase.id}
              className="section-spacing border-t border-[var(--hairline)]"
            >
              <div className="container-tangison grid md:grid-cols-2 gap-6 md:gap-12 items-center">
                {/* Text side */}
                <div className={`reveal ${isEven ? "" : "reveal-left"} reveal-delay-1 ${isEven ? "" : "order-2 md:order-2"}`}>
                  <span className="text-[var(--teal)] font-mono text-xs tracking-widest">{phase.number}</span>
                  <p className="eyebrow mt-3 mb-1">{phase.phase}</p>
                  <h2 className="display-sm text-[var(--ink)]">{phase.headline}</h2>
                  <p className="mt-3 text-[var(--muted-ink)] body-constrained">{phase.description}</p>
                  <ul className="mt-4 space-y-2">
                    {phase.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-[var(--muted-ink)]">
                        <span className="inline-block w-1 h-1 rounded-full bg-[var(--teal)] mt-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image side */}
                <div className={`reveal-image reveal-delay-2 ${isEven ? "order-1 md:order-2" : "order-1 md:order-1"}`}>
                  <Image
                    src={phase.image}
                    alt={phase.imageAlt}
                    width={600}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="rounded-md w-full h-auto object-cover"
                    style={{ objectPosition: phase.focal }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ─── TANGISON AGENT ─── */}
      <section id="agent" ref={agentRef} className="section-spacing bg-[var(--surface-2)]" aria-label="Tangison Agent">
        <div className="container-tangison">
          <div className="reveal">
            <p className="eyebrow mb-2">Product</p>
            <h2 className="display-md text-[var(--ink)]">Tangison Agent</h2>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="reveal-left reveal-delay-1">
              <p className="text-[var(--muted-ink)] body-constrained">
                Tangison Agent is a self-hosted AI agent platform that runs
                inside your infrastructure. It applies the Observe, Decide,
                Operate methodology as software: gathering signals from your
                operational environment, processing them into decisions, and
                executing those decisions where the work happens.
              </p>
              <p className="mt-3 text-[var(--muted-ink)] body-constrained">
                It does not require constant connectivity to external
                services. It does not assume pristine data. It is designed
                for the same imperfect conditions that shaped the methodology.
              </p>
              <Link
                href={SITE.agentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 btn-accent inline-flex"
              >
                Visit Tangison Agent
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M7 17L17 7M7 7h10v10"/></svg>
              </Link>
            </div>
            <div className="reveal-image reveal-delay-2">
              <Image
                src="/images/tangison/webp/08-ecosystem-agent.webp"
                alt="A smooth graphite stone with one small teal signal on pale sand"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-md w-full h-auto object-cover"
                style={{ objectPosition: "left bottom" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── LABS ─── */}
      <section id="labs" className="section-spacing bg-[var(--bg)]">
        <div className="container-tangison">
          <div className="reveal">
            <p className="eyebrow mb-2">Research</p>
            <h2 className="display-md text-[var(--ink)]">Tangison Labs</h2>
            <p className="mt-4 text-[var(--muted-ink)] body-constrained">
              Tangison Labs explores experimental systems for conditions
              that existing technology does not address. It operates
              as the research and prototyping arm of the methodology,
              testing new approaches to sensing, decision-making and
              operational execution before they become production systems.
            </p>
          </div>

          <div className="mt-8 reveal-image reveal-delay-1">
            <Image
              src="/images/tangison/webp/09-ecosystem-labs.webp"
              alt="A brushed aluminium disc emerging from dark wet coastal sand"
              width={1200}
              height={500}
              sizes="(max-width: 768px) 100vw, 100vw"
              className="rounded-md w-full h-auto object-cover"
              style={{ objectPosition: "right top" }}
            />
          </div>
        </div>
      </section>

      {/* ─── CLOSING ─── */}
      <section className="section-spacing bg-[var(--surface)]">
        <div className="container-tangison text-center">
          <div className="reveal">
            <p className="eyebrow mb-2">Next step</p>
            <h2 className="display-md text-[var(--ink)]">
              See the company behind the methodology
            </h2>
            <Link href="/company" className="mt-5 btn-outline inline-flex">
              About Tangison
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
