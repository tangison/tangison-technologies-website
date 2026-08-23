import { SITE } from "./site";

/**
 * JSON-LD structured data for Tangison Technologies CC.
 *
 * The BIPA registration number is published here (machine-readable
 * structured data) only; it is deliberately not shown in visible copy.
 */

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://tangison.com/#organization",
    name: SITE.name,
    legalName: SITE.legalName,
    description: SITE.description,
    url: SITE.siteUrl,
    logo: `${SITE.siteUrl}/tangison-logo.png`,
    email: SITE.email,
    telephone: SITE.phoneE164,
    identifier: {
      "@type": "PropertyValue",
      name: "BIPA registration number",
      value: SITE.regNumber,
    },
    foundingDate: "2026-08-20",
    foundingLocation: {
      "@type": "Place",
      name: "Windhoek, Namibia",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Corner Dr Frans Indongo St and John Meinert St",
      addressLocality: "Windhoek",
      postalCode: "10005",
      addressCountry: "NA",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: SITE.phoneE164,
        email: SITE.email,
        areaServed: "NA",
        availableLanguage: ["en"],
      },
    ],
    member: [
      {
        "@type": "Person",
        name: SITE.owner,
      },
    ],
    subOrganization: [
      {
        "@type": "Organization",
        "@id": "https://studio.tangison.com/#organization",
        name: "Tangison Studio",
        url: SITE.studioUrl,
        description:
          "The design and engineering arm of Tangison Technologies. Brand systems, websites, and digital products.",
      },
    ],
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
