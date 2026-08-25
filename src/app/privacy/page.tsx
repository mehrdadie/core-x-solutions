import type { Metadata } from "next"
import { profile } from "@/content/profile"
import { legalEntity } from "@/content/legal"
import LegalDocument, { Clause } from "@/components/LegalDocument"

/**
 * Written to what this site actually does, which is very little: no analytics,
 * no cookies, no tracking pixels, and no forms — every call to action is a
 * `mailto:`. A boilerplate policy describing cookie banners and advertising
 * partners would be inaccurate, and an inaccurate privacy policy is worse than
 * a short true one.
 *
 * Optional identity fields render only when `content/legal.ts` has them, so
 * this page never claims a company number or address the business has not
 * given it.
 */

const title = `Privacy policy | ${profile.name}`
const description =
  "What this site collects, which is almost nothing: no analytics, no cookies, no tracking. What happens if you email us, and how to ask us to delete it."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: {
    type: "website",
    url: `${profile.url}/privacy`,
    siteName: profile.name,
    title,
    description,
    locale: "en_GB",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  const { registeredName, companyNumber, jurisdiction, address, contactEmail } = legalEntity

  return (
    <LegalDocument
      path="/privacy"
      name="Privacy policy"
      description={description}
      intro="This site sets no cookies, runs no analytics and has no forms. That makes this policy shorter than most, and everything in it is a description of what actually happens rather than what might."
    >
      <Clause title="Who is responsible">
        <p>
          {[
            `${registeredName} is the data controller for this website`,
            companyNumber ? `, registered under company number ${companyNumber}` : "",
            jurisdiction ? ` in ${jurisdiction}` : "",
            ".",
            address ? ` Registered address: ${address}.` : "",
          ].join("")}
        </p>
        <p>
          Questions, requests and complaints go to{" "}
          <a
            href={`mailto:${contactEmail}`}
            className="text-signal underline decoration-signal/40 underline-offset-4 transition-colors hover:decoration-signal"
          >
            {contactEmail}
          </a>.
        </p>
      </Clause>

      <Clause title="What this site does not do">
        <p>
          It does not set cookies. It runs no analytics — no Google Analytics, no Plausible, no
          PostHog, nothing. It carries no advertising or social tracking pixels. It has no contact
          form, no newsletter signup and no account system, so there is nothing on the site that
          asks you for personal data.
        </p>
        <p>
          If you have arrived here expecting a cookie banner, its absence is the reason there is
          not one.
        </p>
      </Clause>

      <Clause title="What is unavoidably processed">
        <p>
          <strong className="font-semibold text-bone">Server logs.</strong> The site is hosted on
          Vercel, which records standard request data — IP address, timestamp, the page requested,
          browser user agent — as part of serving and protecting the site. This is ordinary
          infrastructure logging, retained by Vercel under their own terms, and we do not build
          profiles from it or connect it to anything else.
        </p>
        <p>
          <strong className="font-semibold text-bone">Blog content.</strong> Articles are stored in
          Supabase and read server-side. The read is one-way: the site fetches published posts and
          sends nothing about you back. No visitor data is written to that database.
        </p>
        <p>
          The lawful basis for both is legitimate interest — operating a website securely and
          serving its content.
        </p>
      </Clause>

      <Clause title="If you email us">
        <p>
          Then we hold your email address, your name if you give it, and whatever you wrote, in our
          mailbox. We use it to reply to you and to carry on the conversation, and for nothing
          else. We do not add you to a mailing list, and we do not pass it to anyone.
        </p>
        <p>
          Enquiry correspondence is kept while the conversation is live and for a reasonable period
          afterwards in case it resumes. Ask us to delete it and we will.
        </p>
      </Clause>

      <Clause title="Who else sees anything">
        <p>
          Two providers, both processing on our behalf: <strong className="font-semibold text-bone">Vercel</strong>{" "}
          for hosting, and <strong className="font-semibold text-bone">Supabase</strong> for the
          article database. Email is handled by our mail provider.
        </p>
        <p>
          Nothing is sold, rented or shared for advertising. There is no data to sell, which is the
          most reliable form of that promise.
        </p>
      </Clause>

      <Clause title="Your rights">
        <p>
          You can ask what we hold about you, ask for it to be corrected or deleted, object to our
          processing it, or ask for a copy. Write to{" "}
          <a
            href={`mailto:${contactEmail}`}
            className="text-signal underline decoration-signal/40 underline-offset-4 transition-colors hover:decoration-signal"
          >
            {contactEmail}
          </a>{" "}
          and we will respond within one month.
        </p>
        <p>
          In practice, unless you have emailed us, we almost certainly hold nothing about you at
          all — and we will tell you that plainly rather than send you a form.
        </p>
        {jurisdiction ? (
          <p>
            If you are not satisfied with how we have handled a request, you can complain to the
            supervisory authority in {jurisdiction}.
          </p>
        ) : null}
      </Clause>

      <Clause title="External links">
        <p>
          Articles link out to documentation, vendors and other sites. Once you follow one of those
          links you are on someone else&rsquo;s site under their policy, not ours.
        </p>
      </Clause>

      <Clause title="Changes">
        <p>
          If this policy changes materially, the date at the top of the page changes with it. That
          date reflects the last substantive review, not the last deployment.
        </p>
      </Clause>
    </LegalDocument>
  )
}
