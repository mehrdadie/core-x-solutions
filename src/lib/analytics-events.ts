/**
 * Every event this site can emit, in one place.
 *
 * Nothing calls `capture()` with a bare string. Names live here so the taxonomy
 * is greppable from one file and a typo fails the build instead of quietly
 * creating a second, near-identical event in PostHog — which is the usual way
 * an event schema rots.
 *
 * Deliberately free of the posthog-js import: server components read these
 * constants to write `data-ph-event` attributes, and posthog-js is browser-only.
 *
 * Naming: object_verbed, snake_case, past tense. PostHog groups by prefix in the
 * UI, so the first word is the thing, not the action.
 */
export const EVENTS = {
  /* Navigation and chrome */
  navClicked: "nav_clicked",
  logoClicked: "logo_clicked",
  mobileMenuToggled: "mobile_menu_toggled",
  footerLinkClicked: "footer_link_clicked",

  /* Conversion — every one of these is a step toward an email landing */
  ctaClicked: "cta_clicked",
  emailClicked: "email_clicked",
  contactPromptClicked: "contact_prompt_clicked",
  outboundClicked: "outbound_clicked",

  /* Attention */
  sectionViewed: "section_viewed",
  scrollDepth: "scroll_depth",
  pageEngaged: "page_engaged",

  /* The interactive pieces — the only parts of the page that answer back */
  architectureNodeSelected: "architecture_node_selected",
  journeyStepPinned: "journey_step_pinned",
  journeyCompleted: "journey_completed",

  /* Content */
  caseStudyOpened: "case_study_opened",
  postCardClicked: "post_card_clicked",
  postViewed: "post_viewed",
  postReadProgress: "post_read_progress",
  postCompleted: "post_completed",
  postTocClicked: "post_toc_clicked",

  /* Dead ends */
  notFoundViewed: "not_found_viewed",
} as const

export type EventName = (typeof EVENTS)[keyof typeof EVENTS]
