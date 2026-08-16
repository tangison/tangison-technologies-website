import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { pageJsonLd, JsonLdScript } from "@/lib/seo";
import BrandContent from "@/components/pages/brand-content";

export const metadata: Metadata = {
  title: "Brand",
  description: "Tangison brand guidelines, identity, and visual system.",
  openGraph: {
    images: [{ url: "/images/tangison/webp/02-skeleton-coast-signal-og-1200x630.webp", width: 1200, height: 630 }],
    title: "Brand: Tangison Technologies",
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
