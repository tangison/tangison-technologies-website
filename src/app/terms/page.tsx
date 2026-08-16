import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import TermsContent from "@/components/pages/terms-content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms for using the Tangison Technologies website.",
  openGraph: {
    images: [{ url: "/images/tangison/webp/02-skeleton-coast-signal-og-1200x630.webp", width: 1200, height: 630 }],
    title: "Terms of Service: Tangison Technologies",
    description: "Terms for using the Tangison Technologies website.",
  },
};

export default function TermsPage() {
  return <TermsContent />;
}
