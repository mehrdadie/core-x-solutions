import { about, profile } from "@/content/profile"

/** Organization + ProfessionalService schema, rendered once on the home page. */
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${profile.url}/#organization`,
        name: profile.name,
        url: profile.url,
        email: `mailto:${profile.email}`,
        description: about.paragraphs[0],
        slogan: profile.role,
        /* The wordmark, which is what Google reads for the brand entity. The
           note that used to sit here said to add this "once there is a real
           mark" — public/core-x-logo.svg has existed since the rebrand, so the
           node was simply never caught up. Dimensions are the file's own
           viewBox, not guesses. */
        logo: {
          "@type": "ImageObject",
          url: `${profile.url}/core-x-logo.svg`,
          width: 654,
          height: 100,
        },
        /* sameAs is what ties this site to the same company elsewhere, and is
           the single strongest brand-entity signal after inbound links. It
           stays empty until there are real profiles to point at — inventing
           them would be worse than omitting the property. */
        sameAs: profile.linkedin ? [profile.linkedin] : undefined,
        knowsAbout: about.tags,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${profile.url}/#service`,
        name: `${profile.name} — ${profile.role}`,
        url: profile.url,
        description:
          "Consulting and implementation across data integration, business intelligence, marketing analytics, CRM architecture, revenue operations and automation.",
        provider: { "@id": `${profile.url}/#organization` },
        areaServed: "Worldwide",
        serviceType: [
          "Data integration",
          "Business intelligence",
          "Marketing analytics",
          "Revenue attribution",
          "CRM architecture",
          "Workflow automation",
          "AI implementation",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${profile.url}/#website`,
        url: profile.url,
        name: profile.name,
        publisher: { "@id": `${profile.url}/#organization` },
        inLanguage: "en",
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
