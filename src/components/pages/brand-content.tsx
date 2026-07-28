'use client';

import Image from "next/image";
import { PageShell } from "@/components/site/page-shell";
import { useReveal, useRevealChildren } from "@/hooks/use-reveal";
import { SITE } from "@/lib/site";
import { Logo } from "@/components/site/logo";
import { Tabs } from "@/components/ui/tabs";
import { Accordion } from "@/components/ui/accordion";
import { ZoomReveal } from "@/components/ui/zoom-reveal";

/* ─── Brand section accordion items ─── */
const MOTION_ACCORDION_ITEMS = [
  {
    id: "motion-scroll",
    title: "Scroll-triggered reveals",
    body: "Sections reveal as the page scrolls to them. The animation adds a visible class that triggers opacity and transform transitions via CSS. Each reveal uses IntersectionObserver with a threshold of 0.15 and a -40px rootMargin so the animation fires slightly before the element reaches the viewport centre. Stagger delays (60ms to 360ms) create rhythm without choreography. The CSS handles timing and easing; JavaScript only toggles the visible state.",
  },
  {
    id: "motion-zoom",
    title: "Zoom-from-origin reveals",
    body: "Elements that grow from a trigger point use scale animations from their spatial origin. Ecosystem cards zoom from their centre. Hero images scale slightly as you scroll past. The scale origin matches where the element appears to grow from, not an arbitrary direction. Per the motion rule: something growing from a trigger point uses scale/zoom from that origin, not a generic fade.",
  },
  {
    id: "motion-clip",
    title: "Clip-path wipe reveals",
    body: "Images and sections that wipe into view use clip-path animations. This reads as more intentional than a plain fade or slide because it describes a physical uncovering. The wipe direction matches the source of the content: images arriving from the left wipe right-to-left, images arriving from the right wipe left-to-right. The clip-path animation runs slightly slower than the fade so the physical reveal feels deliberate.",
  },
  {
    id: "motion-direction",
    title: "Directional reveals",
    body: "Content arriving from a direction that matches its source uses directional slides. The mobile nav slides from the edge it is anchored to. Dropdown menus fade down from their trigger button. Toast notifications enter from where notifications live on that screen. Two different elements sharing the same relationship get the same animation treatment. Inconsistency between similar elements reads as unintentional, not lively.",
  },
  {
    id: "motion-reduced",
    title: "Reduced-motion handling",
    body: "Every animation respects prefers-reduced-motion without exception. The reduced-motion state still communicates the change (an instant state swap, not a blank page). Scroll reveals become instant visibility. Dropdowns appear without transitions. The nav opens without sliding. The content is the same; the delivery is instant. Reduced-motion users get a functional, non-broken equivalent of every animated element.",
  },
  {
    id: "motion-frequency",
    title: "Frequency discipline",
    body: "Before adding motion, the frequency gate asks: how often will a user trigger this? Typing, hovering over list items, keyboard navigation are high-frequency actions that get no animation. Page load, first section reveal, opening a modal are rare triggers where deliberate motion earns its place. Motion on high-frequency actions becomes friction, not delight.",
  },
];

const TONE_ACCORDION_ITEMS = [
  {
    id: "tone-register",
    title: "Register: Namibian business English",
    body: "The writing uses Namibian business English. Direct, specific and restrained. No em dashes. No exclamation points. No AI cliches (revolutionise, unlock, cutting-edge, seamless, transformative, leverage, empower). No patterns like \"X as Y, not Z\" or \"X things, one Y.\" No invented metrics, testimonials or claims that cannot be verified. These are editorial rules, not preferences.",
  },
  {
    id: "tone-claims",
    title: "Claims must be verifiable or marked for verification",
    body: "Every claim must be verifiable or marked for client verification with the tag [NEEDS CLIENT VERIFICATION]. No invented metrics. No fabricated testimonials. No unsubstantiated claims about results, reach or performance. If a number cannot be sourced, it is removed or tagged. This applies to all pages, all sections, all copy.",
  },
  {
    id: "tone-headlines",
    title: "Headline formulas",
    body: "Headlines use benefit-driven formulas: \"{Outcome} without {pain point}\" (Operational intelligence without assumptions), \"The {category} for {audience}\" (The methodology for environments that resist ideal conditions), \"Never {problem} again\" (Never lose operations when connectivity drops). Each headline contains one idea. Vague headlines like \"Where it matters most\" or \"Intelligence for imperfect conditions\" are replaced with specific, benefit-driven alternatives.",
  },
  {
    id: "tone-cta",
    title: "CTA formula: Action verb + what they get + qualifier",
    body: "Every call-to-action follows the formula: [Action verb] + [what they get] + [qualifier if needed]. Examples: \"Get clear readings from conditions that resist measurement\" (not \"Learn more\"), \"Make operational choices with the data you have\" (not \"Explore\"), \"Tell us what conditions you face\" (not \"Start a conversation\"). Generic CTAs like \"Learn more\", \"Explore\", \"Discover\" are forbidden.",
  },
];

export default function BrandPage() {
  const heroRef = useReveal<HTMLElement>();

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

      {/* ─── BRAND SYSTEM with Tabs ─── */}
      <section className="section-spacing bg-[var(--bg)]" aria-label="Brand system">
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

          <div className="mt-8">
            <Tabs
              items={[
                {
                  id: "logo",
                  label: "Logo",
                  content: (
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
                        <p className="mt-2 text-[var(--muted-ink)] text-sm body-constrained">
                          Minimum clear space around the logo is equal to the
                          height of the logomark on all sides. Never place the
                          logo on busy backgrounds, gradients or patterns that
                          compromise legibility. The logo is always rendered in
                          its original colours. Never apply filters, shadows or
                          effects that alter its appearance.
                        </p>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "colour",
                  label: "Colour",
                  content: (
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-6 bg-[#2B6B5E] rounded-md">
                        <p className="text-xs font-mono text-[#F0EDE8]">Accent</p>
                        <p className="text-xs font-mono text-[#F0EDE8]/70 mt-1">#2B6B5E</p>
                        <p className="text-xs text-[#F0EDE8]/60 mt-2">Muted teal, desaturated. Used for emphasis, interactions and identity markers. Never used at full saturation. The accent colour carries the brand without dominating it.</p>
                      </div>
                      <div className="p-6 bg-[#F0EDE8] border border-[var(--hairline)] rounded-md">
                        <p className="text-xs font-mono text-[var(--ink)]">Background</p>
                        <p className="text-xs font-mono text-[var(--muted-ink)] mt-1">#F0EDE8</p>
                        <p className="text-xs text-[var(--muted-ink)] mt-2">Warm off-white with faint graphite tint. The default surface. Not pure white. The warm tint prevents the clinical feel of #FFF backgrounds.</p>
                      </div>
                      <div className="p-6 bg-[#1A1A18] rounded-md">
                        <p className="text-xs font-mono text-[#F0EDE8]">Ink</p>
                        <p className="text-xs font-mono text-[#F0EDE8]/70 mt-1">#1A1A18</p>
                        <p className="text-xs text-[#F0EDE8]/60 mt-2">Warm near-black. No pure #000. Used for primary text and strong contrast. Pure black creates harsh edges; the warm tint softens them.</p>
                      </div>
                      <div className="p-6 bg-[#FFFFFF] border border-[var(--hairline)] rounded-md">
                        <p className="text-xs font-mono text-[var(--ink)]">Surface</p>
                        <p className="text-xs font-mono text-[var(--muted-ink)] mt-1">#FFFFFF</p>
                        <p className="text-xs text-[var(--muted-ink)] mt-2">Clean white. Used for cards, elevated surfaces and content areas. Creates hierarchy against the warm off-white background.</p>
                      </div>
                      <div className="p-6 bg-[#6B6760] rounded-md">
                        <p className="text-xs font-mono text-[#F0EDE8]">Muted ink</p>
                        <p className="text-xs font-mono text-[#F0EDE8]/70 mt-1">#6B6760</p>
                        <p className="text-xs text-[#F0EDE8]/60 mt-2">Secondary text colour. Used for captions, descriptions and supporting content. Provides contrast hierarchy without competing with the primary ink.</p>
                      </div>
                      <div className="p-6 bg-[#D4CFC7] border border-[var(--hairline)] rounded-md">
                        <p className="text-xs font-mono text-[var(--ink)]">Hairline</p>
                        <p className="text-xs font-mono text-[var(--muted-ink)] mt-1">#D4CFC7</p>
                        <p className="text-xs text-[var(--muted-ink)] mt-2">Warm grey borders. Used for dividers, card edges and structural lines. Never used for emphasis. Hairlines define structure, not importance.</p>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "typography",
                  label: "Typography",
                  content: (
                    <div className="space-y-6">
                      <div>
                        <p className="text-xs font-mono text-[var(--muted-ink)]">Display (headings)</p>
                        <p className="display text-[var(--ink)] mt-2">Inter, 800 weight, tight tracking</p>
                        <p className="mt-2 text-sm text-[var(--muted-ink)] body-constrained">
                          Display text uses Inter at 800 weight with -0.02em tracking and 1.08 line-height. The tight tracking and reduced line-height create decisive headlines. Display sizes use clamp for fluid scaling: display-lg (2.5rem to 3.5rem), display-md (2rem to 2.5rem), display-sm (1.5rem to 1.75rem).
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-mono text-[var(--muted-ink)]">Body (content)</p>
                        <p className="text-[var(--ink)] mt-1" style={{ fontFamily: "var(--font-body)" }}>Inter, 400 weight, default tracking. Used for paragraphs and descriptions.</p>
                        <p className="mt-2 text-sm text-[var(--muted-ink)] body-constrained">
                          Body text uses Inter at 400 weight with default tracking and 1.6 line-height. Body-constrained paragraphs are limited to 65ch width for optimal reading measure. The font stack falls back to system-ui for compatibility.
                        </p>
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
                  ),
                },
                {
                  id: "imagery",
                  label: "Imagery",
                  content: (
                    <div>
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
                        compete with content. Each image is given an alt text
                        that describes what is in the image, not what the image
                        represents metaphorically.
                      </p>
                      <ZoomReveal origin="center" delay={0.1} className="mt-6 grid md:grid-cols-3 gap-4">
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
                      </ZoomReveal>
                    </div>
                  ),
                },
                {
                  id: "tone",
                  label: "Tone",
                  content: (
                    <div>
                      <p className="text-[var(--muted-ink)] body-constrained">
                        Tangison writes in Namibian business English. The tone
                        is direct, specific and restrained. No em dashes. No
                        exclamation points. No AI cliches (revolutionise, unlock,
                        cutting-edge, seamless, transformative, leverage, empower).
                        No patterns like &ldquo;X as Y, not Z&rdquo; or &ldquo;X things, one Y.&rdquo;
                        No invented metrics, testimonials or claims that cannot
                        be verified. These are editorial rules, not preferences.
                      </p>
                      <p className="mt-3 text-[var(--muted-ink)] body-constrained">
                        Paragraphs are concise. Evidence and systems take priority
                        over hype. Every claim must be verifiable or marked for
                        client verification. The writing serves the same principle
                        as the visual system: vast conditions, precise intelligence.
                      </p>
                      <div className="mt-6">
                        <p className="eyebrow mb-3">Writing rules</p>
                        <Accordion items={TONE_ACCORDION_ITEMS} />
                      </div>
                    </div>
                  ),
                },
                {
                  id: "motion",
                  label: "Motion",
                  content: (
                    <div>
                      <p className="text-[var(--muted-ink)] body-constrained">
                        Motion in the Tangison brand is intentional, not decorative.
                        Every animation answers one question: what changed, and
                        where did it come from or go to. If an animation cannot
                        answer that question, it does not exist. The motion system
                        uses a single entrance curve (cubic-bezier(0.16, 1, 0.3, 1))
                        and a single exit curve applied consistently across all
                        transitions. One motion vocabulary per project, not a
                        different curve per component.
                      </p>
                      <p className="mt-3 text-[var(--muted-ink)] body-constrained">
                        Technical discipline: animate transform and opacity only.
                        Never animate top, left, width, height or margin, which
                        force layout recalculation and look janky on lower-end
                        devices. This matters given Namibian device and connectivity
                        variance. Clip-path is a legitimate animation primitive for
                        reveals. Reduced-motion users receive instant state swaps,
                        not broken pages.
                      </p>
                      <div className="mt-6">
                        <p className="eyebrow mb-3">Motion rules</p>
                        <Accordion items={MOTION_ACCORDION_ITEMS} />
                      </div>
                    </div>
                  ),
                },
              ]}
              defaultValue="logo"
            />
          </div>

          {/* Credit */}
          <hr className="hairline my-12" />

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
