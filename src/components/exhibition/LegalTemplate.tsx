import { DemoBar, TplFooter, TplNav } from "@/components/exhibition/chrome";

const PRACTICE = [
  {
    n: "01",
    area: "Commercial & Contract",
    body: "Drafting, review and dispute resolution for owner-managed businesses, suppliers and professional practices.",
  },
  {
    n: "02",
    area: "Property & Conveyancing",
    body: "Transfers, bonds and sectional title matters handled by admitted conveyancers, start to registration.",
  },
  {
    n: "03",
    area: "Labour & Employment",
    body: "CCMA referrals, discipline, restructuring and employment contracts for employers and senior employees.",
  },
  {
    n: "04",
    area: "Family & Estates",
    body: "Divorce, maintenance, antenuptial contracts, wills and deceased estates, handled with discretion.",
  },
];

const PEOPLE = [
  {
    initials: "JVW",
    name: "J. van Wyk",
    role: "Director · Commercial & Property",
    admitted: "Admitted 1998",
  },
  {
    initials: "NM",
    name: "N. Mokoena",
    role: "Senior Associate · Labour",
    admitted: "Admitted 2011",
  },
  {
    initials: "AD",
    name: "A. du Plessis",
    role: "Associate · Estates & Family",
    admitted: "Admitted 2019",
  },
];

export function LegalTemplate() {
  return (
    <div className="tpl tpl-legal tpl-serif pb-14">
      <TplNav
        brand="Van Wyk & Partners"
        sub="Attorneys · Conveyancers · Bloemfontein"
        items={["Practice areas", "People", "Process", "Contact"]}
        cta="Request a consultation"
      />

      {/* hero */}
      <section className="relative overflow-hidden border-b border-[var(--tpl-line)]">
        <img
          src="/images/legal.jpg"
          alt="Law library detail"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative mx-auto grid max-w-[90rem] gap-10 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
          <div className="md:col-span-8">
            <p className="tpl-label">Established practice · Bloemfontein</p>
            <h1 className="mt-6 max-w-[20ch] text-[clamp(2.6rem,6vw,5rem)] leading-[1.02] tracking-[-0.02em]">
              Counsel, considered.
            </h1>
            <p className="mt-7 max-w-[52ch] text-base leading-relaxed text-[var(--tpl-fg)]/75">
              A firm of eleven attorneys advising businesses, property owners and families across
              the Free State. Plain language, written advice, and a named attorney on every matter.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="tpl-label bg-[var(--tpl-accent)] px-6 py-4 text-[var(--tpl-bg)] transition-opacity hover:opacity-85"
              >
                Request a consultation
              </a>
              <a
                href="#practice"
                className="tpl-label border border-[var(--tpl-line)] px-6 py-4 hover:border-[var(--tpl-accent)] hover:text-[var(--tpl-accent)]"
              >
                Practice areas
              </a>
            </div>
          </div>
          <div className="md:col-span-4 md:self-end">
            <dl className="border-t border-[var(--tpl-line)]">
              {[
                ["Attorneys", "11"],
                ["Conveyancers", "4"],
                ["Established", "1998"],
                ["Languages", "English · Afrikaans · Sesotho"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between gap-4 border-b border-[var(--tpl-line)] py-3"
                >
                  <dt className="tpl-label">{k}</dt>
                  <dd className="text-sm text-[var(--tpl-fg)]/85">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* practice areas */}
      <section id="practice" className="mx-auto max-w-[90rem] px-5 py-20 md:px-10 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] leading-none">Practice areas</h2>
          <p className="max-w-[38ch] text-sm text-[var(--tpl-muted)]">
            Each area is led by a partner and staffed by attorneys who work in it daily.
          </p>
        </div>
        <div className="mt-12 grid gap-px bg-[var(--tpl-line)] md:grid-cols-2">
          {PRACTICE.map((item) => (
            <article
              key={item.area}
              className="group bg-[var(--tpl-bg)] p-8 transition-colors hover:bg-[var(--tpl-surface)]"
            >
              <p className="tpl-label">{item.n}</p>
              <h3 className="mt-4 text-2xl">{item.area}</h3>
              <p className="mt-3 max-w-[44ch] text-sm leading-relaxed text-[var(--tpl-muted)]">
                {item.body}
              </p>
              <p className="tpl-label mt-6 text-[var(--tpl-accent)]">Read the approach →</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-[80ch] text-xs leading-relaxed text-[var(--tpl-muted)]">
          Information on this website is general in nature and does not constitute legal advice. An
          attorney-client relationship is established only by a signed mandate.
        </p>
      </section>

      {/* people */}
      <section id="people" className="border-y border-[var(--tpl-line)] bg-[var(--tpl-surface)]">
        <div className="mx-auto max-w-[90rem] px-5 py-20 md:px-10 md:py-24">
          <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] leading-none">
            The people on your matter
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {PEOPLE.map((person) => (
              <article key={person.name} className="border-t border-[var(--tpl-line)] pt-6">
                <div className="flex h-20 w-20 items-center justify-center border border-[var(--tpl-accent)]/40 font-serif text-xl text-[var(--tpl-accent)]">
                  {person.initials}
                </div>
                <h3 className="mt-5 text-2xl">{person.name}</h3>
                <p className="mt-1 text-sm text-[var(--tpl-fg)]/80">{person.role}</p>
                <p className="tpl-label mt-3">{person.admitted}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* process */}
      <section id="process" className="mx-auto max-w-[90rem] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="tpl-label">What happens next</p>
            <h2 className="mt-4 text-[clamp(1.9rem,3.4vw,2.8rem)] leading-tight">
              Three steps, no surprises.
            </h2>
          </div>
          <ol className="md:col-span-8">
            {[
              [
                "Consultation",
                "A 30-minute discussion of the facts, the options and the likely cost. R950, credited against the mandate if you proceed.",
              ],
              [
                "Written mandate",
                "Scope, fees and the attorney responsible, set out in writing before work begins.",
              ],
              [
                "Matter management",
                "A single point of contact, agreed reporting intervals and copies of every document filed.",
              ],
            ].map(([title, body], i) => (
              <li
                key={title}
                className="grid gap-3 border-t border-[var(--tpl-line)] py-6 last:border-b md:grid-cols-12"
              >
                <span className="tpl-label md:col-span-2">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-xl md:col-span-4">{title}</h3>
                <p className="text-sm leading-relaxed text-[var(--tpl-muted)] md:col-span-6">
                  {body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* contact */}
      <section id="contact" className="border-t border-[var(--tpl-line)] bg-[var(--tpl-surface)]">
        <div className="mx-auto grid max-w-[90rem] gap-10 px-5 py-20 md:grid-cols-2 md:px-10">
          <div>
            <p className="tpl-label">Consultations</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] leading-none">Speak to an attorney.</h2>
            <p className="mt-5 max-w-[40ch] text-sm leading-relaxed text-[var(--tpl-muted)]">
              Consultations are held at our Bloemfontein offices or by video. Bring any contracts,
              correspondence or court documents relevant to the matter.
            </p>
            <p className="tpl-label mt-8">Mon – Fri · 08:00 – 16:30</p>
          </div>
          <form className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Full name", type: "text" },
              { label: "Contact number", type: "tel" },
              { label: "Email", type: "email" },
              { label: "Practice area", type: "text" },
            ].map((field) => (
              <label key={field.label} className="block">
                <span className="tpl-label">{field.label}</span>
                <input
                  type={field.type}
                  className="mt-2 w-full border-b border-[var(--tpl-line)] bg-transparent py-2 text-sm outline-none focus:border-[var(--tpl-accent)]"
                />
              </label>
            ))}
            <label className="block sm:col-span-2">
              <span className="tpl-label">Brief description</span>
              <textarea
                rows={3}
                className="mt-2 w-full border border-[var(--tpl-line)] bg-transparent p-3 text-sm outline-none focus:border-[var(--tpl-accent)]"
              />
            </label>
            <button
              type="button"
              className="tpl-label bg-[var(--tpl-accent)] px-6 py-4 text-[var(--tpl-bg)] sm:col-span-2"
            >
              Request consultation
            </button>
          </form>
        </div>
      </section>

      <TplFooter
        brand="Van Wyk & Partners"
        address="Concept address · Bloemfontein, Free State"
        note="Illustrative brand created by Obsidian Labs to demonstrate legal-sector design."
      />
      <DemoBar slug="legal" />
    </div>
  );
}
