import { Link, createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import {
  GoldRule,
  Marquee,
  Reveal,
  ScrollProgress,
  Section,
  Stat,
} from "@/components/site/primitives";
import { absoluteUrl, MAILTO, SITE } from "@/lib/site";

const TITLE = "About Obsidian Labs Software | Software Studio in Bloemfontein";
const DESCRIPTION =
  "Obsidian Labs Software is the software development studio of Continental Obsidian Ltd, based in Bloemfontein, South Africa, designing and building websites, applications and business systems.";

const BELIEFS = [
  {
    title: "Design is a system",
    body: "Type scales, spacing, colour and components are decided once and applied everywhere. A brand that is consistent reads as competent before a single word is read.",
  },
  {
    title: "Clarity over decoration",
    body: "Every page has one job. Ornament that does not help that job is removed — which is why our work reads as calm rather than empty.",
  },
  {
    title: "Performance is respect",
    body: "A page that stalls on a mobile connection wastes the visitor's money and our client's marketing. Speed is part of the design, not an optimisation phase.",
  },
  {
    title: "Own the outcome",
    body: "We scope, design and build the work ourselves. If something is wrong after launch, there is no agency to blame and no handover gap to hide in.",
  },
];

const STACK = [
  "React & TypeScript",
  "TanStack Start",
  "Tailwind CSS",
  "React Native",
  "Node.js",
  "PostgreSQL",
  "Headless CMS",
  "Payment gateways",
  "WhatsApp Business API",
  "Cloud hosting",
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content: [
          "Obsidian Labs Software",
          "software development company Bloemfontein",
          "software studio Free State",
          "Continental Obsidian Ltd",
          "web development company South Africa",
        ].join(", "),
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: absoluteUrl("/about") },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/about") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: absoluteUrl("/about"),
          name: TITLE,
          description: DESCRIPTION,
          about: {
            "@type": "Organization",
            name: SITE.name,
            legalName: SITE.legalName,
            url: SITE.url,
            email: SITE.email,
            address: {
              "@type": "PostalAddress",
              addressLocality: SITE.city,
              addressRegion: SITE.region,
              addressCountry: SITE.countryCode,
            },
          },
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="About"
          breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
          title={
            <>
              A studio built
              <br />
              on standards.
            </>
          }
          lead={`${SITE.name} Software is the software development studio of ${SITE.legalName}. We design and build websites, applications and business systems from ${SITE.city}, for clients across South Africa.`}
          meta={[
            { label: "Entity", value: SITE.legalName },
            { label: "Studio", value: `${SITE.city}, ${SITE.region}` },
            { label: "Disciplines", value: "Web · Apps · Systems" },
            { label: "Clients", value: "Owner-led businesses" },
          ]}
        />

        <Section index="01" label="The studio">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <h2 className="display-lg max-w-[20ch]">Small by design. Accountable by default.</h2>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-5">
              <p className="body-lead">
                We are a focused studio rather than a volume agency: a small number of engagements
                at a time, each led by the people who designed it.
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                That model is deliberate. It keeps the standard of the work in the hands of the
                people accountable for it, and it means a client can speak to the person who made
                the decision rather than an account manager relaying it.
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Our work sits at the intersection of brand and engineering: interfaces that look
                considered, built on systems that keep working after the launch announcement.
              </p>
              <GoldRule className="mt-9" />
              <dl className="mt-7 grid grid-cols-2 gap-6">
                <div>
                  <dt className="label-mono text-muted-foreground">Operating as</dt>
                  <dd className="mt-1.5 text-sm">{SITE.legalName}</dd>
                </div>
                <div>
                  <dt className="label-mono text-muted-foreground">Based in</dt>
                  <dd className="mt-1.5 text-sm">
                    {SITE.city}, {SITE.country}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Stat value="06" label="Industries served" />
            <Stat value="03" label="Disciplines" />
            <Stat value="01" label="Accountable team" />
            <Stat value="ZA" label="Nationwide delivery" />
          </Reveal>
        </Section>

        <Section index="02" label="Beliefs" tone="stone">
          <Reveal>
            <h2 className="display-lg max-w-[18ch]">Four standards we do not trade.</h2>
          </Reveal>
          <div className="mt-14 grid gap-px bg-[color:var(--rule)] sm:grid-cols-2">
            {BELIEFS.map((belief, i) => (
              <Reveal
                key={belief.title}
                delay={i * 70}
                className="bg-[color:var(--background)] p-8 lg:p-10"
              >
                <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 font-serif text-2xl">{belief.title}</h3>
                <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-muted-foreground">
                  {belief.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section index="03" label="How we work">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <h2 className="display-lg max-w-[14ch]">Direct, documented, unhurried.</h2>
              <p className="mt-6 max-w-[42ch] text-sm leading-relaxed text-muted-foreground">
                We agree the scope in writing, work in stages you can review, and keep a single
                channel of communication for the duration of the project.
              </p>
              <Link
                to="/services"
                className="label-mono link-underline hover:link-underline-hover mt-8 inline-block text-[color:var(--gold)]"
              >
                How engagements work →
              </Link>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-7">
              <dl className="divide-y divide-[color:var(--rule)] border-y border-[color:var(--rule)]">
                {[
                  [
                    "One project lead",
                    "The person who scopes your project designs and delivers it. No relay.",
                  ],
                  [
                    "Written scope",
                    "Deliverables, milestones, revision rounds and the launch date, agreed before work begins.",
                  ],
                  [
                    "Staged review",
                    "You see the design system, then the pages, then the working build — on real devices.",
                  ],
                  [
                    "Confidentiality",
                    "Client work is treated as confidential; we sign an NDA or your own agreement where required.",
                  ],
                  [
                    "Handover",
                    "Repository, design files and documentation transfer to you on final payment.",
                  ],
                ].map(([term, detail]) => (
                  <div key={term} className="grid gap-2 py-5 md:grid-cols-12 md:gap-6">
                    <dt className="label-mono text-[color:var(--gold)] md:col-span-4">{term}</dt>
                    <dd className="text-sm leading-relaxed text-muted-foreground md:col-span-8">
                      {detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Section>

        <Marquee
          items={[
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "PostgreSQL",
            "React Native",
            "Cloud hosting",
          ]}
          className="surface-dark"
        />

        <Section index="04" label="Capability" tone="dark">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <h2 className="display-lg max-w-[16ch] text-[#f6f2e9]">
                Chosen for longevity, not fashion.
              </h2>
              <p className="mt-6 max-w-[40ch] text-sm leading-relaxed text-muted-foreground">
                We build on a small, well-supported stack so that the systems we deliver can be
                maintained by any competent developer — including one you hire later.
              </p>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-7">
              <ul className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-3">
                {STACK.map((item) => (
                  <li key={item} className="bg-[#0b0b0c] px-5 py-6 text-sm text-[#f6f2e9]/80">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>

        <section className="surface-stone">
          <div className="shell grid gap-10 py-20 md:grid-cols-12 md:py-28">
            <Reveal className="md:col-span-7">
              <h2 className="display-lg max-w-[18ch]">Where we are, and who we answer to.</h2>
              <p className="mt-6 max-w-[54ch] text-sm leading-relaxed text-muted-foreground">
                {SITE.name} Software operates from {SITE.city} in the {SITE.region}. We deliver
                remotely across South Africa and travel for workshops where the work benefits from
                being in the same room.
              </p>
              <p className="mt-4 max-w-[54ch] text-sm leading-relaxed text-muted-foreground">
                The studio is part of {SITE.legalName}. Contracts, invoices and intellectual
                property are handled by the company, and our terms and privacy policy are published
                on this site.
              </p>
            </Reveal>
            <Reveal delay={100} className="md:col-span-5 md:justify-self-end">
              <p className="label-mono text-muted-foreground">Correspondence</p>
              <a
                href={MAILTO}
                className="link-underline hover:link-underline-hover mt-3 inline-block text-lg"
              >
                {SITE.email}
              </a>
              <p className="label-mono mt-6 text-muted-foreground">
                {SITE.city} · {SITE.region} · {SITE.country}
              </p>
              <Link to="/contact" className="lux-btn mt-8">
                Contact the studio
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
