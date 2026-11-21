import { useState, type ReactElement } from "react";

import type { BlockKey, Group, Template } from "@/lib/portfolio/types";
import { cn } from "@/lib/utils";

import { CheckCircle2 } from "lucide-react";

import {
  Accordion,
  Band,
  Btn,
  Display,
  Field,
  Label,
  Media,
  Note,
  SectionHead,
  Shell,
  Tag,
} from "./ui";

type BlockProps = { tpl: Template; group: Group };

export function Stats({ tpl, group }: BlockProps) {
  return (
    <Band tone="surface">
      <Shell wide className="py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <Label className="pf-accent">By the numbers</Label>
            <Display as="p" className="pf-h2 mt-3 max-w-[16ch]">
              {group.name}, measured.
            </Display>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {group.stats.slice(0, 4).map((stat) => (
              <div key={stat.label} className="border-t border-[var(--p-line)] pt-4">
                <p className="pf-display text-[clamp(1.6rem,3vw,2.4rem)] leading-none">{stat.value}</p>
                <p className="pf-label mt-2 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Shell>
    </Band>
  );
}

export function Features({ tpl, group }: BlockProps) {
  return (
    <Band id="services">
      <Shell wide className="py-14 md:py-20">
        <SectionHead
          label={`${group.name} capabilities`}
          title={<>Everything the work needs, in one place.</>}
          lead={group.intro}
          align="split"
        />
        <div className="mt-10 grid gap-px bg-[var(--p-line)] sm:grid-cols-2 lg:grid-cols-3">
          {group.features.map((feature, i) => (
            <article key={feature.title} className="bg-[var(--p-bg)] p-6">
              <div className="flex items-baseline justify-between gap-3">
                <span className="pf-mono text-[0.6rem] tracking-[0.18em] text-[var(--p-muted)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="pf-label pf-accent">{tpl.name}</span>
              </div>
              <h3 className="pf-display mt-6 text-[1.28rem] leading-tight">{feature.title}</h3>
              <p className="mt-2.5 text-[0.87rem] leading-relaxed text-[var(--p-muted)]">
                {feature.body}
              </p>
            </article>
          ))}
        </div>
      </Shell>
    </Band>
  );
}

export function Split({ tpl, group }: BlockProps) {
  const flip = tpl.index % 2 === 0;
  return (
    <Band>
      <Shell wide className="grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-16">
        <div className={cn(flip && "lg:order-2")}>
          <Media
            src={group.gallery[1] ?? group.image}
            alt={`${group.name} detail`}
            ratio="4 / 3"
            treatment={flip ? "none" : "duotone"}
          />
        </div>
        <div className={cn(flip && "lg:order-1")}>
          <Label className="pf-accent">Why it works</Label>
          <Display as="h2" className="pf-h2 mt-3 max-w-[20ch]">
            Designed around the decision, not the decoration.
          </Display>
          <p className="pf-lead mt-5">{group.intro}</p>
          <ul className="mt-6 grid gap-3">
            {group.capabilities.slice(0, 4).map((cap) => (
              <li key={cap} className="flex items-start gap-3 border-b border-[var(--p-line)] pb-3">
                <CheckCircle2
                  aria-hidden
                  className="mt-0.5 h-4 w-4 shrink-0 text-[var(--p-accent)]"
                  strokeWidth={1.6}
                />
                <span className="text-[0.88rem]">{cap}</span>
              </li>
            ))}
          </ul>
          <Btn href="#experience" variant="ghost" className="mt-7">
            Try the {tpl.name.toLowerCase()} module
          </Btn>
        </div>
      </Shell>
    </Band>
  );
}

export function Process({ tpl, group }: BlockProps) {
  return (
    <Band tone="dark">
      <Shell wide className="py-14 md:py-20">
        <SectionHead
          label="How it is delivered"
          title={<>A process you can audit.</>}
          lead={`The same discipline behind ${tpl.brand} is how client work is run: scope, design, build, measure.`}
          align="split"
        />
        <ol className="mt-10 grid gap-px bg-[var(--p-line)] md:grid-cols-2 lg:grid-cols-4">
          {group.process.map((step, i) => (
            <li key={step.title} className="bg-[var(--p-bg)] p-6">
              <p className="pf-mono text-[0.62rem] tracking-[0.18em] text-[var(--p-accent)]">
                {String(i + 1).padStart(2, "0")} / {step.step}
              </p>
              <h3 className="pf-display mt-5 text-[1.3rem] leading-tight">{step.title}</h3>
              <p className="mt-2.5 text-[0.86rem] leading-relaxed text-[var(--p-muted)]">{step.body}</p>
            </li>
          ))}
        </ol>
      </Shell>
    </Band>
  );
}

export function Gallery({ tpl, group }: BlockProps) {
  return (
    <Band tone="surface">
      <Shell wide className="py-14 md:py-20">
        <SectionHead
          label="The work"
          title={<>A closer look.</>}
          lead={`Photography and art direction for ${tpl.brand} are treated as part of the interface, not as decoration.`}
          align="split"
        />
        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {group.gallery.slice(0, 3).map((src, i) => (
            <figure key={src + i} className={cn(i === 0 && "sm:col-span-2 lg:col-span-1 lg:row-span-2")}>
              <Media
                src={src}
                alt={`${tpl.brand} — ${group.capabilities[i] ?? group.name}`}
                ratio={i === 0 ? "4 / 5" : "4 / 3"}
                treatment={i === 1 ? "mono" : "none"}
              />
              <figcaption className="mt-2 flex items-baseline justify-between gap-3 border-b border-[var(--p-line)] pb-2">
                <span className="text-[0.76rem] text-[var(--p-muted)]">
                  {group.capabilities[i] ?? tpl.design}
                </span>
                <span className="pf-mono text-[0.55rem] tracking-[0.12em] uppercase opacity-60">
                  0{i + 1}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Shell>
    </Band>
  );
}

export function Logos({ tpl, group }: BlockProps) {
  return (
    <Band>
      <Shell wide className="py-10">
        <div className="flex flex-col gap-5 border-y border-[var(--p-line)] py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="pf-label shrink-0">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {group.partners.map((partner) => (
              <span
                key={partner}
                className="pf-display text-[0.95rem] tracking-[0.02em] text-[var(--p-muted)] opacity-80"
              >
                {partner}
              </span>
            ))}
          </div>
          <p className="pf-mono hidden shrink-0 text-[0.55rem] tracking-[0.1em] text-[var(--p-muted)] uppercase xl:block">
            {tpl.brand} · 2026
          </p>
        </div>
      </Shell>
    </Band>
  );
}

export function Testimonials({ tpl, group }: BlockProps) {
  return (
    <Band id="proof">
      <Shell wide className="py-14 md:py-20">
        <SectionHead
          label="In their words"
          title={<>Proof, not promises.</>}
          lead="Composite testimonials written for this concept. Real client references are available on request."
          align="split"
        />
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {group.testimonials.map((item, i) => (
            <figure
              key={item.name}
              className={cn(
                "pf-card flex flex-col justify-between gap-6 p-6",
                i === 1 && "md:-translate-y-3",
              )}
            >
              <blockquote className="text-[0.95rem] leading-relaxed">“{item.quote}”</blockquote>
              <figcaption className="flex items-center gap-3 border-t border-[var(--p-line)] pt-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--p-accent-soft)] text-[0.65rem] font-medium">
                  {item.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <span>
                  <span className="block text-[0.85rem]">{item.name}</span>
                  <span className="pf-label mt-0.5 block normal-case">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="pf-hint mt-6">
          {tpl.brand} · {tpl.design} · sample content for a design demonstration
        </p>
      </Shell>
    </Band>
  );
}

export function Quote({ tpl, group }: BlockProps) {
  return (
    <Band tone="accent">
      <Shell wide className="py-14 md:py-20">
        <div className="mx-auto max-w-[52rem] text-center">
          <Tag>{group.name}</Tag>
          <Display as="p" className="pf-h2 mt-5 leading-[1.12]">
            “{group.testimonials[0]?.quote ?? group.intro}”
          </Display>
          <p className="pf-label mt-6">
            {group.testimonials[0]?.name} · {group.testimonials[0]?.role}
          </p>
          <p className="pf-hint mt-4">{tpl.brand} — concept testimonial</p>
        </div>
      </Shell>
    </Band>
  );
}

export function Faq({ tpl, group }: BlockProps) {
  return (
    <Band>
      <Shell wide className="grid gap-10 py-14 md:py-20 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Label className="pf-accent">Questions</Label>
          <Display as="h2" className="pf-h2 mt-3 max-w-[14ch]">
            Before you ask.
          </Display>
          <p className="mt-4 max-w-[32ch] text-[0.9rem] leading-relaxed text-[var(--p-muted)]">
            Straight answers for {tpl.name.toLowerCase()} clients. Anything missing, the team will
            answer directly.
          </p>
          <Btn href="#contact" variant="ghost" className="mt-6">
            Ask something else
          </Btn>
        </div>
        <Accordion items={group.faqs} />
      </Shell>
    </Band>
  );
}

export function Contact({ tpl, group }: BlockProps) {
  const [sent, setSent] = useState(false);
  return (
    <Band id="contact" tone="surface">
      <Shell wide className="grid gap-10 py-14 md:py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Label className="pf-accent">Start a conversation</Label>
          <Display as="h2" className="pf-h2 mt-3 max-w-[16ch]">
            Tell us what you need.
          </Display>
          <p className="mt-5 max-w-[38ch] text-[0.92rem] leading-relaxed text-[var(--p-muted)]">
            This is a working demonstration form: validation, states and layout all behave, but
            nothing is transmitted or stored.
          </p>
          <dl className="mt-8 space-y-4">
            <div className="border-t border-[var(--p-line)] pt-3">
              <dt className="pf-label">Studio</dt>
              <dd className="mt-1 text-[0.88rem]">14 Kellner Street, Westdene, Bloemfontein</dd>
            </div>
            <div className="border-t border-[var(--p-line)] pt-3">
              <dt className="pf-label">Hours</dt>
              <dd className="mt-1 text-[0.88rem]">Monday to Friday, 08:00–17:00 SAST</dd>
            </div>
            <div className="border-t border-[var(--p-line)] pt-3">
              <dt className="pf-label">Direct</dt>
              <dd className="mt-1 text-[0.88rem]">+27 51 000 0000 · hello@{tpl.slug}.co.za</dd>
            </div>
          </dl>
        </div>
        {sent ? (
          <div className="pf-card flex flex-col justify-center p-7">
            <p className="pf-label pf-accent">Message received</p>
            <p className="pf-display pf-h3 mt-3">Thank you — noted.</p>
            <Note tone="ok">
              In a production build this would open a ticket and email a copy. This concept stores
              nothing.
            </Note>
            <button type="button" className="pf-link mt-5 self-start" onClick={() => setSent(false)}>
              Write another message
            </button>
          </div>
        ) : (
          <form
            className="pf-card p-6"
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name">
                <input required className="pf-input" name="name" autoComplete="name" />
              </Field>
              <Field label="Email">
                <input required type="email" className="pf-input" name="email" autoComplete="email" />
              </Field>
              <Field label="Phone">
                <input className="pf-input" name="phone" autoComplete="tel" inputMode="tel" />
              </Field>
              <Field label="Service">
                <select className="pf-input" name="service" defaultValue={group.capabilities[0]}>
                  {group.capabilities.map((cap) => (
                    <option key={cap}>{cap}</option>
                  ))}
                </select>
              </Field>
            </div>
            <Field label="What are you trying to solve?" className="mt-4">
              <textarea required rows={4} className="pf-input resize-y" name="message" />
            </Field>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <Btn type="submit">{tpl.cta}</Btn>
              <p className="pf-hint max-w-[19rem]">
                By sending you agree to the demonstration privacy notice.
              </p>
            </div>
          </form>
        )}
      </Shell>
    </Band>
  );
}

const BLOCKS = {
  stats: Stats,
  features: Features,
  split: Split,
  process: Process,
  gallery: Gallery,
  logos: Logos,
  testimonials: Testimonials,
  quote: Quote,
  faq: Faq,
  contact: Contact,
} satisfies Record<BlockKey, (props: BlockProps) => ReactElement>;

export function Block({ kind, tpl, group }: { kind: BlockKey; tpl: Template; group: Group }) {
  const Component = BLOCKS[kind];
  return <Component tpl={tpl} group={group} />;
}
