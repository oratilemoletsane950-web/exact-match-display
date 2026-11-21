import { useEffect, useState } from "react";

import type { Group, Template } from "@/lib/portfolio/types";
import { cn } from "@/lib/utils";

import { Btn, Icon, Marquee } from "./ui";

export type ChromeProps = {
  tpl: Template;
  group: Group;
  nav: { label: string; href: string }[];
};

function initials(brand: string) {
  return brand
    .replace(/[^A-Za-z0-9 ]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function BrandMark({ tpl, compact = false }: { tpl: Template; compact?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label={`${tpl.brand} — home`}>
      <span
        className={cn(
          "grid shrink-0 place-items-center border border-[var(--p-accent)] bg-[var(--p-accent)] text-[var(--p-accent-fg)]",
          compact ? "h-8 w-8 text-[0.62rem]" : "h-9 w-9 text-[0.7rem]",
        )}
        style={{ borderRadius: "calc(var(--p-radius) * 0.5)" }}
      >
        <span className="pf-mono tracking-[0.02em]">{initials(tpl.brand)}</span>
      </span>
      <span className="min-w-0">
        <span
          className={cn(
            "pf-display block leading-none tracking-[var(--p-tracking)]",
            compact ? "text-[1.02rem]" : "text-[1.15rem]",
          )}
        >
          {tpl.brand}
        </span>
        <span className="pf-label mt-1 block text-[0.55rem] leading-none opacity-60">
          {tpl.name}
        </span>
      </span>
    </a>
  );
}

function useMobile() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);
  return { open, setOpen };
}

function MenuButton({
  open,
  onClick,
  label = "Menu",
  className,
}: {
  open: boolean;
  onClick: () => void;
  label?: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-label={open ? "Close menu" : "Open menu"}
      className={cn("pf-menu-btn", className)}
    >
      {open ? "Close" : label}
    </button>
  );
}

function MobilePanel({
  open,
  onClose,
  tpl,
  nav,
}: {
  open: boolean;
  onClose: () => void;
  tpl: Template;
  nav: { label: string; href: string }[];
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[var(--p-bg)] text-[var(--p-fg)] lg:hidden">
      <div className="pf-shell flex h-[4.5rem] items-center justify-between border-b border-[var(--p-line)]">
        <BrandMark tpl={tpl} />
        <MenuButton open onClick={onClose} label="Close" />
      </div>
      <nav aria-label="Mobile navigation" className="pf-shell py-6">
        <ul>
          {nav.map((item, i) => (
            <li key={item.href} className={i === 0 ? "" : "border-t border-[var(--p-line)]"}>
              <a
                href={item.href}
                onClick={onClose}
                className="flex items-baseline justify-between gap-4 py-5"
              >
                <span className="pf-display text-[2rem] leading-none">{item.label}</span>
                <span className="pf-mono text-[0.65rem] text-[var(--p-muted)]">
                  0{i + 1}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <Btn href="#experience" className="mt-7 w-full">
          {tpl.cta}
        </Btn>
        <p className="pf-label mt-6">{tpl.design}</p>
      </nav>
    </div>
  );
}

/* ---------------------------------------------------------------- variants */

function Brutal({ tpl, nav }: ChromeProps) {
  const { open, setOpen } = useMobile();
  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-[var(--p-fg)] bg-[var(--p-bg)]">
      <div className="pf-shell pf-wide flex h-[4.5rem] items-center justify-between gap-5">
        <BrandMark tpl={tpl} />
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="pf-mono border-b-2 border-transparent text-[0.66rem] tracking-[0.16em] uppercase transition-colors hover:border-[var(--p-accent)] hover:text-[var(--p-accent)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Btn small href="#experience" className="hidden sm:inline-flex">
            {tpl.cta}
          </Btn>
          <MenuButton open={open} onClick={() => setOpen(true)} />
        </div>
      </div>
      <MobilePanel open={open} onClose={() => setOpen(false)} tpl={tpl} nav={nav} />
    </header>
  );
}

function Mega({ tpl, group, nav }: ChromeProps) {
  const { open, setOpen } = useMobile();
  return (
    <header className="sticky top-0 z-40 bg-[var(--p-bg)]">
      <div className="border-b border-[var(--p-line)]">
        <div className="pf-shell pf-wide flex h-8 items-center justify-between gap-4">
          <p className="pf-mono text-[0.58rem] tracking-[0.14em] text-[var(--p-muted)] uppercase">
            {group.name} · Client login
          </p>
          <p className="pf-mono hidden text-[0.58rem] tracking-[0.14em] text-[var(--p-muted)] uppercase sm:block">
            Mon–Fri 08:00–17:00 · +27 51 000 0000
          </p>
        </div>
      </div>
      <div className="pf-shell pf-wide flex h-[4.4rem] items-center justify-between gap-6 border-b border-[var(--p-line)]">
        <BrandMark tpl={tpl} />
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((item, i) => (
            <div key={item.href} className="group relative">
              <a
                href={item.href}
                className="pf-mono flex items-center gap-1.5 px-3 py-2 text-[0.66rem] tracking-[0.12em] uppercase hover:text-[var(--p-accent)]"
              >
                {item.label}
                {i === 1 && <span aria-hidden className="text-[0.55rem]">▾</span>}
              </a>
              {i === 1 && (
                <div className="invisible absolute top-full left-0 w-[34rem] translate-y-1 border border-[var(--p-line)] bg-[var(--p-surface)] p-6 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="pf-label pf-accent">{group.short}</p>
                  <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
                    {group.capabilities.slice(0, 6).map((cap) => (
                      <a
                        key={cap}
                        href="#experience"
                        className="border-b border-[var(--p-line)] pb-2 text-[0.82rem] hover:text-[var(--p-accent)]"
                      >
                        {cap}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#experience"
            className="pf-mono hidden text-[0.64rem] tracking-[0.12em] uppercase underline decoration-[var(--p-accent)] decoration-2 underline-offset-4 sm:inline"
          >
            {tpl.cta}
          </a>
          <Btn small href="#contact">
            Enquire
          </Btn>
          <MenuButton open={open} onClick={() => setOpen(true)} />
        </div>
      </div>
      <MobilePanel open={open} onClose={() => setOpen(false)} tpl={tpl} nav={nav} />
    </header>
  );
}

function Centered({ tpl, nav }: ChromeProps) {
  const { open, setOpen } = useMobile();
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--p-line)] bg-[var(--p-bg)]/95 backdrop-blur">
      <div className="pf-shell pf-wide">
        <div className="flex items-start justify-between pt-5 lg:hidden">
          <BrandMark tpl={tpl} />
          <MenuButton open={open} onClick={() => setOpen(true)} />
        </div>
        <div className="hidden flex-col items-center gap-4 py-5 lg:flex">
          <a href="#top" className="pf-display text-[1.75rem] leading-none tracking-[0.04em]">
            {tpl.brand}
          </a>
          <nav aria-label="Primary" className="flex items-center gap-9">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="pf-mono text-[0.64rem] tracking-[0.2em] uppercase hover:text-[var(--p-accent)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#experience"
              className="pf-mono border border-[var(--p-accent)] px-4 py-2 text-[0.62rem] tracking-[0.14em] text-[var(--p-accent)] uppercase hover:bg-[var(--p-accent)] hover:text-[var(--p-accent-fg)]"
            >
              {tpl.cta}
            </a>
          </nav>
        </div>
      </div>
      <MobilePanel open={open} onClose={() => setOpen(false)} tpl={tpl} nav={nav} />
    </header>
  );
}

function Rail({ tpl, group, nav }: ChromeProps) {
  const { open, setOpen } = useMobile();
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--p-line)] bg-[var(--p-bg)]">
      <div className="pf-shell pf-wide grid items-stretch gap-0 lg:grid-cols-[17rem_1fr]">
        <div className="hidden flex-col justify-center border-r border-[var(--p-line)] py-5 pr-6 lg:flex">
          <a href="#top" className="pf-display text-[1.4rem] leading-none tracking-[0.02em]">
            {tpl.brand}
          </a>
          <p className="pf-label mt-2 opacity-70">{group.short}</p>
        </div>
        <div className="flex items-center justify-between gap-4 py-4 lg:pl-8">
          <div className="lg:hidden">
            <BrandMark tpl={tpl} compact />
          </div>
          <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="pf-mono text-[0.64rem] tracking-[0.14em] uppercase hover:text-[var(--p-accent)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Btn small href="#experience" variant="ghost" className="hidden sm:inline-flex">
              {tpl.cta}
            </Btn>
            <MenuButton open={open} onClick={() => setOpen(true)} />
          </div>
        </div>
      </div>
      <MobilePanel open={open} onClose={() => setOpen(false)} tpl={tpl} nav={nav} />
    </header>
  );
}

function Command({ tpl, nav }: ChromeProps) {
  const { open, setOpen } = useMobile();
  const [query, setQuery] = useState("");
  const matches = nav.filter((n) => n.label.toLowerCase().includes(query.toLowerCase()));
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--p-line)] bg-[var(--p-surface)]">
      <div className="pf-shell pf-wide flex h-[4.5rem] items-center gap-4">
        <BrandMark tpl={tpl} compact />
        <div className="relative ml-auto hidden w-full max-w-[19rem] md:block">
          <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[var(--p-muted)]">
            <Icon name="search" className="h-4 w-4" />
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the platform"
            aria-label="Search the platform"
            className="pf-input w-full pl-9 text-[0.82rem]"
          />
          {query && (
            <div className="absolute inset-x-0 top-full z-10 mt-1 border border-[var(--p-line)] bg-[var(--p-surface)] p-1 shadow-lg">
              {matches.length === 0 && (
                <p className="px-3 py-2 text-[0.78rem] text-[var(--p-muted)]">No section found</p>
              )}
              {matches.map((m) => (
                <a
                  key={m.href}
                  href={m.href}
                  onClick={() => setQuery("")}
                  className="block px-3 py-2 text-[0.8rem] hover:bg-[var(--p-accent-soft)]"
                >
                  {m.label}
                </a>
              ))}
            </div>
          )}
        </div>
        <nav aria-label="Primary" className="hidden items-center gap-4 lg:flex">
          {nav.slice(0, 3).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="pf-mono text-[0.62rem] tracking-[0.1em] uppercase hover:text-[var(--p-accent)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Btn small href="#experience" className="hidden sm:inline-flex">
          {tpl.cta}
        </Btn>
        <MenuButton open={open} onClick={() => setOpen(true)} label="Index" />
      </div>
      <MobilePanel open={open} onClose={() => setOpen(false)} tpl={tpl} nav={nav} />
    </header>
  );
}

function Float({ tpl, nav }: ChromeProps) {
  const { open, setOpen } = useMobile();
  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-5">
      <div
        className="mx-auto flex h-16 max-w-[78rem] items-center justify-between gap-4 border border-[var(--p-line)] bg-[var(--p-surface)]/88 px-4 shadow-[0_16px_50px_-32px_rgba(0,0,0,0.55)] backdrop-blur-xl"
        style={{ borderRadius: "calc(var(--p-radius) + 999px)" }}
      >
        <BrandMark tpl={tpl} compact />
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="pf-mono rounded-full px-3.5 py-2 text-[0.62rem] tracking-[0.12em] uppercase transition-colors hover:bg-[var(--p-accent-soft)] hover:text-[var(--p-accent)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Btn small href="#experience" className="hidden sm:inline-flex">
            {tpl.cta}
          </Btn>
          <MenuButton open={open} onClick={() => setOpen(true)} />
        </div>
      </div>
      <MobilePanel open={open} onClose={() => setOpen(false)} tpl={tpl} nav={nav} />
    </header>
  );
}

function Underline({ tpl, nav }: ChromeProps) {
  const { open, setOpen } = useMobile();
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--p-line)] bg-[var(--p-bg)]/92 backdrop-blur">
      <div className="pf-shell pf-wide flex h-[4.4rem] items-center justify-between gap-6">
        <a
          href="#top"
          className="pf-display text-[1.3rem] tracking-[0.16em] uppercase"
          aria-label={`${tpl.brand} — home`}
        >
          {tpl.brand}
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-1 text-[0.88rem] text-[var(--p-fg)]/80 transition-colors hover:text-[var(--p-fg)]"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[var(--p-accent)] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="#experience"
            className="pf-mono hidden items-center gap-2 text-[0.64rem] tracking-[0.14em] text-[var(--p-accent)] uppercase sm:flex"
          >
            {tpl.cta} <Icon name="arrow" className="h-4 w-4" />
          </a>
          <MenuButton open={open} onClick={() => setOpen(true)} />
        </div>
      </div>
      <MobilePanel open={open} onClose={() => setOpen(false)} tpl={tpl} nav={nav} />
    </header>
  );
}

function Split({ tpl, nav }: ChromeProps) {
  const { open, setOpen } = useMobile();
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--p-line)] bg-[var(--p-bg)]">
      <div className="pf-shell pf-wide flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-4">
        <div className="flex items-center gap-5">
          <a href="#top" className="pf-display text-[1.5rem] leading-none">
            {tpl.brand}
          </a>
          <span aria-hidden className="hidden h-8 w-px bg-[var(--p-line)] sm:block" />
          <p className="pf-label hidden max-w-[16rem] leading-relaxed opacity-70 sm:block">
            {tpl.design}
          </p>
        </div>
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="pf-mono text-[0.63rem] tracking-[0.14em] uppercase hover:text-[var(--p-accent)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="pf-mono hidden text-[0.66rem] tracking-[0.1em] xl:block">
            +27 51 000 0000
          </a>
          <Btn small href="#experience">
            {tpl.cta}
          </Btn>
          <MenuButton open={open} onClick={() => setOpen(true)} />
        </div>
      </div>
      <MobilePanel open={open} onClose={() => setOpen(false)} tpl={tpl} nav={nav} />
    </header>
  );
}

function Ticker({ tpl, group, nav }: ChromeProps) {
  const { open, setOpen } = useMobile();
  return (
    <header className="sticky top-0 z-40 bg-[var(--p-bg)]">
      <div className="bg-[var(--p-accent)] py-2 text-[var(--p-accent-fg)]">
        <Marquee items={[...group.capabilities.slice(0, 4), tpl.design]} />
      </div>
      <div className="border-b border-[var(--p-line)]">
        <div className="pf-shell pf-wide flex h-[4.3rem] items-center justify-between gap-5">
          <BrandMark tpl={tpl} />
          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="pf-mono text-[0.63rem] tracking-[0.12em] uppercase hover:text-[var(--p-accent)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Btn small href="#experience" variant="ghost" className="hidden sm:inline-flex">
              {tpl.cta}
            </Btn>
            <MenuButton open={open} onClick={() => setOpen(true)} />
          </div>
        </div>
      </div>
      <MobilePanel open={open} onClose={() => setOpen(false)} tpl={tpl} nav={nav} />
    </header>
  );
}

function Editorial({ tpl, nav }: ChromeProps) {
  const { open, setOpen } = useMobile();
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--p-line)] bg-[var(--p-bg)]/94 backdrop-blur">
      <div className="pf-shell pf-wide flex items-end justify-between gap-6 pt-5 pb-4">
        <div>
          <p className="pf-label mb-2">Vol. 01 · {tpl.name}</p>
          <a href="#top" className="pf-display block text-[clamp(1.7rem,3.4vw,2.6rem)] leading-[0.9]">
            {tpl.brand}
          </a>
        </div>
        <div className="flex flex-col items-end gap-3">
          <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex">
            {nav.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-baseline gap-1.5 text-[0.84rem] hover:text-[var(--p-accent)]"
              >
                <span className="pf-mono text-[0.55rem] text-[var(--p-muted)]">0{i + 1}</span>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#experience"
              className="pf-mono hidden text-[0.6rem] tracking-[0.16em] uppercase underline decoration-[var(--p-accent)] underline-offset-4 sm:block"
            >
              {tpl.cta}
            </a>
            <MenuButton open={open} onClick={() => setOpen(true)} label="Contents" />
          </div>
        </div>
      </div>
      <MobilePanel open={open} onClose={() => setOpen(false)} tpl={tpl} nav={nav} />
    </header>
  );
}

export function Header({ tpl, group, nav }: ChromeProps) {
  const map = {
    brutal: Brutal,
    mega: Mega,
    centered: Centered,
    rail: Rail,
    command: Command,
    float: Float,
    underline: Underline,
    split: Split,
    ticker: Ticker,
    editorial: Editorial,
  } as const;
  const Variant = map[tpl.header];
  return <Variant tpl={tpl} group={group} nav={nav} />;
}
