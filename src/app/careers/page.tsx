import type { Metadata } from "next";
import { pageJsonLd, JsonLdScript } from "@/lib/seo";
import CareersContent from "@/components/pages/careers-content";

const DESCRIPTION =
  "Work with Tangison Technologies CC in Windhoek. A small, founder-led company building systems for imperfect conditions.";

export const metadata: Metadata = {
  title: "Careers",
  description: DESCRIPTION,
  alternates: { canonical: "/careers" },
  openGraph: {
    images: [{ url: "/images/tangison/webp/02-skeleton-coast-signal-og-1200x630.webp", width: 1200, height: 630 }],
    title: "Careers: Tangison Technologies CC",
    description: DESCRIPTION,
  },
};

export default function CareersPage() {
  return (
    <>
      <JsonLdScript data={pageJsonLd("Careers", DESCRIPTION, "/careers")} />
      <CareersContent />
    </>
  );
}
