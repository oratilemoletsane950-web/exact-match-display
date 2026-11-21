import { DemoBar, TplFooter, TplNav } from "@/components/exhibition/chrome";

const MENU = [
  {
    course: "To begin",
    items: [
      ["Ember bread, cultured butter, ash salt", "R95"],
      ["Cured springbok, burnt honey, mustard leaf", "R165"],
      ["Grilled leek, hazelnut, aged cheese", "R145"],
    ],
  },
  {
    course: "From the fire",
    items: [
      ["Dry-aged sirloin, bone marrow, wild garlic", "R395"],
      ["Line-caught yellowtail, charred fennel", "R345"],
      ["Coal-roasted cauliflower, almond, raisin", "R245"],
    ],
  },
  {
    course: "To finish",
    items: [
      ["Burnt honey tart, crème fraîche", "R120"],
      ["Dark chocolate, olive oil, sea salt", "R110"],
      ["Cheese trolley, quince, seed crackers", "R185"],
    ],
  },
];

export function DiningTemplate() {
  return (
    <div className="tpl tpl-dining tpl-serif pb-14">
      <TplNav
        brand="Ember & Oak"
        sub="Fire-led dining · Bloemfontein"
        items={[
          { label: "Menu", href: "#menu" },
          { label: "The room", href: "#the-room" },
          { label: "Visit", href: "#reserve" },
        ]}
        cta="Reserve a table"
        ctaHref="#reserve"
        align="center"
      />

      {/* hero */}
      <section className="relative">
        <div className="relative h-[76svh] min-h-[500px] overflow-hidden">
          <img
            src="/images/dining.jpg"
            alt="Ember & Oak dining room at night"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--tpl-bg)] via-[var(--tpl-bg)]/35 to-[var(--tpl-bg)]/60" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[80rem] px-5 pb-14 text-center md:px-10">
            <p className="tpl-label">Dinner Tuesday to Saturday · 18:00 – 22:00</p>
            <h1 className="mx-auto mt-6 max-w-[18ch] text-[clamp(2.8rem,7vw,6rem)] leading-[0.95]">
              Cooked over coals, served after dark.
            </h1>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#reserve"
                className="tpl-label bg-[var(--tpl-accent)] px-7 py-4 text-[var(--tpl-bg)] transition-opacity hover:opacity-85"
              >
                Reserve a table
              </a>
              <a
                href="#menu"
                className="tpl-label border border-[var(--tpl-fg)]/30 px-7 py-4 hover:border-[var(--tpl-accent)] hover:text-[var(--tpl-accent)]"
              >
                Read the menu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* statement */}
      <section className="mx-auto max-w-[70rem] px-5 py-20 text-center md:px-10 md:py-28">
        <p className="text-[clamp(1.4rem,2.6vw,2.1rem)] leading-[1.4]">
          One fire, one menu, twenty-eight seats. We cook what the morning market gives us and write
          the menu after service, not before it.
        </p>
        <p className="tpl-label mt-8">Chef's table available Thursdays · six seats</p>
      </section>

      {/* menu */}
      <section id="menu" className="border-y border-[var(--tpl-line)] bg-[var(--tpl-surface)]">
        <div className="mx-auto max-w-[80rem] px-5 py-20 md:px-10 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] leading-none">This week's menu</h2>
            <p className="tpl-label">Three courses · R595 · Wine pairing R295</p>
          </div>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {MENU.map((course) => (
              <div key={course.course}>
                <h3 className="tpl-label border-b border-[var(--tpl-line)] pb-3">
                  {course.course}
                </h3>
                <ul className="mt-5 space-y-5">
                  {course.items.map(([dish, price]) => (
                    <li key={dish} className="flex items-baseline gap-3">
                      <span className="text-[0.98rem] leading-snug">{dish}</span>
                      <span
                        aria-hidden
                        className="mb-1 flex-1 border-b border-dotted border-[var(--tpl-line)]"
                      />
                      <span className="text-sm text-[var(--tpl-accent)]">{price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-[70ch] text-xs leading-relaxed text-[var(--tpl-muted)]">
            Please tell us about allergies when booking. A discretionary 10% service charge applies
            to tables of eight or more.
          </p>
        </div>
      </section>

      {/* the room */}
      <section
        id="the-room"
        className="mx-auto grid max-w-[80rem] items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-10 md:py-24"
      >
        <img
          src="/images/hero.jpg"
          alt="Ember & Oak interior detail"
          className="aspect-[4/5] w-full object-cover"
          loading="lazy"
        />
        <div>
          <p className="tpl-label">The room</p>
          <h2 className="mt-5 text-[clamp(1.9rem,3.4vw,2.8rem)] leading-tight">
            Dark timber, low light, an open fire at the centre.
          </h2>
          <p className="mt-6 max-w-[44ch] text-sm leading-relaxed text-[var(--tpl-muted)]">
            The room seats twenty-eight across two levels. The counter looks into the fire; the
            mezzanine is quieter and better for four or six. Private dining for up to fourteen is
            available in the cellar by arrangement.
          </p>
          <ul className="mt-8 space-y-3 border-t border-[var(--tpl-line)] pt-6">
            {[
              "Tuesday – Saturday, dinner only",
              "Cellar private dining for 8 – 14",
              "Vegetarian and pescatarian menus on request",
            ].map((item) => (
              <li key={item} className="flex items-baseline gap-4 text-sm">
                <span aria-hidden className="h-px w-6 bg-[var(--tpl-accent)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* reserve */}
      <section id="reserve" className="border-t border-[var(--tpl-line)] bg-[var(--tpl-surface)]">
        <div className="mx-auto grid max-w-[80rem] gap-10 px-5 py-20 md:grid-cols-2 md:px-10">
          <div>
            <p className="tpl-label">Reservations</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] leading-none">Book the table.</h2>
            <p className="mt-5 max-w-[40ch] text-sm leading-relaxed text-[var(--tpl-muted)]">
              Tables are held for fifteen minutes. Cancellations within 24 hours are charged R250
              per seat, which we donate to the local food kitchen.
            </p>
            <div className="mt-8 space-y-2">
              <p className="tpl-label">Find us</p>
              <p className="text-sm text-[var(--tpl-muted)]">
                Concept address · West Burger Street, Bloemfontein
              </p>
              <p className="tpl-label mt-4">Open</p>
              <p className="text-sm text-[var(--tpl-muted)]">Tue – Sat · 18:00 – 22:00</p>
            </div>
          </div>
          <form className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Name", type: "text" },
              { label: "Guests", type: "number" },
              { label: "Date", type: "date" },
              { label: "Time", type: "time" },
            ].map((field) => (
              <label key={field.label} className="block">
                <span className="tpl-label">{field.label}</span>
                <input
                  type={field.type}
                  className="mt-2 w-full border border-[var(--tpl-line)] bg-transparent px-4 py-3 text-sm text-[var(--tpl-fg)] outline-none focus:border-[var(--tpl-accent)]"
                />
              </label>
            ))}
            <button
              type="button"
              className="tpl-label mt-2 bg-[var(--tpl-accent)] px-6 py-4 text-[var(--tpl-bg)] sm:col-span-2"
            >
              Request a table
            </button>
            <p className="text-xs text-[var(--tpl-muted)] sm:col-span-2">
              Demonstration interface — no reservation is made.
            </p>
          </form>
        </div>
      </section>

      <TplFooter
        brand="Ember & Oak"
        address="Concept address · Bloemfontein, Free State"
        note="Illustrative restaurant created by Obsidian Labs to demonstrate dining design."
      />
      <DemoBar slug="dining" />
    </div>
  );
}
