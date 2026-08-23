'use client';

import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { useRevealChildren } from "@/hooks/use-reveal";
import { SITE } from "@/lib/site";

type Capability = {
  id: string;
  number: string;
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
  scope: { label: string; text: string }[];
  practice?: string;
};

const SECTIONS: Capability[] = [
  {
    id: "ict",
    number: "01",
    title: "Information and Communications Technology",
    lead: "We design, build, and maintain the digital backbone institutions run on every day.",
    image: "/images/tangison/webp/15-ict-coastal-backbone.jpg",
    imageAlt: "A thin graphite lattice receding diagonally into dense coastal fog, one teal status light at the nearest joint",
    scope: [
      {
        label: "Systems development",
        text: "Web platforms, business portals, and internal tools built to specification.",
      },
      {
        label: "Technical infrastructure",
        text: "Networks, hosting environments, and deployment foundations.",
      },
      {
        label: "IT support",
        text: "Ongoing operational support for the systems we and our clients run.",
      },
    ],
    practice:
      "A national newspaper's real-time digital portal and gazette compiler, running live at timesofnamibia.com.",
  },
  {
    id: "ai",
    number: "02",
    title: "Artificial Intelligence",
    lead: "Applied AI means models and agents deployed against your own systems and data, not rented from a third party.",
    image: "/images/tangison/webp/03-ai-operations-node.webp",
    imageAlt: "A minimal graphite control node with a single teal status light",
    scope: [
      {
        label: "Applied AI solutions",
        text: "Workflow automation, document and data processing, and intelligent tooling.",
      },
      {
        label: "Automation systems",
        text: "End-to-end processes that run without manual handoffs.",
      },
      {
        label: "In-house research",
        text: "The Tangison Agent, a self-hosted AI agent platform, is our standing R&D reference for autonomous, auditable agent systems.",
      },
    ],
    practice: "We build for environments where the data has to stay. Our AI work runs inside your infrastructure.",
  },
  {
    id: "digital-transformation",
    number: "03",
    title: "Digital Transformation Services",
    lead: "We move institutions from manual processes to measured, auditable digital operations.",
    image: "/images/tangison/webp/04-data-decision-planes.webp",
    imageAlt: "Intersecting smoke-glass planes joined by a precise teal seam",
    scope: [
      {
        label: "Advisory",
        text: "Assessment of current processes, technology, and risk, with a roadmap agreed with your team.",
      },
      {
        label: "Implementation",
        text: "Migration, process redesign, and deployment, with the systems left documented and ready to run.",
      },
    ],
  },
  {
    id: "consulting",
    number: "04",
    title: "Consulting",
    lead: "Strategic and technical consulting for decisions that have to hold up under scrutiny.",
    image: "/images/tangison/webp/16-consulting-decision-horizon.jpg",
    imageAlt: "A single dark plinth on a fog-covered plain at dawn, one thin teal line across the fog",
    scope: [
      {
        label: "Strategic consulting",
        text: "Positioning, capability, and procurement-readiness questions for institutions and groups.",
      },
      {
        label: "Technical consulting",
        text: "Architecture, vendor evaluation, and implementation decisions.",
      },
    ],
  },
  {
    id: "rnd",
    number: "05",
    title: "Research and Development",
    lead: "We prototype in-house so our clients buy outcomes, not promises.",
    image: "/images/tangison/webp/05-resilient-platform-monolith.webp",
    imageAlt: "A dark stone monolith with a narrow light seam emerging through coastal fog",
    scope: [
      {
        label: "Applied research",
        text: "Systems for imperfect conditions: intermittent connectivity, late-arriving data, uneven infrastructure.",
      },
      {
        label: "Prototyping and product development",
        text: "From concept to a working system, in-house.",
      },
    ],
    practice:
      "Our R&D work includes the Tangison Agent, a self-hosted AI agent platform developed in-house and discontinued in 2026. It remains our standing reference for autonomous, auditable agent systems.",
  },
];

export default function CapabilitiesContent() {
  const bodyRef = useRevealChildren<HTMLElement>();

  return (
    <PageShell>
      <section className="section-spacing bg-[var(--bg)]" aria-label="Page header">
        <div className="container-tangison">
          <p className="eyebrow mb-2">Capabilities</p>
          <h1 className="display display-lg max-w-3xl">Five ways we keep institutions running.</h1>
          <p className="body-constrained mt-6">
            Every capability below is one we deliver today, in-house or through{" "}
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
      </section>

      {SECTIONS.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          ref={i === 0 ? bodyRef : undefined}
          className={`section-spacing ${i % 2 === 0 ? "bg-[var(--surface-2)]" : "bg-[var(--bg)]"}`}
          aria-label={s.title}
        >
          <div className="container-tangison">
            <div className="relative mb-10 aspect-[21/9] overflow-hidden bg-[var(--surface)] md:mb-14">
              <Image src={s.image} alt={s.imageAlt} fill sizes="100vw" className="object-cover reveal-image" />
            </div>
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <p className="font-mono text-xs text-[var(--muted-ink)]">{s.number}</p>
                <h2 className="display display-sm mt-2">{s.title}</h2>
              </div>
              <div className="md:col-span-8">
                <p className="text-lg font-medium text-[var(--ink)] max-w-xl">{s.lead}</p>
                <ul className="mt-6 border-t border-[var(--hairline)]">
                  {s.scope.map((item) => (
                    <li key={item.label} className="py-4 border-b border-[var(--hairline)]">
                      <p className="text-sm font-semibold text-[var(--ink)]">{item.label}</p>
                      <p className="mt-1 text-sm text-[var(--muted-ink)] max-w-xl">{item.text}</p>
                    </li>
                  ))}
                </ul>
                {s.practice && (
                  <p className="mt-6 text-sm text-[var(--muted-ink)] max-w-xl border-l-2 border-[var(--teal)] pl-4">
                    <span className="font-semibold text-[var(--ink)]">In practice. </span>
                    {s.practice}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section-spacing bg-[var(--ink)]" aria-label="Contact">
        <div className="container-tangison py-14 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="display display-sm text-[var(--bg)] max-w-xl">
            Discuss a capability with us.
          </h2>
          <Link href="/contact" className="btn-accent">
            Start a conversation
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
