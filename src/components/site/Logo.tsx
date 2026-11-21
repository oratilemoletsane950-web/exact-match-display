import { cn } from "@/lib/utils";

type Point = readonly [number, number];

/**
 * Rounded polygon path. The supplied logo mark has softly rounded joints, so
 * every vertex is cut with a quadratic curve rather than left sharp.
 */
function roundedPolygon(points: readonly Point[], radius = 6): string {
  const n = points.length;
  const at = (i: number) => points[(i + n) % n] as Point;

  const corners = points.map((point, i) => {
    const previous = at(i - 1);
    const next = at(i + 1);
    const toPrevious: Point = [previous[0] - point[0], previous[1] - point[1]];
    const toNext: Point = [next[0] - point[0], next[1] - point[1]];
    const lengthPrevious = Math.hypot(toPrevious[0], toPrevious[1]) || 1;
    const lengthNext = Math.hypot(toNext[0], toNext[1]) || 1;
    const r = Math.min(radius, lengthPrevious / 2, lengthNext / 2);
    const start: Point = [
      point[0] + (toPrevious[0] / lengthPrevious) * r,
      point[1] + (toPrevious[1] / lengthPrevious) * r,
    ];
    const end: Point = [
      point[0] + (toNext[0] / lengthNext) * r,
      point[1] + (toNext[1] / lengthNext) * r,
    ];
    return { start, end, point };
  });

  const first = corners[0] as (typeof corners)[number];
  let path = `M${first.start[0].toFixed(2)},${first.start[1].toFixed(2)}`;
  for (const corner of corners) {
    path += ` L${corner.start[0].toFixed(2)},${corner.start[1].toFixed(2)}`;
    path += ` Q${corner.point[0]},${corner.point[1]} ${corner.end[0].toFixed(2)},${corner.end[1].toFixed(2)}`;
  }
  return `${path} Z`;
}

/**
 * The two halves of the supplied Obsidian Labs mark: a heavy hexagonal ring
 * split by a vertical channel, with a hexagonal void inside each half.
 */
const LEFT_HALF: readonly Point[] = [
  [58, 2],
  [6, 31],
  [6, 89],
  [58, 118],
  [58, 88],
  [44, 76],
  [44, 44],
  [58, 32],
];

const RIGHT_HALF: readonly Point[] = LEFT_HALF.map(([x, y]) => [120 - x, y] as Point);

export const LOGO_MARK_PATHS = [roundedPolygon(LEFT_HALF), roundedPolygon(RIGHT_HALF)];

export function LogoMark({
  className,
  decorative = false,
}: {
  className?: string;
  decorative?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      role={decorative ? "presentation" : "img"}
      aria-label={decorative ? undefined : "Obsidian Labs"}
      aria-hidden={decorative || undefined}
      className={cn("block", className)}
      fill="currentColor"
    >
      {LOGO_MARK_PATHS.map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  );
}

export function Logo({
  className,
  tone = "dark",
  compact = false,
}: {
  className?: string;
  /** dark = ink on light surfaces, light = ivory on dark surfaces */
  tone?: "dark" | "light";
  compact?: boolean;
}) {
  return (
    <span
      role="img"
      aria-label="Obsidian Labs"
      className={cn(
        "inline-flex items-center gap-3",
        tone === "light" ? "text-[#f6f2e9]" : "text-[#0b0b0c]",
        className,
      )}
    >
      <LogoMark decorative className={compact ? "h-7 w-7" : "h-9 w-9"} />
      <span aria-hidden className="flex flex-col leading-none">
        <span
          className={cn(
            "font-medium uppercase",
            compact ? "text-[0.72rem] tracking-[0.22em]" : "text-[0.92rem] tracking-[0.24em]",
          )}
        >
          Obsidi<span>Λ</span>n
        </span>
        <span
          className={cn(
            "mt-[0.45em] self-center font-light uppercase",
            compact ? "text-[0.44rem] tracking-[0.52em]" : "text-[0.54rem] tracking-[0.6em]",
            "ml-[0.3em]",
            tone === "light" ? "text-[#c9ab77]" : "text-[#8a7350]",
          )}
        >
          Labs
        </span>
      </span>
    </span>
  );
}
