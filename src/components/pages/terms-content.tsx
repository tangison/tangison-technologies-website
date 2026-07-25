'use client';

import { PageShell } from "@/components/site/page-shell";
import { useRevealChildren } from "@/hooks/use-reveal";
import { SITE } from "@/lib/site";

export default function TermsPage() {
  const contentRef = useRevealChildren<HTMLElement>();

  return (
    <PageShell>
      <section ref={contentRef} className="section-spacing bg-[var(--bg)]" aria-label="Terms of service">
        <div className="container-tangison">
          <div className="reveal">
            <p className="eyebrow mb-2">Legal</p>
            <h1 className="display display-md text-[var(--ink)]">Terms of Service</h1>
            <p className="mt-2 text-xs text-[var(--muted-ink)]">
              Last updated: July 2025
            </p>
          </div>

          <hr className="hairline my-8" />

          <article className="reveal space-y-6 max-w-2xl">
            <section>
              <h2 className="text-sm font-semibold text-[var(--ink)] mb-3">1. Acceptance of terms</h2>
              <p className="text-[var(--muted-ink)] text-sm">
                By accessing and using the {SITE.company} website at
                {SITE.siteUrl}, you agree to these terms of service.
                If you do not agree, you should not use the website.
                These terms apply to all visitors and users of the
                website.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold text-[var(--ink)] mb-3">2. Nature of the website</h2>
              <p className="text-[var(--muted-ink)] text-sm">
                This website is a corporate information site. It provides
                information about {SITE.company}, its technology,
                philosophy, brand and contact details. It does not
                process transactions, sell products directly, or provide
                access to software services. Product terms for Tangison
                Agent and other ecosystem entities are published on their
                respective websites.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold text-[var(--ink)] mb-3">3. Intellectual property</h2>
              <p className="text-[var(--muted-ink)] text-sm">
                All content on this website, including text, images,
                logos, design elements and code, is the property of
                {SITE.company} or its licensors. You may not reproduce,
                distribute, modify or use any content from this website
                without written permission, except for personal,
                non-commercial reference.
              </p>
              <p className="text-[var(--muted-ink)] text-sm mt-2">
                The Tangison logo and visual identity system are protected
                brand assets. Guidelines for their use are published on
                the{" "}
                <a href="/brand" className="text-[var(--teal)] hover:text-[var(--ink)] transition-colors">
                  Brand page
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold text-[var(--ink)] mb-3">4. Use of the website</h2>
              <p className="text-[var(--muted-ink)] text-sm">
                You may use this website to read and reference information
                about {SITE.company}. You may not:
              </p>
              <ul className="mt-2 space-y-2">
                <li className="text-[var(--muted-ink)] text-sm flex items-start gap-2">
                  <span className="inline-block w-1 h-1 rounded-full bg-[var(--teal)] mt-2 flex-shrink-0" />
                  Use the website in any way that could damage, disable or impair its operation
                </li>
                <li className="text-[var(--muted-ink)] text-sm flex items-start gap-2">
                  <span className="inline-block w-1 h-1 rounded-full bg-[var(--teal)] mt-2 flex-shrink-0" />
                  Attempt to gain unauthorised access to any part of the website or its systems
                </li>
                <li className="text-[var(--muted-ink)] text-sm flex items-start gap-2">
                  <span className="inline-block w-1 h-1 rounded-full bg-[var(--teal)] mt-2 flex-shrink-0" />
                  Use automated tools to scrape, copy or extract content in bulk
                </li>
                <li className="text-[var(--muted-ink)] text-sm flex items-start gap-2">
                  <span className="inline-block w-1 h-1 rounded-full bg-[var(--teal)] mt-2 flex-shrink-0" />
                  Misrepresent your identity or affiliation when contacting us
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-sm font-semibold text-[var(--ink)] mb-3">5. Disclaimer</h2>
              <p className="text-[var(--muted-ink)] text-sm">
                The information on this website is provided for general
                informational purposes. {SITE.company} makes no
                representations or warranties about the completeness,
                accuracy or reliability of the information. The company
                reserves the right to change or update content at any
                time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold text-[var(--ink)] mb-3">6. Limitation of liability</h2>
              <p className="text-[var(--muted-ink)] text-sm">
                {SITE.company} is not liable for any damages arising
                from your use of this website or its content. This
                includes direct, indirect, incidental and consequential
                damages. This limitation applies to the fullest extent
                permitted by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold text-[var(--ink)] mb-3">7. Links to third-party sites</h2>
              <p className="text-[var(--muted-ink)] text-sm">
                This website contains links to other websites, including
                Tangison Agent and Tangison Studio. {SITE.company} is
                not responsible for the content, terms or practices of
                those external sites. Each entity operates independently
                with its own terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold text-[var(--ink)] mb-3">8. Governing law</h2>
              <p className="text-[var(--muted-ink)] text-sm">
                These terms are governed by the laws of Namibia. Any
                disputes arising from the use of this website shall be
                resolved in accordance with Namibian law and the
                jurisdiction of Namibian courts.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold text-[var(--ink)] mb-3">9. Changes to these terms</h2>
              <p className="text-[var(--muted-ink)] text-sm">
                {SITE.company} may update these terms from time to time.
                Changes will be posted on this page with an updated
                revision date. Continued use of the website after
                changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold text-[var(--ink)] mb-3">10. Contact</h2>
              <p className="text-[var(--muted-ink)] text-sm">
                For questions about these terms, contact{" "}
                <a href={`mailto:${SITE.email}`} className="text-[var(--teal)] hover:text-[var(--ink)] transition-colors">
                  {SITE.email}
                </a>.
              </p>
            </section>
          </article>

          <hr className="hairline my-8" />

          <p className="text-xs text-[var(--muted-ink)] reveal">
            {SITE.company}, {SITE.location}
          </p>
        </div>
      </section>
    </PageShell>
  );
}
