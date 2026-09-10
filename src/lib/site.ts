/**
 * OBSIDIAN LABS — external links.
 *
 * Update these values as the real URLs become available.
 * Nothing else in the codebase needs to change.
 */
export const LINKS = {
  /**
   * Thundafund crowdfunding campaign URL.
   * TODO: replace with the exact campaign page URL once the campaign is live.
   */
  thundafund: "https://www.thundafund.com/",
  /** GitHub organisation / repository URL — empty until the org is created. */
  github: "",
  /** Contact email address (without the "mailto:" prefix) */
  email: "continentalobsidian@gmail.com",
} as const;

export const MAILTO = `mailto:${LINKS.email}`;
