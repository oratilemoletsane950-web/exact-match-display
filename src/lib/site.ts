/**
 * OBSIDIAN LABS — external links.
 *
 * Update these values as the real URLs become available.
 * Nothing else in the codebase needs to change.
 */
export const LINKS = {
  /**
   * BackaBuddy crowdfunding campaign URL.
   */
  backabuddy: "https://www.backabuddy.co.za/campaign/obsidian-labs-launch",
  /** GitHub organisation / repository URL — empty until the org is created. */
  github: "",
  /** Contact email address (without the "mailto:" prefix) */
  email: "continentalobsidian@gmail.com",
} as const;

export const MAILTO = `mailto:${LINKS.email}`;
