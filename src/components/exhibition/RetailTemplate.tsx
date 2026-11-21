import { DemoBar, TplFooter, TplNav } from "@/components/exhibition/chrome";

const PRODUCTS = [
  {
    name: "The Wool Coat",
    price: "R6 900",
    note: "Italian wool · unlined",
    image: "/images/retail.jpg",
  },
  { name: "Silk Slip Dress", price: "R3 450", note: "Bias cut · black", image: "" },
  { name: "Leather Tote", price: "R4 200", note: "Vegetable-tanned", image: "" },
  { name: "Cashmere Scarf", price: "R1 890", note: "Undyed · one size", image: "" },
];

export function RetailTemplate() {
  return (
    <div className="tpl tpl-retail tpl-sans pb-14">
      <TplNav
        brand="Atelier Noir"
        sub="Johannesburg · Cape Town"
        items={["New in", "Ready to wear", "Objects", "Journal"]}
        cta="Bag (0)"
      />

      {/* hero */}
      <section className="border-b border-[var(--tpl-line)]">
        <div className="mx-auto grid max-w-[90rem] gap-0 md:grid-cols-12">
          <div className="flex flex-col justify-center px-5 py-16 md:col-span-7 md:px-10 md:py-24 lg:py-32">
            <p className="tpl-label">Autumn / Winter 26</p>
            <h1 className="mt-6 text-[clamp(3rem,7.4vw,7rem)] leading-[0.9] font-light tracking-[-0.045em] uppercase">
              Considered
              <br />
              clothing,
              <br />
              in black.
            </h1>
            <p className="mt-8 max-w-[38ch] text-sm leading-relaxed text-[var(--tpl-muted)]">
              Twelve pieces, cut in Johannesburg from Italian wool, silk and vegetable-tanned
              leather. Made in small runs, repaired for life.
            </p>
            <div className="mt-9 flex flex-wrap gap-6">
              <a
                href="#shop"
                className="tpl-label bg-[var(--tpl-fg)] px-7 py-4 text-[var(--tpl-bg)] hover:opacity-85"
              >
                Shop the collection
              </a>
              <a href="#lookbook" className="tpl-label border-b border-[var(--tpl-fg)]/30 pb-1">
                View lookbook
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <img
              src="/images/retail.jpg"
              alt="The Wool Coat from Atelier Noir"
              className="h-full max-h-[86svh] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* shop */}
      <section id="shop" className="mx-auto max-w-[90rem] px-5 py-16 md:px-10 md:py-24">
        <div className="flex items-baseline justify-between gap-4 border-b border-[var(--tpl-line)] pb-4">
          <h2 className="text-sm tracking-[0.2em] uppercase">New in</h2>
          <p className="tpl-label">All prices include VAT</p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <article key={product.name} className="group">
              <div className="relative">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-[3/4] w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex aspect-[3/4] w-full items-end justify-center bg-[var(--tpl-surface)] p-6">
                    <span className="text-[0.6rem] tracking-[0.3em] text-[var(--tpl-muted)] uppercase">
                      Image on request
                    </span>
                  </div>
                )}
                <span className="tpl-label absolute top-3 left-3 bg-white/90 px-2 py-1 text-[var(--tpl-fg)] opacity-0 transition-opacity group-hover:opacity-100">
                  Quick add
                </span>
              </div>
              <h3 className="mt-4 text-sm">{product.name}</h3>
              <p className="mt-1 text-xs text-[var(--tpl-muted)]">{product.note}</p>
              <p className="mt-2 text-sm">{product.price}</p>
            </article>
          ))}
        </div>
      </section>

      {/* lookbook */}
      <section id="lookbook" className="border-y border-[var(--tpl-line)] bg-[var(--tpl-surface)]">
        <div className="mx-auto grid max-w-[90rem] items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-10 md:py-24">
          <div>
            <p className="tpl-label">Lookbook 04</p>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3.4rem)] leading-[0.95] font-light uppercase">
              The uniform,
              <br />
              reconsidered.
            </h2>
            <p className="mt-6 max-w-[42ch] text-sm leading-relaxed text-[var(--tpl-muted)]">
              Photographed in Braamfontein over two mornings. Every garment is cut to be worn for a
              decade, then repaired rather than replaced.
            </p>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-[var(--tpl-line)] pt-6">
              {[
                ["12", "Pieces"],
                ["4", "Fabrics"],
                ["1", "Atelier"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="text-2xl">{value}</dt>
                  <dd className="tpl-label mt-1">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <img
            src="/images/hero.jpg"
            alt="Atelier Noir lookbook detail"
            className="aspect-[5/4] w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* service strip */}
      <section className="mx-auto max-w-[90rem] px-5 py-14 md:px-10">
        <div className="grid gap-8 sm:grid-cols-3">
          {[
            ["Delivery", "Free nationwide over R1 500. Collected within 2–4 working days."],
            ["Returns", "30 days, unworn, collected from your door for R90."],
            ["Repairs", "Free alterations and repairs for the life of the garment."],
          ].map(([title, body]) => (
            <div key={title} className="border-t border-[var(--tpl-line)] pt-4">
              <h3 className="tpl-label">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--tpl-muted)]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* newsletter */}
      <section className="border-t border-[var(--tpl-line)]">
        <div className="mx-auto flex max-w-[90rem] flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center md:px-10">
          <div>
            <h2 className="text-lg tracking-[0.15em] uppercase">The list</h2>
            <p className="mt-2 max-w-[40ch] text-sm text-[var(--tpl-muted)]">
              Collection releases and repair notes. Four emails a year, no more.
            </p>
          </div>
          <form className="flex w-full max-w-md gap-0 border-b border-[var(--tpl-fg)]/40">
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-[var(--tpl-muted)]"
            />
            <button type="button" className="tpl-label px-4">
              Join
            </button>
          </form>
        </div>
      </section>

      <TplFooter
        brand="Atelier Noir"
        address="Concept address · Braamfontein, Johannesburg"
        note="Illustrative label created by Obsidian Labs to demonstrate retail and commerce design."
      />
      <DemoBar slug="retail" />
    </div>
  );
}
