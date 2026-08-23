'use client';

import { PageShell } from "@/components/site/page-shell";
import { SITE } from "@/lib/site";

const SECTIONS = [
  {
    title: "The website",
    body: `This website is operated by ${SITE.legalName}, Windhoek, Namibia. By using the website you accept these terms.`,
  },
  {
    title: "Information, not advice",
    body: "Content on this website describes the company and its capabilities. It is provided for general information and does not constitute professional advice, a quotation, or an offer.",
  },
  {
    title: "Intellectual property",
    body: "The Tangison name, logo, and all original content on this website are the property of Tangison Technologies CC or its affiliates. Client project artwork and names are presented with the standing permission of the Tangison group and are used to describe delivered work.",
  },
  {
    title: "No warranty",
    body: "The website and its content are provided as is, without warranties of any kind, express or implied, including availability, accuracy, or fitness for a particular purpose.",
  },
  {
    title: "Limitation of liability",
    body: "To the maximum extent permitted by law, Tangison Technologies CC is not liable for any loss or damage arising from the use of, or reliance on, this website.",
  },
  {
    title: "Third parties",
    body: "Links to third-party websites, including studio.tangison.com, do not imply endorsement beyond describing delivered client work.",
  },
  {
    title: "Governing law",
    body: "These terms are governed by the laws of the Republic of Namibia. The courts of Windhoek have jurisdiction.",
  },
  {
    title: "Changes",
    body: "We may update these terms from time to time. The date above reflects the current version.",
  },
];

export default function TermsContent() {
  return (
    <PageShell>
      <section className="section-spacing bg-[var(--bg)]" aria-label="Terms of Service">
        <div className="container-tangison max-w-3xl">
          <p className="eyebrow mb-2">Legal</p>
          <h1 className="display display-md">Terms of Service</h1>
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
