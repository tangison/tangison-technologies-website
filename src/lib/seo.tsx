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
    telephone: SITE.phoneMainE164,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: SITE.phoneMainE164,
        email: SITE.email,
        areaServed: "NA",
        availableLanguage: ["en"],
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        name: "Tangison Studio",
        telephone: SITE.phoneStudioE164,
        areaServed: "NA",
        availableLanguage: ["en"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Windhoek",
      addressCountry: "NA",
    },
    foundingLocation: {
      "@type": "Place",
      name: "Windhoek, Namibia",
    },
    /* @id lets studio.tangison.com's parentOrganization resolve to this exact
       entity rather than to a second, unrelated Organization node. */
    "@id": "https://tangison.com/#organization",
    /* Studio is a distinct legal entity, so it belongs in subOrganization.
       sameAs is for other profiles of THIS organization, not for children. */
    subOrganization: [
      {
        "@type": "Organization",
        "@id": "https://studio.tangison.com/#organization",
        name: "Tangison Studio",
        url: SITE.studioUrl,
        description:
          "The creative arm of Tangison Technologies. Brand systems, websites, and digital products.",
      },
      {
        "@type": "Organization",
        name: "Tangison Agent",
        url: SITE.agentUrl,
        description:
          "Self-hosted AI agents that keep data on your own hardware.",
      },
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
