import { createFileRoute } from "@tanstack/react-router";

import { ObsidianFigure } from "@/components/obsidian/ObsidianFigure";
import { Reveal } from "@/components/obsidian/Reveal";
import { SiteHeader } from "@/components/obsidian/SiteHeader";
import { LINKS, MAILTO } from "@/lib/site";

const TITLE = "Obsidian Labs — Building Software From the Ground Up";
const DESCRIPTION =
  "Obsidian Labs is a South African student-led technology company developing software, digital products and games while creating practical opportunities for emerging developers.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Obsidian Labs, Continental Obsidian Ltd, South African software development, student software developers, university software, technology startup South Africa",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Obsidian Labs" },
      { property: "og:locale", content: "en_ZA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Obsidian Labs",
          description: DESCRIPTION,
          parentOrganization: { "@type": "Organization", name: "Continental Obsidian Ltd" },
          address: { "@type": "PostalAddress", addressCountry: "ZA" },
          foundingDate: "2026",
        }),
      },
    ],
  }),
  component: Index,
});

/* ---------------------------------------------------------------- primitives */

function SectionLabel({ index, name }: { index: string; name: string }) {
  return (
    <p className="label-mono flex items-baseline gap-3 text-muted-foreground">
      <span className="text-foreground">{index}</span>
      <span aria-hidden className="h-px w-8 bg-rule-strong" />
      <span>{name}</span>
    </p>
  );
}

function Section({
  id,
  label,
  name,
  children,
  className = "",
}: {
  id?: string;
  label?: string;
  name?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`rule-top ${className}`}>
      <div className="shell grid gap-10 py-16 md:grid-cols-12 md:gap-8 md:py-24 lg:py-32">
        {label && name && (
          <div className="md:col-span-3 lg:col-span-2">
            <div className="md:sticky md:top-28">
              <SectionLabel index={label} name={name} />
            </div>
          </div>
        )}
        <div className={label ? "md:col-span-9 lg:col-span-10" : "md:col-span-12"}>{children}</div>
      </div>
    </section>
  );
}

const ALLOCATION = [
  { item: "AI development & programming tools", amount: 14000 },
  { item: "Student developer compensation", amount: 20000 },
  { item: "3D modelling & creative services", amount: 2000 },
  { item: "Hosting, domains & infrastructure", amount: 2000 },
  { item: "Marketing & product promotion", amount: 2000 },
  { item: "Contributor rewards & fulfilment", amount: 3000 },
  { item: "Operational / software costs", amount: 1000 },
  { item: "Contingency & runway reserve", amount: 6000 },
];
const TOTAL = ALLOCATION.reduce((sum, row) => sum + row.amount, 0);
const rand = (n: number) => `R${n.toLocaleString("en-ZA")}`;

const ROADMAP = [
  {
    n: "01",
    title: "Internal software",
    body: "Tools and systems that help us establish our own development capabilities.",
  },
  {
    n: "02",
    title: "University software",
    body: "Software designed around practical problems experienced by university communities and students.",
  },
  {
    n: "03",
    title: "Small games",
    body: "Smaller digital games and experimental products designed to create early revenue and test our ability to ship products.",
  },
  {
    n: "04",
    title: "Commercial software",
    body: "Once our initial products are established, we will expand into client projects, software products and larger commercial opportunities.",
  },
  {
    n: "05",
    title: "Scale",
    body: "After establishing products, users and early revenue, we intend to pursue larger funding through loans, investors and additional funding opportunities.",
  },
];

const PHILOSOPHY = [
  { step: "Build", body: "Create the first products." },
  { step: "Prove", body: "Test them with real users." },
  { step: "Earn", body: "Generate early revenue." },
  { step: "Scale", body: "Approach investors, lenders and larger funding opportunities." },
];

const REWARDS = [
  {
    tier: "R50",
    name: "Digital supporter",
    body: "Digital Obsidian Labs Founding Supporter Certificate.",
  },
  {
    tier: "R100",
    name: "Founding supporter",
    body: "Digital certificate + recognition on the Obsidian Labs Founding Supporters list.",
  },
  {
    tier: "R250",
    name: "Early access supporter",
    body: "Previous rewards + early access to selected software products, prototypes or games.",
  },
  {
    tier: "R500",
    name: "Founding contributor",
    body: "Previous rewards + priority access to selected beta releases and invitations to selected online product demonstrations or development updates.",
  },
];

const RUNWAY = [
  {
    months: "Months 1–2",
    title: "Foundation",
    items: [
      "Establish development team",
      "Set up tooling",
      "Establish infrastructure",
      "Begin internal software",
    ],
  },
  {
    months: "Months 2–5",
    title: "Product development",
    items: [
      "University-focused software",
      "Internal tools",
      "Small games",
      "Experimental applications",
      "Web applications",
    ],
  },
  {
    months: "Months 4–7",
    title: "Testing & early revenue",
    items: [
      "Test products",
      "Gather user feedback",
      "Release selected products",
      "Begin generating early revenue",
    ],
  },
  {
    months: "Months 6–8+",
    title: "Commercial expansion",
    items: [
      "External clients",
      "Software products",
      "University technology solutions",
      "Custom applications",
      "Additional revenue opportunities",
    ],
  },
];

const PIPELINE = ["Idea", "AI-assisted development", "Prototype", "Test", "Product"];

const FUTURE_FUNDING = [
  "Business loans",
  "Private investment",
  "Strategic partnerships",
  "Additional crowdfunding",
  "Technology funding programmes",
  "Client revenue",
];

/* --------------------------------------------------------------------- page */

function Index() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        {/* ------------------------------------------------------------- hero */}
        <section className="pt-[68px]">
          <div className="shell grid items-end gap-12 pt-16 pb-14 md:grid-cols-12 md:gap-8 md:pt-28 md:pb-20 lg:pt-36">
            <div className="md:col-span-7 lg:col-span-7">
              <Reveal>
                <p className="label-mono text-muted-foreground">Obsidian Labs / 001</p>
                <h1 className="display-xl mt-6">
                  Building software from the ground up.
                </h1>
              </Reveal>

              <Reveal delay={120} className="mt-10 grid gap-8 md:mt-14 md:grid-cols-2 md:gap-10">
                <p className="body-lead max-w-[36ch]">
                  A student-led technology company developing software, digital products and
                  games while creating practical opportunities for the next generation of
                  developers.
                </p>
                <p className="max-w-[40ch] text-sm leading-relaxed text-muted-foreground">
                  Obsidian Labs is owned by Continental Obsidian Ltd and was created by a
                  third-year Computer Science student in South Africa.
                </p>
              </Reveal>

              <Reveal delay={200} className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a
                  href="#campaign"
                  className="label-mono bg-foreground px-7 py-4 text-background transition-colors hover:bg-ink-soft"
                >
                  Support the Build
                </a>
                <a
                  href="#why"
                  className="label-mono link-underline hover:link-underline-hover"
                >
                  Explore our mission ↓
                </a>
              </Reveal>
            </div>

            <div className="md:col-span-5 lg:col-span-4 lg:col-start-9">
              <Reveal delay={160}>
                <ObsidianFigure className="w-full text-foreground" />
              </Reveal>
            </div>
          </div>

          <div className="shell rule-top">
            <ul className="grid grid-cols-2 gap-y-3 py-4 lg:grid-cols-4">
              {[
                "Continental Obsidian Ltd",
                "South Africa",
                "Software development / 2026",
                "Obsidian Labs / 001",
              ].map((meta) => (
                <li key={meta} className="label-mono text-muted-foreground">
                  {meta}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* -------------------------------------------------------------- why */}
        <Section id="why" label="01" name="Why">
          <Reveal>
            <h2 className="display-lg max-w-[22ch]">We are starting small on purpose.</h2>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <p className="body-lead max-w-[52ch]">
                Obsidian Labs is being built around a simple idea: a small, capable team should
                be able to create serious software without requiring a massive initial budget.
              </p>
              <p className="mt-6 max-w-[56ch] text-sm leading-relaxed text-muted-foreground">
                Our first objective is not to scale as quickly as possible. It is to build well,
                establish working products, learn from real users and create a foundation that
                can support larger opportunities later.
              </p>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-5">
              <div className="border-y-2 border-foreground py-7">
                <p className="display-md">
                  R50,000 <span className="text-accent">→</span> 8+ month development runway
                </p>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Our initial crowdfunding target is R50,000. We intend to use the funding
                conservatively and stretch it across at least eight months of development.
              </p>
            </Reveal>
          </div>
        </Section>

        {/* ----------------------------------------------------------- people */}
        <Section id="people" label="02" name="People">
          <Reveal>
            <h2 className="display-lg max-w-[24ch]">
              Built by students. Built for the real world.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <p className="body-lead max-w-[50ch]">
                The initial development team will consist of approximately 3–5 current
                third-year Computer Science students.
              </p>
              <p className="mt-6 max-w-[56ch] text-sm leading-relaxed text-muted-foreground">
                Initial compensation will generally range from R500–R1,000 depending on role,
                responsibilities and contribution.
              </p>
              <p className="mt-4 max-w-[56ch] text-sm leading-relaxed text-muted-foreground">
                The goal is to give students something more valuable than another theoretical
                project: practical experience working on real software products with real users
                and real constraints.
              </p>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-5">
              <dl>
                {[
                  ["Team", "3–5 developers"],
                  ["Compensation", "R500–R1,000 initial"],
                  ["Output", "Real products"],
                  ["Outcome", "Practical experience"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="rule-top flex items-baseline justify-between gap-6 py-4 last:border-b last:border-border"
                  >
                    <dt className="label-mono text-muted-foreground">{k}</dt>
                    <dd className="text-right text-sm font-medium tracking-tight uppercase md:text-base">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Section>

        {/* ---------------------------------------------------------- tooling */}
        <Section id="tooling" label="03" name="Tooling">
          <Reveal>
            <h2 className="display-lg max-w-[20ch]">Small team. Serious tooling.</h2>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <p className="body-lead max-w-[48ch]">
                AI-assisted development will be a core part of our development workflow.
              </p>
              <p className="mt-6 max-w-[56ch] text-sm leading-relaxed text-muted-foreground">
                Funding will allow our programming team to access tools such as Claude Pro /
                Claude Code, Lovable and other AI-assisted development services.
              </p>
              <p className="mt-4 max-w-[56ch] text-sm leading-relaxed text-muted-foreground">
                The purpose is not to replace developers. It is to give a small student team
                access to tools that can dramatically increase development speed,
                experimentation and productivity.
              </p>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-5">
              <ol className="border border-border">
                {PIPELINE.map((stage, i) => (
                  <li
                    key={stage}
                    className={`flex items-baseline gap-4 px-5 py-4 ${i === 0 ? "" : "rule-top"}`}
                  >
                    <span className="label-mono text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium tracking-tight uppercase">{stage}</span>
                    {i < PIPELINE.length - 1 && (
                      <span aria-hidden className="ml-auto text-accent">
                        ↓
                      </span>
                    )}
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                We will use student pricing, shared workspaces, free allowances and other
                legitimate cost-saving options wherever possible so that funding lasts longer.
              </p>
            </Reveal>
          </div>
        </Section>

        {/* --------------------------------------------------------- products */}
        <Section id="products" label="04" name="Products">
          <Reveal>
            <h2 className="display-lg max-w-[18ch]">First build. Then scale.</h2>
            <p className="body-lead mt-8 max-w-[48ch]">
              Our first stage will focus on internal software and smaller digital products.
            </p>
          </Reveal>

          <ol className="mt-14">
            {ROADMAP.map((row, i) => (
              <Reveal
                as="li"
                key={row.n}
                delay={i * 60}
                className="rule-top grid gap-3 py-7 md:grid-cols-12 md:gap-8 last:border-b last:border-border"
              >
                <span className="label-mono text-accent md:col-span-1">{row.n}</span>
                <h3 className="text-lg font-medium tracking-tight uppercase md:col-span-4 md:text-xl">
                  {row.title}
                </h3>
                <p className="max-w-[60ch] text-sm leading-relaxed text-muted-foreground md:col-span-7">
                  {row.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </Section>

        {/* ----------------------------------------------------- philosophy */}
        <section className="rule-top">
          <div className="shell py-16 md:py-24 lg:py-32">
            <Reveal>
              <h2 className="display-lg">
                Build <span className="text-accent">→</span> Prove{" "}
                <span className="text-accent">→</span> Earn{" "}
                <span className="text-accent">→</span> Scale
              </h2>
            </Reveal>

            <Reveal delay={100} className="mt-10 grid gap-6 md:grid-cols-2 md:gap-12">
              <p className="max-w-[56ch] text-sm leading-relaxed text-muted-foreground">
                We are deliberately avoiding the traditional approach of raising a large amount
                of money before demonstrating what we can build.
              </p>
              <p className="max-w-[56ch] text-sm leading-relaxed text-muted-foreground">
                Our approach is to start with a small amount of capital, build useful software,
                establish early revenue and use those results to unlock larger opportunities.
              </p>
            </Reveal>

            <ol className="mt-14 grid gap-0 md:grid-cols-4 md:gap-8">
              {PHILOSOPHY.map((p, i) => (
                <Reveal
                  as="li"
                  key={p.step}
                  delay={i * 80}
                  className="rule-top py-6 last:border-b last:border-border md:border-b-0 md:pt-6 md:pb-0 md:last:border-b-0"
                >
                  <p className="label-mono text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                    {i < PHILOSOPHY.length - 1 && <span className="text-accent"> ↓</span>}
                  </p>
                  <h3 className="mt-4 text-2xl font-medium tracking-tight uppercase">{p.step}</h3>
                  <p className="mt-2 max-w-[28ch] text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* --------------------------------------------------------- campaign */}
        <section id="campaign" className="invert-surface">
          <div className="shell py-16 md:py-24 lg:py-32">
            <Reveal>
              <SectionLabel index="05" name="The first round" />
              <h2 className="display-lg mt-8 max-w-[22ch]">Help us build the foundation.</h2>
            </Reveal>

            <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-8">
              <Reveal className="lg:col-span-5">
                <p className="display-xl text-accent">R50,000</p>
                <p className="body-lead mt-6 max-w-[36ch]">
                  Our initial crowdfunding target is R50,000.
                </p>
                <p className="mt-6 max-w-[44ch] text-sm leading-relaxed text-muted-foreground">
                  The funding will provide our small development team with the tools,
                  compensation and infrastructure required to operate for at least eight months
                  while we establish our first software products.
                </p>
                <a
                  href={LINKS.backabuddy}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="label-mono mt-10 inline-block border border-foreground px-7 py-4 transition-colors hover:bg-foreground hover:text-background"
                >
                  Support Obsidian Labs
                </a>
              </Reveal>

              <Reveal delay={120} className="lg:col-span-7">
                <table className="w-full border-collapse text-left">
                  <caption className="label-mono mb-4 text-left text-muted-foreground">
                    Allocation of funds
                  </caption>
                  <tbody>
                    {ALLOCATION.map((row) => (
                      <tr key={row.item} className="rule-top align-baseline">
                        <th
                          scope="row"
                          className="w-full py-3.5 pr-4 text-xs font-medium tracking-[0.08em] uppercase md:text-sm"
                        >
                          {row.item}
                          <span
                            aria-hidden
                            className="mt-2 block h-[3px] bg-accent"
                            style={{ width: `${(row.amount / TOTAL) * 100}%` }}
                          />
                        </th>
                        <td className="label-mono py-3.5 text-right whitespace-nowrap">
                          {rand(row.amount)}
                        </td>
                      </tr>
                    ))}
                    <tr className="border-y-2 border-foreground">
                      <th
                        scope="row"
                        className="py-4 text-sm font-medium tracking-[0.08em] uppercase"
                      >
                        Total
                      </th>
                      <td className="py-4 text-right text-sm font-medium tracking-tight">
                        {rand(TOTAL)}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <p className="mt-8 max-w-[64ch] border-l-2 border-accent pl-5 text-xs leading-relaxed text-muted-foreground">
                  The R50,000 figure represents the gross crowdfunding target. Platform and
                  payment fees will reduce the amount available for operations. Actual
                  expenditure will therefore be prioritised according to available net funds.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------- supporters */}
        <Section id="supporters" label="06" name="Supporters">
          <Reveal>
            <h2 className="display-lg max-w-[24ch]">
              Back the build. Become part of the beginning.
            </h2>
            <p className="body-lead mt-8 max-w-[52ch]">
              Contributors receive low-cost digital rewards, designed so that as much funding as
              possible remains available for development.
            </p>
          </Reveal>

          <ol className="mt-14 grid md:grid-cols-2 lg:grid-cols-4">
            {REWARDS.map((r, i) => (
              <Reveal
                as="li"
                key={r.tier}
                delay={i * 70}
                className="rule-top py-7 last:border-b last:border-border lg:border-b-0 lg:border-l lg:border-l-border lg:px-6 lg:pt-0 lg:pb-0 lg:first:border-l-0 lg:first:pl-0 lg:last:border-b-0"
              >
                <p className="text-3xl font-medium tracking-tight">{r.tier}</p>
                <h3 className="label-mono mt-4 text-foreground">{r.name}</h3>
                <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-muted-foreground">
                  {r.body}
                </p>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={LINKS.backabuddy}
              target="_blank"
              rel="noreferrer noopener"
              className="label-mono bg-foreground px-7 py-4 text-background transition-colors hover:bg-ink-soft"
            >
              Support Obsidian Labs
            </a>
            <p className="max-w-[46ch] text-xs leading-relaxed text-muted-foreground">
              Rewards are intentionally designed to be primarily digital so that contributor
              funds can remain focused on development.
            </p>
          </Reveal>
        </Section>

        {/* ----------------------------------------------------------- runway */}
        <Section id="runway" label="07" name="The runway">
          <Reveal>
            <h2 className="display-lg max-w-[20ch]">Eight months to prove the model.</h2>
          </Reveal>

          <ol className="mt-14">
            {RUNWAY.map((phase, i) => (
              <Reveal
                as="li"
                key={phase.months}
                delay={i * 60}
                className="rule-top grid gap-4 py-8 md:grid-cols-12 md:gap-8 last:border-b last:border-border"
              >
                <p className="label-mono text-accent md:col-span-3">{phase.months}</p>
                <h3 className="text-lg font-medium tracking-tight uppercase md:col-span-3">
                  {phase.title}
                </h3>
                <ul className="md:col-span-6">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 py-1 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-rule-strong" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-16">
            <p className="label-mono text-muted-foreground">
              The objective is not to spend the R50,000.
            </p>
            <p className="display-lg mt-6 max-w-[26ch]">
              The objective is to turn it into something worth more.
            </p>
          </Reveal>
        </Section>

        {/* ---------------------------------------------------- future funding */}
        <Section id="next" label="08" name="What comes next">
          <Reveal>
            <h2 className="display-lg max-w-[24ch]">The first R50,000 is the foundation.</h2>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <p className="body-lead max-w-[52ch]">
                Once our initial software products are established and we can demonstrate
                working technology, early users and revenue, we intend to pursue larger sources
                of capital.
              </p>
              <p className="mt-10 max-w-[36ch] border-t-2 border-foreground pt-6 text-xl font-medium tracking-tight uppercase md:text-2xl">
                We want future funding to be based on evidence — not promises.
              </p>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-5">
              <ul>
                {FUTURE_FUNDING.map((item, i) => (
                  <li
                    key={item}
                    className="rule-top flex items-baseline gap-4 py-3.5 last:border-b last:border-border"
                  >
                    <span className="label-mono text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium tracking-[0.06em] uppercase">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>

        {/* ------------------------------------------------------------ about */}
        <Section id="about">
          <div className="grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <h2 className="display-md max-w-[18ch]">
                Obsidian Labs / Continental Obsidian Ltd
              </h2>
            </Reveal>
            <Reveal delay={100} className="md:col-span-6 md:col-start-7">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Obsidian Labs operates as a technology development initiative under Continental
                Obsidian Ltd.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                The laboratory is focused on developing software, digital products and
                experimental technology while establishing a foundation for future technology
                ventures.
              </p>
            </Reveal>
          </div>
        </Section>

        {/* -------------------------------------------------------- final CTA */}
        <section className="invert-surface">
          <div className="shell py-20 md:py-28 lg:py-36">
            <Reveal>
              <p className="label-mono text-muted-foreground">Obsidian Labs / Beginning</p>
              <h2 className="display-xl mt-8 max-w-[20ch]">
                We are starting with R50,000.
                <span className="block text-muted-foreground">
                  What we build with it is up to us.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={120} className="mt-12 grid gap-10 md:grid-cols-12">
              <p className="max-w-[52ch] text-sm leading-relaxed text-muted-foreground md:col-span-6">
                Support the first stage of Obsidian Labs and help us create software,
                employment opportunities and the foundation for a larger technology company.
              </p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 md:col-span-6 md:justify-end">
                <a
                  href={LINKS.backabuddy}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="label-mono bg-background px-7 py-4 text-foreground transition-opacity hover:opacity-85"
                >
                  Support the Build
                </a>
                <a
                  href="#products"
                  className="label-mono link-underline hover:link-underline-hover"
                >
                  View the project →
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ---------------------------------------------------------- footer */}
      <footer id="contact" className="rule-top">
        <div className="shell py-16 md:py-20">
          <p className="display-lg">Obsidian Labs</p>
          <p className="label-mono mt-4 text-muted-foreground">Building from the ground up.</p>

          <div className="rule-top mt-12 grid gap-8 pt-8 md:grid-cols-4">
            <div>
              <p className="label-mono text-muted-foreground">Company</p>
              <p className="mt-3 text-sm">Continental Obsidian Ltd</p>
              <p className="text-sm text-muted-foreground">South Africa</p>
            </div>
            <div>
              <p className="label-mono text-muted-foreground">Code</p>
              {LINKS.github ? (
                <a
                  href={LINKS.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-underline hover:link-underline-hover mt-3 inline-block text-sm"
                >
                  GitHub
                </a>
              ) : (
                <p className="mt-3 text-sm text-muted-foreground">GitHub — coming soon</p>
              )}
            </div>
            <div>
              <p className="label-mono text-muted-foreground">Campaign</p>
              <a
                href={LINKS.backabuddy}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline hover:link-underline-hover mt-3 inline-block text-sm"
              >
                BackaBuddy
              </a>
            </div>
            <div>
              <p className="label-mono text-muted-foreground">Contact</p>
              <a
                href={MAILTO}
                className="link-underline hover:link-underline-hover mt-3 inline-block text-sm"
              >
                Email
              </a>
            </div>
          </div>

          <p className="label-mono rule-top mt-10 pt-6 text-muted-foreground">
            © 2026 Continental Obsidian Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
