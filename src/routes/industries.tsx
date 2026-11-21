import { Link, createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Reveal, ScrollProgress, Section } from "@/components/site/primitives";
import { absoluteUrl, INDUSTRIES, INDUSTRY_FAQS, KEYWORDS, MAILTO, SITE } from "@/lib/site";

const TITLE = "Industries We Build Software For | Obsidian Labs Software";
const DESCRIPTION =
  "Software, websites and apps for hospitality, real estate, legal, healthcare, retail and dining businesses. Obsidian Labs Software works from Bloemfontein with clients across South Africa.";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: KEYWORDS.industries.join(", ") },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: absoluteUrl("/industries") },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/industries") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Industries",
                  item: absoluteUrl("/industries"),
                },
              ],
            },
            {
              "@type": "CollectionPage",
              name: "Industries served by Obsidian Labs Software",
              url: absoluteUrl("/industries"),
              hasPart: INDUSTRIES.map((industry) => ({
                "@type": "WebPage",
                name: `${industry.name} software`,
                url: absoluteUrl(`/exhibition/${industry.slug}`),
              })),
            },
            {
              "@type": "FAQPage",
              mainEntity: INDUSTRY_FAQS.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Industries"
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Industries" }]}
          title={
            <>
              Six industries.
              <br />
              Six ways of persuading.
            </>
          }
          lead="A guest, a seller, a patient and a diner decide differently. We build for the decision each customer actually makes — and show it in a working template for every industry we serve."
          meta={[
            {
              label: "Specialist depth",
              value: "Hospitality, property, legal, health, retail, dining",
            },
            { label: "Based in", value: `${SITE.city}, ${SITE.region}` },
          ]}
        />

        {INDUSTRIES.map((industry, i) => (
          <Section
            key={industry.slug}
            id={industry.slug}
            index={String(i + 1).padStart(2, "0")}
            label={industry.name}
            tone={i % 2 === 0 ? "light" : "stone"}
          >
            <div className="grid gap-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-7">
                <h2 className="display-md max-w-[22ch]">{industry.summary}</h2>
                <p className="mt-6 max-w-[62ch] text-sm leading-relaxed text-muted-foreground">
                  {industry.detail}
                </p>

                <div className="mt-10 grid gap-8 sm:grid-cols-2">
                  <div>
                    <p className="label-mono text-[color:var(--gold)]">What we build</p>
                    <ul className="mt-4 space-y-2.5">
                      {industry.build.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-snug">
                          <span
                            aria-hidden
                            className="mt-1.5 h-1 w-1 shrink-0 bg-[color:var(--gold)]"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="label-mono text-[color:var(--gold)]">Design principles</p>
                    <ul className="mt-4 space-y-2.5">
                      {industry.principles.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-snug">
                          <span
                            aria-hidden
                            className="mt-1.5 h-1 w-1 shrink-0 bg-[color:var(--rule-strong)]"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100} className="lg:col-span-5">
                <div className="border border-[color:var(--rule)] p-7 lg:sticky lg:top-28">
                  <p className="label-mono text-muted-foreground">Exhibition template</p>
                  <h3 className="mt-4 font-serif text-3xl">{industry.demoBrand}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{industry.demoKind}</p>
                  <p className="mt-5 text-sm leading-relaxed">“{industry.demoLine}”</p>
                  <dl className="mt-6 space-y-2 border-t border-[color:var(--rule)] pt-5">
                    <div className="flex justify-between gap-4">
                      <dt className="label-mono text-muted-foreground">Language</dt>
                      <dd className="text-right text-xs">{industry.designLanguage}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <dt className="label-mono text-muted-foreground">Palette</dt>
                      <dd className="flex gap-1.5">
                        {industry.palette.map((colour) => (
                          <span
                            key={colour}
                            title={colour}
                            className="h-4 w-4 border border-[color:var(--rule)]"
                            style={{ backgroundColor: colour }}
                          />
                        ))}
                      </dd>
                    </div>
                  </dl>
                  <Link
                    to="/exhibition/$slug"
                    params={{ slug: industry.slug }}
                    className="lux-btn-ghost mt-7 w-full"
                  >
                    Open the template
                  </Link>
                </div>
              </Reveal>
            </div>
          </Section>
        ))}

        <Section index="07" label="Still unsure?" tone="dark">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <h2 className="display-lg max-w-[16ch] text-[#f6f2e9]">Not one of the six?</h2>
              <p className="mt-6 max-w-[40ch] text-sm leading-relaxed text-muted-foreground">
                If the business is owner-led and the software has to earn its place, the process is
                the same. Tell us what the business does and we will tell you honestly whether we
                are the right studio for it.
              </p>
              <a href={MAILTO} className="lux-btn mt-8">
                Email the studio
              </a>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-7">
              <div className="divide-y divide-white/10 border-y border-white/10">
                {INDUSTRY_FAQS.map((faq) => (
                  <details key={faq.q} className="group py-5">
                    <summary className="flex cursor-pointer items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                      <h3 className="font-serif text-xl leading-snug text-[#f6f2e9] md:text-2xl">
                        {faq.q}
                      </h3>
                      <span
                        aria-hidden
                        className="mt-1 shrink-0 text-lg text-[#c9ab77] transition-transform duration-300 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-4 max-w-[66ch] text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
