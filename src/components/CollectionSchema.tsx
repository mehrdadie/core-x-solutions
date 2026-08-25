import { profile } from "@/content/profile"

/**
 * Breadcrumb and page-type markup for the pages that are not articles or
 * services: the three indexes, plus About and Contact.
 *
 * They had no structured data at all, which mattered more than it looks: these
 * are the pages Google picks from when it decides whether to show sitelinks
 * under a brand result, and they were the only significant pages on the site
 * with nothing describing what they are or where they sit.
 *
 * Deliberately small. A CollectionPage that lies about its contents is worse
 * than no markup, so this states only what is verifiable from the route: the
 * name, the path, and its position one level under the home page.
 */
export default function CollectionSchema({
  path,
  name,
  description,
  type = "CollectionPage",
}: {
  path: string
  name: string
  description: string
  /** AboutPage and ContactPage are the same shape; only the label differs. */
  type?: "CollectionPage" | "AboutPage" | "ContactPage" | "WebPage"
}) {
  const url = `${profile.url}${path}`

  const graph = [
    {
      "@type": type,
      "@id": `${url}#page`,
      name,
      description,
      url,
      isPartOf: { "@id": `${profile.url}/#website` },
      publisher: { "@id": `${profile.url}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: profile.url },
        { "@type": "ListItem", position: 2, name, item: url },
      ],
    },
  ]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  )
}
