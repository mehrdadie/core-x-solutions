import { profile } from "@/content/profile"

/**
 * The legal identity behind the site, and the only place it is stated.
 *
 * Every optional field renders **only when it is non-null**. That is deliberate:
 * a privacy policy that names a company number the business does not have is
 * worse than one that stays quiet about it, and this site already carries
 * enough unverifiable claims (see the open items in CLAUDE.md) without adding a
 * legal one. Fill these in and the pages pick them up; leave them null and the
 * pages simply do not make the claim.
 */
export const legalEntity = {
  /**
   * The trading name, which is true today. Replace with the registered name
   * (e.g. "Core-X Solutions Ltd") once confirmed.
   */
  registeredName: profile.name,

  /** Companies House number or equivalent. */
  companyNumber: null as string | null,

  /** e.g. "England and Wales". Governs the Terms and names the supervisory authority. */
  jurisdiction: "Armenia" as string | null,

  /** Registered or business address. */
  address: "Nalbandyan 7/1, Yerevan, Armenia" as string | null,

  /** Where privacy requests go. */
  contactEmail: profile.email,

  /** Business phone number, in international format. */
  phone: "+374 556 519 33" as string | null,
} as const

/**
 * Last substantive review of the legal pages. Update it when the text changes,
 * not on every deploy — a policy that claims to have been reviewed yesterday
 * because the site rebuilt is a lie with a date on it.
 */
export const legalUpdated = "2026-08-28"

export const legalUpdatedLabel = new Date(legalUpdated).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
})
