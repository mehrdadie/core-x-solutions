import type { Metadata } from "next"
import { profile } from "@/content/profile"
import { legalEntity } from "@/content/legal"
import LegalDocument, { Clause } from "@/components/LegalDocument"

/**
 * Written to what this site actually does, and rewritten when that changed.
 *
 * It used to say "no analytics — no Google Analytics, no Plausible, no PostHog,
 * nothing". PostHog now runs on every page, in cookieless mode, with session
 * replay on. The claim that survived is the one about cookies: nothing is
 * written to the visitor's device, which is why there is still no banner. The
 * claim that did not survive has been replaced rather than softened, because a
 * privacy policy that undersells session recording is worse than no policy at
 * all — and this is a consultancy that sells data governance.
 *
 * If `COOKIELESS` in `lib/analytics.ts` is ever changed to 'on_reject', this
 * page describes the wrong arrangement and has to be rewritten again.
 *
 * Optional identity fields render only when `content/legal.ts` has them, so
 * this page never claims a company number or address the business has not
 * given it.
 */

const title = `Privacy policy | ${profile.name}`
const description =
  "What this site measures and how: cookieless analytics, session replay, no cookies and no banner. What happens if you email us, and how to opt out."

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
  const { registeredName, companyNumber, jurisdiction, address, contactEmail, phone } = legalEntity

  return (
    <LegalDocument
      path="/privacy"
      name="Privacy policy"
      description={description}
      intro="This site sets no cookies and has no forms, but it does measure how people use it — including recordings of page interactions. Everything below is a description of what actually happens rather than what might, including the parts that are awkward to write down."
    >
      <Clause title="Who is responsible">
        <p>
          {[
            `${registeredName} is the data controller for this website`,
            companyNumber ? `, registered under company number ${companyNumber}` : "",
            jurisdiction ? ` in ${jurisdiction}` : "",
            ".",
            address ? ` Registered address: ${address}.` : "",
            phone ? ` Phone: ${phone}.` : "",
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

      <Clause title="No cookies, and therefore no banner">
        <p>
          This site sets no cookies. It writes nothing to local storage or session storage either.
          Nothing at all is stored on your device by us, which is the reason there is no consent
          banner: a banner exists to ask permission to store something, and there is nothing to
          ask about.
        </p>
        <p>
          It carries no advertising or social tracking pixels, and it has no contact form, no
          newsletter signup and no account system, so nothing on the site asks you for personal
          data. The only way to give us any is to email us.
        </p>
      </Clause>

      <Clause title="What we do measure, and how">
        <p>
          <strong className="font-semibold text-bone">Analytics.</strong> We use{" "}
          <a
            href="https://posthog.com"
            target="_blank"
            rel="noreferrer noopener"
            className="text-signal underline decoration-signal/40 underline-offset-4 transition-colors hover:decoration-signal"
          >
            PostHog
          </a>{" "}
          to see which pages get read, which links get clicked, and where people give up. It runs in
          cookieless mode: instead of tagging your browser with an identifier that persists, PostHog
          derives a rotating identifier server-side. It does not survive from one day to the next,
          so if you come back next week you are a new visitor as far as our numbers are concerned.
          That is a deliberate trade — worse analytics, in exchange for not following anyone around.
        </p>
        <p>
          <strong className="font-semibold text-bone">Session replay.</strong> This is the part
          worth reading twice. PostHog records how pages are used — pointer movement, scrolling,
          clicks, and what the page looked like while you were on it — and we watch those recordings
          back to find out where the writing loses people. It is a reconstruction of the page, not a
          video of your screen and not access to your device: it captures this site and nothing else
          in your browser. Anything typed into a field would be masked before it left the page,
          though in practice there are no fields on this site to type into.
        </p>
        <p>
          <strong className="font-semibold text-bone">Where it goes.</strong> To PostHog&rsquo;s EU
          infrastructure, through a path on this domain rather than a third-party one. Your IP
          address is discarded at the point of collection rather than stored against the events. We
          also collect page performance timings and browser console errors, so a page that is broken
          or slow shows up as a number rather than as silence.
        </p>
        <p>
          The lawful basis is legitimate interest: understanding whether the writing on a site works
          is a reasonable thing for its owner to do, and it is done here without persistent
          identifiers, without a profile that follows you, and without anything shared for
          advertising.
        </p>
      </Clause>

      <Clause title="How to switch it off">
        <p>
          Turn on <strong className="font-semibold text-bone">Do Not Track</strong> in your browser
          and this site captures nothing from you at all — no events and no recording. Most policies
          mention DNT in order to say they ignore it. We honour it, and it is the reason there is no
          separate opt-out button to hunt for.
        </p>
        <p>
          Blocking the script with an extension works too, and breaks nothing on the site. If you
          would rather we deleted a recording that has already been made, write to us and we will,
          though you will need to tell us roughly when you visited so we can find it.
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
          Three providers, all processing on our behalf:{" "}
          <strong className="font-semibold text-bone">Vercel</strong> for hosting,{" "}
          <strong className="font-semibold text-bone">Supabase</strong> for the article database,
          and <strong className="font-semibold text-bone">PostHog</strong> for analytics and session
          replay, on their EU infrastructure. Email is handled by our mail provider.
        </p>
        <p>
          Nothing is sold, rented or shared for advertising. Nobody outside those providers sees any
          of it, and none of it is joined to anything else.
        </p>
        <p>
          <strong className="font-semibold text-bone">How long it is kept.</strong> Session
          recordings are deleted after 30 days. Analytics events are kept for 12 months and then
          removed.
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
          In practice, unless you have emailed us, what we hold is a set of events with no name
          attached and no identifier that lasts beyond the day — and we will tell you that plainly
          rather than send you a form. The fastest way to exercise the right to object is Do Not
          Track, described above, which takes effect immediately and needs no request to us.
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
