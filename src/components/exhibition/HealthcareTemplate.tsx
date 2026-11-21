import { DemoBar, TplFooter, TplNav } from "@/components/exhibition/chrome";

const SERVICES = [
  [
    "General practice",
    "Everyday care for the whole family, from newborn checks to chronic scripts.",
  ],
  ["Women's health", "Contraception, antenatal shared care, menopause and cervical screening."],
  ["Travel & immunisation", "Destination advice, yellow fever and routine vaccination schedules."],
  ["Chronic care", "Structured reviews for diabetes, hypertension, asthma and cholesterol."],
];

export function HealthcareTemplate() {
  return (
    <div className="tpl tpl-clinic pb-14">
      <TplNav
        brand="Sunnyside Medical"
        sub="Family practice · Bloemfontein"
        items={["Services", "Team", "Fees", "Visit"]}
        cta="Book an appointment"
      />

      {/* hero */}
      <section className="mx-auto grid max-w-[90rem] items-center gap-12 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="tpl-label">Reg. no. 000 000 0000 · HPCSA registered</p>
          <h1 className="tpl-serif mt-6 text-[clamp(2.6rem,5.4vw,4.6rem)] leading-[1.02] tracking-[-0.02em]">
            Care that keeps
            <br />
            its appointments.
          </h1>
          <p className="mt-6 max-w-[44ch] text-base leading-relaxed text-[var(--tpl-muted)]">
            A four-doctor family practice in Sunnyside. Same-day slots most mornings, chronic
            reviews by arrangement, and a doctor who reads your file before you sit down.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a
              href="#reserve"
              className="tpl-label bg-[var(--tpl-accent)] px-6 py-4 text-white transition-opacity hover:opacity-85"
            >
              Book online
            </a>
            <a
              href="tel:+27510000000"
              className="tpl-label border-b border-[var(--tpl-fg)]/30 pb-1"
            >
              Or call the rooms
            </a>
          </div>
          <p className="mt-6 text-xs text-[var(--tpl-muted)]">
            For emergencies, call 10177. This practice does not provide after-hours emergency care.
          </p>
        </div>

        <div className="lg:col-span-6">
          <div className="overflow-hidden">
            <img
              src="/images/clinic.jpg"
              alt="Sunnyside Medical consulting room"
              className="aspect-[4/3] w-full rounded-t-[6rem] object-cover"
            />
          </div>
          <div className="rounded-b-lg border border-t-0 border-[var(--tpl-line)] bg-[var(--tpl-surface)] p-6">
            <p className="tpl-label">Next available</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {["Today 14:20", "Today 16:00", "Tomorrow 08:40"].map((slot) => (
                <button
                  key={slot}
                  type="button"
                  className="tpl-label border border-[var(--tpl-line)] px-3 py-3 text-[var(--tpl-accent)] transition-colors hover:border-[var(--tpl-accent)]"
                >
                  {slot}
                </button>
              ))}
            </div>
            <p className="mt-4 text-xs text-[var(--tpl-muted)]">
              Demonstration booking interface — no appointment is made.
            </p>
          </div>
        </div>
      </section>

      {/* services */}
      <section id="services" className="border-y border-[var(--tpl-line)] bg-[var(--tpl-surface)]">
        <div className="mx-auto max-w-[90rem] px-5 py-20 md:px-10 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="tpl-serif text-[clamp(1.9rem,3.6vw,2.8rem)] leading-none">
              What we treat
            </h2>
            <p className="max-w-[34ch] text-sm text-[var(--tpl-muted)]">
              Appointments are 20 minutes as standard; longer slots for chronic reviews and
              procedures.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {SERVICES.map(([title, body], i) => (
              <article
                key={title}
                className="rounded-lg border border-[var(--tpl-line)] bg-[var(--tpl-bg)] p-7"
              >
                <p className="tpl-label">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-xl font-normal">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--tpl-muted)]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* team */}
      <section id="team" className="mx-auto max-w-[90rem] px-5 py-20 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="tpl-label">The doctors</p>
            <h2 className="tpl-serif mt-4 text-[clamp(1.9rem,3.4vw,2.8rem)] leading-tight">
              You will know who you are seeing.
            </h2>
            <p className="mt-5 max-w-[36ch] text-sm leading-relaxed text-[var(--tpl-muted)]">
              Four doctors, each with their own list. Continuity of care is the point — you see the
              same practitioner wherever possible.
            </p>
          </div>
          <div className="md:col-span-8">
            <ul className="divide-y divide-[var(--tpl-line)] border-y border-[var(--tpl-line)]">
              {[
                ["Dr L. Mahlangu", "MBChB (UFS) · Family medicine", "Mon, Tue, Thu"],
                ["Dr P. Nel", "MBChB (UFS) · Chronic care", "Mon – Fri mornings"],
                ["Dr S. Khumalo", "MBChB (Wits) · Women's health", "Tue, Wed, Fri"],
                ["Dr J. Steyn", "MBChB (UFS) · Travel medicine", "Wed, Thu"],
              ].map(([name, quals, days]) => (
                <li key={name} className="grid gap-2 py-5 sm:grid-cols-12 sm:items-baseline">
                  <h3 className="text-lg sm:col-span-5">{name}</h3>
                  <p className="text-sm text-[var(--tpl-muted)] sm:col-span-4">{quals}</p>
                  <p className="tpl-label sm:col-span-3 sm:text-right">{days}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* fees */}
      <section id="fees" className="border-y border-[var(--tpl-line)] bg-[var(--tpl-surface)]">
        <div className="mx-auto grid max-w-[90rem] gap-10 px-5 py-16 md:grid-cols-3 md:px-10">
          {[
            [
              "Medical aids",
              "All major schemes. Please bring your card; we claim directly where the plan allows.",
            ],
            [
              "Private rates",
              "R620 for a standard consultation. A written quote is given before procedures.",
            ],
            ["Payment", "Card or EFT on the day. Accounts older than 30 days attract interest."],
          ].map(([title, body]) => (
            <div key={title} className="border-t border-[var(--tpl-line)] pt-5">
              <h3 className="text-lg">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--tpl-muted)]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* book */}
      <section id="reserve" className="mx-auto max-w-[90rem] px-5 py-20 md:px-10 md:py-24">
        <div className="rounded-xl border border-[var(--tpl-line)] bg-[var(--tpl-surface)] p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="tpl-label">Appointments</p>
              <h2 className="tpl-serif mt-4 text-[clamp(2rem,3.6vw,3rem)] leading-none">
                Book in under a minute.
              </h2>
              <p className="mt-5 max-w-[40ch] text-sm leading-relaxed text-[var(--tpl-muted)]">
                Choose a doctor and a slot. You will receive a confirmation by SMS and a reminder
                the day before. Cancel free of charge up to four hours ahead.
              </p>
              <p className="tpl-label mt-8">Mon – Fri 07:30 – 17:00 · Sat 08:00 – 12:00</p>
            </div>
            <form className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Full name", type: "text" },
                { label: "Mobile number", type: "tel" },
                { label: "Preferred doctor", type: "text" },
                { label: "Reason for visit", type: "text" },
              ].map((field) => (
                <label key={field.label} className="block">
                  <span className="tpl-label">{field.label}</span>
                  <input
                    type={field.type}
                    className="mt-2 w-full rounded-md border border-[var(--tpl-line)] bg-[var(--tpl-bg)] px-4 py-3 text-sm outline-none focus:border-[var(--tpl-accent)]"
                  />
                </label>
              ))}
              <button
                type="button"
                className="tpl-label mt-2 rounded-md bg-[var(--tpl-accent)] px-6 py-4 text-white sm:col-span-2"
              >
                Request appointment
              </button>
              <p className="text-xs text-[var(--tpl-muted)] sm:col-span-2">
                By submitting you consent to being contacted about this appointment. Please do not
                include clinical details in this form.
              </p>
            </form>
          </div>
        </div>
      </section>

      <TplFooter
        brand="Sunnyside Medical"
        address="Concept address · Sunnyside, Bloemfontein, Free State"
        note="Illustrative practice created by Obsidian Labs to demonstrate healthcare design."
      />
      <DemoBar slug="healthcare" />
    </div>
  );
}
