import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { PageHero } from "@/components/site/PageHero";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Reveal, Section } from "@/components/site/primitives";
import { ALL_TEMPLATES, GROUPS, TOTAL_TEMPLATES } from "@/lib/portfolio/groups";
import { FONTS } from "@/lib/portfolio/themes";
import { absoluteUrl, MAILTO, SITE } from "@/lib/site";

const TITLE = "Portfolio — 100 Website & Application Templates | Obsidian Labs";
const DESCRIPTION =
  "A hundred working website and application concepts across ten industries, each with its own visual theme, navigation, hero, footer and functional product module: banking, healthcare, retail, hospitality, education, technology, property, automotive, professional services and creative.";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content: GROUPS.map((g) => `${g.name} website templates`).join(", "),
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: absoluteUrl("/portfolio") },
      { property: "og:type", content: "website" },
      { property: "og:image", content: absoluteUrl("/images/portfolio/banking.jpg") },
      { property: "og:image:width", content: "1392" },
      { property: "og:image:height", content: "752" },
      { property: "og:image:alt", content: "A hundred website and app templates across ten industries" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: absoluteUrl("/images/portfolio/banking.jpg") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/portfolio") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Obsidian Labs portfolio — 100 templates",
          url: absoluteUrl("/portfolio"),
          description: DESCRIPTION,
          isPartOf: { "@type": "WebSite", name: `${SITE.name} Software`, url: SITE.url },
          hasPart: GROUPS.map((group) => ({
            "@type": "CollectionPage",
            name: group.name,
            url: absoluteUrl(`/portfolio/${group.slug}`),
            numberOfItems: group.templates.length,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
            { "@type": "ListItem", position: 2, name: "Portfolio", item: absoluteUrl("/portfolio") },
          ],
        }),
      },
    ],
  }),
  component: PortfolioIndex,
});

function PortfolioIndex() {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState("all");

  const visibleGroups = GROUPS.filter((group) => theme === "all" || group.slug === theme);
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return ALL_TEMPLATES.filter(({ group, tpl }) =>
      `${tpl.brand} ${tpl.name} ${tpl.design} ${tpl.headline} ${group.name}`
        .toLowerCase()
        .includes(q),
    ).slice(0, 24);
  }, [query]);

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <PageHero
          eyebrow="Portfolio · 2026"
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
          title={
            <>
              One hundred templates.
              <br />
              Ten industries.
            </>
          }
          lead="A portfolio built as a system rather than a gallery: ten business groups, each with a central visual theme and ten templates that explore different business sub-types, design languages and working product experiences. Every template has its own navigation, hero, footer, composition and industry module."
          meta={[
            { label: "Groups", value: "Ten industries" },
            { label: "Templates", value: `${TOTAL_TEMPLATES}, all working` },
            { label: "Themes", value: "10 themes × 10 subthemes" },
            { label: "Chrome", value: "10 headers · heroes · footers" },
          ]}
        />

        <Section index="01" label="The collection">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="display-md max-w-[20ch]">
                Ten groups. One hundred independent design decisions.
              </h2>
              <p className="mt-4 max-w-[62ch] text-sm leading-relaxed text-muted-foreground">
                Each group carries a central theme adapted from a free 21st.dev community theme —
                its palette, typography, corner language and rules. Inside the group, ten templates
                change tone, accent, display face, navigation structure, hero, footer and module
                data, so no two read as the same site with a different logo.
              </p>
            </div>
            <div className="flex items-baseline gap-6">
              <p className="font-mono text-[0.62rem] tracking-[0.16em] text-muted-foreground uppercase">
                {TOTAL_TEMPLATES} templates
              </p>
              <p className="font-mono text-[0.62rem] tracking-[0.16em] text-muted-foreground uppercase">
                10 themes
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-y border-[color:var(--rule)] py-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => setTheme("all")}
                className={`label-mono border px-3 py-2 transition-colors ${
                  theme === "all"
                    ? "border-[#0b0b0c] bg-[#0b0b0c] text-[#f6f2e9]"
                    : "border-[color:var(--rule)] text-muted-foreground hover:border-[#0b0b0c]"
                }`}
              >
                All groups
              </button>
              {GROUPS.map((group) => (
                <button
                  key={group.slug}
                  type="button"
                  onClick={() => setTheme(group.slug)}
                  className={`label-mono border px-3 py-2 transition-colors ${
                    theme === group.slug
                      ? "border-[#0b0b0c] bg-[#0b0b0c] text-[#f6f2e9]"
                      : "border-[color:var(--rule)] text-muted-foreground hover:border-[#0b0b0c]"
                  }`}
                >
                  {group.name.split(" &")[0]}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 border border-[color:var(--rule)] px-3">
              <span aria-hidden className="text-muted-foreground">
                ⌕
              </span>
              <label htmlFor="portfolio-search" className="sr-only">
                Search the 100 templates
              </label>
              <input
                id="portfolio-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search a template, industry or design language"
                className="w-full min-w-[16rem] bg-transparent py-2.5 text-sm outline-none placeholder:text-muted-foreground/70"
              />
            </div>
          </div>

          {query.trim() && (
            <div className="mt-6 border border-[color:var(--rule)] p-5">
              <div className="flex items-baseline justify-between gap-4">
                <p className="label-mono text-[color:var(--gold-text)]">
                  {results.length} {results.length === 1 ? "match" : "matches"}
                </p>
                <button type="button" onClick={() => setQuery("")} className="label-mono underline">
                  Clear
                </button>
              </div>
              {results.length === 0 ? (
                <p className="mt-3 text-sm text-muted-foreground">
                  Nothing matches that search. Try an industry, a brand or a design language such as
                  “brutalism”.
                </p>
              ) : (
                <ul className="mt-4 grid gap-px bg-[color:var(--rule)] sm:grid-cols-2 lg:grid-cols-3">
                  {results.map(({ group, tpl }) => (
                    <li key={`${group.slug}-${tpl.slug}`} className="bg-[#f6f2e9] p-4">
                      <a href={`/portfolio/${group.slug}/${tpl.slug}`} className="group block">
                        <p className="label-mono text-muted-foreground">{group.name}</p>
                        <p className="mt-1 font-serif text-xl group-hover:text-[color:var(--gold-text)]">
                          {tpl.brand}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {tpl.name} · {tpl.design}
                        </p>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-14">
            {visibleGroups.map((group, index) => (
              <Reveal key={group.slug} delay={(index % 2) * 80}>
                <article className="pfo-card group">
                  <a href={`/portfolio/${group.slug}`} className="block">
                    <div className="relative overflow-hidden">
                      <img
                        src={group.image}
                        alt={`${group.name} templates`}
                        loading={index < 2 ? "eager" : "lazy"}
                        className="aspect-[16/9] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/80 to-transparent p-5">
                        <div>
                          <p className="label-mono text-[#f6f2e9]/70">
                            {String(index + 1).padStart(2, "0")} · 10 templates
                          </p>
                          <h3 className="mt-1 font-serif text-2xl text-[#f6f2e9]">{group.name}</h3>
                        </div>
                        <span className="label-mono hidden bg-[#f6f2e9] px-3 py-2 text-[#0b0b0c] sm:inline-block">
                          Open group →
                        </span>
                      </div>
                    </div>
                  </a>
                  <div className="p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="label-mono text-[color:var(--gold-text)]">
                        {group.theme.name}
                      </p>
                      <div className="flex gap-1" aria-hidden>
                        {[
                          group.theme.light.bg,
                          group.theme.light.surfaceAlt,
                          group.theme.light.fg,
                          group.templates[0]?.accent,
                          group.templates[4]?.accent,
                        ].map((colour, i) => (
                          <span
                            key={`${colour}-${i}`}
                            className="h-3.5 w-3.5 border border-[color:var(--rule)]"
                            style={{ backgroundColor: colour }}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{group.intro}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {group.capabilities.slice(0, 4).map((capability) => (
                        <span
                          key={capability}
                          className="label-mono border border-[color:var(--rule)] px-2 py-1 text-[0.55rem] text-muted-foreground"
                        >
                          {capability}
                        </span>
                      ))}
                    </div>
                    <ul className="mt-5 grid gap-x-4 gap-y-1.5 border-t border-[color:var(--rule)] pt-4 sm:grid-cols-2">
                      {group.templates.map((tpl) => (
                        <li key={tpl.slug}>
                          <a
                            href={`/portfolio/${group.slug}/${tpl.slug}`}
                            className="flex items-baseline justify-between gap-2 py-1 text-[0.8rem] text-muted-foreground transition-colors hover:text-[#0b0b0c]"
                          >
                            <span className="truncate">{tpl.name}</span>
                            <span
                              aria-hidden
                              className="h-2 w-2 shrink-0"
                              style={{ backgroundColor: tpl.accent }}
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section index="02" label="Anatomy" tone="dark">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <h2 className="display-lg max-w-[16ch] text-[#f6f2e9]">
                What is actually different between them.
              </h2>
              <p className="mt-6 max-w-[42ch] text-sm leading-relaxed text-muted-foreground">
                Ten of each component type are composed differently per template. The theme decides
                colour and type; the variant decides structure; the module decides what the page
                actually does.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {Object.entries(FONTS)
                  .slice(0, 6)
                  .map(([key, stack]) => (
                    <span
                      key={key}
                      className="border border-white/15 px-3 py-2 text-[0.8rem] text-[#f6f2e9]/80"
                      style={{ fontFamily: stack }}
                    >
                      {key}
                    </span>
                  ))}
              </div>
            </Reveal>
            <Reveal delay={80} className="lg:col-span-7">
              <ul className="grid gap-px bg-white/10 sm:grid-cols-2">
                {[
                  ["10 themes", "Each group has a central palette, type pairing, radius and rule weight."],
                  ["10 headers", "Brutal bar, mega menu, centred, rail, command search, floating pill, underline, split, ticker, editorial."],
                  ["10 heroes", "Split form, full-bleed, editorial, product window, search, stats, slideshow, collage, monolith, framed."],
                  ["10 footers", "Columns, giant wordmark, accent band, sitemap, contact, brutal grid, editorial, app, social, minimal."],
                  ["10 modules", "Banking, healthcare, retail, hospitality, education, technology, property, automotive, professional, creative."],
                  ["100 compositions", "Order, density, tone, accent and type change per template, with working state and sample data."],
                ].map(([title, body]) => (
                  <li key={title} className="bg-[#0b0b0c] p-6">
                    <h3 className="font-serif text-xl text-[#f6f2e9]">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>

        <Section index="03" label="Built free">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="display-md max-w-[22ch]">
                Built with free 21st.dev material and no design debt.
              </h2>
              <p className="mt-5 max-w-[62ch] text-sm leading-relaxed text-muted-foreground">
                The ten group themes are adapted from free 21st.dev community themes, which are free
                to retrieve. Component code retrieval on 21st.dev is metered — two copies a day on
                the free tier — so the headers, heroes, footers and modules here are original
                implementations styled against those theme tokens and free catalogue references,
                rather than copied paid components. No AI generation credits, paid templates or
                subscriptions were used.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/exhibition" className="lux-btn-ghost">
                  The original six
                </a>
                <a href={MAILTO} className="lux-btn">
                  Commission a bespoke template
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <ul className="divide-y divide-[color:var(--rule)] border-y border-[color:var(--rule)]">
                {GROUPS.map((group) => (
                  <li key={group.slug} className="flex items-baseline justify-between gap-4 py-3">
                    <span className="text-sm">{group.name}</span>
                    <span className="label-mono shrink-0 text-muted-foreground">
                      {group.theme.reference.replace(" — 21st.dev", "")}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="label-mono mt-4 text-muted-foreground">
                Theme references · free 21st.dev community themes
              </p>
            </div>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
