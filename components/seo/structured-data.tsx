// Render JSON-LD using a native <script> tag so this works in Server Components

interface OrganizationStructuredDataProps {
  locale: string;
}

export function OrganizationStructuredData({
  locale,
}: OrganizationStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name:
      locale === "fr"
        ? "Association des Praticiens des Marchés Publics au Cameroun"
        : "Cameroon Association of Public Procurement Practitioners",
    alternateName: locale === "fr" ? "APMC" : "CAPPP",
    url: "https://apmc-cameroon.org",
    logo: "/placeholder-logo.png",
    description:
      locale === "fr"
        ? "Association professionnelle dédiée à la promotion des bonnes pratiques dans les marchés publics au Cameroun"
        : "Professional association dedicated to promoting best practices in public procurement in Cameroon",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avenue Kennedy",
      addressLocality: "Yaoundé",
      addressCountry: "CM",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+237-XXX-XXX-XXX",
      contactType: "customer service",
      availableLanguage: ["French", "English"],
    },
    sameAs: [
      "https://www.linkedin.com/company/apmc-cameroon",
      "https://twitter.com/apmc_cameroon",
      "https://www.facebook.com/apmc.cameroon",
    ],
  };

  return (
    <script
      id="organization-structured-data"
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

interface WebsiteStructuredDataProps {
  locale: string;
}

export function WebsiteStructuredData({ locale }: WebsiteStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name:
      locale === "fr"
        ? "APMC - Association des Praticiens des Marchés Publics au Cameroun"
        : "CAPPP - Cameroon Association of Public Procurement Practitioners",
    url: "https://apmc-cameroon.org",
    description:
      locale === "fr"
        ? "Site officiel de l'Association des Praticiens des Marchés Publics au Cameroun"
        : "Official website of the Cameroon Association of Public Procurement Practitioners",
    inLanguage: [locale],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://apmc-cameroon.org/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      id="website-structured-data"
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
