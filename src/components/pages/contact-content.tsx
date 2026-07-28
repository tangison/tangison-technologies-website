'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { useReveal, useRevealChildren } from "@/hooks/use-reveal";
import { SITE } from "@/lib/site";
import { ZoomReveal } from "@/components/ui/zoom-reveal";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { useEffect, useRef } from "react";

/* ─── Hero zoom on scroll for contact page ─── */
function useHeroZoom() {
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroImage = heroImageRef.current;
    if (!heroImage) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const onScroll = () => {
      const y = window.scrollY;
      const scale = 1 + Math.min(y / 5000, 0.08);
      heroImage.style.transform = `scale(${scale})`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return heroImageRef;
}

/* ─── Contact form that generates mailto: links ─── */
const SUBJECT_OPTIONS = [
  { value: "general", label: "General enquiry" },
  { value: "partnership", label: "Partnership" },
  { value: "technology", label: "Technology discussion" },
  { value: "research", label: "Research collaboration" },
  { value: "brand", label: "Brand and visual identity" },
  { value: "other", label: "Other" },
];

function buildMailto(subject: string, body: string, name: string): string {
  const subjectLine = SUBJECT_OPTIONS.find(o => o.value === subject)?.label ?? subject;
  const fullSubject = `[${subjectLine}] Enquiry from ${name || "unknown"}`;
  const fullBody = body || "No message provided.";
  const params = new URLSearchParams({
    subject: fullSubject,
    body: fullBody,
  });
  return `mailto:${SITE.email}?${params.toString()}`;
}

function ContactForm() {
  const [subject, setSubject] = useState("general");
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const mailtoLink = buildMailto(subject, body, name);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <div className="p-6 bg-[var(--surface)] border border-[var(--hairline)] rounded-md card-hover-lift">
      <p className="eyebrow mb-4">Compose your message</p>

      {submitted ? (
        <div className="text-center py-4">
          <p className="text-[var(--ink)] font-semibold">
            Your mail client should have opened with the prefilled message.
          </p>
          <p className="text-sm text-[var(--muted-ink)] mt-2">
            If it did not open, you can{" "}
            <a
              href={mailtoLink}
              className="text-[var(--teal)] hover:text-[var(--ink)] transition-colors font-medium"
            >
              click here to open it manually
            </a>.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 btn-outline py-2.5 px-4"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="contact-name" className="text-sm text-[var(--ink)] font-medium block mb-1">
              Your name
            </label>
            <input
              id="contact-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="w-full px-3 py-2 bg-[var(--surface-2)] border border-[var(--hairline)] rounded-md text-sm text-[var(--ink)] placeholder:text-[var(--muted-ink)] focus:outline-none focus:border-[var(--teal)] focus:ring-1 focus:ring-[var(--teal)] transition-colors"
              required
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="contact-subject" className="text-sm text-[var(--ink)] font-medium block mb-1">
              Subject
            </label>
            <select
              id="contact-subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-3 py-2 bg-[var(--surface-2)] border border-[var(--hairline)] rounded-md text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--teal)] focus:ring-1 focus:ring-[var(--teal)] transition-colors"
            >
              {SUBJECT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="contact-body" className="text-sm text-[var(--ink)] font-medium block mb-1">
              Message
            </label>
            <textarea
              id="contact-body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Describe the conditions you face: connectivity, data quality, infrastructure. What needs to keep running?"
              rows={5}
              className="w-full px-3 py-2 bg-[var(--surface-2)] border border-[var(--hairline)] rounded-md text-sm text-[var(--ink)] placeholder:text-[var(--muted-ink)] focus:outline-none focus:border-[var(--teal)] focus:ring-1 focus:ring-[var(--teal)] transition-colors resize-y"
              required
            />
          </div>

          {/* Submit */}
          <div className="flex items-center gap-3">
            <button type="submit" className="btn-accent">
              Open mail client
            </button>
            <span className="text-xs text-[var(--muted-ink)]">
              This opens your default email app with a prefilled message to {SITE.email}.
            </span>
          </div>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  const heroRef = useReveal<HTMLElement>();
  const heroImageRef = useHeroZoom();

  return (
    <PageShell>
      {/* ─── HERO with parallax zoom ─── */}
      <section ref={heroRef} className="hero-section noise-overlay reveal" aria-label="Contact hero">
        <div ref={heroImageRef} className="absolute inset-0 hero-zoom">
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
              Tell us what<br />conditions you face.
            </h1>
            <p className="mt-4 text-sm text-[var(--teal-text)]/80 body-constrained reveal-delay-3">
              If your operations run where connectivity drops and conditions
              shift without warning, Tangison can help. Describe your
              environment and we will tell you what is possible.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CONTACT FORM + DETAILS ─── */}
      <section className="section-spacing bg-[var(--bg)]" aria-label="Contact details">
        <div className="container-tangison">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
            {/* Left: statement + info cards */}
            <div className="space-y-6">
              <ZoomReveal origin="left">
                <h2 className="display-md text-[var(--ink)]">
                  What happens when you contact us
                </h2>
              </ZoomReveal>
              <div className="reveal text-[var(--muted-ink)] body-constrained">
                <p>
                  We respond to genuine enquiries about operational intelligence
                  systems, partnerships and applied research. If your work
                  involves environments where connectivity drops, data arrives
                  late, or infrastructure is uneven, we are interested.
                </p>
                <p className="mt-3">
                  We do not respond to generic vendor pitches, unsolicited
                  marketing or automated outreach. Write to us directly.
                  Be specific about the conditions you face, and we will
                  tell you whether Tangison can help.
                </p>
              </div>

              {/* Info cards with stagger reveal */}
              <StaggerReveal staggerDelay={0.1} className="space-y-4">
                <StaggerItem>
                  <div className="p-6 bg-[var(--surface)] border border-[var(--hairline)] rounded-md card-hover-lift">
                    <p className="eyebrow mb-3">Direct email</p>
                    <a
                      href={`mailto:${SITE.email}?subject=Enquiry%20for%20Tangison%20Technologies`}
                      className="display-sm text-[var(--teal)] hover:text-[var(--ink)] transition-colors"
                    >
                      {SITE.email}
                    </a>
                    <p className="text-xs text-[var(--muted-ink)] mt-2">
                      Opens your mail client with a prefilled subject line.
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="p-6 bg-[var(--surface)] border border-[var(--hairline)] rounded-md card-hover-lift">
                    <p className="eyebrow mb-3">Location</p>
                    <p className="text-[var(--ink)] text-sm font-semibold">{SITE.location}</p>
                    <p className="text-[var(--muted-ink)] text-xs mt-1">
                      Tangison Technologies operates from Windhoek, Namibia.
                      The location is the design brief, not a limitation.
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem>
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
                        <p className="text-xs text-[var(--muted-ink)]">Self-hosted AI agents that keep your operations running</p>
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
                        <p className="text-xs text-[var(--muted-ink)]">Digital products built to work where conditions are unforgiving</p>
                      </li>
                      <li>
                        <Link
                          href="/technology#labs"
                          className="text-sm text-[var(--ink)] hover:text-[var(--teal)] transition-colors font-medium"
                        >
                          Tangison Labs
                        </Link>
                        <p className="text-xs text-[var(--muted-ink)]">Experimental systems tested where existing technology fails</p>
                      </li>
                    </ul>
                  </div>
                </StaggerItem>
              </StaggerReveal>
            </div>

            {/* Right: contact form */}
            <div className="reveal reveal-delay-2">
              <ContactForm />
            </div>
          </div>

          <hr className="hairline my-12 md:my-16" />

          <div className="reveal text-center">
            <p className="text-sm text-[var(--muted-ink)]">
              For brand guidelines and visual identity, visit the{" "}
              <Link href="/brand" className="text-[var(--teal)] hover:text-[var(--ink)] transition-colors font-medium">
                Brand page
              </Link>.
            </p>
            <p className="text-sm text-[var(--muted-ink)] mt-2">
              For legal matters, refer to{" "}
              <Link href="/privacy" className="text-[var(--teal)] hover:text-[var(--ink)] transition-colors font-medium">
                Privacy
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="text-[var(--teal)] hover:text-[var(--ink)] transition-colors font-medium">
                Terms
              </Link>.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
