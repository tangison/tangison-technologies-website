import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { pageJsonLd, JsonLdScript } from "@/lib/seo";
import TechnologyContent from "@/components/pages/technology-content";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Observe, Decide, Operate: Tangison's operational intelligence methodology and its technology ecosystem.",
  openGraph: {
    title: "Technology — Tangison Technologies",
    description:
      "Observe, Decide, Operate: Tangison's operational intelligence methodology.",
  },
};

export default function TechnologyPage() {
  return (
    <>
      <JsonLdScript
        data={pageJsonLd(
          "Technology",
          "Observe, Decide, Operate: Tangison's operational intelligence methodology.",
          "/technology"
        )}
      />
      <TechnologyContent />
    </>
  );
}
