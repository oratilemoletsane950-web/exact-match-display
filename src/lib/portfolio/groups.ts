import { SEEDS_A } from "./seeds-a";
import { SEEDS_B } from "./seeds-b";
import { SEEDS_C } from "./seeds-c";
import { SEEDS_D } from "./seeds-d";
import { THEMES } from "./themes";
import {
  FOOTER_KEYS,
  HEADER_KEYS,
  HERO_KEYS,
  type BlockKey,
  type Group,
  type GroupSeed,
  type Row,
  type SectionKey,
  type Template,
} from "./types";

const BLOCK_POOL: BlockKey[] = [
  "stats",
  "split",
  "process",
  "gallery",
  "logos",
  "quote",
  "faq",
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Pick readable ink for a button filled with the template accent. */
function readableInk(hex: string) {
  const raw = hex.replace("#", "");
  const full = raw.length === 3 ? raw.split("").map((c) => c + c).join("") : raw;
  const r = parseInt(full.slice(0, 2), 16) / 255;
  const g = parseInt(full.slice(2, 4), 16) / 255;
  const b = parseInt(full.slice(4, 6), 16) / 255;
  const channel = (c: number) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  const luminance = 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
  return luminance > 0.48 ? "#0b0b0c" : "#ffffff";
}

/**
 * Each template gets a different composition. Features, testimonials and
 * contact are always present so the navigation anchors resolve; the module is
 * placed at a different point on the page for every template.
 */
function pickBlock(index: number): BlockKey {
  return BLOCK_POOL[index % BLOCK_POOL.length] ?? "stats";
}

function buildSections(index: number): SectionKey[] {
  const picks = [pickBlock(index), pickBlock(index * 3 + 2), pickBlock(index * 5 + 5)];
  const chosen = Array.from(
    new Set<BlockKey>(["features", ...picks, "testimonials", "contact"]),
  );
  const before = index % 4;
  return [...chosen.slice(0, before), "module", ...chosen.slice(before)];
}

function buildTemplate(seed: GroupSeed, row: Row, index: number, groupIndex: number): Template {
  const theme = THEMES[seed.themeKey];
  return {
    slug: slugify(row.name),
    group: seed.slug,
    index: index + 1,
    brand: row.brand,
    name: row.name,
    headline: row.headline,
    design: row.design,
    blurb: row.blurb,
    cta: row.cta,
    nav: row.nav.split("|"),
    tone: row.tone ?? theme.defaultTone,
    accent: row.accent,
    accentFg: row.accentFg ?? readableInk(row.accent),
    display: row.display,
    body: row.body,
    radius: row.radius,
    header: HEADER_KEYS[(index + groupIndex) % HEADER_KEYS.length] ?? "split",
    hero: HERO_KEYS[(index + groupIndex * 2) % HERO_KEYS.length] ?? "split",
    footer: FOOTER_KEYS[(index + groupIndex * 3) % FOOTER_KEYS.length] ?? "columns",
    sections: buildSections(index),
    variant: index,
    stats: [0, 1, 2].flatMap((k) => {
      const stat = seed.stats[(index + k * 2) % seed.stats.length];
      return stat ? [stat] : [];
    }),
    items: row.items,
    base: row.base,
  };
}

function build(seed: GroupSeed, groupIndex: number): Group {
  return {
    slug: seed.slug,
    name: seed.name,
    short: seed.short,
    intro: seed.intro,
    theme: THEMES[seed.themeKey],
    image: seed.image,
    templateReference: seed.templateReference,
    capabilities: seed.capabilities,
    gallery: seed.gallery,
    features: seed.features,
    process: seed.process,
    faqs: seed.faqs,
    testimonials: seed.testimonials,
    partners: seed.partners,
    stats: seed.stats,
    templates: seed.rows.map((row, i) => buildTemplate(seed, row, i, groupIndex)),
  };
}

export const GROUPS: Group[] = [...SEEDS_A, ...SEEDS_B, ...SEEDS_C, ...SEEDS_D].map(build);

export const GROUP_BY_SLUG = Object.fromEntries(GROUPS.map((g) => [g.slug, g])) as Record<
  string,
  Group
>;

export const ALL_TEMPLATES = GROUPS.flatMap((group) =>
  group.templates.map((tpl) => ({ group, tpl })),
);

export function getTemplate(groupSlug: string, slug: string) {
  const group = GROUP_BY_SLUG[groupSlug];
  if (!group) return null;
  const tpl = group.templates.find((t) => t.slug === slug);
  if (!tpl) return null;
  return { group, tpl };
}

export function neighbours(group: Group, slug: string) {
  const list = group.templates;
  const index = list.findIndex((t) => t.slug === slug);
  const current = list[index];
  if (!current) return {} as { prev?: Template; next?: Template };
  return {
    prev: list[(index - 1 + list.length) % list.length] ?? current,
    next: list[(index + 1) % list.length] ?? current,
  };
}

/** Headline navigation for a template page — five labels, all real anchors. */
export function templateNav(tpl: Template) {
  const fallback = ["Home", "Services", "Experience", "Proof", "Contact"];
  return fallback.map((label, i) => ({
    label: tpl.nav[i] ?? label,
    href: ["#top", "#services", "#experience", "#proof", "#contact"][i] ?? "#top",
  }));
}

export const TOTAL_TEMPLATES = ALL_TEMPLATES.length;
