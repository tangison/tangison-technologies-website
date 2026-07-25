import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import PrivacyContent from "@/components/pages/privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "What the Tangison Technologies website collects and how it handles your data.",
  openGraph: {
    title: "Privacy Policy — Tangison Technologies",
    description: "What the Tangison Technologies website collects and how it handles your data.",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
