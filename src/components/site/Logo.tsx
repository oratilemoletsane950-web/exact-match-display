import { cn } from "@/lib/utils";

/**
 * Obsidian Labs mark: two mirrored halves of a hexagonal ring, separated by a
 * vertical gap at the apex. Drawn as vectors so it stays sharp at every size.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      role="img"
      aria-label="Obsidian Labs"
      className={cn("block", className)}
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M57.2 1.75 L0 34 L0 86 L57.2 118.25 L57.2 90.5 L28 74.5 L28 45.5 L57.2 29.5 Z M57.2 90.5 L57.2 118.25 L114.4 86 L114.4 34 L57.2 1.75 L57.2 29.5 L86.4 45.5 L86.4 74.5 Z"
        transform="translate(2.8 0)"
      />
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
      className={cn(
        "inline-flex items-center gap-3",
        tone === "light" ? "text-[#f6f2e9]" : "text-[#0b0b0c]",
        className,
      )}
    >
      <LogoMark className={compact ? "h-7 w-7" : "h-9 w-9"} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-medium",
            compact ? "text-[0.78rem]" : "text-[0.95rem]",
            "tracking-[0.2em] uppercase",
          )}
        >
          Obsidi<span aria-hidden>Λ</span>n
        </span>
        <span
          className={cn(
            "mt-[0.3em] pl-[0.15em] tracking-[0.55em] uppercase",
            compact ? "text-[0.5rem]" : "text-[0.58rem]",
            tone === "light" ? "text-[#c9ab77]" : "text-[#8a7350]",
          )}
        >
          Labs
        </span>
      </span>
    </span>
  );
}
