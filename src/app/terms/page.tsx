import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import TermsContent from "@/components/pages/terms-content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms for using the Tangison Technologies website.",
  openGraph: {
    title: "Terms of Service — Tangison Technologies",
    description: "Terms for using the Tangison Technologies website.",
  },
};

export default function TermsPage() {
  return <TermsContent />;
}
