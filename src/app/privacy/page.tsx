import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import PrivacyContent from "@/components/pages/privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "What the Tangison Technologies CC website collects and how it handles your data.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    images: [{ url: "/images/tangison/webp/02-skeleton-coast-signal-og-1200x630.webp", width: 1200, height: 630 }],
    title: "Privacy Policy: Tangison Technologies CC",
    description: "What the Tangison Technologies CC website collects and how it handles your data.",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
