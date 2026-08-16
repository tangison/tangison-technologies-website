'use client';

import { PageShell } from "@/components/site/page-shell";
import { useReveal } from "@/hooks/use-reveal";
import { SITE } from "@/lib/site";

/**
 * Careers — open application page.
 *
 * There is no vacancy list here on purpose. We do not have verified open roles
 * to publish, and inventing them would break the no-fabricated-content rule.
 * When real vacancies exist, add them to OPEN_ROLES below and the page will
 * render a list section instead of the open-application block.
 */

const OPEN_ROLES: { title: string; location: string; type: string; summary: string }[] = [];

const DISCIPLINES = [
  {
    title: "Engineering",
    body: "Systems that keep working when connectivity drops and data arrives late. Backend, data pipelines, and offline-first application work.",
  },
  {
    title: "Design",
    body: "Brand systems and product interfaces through Tangison Studio. Identity, web, and interface work for Namibian and regional clients.",
  },
  {
    title: "Operations",
    body: "Client delivery, project coordination, and the day to day running of an studio that ships on schedule.",
  },
];

const HOW_WE_WORK = [
  "We are based in Windhoek and we work with organisations across Namibia and the region.",
  "We write things down. Decisions, reasoning, and the state of the work stay legible to whoever picks them up next.",
  "We prefer people who ask what a system is for before they build it.",
  "We hire for judgement and for the willingness to work in conditions that are not ideal.",
];

export default function CareersContent() {
  const heroRef = useReveal<HTMLDivElement>();
  const disciplinesRef = useReveal<HTMLDivElement>();
  const howRef = useReveal<HTMLDivElement>();
  const applyRef = useReveal<HTMLDivElement>();

  const applyHref = `mailto:${SITE.email}?subject=${encodeURIComponent(
    "Open application"
  )}&body=${encodeURIComponent(
    "Name:\nWhere you are based:\nWhat you do:\nLink to your work or CV:\n\nWhat you would want to work on here:\n"
  )}`;

  return (
    <PageShell>
      {/* ─── Hero ─── */}
      <section className="container-tangison pt-8 pb-16 md:pt-14 md:pb-24">
        <div ref={heroRef} className="reveal max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted-ink)] mb-5">
            Careers
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-[var(--ink)]">
            Work on systems that have to hold up.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--muted-ink)] leading-relaxed max-w-2xl">
            Tangison Technologies builds operational intelligence for
            environments where connectivity drops and infrastructure is uneven.
            The work is practical, the constraints are real, and the results are
            used by people who cannot afford for them to fail.
          </p>
        </div>
      </section>

      {/* ─── Open roles, or the honest absence of them ─── */}
      <section className="border-t border-[var(--hairline)]">
        <div className="container-tangison py-16 md:py-20">
          {OPEN_ROLES.length > 0 ? (
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] mb-4">
                Open roles
              </h2>
              {OPEN_ROLES.map((role) => (
                <div
                  key={role.title}
                  className="border border-[var(--hairline)] rounded-md p-6 flex flex-col gap-2"
                >
                  <h3 className="text-lg font-semibold text-[var(--ink)]">{role.title}</h3>
                  <p className="text-sm text-[var(--muted-ink)]">
                    {role.location} &middot; {role.type}
                  </p>
                  <p className="text-base text-[var(--muted-ink)]">{role.summary}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)]">
                We do not have a published vacancy right now.
              </h2>
              <p className="mt-5 text-lg text-[var(--muted-ink)] leading-relaxed">
                That does not mean we are not interested. We are a small team and
                most of the people who have joined us reached out before a role
                existed. If your work fits what we do, send it through and we
                will keep it on file.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ─── Disciplines ─── */}
      <section className="border-t border-[var(--hairline)]">
        <div className="container-tangison py-16 md:py-20">
          <div ref={disciplinesRef} className="reveal">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] mb-10">
              Where we usually need people
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {DISCIPLINES.map((d) => (
                <div key={d.title} className="flex flex-col gap-3">
                  <h3 className="text-lg font-semibold text-[var(--ink)]">{d.title}</h3>
                  <p className="text-base text-[var(--muted-ink)] leading-relaxed">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── How we work ─── */}
      <section className="border-t border-[var(--hairline)]">
        <div className="container-tangison py-16 md:py-20">
          <div ref={howRef} className="reveal max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] mb-8">
              How we work
            </h2>
            <ul className="flex flex-col gap-5">
              {HOW_WE_WORK.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted-ink)] pt-2 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg text-[var(--muted-ink)] leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Apply ─── */}
      <section className="border-t border-[var(--hairline)]">
        <div className="container-tangison py-16 md:py-24">
          <div ref={applyRef} className="reveal max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-semibold text-[var(--ink)]">
              Send an open application.
            </h2>
            <p className="mt-5 text-lg text-[var(--muted-ink)] leading-relaxed">
              Tell us what you do, show us something you have built, and say what
              you would want to work on here. A link is worth more than a cover
              letter.
            </p>
            <a
              href={applyHref}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--teal)] px-6 py-3 text-base font-medium text-[var(--teal-text)] transition-colors hover:bg-[var(--teal-hover)]"
            >
              Apply to {SITE.email}
              <span aria-hidden="true">&rarr;</span>
            </a>
            <p className="mt-4 text-sm text-[var(--muted-ink)]">
              We read everything that arrives. We reply to the ones we can act on.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
