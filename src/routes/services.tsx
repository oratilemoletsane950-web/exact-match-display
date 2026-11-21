import { Link, createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { GoldRule, Reveal, ScrollProgress, Section } from "@/components/site/primitives";
import { absoluteUrl, MAILTO, SERVICE_FAQS, SERVICES, SITE } from "@/lib/site";

const TITLE = "Website, App & System Development | Obsidian Labs Software";
const DESCRIPTION =
  "Custom website design, mobile app development and business systems from Obsidian Labs Software in Bloemfontein — e-commerce, booking engines, CRM, inventory and integrations with South African payment and courier services.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content: [
          "custom website design",
          "business website design South Africa",
          "e-commerce website development South Africa",
          "mobile app development South Africa",
          "online booking system South Africa",
          "custom CRM system development",
          "inventory management system South Africa",
          "software development Bloemfontein",
        ].join(", "),
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: absoluteUrl("/services") },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/services") }],
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
                  name: "Services",
                  item: absoluteUrl("/services"),
                },
              ],
            },
            ...SERVICES.map((service) => ({
              "@type": "Service",
              name: service.title,
              serviceType: service.title,
              description: service.short,
              url: absoluteUrl(`/services#${service.slug}`),
              provider: {
                "@type": "Organization",
                name: SITE.name,
                address: {
                  "@type": "PostalAddress",
                  addressLocality: SITE.city,
                  addressRegion: SITE.region,
                  addressCountry: SITE.countryCode,
                },
              },
              areaServed: { "@type": "Country", name: "South Africa" },
            })),
            {
              "@type": "FAQPage",
              mainEntity: SERVICE_FAQS.map((faq) => ({
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
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main id="main-content">
        <PageHero
          eyebrow="Services"
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
          title={
            <>
              Websites, applications
              <br />
              and the systems behind them.
            </>
          }
          lead="Three disciplines, one design language. We work in fixed scopes with a defined launch date, so you know what is being built, what it costs and when it goes live."
          meta={[
            { label: "Studio", value: `${SITE.city}, ${SITE.countryCode}` },
            { label: "Delivery", value: "Fixed scope, staged review" },
            { label: "Typical website", value: "4–8 weeks" },
            { label: "Typical platform", value: "8–16 weeks" },
          ]}
        />

        {SERVICES.map((service, index) => (
          <Section
            key={service.slug}
            id={service.slug}
            index={service.index}
            label={service.title}
            tone={index % 2 === 0 ? "light" : "stone"}
          >
            <div className="grid gap-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-6">
                <h2 className="display-md max-w-[20ch]">{service.lead}</h2>
                {service.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-6 max-w-[58ch] text-sm leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
                <GoldRule className="mt-10" />
                <div className="mt-8">
                  <p className="label-mono text-muted-foreground">Delivered in a build</p>
                  <ol className="mt-4 space-y-3">
                    {service.deliverables.map((item, i) => (
                      <li key={item} className="flex gap-4 text-sm">
                        <span className="label-mono text-[color:var(--gold-text)]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>

              <Reveal delay={110} className="lg:col-span-6">
                <div className="border border-[color:var(--rule)] p-8 lg:p-10">
                  <p className="label-mono text-muted-foreground">What this covers</p>
                  <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-snug">
                        <span
                          aria-hidden
                          className="mt-1.5 h-1 w-1 shrink-0 bg-[color:var(--gold)]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href={MAILTO} className="lux-btn-ghost mt-9 w-full sm:w-auto">
                    Discuss {service.title.toLowerCase()}
                  </a>
                </div>
              </Reveal>
            </div>
          </Section>
        ))}

        <Section index="04" label="Engagement">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <h2 className="display-lg max-w-[16ch]">How the commercial side works.</h2>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-7">
              <dl className="divide-y divide-[color:var(--rule)]">
                {[
                  [
                    "Scope and quote",
                    "A short discovery conversation, then a fixed-scope proposal with milestones, deliverables and a launch date.",
                  ],
                  [
                    "Payment structure",
                    "A deposit to begin, a payment at design sign-off and the balance before launch. Larger platforms are staged across milestones.",
                  ],
                  [
                    "Revisions",
                    "Two structured revision rounds are included at design and at build, so feedback lands inside a process rather than after it.",
                  ],
                  [
                    "Ownership",
                    "On final payment you own the design files and the codebase, subject to the licences of any third-party libraries used.",
                  ],
                  [
                    "After launch",
                    "Care plans cover hosting, monitoring, backups, security updates and a monthly allowance of changes with a response commitment.",
                  ],
                ].map(([term, detail]) => (
                  <div key={term} className="grid gap-3 py-6 md:grid-cols-12">
                    <dt className="label-mono text-[color:var(--gold-text)] md:col-span-4">
                      {term}
                    </dt>
                    <dd className="text-sm leading-relaxed text-muted-foreground md:col-span-8">
                      {detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Section>

        <Section index="05" label="Questions" tone="stone">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <h2 className="display-lg max-w-[16ch]">Before you brief us.</h2>
              <p className="mt-6 max-w-[38ch] text-sm leading-relaxed text-muted-foreground">
                The questions clients ask most often about scope, ownership, integration and what
                happens after launch.
              </p>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-8">
              <div className="divide-y divide-[color:var(--rule)] border-y border-[color:var(--rule)]">
                {SERVICE_FAQS.map((faq) => (
                  <details key={faq.q} className="group py-5">
                    <summary className="flex cursor-pointer items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                      <h3 className="font-serif text-xl leading-snug md:text-2xl">{faq.q}</h3>
                      <span
                        aria-hidden
                        className="mt-1 shrink-0 text-lg text-[color:var(--gold-text)] transition-transform duration-300 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-4 max-w-[68ch] text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </Section>

        <section className="surface-dark grain">
          <div className="shell flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-end md:py-28">
            <Reveal>
              <p className="eyebrow">Next step</p>
              <h2 className="display-lg mt-6 max-w-[18ch] text-[#f6f2e9]">
                Send the brief. We will send the plan.
              </h2>
            </Reveal>
            <Reveal delay={100} className="flex flex-col items-start gap-5">
              <a href={MAILTO} className="lux-btn">
                Email the studio
              </a>
              <Link
                to="/exhibition"
                className="label-mono link-underline hover:link-underline-hover text-[#f6f2e9]/70"
              >
                See the exhibition first →
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
