import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import { legalEntity } from "@/content/legal"
import LegalDocument, { Clause } from "@/components/LegalDocument"

/**
 * Terms for a marketing site, which is what this is — there is nothing to sign
 * up for, nothing to buy and no account to hold. The clauses that matter are
 * the ones about the writing: what people may do with it, and the fact that an
 * article is not advice about their specific system.
 *
 * Client work is governed by whatever is signed for that engagement, not by
 * this page, and it says so.
 */

const title = `Terms of use | ${profile.name}`
const description =
  "Terms covering this website and its articles: what you may reuse, why an article is not advice about your system, and where client work is governed."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/terms" },
  openGraph: {
    type: "website",
    url: `${profile.url}/terms`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  const { registeredName, companyNumber, jurisdiction, contactEmail } = legalEntity

  return (
    <LegalDocument
      path="/terms"
      name="Terms of use"
      description={description}
      intro="These cover the website and what is published on it. They are not the terms of a client engagement — that work is governed by whatever is signed for it."
    >
      <Clause title="Who these are with">
        <p>
          {[
            `This site is operated by ${registeredName}`,
            companyNumber ? ` (company number ${companyNumber})` : "",
            jurisdiction ? `, registered in ${jurisdiction}` : "",
            ". Using the site means accepting what follows.",
          ].join("")}
        </p>
      </Clause>

      <Clause title="The writing is not advice about your system">
        <p>
          The articles describe patterns we have found useful and trade-offs we have had to make.
          They are written in general terms and cannot account for your data model, your
          contractual obligations or your regulatory position.
        </p>
        <p>
          Read them as a starting point for a decision, not as a substitute for one. Nothing here
          creates a professional relationship, and running a query from an article against a
          production database remains your call.
        </p>
      </Clause>

      <Clause title="What you may do with the content">
        <p>
          Quote from it, link to it, and share it — please do. If you quote at length, attribute it
          to {profile.name} and link back to the page.
        </p>
        <p>
          Do not republish whole articles as your own, and do not feed them into a service that
          resells them as generated content. Code samples in the articles are there to be used;
          take them and adapt them freely.
        </p>
      </Clause>

      <Clause title="Accuracy, and things that go stale">
        <p>
          Platform behaviour changes. Upload windows move, APIs are deprecated, pricing tiers get
          renamed. We correct things when we notice, but an article states what was true when it
          was written, and several of them say so explicitly at the point where it matters.
        </p>
        <p>
          Where an article tells you to check a current limit against the vendor&rsquo;s own
          documentation rather than trusting the number in the text, that instruction is the
          accurate part.
        </p>
      </Clause>

      <Clause title="Availability">
        <p>
          The site is provided as it is. We do not guarantee it will be uninterrupted or error
          free, and we may change or remove pages without notice — though URLs that have been
          published are redirected rather than deleted where we reasonably can.
        </p>
      </Clause>

      <Clause title="Liability">
        <p>
          To the extent the law allows, we are not liable for loss arising from reliance on the
          content of this site. Nothing here limits liability for death or personal injury caused
          by negligence, for fraud, or for anything else that cannot lawfully be excluded.
        </p>
      </Clause>

      <Clause title="Client work is governed elsewhere">
        <p>
          Scope, payment, confidentiality, intellectual property and liability for an engagement
          are set out in the agreement signed for that engagement. Where those terms and this page
          differ, the signed agreement wins.
        </p>
      </Clause>

      <Clause title="Privacy">
        <p>
          How the site handles data is set out in the{" "}
          <Link
            href="/privacy"
            className="text-signal underline decoration-signal/40 underline-offset-4 transition-colors hover:decoration-signal"
          >
            privacy policy
          </Link>. The short version is that it sets no cookies and runs no analytics.
        </p>
      </Clause>

      <Clause title="Governing law and contact">
        {jurisdiction ? (
          <p>These terms are governed by the laws of {jurisdiction}.</p>
        ) : null}
        <p>
          Questions about any of this go to{" "}
          <a
            href={`mailto:${contactEmail}`}
            className="text-signal underline decoration-signal/40 underline-offset-4 transition-colors hover:decoration-signal"
          >
            {contactEmail}
          </a>.
        </p>
      </Clause>
    </LegalDocument>
  )
}
