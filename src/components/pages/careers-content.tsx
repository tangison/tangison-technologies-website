'use client';

import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { useReveal } from "@/hooks/use-reveal";

export default function CareersContent() {
  const bodyRef = useReveal<HTMLElement>();

  return (
    <PageShell>
      <section ref={bodyRef} className="section-spacing reveal bg-[var(--bg)]" aria-label="Careers">
        <div className="container-tangison max-w-2xl">
          <p className="eyebrow mb-2">Careers</p>
          <h1 className="display display-lg">Work with Tangison</h1>
          <p className="mt-6 text-base leading-relaxed text-[var(--ink)]">
            Tangison Technologies is a small, founder-led company in
            Windhoek. We build systems for conditions that do not cooperate:
            intermittent connectivity, late-arriving data, uneven
            infrastructure. If you want to work where the work has to hold
            up, we want to hear from you.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-accent">
              Talk to us
            </Link>
          </div>
          <p className="mt-10 text-sm text-[var(--muted-ink)]">
            Our careers hub at career.tangison.com is coming soon. Until
            then, all roles are handled directly through our contact page.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
