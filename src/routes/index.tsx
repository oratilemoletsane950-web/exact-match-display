import { Link, createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/site/Hero";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { LogoMark } from "@/components/site/Logo";
import {
  Eyebrow,
  GoldRule,
  Marquee,
  Reveal,
  ScrollProgress,
  Section,
  Stat,
} from "@/components/site/primitives";
import { absoluteUrl, HOME_FAQS, INDUSTRIES, KEYWORDS, MAILTO, SERVICES, SITE } from "@/lib/site";

const TITLE = "Obsidian Labs Software | Software Development in Bloemfontein";
const DESCRIPTION =
  "Obsidian Labs Software is a software development company in Bloemfontein, South Africa. We design and build websites, mobile apps and business systems for hospitality, property, legal, healthcare, retail and dining businesses.";

const FEATURED = INDUSTRIES.filter((i) =>
  ["hospitality", "real-estate", "dining"].includes(i.slug),
);

const APPROACH = [
  {
    step: "01",
    title: "Discovery",
    body: "One working session on the business, the customer and the number that matters. We leave with a scope, a page map and a launch date.",
  },
  {
    step: "02",
    title: "Design",
    body: "A design system first — type scale, palette, grid, components — then the pages composed from it. You review the system, not a pile of screenshots.",
  },
  {
    step: "03",
    title: "Build",
    body: "Semantic, responsive front-end work with the systems and integrations behind it. Staged for review on real devices, tested against slow networks.",
  },
  {
    step: "04",
    title: "Launch & care",
    body: "Handover of code, files and documentation, then monitoring, backups, updates and a defined allowance of changes each month.",
  },
];

const DIFFERENTIATORS = [
  {
    title: "Design systems, not pages",
    body: "Every project starts with a type scale, palette, spacing rhythm and component set. Consistency is designed in, so the tenth page looks like it belongs to the first.",
  },
  {
    title: "Built for South African networks",
    body: "Compressed imagery, considered font loading and server-side rendering. A page that takes eight seconds on a phone has already lost the guest.",
  },
  {
    title: "One team, start to finish",
    body: "The people who scope the work design it and build it. Nothing is handed to a second agency or a freelancer you never meet.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: KEYWORDS.home.join(", ") },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:locale", content: "en_ZA" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: absoluteUrl("/") },
      { property: "og:image", content: absoluteUrl("/images/hero.jpg") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "geo.region", content: "ZA-FS" },
      { name: "geo.placename", content: SITE.city },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["Organization", "LocalBusiness"],
              "@id": `${SITE.url}/#organization`,
              name: SITE.name,
              legalName: SITE.legalName,
              alternateName: "Obsidian Labs Software",
              url: SITE.url,
              email: SITE.email,
              description: DESCRIPTION,
              image: absoluteUrl("/images/hero.jpg"),
              priceRange: "R",
              address: {
                "@type": "PostalAddress",
                addressLocality: SITE.city,
                addressRegion: SITE.region,
                addressCountry: SITE.countryCode,
              },
              areaServed: [
                { "@type": "City", name: "Bloemfontein" },
                { "@type": "AdministrativeArea", name: "Free State" },
                { "@type": "Country", name: "South Africa" },
              ],
              knowsAbout: INDUSTRIES.map((i) => `${i.name} software`),
              makesOffer: SERVICES.map((s) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: s.title, description: s.short },
              })),
            },
            {
              "@type": "WebSite",
              "@id": `${SITE.url}/#website`,
              url: SITE.url,
              name: `${SITE.name} Software`,
              inLanguage: "en-ZA",
              publisher: { "@id": `${SITE.url}/#organization` },
            },
            {
              "@type": "Service",
              name: "Software development",
              serviceType:
                "Website design, mobile application development and custom business systems",
              provider: { "@id": `${SITE.url}/#organization` },
              areaServed: { "@type": "Country", name: "South Africa" },
              description: DESCRIPTION,
            },
            {
              "@type": "FAQPage",
              mainEntity: HOME_FAQS.map((faq) => ({
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
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader overlay />
      <main>
        <Hero />

        <Marquee
          items={[
            "Websites",
            "Applications",
            "Business systems",
            "Bloemfontein",
            "Design systems",
            "Direct booking",
            "E-commerce",
            "CRM & inventory",
          ]}
          className="bg-[#efe9dc]"
        />

        {/* ------------------------------------------------------------ studio */}
        <Section id="studio" index="01" label="The studio">
          <div className="grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <h2 className="display-lg max-w-[20ch]">A studio, not an assembly line.</h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5 lg:pt-2">
              <p className="body-lead">
                <strong className="font-normal">Obsidian Labs Software</strong> is a software
                development studio based in {SITE.city}, South Africa. We build the digital front
                door and the systems behind it for companies that intend to be taken seriously.
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                The studio works in small, deliberate engagements: one industry, one audience, one
                commercial purpose at a time. That is why our work does not look like a theme with
                your logo dropped into it — and why it keeps working after launch.
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Six industries, three disciplines, one city. Everything we show in the exhibition is
                designed and built by us.
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Stat value="06" label="Industries with a design language" />
            <Stat value="03" label="Disciplines — web, app, systems" />
            <Stat value="01" label="Studio — Bloemfontein" />
            <Stat value="100%" label="Bespoke interface design" />
          </Reveal>
        </Section>

        {/* ------------------------------------------------------ capabilities */}
        <Section id="capabilities" index="02" label="Capabilities" tone="stone">
          <Reveal>
            <h2 className="display-lg max-w-[22ch]">What we build, and how far it goes.</h2>
            <p className="body-lead mt-7 max-w-[54ch] text-muted-foreground">
              Three disciplines that share one design language, so a website, a booking app and an
              operations dashboard can be delivered as one coherent product.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-px bg-[color:var(--rule)] md:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal
                key={service.slug}
                delay={i * 90}
                className="flex flex-col bg-[color:var(--background)] p-8 lg:p-10"
              >
                <div className="flex items-baseline justify-between">
                  <span className="eyebrow">{service.index}</span>
                  <span aria-hidden className="h-px w-10 bg-[color:var(--gold)] opacity-60" />
                </div>
                <h3 className="mt-6 font-serif text-3xl">{service.title}</h3>
                <p className="mt-4 min-h-[5.5rem] text-sm leading-relaxed text-muted-foreground">
                  {service.short}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {service.items.slice(0, 4).map((item) => (
                    <li key={item} className="flex gap-3 text-sm">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 bg-[color:var(--gold)]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  hash={service.slug}
                  className="label-mono link-underline hover:link-underline-hover mt-8 inline-block text-[color:var(--gold)]"
                >
                  Explore {service.title.toLowerCase()} →
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* --------------------------------------------------------- industries */}
        <Section id="industries" index="03" label="Industries">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <h2 className="display-lg max-w-[22ch]">Every industry reads differently.</h2>
            </Reveal>
            <Reveal delay={100}>
              <Link
                to="/industries"
                className="label-mono link-underline hover:link-underline-hover text-[color:var(--gold)]"
              >
                All industries →
              </Link>
            </Reveal>
          </div>
          <Reveal className="mt-6 max-w-[60ch]">
            <p className="text-sm leading-relaxed text-muted-foreground">
              A hotel guest, a property seller, a patient and a diner are not persuaded by the same
              page. Each industry below has its own template in our exhibition, built around the way
              that customer actually decides.
            </p>
          </Reveal>

          <ol className="mt-14">
            {INDUSTRIES.map((industry, i) => (
              <Reveal
                as="li"
                key={industry.slug}
                delay={i * 50}
                className="group rule-top last:border-b last:border-[color:var(--rule)]"
              >
                <Link
                  to="/exhibition/$slug"
                  params={{ slug: industry.slug }}
                  className="grid items-baseline gap-3 py-7 md:grid-cols-12 md:gap-6"
                >
                  <span className="label-mono text-[color:var(--gold)] md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="md:col-span-4">
                    <h3 className="font-serif text-2xl transition-colors group-hover:text-[color:var(--gold)] md:text-3xl">
                      {industry.name}
                    </h3>
                    <p className="label-mono mt-2 text-muted-foreground">{industry.plural}</p>
                  </div>
                  <p className="max-w-[52ch] text-sm leading-relaxed text-muted-foreground md:col-span-6">
                    {industry.summary}
                  </p>
                  <span
                    aria-hidden
                    className="hidden text-right text-[color:var(--gold)] md:col-span-1 md:block"
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </ol>
        </Section>

        {/* ------------------------------------------------------ selected work */}
        <Section index="04" label="Exhibition" tone="dark">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <h2 className="display-lg max-w-[20ch] text-[#f6f2e9]">
                Capability, shown rather than claimed.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Link
                to="/exhibition"
                className="label-mono link-underline hover:link-underline-hover text-[#c9ab77]"
              >
                Open the full exhibition →
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {FEATURED.map((industry, i) => (
              <Reveal key={industry.slug} delay={i * 90}>
                <Link
                  to="/exhibition/$slug"
                  params={{ slug: industry.slug }}
                  className="group block"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={
                        industry.slug === "hospitality"
                          ? "/images/hotel-suite.jpg"
                          : industry.slug === "real-estate"
                            ? "/images/estate.jpg"
                            : "/images/dining.jpg"
                      }
                      alt={`${industry.demoBrand} — ${industry.demoKind} template by Obsidian Labs`}
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <span className="label-mono absolute top-4 left-4 bg-[#0b0b0c]/70 px-3 py-2 text-[#f6f2e9] backdrop-blur-sm">
                      Concept template
                    </span>
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-2xl text-[#f6f2e9]">{industry.demoBrand}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{industry.demoKind}</p>
                    </div>
                    <span className="label-mono text-[#c9ab77]">{industry.name}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ----------------------------------------------------------- approach */}
        <Section index="05" label="Approach">
          <Reveal>
            <h2 className="display-lg max-w-[20ch]">Four movements, one outcome.</h2>
          </Reveal>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {APPROACH.map((item, i) => (
              <Reveal
                as="li"
                key={item.step}
                delay={i * 80}
                className="border-t border-[color:var(--rule-strong)] pt-6"
              >
                <span className="eyebrow">{item.step}</span>
                <h3 className="mt-4 font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Reveal>
            ))}
          </ol>
        </Section>

        {/* -------------------------------------------------------------- why */}
        <Section index="06" label="Why Obsidian" tone="stone">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <h2 className="display-lg max-w-[14ch]">Standards before style.</h2>
              <GoldRule className="mt-8" />
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                {SITE.legalName} trades as {SITE.name}. We work from {SITE.city} with clients across
                South Africa.
              </p>
            </Reveal>
            <div className="lg:col-span-8">
              <ul>
                {DIFFERENTIATORS.map((item, i) => (
                  <Reveal
                    as="li"
                    key={item.title}
                    delay={i * 80}
                    className="rule-top grid gap-3 py-7 last:border-b last:border-[color:var(--rule)] md:grid-cols-12"
                  >
                    <span className="label-mono text-[color:var(--gold)] md:col-span-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-2xl md:col-span-4">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground md:col-span-6">
                      {item.body}
                    </p>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* -------------------------------------------------------------- faq */}
        <Section id="faq" index="07" label="Questions">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <h2 className="display-lg max-w-[16ch]">Asked before the first call.</h2>
              <p className="mt-6 max-w-[38ch] text-sm leading-relaxed text-muted-foreground">
                Straight answers about working with Obsidian Labs Software — cost, timelines, what
                we build and who owns it.
              </p>
              <a
                href={MAILTO}
                className="label-mono link-underline hover:link-underline-hover mt-8 inline-block text-[color:var(--gold)]"
              >
                Ask something else →
              </a>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-8">
              <div className="divide-y divide-[color:var(--rule)] border-y border-[color:var(--rule)]">
                {HOME_FAQS.map((faq) => (
                  <details key={faq.q} className="group py-5">
                    <summary className="flex cursor-pointer items-start justify-between gap-6 text-left [&::-webkit-details-marker]:hidden">
                      <h3 className="font-serif text-xl leading-snug md:text-2xl">{faq.q}</h3>
                      <span
                        aria-hidden
                        className="mt-1 shrink-0 text-lg text-[color:var(--gold)] transition-transform duration-300 group-open:rotate-45"
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

        {/* -------------------------------------------------------------- cta */}
        <section className="surface-dark grain relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(201,171,119,0.16),transparent_55%)]"
          />
          <div className="shell relative grid gap-10 py-24 md:grid-cols-12 md:py-32">
            <Reveal className="md:col-span-7">
              <Eyebrow>Start here</Eyebrow>
              <h2 className="display-lg mt-8 max-w-[18ch] text-[#f6f2e9]">
                Let us build something worth keeping.
              </h2>
            </Reveal>
            <Reveal delay={120} className="flex flex-col justify-end md:col-span-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Tell us about the business, what the site or system has to do, and when it has to be
                live. We reply with the questions we need answered and a proposed scope.
              </p>
              <a href={MAILTO} className="lux-btn mt-8 self-start">
                Email the studio
              </a>
              <p className="label-mono mt-6 text-muted-foreground">
                {SITE.city} · {SITE.region} · {SITE.country}
              </p>
            </Reveal>
          </div>
          <div className="shell flex items-center justify-between pb-10">
            <LogoMark className="h-10 w-10 text-[#c9ab77]/70" />
            <p className="label-mono text-muted-foreground">Est. {SITE.city}</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
