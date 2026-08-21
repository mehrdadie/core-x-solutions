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
        /* No logo node yet: an ImageObject pointing at a file that does not
           exist is worse than omitting it, because it invalidates the whole
           node. Add one here once there is a real mark. */
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
