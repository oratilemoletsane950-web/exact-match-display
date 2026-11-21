import { DemoBar, TplFooter, TplNav } from "@/components/exhibition/chrome";

const LISTINGS = [
  {
    title: "14 Kestrel Rise",
    area: "Westdene · Bloemfontein",
    meta: "4 bed · 3 bath · 412 m²",
    price: "R4 850 000",
    image: "/images/estate.jpg",
  },
  {
    title: "The Mill House, Loft 3",
    area: "Museum Quarter · Bloemfontein",
    meta: "2 bed · 2 bath · 168 m²",
    price: "R2 340 000",
    image: "/images/hero.jpg",
  },
  {
    title: "Bergsig Smallholding",
    area: "Schoemansdrift · Free State",
    meta: "5 bed · 4 bath · 3.2 ha",
    price: "By appointment",
    image: "",
  },
];

export function RealEstateTemplate() {
  return (
    <div className="tpl tpl-estate tpl-sans pb-14">
      <TplNav
        brand="Meridian"
        sub="Property Co. · Est. 2009"
        items={[
          { label: "Listings", href: "#listings" },
          { label: "Why Meridian", href: "#why" },
          { label: "Sell with us", href: "#valuation" },
        ]}
        cta="Book a valuation"
        ctaHref="#valuation"
      />

      {/* hero: editorial split */}
      <section className="mx-auto grid max-w-[90rem] items-center gap-12 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="tpl-label">Bloemfontein & the Free State</p>
          <h1 className="mt-6 font-[var(--font-serif)] text-[clamp(2.8rem,6vw,5.4rem)] leading-[0.98] tracking-[-0.02em]">
            Property,
            <br />
            presented properly.
          </h1>
          <p className="mt-7 max-w-[44ch] text-base leading-relaxed text-[var(--tpl-muted)]">
            A mandate is earned by the quality of the presentation. Every Meridian listing is
            photographed, measured, floor-planned and written by the agent who knows the street.
          </p>
          <div className="mt-9 flex flex-wrap gap-6">
            <a
              href="#listings"
              className="tpl-label bg-[var(--tpl-fg)] px-6 py-4 text-[var(--tpl-bg)] transition-opacity hover:opacity-85"
            >
              View listings
            </a>
            <a
              href="#valuation"
              className="tpl-label border-b border-[var(--tpl-fg)]/40 pb-1 hover:border-[var(--tpl-accent)] hover:text-[var(--tpl-accent)]"
            >
              Request a valuation
            </a>
          </div>
        </div>
        <div className="lg:col-span-6">
          <img
            src="/images/estate.jpg"
            alt="Contemporary house at dusk, listed by Meridian Property Co."
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="mt-3 flex items-center justify-between border-t border-[var(--tpl-line)] pt-3">
            <p className="tpl-label">Featured · 14 Kestrel Rise</p>
            <p className="tpl-label">R4 850 000</p>
          </div>
        </div>
      </section>

      {/* search bar */}
      <section className="border-y border-[var(--tpl-line)] bg-[var(--tpl-surface)]">
        <div className="mx-auto grid max-w-[90rem] gap-4 px-5 py-6 md:grid-cols-4 md:items-end md:px-10">
          {[
            { label: "Suburb", placeholder: "Any suburb" },
            { label: "Property type", placeholder: "House, townhouse, land" },
            { label: "Bedrooms", placeholder: "Any" },
            { label: "Price range", placeholder: "Any" },
          ].map((field) => (
            <label key={field.label} className="block">
              <span className="tpl-label">{field.label}</span>
              <input
                type="text"
                placeholder={field.placeholder}
                className="mt-2 w-full border-b border-[var(--tpl-line)] bg-transparent py-2 text-sm outline-none placeholder:text-[var(--tpl-muted)] focus:border-[var(--tpl-accent)]"
              />
            </label>
          ))}
          <button
            type="button"
            className="tpl-label bg-[var(--tpl-accent)] px-5 py-3 text-[var(--tpl-bg)] md:col-span-4 md:justify-self-start"
          >
            Search 128 listings
          </button>
        </div>
      </section>

      {/* listings */}
      <section id="listings" className="mx-auto max-w-[90rem] px-5 py-20 md:px-10 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] leading-none">On the market</h2>
          <p className="tpl-label">Updated this week · 128 listings</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {LISTINGS.map((listing) => (
            <article key={listing.title} className="group">
              {listing.image ? (
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              ) : (
                <div className="flex aspect-[4/3] w-full flex-col justify-between border border-[var(--tpl-line)] p-6">
                  <p className="tpl-label">Private sale</p>
                  <p className="text-sm text-[var(--tpl-muted)]">
                    Full particulars released to qualified buyers on request.
                  </p>
                </div>
              )}
              <div className="mt-5 flex items-baseline justify-between gap-4 border-b border-[var(--tpl-line)] pb-3">
                <h3 className="font-serif text-2xl">{listing.title}</h3>
                <p className="tpl-label whitespace-nowrap">{listing.price}</p>
              </div>
              <p className="mt-3 text-sm text-[var(--tpl-muted)]">{listing.area}</p>
              <p className="mt-1 text-sm text-[var(--tpl-muted)]">{listing.meta}</p>
            </article>
          ))}
        </div>
      </section>

      {/* why */}
      <section id="why" className="border-y border-[var(--tpl-line)] bg-[var(--tpl-surface)]">
        <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-20 md:grid-cols-12 md:px-10 md:py-24">
          <div className="md:col-span-4">
            <p className="tpl-label">Why Meridian</p>
            <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.6rem)] leading-tight">
              Local knowledge, documented.
            </h2>
          </div>
          <div className="grid gap-10 md:col-span-8 sm:grid-cols-3">
            {[
              ["17 yrs", "Selling in the Free State"],
              ["9 days", "Average days to offer"],
              ["98%", "Of asking price achieved"],
            ].map(([value, label]) => (
              <div key={label} className="border-t border-[var(--tpl-line)] pt-5">
                <p className="font-serif text-3xl">{value}</p>
                <p className="mt-2 text-sm text-[var(--tpl-muted)]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* valuation */}
      <section
        id="valuation"
        className="mx-auto grid max-w-[90rem] items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-10 md:py-24"
      >
        <div>
          <p className="tpl-label">Sellers</p>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3.2rem)] leading-[1.03]">
            What is your property worth this quarter?
          </h2>
          <p className="mt-5 max-w-[42ch] text-sm leading-relaxed text-[var(--tpl-muted)]">
            A written valuation based on recent sales on your street, prepared by the agent who
            would market it. No obligation, no pressure.
          </p>
        </div>
        <form className="grid gap-4 border border-[var(--tpl-line)] p-6 sm:grid-cols-2 md:p-8">
          {[
            { label: "Name", type: "text" },
            { label: "Phone", type: "tel" },
            { label: "Property address", type: "text" },
            { label: "Email", type: "email" },
          ].map((field) => (
            <label key={field.label} className="block">
              <span className="tpl-label">{field.label}</span>
              <input
                type={field.type}
                className="mt-2 w-full border-b border-[var(--tpl-line)] bg-transparent py-2 text-sm outline-none focus:border-[var(--tpl-accent)]"
              />
            </label>
          ))}
          <button
            type="button"
            className="tpl-label mt-2 bg-[var(--tpl-fg)] px-5 py-4 text-[var(--tpl-bg)] sm:col-span-2"
          >
            Request valuation
          </button>
        </form>
      </section>

      <TplFooter
        brand="Meridian Property Co."
        address="Concept address · Westdene, Bloemfontein, Free State"
        note="Illustrative brand created by Obsidian Labs to demonstrate property design."
      />
      <DemoBar slug="real-estate" />
    </div>
  );
}
