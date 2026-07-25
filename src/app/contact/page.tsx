import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { pageJsonLd, JsonLdScript } from "@/lib/seo";
import ContactContent from "@/components/pages/contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with Tangison Technologies.",
  openGraph: {
    title: "Contact — Tangison Technologies",
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
