'use client';

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

export default function ContactContent() {
  const bodyRef = useRevealChildren<HTMLElement>();

  return (
    <PageShell>
      <section className="section-spacing bg-[var(--bg)]" aria-label="Page header">
        <div className="container-tangison">
          <p className="eyebrow mb-2">Contact and Compliance</p>
          <h1 className="display display-lg max-w-3xl">Start a conversation.</h1>
          <p className="body-constrained mt-6">
            For tenders, RFIs, project enquiries, or a straight conversation.
          </p>
        </div>
      </section>

      <section ref={bodyRef} className="section-spacing bg-[var(--surface-2)]" aria-label="Contact details">
        <div className="container-tangison grid gap-10 md:grid-cols-2">
          {/* Contact routes */}
          <div className="reveal">
            <h2 className="display display-sm mb-6">Contact</h2>
            <dl className="space-y-5">
              <div>
                <dt className="eyebrow mb-1">Email</dt>
                <dd>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-xl font-medium text-[var(--ink)] underline underline-offset-4 decoration-[var(--hairline)] hover:decoration-[var(--ink)]"
                  >
                    {SITE.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow mb-1">Phone and WhatsApp</dt>
                <dd>
                  <a
                    href={`tel:${SITE.phoneE164}`}
                    className="text-xl font-medium text-[var(--ink)]"
                  >
                    {SITE.phoneDisplay}
                  </a>{" "}
                  <span className="text-sm text-[var(--muted-ink)]">({SITE.phoneE164})</span>
                </dd>
              </div>
              <div>
                <dt className="eyebrow mb-1">Address</dt>
                <dd className="text-base text-[var(--ink)]">
                  {SITE.address}
                </dd>
                <dd>
                  <a
                    href={SITE.addressMap}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm text-[var(--muted-ink)] hover:text-[var(--ink)] underline underline-offset-4 decoration-[var(--hairline)]"
                  >
                    View the address on a map
                  </a>
                </dd>
              </div>
            </dl>

            <p className="mt-8 text-sm text-[var(--muted-ink)]">
              Client and design work is delivered through{" "}
              <a
                href={SITE.studioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--ink)] underline underline-offset-4 decoration-[var(--hairline)] hover:decoration-[var(--ink)]"
              >
                Tangison Studio, {SITE.studioUrl}
              </a>
              .
            </p>
          </div>

          {/* Registration panel (schema carries the registration number). */}
          <div className="reveal">
            <h2 className="display display-sm mb-6">Compliance</h2>
            <div className="border border-[var(--hairline)] bg-[var(--surface)] p-8">
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

      <section className="section-spacing bg-[var(--bg)]" aria-label="Starting a tender">
        <div className="container-tangison">
          <h2 className="display display-sm mb-4">Starting a tender or RFI</h2>
          <p className="body-constrained">
            When you send an enquiry, include the scope, your budget range,
            and your timeline. For formal tender processes, reference the
            relevant notice number and attach the documentation the issuing
            authority requires.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
