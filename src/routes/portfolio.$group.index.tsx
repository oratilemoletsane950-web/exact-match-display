import { createFileRoute, notFound } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Reveal, Section } from "@/components/site/primitives";
import { GROUPS, GROUP_BY_SLUG } from "@/lib/portfolio/groups";
import { FONTS } from "@/lib/portfolio/themes";
import { absoluteUrl, MAILTO, SITE } from "@/lib/site";

export const Route = createFileRoute("/portfolio/$group/")({
  loader: ({ params }) => {
    const group = GROUP_BY_SLUG[params.group];
    if (!group) throw notFound();
    return { group };
  },
  head: ({ loaderData }) => {
    const group = loaderData?.group;
    if (!group) return {};
    const title = `${group.name} — 10 Website & App Templates | Obsidian Labs`;
    const description = `${group.name}: ten working template concepts by Obsidian Labs, each with its own design language and a functional ${(group.capabilities[0] ?? "interactive").toLowerCase()} experience. ${group.intro}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: [group.name, ...group.capabilities, ...group.templates.map((t) => t.name)].join(", ") },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: absoluteUrl(`/portfolio/${group.slug}`) },
        { property: "og:type", content: "website" },
        { property: "og:image", content: absoluteUrl(group.image) },
        { property: "og:image:width", content: "1392" },
        { property: "og:image:height", content: "752" },
        { property: "og:image:alt", content: `${group.name} template concepts by Obsidian Labs` },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: absoluteUrl(group.image) },
      ],
      links: [{ rel: "canonical", href: absoluteUrl(`/portfolio/${group.slug}`) }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `${group.name} templates`,
            url: absoluteUrl(`/portfolio/${group.slug}`),
            description,
            isPartOf: {
              "@type": "CollectionPage",
              name: "Obsidian Labs portfolio — 100 templates",
              url: absoluteUrl("/portfolio"),
            },
            hasPart: group.templates.map((tpl) => ({
              "@type": "CreativeWork",
              name: `${tpl.brand} — ${tpl.name}`,
              url: absoluteUrl(`/portfolio/${group.slug}/${tpl.slug}`),
              genre: tpl.design,
              creator: { "@type": "Organization", name: SITE.name },
            })),
          }),
        },
      ],
    };
  },
  component: GroupPage,
});

function GroupPage() {
  const { group } = Route.useLoaderData();
  const theme = group.theme;
  const index = GROUPS.findIndex((g) => g.slug === group.slug);
  const previous = GROUPS[(index - 1 + GROUPS.length) % GROUPS.length] ?? group;
  const next = GROUPS[(index + 1) % GROUPS.length] ?? group;

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <PageHero
          eyebrow={`Portfolio · Group ${String(index + 1).padStart(2, "0")} of 10`}
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Portfolio", href: "/portfolio" },
            { label: group.name },
          ]}
          title={group.name}
          lead={group.intro}
          meta={[
            { label: "Templates", value: "Ten, all working" },
            { label: "Central theme", value: theme.name },
            { label: "Theme reference", value: theme.reference },
            { label: "Functionality", value: group.capabilities.slice(0, 2).join(" · ") },
          ]}
        />

        <Section index="01" label="Theme">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="display-md max-w-[18ch]">{theme.name}</h2>
              <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-muted-foreground">
                {theme.idea}
              </p>
              <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="border-t border-[color:var(--rule)] pt-3">
                  <dt className="label-mono text-muted-foreground">Display face</dt>
                  <dd className="mt-1.5 text-lg" style={{ fontFamily: FONTS[theme.display] }}>
                    {theme.display}
                  </dd>
                </div>
                <div className="border-t border-[color:var(--rule)] pt-3">
                  <dt className="label-mono text-muted-foreground">Text face</dt>
                  <dd className="mt-1.5 text-lg" style={{ fontFamily: FONTS[theme.body] }}>
                    {theme.body}
                  </dd>
                </div>
                <div className="border-t border-[color:var(--rule)] pt-3">
                  <dt className="label-mono text-muted-foreground">Corner language</dt>
                  <dd className="mt-1.5 text-sm">
                    {theme.corners} · {theme.radius} radius · {theme.border} border
                  </dd>
                </div>
                <div className="border-t border-[color:var(--rule)] pt-3">
                  <dt className="label-mono text-muted-foreground">Heading treatment</dt>
                  <dd className="mt-1.5 text-sm uppercase">
                    {theme.headings} · {theme.tracking}
                  </dd>
                </div>
              </dl>
              <p className="label-mono mt-6 text-muted-foreground">
                Adapted from a free theme · {theme.reference}
              </p>
            </div>
            <div className="lg:col-span-7">
              <div
                className="border p-6"
                style={{ backgroundColor: theme.light.bg, color: theme.light.fg, borderColor: theme.light.line }}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="label-mono" style={{ color: theme.light.muted }}>
                    Light surface
                  </p>
                  <div className="flex gap-2">
                    {[theme.light.bg, theme.light.surface, theme.light.surfaceAlt, theme.light.fg, group.templates[0]?.accent].map(
                      (colour, i) => (
                        <span key={`${colour}-${i}`} className="h-6 w-6 border" style={{ backgroundColor: colour, borderColor: theme.light.line }} />
                      ),
                    )}
                  </div>
                </div>
                <p className="mt-6 text-3xl" style={{ fontFamily: FONTS[theme.display] }}>
                  {group.templates[0]?.brand}
                </p>
                <p className="mt-2 max-w-[40ch] text-sm leading-relaxed" style={{ color: theme.light.muted }}>
                  {group.templates[0]?.blurb}
                </p>
                <span
                  className="mt-5 inline-flex px-4 py-2 font-mono text-[0.6rem] tracking-[0.14em] uppercase"
                  style={{ backgroundColor: group.templates[0]?.accent, color: group.templates[0]?.accentFg, borderRadius: theme.radius }}
                >
                  {group.templates[0]?.cta}
                </span>
              </div>
              <div
                className="mt-3 border p-6"
                style={{ backgroundColor: theme.dark.bg, color: theme.dark.fg, borderColor: theme.dark.line }}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="label-mono" style={{ color: theme.dark.muted }}>
                    Dark surface
                  </p>
                  <div className="flex gap-2">
                    {[theme.dark.bg, theme.dark.surface, theme.dark.surfaceAlt, theme.dark.fg, group.templates[1]?.accent].map(
                      (colour, i) => (
                        <span key={`${colour}-${i}`} className="h-6 w-6 border" style={{ backgroundColor: colour, borderColor: theme.dark.line }} />
                      ),
                    )}
                  </div>
                </div>
                <p className="mt-6 text-3xl" style={{ fontFamily: FONTS[theme.display] }}>
                  {group.templates[1]?.brand}
                </p>
                <p className="mt-2 max-w-[40ch] text-sm leading-relaxed" style={{ color: theme.dark.muted }}>
                  {group.templates[1]?.blurb}
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section index="02" label="The ten templates">
          <div className="grid gap-8 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
            {group.templates.map((tpl, i) => (
              <Reveal key={tpl.slug} delay={(i % 2) * 70}>
                <a href={`/portfolio/${group.slug}/${tpl.slug}`} className="group block">
                  <div className="relative overflow-hidden border border-[color:var(--rule)]">
                    <img
                      src={group.gallery[i % group.gallery.length]}
                      alt={`${tpl.brand} — ${tpl.name}`}
                      loading={i < 2 ? "eager" : "lazy"}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-[1100ms] group-hover:scale-[1.03]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-25 mix-blend-multiply"
                      style={{ backgroundColor: tpl.accent }}
                    />
                    <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-3">
                      <span className="label-mono bg-[#0b0b0c]/80 px-2 py-1.5 text-[#f6f2e9]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="label-mono bg-[#f6f2e9] px-2 py-1.5 text-[#0b0b0c]">
                        {tpl.tone}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-3 border-b border-[color:var(--rule)] pb-3">
                    <div>
                      <h3 className="font-serif text-2xl transition-colors group-hover:text-[color:var(--gold-text)]">
                        {tpl.brand}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{tpl.name}</p>
                    </div>
                    <span className="h-2.5 w-2.5 shrink-0" style={{ backgroundColor: tpl.accent }} />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tpl.blurb}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="label-mono text-[color:var(--gold-text)]">{tpl.design}</span>
                    <span className="label-mono text-muted-foreground">{tpl.header} header</span>
                    <span className="label-mono text-muted-foreground">{tpl.hero} hero</span>
                    <span className="ml-auto label-mono">Open →</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section index="03" label="Functionality" tone="stone">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="display-md max-w-[20ch]">What every template in this group demonstrates.</h2>
              <p className="mt-5 max-w-[42ch] text-sm leading-relaxed text-muted-foreground">
                The interactive section is shared by the group but driven by each template's own
                sample data, so a supermarket shows groceries, a jeweller shows stones and a sneaker
                store shows drops — with the same working cart, filters and checkout states.
              </p>
              <a href={MAILTO} className="lux-btn mt-7 inline-flex">
                Commission a version
              </a>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid gap-px bg-[color:var(--rule)] sm:grid-cols-2">
                {group.capabilities.map((capability) => (
                  <li key={capability} className="bg-[#f6f2e9] p-5">
                    <p className="text-sm">{capability}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[color:var(--rule)] pt-4">
                <a href={`/portfolio/${previous.slug}`} className="label-mono hover:text-[color:var(--gold-text)]">
                  ← {previous.name}
                </a>
                <a href="/portfolio" className="label-mono hover:text-[color:var(--gold-text)]">
                  All 100 templates
                </a>
                <a href={`/portfolio/${next.slug}`} className="label-mono hover:text-[color:var(--gold-text)]">
                  {next.name} →
                </a>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
