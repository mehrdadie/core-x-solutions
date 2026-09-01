import type { Metadata, Viewport } from "next"
import { Archivo, Instrument_Sans, JetBrains_Mono } from "next/font/google"
import { profile } from "@/content/profile"
import "./globals.css"

/** Display face carries a width axis — headings run slightly expanded. */
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
})

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
})

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
})

const title = `${profile.name} | Revenue Operations & Data Consultancy`
/** Kept under 160 characters — search engines truncate past that. */
const description =
  "Revenue operations and data consultancy. We connect CRM, marketing, payments and reporting so your numbers finally agree — and stay that way."

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title,
  description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: profile.url }],
  creator: profile.name,
  /**
   * Ordered by how the market actually searches, not by how the practice
   * describes itself — see docs/keyword-research.md. "Growth systems" stays the
   * brand line in the hero; it has no search demand, so it is not a keyword.
   */
  /**
   * Only phrases a live search source actually completes.
   *
   * The list this replaced was built from the brief rather than from evidence,
   * and four of its entries return nothing at all when typed — `marketing
   * attribution consultant`, `CRM data quality consultant`, `revenue attribution
   * consultant` and `lead to revenue reporting`. Two more, `fractional head of
   * data` and `systems integration consultant`, complete almost entirely into
   * salary and job-description queries, which is a different audience wearing
   * the same words. `revenue operations consulting` is the form that completes;
   * `consultancy` is the form the brand uses. Both are here on purpose.
   */
  keywords: [
    "revenue operations consulting",
    "revenue operations consulting services",
    "revenue operations consultancy",
    "RevOps consultancy",
    "RevOps agency",
    "RevOps agency UK",
    "fractional RevOps",
    "B2B RevOps consultancy",
    "revenue attribution models",
    "marketing attribution models",
    "CRM integration consultant",
    "CRM architecture",
    "CRM data quality",
    "reporting automation",
    "marketing analytics consulting services",
    "n8n automation consultant",
    "Power BI consultancy UK",
    "Salesforce",
    "GoHighLevel",
    "Stripe",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: profile.url,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
    // A default card for every page that does not generate its own. The
    // opengraph-image.tsx file convention applies only to its own segment and
    // is not inherited by children, so without this the 31 service pages, the
    // blog index and the case studies all shared to social as a bare link.
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [{ url: "/opengraph-image", alt: title }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
}

export const viewport: Viewport = {
  themeColor: "#0F1518",
  colorScheme: "dark",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // en-GB, not en. The copy is -ise/-our/-yse and prices in sterling, the
  // OpenGraph block above already declares en_GB, and this is one of the few
  // locale signals an origin can send without a country-code TLD.
  return (
    <html lang="en-GB" className={`${archivo.variable} ${instrument.variable} ${jetbrains.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
