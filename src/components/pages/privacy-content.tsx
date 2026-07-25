'use client';

import { PageShell } from "@/components/site/page-shell";
import { useRevealChildren } from "@/hooks/use-reveal";
import { SITE } from "@/lib/site";

export default function PrivacyPage() {
  const contentRef = useRevealChildren<HTMLElement>();

  return (
    <PageShell>
      <section ref={contentRef} className="section-spacing bg-[var(--bg)]" aria-label="Privacy policy">
        <div className="container-tangison">
          <div className="reveal">
            <p className="eyebrow mb-2">Legal</p>
            <h1 className="display display-md text-[var(--ink)]">Privacy Policy</h1>
            <p className="mt-2 text-xs text-[var(--muted-ink)]">
              Last updated: July 2025
            </p>
          </div>

          <hr className="hairline my-8" />

          <article className="reveal space-y-6 max-w-2xl">
            <section>
              <h2 className="text-sm font-semibold text-[var(--ink)] mb-3">1. Introduction</h2>
              <p className="text-[var(--muted-ink)] text-sm">
                This privacy policy describes how {SITE.company} collects,
                uses and protects information when you visit our website
                at {SITE.siteUrl}. The website is a corporate information
                site. It does not process transactions, sell products
                directly, or require account creation.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold text-[var(--ink)] mb-3">2. Information we collect</h2>
              <p className="text-[var(--muted-ink)] text-sm">
                When you visit this website, we may collect the following
                categories of information:
              </p>
              <ul className="mt-2 space-y-2">
                <li className="text-[var(--muted-ink)] text-sm flex items-start gap-2">
                  <span className="inline-block w-1 h-1 rounded-full bg-[var(--teal)] mt-2 flex-shrink-0" />
                  <span><strong className="text-[var(--ink)]">Usage data:</strong> Standard web analytics data such as page visits, referral sources, browser type, device type and general geographic region. This data is aggregated and does not identify individual visitors.</span>
                </li>
                <li className="text-[var(--muted-ink)] text-sm flex items-start gap-2">
                  <span className="inline-block w-1 h-1 rounded-full bg-[var(--teal)] mt-2 flex-shrink-0" />
                  <span><strong className="text-[var(--ink)]">Contact data:</strong> If you contact us directly via email, we retain the content of your message and your email address for the purpose of responding to your enquiry.</span>
                </li>
                <li className="text-[var(--muted-ink)] text-sm flex items-start gap-2">
                  <span className="inline-block w-1 h-1 rounded-full bg-[var(--teal)] mt-2 flex-shrink-0" />
                  <span><strong className="text-[var(--ink)]">Cookies:</strong> This website may use essential cookies for basic functionality such as session management. We do not use tracking cookies or third-party advertising cookies.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-sm font-semibold text-[var(--ink)] mb-3">3. How we use information</h2>
              <p className="text-[var(--muted-ink)] text-sm">
                We use collected information for the following purposes:
              </p>
              <ul className="mt-2 space-y-2">
                <li className="text-[var(--muted-ink)] text-sm flex items-start gap-2">
                  <span className="inline-block w-1 h-1 rounded-full bg-[var(--teal)] mt-2 flex-shrink-0" />
                  To operate and maintain the website
                </li>
                <li className="text-[var(--muted-ink)] text-sm flex items-start gap-2">
                  <span className="inline-block w-1 h-1 rounded-full bg-[var(--teal)] mt-2 flex-shrink-0" />
                  To understand how visitors use the website and improve its content
                </li>
                <li className="text-[var(--muted-ink)] text-sm flex items-start gap-2">
                  <span className="inline-block w-1 h-1 rounded-full bg-[var(--teal)] mt-2 flex-shrink-0" />
                  To respond to direct enquiries submitted via email
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-sm font-semibold text-[var(--ink)] mb-3">4. Data sharing</h2>
              <p className="text-[var(--muted-ink)] text-sm">
                {SITE.company} does not sell, rent or share personal
                information with third parties for commercial purposes.
                We may share aggregated, non-identifying usage data with
                service providers who help us operate the website, but
                only under contractual obligations to protect that data.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold text-[var(--ink)] mb-3">5. Data retention</h2>
              <p className="text-[var(--muted-ink)] text-sm">
                Usage data is retained in aggregated form for up to 12
                months, then deleted. Contact data (email enquiries) is
                retained for as long as necessary to fulfil the purpose
                of the enquiry, then deleted unless we are required to
                retain it for legal compliance.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold text-[var(--ink)] mb-3">6. Data security</h2>
              <p className="text-[var(--muted-ink)] text-sm">
                We implement reasonable technical measures to protect
                information collected through this website. However, no
                system is completely secure. We cannot guarantee the
                absolute security of data transmitted over the internet.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold text-[var(--ink)] mb-3">7. Your rights</h2>
              <p className="text-[var(--muted-ink)] text-sm">
                You have the right to request information about the data
                we hold about you, to request correction of inaccurate
                data, and to request deletion of your data where we are
                not legally required to retain it. To exercise these
                rights, contact us at{" "}
                <a href={`mailto:${SITE.email}`} className="text-[var(--teal)] hover:text-[var(--ink)] transition-colors">
                  {SITE.email}
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold text-[var(--ink)] mb-3">8. Third-party links</h2>
              <p className="text-[var(--muted-ink)] text-sm">
                This website contains links to other websites operated
                by Tangison ecosystem entities (Tangison Agent, Tangison
                Studio). Each entity has its own privacy policy. This
                policy applies only to {SITE.siteUrl}.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold text-[var(--ink)] mb-3">9. Changes to this policy</h2>
              <p className="text-[var(--muted-ink)] text-sm">
                We may update this privacy policy from time to time.
                Changes will be posted on this page with an updated
                revision date. Continued use of the website after
                changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold text-[var(--ink)] mb-3">10. Contact</h2>
              <p className="text-[var(--muted-ink)] text-sm">
                For questions about this privacy policy, contact{" "}
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
