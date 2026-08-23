'use client';

import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { useRevealChildren } from "@/hooks/use-reveal";
import {
  SITE,
  CLIENT_WORK,
  STUDIO_CASE_HREF,
} from "@/lib/site";

const RND_ENTRIES = [
  {
    name: "Tangison Agent",
    kind: "Research and Development, in-house",
    description:
      "A self-hosted AI agent platform: an AI workforce that runs inside your infrastructure. Developed in-house as applied research into autonomous, auditable agent systems, with full visibility into every step an agent takes.",
    status: "Discontinued.",
  },
];

const FEATURED_CLIENT = [
  {
    name: "Times of Namibia",
    kind: "Client work, Information and Communications Technology",
    description:
      "A real-time digital portal and weekly print gazette compiler for one of Namibia's national newspapers.",
    href: "https://timesofnamibia.com",
    hrefLabel: "timesofnamibia.com",
  },
  {
    name: "Oryx Institute",
    kind: "Client work, Information and Communications Technology",
    description:
      "The digital platform for a multidisciplinary vocational education and training institution being established in Windhoek.",
    href: "https://oryx-institute.vercel.app",
    hrefLabel: "oryx-institute.vercel.app",
  },
  {
    name: "Feorm",
    kind: "Client work, Information and Communications Technology",
    description:
      "A Namibian agrotourism and equipment rental marketplace connecting travellers with working farms, guesthouses, and lodges across the country.",
    status: "Delivered and discontinued.",
    href: STUDIO_CASE_HREF("feorm"),
    hrefLabel: "Case study",
  },
];

export default function ProjectsContent() {
  const gridRef = useRevealChildren<HTMLUListElement>();

  return (
    <PageShell>
      <section className="section-spacing bg-[var(--bg)]" aria-label="Page header">
        <div className="container-tangison">
          <p className="eyebrow mb-2">Projects and R&D</p>
          <h1 className="display display-lg max-w-3xl">
            Selected work, described as it stands.
          </h1>
          <p className="body-constrained mt-6">
            No invented metrics, no anonymous case studies. Each entry below
            is real work, with its honest status.
          </p>
        </div>
      </section>

      {/* In-house R&D */}
      <section className="section-spacing bg-[var(--surface-2)]" aria-label="In-house R and D">
        <div className="container-tangison">
          <p className="eyebrow mb-6">In-house R&D</p>
          <div className="grid gap-px bg-[var(--hairline)] border border-[var(--hairline)] md:grid-cols-1">
            {RND_ENTRIES.map((p) => (
              <article key={p.name} className="bg-[var(--surface)] p-8 md:p-10">
                <p className="eyebrow mb-3">{p.kind}</p>
                <h2 className="text-xl md:text-2xl font-medium text-[var(--ink)]">
                  {p.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted-ink)] max-w-3xl">
                  {p.description}
                </p>
                {p.status && (
                  <p className="mt-5 text-xs uppercase tracking-[0.14em] text-[var(--destructive)]">
                    Status: {p.status}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured client work */}
      <section className="section-spacing bg-[var(--bg)]" aria-label="Featured client work">
        <div className="container-tangison">
          <p className="eyebrow mb-6">Featured client work</p>
          <div className="grid gap-px bg-[var(--hairline)] border border-[var(--hairline)] md:grid-cols-3">
            {FEATURED_CLIENT.map((p) => (
              <article key={p.name} className="bg-[var(--surface)] p-8 flex flex-col">
                <p className="eyebrow mb-3">{p.kind}</p>
                <h2 className="text-lg md:text-xl font-medium text-[var(--ink)]">
                  {p.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted-ink)] flex-1">
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--ink)] underline underline-offset-4 decoration-[var(--hairline)] hover:decoration-[var(--ink)] [overflow-wrap:anywhere]"
                    >
                      {p.hrefLabel}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Client work through Tangison Studio */}
      <section className="section-spacing bg-[var(--surface-2)]" aria-label="Client work through Tangison Studio">
        <div className="container-tangison">
          <p className="eyebrow mb-2">Clients</p>
          <h2 className="display display-md mb-4">Client work through Tangison Studio.</h2>
          <p className="body-constrained mb-10">
            The Tangison group delivers client projects through{" "}
            <a
              href={SITE.studioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-[var(--hairline)] hover:decoration-[var(--ink)]"
            >
              Tangison Studio
            </a>
            , its design and engineering arm. Fifteen selected projects, each
            linked to its full case study.
          </p>

          <ul ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[var(--hairline)] border border-[var(--hairline)]">
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
                      sizes="(max-width: 768px) 50vw, 33vw"
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
        </div>
      </section>

      <section className="section-spacing bg-[var(--ink)]" aria-label="Contact">
        <div className="container-tangison py-14 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="display display-sm text-[var(--bg)] max-w-xl">
            Work with us on your next system.
          </h2>
          <Link href="/contact" className="btn-accent">
            Start a conversation
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
