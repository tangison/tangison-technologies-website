import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { pageJsonLd, JsonLdScript } from "@/lib/seo";
import BrandContent from "@/components/pages/brand-content";

export const metadata: Metadata = {
  title: "Brand",
  description: "Tangison brand guidelines, identity, and visual system.",
  openGraph: {
    title: "Brand — Tangison Technologies",
    description: "Tangison brand guidelines, identity, and visual system.",
  },
};

export default function BrandPage() {
  return (
    <>
      <JsonLdScript
        data={pageJsonLd(
          "Brand",
          "Tangison brand guidelines, identity, and visual system.",
          "/brand"
        )}
      />
      <BrandContent />
    </>
  );
}
