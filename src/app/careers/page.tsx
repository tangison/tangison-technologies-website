import type { Metadata } from "next";
import { pageJsonLd, JsonLdScript } from "@/lib/seo";
import CareersContent from "@/components/pages/careers-content";

const DESCRIPTION =
  "Work with Tangison Technologies in Windhoek. Engineering, design and operations roles building systems for environments where infrastructure is uneven.";

export const metadata: Metadata = {
  title: "Careers",
  description: DESCRIPTION,
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers — Tangison Technologies",
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
