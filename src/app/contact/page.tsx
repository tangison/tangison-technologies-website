import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { pageJsonLd, JsonLdScript } from "@/lib/seo";
import ContactContent from "@/components/pages/contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Tangison Technologies CC in Windhoek. Tenders, RFIs, and project enquiries: info@tangison.com, 081 341 1522.",
  alternates: { canonical: "/contact" },
  openGraph: {
    images: [{ url: "/images/tangison/webp/02-skeleton-coast-signal-og-1200x630.webp", width: 1200, height: 630 }],
    title: "Contact and Compliance: Tangison Technologies CC",
    description: "Contact Tangison Technologies CC in Windhoek. Tenders, RFIs, and project enquiries: info@tangison.com, 081 341 1522.",
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLdScript
        data={pageJsonLd(
          "Contact",
          "Tenders, RFIs, and project enquiries: info@tangison.com, 081 341 1522.",
          "/contact"
        )}
      />
      <ContactContent />
    </>
  );
}
