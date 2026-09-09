/**
 * Abstract obsidian geological structure rendered as a technical blueprint.
 * Pure SVG — no raster assets, no external requests.
 */
export function ObsidianFigure({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 560"
      role="img"
      aria-label="Technical blueprint drawing of an abstract obsidian mineral structure"
      className={className}
    >
      {/* measurement grid */}
      <defs>
        <pattern id="ol-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path
            d="M24 0H0V24"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.12"
            strokeWidth="0.5"
          />
        </pattern>
        <pattern
          id="ol-hatch"
          width="7"
          height="7"
          patternTransform="rotate(35)"
          patternUnits="userSpaceOnUse"
        >
          <line y2="7" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.7" />
        </pattern>
      </defs>

      <rect width="480" height="560" fill="url(#ol-grid)" />

      {/* registration marks */}
      <g stroke="currentColor" strokeOpacity="0.5" strokeWidth="1">
        <path d="M8 8h26M8 8v26M472 552h-26M472 552v-26" />
      </g>

      {/* faceted mineral body */}
      <g fill="none" stroke="currentColor" strokeWidth="1.1">
        <path d="M240 46 108 214l52 240 148 44 112-206-56-190z" strokeOpacity="0.9" />
        <path d="M240 46 160 454M240 46l112 288M108 214l244 120M108 214l132 120M420 298 240 166l-132 48M240 166l-80 288M240 166l112 168M308 498 240 166" strokeOpacity="0.42" />
      </g>

      {/* shaded facet */}
      <path d="M240 46 108 214l132 -48z" fill="url(#ol-hatch)" stroke="none" />
      <path d="M240 166l112 168 68-36z" fill="url(#ol-hatch)" stroke="none" opacity="0.6" />

      {/* accent vertex */}
      <circle cx="240" cy="166" r="4" fill="var(--accent)" />
      <circle cx="240" cy="166" r="13" fill="none" stroke="var(--accent)" strokeWidth="0.8" />

      {/* dimension line */}
      <g stroke="currentColor" strokeOpacity="0.45" strokeWidth="0.8">
        <path d="M448 46v468M442 46h12M442 514h12" />
      </g>
      <text
        x="436"
        y="290"
        fill="currentColor"
        fillOpacity="0.55"
        fontSize="9"
        fontFamily="var(--font-mono)"
        letterSpacing="1.6"
        transform="rotate(-90 436 290)"
        textAnchor="middle"
      >
        SECTION A — A
      </text>
      <text
        x="24"
        y="546"
        fill="currentColor"
        fillOpacity="0.55"
        fontSize="9"
        fontFamily="var(--font-mono)"
        letterSpacing="1.6"
      >
        FIG. 001 / OBSIDIAN STRUCTURE
      </text>
    </svg>
  );
}
