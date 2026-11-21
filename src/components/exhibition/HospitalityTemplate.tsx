import { DemoBar, TplFooter, TplNav } from "@/components/exhibition/chrome";

const SUITES = [
  {
    name: "The Veld Suite",
    detail: "Garden level · 48 m²",
    body: "A quiet room facing the acacia courtyard, with a deep bath and a private terrace.",
    rate: "R4 200",
  },
  {
    name: "The Kraal Suite",
    detail: "First floor · 62 m²",
    body: "Warm timber, a fireplace and a reading alcove that catches the late afternoon light.",
    rate: "R5 400",
  },
  {
    name: "Aurelia House Suite",
    detail: "Corner · 84 m²",
    body: "The house's largest room: a freestanding bath, a private plunge pool and open veld.",
    rate: "R7 800",
  },
];

export function HospitalityTemplate() {
  return (
    <div className="tpl tpl-hotel tpl-serif pb-14">
      <TplNav
        brand="Aurelia House"
        sub="Boutique hotel & spa · Bloemfontein"
        items={[
          { label: "Suites", href: "#suites" },
          { label: "Dining & spa", href: "#dining" },
          { label: "The house", href: "#house" },
        ]}
        cta="Reserve"
        ctaHref="#reserve"
        align="center"
      />

      {/* hero */}
      <section className="relative">
        <div className="relative h-[78svh] min-h-[520px] overflow-hidden">
          <img
            src="/images/hotel-suite.jpg"
            alt="Aurelia House suite with linen bedding and a view over the veld"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--tpl-bg)] via-transparent to-[var(--tpl-bg)]/45" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[90rem] px-5 pb-14 md:px-10">
            <p className="tpl-label">Twelve suites · Free State</p>
            <h1 className="mt-5 max-w-[20ch] text-[clamp(2.6rem,7vw,6rem)] leading-[0.95] tracking-[-0.02em]">
              Twelve suites above the Free State veld.
            </h1>
            <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-[var(--tpl-fg)]/75">
              A small house hotel built around stillness: long breakfasts, a cellar worth staying
              for, and a horizon that does the decorating for us.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#reserve"
                className="tpl-label border border-[var(--tpl-accent)] bg-[var(--tpl-accent)] px-6 py-4 text-[var(--tpl-bg)] transition-opacity hover:opacity-85"
              >
                Check availability
              </a>
              <a
                href="#suites"
                className="tpl-label border-b border-[var(--tpl-accent)]/60 pb-1 text-[var(--tpl-fg)]/80 hover:text-[var(--tpl-accent)]"
              >
                The suites
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* intro */}
      <section
        id="house"
        className="mx-auto grid max-w-[90rem] gap-10 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28"
      >
        <div className="md:col-span-4">
          <p className="tpl-label">The house</p>
        </div>
        <div className="md:col-span-8">
          <p className="text-[clamp(1.4rem,2.4vw,2rem)] leading-[1.35]">
            Aurelia House was built as a family home in 1928 and opened as a hotel with twelve
            rooms. Nothing about it is loud — the service is quiet, the rooms are generous, and the
            kitchen cooks what the season gives it.
          </p>
          <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-[var(--tpl-line)] pt-8 sm:grid-cols-4">
            {[
              ["12", "Suites"],
              ["1928", "Built"],
              ["1", "Restaurant"],
              ["4", "Spa treatments"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="text-3xl">{value}</dt>
                <dd className="tpl-label mt-2">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* suites */}
      <section id="suites" className="border-y border-[var(--tpl-line)] bg-[var(--tpl-surface)]">
        <div className="mx-auto max-w-[90rem] px-5 py-20 md:px-10 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-[clamp(2rem,4vw,3.4rem)] leading-none">The suites</h2>
            <p className="max-w-[34ch] text-sm text-[var(--tpl-muted)]">
              Rates include breakfast, the spa's thermal pool and the use of the library.
            </p>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {SUITES.map((suite) => (
              <article key={suite.name} className="group">
                <div className="overflow-hidden">
                  <img
                    src={
                      suite.name === "The Veld Suite"
                        ? "/images/hotel-suite.jpg"
                        : "/images/hero.jpg"
                    }
                    alt={suite.name}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
                <p className="tpl-label mt-6">{suite.detail}</p>
                <h3 className="mt-3 text-2xl">{suite.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--tpl-muted)]">{suite.body}</p>
                <p className="mt-5 flex items-baseline justify-between border-t border-[var(--tpl-line)] pt-4">
                  <span className="tpl-label">From</span>
                  <span className="text-lg">
                    {suite.rate} <span className="text-sm text-[var(--tpl-muted)]">/ night</span>
                  </span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* dining + spa */}
      <section
        id="dining"
        className="mx-auto grid max-w-[90rem] items-center gap-14 px-5 py-20 md:grid-cols-2 md:px-10 md:py-28"
      >
        <div className="order-2 md:order-1">
          <p className="tpl-label">Dining & spa</p>
          <h2 className="mt-5 text-[clamp(2rem,3.6vw,3rem)] leading-[1.05]">
            A cellar, a fire, and a pool that stays warm in winter.
          </h2>
          <p className="mt-6 max-w-[46ch] text-sm leading-relaxed text-[var(--tpl-muted)]">
            Dinner is four courses, written each morning and served in the old dining room or on the
            terrace when the evening allows. The spa is small on purpose: two treatment rooms, a
            thermal pool and a garden to sit in afterwards.
          </p>
          <ul className="mt-8 space-y-3 border-t border-[var(--tpl-line)] pt-6">
            {[
              "Four-course dinner, 18:30 – 21:00",
              "Cellar tastings by arrangement",
              "Spa open 09:00 – 19:00, guests only",
            ].map((item) => (
              <li key={item} className="flex items-baseline gap-4 text-sm">
                <span aria-hidden className="h-px w-6 bg-[var(--tpl-accent)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <img
            src="/images/dining.jpg"
            alt="Aurelia House dining room"
            className="aspect-[5/6] w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* reserve */}
      <section id="reserve" className="border-t border-[var(--tpl-line)] bg-[var(--tpl-surface)]">
        <div className="mx-auto grid max-w-[90rem] gap-10 px-5 py-20 md:grid-cols-12 md:px-10 md:py-24">
          <div className="md:col-span-6">
            <p className="tpl-label">Reservations</p>
            <h2 className="mt-5 text-[clamp(2.2rem,4.4vw,3.6rem)] leading-none">
              Book directly with the house.
            </h2>
            <p className="mt-5 max-w-[42ch] text-sm leading-relaxed text-[var(--tpl-muted)]">
              Best rates are always direct. Two nights minimum on weekends; single nights by
              arrangement.
            </p>
          </div>
          <div className="md:col-span-6">
            <form className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Arrival", type: "date" },
                { label: "Departure", type: "date" },
                { label: "Guests", type: "number" },
                { label: "Suite", type: "text" },
              ].map((field) => (
                <label key={field.label} className="block">
                  <span className="tpl-label">{field.label}</span>
                  <input
                    type={field.type}
                    placeholder={field.type === "text" ? "Any suite" : undefined}
                    className="mt-2 w-full border border-[var(--tpl-line)] bg-transparent px-4 py-3 text-sm text-[var(--tpl-fg)] outline-none placeholder:text-[var(--tpl-muted)] focus:border-[var(--tpl-accent)]"
                  />
                </label>
              ))}
              <button
                type="button"
                className="tpl-label mt-2 bg-[var(--tpl-accent)] px-6 py-4 text-[var(--tpl-bg)] sm:col-span-2"
              >
                Request availability
              </button>
            </form>
            <p className="mt-4 text-xs text-[var(--tpl-muted)]">
              Demonstration interface — no dates are submitted.
            </p>
          </div>
        </div>
      </section>

      <TplFooter
        brand="Aurelia House"
        address="Concept address · Bloemfontein, Free State, South Africa"
        note="Illustrative brand created by Obsidian Labs to demonstrate hospitality design."
      />
      <DemoBar slug="hospitality" />
    </div>
  );
}
