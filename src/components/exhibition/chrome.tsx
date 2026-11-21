import { Link } from "@tanstack/react-router";

import { INDUSTRIES } from "@/lib/site";

/**
 * Chrome shared by every exhibition template. It deliberately sits *outside*
 * each template's design language: a discreet studio bar, so a visitor always
 * knows the page is an Obsidian Labs concept and can move between templates.
 */
export function DemoBar({ slug }: { slug: string }) {
  const index = INDUSTRIES.findIndex((i) => i.slug === slug);
  const current = INDUSTRIES[index] ?? INDUSTRIES[0];
  const previous =
    INDUSTRIES[(index - 1 + INDUSTRIES.length) % INDUSTRIES.length] ?? current;
  const next = INDUSTRIES[(index + 1) % INDUSTRIES.length] ?? current;
  if (!previous || !next) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0b0b0c]/92 backdrop-blur-md">
      <div className="shell flex h-14 items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="label-mono hidden shrink-0 bg-[#c9ab77] px-2 py-1 text-[0.55rem] text-[#0b0b0c] sm:inline-block">
            Concept
          </span>
          <p className="label-mono truncate text-[#f6f2e9]/55">
            <Link to="/exhibition" className="hover:text-[#c9ab77]">
              Obsidian Labs exhibition
            </Link>
            <span className="mx-2 text-[#c9ab77]/50">/</span>
            <span className="text-[#f6f2e9]/80">{INDUSTRIES[index]?.name}</span>
          </p>
        </div>
        <nav aria-label="Template navigation" className="flex items-center gap-1 sm:gap-3">
          <Link
            to="/exhibition/$slug"
            params={{ slug: previous.slug }}
            aria-label={`Previous template: ${previous.demoBrand}`}
            className="label-mono px-2 py-2 text-[#f6f2e9]/55 transition-colors hover:text-[#c9ab77]"
          >
            ←<span className="ml-1.5 hidden lg:inline">{previous.name}</span>
          </Link>
          <Link
            to="/exhibition"
            className="label-mono px-2 py-2 text-[#f6f2e9]/55 transition-colors hover:text-[#c9ab77]"
          >
            All
          </Link>
          <Link
            to="/exhibition/$slug"
            params={{ slug: next.slug }}
            aria-label={`Next template: ${next.demoBrand}`}
            className="label-mono px-2 py-2 text-[#f6f2e9]/55 transition-colors hover:text-[#c9ab77]"
          >
            <span className="mr-1.5 hidden lg:inline">{next.name}</span>→
          </Link>
          <Link
            to="/contact"
            className="label-mono ml-1 hidden bg-[#f6f2e9] px-3 py-2 text-[#0b0b0c] transition-colors hover:bg-[#c9ab77] sm:inline-block"
          >
            Brief us
          </Link>
        </nav>
      </div>
    </div>
  );
}

/** Top navigation inside a template. Inherits the template's own palette. */
export function TplNav({
  brand,
  sub,
  items,
  cta,
  ctaHref = "#reserve",
  align = "split",
}: {
  brand: string;
  sub?: string;
  items: { label: string; href: string }[];
  cta: string;
  /** Anchor the header call to action points at — every template has a different booking section. */
  ctaHref?: string;
  align?: "split" | "center";
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--tpl-line)] bg-[var(--tpl-bg)]/85 backdrop-blur-md">
      <div
        className={
          align === "center"
            ? "mx-auto flex max-w-[90rem] flex-col items-center gap-3 px-5 py-5 md:px-10 lg:flex-row lg:justify-between"
            : "mx-auto flex max-w-[90rem] items-center justify-between gap-6 px-5 py-5 md:px-10"
        }
      >
        <div className={align === "center" ? "text-center lg:text-left" : ""}>
          <p className="tpl-serif text-xl leading-none tracking-[0.12em] uppercase">{brand}</p>
          {sub && <p className="tpl-label mt-1.5">{sub}</p>}
        </div>
        <nav aria-label={`${brand} navigation`} className="hidden items-center gap-7 lg:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="tpl-label text-[var(--tpl-muted)] transition-colors hover:text-[var(--tpl-accent)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={ctaHref}
          className="tpl-label border border-[var(--tpl-accent)] px-4 py-2.5 text-[var(--tpl-accent)] transition-colors hover:bg-[var(--tpl-accent)] hover:text-[var(--tpl-bg)]"
        >
          {cta}
        </a>
      </div>
    </header>
  );
}

/** Closing band inside a template — the demo's own footer, not the studio's. */
export function TplFooter({
  brand,
  address,
  note,
}: {
  brand: string;
  address: string;
  note: string;
}) {
  return (
    <footer className="border-t border-[var(--tpl-line)]">
      <div className="mx-auto grid max-w-[90rem] gap-8 px-5 py-14 md:grid-cols-3 md:px-10">
        <div>
          <p className="tpl-serif text-2xl tracking-[0.1em] uppercase">{brand}</p>
          <p className="mt-3 max-w-[30ch] text-sm text-[var(--tpl-muted)]">{note}</p>
        </div>
        <div>
          <p className="tpl-label">Find us</p>
          <p className="mt-3 text-sm text-[var(--tpl-muted)]">{address}</p>
        </div>
        <div>
          <p className="tpl-label">Enquiries</p>
          <p className="mt-3 text-sm text-[var(--tpl-muted)]">
            This is a design concept. No real bookings, orders or enquiries are received.
          </p>
        </div>
      </div>
      <div className="border-t border-[var(--tpl-line)] px-5 py-5 md:px-10">
        <p className="tpl-label text-[var(--tpl-muted)]">
          Concept design by Obsidian Labs Software · Bloemfontein
        </p>
      </div>
    </footer>
  );
}
