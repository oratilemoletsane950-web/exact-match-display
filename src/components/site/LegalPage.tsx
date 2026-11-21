import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { ScrollProgress } from "@/components/site/primitives";
import { legalLinks, MAILTO, SITE } from "@/lib/site";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export function LegalPage({
  title,
  eyebrow,
  updated,
  intro,
  sections,
  children,
}: {
  title: string;
  eyebrow: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  children?: ReactNode;
}) {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main id="main-content">
        <section className="surface-dark grain pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="shell">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="display-lg mt-6 max-w-[24ch] text-[#f6f2e9]">{title}</h1>
            <p className="mt-6 max-w-[62ch] text-sm leading-relaxed text-[#f6f2e9]/65">{intro}</p>
            <p className="label-mono mt-8 text-[#f6f2e9]/60">Last updated · {updated}</p>
          </div>
        </section>

        <div className="shell grid gap-12 py-16 md:grid-cols-12 md:py-24">
          <aside className="md:col-span-3">
            <div className="md:sticky md:top-28">
              <p className="label-mono text-muted-foreground">On this page</p>
              <ol className="mt-4 space-y-2">
                {sections.map((section, i) => (
                  <li key={section.heading}>
                    <a
                      href={`#s-${i + 1}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-[color:var(--gold-text)]"
                    >
                      {String(i + 1).padStart(2, "0")} {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
              <div className="mt-8 border-t border-[color:var(--rule)] pt-5">
                <p className="label-mono text-muted-foreground">Related</p>
                <ul className="mt-3 space-y-2">
                  {legalLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-[color:var(--gold-text)]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          <article className="md:col-span-9 lg:col-span-8">
            <div className="space-y-12">
              {sections.map((section, i) => (
                <section key={section.heading} id={`s-${i + 1}`} className="scroll-mt-28">
                  <h2 className="font-serif text-2xl md:text-3xl">
                    <span className="mr-3 text-[color:var(--gold-text)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {section.heading}
                  </h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-4 max-w-[72ch] text-sm leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="mt-5 max-w-[72ch] space-y-2.5">
                      {section.list.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed">
                          <span
                            aria-hidden
                            className="mt-2 h-1 w-1 shrink-0 bg-[color:var(--gold)]"
                          />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <div className="mt-16 border-t border-[color:var(--rule)] pt-8">
              <p className="label-mono text-muted-foreground">Questions about this document</p>
              <a
                href={MAILTO}
                className="link-underline hover:link-underline-hover mt-3 inline-block text-sm"
              >
                {SITE.email}
              </a>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {SITE.legalName} trading as {SITE.name} · {SITE.city}, {SITE.region}, {SITE.country}
              </p>
            </div>

            {children}
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
