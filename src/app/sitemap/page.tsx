import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import SitemapContent from "@/components/pages/sitemap-content";

export const metadata: Metadata = {
  title: "Site Map",
  description: "A complete index of all pages on the Tangison Technologies website.",
  openGraph: {
    images: [{ url: "/images/tangison/webp/02-skeleton-coast-signal-og-1200x630.webp", width: 1200, height: 630 }],
    title: "Site Map: Tangison Technologies",
    description: "A complete index of all pages on the Tangison Technologies website.",
  },
};

export default function SitemapOverviewPage() {
  return <SitemapContent />;
}
