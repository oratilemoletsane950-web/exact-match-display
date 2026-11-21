import { useState } from "react";

import type { Template } from "@/lib/portfolio/types";
import { cn } from "@/lib/utils";

import type { ChromeProps } from "./headers";
import { Display, Icon, Label } from "./ui";

function Credit({ tpl, group }: ChromeProps) {
  return (
    <p className="pf-mono text-[0.58rem] leading-relaxed tracking-[0.12em] text-[var(--p-muted)] uppercase">
      Concept design by Obsidian Labs Software ·{" "}
      <a href={`/portfolio/${group.slug}`} className="underline decoration-[var(--p-accent)] underline-offset-2">
        {group.name} collection
      </a>{" "}
      ·{" "}
      <a href="/portfolio" className="underline decoration-[var(--p-accent)] underline-offset-2">
        All 100 templates
      </a>
    </p>
  );
}

function Newsletter({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setDone(true);
      }}
      className={cn("w-full", compact ? "max-w-[20rem]" : "max-w-[24rem]")}
    >
      <label className="pf-label mb-2 block text-[var(--p-fg)] opacity-70" htmlFor="pf-newsletter">
        {done ? "You're on the list" : "Letters, occasionally"}
      </label>
      <div className="flex items-stretch border border-[var(--p-line)]">
        <input
          id="pf-newsletter"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.co.za"
          className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-[0.82rem] outline-none"
        />
        <button
          type="submit"
          className="pf-mono shrink-0 bg-[var(--p-accent)] px-3 text-[0.6rem] tracking-[0.12em] text-[var(--p-accent-fg)] uppercase"
        >
          {done ? "✓" : "Join"}
        </button>
      </div>
      <p className="pf-hint mt-2">
        {done ? "Demonstration only — nothing was stored." : "Demonstration form. Nothing is stored."}
      </p>
    </form>
  );
}

function Columns({ tpl, group, nav }: ChromeProps) {
  return (
    <footer className="border-t border-[var(--p-line)]">
      <div className="pf-shell pf-wide grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="pf-display text-[1.7rem] leading-none">{tpl.brand}</p>
          <p className="mt-3 max-w-[30ch] text-[0.86rem] text-[var(--p-muted)]">{tpl.blurb}</p>
          <div className="mt-6">
            <Newsletter />
          </div>
        </div>
        <div className="md:col-span-2">
          <Label>Explore</Label>
          <ul className="mt-4 space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-[0.85rem] hover:text-[var(--p-accent)]">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <Label>Services</Label>
          <ul className="mt-4 space-y-2.5">
            {group.capabilities.slice(0, 5).map((c) => (
              <li key={c} className="text-[0.85rem] text-[var(--p-muted)]">
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <Label>Contact</Label>
          <address className="mt-4 space-y-2.5 text-[0.85rem] not-italic text-[var(--p-muted)]">
            <p>14 Kellner Street<br />Westdene, Bloemfontein 9301</p>
            <p>+27 51 000 0000</p>
            <p>hello@{tpl.slug}.co.za</p>
          </address>
        </div>
      </div>
      <div className="border-t border-[var(--p-line)]">
        <div className="pf-shell pf-wide flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
          <Credit tpl={tpl} group={group} nav={nav} />
          <p className="pf-mono text-[0.58rem] tracking-[0.12em] text-[var(--p-muted)] uppercase">
            © 2026 {tpl.brand}
          </p>
        </div>
      </div>
    </footer>
  );
}

function Giant({ tpl, group, nav }: ChromeProps) {
  return (
    <footer className="overflow-hidden border-t border-[var(--p-line)] pt-12">
      <div className="pf-shell pf-wide">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Label className="pf-accent">{tpl.cta}</Label>
            <p className="pf-lead mt-3 max-w-[30rem]">{tpl.blurb}</p>
          </div>
          <a
            href="#experience"
            className="pf-btn shrink-0"
            style={{ borderRadius: "var(--p-radius)" }}
          >
            {tpl.cta} <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>
        <Display as="p" className="mt-10 text-[clamp(3rem,12vw,9rem)] leading-[0.82] tracking-[-0.04em]">
          {tpl.brand}
        </Display>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[var(--p-line)] py-5">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="pf-mono text-[0.62rem] tracking-[0.14em] uppercase">
              {n.label}
            </a>
          ))}
          <a href="#contact" className="pf-mono text-[0.62rem] tracking-[0.14em] text-[var(--p-accent)] uppercase">
            Contact
          </a>
        </div>
        <div className="flex flex-col gap-2 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <Credit tpl={tpl} group={group} nav={nav} />
          <p className="pf-mono text-[0.58rem] tracking-[0.12em] text-[var(--p-muted)] uppercase">
            {tpl.design} · 2026
          </p>
        </div>
      </div>
    </footer>
  );
}

function Band({ tpl, group, nav }: ChromeProps) {
  return (
    <footer>
      <div className="bg-[var(--p-accent)] text-[var(--p-accent-fg)]">
        <div className="pf-shell pf-wide flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="pf-mono text-[0.6rem] tracking-[0.2em] uppercase opacity-80">
              {group.name}
            </p>
            <p className="pf-display mt-3 max-w-[22ch] text-[clamp(1.8rem,4vw,3rem)] leading-[1.02]">
              {tpl.headline}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#experience"
              className="pf-mono inline-flex min-h-12 items-center gap-2 border border-[var(--p-accent-fg)] px-5 text-[0.64rem] tracking-[0.14em] uppercase"
            >
              {tpl.cta} <Icon name="arrow" className="h-4 w-4" />
            </a>
            <a href="#contact" className="pf-mono text-[0.66rem] tracking-[0.1em] underline underline-offset-4">
              +27 51 000 0000
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--p-line)] bg-[var(--p-bg)]">
        <div className="pf-shell pf-wide grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="pf-display text-[1.3rem]">{tpl.brand}</p>
            <p className="mt-2 text-[0.8rem] text-[var(--p-muted)]">{tpl.name}</p>
          </div>
          <div>
            <Label>Navigate</Label>
            <ul className="mt-3 space-y-2">
              {nav.slice(0, 4).map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-[0.82rem] text-[var(--p-muted)] hover:text-[var(--p-fg)]">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Label>Services</Label>
            <ul className="mt-3 space-y-2">
              {group.capabilities.slice(0, 4).map((c) => (
                <li key={c} className="text-[0.82rem] text-[var(--p-muted)]">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Label>Studio</Label>
            <p className="mt-3 text-[0.82rem] leading-relaxed text-[var(--p-muted)]">
              Bloemfontein, Free State
              <br />
              Mon–Fri, 08:00–17:00
            </p>
          </div>
        </div>
        <div className="border-t border-[var(--p-line)]">
          <div className="pf-shell pf-wide py-4">
            <Credit tpl={tpl} group={group} nav={nav} />
          </div>
        </div>
      </div>
    </footer>
  );
}

function Sitemap({ tpl, group, nav }: ChromeProps) {
  const columns = [
    { title: "Navigate", links: nav.map((n) => n.label) },
    { title: "Services", links: group.capabilities.slice(0, 5) },
    { title: "Company", links: ["About", "Careers", "Press", "Partners", "Contact"] },
    { title: "Resources", links: ["Insights", "Guides", "Help centre", "Status", "Accessibility"] },
    { title: "Legal", links: ["Privacy", "Terms", "Cookies", "PAIA manual", "Complaints"] },
  ];
  return (
    <footer className="border-t border-[var(--p-line)] bg-[var(--p-surface)]">
      <div className="pf-shell pf-wide py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-1">
            <p className="pf-display text-[1.35rem] leading-none">{tpl.brand}</p>
            <p className="pf-label mt-2">{tpl.name}</p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <Label>{col.title}</Label>
              <ul className="mt-3 space-y-1.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#experience" className="text-[0.8rem] text-[var(--p-muted)] hover:text-[var(--p-accent)]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-[var(--p-line)]">
        <div className="pf-shell pf-wide flex flex-col gap-2 py-4 lg:flex-row lg:items-center lg:justify-between">
          <Credit tpl={tpl} group={group} nav={nav} />
          <p className="pf-mono text-[0.56rem] tracking-[0.1em] text-[var(--p-muted)] uppercase">
            Reg. 2026/000000/07 · VAT 4000000000
          </p>
        </div>
      </div>
    </footer>
  );
}

function Contact({ tpl, group, nav }: ChromeProps) {
  return (
    <footer className="border-t border-[var(--p-line)]">
      <div className="pf-shell pf-wide grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Label className="pf-accent">Visit or call</Label>
          <Display as="p" className="pf-h2 mt-3 max-w-[18ch]">
            Come in, or we will come to you.
          </Display>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div>
              <p className="pf-label">Address</p>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-[var(--p-muted)]">
                14 Kellner Street
                <br />
                Westdene
                <br />
                Bloemfontein 9301
              </p>
            </div>
            <div>
              <p className="pf-label">Hours</p>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-[var(--p-muted)]">
                Mon–Fri 08:00–17:00
                <br />
                Sat 09:00–13:00
                <br />
                Closed Sundays
              </p>
            </div>
            <div>
              <p className="pf-label">Contact</p>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-[var(--p-muted)]">
                +27 51 000 0000
                <br />
                hello@{tpl.slug}.co.za
                <br />
                WhatsApp available
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Newsletter compact />
          </div>
        </div>
        <div className="relative min-h-[15rem] overflow-hidden border border-[var(--p-line)] bg-[var(--p-surface-alt)]">
          <div aria-hidden className="pf-map" />
          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 border border-[var(--p-line)] bg-[var(--p-surface)] p-3">
            <div>
              <p className="pf-label">{tpl.brand}</p>
              <p className="text-[0.78rem] text-[var(--p-muted)]">Westdene, Bloemfontein</p>
            </div>
            <a href="#contact" className="pf-mono text-[0.6rem] uppercase underline underline-offset-4">
              Directions
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--p-line)]">
        <div className="pf-shell pf-wide flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
          <Credit tpl={tpl} group={group} nav={nav} />
          <nav aria-label="Footer" className="flex flex-wrap gap-4">
            {nav.slice(0, 4).map((n) => (
              <a key={n.href} href={n.href} className="pf-mono text-[0.56rem] tracking-[0.1em] uppercase">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

function Brutal({ tpl, group, nav }: ChromeProps) {
  return (
    <footer className="border-t-[3px] border-[var(--p-fg)]">
      <div className="pf-shell pf-wide grid gap-px bg-[var(--p-line)] py-10 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "01 / Navigate", items: nav.map((n) => n.label) },
          { title: "02 / Capabilities", items: group.capabilities.slice(0, 5) },
          { title: "03 / Studio", items: ["Bloemfontein", "Free State", "South Africa", "Mon–Fri"] },
          {
            title: "04 / Contact",
            items: ["+27 51 000 0000", `hello@${tpl.slug}.co.za`, "WhatsApp", "Book a call"],
          },
        ].map((col) => (
          <div key={col.title} className="bg-[var(--p-bg)] p-5">
            <p className="pf-mono text-[0.62rem] tracking-[0.14em] uppercase">{col.title}</p>
            <ul className="mt-4 space-y-2">
              {col.items.map((item) => (
                <li key={item} className="border-b border-[var(--p-line)] pb-2 text-[0.84rem] last:border-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t-[3px] border-[var(--p-fg)]">
        <div className="pf-shell pf-wide flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="pf-display text-[1.6rem] uppercase">{tpl.brand}</p>
          <Credit tpl={tpl} group={group} nav={nav} />
        </div>
      </div>
    </footer>
  );
}

function Editorial({ tpl, group, nav }: ChromeProps) {
  return (
    <footer className="border-t border-[var(--p-line)]">
      <div className="pf-shell pf-wide py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="pf-display max-w-[24ch] text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.12]">
              “{tpl.blurb}”
            </p>
            <p className="pf-label mt-5">
              {tpl.name} · {group.name}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <Label>Index</Label>
              <ul className="mt-3 space-y-2">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="text-[0.84rem] text-[var(--p-muted)] hover:text-[var(--p-fg)]">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Label>Credits</Label>
              <p className="mt-3 text-[0.84rem] leading-relaxed text-[var(--p-muted)]">
                Design & build
                <br />
                Obsidian Labs
                <br />
                Bloemfontein
                <br />
                MMXXVI
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--p-line)] pt-5 sm:flex-row sm:items-end sm:justify-between">
          <p className="pf-display text-[clamp(1.8rem,5vw,3.4rem)] leading-none tracking-[0.02em]">
            {tpl.brand}
          </p>
          <Credit tpl={tpl} group={group} nav={nav} />
        </div>
      </div>
    </footer>
  );
}

function App({ tpl, group, nav }: ChromeProps) {
  return (
    <footer className="border-t border-[var(--p-line)]">
      <div className="pf-shell pf-wide grid gap-10 py-12 lg:grid-cols-[1fr_auto]">
        <div>
          <Label className="pf-accent">Take it with you</Label>
          <Display as="p" className="pf-h2 mt-3 max-w-[20ch]">
            The whole experience, in your pocket.
          </Display>
          <p className="mt-4 max-w-[42ch] text-[0.9rem] text-[var(--p-muted)]">
            Manage, book and track from the app. Available for iOS and Android with the same account
            you use on the web.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["App Store", "Google Play"].map((store) => (
              <a
                key={store}
                href="#experience"
                className="flex items-center gap-3 border border-[var(--p-line)] px-4 py-2.5 hover:border-[var(--p-accent)]"
              >
                <span className="pf-display text-[1.1rem] leading-none">⌘</span>
                <span>
                  <span className="pf-mono block text-[0.5rem] tracking-[0.14em] uppercase opacity-60">
                    Download on
                  </span>
                  <span className="text-[0.85rem]">{store}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-start gap-5">
          <div aria-hidden className="pf-qr" />
          <div className="max-w-[11rem]">
            <p className="pf-label">Scan to install</p>
            <p className="mt-2 text-[0.78rem] leading-relaxed text-[var(--p-muted)]">
              Point your camera at the code. Demonstration only.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--p-line)]">
        <div className="pf-shell pf-wide flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-4">
            {nav.slice(0, 4).map((n) => (
              <a key={n.href} href={n.href} className="pf-mono text-[0.58rem] tracking-[0.1em] uppercase">
                {n.label}
              </a>
            ))}
          </div>
          <Credit tpl={tpl} group={group} nav={nav} />
        </div>
      </div>
    </footer>
  );
}

function Social({ tpl, group, nav }: ChromeProps) {
  const tiles = [
    { name: "Instagram", handle: `@${tpl.slug}` },
    { name: "LinkedIn", handle: tpl.brand },
    { name: "X", handle: `@${tpl.slug.split("-")[0]}` },
    { name: "YouTube", handle: `${tpl.brand} TV` },
  ];
  return (
    <footer className="border-t border-[var(--p-line)]">
      <div className="pf-shell pf-wide grid gap-px bg-[var(--p-line)] sm:grid-cols-2 lg:grid-cols-4">
        {tiles.map((tile) => (
          <a
            key={tile.name}
            href="#contact"
            className="group flex min-h-[8.5rem] flex-col justify-between bg-[var(--p-bg)] p-5 transition-colors hover:bg-[var(--p-accent)] hover:text-[var(--p-accent-fg)]"
          >
            <span className="pf-mono text-[0.6rem] tracking-[0.14em] uppercase opacity-70">
              Follow
            </span>
            <span>
              <span className="pf-display block text-[1.35rem] leading-none">{tile.name}</span>
              <span className="mt-1 block text-[0.76rem] opacity-70">{tile.handle}</span>
            </span>
          </a>
        ))}
      </div>
      <div className="pf-shell pf-wide grid gap-8 py-10 md:grid-cols-[1fr_1fr_1fr]">
        <div>
          <p className="pf-display text-[1.4rem]">{tpl.brand}</p>
          <p className="mt-2 max-w-[26ch] text-[0.82rem] text-[var(--p-muted)]">{tpl.blurb}</p>
        </div>
        <div>
          <Label>Navigate</Label>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-[0.82rem] text-[var(--p-muted)] hover:text-[var(--p-fg)]">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Newsletter />
      </div>
      <div className="border-t border-[var(--p-line)]">
        <div className="pf-shell pf-wide flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
          <Credit tpl={tpl} group={group} nav={nav} />
          <p className="pf-mono text-[0.56rem] tracking-[0.1em] text-[var(--p-muted)] uppercase">
            {tpl.design}
          </p>
        </div>
      </div>
    </footer>
  );
}

function Minimal({ tpl, group, nav }: ChromeProps) {
  return (
    <footer className="border-t border-[var(--p-line)]">
      <div className="pf-shell pf-wide flex flex-col gap-4 py-7 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-5">
          <p className="pf-display text-[1.15rem]">{tpl.brand}</p>
          <span aria-hidden className="hidden h-4 w-px bg-[var(--p-line)] sm:block" />
          <p className="pf-mono text-[0.56rem] tracking-[0.12em] text-[var(--p-muted)] uppercase">
            {tpl.name}
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-5">
          {nav.slice(0, 4).map((n) => (
            <a key={n.href} href={n.href} className="text-[0.8rem] text-[var(--p-muted)] hover:text-[var(--p-fg)]">
              {n.label}
            </a>
          ))}
          <a href="#contact" className="text-[0.8rem] text-[var(--p-accent)]">
            Contact
          </a>
        </nav>
        <Credit tpl={tpl} group={group} nav={nav} />
      </div>
    </footer>
  );
}

export function Footer(props: ChromeProps & { variant: Template["footer"] }) {
  const map = {
    columns: Columns,
    giant: Giant,
    band: Band,
    sitemap: Sitemap,
    contact: Contact,
    brutal: Brutal,
    editorial: Editorial,
    app: App,
    social: Social,
    minimal: Minimal,
  } as const;
  const Variant = map[props.variant];
  return <Variant {...props} />;
}
