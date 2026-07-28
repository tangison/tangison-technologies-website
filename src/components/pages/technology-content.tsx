'use client';

import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { useReveal, useRevealChildren } from "@/hooks/use-reveal";
import { SITE } from "@/lib/site";
import { Tabs } from "@/components/ui/tabs";
import { Accordion } from "@/components/ui/accordion";
import { ZoomReveal } from "@/components/ui/zoom-reveal";
import { ClipReveal } from "@/components/ui/clip-reveal";

const PHASES = [
  {
    id: "observe",
    phase: "Observe",
    number: "01",
    headline: "Get clear readings from conditions that resist measurement.",
    description:
      "The first discipline is observation: listening before speaking, sensing before acting. In environments where connectivity drops, data arrives late, and infrastructure is uneven, observation must work without assuming a steady stream of clean inputs. Tangison builds sensing systems that tolerate gaps, delays and noise, so you get usable signals instead of silence.",
    details: [
      { id: "observe-detail-1", title: "How does Tangison handle intermittent connectivity?", body: "Observation systems are designed to buffer and store data locally when connectivity drops, then transmit when a connection becomes available. They do not require a constant network link. Sensors and data collectors continue to record signals during offline periods, so no observations are lost because the network was unavailable." },
      { id: "observe-detail-2", title: "What happens when data arrives late or incomplete?", body: "The Observe phase is built for delayed and partial data. It does not discard late arrivals or refuse incomplete signals. Instead, it timestamps what it receives, flags what is uncertain, and passes it to the Decide phase with its confidence level attached. The downstream phases work with what is available, not what is ideal." },
      { id: "observe-detail-3", title: "What environments does Observe target?", body: "Any environment where sensor networks are sparse, connectivity is intermittent, and signals arrive with noise or gaps. This includes remote monitoring stations, field operations on gravel plains, coastal infrastructure under fog, and agricultural sensors across vast distances. These are environments that standard monitoring systems cannot reliably serve." },
    ],
    image: "/images/tangison/webp/03-ai-operations-node.webp",
    imageAlt: "A minimal graphite control node with a single teal status light",
    focal: "right center",
  },
  {
    id: "decide",
    phase: "Decide",
    number: "02",
    headline: "Make operational choices with the data you have, not the data you wish you had.",
    description:
      "Decisions in imperfect conditions are not abstract analyses. They are concrete choices made under limited time, partial information and uneven infrastructure. Tangison decision systems do not wait for perfect data. They work with what is available, weigh what is uncertain, and commit to what is actionable, so you can move forward instead of waiting for conditions that may never arrive.",
    details: [
      { id: "decide-detail-1", title: "How does Decide handle partial information?", body: "Decision systems operate with bounded confidence. They assign confidence levels to each input, propagate uncertainty through the decision chain, and produce outputs that are annotated with their reliability. This means every decision is traceable to its source data and its certainty level. Decisions are never presented as absolute when the inputs are not." },
      { id: "decide-detail-2", title: "Can Decide balance speed and accuracy?", body: "Yes. The Decide phase includes configurable time constraints. When decisions must be made quickly, the system reduces its evidence threshold and flags the decision as time-constrained. When more time is available, it waits for additional data to increase confidence. The tradeoff between speed and accuracy is explicit, not hidden." },
      { id: "decide-detail-3", title: "Why does traceability matter?", body: "Every observation and every decision in the Tangison system is logged with its provenance. This means the reasoning chain can be inspected, audited and reproduced. Intelligence that cannot be examined cannot be trusted. In operational environments, traceability is the difference between a decision that works and a decision that nobody can explain or verify." },
    ],
    image: "/images/tangison/webp/04-data-decision-planes.webp",
    imageAlt: "Intersecting smoke-glass planes joined by a precise teal seam",
    focal: "left center",
  },
  {
    id: "operate",
    phase: "Operate",
    number: "03",
    headline: "Run operations where connectivity drops and conditions shift without warning.",
    description:
      "Operation is the proof that the method works. Systems that run where hardware ages, networks fragment and conditions shift without warning. Tangison operational platforms are designed for the field, not the lab. They run locally when they must, connect when they can, and degrade gracefully when they cannot, so your operations continue instead of crashing when conditions worsen.",
    details: [
      { id: "operate-detail-1", title: "How does Operate handle disconnected environments?", body: "Operational platforms run locally when connectivity is unavailable. They do not require a constant connection to a central server. Local execution ensures that operations continue even when the network drops. When connectivity returns, the platform synchronises with upstream systems. The default mode is local-first, cloud-optional." },
      { id: "operate-detail-2", title: "What does graceful degradation mean?", body: "When conditions worsen, Tangison systems reduce capability rather than fail entirely. If bandwidth drops, the system compresses transmissions. If sensor data becomes unreliable, the system falls back to simpler heuristics. If compute resources shrink, the system prioritises critical tasks. The principle is: operations continue, even if at reduced capability. They never halt silently." },
      { id: "operate-detail-3", title: "What is the difference between lab and field design?", body: "Lab-designed systems assume stable infrastructure, clean data and constant connectivity. Field-designed systems assume none of these. Tangison Operate platforms are tested in Namibian conditions where connectivity drops, hardware ages under coastal fog, and data arrives late from remote stations. This is where the methodology is proven, not in simulated environments." },
    ],
    image: "/images/tangison/webp/05-resilient-platform-monolith.webp",
    imageAlt: "A dark stone monolith with a narrow light seam emerging through coastal fog",
    focal: "left center",
  },
];

export default function TechnologyPage() {
  const heroRef = useReveal<HTMLElement>();
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
              ideal infrastructure. Three connected phases that turn
              raw, uncertain signals into operational action.
            </p>
          </div>
        </div>
      </section>

      {/* ─── METHODOLOGY OVERVIEW ─── */}
      <section className="section-spacing bg-[var(--bg)]">
        <div className="container-tangison">
          <div className="reveal">
            <h2 className="display-md text-[var(--ink)]">
              Intelligence that runs without assumptions
            </h2>
            <p className="mt-4 text-[var(--muted-ink)] body-constrained">
              Tangison does not offer three separate products labelled Observe,
              Decide and Operate. These are phases of a single methodology:
              the sequence that turns uncertain signals into operational
              action. Each phase handles the gaps the next one will encounter.
              The methodology works because the phases are connected, not
              because they are sold separately.
            </p>
          </div>
        </div>
      </section>

      {/* ─── PHASES: Tabs + Accordion ─── */}
      <section className="bg-[var(--surface)]" aria-label="Methodology phases">
        <div className="container-tangison section-spacing-tight">
          <Tabs
            items={PHASES.map((phase) => ({
              id: phase.id,
              label: phase.phase,
              content: (
                <div key={phase.id} id={phase.id} className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
                  {/* Text side */}
                  <div>
                    <span className="text-[var(--teal)] font-mono text-xs tracking-widest">{phase.number}</span>
                    <p className="eyebrow mt-3 mb-1">{phase.phase}</p>
                    <h2 className="display-sm text-[var(--ink)]">{phase.headline}</h2>
                    <p className="mt-3 text-[var(--muted-ink)] body-constrained">{phase.description}</p>

                    {/* Accordion for detailed questions */}
                    <div className="mt-6">
                      <p className="eyebrow mb-3">Details</p>
                      <Accordion items={phase.details} />
                    </div>
                  </div>

                  {/* Image side */}
                  <div>
                    <ZoomReveal origin={phase.focal === "left center" ? "left" : "right"} delay={0.1}>
                      <Image
                        src={phase.image}
                        alt={phase.imageAlt}
                        width={600}
                        height={400}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="rounded-md w-full h-auto object-cover"
                        style={{ objectPosition: phase.focal }}
                      />
                    </ZoomReveal>
                  </div>
                </div>
              ),
            }))}
            defaultValue="observe"
          />
        </div>
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
                services. It does not assume pristine data. It keeps your
                data on your hardware and your operations running when
                connectivity drops, because it was designed for the same
                conditions that shaped the methodology.
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
            <ClipReveal direction="right" delay={0.1} className="reveal-delay-2">
              <Image
                src="/images/tangison/webp/08-ecosystem-agent.webp"
                alt="A smooth graphite stone with one small teal signal on pale sand"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-md w-full h-auto object-cover"
                style={{ objectPosition: "left bottom" }}
              />
            </ClipReveal>
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
              When the market offers no solution for the conditions you face,
              Labs builds one and tests it where those conditions actually exist.
            </p>
          </div>

          <div className="mt-8">
            <ZoomReveal origin="center" delay={0.1}>
              <Image
                src="/images/tangison/webp/09-ecosystem-labs.webp"
                alt="A brushed aluminium disc emerging from dark wet coastal sand"
                width={1200}
                height={500}
                sizes="100vw"
                className="rounded-md w-full h-auto object-cover"
                style={{ objectPosition: "right top" }}
              />
            </ZoomReveal>
          </div>
        </div>
      </section>

      {/* ─── CLOSING ─── */}
      <section className="section-spacing bg-[var(--surface)]">
        <div className="container-tangison text-center">
          <div className="reveal">
            <h2 className="display-md text-[var(--ink)]">
              Meet the company that built this methodology
            </h2>
            <Link href="/company" className="mt-5 btn-outline inline-flex">
              About Tangison Technologies
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
