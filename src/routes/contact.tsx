import { Link, createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { GoldRule, Reveal, ScrollProgress, Section } from "@/components/site/primitives";
import { absoluteUrl, MAILTO, SITE } from "@/lib/site";

const TITLE = "Contact Obsidian Labs Software | Software Development Bloemfontein";
const DESCRIPTION =
  "Contact Obsidian Labs Software in Bloemfontein for website design, mobile apps and business systems. Email continentalobsidian@gmail.com with your project details.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content: [
          "contact Obsidian Labs Software",
          "software development company Bloemfontein contact",
          "web design Bloemfontein",
          "app developers Bloemfontein",
        ].join(", "),
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: absoluteUrl("/contact") },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/contact") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: absoluteUrl("/contact"),
          name: TITLE,
          mainEntity: {
            "@type": "Organization",
            name: SITE.name,
            legalName: SITE.legalName,
            email: SITE.email,
            url: SITE.url,
            address: {
              "@type": "PostalAddress",
              addressLocality: SITE.city,
              addressRegion: SITE.region,
              addressCountry: SITE.countryCode,
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "sales",
              email: SITE.email,
              areaServed: "ZA",
              availableLanguage: ["en", "af"],
            },
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main id="main-content">
        <PageHero
          eyebrow="Contact"
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
          title={
            <>
              Tell us what
              <br />
              you are building.
            </>
          }
          lead="Email is the fastest way to reach the studio. Send a short description of the business, what the website or system needs to do, and any deadline you are working towards."
          meta={[
            { label: "Email", value: SITE.email },
            { label: "Studio", value: `${SITE.city}, ${SITE.region}` },
            { label: "Response", value: "Within one business day" },
            { label: "Languages", value: "English · Afrikaans" },
          ]}
        />

        <Section index="01" label="Direct">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <h2 className="display-lg max-w-[18ch]">One address, one reply.</h2>
              <p className="mt-6 max-w-[56ch] text-sm leading-relaxed text-muted-foreground">
                Every enquiry is read by the studio, not a queue. If your project is a fit we reply
                with the questions that matter and a proposed scope; if it is not, we say so and
                point you somewhere better.
              </p>
              <a
                href={MAILTO}
                className="mt-10 block break-words font-serif text-3xl transition-colors hover:text-[color:var(--gold-text)] md:text-5xl"
              >
                {SITE.email}
              </a>
              <GoldRule className="mt-10" />
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="label-mono text-muted-foreground">Studio location</p>
                  <p className="mt-2 text-sm">
                    {SITE.city}
                    <br />
                    {SITE.region}, {SITE.country}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    Remote delivery nationwide. In-person workshops in the Free State and Gauteng by
                    arrangement.
                  </p>
                </div>
                <div>
                  <p className="label-mono text-muted-foreground">Studio hours</p>
                  <p className="mt-2 text-sm">
                    Monday – Friday
                    <br />
                    08:00 – 17:00 SAST
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    Support clients on a care plan have an out-of-hours channel for anything that
                    stops working.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-5">
              <div className="border border-[color:var(--rule)] p-8 lg:sticky lg:top-28">
                <p className="label-mono text-[color:var(--gold-text)]">What to include</p>
                <ol className="mt-5 space-y-4">
                  {[
                    "The business, in two sentences — what you sell and to whom.",
                    "What the website, app or system must do that the current one does not.",
                    "Any deadline, launch date or seasonal window you are working towards.",
                    "A rough budget range, so the proposal is realistic rather than aspirational.",
                  ].map((item, i) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed">
                      <span className="label-mono mt-0.5 text-[color:var(--gold-text)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
                <a href={MAILTO} className="lux-btn mt-8 w-full">
                  Write the email
                </a>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  Please do not send confidential documents in a first email. We will arrange a
                  secure channel and an NDA where needed.
                </p>
              </div>
            </Reveal>
          </div>
        </Section>

        <Section index="02" label="Before you write" tone="stone">
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                title: "We do not cold-call",
                body: "The studio runs on referrals and enquiries. If we email you first, it is because we have met or you asked us to.",
              },
              {
                title: "We quote before we start",
                body: "No hourly surprises. A fixed scope and price are agreed in writing before any design work begins.",
              },
              {
                title: "We will say no",
                body: "If a project needs a specialist we are not, we will tell you rather than learn on your budget.",
              },
            ].map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 80}
                className="border-t border-[color:var(--rule-strong)] pt-6"
              >
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 flex flex-wrap items-center gap-6">
            <Link to="/services" className="lux-btn-ghost">
              Services
            </Link>
            <Link to="/exhibition" className="lux-btn-ghost">
              Exhibition
            </Link>
            <a
              href={MAILTO}
              className="label-mono link-underline hover:link-underline-hover text-[color:var(--gold-text)]"
            >
              {SITE.email}
            </a>
          </Reveal>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
