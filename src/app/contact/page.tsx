import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { pageJsonLd, JsonLdScript } from "@/lib/seo";
import ContactContent from "@/components/pages/contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with Tangison Technologies.",
  openGraph: {
    images: [{ url: "/images/tangison/webp/02-skeleton-coast-signal-og-1200x630.webp", width: 1200, height: 630 }],
    title: "Contact: Tangison Technologies",
    description: "Start a conversation with Tangison Technologies.",
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLdScript
        data={pageJsonLd(
          "Contact",
          "Start a conversation with Tangison Technologies.",
          "/contact"
        )}
      />
      <ContactContent />
    </>
  );
}
