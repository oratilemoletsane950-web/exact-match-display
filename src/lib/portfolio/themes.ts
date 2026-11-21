/**
 * PORTFOLIO — ten theme systems, one per business group.
 *
 * Each theme is adapted from a free 21st.dev community theme (tokens only, no
 * component code) and then given its own type pairing, corner language, border
 * weight and surface palette. Templates inside a group inherit the group theme
 * and override accent, tone, display face and radius, which is how ten
 * subthemes can live inside one central visual theme.
 */

export type Tone = "light" | "dark";

export type FontKey =
  | "space"
  | "archivo"
  | "archivoBlack"
  | "dmserif"
  | "fraunces"
  | "instrument"
  | "manrope"
  | "syne"
  | "mono";

export const FONTS: Record<FontKey, string> = {
  space: '"Space Grotesk", "Helvetica Neue", Arial, sans-serif',
  archivo: '"Archivo", "Helvetica Neue", Arial, sans-serif',
  archivoBlack: '"Archivo Black", "Archivo", Impact, sans-serif',
  dmserif: '"DM Serif Display", "Times New Roman", serif',
  fraunces: '"Fraunces", "Iowan Old Style", Georgia, serif',
  instrument: '"Instrument Serif", "Times New Roman", serif',
  manrope: '"Manrope", "Helvetica Neue", Arial, sans-serif',
  syne: '"Syne", "Space Grotesk", sans-serif',
  mono: '"JetBrains Mono", ui-monospace, "SFMono-Regular", monospace',
};

export type GroupKey =
  | "banking"
  | "healthcare"
  | "retail"
  | "hospitality"
  | "education"
  | "technology"
  | "property"
  | "automotive"
  | "professional"
  | "creative";

export type Palette = {
  bg: string;
  surface: string;
  surfaceAlt: string;
  fg: string;
  muted: string;
  line: string;
  accentSoft: string;
};

export type Theme = {
  key: GroupKey;
  name: string;
  /** Free 21st.dev theme the token palette was adapted from. */
  reference: string;
  /** The central visual idea for the group. */
  idea: string;
  light: Palette;
  dark: Palette;
  display: FontKey;
  body: FontKey;
  radius: string;
  border: string;
  /** Corner treatment on cards and buttons: square, soft, pill. */
  corners: "square" | "soft" | "pill";
  headings: "normal" | "uppercase";
  tracking: string;
  texture: "grid" | "dots" | "rules" | "none";
  defaultTone: Tone;
};

const lightInk = "#141518";
const paper = "#f7f5f0";

export const THEMES: Record<GroupKey, Theme> = {
  banking: {
    key: "banking",
    name: "Neo-Brutalist Corporate",
    reference: "Harbor Swiss — 21st.dev",
    idea: "Swiss grid discipline with heavy rules, zero radius and a single institutional blue.",
    light: {
      bg: "#f4f0e8",
      surface: "#fbf8f2",
      surfaceAlt: "#e8e1d2",
      fg: "#15171b",
      muted: "#5f5b53",
      line: "rgba(21,23,27,0.28)",
      accentSoft: "#dfe6f7",
    },
    dark: {
      bg: "#0b1018",
      surface: "#121a26",
      surfaceAlt: "#1b2534",
      fg: "#eef2f8",
      muted: "#a3afc0",
      line: "rgba(238,242,248,0.22)",
      accentSoft: "#182642",
    },
    display: "archivo",
    body: "space",
    radius: "0px",
    border: "1.5px",
    corners: "square",
    headings: "uppercase",
    tracking: "-0.03em",
    texture: "rules",
    defaultTone: "light",
  },

  healthcare: {
    key: "healthcare",
    name: "Organic Minimalism",
    reference: "Sage Garden — 21st.dev",
    idea: "Soft sage, generous radii and breathing space; clinical information without clinical coldness.",
    light: {
      bg: "#f8f7f3",
      surface: "#ffffff",
      surfaceAlt: "#edf1e9",
      fg: "#1b241f",
      muted: "#5b6b61",
      line: "#d9ded3",
      accentSoft: "#e6efe6",
    },
    dark: {
      bg: "#0f1613",
      surface: "#17211c",
      surfaceAlt: "#1f2c25",
      fg: "#eef4ef",
      muted: "#a3b6a9",
      line: "#2c3b32",
      accentSoft: "#1d2f27",
    },
    display: "fraunces",
    body: "manrope",
    radius: "22px",
    border: "1px",
    corners: "pill",
    headings: "normal",
    tracking: "-0.015em",
    texture: "dots",
    defaultTone: "light",
  },

  retail: {
    key: "retail",
    name: "Experimental Editorial",
    reference: "432 Editorial — 21st.dev",
    idea: "Gallery-white pages, enormous display type and product photography treated as editorial spreads.",
    light: {
      bg: "#f7f5f0",
      surface: "#ffffff",
      surfaceAlt: "#eeebe4",
      fg: "#0a0a0a",
      muted: "#565656",
      line: "#d6d2c8",
      accentSoft: "#ece7dc",
    },
    dark: {
      bg: "#0a0a0a",
      surface: "#141414",
      surfaceAlt: "#1f1f1f",
      fg: "#f5f3ee",
      muted: "#a5a29c",
      line: "#2c2c2c",
      accentSoft: "#232323",
    },
    display: "dmserif",
    body: "space",
    radius: "0px",
    border: "1px",
    corners: "square",
    headings: "normal",
    tracking: "-0.02em",
    texture: "none",
    defaultTone: "light",
  },

  hospitality: {
    key: "hospitality",
    name: "Immersive Luxury",
    reference: "Elegant Luxury — 21st.dev",
    idea: "Cinematic photography, mirror-thin rules and champagne accents; the interface recedes, the place leads.",
    light: {
      bg: "#faf7f2",
      surface: "#ffffff",
      surfaceAlt: "#f0e9dc",
      fg: "#1d1a16",
      muted: "#6a6157",
      line: "#e3d9c8",
      accentSoft: "#f3ead9",
    },
    dark: {
      bg: "#0d0b09",
      surface: "#16130f",
      surfaceAlt: "#201b16",
      fg: "#f6efe3",
      muted: "#b4a797",
      line: "rgba(246,239,227,0.2)",
      accentSoft: "#221c15",
    },
    display: "instrument",
    body: "manrope",
    radius: "2px",
    border: "1px",
    corners: "square",
    headings: "normal",
    tracking: "-0.01em",
    texture: "none",
    defaultTone: "dark",
  },

  education: {
    key: "education",
    name: "Modernist Functional",
    reference: "Modern Minimal — 21st.dev",
    idea: "White space, blue functional accents and honest cards; everything reads like a well-made timetable.",
    light: {
      bg: "#ffffff",
      surface: "#f5f7fa",
      surfaceAlt: "#e9eef6",
      fg: "#1a2330",
      muted: "#586579",
      line: "#dfe4ec",
      accentSoft: "#e8effc",
    },
    dark: {
      bg: "#0f1622",
      surface: "#172131",
      surfaceAlt: "#1f2c40",
      fg: "#eef3fa",
      muted: "#a5b3c6",
      line: "#2a384d",
      accentSoft: "#1b2a42",
    },
    display: "fraunces",
    body: "manrope",
    radius: "12px",
    border: "1px",
    corners: "soft",
    headings: "normal",
    tracking: "-0.015em",
    texture: "grid",
    defaultTone: "light",
  },

  technology: {
    key: "technology",
    name: "Futuristic Minimalism",
    reference: "Slate Minimal — 21st.dev",
    idea: "Cool slate fields, landing-page precision and product surfaces that look like real software.",
    light: {
      bg: "#eef2f8",
      surface: "#ffffff",
      surfaceAlt: "#dde6f3",
      fg: "#0c1522",
      muted: "#4f5f76",
      line: "#cdd8e7",
      accentSoft: "#e2ebfb",
    },
    dark: {
      bg: "#070b12",
      surface: "#0f1622",
      surfaceAlt: "#161f2f",
      fg: "#e8eef8",
      muted: "#94a3bb",
      line: "#1f2a3b",
      accentSoft: "#132033",
    },
    display: "space",
    body: "manrope",
    radius: "14px",
    border: "1px",
    corners: "soft",
    headings: "normal",
    tracking: "-0.035em",
    texture: "grid",
    defaultTone: "dark",
  },

  property: {
    key: "property",
    name: "Architectural Minimalism",
    reference: "Amber Minimal — 21st.dev",
    idea: "Warm stone, hairline frames and amber markers; floor-plan clarity with gallery restraint.",
    light: {
      bg: "#fbfaf6",
      surface: "#ffffff",
      surfaceAlt: "#f2eee5",
      fg: "#221f1a",
      muted: "#6a6357",
      line: "#e0dacd",
      accentSoft: "#f6eee0",
    },
    dark: {
      bg: "#111110",
      surface: "#1a1815",
      surfaceAlt: "#24211c",
      fg: "#f3efe6",
      muted: "#b0a696",
      line: "#302b24",
      accentSoft: "#221d16",
    },
    display: "dmserif",
    body: "space",
    radius: "2px",
    border: "1px",
    corners: "square",
    headings: "normal",
    tracking: "-0.02em",
    texture: "rules",
    defaultTone: "light",
  },

  automotive: {
    key: "automotive",
    name: "Industrial Futurism",
    reference: "ChemE Field Manual — 21st.dev",
    idea: "Engineering-paper cream, ink rules and machined steel blue; specification tables as design.",
    light: {
      bg: "#eee7d8",
      surface: "#f8f3e7",
      surfaceAlt: "#e5dcc8",
      fg: "#101317",
      muted: "#545047",
      line: "rgba(16,19,23,0.35)",
      accentSoft: "#dbe4ec",
    },
    dark: {
      bg: "#0d1014",
      surface: "#151a21",
      surfaceAlt: "#1d242d",
      fg: "#f0ece2",
      muted: "#aaa79b",
      line: "#333c48",
      accentSoft: "#18242f",
    },
    display: "archivoBlack",
    body: "space",
    radius: "0px",
    border: "2px",
    corners: "square",
    headings: "uppercase",
    tracking: "-0.04em",
    texture: "rules",
    defaultTone: "dark",
  },

  professional: {
    key: "professional",
    name: "Swiss Corporate",
    reference: "Swiss Red — 21st.dev",
    idea: "Black-on-white grid, one signal red, and typography doing the work of decoration.",
    light: {
      bg: "#ffffff",
      surface: "#f6f6f6",
      surfaceAlt: "#ececec",
      fg: "#0a0a0a",
      muted: "#525252",
      line: "rgba(10,10,10,0.22)",
      accentSoft: "#fdecef",
    },
    dark: {
      bg: "#0a0a0a",
      surface: "#141414",
      surfaceAlt: "#1e1e1e",
      fg: "#f7f7f7",
      muted: "#a3a3a3",
      line: "#383838",
      accentSoft: "#241417",
    },
    display: "space",
    body: "manrope",
    radius: "0px",
    border: "1.5px",
    corners: "square",
    headings: "uppercase",
    tracking: "-0.035em",
    texture: "grid",
    defaultTone: "light",
  },

  creative: {
    key: "creative",
    name: "Experimental Digital",
    reference: "Cyberpunk Neon — 21st.dev",
    idea: "Near-black stages, luminous gradients and oversized type; the page behaves like a title sequence.",
    light: {
      bg: "#f3f0ff",
      surface: "#ffffff",
      surfaceAlt: "#e9e3ff",
      fg: "#16111f",
      muted: "#5c5470",
      line: "#ded6f5",
      accentSoft: "#efe8ff",
    },
    dark: {
      bg: "#060609",
      surface: "#0f0f16",
      surfaceAlt: "#171722",
      fg: "#f4f4f5",
      muted: "#a3a3b5",
      line: "#28283a",
      accentSoft: "#161327",
    },
    display: "syne",
    body: "space",
    radius: "16px",
    border: "1px",
    corners: "pill",
    headings: "normal",
    tracking: "-0.03em",
    texture: "grid",
    defaultTone: "dark",
  },
};

/** CSS custom properties that turn a theme + template subtheme into a page. */
export type SubTheme = {
  tone: Tone;
  accent: string;
  accentFg: string;
  display?: FontKey | undefined;
  body?: FontKey | undefined;
  radius?: string | undefined;
};

export function scopeStyle(theme: Theme, sub: SubTheme): React.CSSProperties {
  const p = sub.tone === "dark" ? theme.dark : theme.light;
  return {
    "--p-bg": p.bg,
    "--p-surface": p.surface,
    "--p-surface-alt": p.surfaceAlt,
    "--p-fg": p.fg,
    "--p-muted": p.muted,
    "--p-line": p.line,
    "--p-accent": sub.accent,
    "--p-accent-fg": sub.accentFg,
    "--p-accent-soft": p.accentSoft,
    "--p-radius": sub.radius ?? theme.radius,
    "--p-border": theme.border,
    "--p-display": FONTS[sub.display ?? theme.display],
    "--p-body": FONTS[sub.body ?? theme.body],
    "--p-mono": FONTS.mono,
    "--p-tracking": theme.tracking,
    "--p-heading-case": theme.headings === "uppercase" ? "uppercase" : "none",
    backgroundColor: p.bg,
    color: p.fg,
  } as React.CSSProperties;
}

/** Small preview palette used on the portfolio index cards. */
export function swatches(theme: Theme, tone: Tone = theme.defaultTone): string[] {
  const p = tone === "dark" ? theme.dark : theme.light;
  return [p.bg, p.fg, p.accentSoft, p.line === "" ? p.muted : p.muted];
}
