import { Link, createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Reveal, ScrollProgress, Section } from "@/components/site/primitives";
import { absoluteUrl, INDUSTRIES, KEYWORDS, MAILTO, SITE } from "@/lib/site";

const TITLE = "Exhibition — Website & App Design Showcase | Obsidian Labs";
const DESCRIPTION =
  "Six working website templates, one per industry, designed and built by Obsidian Labs Software in Bloemfontein: hospitality, real estate, legal, healthcare, retail and dining.";

const IMAGES: Record<string, string> = {
  hospitality: "/images/hotel-suite.jpg",
  "real-estate": "/images/estate.jpg",
  legal: "/images/legal.jpg",
  healthcare: "/images/clinic.jpg",
  retail: "/images/retail.jpg",
  dining: "/images/dining.jpg",
};

export const Route = createFileRoute("/exhibition/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: KEYWORDS.exhibition.join(", ") },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: absoluteUrl("/exhibition") },
      { property: "og:type", content: "website" },
      { property: "og:image", content: absoluteUrl("/images/hotel-suite.jpg") },
      { property: "og:image:width", content: "1392" },
      { property: "og:image:height", content: "752" },
      { property: "og:image:alt", content: "The Obsidian Labs industry design exhibition" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: absoluteUrl("/images/hotel-suite.jpg") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/exhibition") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              name: "Obsidian Labs design exhibition",
              url: absoluteUrl("/exhibition"),
              description: DESCRIPTION,
              isPartOf: { "@type": "WebSite", name: `${SITE.name} Software`, url: SITE.url },
              hasPart: INDUSTRIES.map((industry) => ({
                "@type": "CreativeWork",
                name: `${industry.demoBrand} — ${industry.demoKind}`,
                url: absoluteUrl(`/exhibition/${industry.slug}`),
                creator: { "@type": "Organization", name: SITE.name },
                genre: "Website design concept",
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Exhibition",
                  item: absoluteUrl("/exhibition"),
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: ExhibitionPage,
});

function ExhibitionPage() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main id="main-content">
        <PageHero
          eyebrow="Exhibition"
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Exhibition" }]}
          title={
            <>
              The work,
              <br />
              not the pitch.
            </>
          }
          lead="Six complete templates, one for each industry we serve. Each is an original concept with its own design language — built to show how the same standards of hierarchy, contrast, rhythm and restraint apply to very different customers."
          meta={[
            { label: "Templates", value: "Six, one per industry" },
            { label: "Built by", value: `${SITE.name} Software` },
            { label: "Status", value: "Concept designs" },
            { label: "Studio", value: `${SITE.city}, ${SITE.countryCode}` },
          ]}
        />

        <Section index="01" label="The collection">
          <div className="grid gap-14 md:grid-cols-2 lg:gap-x-12 lg:gap-y-20">
            {INDUSTRIES.map((industry, i) => (
              <Reveal
                key={industry.slug}
                delay={(i % 2) * 90}
                className={i % 2 === 1 ? "md:mt-16" : ""}
              >
                <Link
                  to="/exhibition/$slug"
                  params={{ slug: industry.slug }}
                  className="group block"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={IMAGES[industry.slug]}
                      alt={`${industry.demoBrand} — ${industry.demoKind} template`}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                      loading={i < 2 ? "eager" : "lazy"}
                    />
                    <span className="label-mono absolute top-4 left-4 bg-[#0b0b0c]/75 px-3 py-2 text-[#f6f2e9] backdrop-blur-sm">
                      {String(i + 1).padStart(2, "0")} · {industry.name}
                    </span>
                  </div>
                  <div className="mt-6 flex flex-wrap items-baseline justify-between gap-3 border-b border-[color:var(--rule)] pb-4">
                    <div>
                      <h2 className="font-serif text-3xl transition-colors group-hover:text-[color:var(--gold-text)]">
                        {industry.demoBrand}
                      </h2>
                      <p className="mt-1 text-sm text-muted-foreground">{industry.demoKind}</p>
                    </div>
                    <span className="label-mono text-[color:var(--gold-text)]">
                      Open template →
                    </span>
                  </div>
                  <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">
                    {industry.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-4">
                    <span className="label-mono text-muted-foreground">
                      {industry.designLanguage}
                    </span>
                    <span className="flex gap-1.5">
                      {industry.palette.map((colour) => (
                        <span
                          key={colour}
                          title={colour}
                          className="h-3.5 w-3.5 border border-[color:var(--rule)]"
                          style={{ backgroundColor: colour }}
                        />
                      ))}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section index="02" label="Standard" tone="dark">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <h2 className="display-lg max-w-[16ch] text-[#f6f2e9]">
                What stays the same across every template.
              </h2>
              <p className="mt-6 max-w-[40ch] text-sm leading-relaxed text-muted-foreground">
                Style changes by industry. Discipline does not. These are the rules every page in
                the exhibition is held to.
              </p>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-7">
              <ul className="grid gap-px bg-white/10 sm:grid-cols-2">
                {[
                  [
                    "One type scale",
                    "Two families at most, with a fixed set of sizes used everywhere.",
                  ],
                  ["One grid", "A single column grid and spacing rhythm from phone to desktop."],
                  [
                    "One action per page",
                    "The primary next step is repeated but never competed with.",
                  ],
                  [
                    "Contrast as a rule",
                    "Body text and interface elements meet WCAG AA at minimum.",
                  ],
                  [
                    "Motion with restraint",
                    "Transitions explain hierarchy; they never delay reading.",
                  ],
                  ["Real content", "Menus, rates, names and policies — not lorem ipsum."],
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

        <section className="surface-stone">
          <div className="shell flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-end md:py-24">
            <Reveal>
              <p className="eyebrow">Your industry</p>
              <h2 className="display-lg mt-6 max-w-[20ch]">
                Seen something close to your business?
              </h2>
              <p className="mt-5 max-w-[50ch] text-sm leading-relaxed text-muted-foreground">
                The templates are concepts, but the process behind them is how client work is built.
                Tell us which industry is closest to yours and we will show you what a bespoke
                version would involve.
              </p>
            </Reveal>
            <Reveal delay={100} className="flex flex-col gap-4">
              <a href={MAILTO} className="lux-btn">
                Start a project
              </a>
              <Link
                to="/industries"
                className="label-mono link-underline hover:link-underline-hover text-[color:var(--gold-text)]"
              >
                Industries we serve →
              </Link>
              <Link
                to="/portfolio"
                className="label-mono link-underline hover:link-underline-hover text-[color:var(--gold-text)]"
              >
                The 100-template portfolio →
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
