import { SITE, TEAM_NAMES } from "./site";

/**
 * Generate JSON-LD structured data for Tangison Technologies.
 * This data is embedded in pages for search engine understanding.
 */

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    description: SITE.description,
    url: SITE.siteUrl,
    logo: `${SITE.siteUrl}/tangison-logo.png`,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Windhoek",
      addressCountry: "NA",
    },
    foundingLocation: {
      "@type": "Place",
      name: "Windhoek, Namibia",
    },
    sameAs: [
      SITE.agentUrl,
      SITE.studioUrl,
    ],
    member: TEAM_NAMES.map((name) => ({
      "@type": "Person",
      name,
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.siteUrl,
    description: SITE.description,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
    },
  };
}

export function pageJsonLd(title: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${SITE.siteUrl}${path}`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.siteUrl,
    },
  };
}

/**
 * Renders JSON-LD as a script tag for embedding in page head.
 */
export function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
