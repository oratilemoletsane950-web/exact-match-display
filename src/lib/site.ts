/**
 * OBSIDIAN LABS — external links.
 *
 * REPLACE THESE THREE VALUES when the real URLs are available.
 * Nothing else in the codebase needs to change.
 */
export const LINKS = {
  /** Thundafund crowdfunding campaign URL */
  thundafund: "#THUNDAFUND-LINK",
  /** GitHub organisation / repository URL */
  github: "#GITHUB-LINK",
  /** Contact email address (without the "mailto:" prefix) */
  email: "#EMAIL",
} as const;

export const MAILTO = `mailto:${LINKS.email}`;
