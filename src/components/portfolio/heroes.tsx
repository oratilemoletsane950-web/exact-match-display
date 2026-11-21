import { useEffect, useState } from "react";

import type { Group, Template } from "@/lib/portfolio/types";
import { cn } from "@/lib/utils";

import type { ChromeProps } from "./headers";
import { Btn, Display, Field, Icon, Label, Marquee, Media, Note, Spark, Tag } from "./ui";

type HeroProps = ChromeProps & { image: string };

function Meta({ tpl, className }: { tpl: Template; className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-x-5 gap-y-2", className)}>
      <span className="pf-label pf-accent">{tpl.design}</span>
      <span aria-hidden className="h-px w-6 bg-[var(--p-line)]" />
      <span className="pf-label">{tpl.name}</span>
    </div>
  );
}

function MiniForm({ tpl }: { tpl: Template }) {
  const [sent, setSent] = useState(false);
  if (sent) {
    return (
      <div className="pf-card p-6">
        <p className="pf-label pf-accent">Request received</p>
        <p className="pf-display pf-h3 mt-3">Thank you — we have your details.</p>
        <Note tone="ok">
          A {tpl.name.toLowerCase()} adviser will respond within one business day. This demonstration
          does not send data anywhere.
        </Note>
        <button type="button" onClick={() => setSent(false)} className="pf-link mt-4">
          Send another request
        </button>
      </div>
    );
  }
  return (
    <form
      className="pf-card p-5 sm:p-6"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="flex items-baseline justify-between gap-3">
        <p className="pf-label pf-accent">Start here</p>
        <span className="pf-mono text-[0.6rem] text-[var(--p-muted)]">No obligation</span>
      </div>
      <p className="pf-display pf-h3 mt-2">Request a callback</p>
      <div className="mt-5 grid gap-4">
        <Field label="Full name">
          <input required name="name" className="pf-input" placeholder="Alex Mokoena" autoComplete="name" />
        </Field>
        <Field label="Email address">
          <input
            required
            type="email"
            name="email"
            className="pf-input"
            placeholder="alex@example.co.za"
            autoComplete="email"
          />
        </Field>
        <Field label="Preferred date">
          <input type="date" name="date" className="pf-input" />
        </Field>
      </div>
      <Btn type="submit" className="mt-5 w-full">
        {tpl.cta}
      </Btn>
      <p className="pf-hint mt-3">
        Demonstration form. Nothing is submitted or stored.
      </p>
    </form>
  );
}

function Split({ tpl, group, image }: HeroProps) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pf-shell pf-wide grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <Meta tpl={tpl} />
          <Display as="h1" className="pf-h1 mt-5 max-w-[24ch]">
            {tpl.headline}
          </Display>
          <p className="pf-lead mt-6 max-w-[46ch]">{tpl.blurb}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Btn href="#experience">{tpl.cta}</Btn>
            <Btn href="#services" variant="ghost">
              Explore {group.capabilities[0]?.toLowerCase() ?? "the platform"}
            </Btn>
          </div>
          <dl className="mt-10 grid max-w-[34rem] grid-cols-3 gap-4 border-t border-[var(--p-line)] pt-5">
            {tpl.stats.slice(0, 3).map((stat) => (
              <div key={stat.label}>
                <dt className="pf-display text-[1.5rem] leading-none">{stat.value}</dt>
                <dd className="pf-label mt-2 leading-tight">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <Media src={image} alt={`${group.name} — ${tpl.design}`} ratio="5 / 4" className="pf-hero-media" />
          <div className="mt-5 hidden lg:block">
            <MiniForm tpl={tpl} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Fullbleed({ tpl, group, image }: HeroProps) {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <img src={image} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in srgb, var(--p-bg) 35%, transparent) 0%, color-mix(in srgb, var(--p-bg) 78%, transparent) 55%, var(--p-bg) 100%)",
        }}
      />
      <div className="pf-shell pf-wide relative flex min-h-[34rem] flex-col justify-end py-14 md:min-h-[40rem] md:py-20">
        <div className="max-w-[52rem]">
          <Meta tpl={tpl} className="text-[var(--p-bg)]" />
          <Display as="h1" className="pf-h1 mt-5 max-w-[26ch]">
            {tpl.headline}
          </Display>
          <p className="pf-lead mt-5 max-w-[48ch]">{tpl.blurb}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Btn href="#experience">{tpl.cta}</Btn>
            <Btn href="#services" variant="ghost">
              {group.capabilities[0] ?? "Discover more"}
            </Btn>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-[var(--p-line)] pt-5 sm:grid-cols-4">
          {tpl.stats.slice(0, 4).map((stat) => (
            <div key={stat.label}>
              <p className="pf-display text-[1.4rem] leading-none">{stat.value}</p>
              <p className="pf-label mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Editorial({ tpl, group, image }: HeroProps) {
  return (
    <section id="top" className="pf-shell pf-wide grid gap-10 py-12 md:py-16 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-7">
        <div className="flex items-center gap-4">
          <span className="pf-mono text-[0.62rem] tracking-[0.2em] text-[var(--p-muted)]">
            {group.name}
          </span>
          <span aria-hidden className="h-px flex-1 bg-[var(--p-line)]" />
          <span className="pf-mono text-[0.62rem] tracking-[0.2em] text-[var(--p-muted)]">
            2026
          </span>
        </div>
        <Display as="h1" className="pf-h1 mt-6 max-w-[20ch]">
          {tpl.headline}
        </Display>
        <p className="pf-lead mt-6 max-w-[44ch]">{tpl.blurb}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Btn href="#experience">{tpl.cta}</Btn>
          <a
            href="#services"
            className="pf-mono inline-flex items-center gap-2 text-[0.64rem] tracking-[0.14em] uppercase"
          >
            {tpl.design} <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="lg:col-span-5 lg:pt-10">
        <Media src={image} alt={`${group.name} — ${tpl.brand}`} ratio="4 / 5" treatment="duotone" />
        <div className="mt-3 flex items-start justify-between gap-4 border-b border-[var(--p-line)] pb-3">
          <p className="text-[0.78rem] text-[var(--p-muted)]">
            {tpl.brand} — {tpl.name}
          </p>
          <p className="pf-mono text-[0.58rem] tracking-[0.14em] text-[var(--p-muted)] uppercase">
            Plate 01
          </p>
        </div>
      </div>
    </section>
  );
}

function Product({ tpl, group }: HeroProps) {
  const rows = group.capabilities.slice(0, 4);
  return (
    <section id="top" className="pf-shell pf-wide grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[0.95fr_1.05fr]">
      <div>
        <Meta tpl={tpl} />
        <Display as="h1" className="pf-h1 mt-5 max-w-[22ch]">
          {tpl.headline}
        </Display>
        <p className="pf-lead mt-5 max-w-[44ch]">{tpl.blurb}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Btn href="#experience">{tpl.cta}</Btn>
          <Btn href="#experience" variant="ghost">
            View the dashboard
          </Btn>
        </div>
        <p className="pf-hint mt-5">
          Live demonstration · sample data · {group.short.toLowerCase()}
        </p>
      </div>
      <div className="pf-window">
        <div className="pf-window-bar">
          <span className="flex gap-1.5">
            <i /> <i /> <i />
          </span>
          <span className="pf-mono text-[0.58rem] tracking-[0.14em] uppercase">
            {tpl.brand} · workspace
          </span>
          <span className="pf-mono text-[0.58rem] text-[var(--p-muted)]">Live</span>
        </div>
        <div className="p-4 sm:p-5">
          <div className="grid grid-cols-2 gap-3">
            {tpl.stats.slice(0, 2).map((stat) => (
              <div key={stat.label} className="border border-[var(--p-line)] p-3.5">
                <p className="pf-label">{stat.label}</p>
                <p className="pf-display mt-1.5 text-[1.45rem] leading-none">{stat.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 border border-[var(--p-line)] p-3.5">
            <div className="mb-2 flex items-center justify-between">
              <p className="pf-label">Last 30 days</p>
              <span className="pf-mono text-[0.6rem] text-[var(--p-accent)]">+18.4%</span>
            </div>
            <Spark points={[12, 18, 15, 24, 22, 31, 28, 38, 35, 47, 52, 58]} height={78} />
          </div>
          <ul className="mt-3 divide-y divide-[var(--p-line)] border border-[var(--p-line)]">
            {rows.map((row, i) => (
              <li key={row} className="flex items-center justify-between gap-3 px-3.5 py-2.5">
                <span className="text-[0.8rem]">{row}</span>
                <span className="pf-mono text-[0.6rem] text-[var(--p-muted)]">
                  {["Active", "Review", "Active", "Queued"][i % 4]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Search({ tpl, group }: HeroProps) {
  const [query, setQuery] = useState("");
  const matches = group.capabilities.filter((c) => c.toLowerCase().includes(query.toLowerCase()));
  return (
    <section id="top" className="border-b border-[var(--p-line)] bg-[var(--p-surface)]">
      <div className="pf-shell pf-wide py-16 text-center md:py-24">
        <Label className="pf-accent">{tpl.design}</Label>
        <Display as="h1" className="pf-h1 mx-auto mt-4 max-w-[22ch]">
          {tpl.headline}
        </Display>
        <p className="pf-lead mx-auto mt-5 max-w-[52ch]">{tpl.blurb}</p>
        <div className="mx-auto mt-8 max-w-[38rem]">
          <div className="flex items-center gap-2 border border-[var(--p-line)] bg-[var(--p-bg)] p-2">
            <span className="pl-2 text-[var(--p-muted)]">
              <Icon name="search" className="h-5 w-5" />
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label={`Search ${group.name}`}
              placeholder={`Search ${group.name.toLowerCase()}…`}
              className="w-full bg-transparent px-1 py-2 text-[1rem] outline-none"
            />
            <Btn href="#experience" small className="shrink-0">
              {tpl.cta}
            </Btn>
          </div>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {group.capabilities.slice(0, 4).map((cap) => (
              <button
                key={cap}
                type="button"
                onClick={() => setQuery(cap)}
                className="pf-tag"
              >
                {cap}
              </button>
            ))}
          </div>
          {query && (
            <p aria-live="polite" className="pf-hint mt-3">
              {matches.length} matching {matches.length === 1 ? "service" : "services"} in this
              demonstration ·{" "}
              <a href="#experience" className="pf-link">
                jump to the interactive module
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function Stats({ tpl, group, image }: HeroProps) {
  return (
    <section id="top">
      <div className="pf-shell pf-wide grid items-end gap-10 pt-14 pb-10 md:pt-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Meta tpl={tpl} />
          <Display as="h1" className="pf-h1 mt-5 max-w-[24ch]">
            {tpl.headline}
          </Display>
        </div>
        <div>
          <p className="pf-lead">{tpl.blurb}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Btn href="#experience">{tpl.cta}</Btn>
            <Btn href="#contact" variant="ghost">
              Talk to the team
            </Btn>
          </div>
        </div>
      </div>
      <div className="pf-shell pf-wide grid gap-4 pb-10 sm:grid-cols-3">
        {tpl.stats.slice(0, 3).map((stat) => (
          <div key={stat.label} className="border-t-[3px] border-[var(--p-accent)] pt-4">
            <p className="pf-display text-[clamp(2rem,4vw,3rem)] leading-none">{stat.value}</p>
            <p className="pf-label mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="pf-shell pf-wide pb-12">
        <Media src={image} alt={`${group.name} — ${tpl.brand}`} ratio="21 / 8" />
      </div>
    </section>
  );
}

function Slideshow({ tpl, group, image }: HeroProps) {
  const slides = [
    { title: tpl.headline, body: tpl.blurb, tag: tpl.design },
    {
      title: group.capabilities[0] ?? "Built around the work",
      body: group.intro,
      tag: group.name,
    },
    {
      title: tpl.cta,
      body: "A working demonstration: real interactions, realistic sample data and a responsive layout from phone to desktop.",
      tag: "Interactive",
    },
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 7000);
    return () => window.clearInterval(id);
  }, [slides.length]);
  const slide = slides[index] ?? slides[0];
  if (!slide) return null;
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <img src={image} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, color-mix(in srgb, var(--p-bg) 92%, transparent) 0%, color-mix(in srgb, var(--p-bg) 55%, transparent) 62%, transparent 100%)",
        }}
      />
      <div className="pf-shell pf-wide relative min-h-[32rem] py-14 md:min-h-[38rem] md:py-20">
        <p className="pf-mono text-[0.62rem] tracking-[0.22em] text-[var(--p-muted)] uppercase">
          0{index + 1} / 0{slides.length}
        </p>
        <div className="mt-6 max-w-[38rem]">
          <Label className="pf-accent">{slide.tag}</Label>
          <Display as="h1" className="pf-h1 mt-4 max-w-[20ch]">
            {slide.title}
          </Display>
          <p className="pf-lead mt-5 max-w-[44ch]">{slide.body}</p>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Btn href="#experience">{tpl.cta}</Btn>
          <div className="flex gap-2" role="tablist" aria-label="Hero slides">
            {slides.map((s, i) => (
              <button
                key={s.tag}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Slide ${i + 1}: ${s.tag}`}
                onClick={() => setIndex(i)}
                className={cn("pf-dot", i === index && "is-active")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Collage({ tpl, group, image }: HeroProps) {
  return (
    <section id="top" className="pf-shell pf-wide py-12 md:py-16">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <Meta tpl={tpl} />
          <Display as="h1" className="pf-h1 mt-5 max-w-[22ch]">
            {tpl.headline}
          </Display>
        </div>
        <div className="flex flex-col gap-4">
          <p className="pf-lead">{tpl.blurb}</p>
          <div className="flex flex-wrap gap-3">
            <Btn href="#experience">{tpl.cta}</Btn>
            <Btn href="#services" variant="ghost">
              The collection
            </Btn>
          </div>
        </div>
      </div>
      <div className="mt-9 grid auto-rows-[9rem] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[11rem]">
        <div className="col-span-2 row-span-2 overflow-hidden">
          <img src={image} alt={`${group.name} — ${tpl.brand}`} className="h-full w-full object-cover" />
        </div>
        <div className="pf-card flex flex-col justify-between p-4">
          <Label className="pf-accent">Since 2026</Label>
          <p className="pf-display text-[1.5rem] leading-none">{group.name}</p>
        </div>
        <div className="pf-card flex flex-col justify-between p-4">
          <Label>Design language</Label>
          <p className="text-[0.9rem] leading-snug">{tpl.design}</p>
        </div>
        {tpl.stats.slice(0, 2).map((stat) => (
          <div key={stat.label} className="pf-card flex flex-col justify-between p-4">
            <p className="pf-display text-[1.6rem] leading-none">{stat.value}</p>
            <p className="pf-label mt-2">{stat.label}</p>
          </div>
        ))}
        <div className="pf-card col-span-2 hidden flex-col justify-center gap-1 p-4 md:flex">
          {group.capabilities.slice(0, 3).map((cap) => (
            <p key={cap} className="border-b border-[var(--p-line)] py-1 text-[0.82rem] last:border-0">
              {cap}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Monolith({ tpl, group }: HeroProps) {
  return (
    <section id="top" className="relative overflow-hidden pt-10 pb-0">
      <div className="pf-shell pf-wide">
        <div className="flex items-center justify-between gap-4">
          <p className="pf-label pf-accent">{tpl.design}</p>
          <p className="pf-mono text-[0.6rem] tracking-[0.18em] text-[var(--p-muted)] uppercase">
            {group.name} / 2026
          </p>
        </div>
        <Display as="h1" className="pf-h1 mt-6 max-w-[18ch] uppercase">
          {tpl.headline}
        </Display>
        <div className="mt-8 grid gap-8 border-t border-[var(--p-line)] pt-6 md:grid-cols-[1.2fr_0.8fr]">
          <p className="pf-lead max-w-[52ch]">{tpl.blurb}</p>
          <div className="flex flex-wrap items-start gap-3 md:justify-end">
            <Btn href="#experience">{tpl.cta}</Btn>
            <Btn href="#services" variant="ghost">
              {group.capabilities[0] ?? "Explore"}
            </Btn>
          </div>
        </div>
      </div>
      <div className="mt-10 border-y border-[var(--p-line)] py-4">
        <Marquee items={[tpl.brand, tpl.name, tpl.design, ...group.capabilities.slice(0, 3)]} />
      </div>
      <div className="pf-shell pf-wide grid grid-cols-2 gap-4 py-6 sm:grid-cols-4">
        {tpl.stats.slice(0, 4).map((stat) => (
          <div key={stat.label}>
            <p className="pf-display text-[1.35rem] leading-none">{stat.value}</p>
            <p className="pf-label mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Framed({ tpl, group, image }: HeroProps) {
  return (
    <section id="top" className="pf-shell pf-wide py-12 md:py-16">
      <div className="mx-auto max-w-[62rem] text-center">
        <Label className="pf-accent">{group.name}</Label>
        <Display as="h1" className="pf-h1 mx-auto mt-4 max-w-[24ch]">
          {tpl.headline}
        </Display>
        <p className="pf-lead mx-auto mt-5 max-w-[48ch]">{tpl.blurb}</p>
      </div>
      <div className="relative mx-auto mt-10 max-w-[72rem] border border-[var(--p-line)] p-2 sm:p-3">
        <Media src={image} alt={`${group.name} — ${tpl.brand}`} ratio="21 / 9" />
        <div className="absolute bottom-4 left-4 hidden max-w-[22rem] border border-[var(--p-line)] bg-[var(--p-surface)] p-4 sm:block">
          <Tag>{tpl.design}</Tag>
          <p className="pf-display mt-2 text-[1.2rem] leading-tight">{tpl.brand}</p>
          <p className="mt-1 text-[0.78rem] text-[var(--p-muted)]">{tpl.name}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Btn href="#experience">{tpl.cta}</Btn>
        <Btn href="#contact" variant="ghost">
          Ask a question
        </Btn>
      </div>
    </section>
  );
}

export function Hero({ tpl, group, nav, image }: HeroProps) {
  const map = {
    split: Split,
    fullbleed: Fullbleed,
    editorial: Editorial,
    product: Product,
    search: Search,
    stats: Stats,
    slideshow: Slideshow,
    collage: Collage,
    monolith: Monolith,
    framed: Framed,
  } as const;
  const Variant = map[tpl.hero];
  return <Variant tpl={tpl} group={group} nav={nav} image={image} />;
}
