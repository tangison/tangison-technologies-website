import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { organizationJsonLd, websiteJsonLd, JsonLdScript } from "@/lib/seo";
import HomeContent from "@/components/pages/home-content";

export const metadata: Metadata = {
  title: SITE.name,
  description: SITE.description,
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    images: [
      {
        url: "/images/tangison/webp/02-skeleton-coast-signal-og-1200x630.webp",
        width: 1200,
        height: 630,
        alt: `${SITE.name}: ${SITE.tagline}`,
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLdScript data={organizationJsonLd()} />
      <JsonLdScript data={websiteJsonLd()} />
      <HomeContent />
    </>
  );
}
