import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { pageJsonLd, JsonLdScript } from "@/lib/seo";
import CapabilitiesContent from "@/components/pages/capabilities-content";

const DESCRIPTION =
  "Information and communications technology, applied AI, digital transformation, consulting, and research and development. Delivered in-house or through Tangison Studio.";

export const metadata: Metadata = {
  title: "Capabilities",
  description: DESCRIPTION,
  alternates: { canonical: "/capabilities" },
  openGraph: {
    images: [
      {
        url: "/images/tangison/webp/02-skeleton-coast-signal-og-1200x630.webp",
        width: 1200,
        height: 630,
      },
    ],
    title: "Capabilities: Tangison Technologies",
    description: DESCRIPTION,
  },
};

export default function CapabilitiesPage() {
  return (
    <>
      <JsonLdScript data={pageJsonLd("Capabilities", DESCRIPTION, "/capabilities")} />
      <CapabilitiesContent />
    </>
  );
}
