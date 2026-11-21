import type { GroupKey, SubTheme, Theme } from "./themes";

export const HEADER_KEYS = [
  "brutal",
  "mega",
  "centered",
  "rail",
  "command",
  "float",
  "underline",
  "split",
  "ticker",
  "editorial",
] as const;
export type HeaderKey = (typeof HEADER_KEYS)[number];

export const HERO_KEYS = [
  "split",
  "fullbleed",
  "editorial",
  "product",
  "search",
  "stats",
  "slideshow",
  "collage",
  "monolith",
  "framed",
] as const;
export type HeroKey = (typeof HERO_KEYS)[number];

export const FOOTER_KEYS = [
  "columns",
  "giant",
  "band",
  "sitemap",
  "contact",
  "brutal",
  "editorial",
  "app",
  "social",
  "minimal",
] as const;
export type FooterKey = (typeof FOOTER_KEYS)[number];

export const BLOCK_KEYS = [
  "stats",
  "features",
  "split",
  "process",
  "gallery",
  "logos",
  "testimonials",
  "quote",
  "faq",
  "contact",
] as const;
export type BlockKey = (typeof BLOCK_KEYS)[number];

export type SectionKey = BlockKey | "module";

export type Template = {
  slug: string;
  group: GroupKey;
  /** Position inside its group, 1–10. */
  index: number;
  brand: string;
  name: string;
  headline: string;
  design: string;
  blurb: string;
  cta: string;
  nav: string[];
  tone: SubTheme["tone"];
  accent: string;
  accentFg: string;
  display?: SubTheme["display"] | undefined;
  body?: SubTheme["body"] | undefined;
  radius?: string | undefined;
  header: HeaderKey;
  hero: HeroKey;
  footer: FooterKey;
  sections: SectionKey[];
  /** Rotates the sample dataset inside a group's functional module. */
  variant: number;
  stats: { value: string; label: string }[];
  items?: string | undefined;
  base?: number | undefined;
};

export type Group = {
  slug: GroupKey;
  name: string;
  short: string;
  intro: string;
  theme: Theme;
  image: string;
  /** Free 21st.dev template whose art direction informed this group. */
  templateReference: string;
  /** Functionality the group's templates demonstrate. */
  capabilities: string[];
  gallery: string[];
  features: { title: string; body: string }[];
  process: { step: string; title: string; body: string }[];
  faqs: { q: string; a: string }[];
  testimonials: { quote: string; name: string; role: string }[];
  partners: string[];
  stats: { value: string; label: string }[];
  templates: Template[];
};

/** Compact authoring row: one template inside a group seed. */
export type Row = {
  brand: string;
  name: string;
  headline: string;
  design: string;
  blurb: string;
  nav: string;
  cta: string;
  accent: string;
  accentFg?: string;
  tone?: "light" | "dark";
  display?: Template["display"];
  body?: Template["body"];
  radius?: string;
  /** Pipe/semicolon delimited module sample data — products, rooms, courses, listings. */
  items?: string;
  /** Base price used by calculators for this template's category. */
  base?: number;
};

export type GroupSeed = Omit<Group, "theme" | "templates"> & {
  themeKey: Group["slug"];
  rows: Row[];
};
