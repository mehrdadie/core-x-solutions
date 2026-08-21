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
  keywords: [
    "revenue operations consultancy",
    "RevOps consultancy",
    "revenue operations consultant",
    "marketing attribution consultant",
    "fractional head of data",
    "freelance data consultant",
    "CRM data quality consultant",
    "lead to revenue reporting",
    "revenue attribution",
    "marketing analytics",
    "CRM architecture",
    "workflow automation consultant",
    "systems integration consultant",
    "n8n",
    "BigQuery",
    "Power BI",
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
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
  return (
    <html lang="en" className={`${archivo.variable} ${instrument.variable} ${jetbrains.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
