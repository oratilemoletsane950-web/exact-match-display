import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ layout */

export function Shell({
  children,
  className,
  wide,
  id,
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
  id?: string;
}) {
  return (
    <div id={id} className={cn("pf-shell", wide && "pf-wide", className)}>
      {children}
    </div>
  );
}

export function Band({
  children,
  className,
  tone = "plain",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "plain" | "surface" | "accent" | "dark";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "pf-band",
        tone === "surface" && "pf-band-surface",
        tone === "accent" && "pf-band-accent",
        tone === "dark" && "pf-band-dark",
        className,
      )}
    >
      {children}
    </section>
  );
}

/* --------------------------------------------------------------- typography */

export function Label({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("pf-label", className)}>{children}</p>;
}

export function Display({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "div";
}) {
  return <Tag className={cn("pf-display", className)}>{children}</Tag>;
}

export function SectionHead({
  label,
  title,
  lead,
  align = "left",
  className,
}: {
  label?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center" | "split";
  className?: string;
}) {
  if (align === "split") {
    return (
      <div className={cn("pf-head-split", className)}>
        <div>
          {label && <Label className="pf-accent">{label}</Label>}
          <Display as="h2" className="pf-h2 mt-3">
            {title}
          </Display>
        </div>
        {lead && <div className="pf-lead max-w-[48ch]">{lead}</div>}
      </div>
    );
  }
  return (
    <div className={cn(align === "center" && "mx-auto max-w-[46rem] text-center", className)}>
      {label && <Label className="pf-accent">{label}</Label>}
      <Display as="h2" className="pf-h2 mt-3">
        {title}
      </Display>
      {lead && <div className={cn("pf-lead mt-4", align === "center" && "mx-auto")}>{lead}</div>}
    </div>
  );
}

/* ------------------------------------------------------------- interactive */

export function Btn({
  children,
  href,
  onClick,
  variant = "solid",
  className,
  type = "button",
  ariaLabel,
  small,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "ghost" | "quiet";
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
  small?: boolean;
}) {
  const cls = cn(
    "pf-btn",
    variant === "ghost" && "pf-btn-ghost",
    variant === "quiet" && "pf-btn-quiet",
    small && "pf-btn-sm",
    className,
  );
  if (href) {
    return (
      <a href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} aria-label={ariaLabel}>
      {children}
    </button>
  );
}

export function Field({
  label,
  children,
  hint,
  className,
}: {
  label: string;
  children: ReactNode;
  hint?: string;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="pf-label mb-2 block text-[var(--p-fg)] opacity-70">{label}</span>
      {children}
      {hint && <span className="pf-hint mt-1.5 block">{hint}</span>}
    </label>
  );
}

export function Note({ children, tone = "muted" }: { children: ReactNode; tone?: "muted" | "ok" }) {
  return <p className={cn("pf-note", tone === "ok" && "pf-note-ok")}>{children}</p>;
}

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="pf-faq">
      {items.map((item, i) => (
        <details key={item.q} className="pf-faq-item" open={i === 0 ? true : undefined}>

          <summary className="pf-faq-q">
            <span>{item.q}</span>
            <span aria-hidden className="pf-faq-plus">
              +
            </span>
          </summary>
          <p className="pf-faq-a">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Tabs<T extends string>({
  tabs,
  active,
  onChange,
  label,
}: {
  tabs: readonly { key: T; label: string }[];
  active: T;
  onChange: (key: T) => void;
  label: string;
}) {
  return (
    <div role="tablist" aria-label={label} className="pf-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          type="button"
          role="tab"
          aria-selected={active === tab.key}
          onClick={() => onChange(tab.key)}
          className={cn("pf-tab", active === tab.key && "is-active")}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export function Bar({ value, max = 100, label }: { value: number; max?: number; label?: string }) {
  const pct = Math.max(2, Math.min(100, (value / max) * 100));
  return (
    <div>
      {label && (
        <div className="mb-1.5 flex items-baseline justify-between gap-3">
          <span className="text-[0.8rem]">{label}</span>
          <span className="pf-mono text-[0.72rem] text-[var(--p-muted)]">{Math.round(pct)}%</span>
        </div>
      )}
      <div className="pf-bar" aria-hidden>
        <span style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export function Spark({
  points,
  className,
  height = 64,
}: {
  points: number[];
  className?: string;
  height?: number;
}) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const span = max - min || 1;
  const d = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * 100;
      const y = 100 - ((p - min) / span) * 88 - 6;
      return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={cn("pf-spark", className)}
      style={{ height }}
    >
      <path d={`${d} L100,100 L0,100 Z`} fill="var(--p-accent)" opacity="0.12" />
      <path d={d} fill="none" stroke="var(--p-accent)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export function Donut({ value, label, size = 92 }: { value: number; label: string; size?: number }) {
  const r = 38;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex items-center gap-4">
      <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden>
        <circle cx="50" cy="50" r={r} fill="none" stroke="var(--p-line)" strokeWidth="8" />
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="var(--p-accent)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${(value / 100) * c} ${c}`}
          transform="rotate(-90 50 50)"
        />
      </svg>
      <div>
        <p className="pf-display pf-h3">{value}%</p>
        <Label className="mt-1">{label}</Label>
      </div>
    </div>
  );
}

export function Tag({ children, active }: { children: ReactNode; active?: boolean }) {
  return <span className={cn("pf-tag", active && "is-active")}>{children}</span>;
}

export function Marquee({
  items,
  className,
  style,
}: {
  items: string[];
  className?: string;
  style?: CSSProperties;
}) {
  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={`${item}-${i}`} className="flex items-center whitespace-nowrap">
          <span className="pf-mono px-6 text-[0.68rem] tracking-[0.18em] uppercase">{item}</span>
          <span aria-hidden className="text-[var(--p-accent)]">
            ✦
          </span>
        </span>
      ))}
    </div>
  );
  return (
    <div className={cn("pf-marquee", className)} style={style}>
      <div className="pf-marquee-track">
        {row}
        {row}
      </div>
    </div>
  );
}

export function Media({
  src,
  alt,
  className,
  ratio = "4 / 3",
  treatment = "none",
}: {
  src: string;
  alt: string;
  className?: string;
  ratio?: string;
  treatment?: "none" | "mono" | "duotone";
}) {
  return (
    <div className={cn("pf-media", className)} style={{ aspectRatio: ratio }}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn(
          treatment === "mono" && "grayscale",
          treatment === "duotone" && "grayscale contrast-[1.08] mix-blend-luminosity",
        )}
      />
      {treatment === "duotone" && <span aria-hidden className="pf-duotone" />}
    </div>
  );
}

export function Icon({ name, className }: { name: string; className?: string }) {
  const paths: Record<string, ReactNode> = {
    arrow: <path d="M4 12h15m0 0-6-6m6 6-6 6" />,
    check: <path d="m4 12.5 5 5L20 6" />,
    plus: <path d="M12 5v14M5 12h14" />,
    close: <path d="M6 6l12 12M18 6 6 18" />,
    search: (
      <>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m20 20-3.6-3.6" />
      </>
    ),
    calendar: (
      <>
        <rect x="3.5" y="5" width="17" height="15.5" rx="1.5" />
        <path d="M8 3v4M16 3v4M3.5 10h17" />
      </>
    ),
    play: <path d="M8 5.5v13l11-6.5z" />,
  };
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("pf-icon", className)}
    >
      {paths[name] ?? paths["arrow"]}
    </svg>
  );
}
