'use client';

import Image from "next/image";
import { PageShell } from "@/components/site/page-shell";
import { useReveal, useRevealChildren } from "@/hooks/use-reveal";
import { SITE } from "@/lib/site";

export default function ContactPage() {
  const heroRef = useReveal<HTMLElement>();
  const detailsRef = useRevealChildren<HTMLElement>();

  return (
    <PageShell>
      {/* ─── HERO ─── */}
      <section ref={heroRef} className="hero-section noise-overlay reveal" aria-label="Contact hero">
        <div className="absolute inset-0">
          <Image
            src="/images/tangison/webp/11-contact-coast-horizon.webp"
            alt="A quiet fog horizon where the Atlantic meets a dark Skeleton Coast beach"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(26,26,24,0.5)] via-[rgba(26,26,24,0.25)] to-transparent" />
        </div>

        <div className="absolute inset-0 flex items-end">
          <div className="container-tangison pb-12 md:pb-16">
            <p className="eyebrow mb-4 reveal-delay-1">Contact</p>
            <h1 className="display display-lg text-[var(--teal-text)] reveal-delay-2">
              Start a<br />conversation.
            </h1>
            <p className="mt-4 text-sm text-[var(--teal-text)]/80 body-constrained reveal-delay-3">
              If your operations run where connectivity drops and conditions
              shift without warning, we should talk.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CONTACT DETAILS ─── */}
      <section ref={detailsRef} className="section-spacing bg-[var(--bg)]" aria-label="Contact details">
        <div className="container-tangison">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
            {/* Left: statement */}
            <div className="reveal">
              <h2 className="display-md text-[var(--ink)]">
                Tangison Technologies
              </h2>
              <p className="mt-4 text-[var(--muted-ink)] body-constrained">
                We respond to genuine enquiries about operational intelligence
                systems, partnerships and applied research. If your work
                involves imperfect conditions, we are interested.
              </p>
              <p className="mt-3 text-[var(--muted-ink)] body-constrained">
                We do not respond to generic vendor pitches, unsolicited
                marketing or automated outreach. Write to us directly.
                Be specific about the conditions you face.
              </p>
            </div>

            {/* Right: details */}
            <div className="reveal reveal-delay-2 space-y-6">
              <div className="p-6 bg-[var(--surface)] border border-[var(--hairline)] rounded-md">
                <p className="eyebrow mb-3">Email</p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="display-sm text-[var(--teal)] hover:text-[var(--ink)] transition-colors"
                >
                  {SITE.email}
                </a>
              </div>

              <div className="p-6 bg-[var(--surface)] border border-[var(--hairline)] rounded-md">
                <p className="eyebrow mb-3">Location</p>
                <p className="text-[var(--ink)] text-sm font-semibold">{SITE.location}</p>
                <p className="text-[var(--muted-ink)] text-xs mt-1">
                  Tangison Technologies operates from Windhoek, Namibia.
                </p>
              </div>

              <div className="p-6 bg-[var(--surface)] border border-[var(--hairline)] rounded-md">
                <p className="eyebrow mb-3">Ecosystem</p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href={SITE.agentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--ink)] hover:text-[var(--teal)] transition-colors font-medium"
                    >
                      Tangison Agent
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 inline"><path d="M7 17L17 7M7 7h10v10"/></svg>
                    </a>
                    <p className="text-xs text-[var(--muted-ink)]">AI agent platform</p>
                  </li>
                  <li>
                    <a
                      href={SITE.studioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--ink)] hover:text-[var(--teal)] transition-colors font-medium"
                    >
                      Tangison Studio
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 inline"><path d="M7 17L17 7M7 7h10v10"/></svg>
                    </a>
                    <p className="text-xs text-[var(--muted-ink)]">Design and engineering</p>
                  </li>
                  <li>
                    <a
                      href="/technology#labs"
                      className="text-sm text-[var(--ink)] hover:text-[var(--teal)] transition-colors font-medium"
                    >
                      Tangison Labs
                    </a>
                    <p className="text-xs text-[var(--muted-ink)]">Research and experimental systems</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="hairline my-12 md:my-16" />

          <div className="reveal text-center">
            <p className="text-sm text-[var(--muted-ink)]">
              For brand guidelines and visual identity, visit the{" "}
              <a href="/brand" className="text-[var(--teal)] hover:text-[var(--ink)] transition-colors font-medium">
                Brand page
              </a>.
            </p>
            <p className="text-sm text-[var(--muted-ink)] mt-2">
              For legal matters, refer to{" "}
              <a href="/privacy" className="text-[var(--teal)] hover:text-[var(--ink)] transition-colors font-medium">
                Privacy
              </a>{" "}
              and{" "}
              <a href="/terms" className="text-[var(--teal)] hover:text-[var(--ink)] transition-colors font-medium">
                Terms
              </a>.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
