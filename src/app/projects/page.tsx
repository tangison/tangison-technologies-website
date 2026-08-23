import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { pageJsonLd, JsonLdScript } from "@/lib/seo";
import ProjectsContent from "@/components/pages/projects-content";

const DESCRIPTION =
  "Selected work from Tangison Technologies CC: in-house AI research, national media platforms, education and marketplace builds, and fifteen client projects delivered through Tangison Studio.";

export const metadata: Metadata = {
  title: "Projects and R&D",
  description: DESCRIPTION,
  alternates: { canonical: "/projects" },
  openGraph: {
    images: [
      {
        url: "/images/tangison/webp/02-skeleton-coast-signal-og-1200x630.webp",
        width: 1200,
        height: 630,
      },
    ],
    title: "Projects and R&D: Tangison Technologies CC",
    description: DESCRIPTION,
  },
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLdScript data={pageJsonLd("Projects and R&D", DESCRIPTION, "/projects")} />
      <ProjectsContent />
    </>
  );
}
