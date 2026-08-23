'use client';

import Image from "next/image";
import { PageShell } from "@/components/site/page-shell";
import { useRevealChildren } from "@/hooks/use-reveal";
import { SITE } from "@/lib/site";

const REGISTRATION_ROWS = [
  { label: "Registered name", value: SITE.legalName },
  { label: "Form", value: "Close Corporation" },
  { label: "Registered", value: SITE.registeredOn },
  { label: "Status", value: "Registered" },
  { label: "Beneficial ownership", value: "Compliant (BO filed)" },
  { label: "Ownership", value: "100% Namibian" },
];

export default function ProfileContent() {
  const bodyRef = useRevealChildren<HTMLElement>();

  return (
    <PageShell>
      <section className="section-spacing bg-[var(--bg)]" aria-label="Page header">
        <div className="container-tangison">
          <p className="eyebrow mb-2">Company Profile</p>
          <h1 className="display display-lg max-w-3xl">
            Built to be verified.
          </h1>
        </div>
      </section>

      <section ref={bodyRef} className="section-spacing bg-[var(--surface-2)]" aria-label="About the company">
        <div className="container-tangison grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7 reveal">
            <h2 className="display display-sm mb-4">Who we are</h2>
            <p className="text-base leading-relaxed text-[var(--ink)]">
              {SITE.legalName} is a 100% Namibian owned technology company,
              founded and operated in Windhoek by {SITE.owner}. We build the
              systems that keep businesses and institutions running under
              imperfect conditions: when connectivity drops, data arrives
              late, and infrastructure is uneven.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted-ink)]">
              Our work spans information and communications technology, applied
              artificial intelligence, digital transformation services,
              strategic and technical consulting, and applied research and
              development.
            </p>

            <h2 className="display display-sm mt-12 mb-4">Mission</h2>
            <p className="text-base leading-relaxed text-[var(--ink)] max-w-xl">
              Our mission is to give Namibian institutions the operational
              intelligence they need to run well under imperfect conditions.
            </p>
          </div>

          {/* Registration panel (schema carries the registration number; it is
              not printed in visible copy by design). */}
          <div className="md:col-span-5 reveal">
            <div className="border border-[var(--hairline)] bg-[var(--surface)] p-8">
              <p className="eyebrow mb-4">Registration and compliance</p>
              <dl>
                {REGISTRATION_ROWS.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-4 py-3 border-b border-[var(--hairline)] last:border-b-0"
                  >
                    <dt className="text-sm text-[var(--muted-ink)]">{row.label}</dt>
                    <dd className="text-sm font-medium text-[var(--ink)] text-right">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-[var(--bg)]" aria-label="Leadership and group">
        <div className="container-tangison grid gap-12 md:grid-cols-2">
          <div className="reveal">
            <h2 className="display display-sm mb-4">Leadership</h2>
            {/* Founder portrait: owner-supplied background-free PNG lands at
                public/images/tangi-portrait.png and renders here. The
                magenta-background reference file is a placeholder only. */}
            <p className="text-2xl font-semibold text-[var(--ink)]">
              {SITE.owner}
            </p>
            <p className="mt-1 text-sm uppercase tracking-[0.14em] text-[var(--muted-ink)]">
              {SITE.ownerRole}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted-ink)] max-w-md">
              {SITE.owner} founded {SITE.legalName} and leads it end to end:
              strategy, delivery, and client relationships.
            </p>
          </div>

          <div className="reveal">
            <h2 className="display display-sm mb-4">The Tangison group</h2>
            <ul className="space-y-5">
              <li>
                <p className="text-base font-medium text-[var(--ink)]">
                  <a
                    href={SITE.studioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 decoration-[var(--hairline)] hover:decoration-[var(--ink)]"
                  >
                    Tangison Studio
                  </a>
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--muted-ink)]">
                  The design and engineering arm of the group. Fifteen
                  selected client projects delivered, from national media
                  platforms to retail, logistics, and tourism.
                </p>
              </li>
              <li>
                <p className="text-base font-medium text-[var(--ink)]">Tangison Agent</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--muted-ink)]">
                  An in-house applied-AI platform, discontinued in 2026,
                  documented on our Projects page.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-[var(--surface-2)]" aria-label="Local presence">
        <div className="container-tangison">
          <div className="relative mb-10 aspect-[21/9] overflow-hidden bg-[var(--surface)] md:mb-14">
            <Image
              src="/images/tangison/webp/17-presence-dune-signal.jpg"
              alt="A slender dark monolith standing on a fog-covered Namib dune crest at dawn"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <h2 className="display display-sm mb-4">Local presence</h2>
          <p className="text-base leading-relaxed text-[var(--ink)] max-w-2xl">
            Founded and operated from Windhoek. {SITE.address}. We work across
            Namibia, and we support clients where their operations are.
          </p>
          <a
            href={SITE.addressMap}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-[var(--ink)] underline underline-offset-4 decoration-[var(--hairline)] hover:decoration-[var(--ink)]"
          >
            View the address on a map
          </a>
        </div>
      </section>
    </PageShell>
  );
}
