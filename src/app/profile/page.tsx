import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { pageJsonLd, JsonLdScript } from "@/lib/seo";
import ProfileContent from "@/components/pages/profile-content";

const DESCRIPTION =
  "A registered Close Corporation in Namibia, 100% Namibian owned, founded and operated in Windhoek by Tangi Iigonda.";

export const metadata: Metadata = {
  title: "Company Profile",
  description: DESCRIPTION,
  alternates: { canonical: "/profile" },
  openGraph: {
    images: [
      {
        url: "/images/tangison/webp/02-skeleton-coast-signal-og-1200x630.webp",
        width: 1200,
        height: 630,
      },
    ],
    title: "Company Profile: Tangison Technologies CC",
    description: DESCRIPTION,
  },
};

export default function ProfilePage() {
  return (
    <>
      <JsonLdScript data={pageJsonLd("Company Profile", DESCRIPTION, "/profile")} />
      <ProfileContent />
    </>
  );
}
