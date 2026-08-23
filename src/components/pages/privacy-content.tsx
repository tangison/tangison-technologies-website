'use client';

import { PageShell } from "@/components/site/page-shell";
import { SITE } from "@/lib/site";

const SECTIONS = [
  {
    title: "Who we are",
    body: `${SITE.legalName}, a registered Close Corporation in Namibia, operates this website. Contact: ${SITE.email}.`,
  },
  {
    title: "What we collect",
    body: "This website has no registration, no forms, and no personal accounts. You do not give us your personal data by visiting the site.",
  },
  {
    title: "Analytics",
    body: "We use Vercel Analytics to understand aggregate usage of the site. Vercel Analytics collects anonymized, aggregated data (such as pages visited and general location) and does not identify individual visitors.",
  },
  {
    title: "Server logs",
    body: "As with all websites, standard server logs may record technical information such as IP address, browser type, and pages requested. This information is retained only as long as necessary for the operation, security, and legal compliance of the site.",
  },
  {
    title: "Cookies",
    body: "This site does not set tracking cookies. Technical storage necessary for the site to function may be used by your browser or your network.",
  },
  {
    title: "Your rights",
    body: `Under the Namibian Protection of Personal Information Act 4 of 2021, you may request information about any personal data we hold about you. Contact ${SITE.email}.`,
  },
  {
    title: "Third-party links",
    body: "Links to other websites (including studio.tangison.com and client project sites) are subject to those sites' own privacy policies.",
  },
  {
    title: "Changes",
    body: "We may update this policy. The date above reflects the current version.",
  },
];

export default function PrivacyContent() {
  return (
    <PageShell>
      <section className="section-spacing bg-[var(--bg)]" aria-label="Privacy Policy">
        <div className="container-tangison max-w-3xl">
          <p className="eyebrow mb-2">Legal</p>
          <h1 className="display display-md">Privacy Policy</h1>
          <p className="mt-2 text-sm text-[var(--muted-ink)]">
            Last updated: 23 August 2026
          </p>

          <div className="mt-10 border-t border-[var(--hairline)]">
            {SECTIONS.map((s, i) => (
              <div key={s.title} className="py-6 border-b border-[var(--hairline)]">
                <h2 className="text-base font-semibold text-[var(--ink)]">
                  {i + 1}. {s.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted-ink)]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
