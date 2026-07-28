'use client';

import Image from "next/image";
import { PageShell } from "@/components/site/page-shell";
import { useReveal, useRevealChildren } from "@/hooks/use-reveal";
import { SITE } from "@/lib/site";
import { Logo } from "@/components/site/logo";

export default function BrandPage() {
  const heroRef = useReveal<HTMLElement>();
  const systemRef = useRevealChildren<HTMLElement>();

  return (
    <PageShell>
      {/* ─── HERO ─── */}
      <section ref={heroRef} className="hero-section noise-overlay reveal" aria-label="Brand hero">
        <div className="absolute inset-0">
          <Image
            src="/images/tangison/webp/07-ecosystem-studio.webp"
            alt="A tactile teal pigment circle pressed into black mineral sand"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(26,26,24,0.5)] via-[rgba(26,26,24,0.25)] to-transparent" />
        </div>

        <div className="absolute inset-0 flex items-end">
          <div className="container-tangison pb-12 md:pb-16">
            <p className="eyebrow mb-4 reveal-delay-1">Brand</p>
            <h1 className="display display-lg text-[var(--teal-text)] reveal-delay-2">
              Visual identity<br />and guidelines
            </h1>
            <p className="mt-4 text-sm text-[var(--teal-text)]/80 body-constrained reveal-delay-3">
              The Tangison brand system is built on a single idea: vast
              conditions, precise intelligence. Every visual choice
              serves that idea.
            </p>
          </div>
        </div>
      </section>

      {/* ─── BRAND SYSTEM ─── */}
      <section ref={systemRef} className="section-spacing bg-[var(--bg)]" aria-label="Brand system">
        <div className="container-tangison">
          <div className="reveal">
            <p className="eyebrow mb-2">System</p>
            <h2 className="display-md text-[var(--ink)]">
              Vast conditions. Precise intelligence.
            </h2>
            <p className="mt-4 text-[var(--muted-ink)] body-constrained">
              The Tangison visual system follows a principle, not a
              template. The principle is editorial discipline: large
              imagery, controlled contrast, decisive typography, and
              negative space. The system is clearly Namibian without
              tourism cliches. It is minimal without being empty. It
              is confident without being loud.
            </p>
          </div>

          <hr className="hairline my-12" />

          {/* Logo */}
          <div className="reveal">
            <p className="eyebrow mb-4">Logo</p>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="p-8 bg-[var(--surface)] border border-[var(--hairline)] rounded-md flex items-center justify-center min-w-[200px]">
                <Logo linked={false} size="lg" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--ink)]">Usage</h3>
                <p className="mt-2 text-[var(--muted-ink)] text-sm body-constrained">
                  Use the Tangison logo as provided. Do not redraw,
                  approximate, convert, alter proportions, or recreate
                  the logo from scratch. The logo is available as an
                  SVG file (tangison-logo.svg). Always use the SVG
                  at all required sizes. Preserve the aspect ratio,
                  transparency and clear space around the mark. The
                  logo must remain legible and identifiable at all
                  sizes.
                </p>
              </div>
            </div>
          </div>

          <hr className="hairline my-12" />

          {/* Colour palette */}
          <div className="reveal">
            <p className="eyebrow mb-4">Colour palette</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-6 bg-[#2B6B5E] rounded-md">
                <p className="text-xs font-mono text-[#F0EDE8]">Accent</p>
                <p className="text-xs font-mono text-[#F0EDE8]/70 mt-1">#2B6B5E</p>
                <p className="text-xs text-[#F0EDE8]/60 mt-2">Muted teal, desaturated. Used for emphasis, interactions and identity markers.</p>
              </div>
              <div className="p-6 bg-[#F0EDE8] border border-[var(--hairline)] rounded-md">
                <p className="text-xs font-mono text-[var(--ink)]">Background</p>
                <p className="text-xs font-mono text-[var(--muted-ink)] mt-1">#F0EDE8</p>
                <p className="text-xs text-[var(--muted-ink)] mt-2">Warm off-white with faint graphite tint. The default surface.</p>
              </div>
              <div className="p-6 bg-[#1A1A18] rounded-md">
                <p className="text-xs font-mono text-[#F0EDE8]">Ink</p>
                <p className="text-xs font-mono text-[#F0EDE8]/70 mt-1">#1A1A18</p>
                <p className="text-xs text-[#F0EDE8]/60 mt-2">Warm near-black. No pure #000. Used for primary text and strong contrast.</p>
              </div>
              <div className="p-6 bg-[#FFFFFF] border border-[var(--hairline)] rounded-md">
                <p className="text-xs font-mono text-[var(--ink)]">Surface</p>
                <p className="text-xs font-mono text-[var(--muted-ink)] mt-1">#FFFFFF</p>
                <p className="text-xs text-[var(--muted-ink)] mt-2">Clean white. Used for cards, elevated surfaces and content areas.</p>
              </div>
              <div className="p-6 bg-[#6B6760] rounded-md">
                <p className="text-xs font-mono text-[#F0EDE8]">Muted ink</p>
                <p className="text-xs font-mono text-[#F0EDE8]/70 mt-1">#6B6760</p>
                <p className="text-xs text-[#F0EDE8]/60 mt-2">Secondary text colour. Used for captions, descriptions and supporting content.</p>
              </div>
              <div className="p-6 bg-[#D4CFC7] border border-[var(--hairline)] rounded-md">
                <p className="text-xs font-mono text-[var(--ink)]">Hairline</p>
                <p className="text-xs font-mono text-[var(--muted-ink)] mt-1">#D4CFC7</p>
                <p className="text-xs text-[var(--muted-ink)] mt-2">Warm grey borders. Used for dividers, card edges and structural lines.</p>
              </div>
            </div>
          </div>

          <hr className="hairline my-12" />

          {/* Typography */}
          <div className="reveal">
            <p className="eyebrow mb-4">Typography</p>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-mono text-[var(--muted-ink)]">Display (headings)</p>
                <p className="display text-[var(--ink)] mt-1">Inter, 800 weight, tight tracking</p>
              </div>
              <div>
                <p className="text-xs font-mono text-[var(--muted-ink)]">Body (content)</p>
                <p className="text-[var(--ink)] mt-1" style={{ fontFamily: "var(--font-body)" }}>Inter, 400 weight, default tracking. Used for paragraphs and descriptions.</p>
              </div>
              <div>
                <p className="text-xs font-mono text-[var(--muted-ink)]">Mono (code, labels)</p>
                <p className="text-[var(--ink)] mt-1" style={{ fontFamily: "var(--font-mono-family)" }}>Geist Mono. Used for technical labels, numbering and metadata.</p>
              </div>
              <div>
                <p className="text-xs font-mono text-[var(--muted-ink)]">Eyebrow</p>
                <p className="eyebrow">UPPERCASE, 600 WEIGHT, WIDE TRACKING, TEAL</p>
              </div>
            </div>
          </div>

          <hr className="hairline my-12" />

          {/* Imagery */}
          <div className="reveal">
            <p className="eyebrow mb-4">Imagery</p>
            <p className="text-[var(--muted-ink)] body-constrained">
              Tangison imagery is Namibian, not generic. It uses real
              landscapes and materials from Namibia: the Skeleton Coast,
              the Namib Desert, coastal fog, gravel plains, mineral
              textures. Images are editorial, not decorative. Each
              image serves the narrative. No stock photography, no AI
              cliches, no tourism cliches.
            </p>
            <p className="mt-3 text-[var(--muted-ink)] body-constrained">
              Maximum dominant elements per image: two. The visual
              system prioritises restraint and focus. Images are
              paired with typography, not used as backgrounds that
              compete with content.
            </p>
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <Image
                src="/images/tangison/webp/12-carousel-fog-vessel.webp"
                alt="Fog vessel editorial image example"
                width={400}
                height={300}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="rounded-md w-full h-auto object-cover"
                style={{ objectPosition: "left center" }}
              />
              <Image
                src="/images/tangison/webp/13-carousel-dune-continuity.webp"
                alt="Dune continuity editorial image example"
                width={400}
                height={300}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="rounded-md w-full h-auto object-cover"
                style={{ objectPosition: "center" }}
              />
              <Image
                src="/images/tangison/webp/14-carousel-rust-threshold.webp"
                alt="Rust threshold editorial image example"
                width={400}
                height={300}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="rounded-md w-full h-auto object-cover"
                style={{ objectPosition: "right center" }}
              />
            </div>
          </div>

          <hr className="hairline my-12" />

          {/* Tone */}
          <div className="reveal">
            <p className="eyebrow mb-4">Tone</p>
            <p className="text-[var(--muted-ink)] body-constrained">
              Tangison writes in Namibian business English. The tone
              is direct, specific and restrained. No em dashes. No
              exclamation points. No AI cliches (revolutionise, unlock,
              cutting-edge, seamless, transformative, leverage, empower).
              No patterns like "X as Y, not Z" or "X things, one Y."
              No invented metrics, testimonials or claims that cannot
              be verified. These are editorial rules, not preferences.
            </p>
            <p className="mt-3 text-[var(--muted-ink)] body-constrained">
              Paragraphs are concise. Evidence and systems take priority
              over hype. Every claim must be verifiable or marked for
              client verification. The writing serves the same principle
              as the visual system: vast conditions, precise intelligence.
            </p>
          </div>

          <hr className="hairline my-12" />

          {/* Motion */}
          <div className="reveal">
            <p className="eyebrow mb-4">Motion</p>
            <p className="text-[var(--muted-ink)] body-constrained">
              Motion in the Tangison brand is CSS-based, subtle and
              purposeful. Scroll-triggered reveals use IntersectionObserver
              to add a &ldquo;visible&rdquo; class that triggers opacity and
              transform transitions. Directional reveals (left, image fade)
              provide controlled variety. Stagger delays create rhythm
              without choreography.
            </p>
            <p className="mt-3 text-[var(--muted-ink)] body-constrained">
              Reduced-motion users receive instant visibility with no
              animation. No scroll-jacking, no excessive parallax, no
              JavaScript animation libraries. Motion is a communication
              tool, not a decoration. Every animation must answer the
              question: what relationship does this motion describe?
              If the answer is "it looks cool," the animation is removed.
            </p>
          </div>

          <hr className="hairline my-12" />

          {/* Credit */}
          <div className="reveal text-center">
            <p className="text-sm text-[var(--muted-ink)]">
              This brand system was designed and implemented by{" "}
              <a
                href={SITE.studioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--teal)] hover:text-[var(--ink)] transition-colors font-medium"
              >
                Tangison Studio
              </a>.
            </p>
            <p className="text-xs text-[var(--muted-ink)] mt-2">
              For detailed asset files and implementation guidance, contact{" "}
              <a href={`mailto:${SITE.email}`} className="text-[var(--teal)] hover:text-[var(--ink)] transition-colors">
                {SITE.email}
              </a>.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
