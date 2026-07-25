import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.brand,
    description: SITE.description,
    start_url: "/",
    display: "browser",
    background_color: "#F0EDE8",
    theme_color: "#2B6B5E",
    icons: [
      {
        src: "/tangison-shipwreck-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/favicon.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  };
}
