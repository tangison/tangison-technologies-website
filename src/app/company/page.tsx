import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { pageJsonLd, JsonLdScript } from "@/lib/seo";
import CompanyContent from "@/components/pages/company-content";

export const metadata: Metadata = {
  title: "Company",
  description:
    "About Tangison Technologies, its philosophy, and its Namibian context.",
  openGraph: {
    images: [{ url: "/images/tangison/webp/02-skeleton-coast-signal-og-1200x630.webp", width: 1200, height: 630 }],
    title: "Company: Tangison Technologies",
    description: "About Tangison Technologies, built in Namibia for conditions where connectivity drops and infrastructure is uneven.",
  },
};

export default function CompanyPage() {
  return (
    <>
      <JsonLdScript
        data={pageJsonLd(
          "Company",
          "About Tangison Technologies, its philosophy, and its Namibian context.",
          "/company"
        )}
      />
      <CompanyContent />
    </>
  );
}
