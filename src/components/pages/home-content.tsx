'use client';

import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { useReveal, useRevealChildren } from "@/hooks/use-reveal";
import { SITE, EcosystemEntities } from "@/lib/site";

/* ─── Methodology phases (editorial, NOT generic cards) ─── */
const METHODOLOGY = [
  {
    phase: "Observe",
    number: "01",
    description:
      "Gather signals from environments where connectivity, data and infrastructure cannot be assumed. Observation is the first discipline: listening before speaking, sensing before acting.",
    href: "/technology#observe",
    image: "/images/tangison/webp/03-ai-operations-node.webp",
    imageAlt: "A minimal graphite control node with a single teal status light",
    focal: "right center",
  },
  {
    phase: "Decide",
    number: "02",
    description:
      "Turn observations into operational decisions. Not abstract analysis, but concrete choices made under real constraints: limited time, partial information, incomplete infrastructure.",
    href: "/technology#decide",
    image: "/images/tangison/webp/04-data-decision-planes.webp",
    imageAlt: "Intersecting smoke-glass planes joined by a precise teal seam",
    focal: "left center",
  },
  {
    phase: "Operate",
    number: "03",
    description:
      "Execute decisions in the field. Systems that run where connectivity drops, where hardware ages, where conditions change without warning. Operation is the proof of the method.",
    href: "/technology#operate",
    image: "/images/tangison/webp/05-resilient-platform-monolith.webp",
    imageAlt: "A dark stone monolith with a narrow light seam emerging through coastal fog",
    focal: "left center",
  },
];

const CAROUSEL_ITEMS = [
  {
    src: "/images/tangison/webp/12-carousel-fog-vessel.webp",
    alt: "A distant vessel silhouette fading into Skeleton Coast fog",
    caption: "Fog vessel",
  },
  {
    src: "/images/tangison/webp/13-carousel-dune-continuity.webp",
    alt: "A clean Namib dune ridge marked by one restrained teal line",
    caption: "Dune continuity",
  },
  {
    src: "/images/tangison/webp/14-carousel-rust-threshold.webp",
    alt: "A plain rusted steel plate standing in still dark water and fog",
    caption: "Rust threshold",
  },
];

export default function Home() {
  const heroRef = useReveal<HTMLElement>();
  const methodRef = useRevealChildren<HTMLElement>();
  const carouselRef = useReveal<HTMLElement>();
  const namibiaRef = useRevealChildren<HTMLElement>();
  const ecosystemRef = useRevealChildren<HTMLElement>();
  const contactRef = useReveal<HTMLElement>();

  return (
    <PageShell>
      {/* ─── 1. HERO ─── */}
      <section ref={heroRef} className="hero-section noise-overlay reveal" aria-label="Hero">
        {/* Hero image */}
        <div className="absolute inset-0">
          <Image
            src="/images/tangison/webp/01-skeleton-coast-hero-1920x1080.webp"
            alt="The Namib Desert meeting the Atlantic Ocean through coastal fog on the Skeleton Coast"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center" }}
          />
          {/* Subtle gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(26,26,24,0.35)] via-[rgba(26,26,24,0.15)] to-transparent" />
        </div>

        {/* Hero content */}
        <div className="absolute inset-0 flex items-end">
          <div className="container-tangison pb-12 md:pb-16">
            <p className="eyebrow reveal-delay-1 mb-4">{SITE.visualIdea}</p>
            <h1 className="display display-lg text-[var(--teal-text)] reveal-delay-2">
              Intelligence<br />for imperfect<br />conditions.
            </h1>
            <p className="mt-4 text-sm text-[var(--teal-text)]/80 body-constrained reveal-delay-3">
              Tangison Technologies designs operational intelligence systems
              for environments where connectivity, data and infrastructure
              cannot be assumed.
            </p>
            <div className="mt-6 flex gap-3 reveal-delay-4">
              <Link href="/technology" className="btn-accent">
                Technology
              </Link>
              <Link href="/company" className="btn-outline border-[rgba(240,237,232,0.3)] text-[var(--teal-text)] hover:bg-[rgba(240,237,232,0.1)]">
                Company
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. METHODOLOGY: OBSERVE / DECIDE / OPERATE ─── */}
      <section ref={methodRef} className="section-spacing bg-[var(--bg)]" aria-label="Methodology">
        <div className="container-tangison">
          <div className="reveal">
            <p className="eyebrow mb-2">Methodology</p>
            <h2 className="display display-md text-[var(--ink)]">
              Observe. Decide. Operate.
            </h2>
            <p className="mt-4 text-[var(--muted-ink)] body-constrained">
              Three phases, not three products. A methodology built for
              conditions that do not wait for ideal infrastructure.
            </p>
          </div>

          {/* Phase 1: Observe — text left, image right */}
          <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="reveal-left reveal-delay-1">
              <span className="text-[var(--teal)] font-mono text-xs tracking-widest">{METHODOLOGY[0].number}</span>
              <h3 className="display-sm text-[var(--ink)] mt-2">{METHODOLOGY[0].phase}</h3>
              <p className="mt-3 text-[var(--muted-ink)] body-constrained">{METHODOLOGY[0].description}</p>
              <Link href={METHODOLOGY[0].href} className="mt-4 inline-flex text-sm text-[var(--teal)] hover:text-[var(--ink)] transition-colors font-medium">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
            <div className="reveal-image reveal-delay-2">
              <Image
                src={METHODOLOGY[0].image}
                alt={METHODOLOGY[0].imageAlt}
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-md w-full h-auto object-cover"
                style={{ objectPosition: METHODOLOGY[0].focal }}
              />
            </div>
          </div>

          {/* Phase 2: Decide — image left, text right (reversed) */}
          <div className="mt-12 md:mt-20 grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="reveal-image reveal-delay-1 order-2 md:order-1">
              <Image
                src={METHODOLOGY[1].image}
                alt={METHODOLOGY[1].imageAlt}
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-md w-full h-auto object-cover"
                style={{ objectPosition: METHODOLOGY[1].focal }}
              />
            </div>
            <div className="reveal reveal-delay-2 order-1 md:order-2">
              <span className="text-[var(--teal)] font-mono text-xs tracking-widest">{METHODOLOGY[1].number}</span>
              <h3 className="display-sm text-[var(--ink)] mt-2">{METHODOLOGY[1].phase}</h3>
              <p className="mt-3 text-[var(--muted-ink)] body-constrained">{METHODOLOGY[1].description}</p>
              <Link href={METHODOLOGY[1].href} className="mt-4 inline-flex text-sm text-[var(--teal)] hover:text-[var(--ink)] transition-colors font-medium">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>

          {/* Phase 3: Operate — full-width editorial image with overlay text */}
          <div className="mt-12 md:mt-20 relative reveal">
            <Image
              src={METHODOLOGY[2].image}
              alt={METHODOLOGY[2].imageAlt}
              width={1200}
              height={600}
              sizes="100vw"
              className="rounded-md w-full h-auto object-cover"
              style={{ objectPosition: METHODOLOGY[2].focal }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(26,26,24,0.5)] via-[rgba(26,26,24,0.2)] to-transparent rounded-b-md p-6 md:p-10">
              <span className="text-[var(--teal)] font-mono text-xs tracking-widest reveal-delay-1">{METHODOLOGY[2].number}</span>
              <h3 className="display-sm text-[var(--teal-text)] mt-2 reveal-delay-2">{METHODOLOGY[2].phase}</h3>
              <p className="mt-2 text-[var(--teal-text)]/80 body-constrained text-sm reveal-delay-3">{METHODOLOGY[2].description}</p>
              <Link href={METHODOLOGY[2].href} className="mt-4 inline-flex text-sm text-[var(--teal)] hover:text-[var(--teal-text)] transition-colors font-medium reveal-delay-4">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. EDITORIAL HORIZONTAL VISUAL SEQUENCE ─── */}
      <section ref={carouselRef} className="section-spacing bg-[var(--surface-2)]" aria-label="Visual sequence">
        <div className="container-tangison-wide">
          <div className="reveal mb-6">
            <p className="eyebrow mb-2">Conditions</p>
            <h2 className="display-sm text-[var(--ink)]">
              The landscape that shapes the method
            </h2>
          </div>

          <div className="image-rail reveal-delay-2">
            {CAROUSEL_ITEMS.map((item) => (
              <div key={item.src} className="image-rail-item w-[340px] md:w-[440px]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={440}
                  height={300}
                  sizes="440px"
                  className="rounded-md w-full h-auto object-cover"
                />
                <p className="mt-2 label text-[var(--muted-ink)]">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. NAMIBIA CONTEXT ─── */}
      <section ref={namibiaRef} className="section-spacing bg-[var(--bg)]" aria-label="Namibia context">
        <div className="container-tangison">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="reveal-image reveal-delay-1">
              <Image
                src="/images/tangison/webp/10-about-namibia-signal.webp"
                alt="A single distant signal mast on a vast Namibian gravel horizon"
                width={600}
                height={450}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-md w-full h-auto object-cover"
                style={{ objectPosition: "right center" }}
              />
            </div>
            <div className="reveal reveal-delay-2">
              <p className="eyebrow mb-2">Context</p>
              <h2 className="display-md text-[var(--ink)]">
                Built in Namibia.<br />Built for conditions like these.
              </h2>
              <p className="mt-4 text-[var(--muted-ink)] body-constrained">
                Namibia is a country where vast distances, sparse connectivity
                and extreme conditions are everyday reality, not edge cases.
                That context is not a limitation. It is the design brief.
              </p>
              <p className="mt-3 text-[var(--muted-ink)] body-constrained">
                Tangison Technologies operates from Windhoek, building systems
                that work where others assume they cannot. The Skeleton Coast,
                the Namib Desert, the gravel plains: these are the environments
                that teach the methodology.
              </p>
              <Link href="/company" className="mt-5 inline-flex text-sm text-[var(--teal)] hover:text-[var(--ink)] transition-colors font-medium">
                About the company
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. ECOSYSTEM ─── */}
      <section ref={ecosystemRef} className="section-spacing bg-[var(--surface)]" aria-label="Ecosystem">
        <div className="container-tangison">
          <div className="reveal">
            <p className="eyebrow mb-2">Ecosystem</p>
            <h2 className="display-md text-[var(--ink)]">
              Three capabilities, one intention
            </h2>
            <p className="mt-3 text-[var(--muted-ink)] body-constrained">
              Tangison operates as a connected ecosystem: an AI agent platform,
              a design and engineering studio, and a research lab. Each serves
              the same purpose: intelligence for imperfect conditions.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {EcosystemEntities.map((entity, i) => (
              <Link
                key={entity.name}
                href={entity.href}
                target={entity.href.startsWith("http") ? "_blank" : undefined}
                rel={entity.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group reveal reveal-delay-${i + 1} block rounded-md overflow-hidden bg-[var(--surface-2)] hover:bg-[var(--surface)] transition-colors border border-[var(--hairline)]`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={entity.image}
                    alt={entity.name}
                    width={400}
                    height={300}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    style={{ objectPosition: entity.focal }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--teal)] transition-colors">
                    {entity.name}
                  </h3>
                  <p className="mt-1 text-xs text-[var(--muted-ink)]">
                    {entity.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. CONTACT CLOSING ─── */}
      <section ref={contactRef} className="section-spacing noise-overlay reveal" aria-label="Contact statement">
        <div className="relative">
          <div className="absolute inset-0">
            <Image
              src="/images/tangison/webp/11-contact-coast-horizon.webp"
              alt="A quiet fog horizon where the Atlantic meets a dark Skeleton Coast beach"
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: "center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(26,26,24,0.55)] via-[rgba(26,26,24,0.3)] to-transparent" />
          </div>

          <div className="container-tangison relative z-10 py-16 md:py-24">
            <p className="eyebrow mb-4">Contact</p>
            <h2 className="display display-md text-[var(--teal-text)]">
              Start a conversation.
            </h2>
            <p className="mt-4 text-[var(--teal-text)]/80 body-constrained max-w-md">
              If your operations run where connectivity drops and
              conditions shift without warning, we should talk.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/contact" className="btn-accent">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
