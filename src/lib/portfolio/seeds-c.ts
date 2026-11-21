import type { GroupSeed } from "./types";

/* ==================================================== 07 · PROPERTY */

export const PROPERTY: GroupSeed = {
  slug: "property",
  themeKey: "property",
  name: "Real Estate & Construction",
  short: "Real estate & construction",
  intro:
    "Listings, filters, maps, virtual tours, viewings and bond calculators. These templates treat property as data: price, size, location and proof, with the enquiry following the evidence rather than interrupting it.",
  image: "/images/portfolio/property.jpg",
  gallery: ["/images/portfolio/property.jpg", "/images/estate.jpg", "/images/portfolio/property.jpg"],
  templateReference: "Amber Minimal palette — 21st.dev free theme",
  capabilities: [
    "Property listings",
    "Search & filters",
    "Map & area guides",
    "Virtual tours",
    "Viewing bookings",
    "Bond calculators",
  ],
  features: [
    { title: "Listings", body: "Photography, floor plans and honest descriptions for every property." },
    { title: "Search", body: "Suburb, price, bedrooms and property type filtered without a reload." },
    { title: "Area guides", body: "Schools, transport and local evidence for each suburb." },
    { title: "Virtual tours", body: "Walkthroughs and galleries that reduce wasted viewings." },
    { title: "Viewings", body: "Booked against a specific property with agent confirmation." },
    { title: "Finance", body: "Bond estimates with deposit and term, including the monthly figure." },
  ],
  process: [
    { step: "Search", title: "Narrow the field", body: "Filters that respect the buyer's actual budget and area." },
    { step: "Inspect", title: "See the property", body: "Gallery, floor plan and tour before a physical viewing is booked." },
    { step: "Calculate", title: "Know the cost", body: "Bond, deposit and monthly repayment alongside the asking price." },
    { step: "Offer", title: "Move with an agent", body: "A named agent, documents and a process with dates attached." },
  ],
  faqs: [
    { q: "How current are the listings?", a: "Listings sync from the agency system every fifteen minutes, and sold or withdrawn stock is removed rather than left online." },
    { q: "Can I book a viewing online?", a: "Yes. Choose a property, date and time, and the listing agent confirms directly with you." },
    { q: "Do you help with bond approval?", a: "Bond originators compare offers from multiple banks and explain the costs before you sign anything." },
    { q: "What do the levies include?", a: "Each sectional title listing states the levy and what it covers — insurance, maintenance, security or management." },
  ],
  testimonials: [
    { quote: "The floor plan and tour saved us three wasted viewings. We only drove to the one we bought.", name: "Michelle Kruger", role: "Buyer, Bayswater" },
    { quote: "The bond calculator matched the bank offer almost to the rand, which made the decision easy.", name: "Tebogo Mokoena", role: "First-time buyer" },
    { quote: "Every listing had the levy and rates stated. That is the detail sellers never put on a flyer.", name: "Andre Botha", role: "Investor" },
  ],
  partners: ["Absa", "Nedbank", "Standard Bank", "Property24", "Private Property"],
  stats: [
    { value: "1 240", label: "Active listings" },
    { value: "38 days", label: "Average time to offer" },
    { value: "R2.8bn", label: "Property sold in 2025" },
    { value: "14", label: "Suburbs covered" },
    { value: "96%", label: "Asking price achieved" },
    { value: "10.25%", label: "Indicative bond rate" },
  ],
  rows: [
    {
      brand: "Hearth & Stone",
      name: "Luxury Real Estate",
      headline: "Houses that deserve the photograph.",
      design: "High-end editorial",
      blurb:
        "A boutique agency for architecturally significant homes, with private listings, editorial property films and discreet negotiation.",
      nav: "Listings|Recent sales|Private register|Team|Contact",
      cta: "Request a valuation",
      accent: "#7a5a34",
      display: "dmserif",
      base: 8_450_000,
      items:
        "Cliftonview residence|Westdene|4|3;Olive Grove estate|Universitas|5|4;Stonehouse|Langenhoven Park|3|2;Ridge manor|Bayswater|6|5",
    },
    {
      brand: "Brick Lane Property",
      name: "Residential Property Agency",
      headline: "The suburb, explained by people who live there.",
      design: "Contemporary",
      blurb:
        "Family homes and townhouses with suburb guides, school catchments and an agent who answers on a Saturday.",
      nav: "Buy|Rent|Sell|Suburbs|Contact",
      cta: "Book a valuation",
      accent: "#1f3d5c",
      base: 1_850_000,
      items:
        "Brick Lane townhouse|Universitas|3|2;Family home on Tulle|Westdene|4|2;Courtyard house|Waverley|3|2;Garden cottage|Dan Pienaar|2|1",
    },
    {
      brand: "Meridian Commercial",
      name: "Commercial Property",
      headline: "Space that works as hard as the lease.",
      design: "Corporate",
      blurb:
        "Office, retail and industrial space with floor plans, zoning answers and a broker who has read the lease before you do.",
      nav: "Offices|Retail|Industrial|Floor plans|Contact",
      cta: "Request a schedule",
      accent: "#334155",
      display: "archivo",
      base: 24_000_000,
      items:
        "Kellner office block|CBD|0|0;Westdene retail|Westdene|0|0;Airport industrial|Bloemfontein|0|0;Parkview campus|Parkwest|0|0",
    },
    {
      brand: "Sable Developments",
      name: "Property Development",
      headline: "Neighbourhoods, drawn before they are built.",
      design: "Architectural",
      blurb:
        "Residential developments with master plans, unit availability, construction progress and a show village you can walk through.",
      nav: "Developments|Master plan|Availability|Progress|Contact",
      cta: "Book a show village",
      tone: "dark",
      accent: "#d1b48c",
      display: "instrument",
      base: 3_200_000,
      items:
        "Sable Ridge phase 1|Bayswater|4|3;Sable Ridge phase 2|Bayswater|3|2;Olive Estate|Universitas|4|3;The Courtyard|Westdene|2|2",
    },
    {
      brand: "Ironwood Construction",
      name: "Construction Company",
      headline: "Built once. Built properly.",
      design: "Industrial brutalism",
      blurb:
        "Commercial and residential construction with programme transparency, site reporting and a handover file that is actually complete.",
      nav: "Projects|Capabilities|Safety|Programme|Contact",
      cta: "Request a quote",
      accent: "#9a3412",
      display: "archivoBlack",
      base: 2_800_000,
      items:
        "Retail shell|CBD|0|0;Office refurbishment|Westdene|0|0;School hall|Universitas|0|0;Warehouse extension|Airport|0|0",
    },
    {
      brand: "Linea Studio",
      name: "Architecture Studio",
      headline: "Space, resolved.",
      design: "Swiss minimalism",
      blurb:
        "An architecture practice working across residential, cultural and adaptive-reuse projects, with drawings that survive the builder.",
      nav: "Projects|Practice|Process|Publications|Contact",
      cta: "Start a project",
      accent: "#111111",
      base: 6_400_000,
      items:
        "Courtyard house|Westdene|4|3;Gallery conversion|CBD|0|0;Coastal retreat|Garden Route|3|3;Studio extension|Universitas|2|1",
    },
    {
      brand: "Quiet Rooms",
      name: "Interior Design Studio",
      headline: "Rooms that make sense at 7am.",
      design: "Scandinavian",
      blurb:
        "Interior architecture and furnishing for homes and small hotels, with material libraries, room plans and procurement handled.",
      nav: "Projects|Services|Materials|Journal|Contact",
      cta: "Book a consultation",
      accent: "#8a6a52",
      display: "instrument",
      base: 1_250_000,
      items:
        "Westdene house|Westdene|4|3;Guesthouse|Universitas|8|8;Loft apartment|CBD|2|2;Farm kitchen|Langenhoven Park|0|0",
    },
    {
      brand: "Keyline Management",
      name: "Property Management",
      headline: "The building, handled.",
      design: "Functional minimalism",
      blurb:
        "Rental management, maintenance and compliance for landlords and bodies corporate, with owner statements that reconcile.",
      nav: "Landlords|Tenants|Maintenance|Compliance|Contact",
      cta: "Get a management quote",
      accent: "#0f766e",
      base: 1_150_000,
      items:
        "Kellner apartments|CBD|12|0;Westdene complex|Westdene|24|0;Office portfolio|CBD|6|0;Student flats|Universitas|18|0",
    },
    {
      brand: "Nestly",
      name: "Rental Platform",
      headline: "Rent without the runaround.",
      design: "Digital marketplace",
      blurb:
        "Verified rentals with virtual tours, application tracking and digital leases — built for people who need a home this month.",
      nav: "Rentals|Areas|List your home|Tenants|Contact",
      cta: "Find a rental",
      accent: "#2563eb",
      base: 12_500,
      items:
        "City studio|CBD|1|1;Two-bed apartment|Universitas|2|1;Family townhouse|Waverley|3|2;Garden cottage|Dan Pienaar|2|1",
    },
    {
      brand: "Terra Capital",
      name: "Real Estate Investment",
      headline: "Property, underwritten.",
      design: "Financial sophistication",
      blurb:
        "Syndicated commercial and residential investments with tenant data, yield modelling and reporting for every investor in the vehicle.",
      nav: "Opportunities|Portfolio|Research|Investors|Contact",
      cta: "Request the pack",
      tone: "dark",
      accent: "#c9a86a",
      display: "dmserif",
      base: 48_000_000,
      items:
        "Retail centre|Bloemfontein|0|0;Office park|Westdene|0|0;Industrial park|Airport|0|0;Residential block|Universitas|40|0",
    },
  ],
};

/* ================================================= 08 · AUTOMOTIVE */

export const AUTOMOTIVE: GroupSeed = {
  slug: "automotive",
  themeKey: "automotive",
  name: "Automotive & Transportation",
  short: "Automotive & transportation",
  intro:
    "Vehicle catalogues, comparison tools, finance quotes, service scheduling, fleet tracking and logistics dashboards. Specifications are treated as the design material, with controls that answer real buying questions.",
  image: "/images/portfolio/automotive.jpg",
  gallery: ["/images/portfolio/automotive.jpg", "/images/hero.jpg", "/images/portfolio/automotive.jpg"],
  templateReference: "ChemE Industrial Field Manual palette — 21st.dev free theme",
  capabilities: [
    "Vehicle catalogue",
    "Comparison tools",
    "Finance quotes",
    "Service scheduling",
    "Fleet tracking",
    "Logistics dashboards",
  ],
  features: [
    { title: "Catalogue", body: "Models, specifications and availability without a dealer phone call." },
    { title: "Compare", body: "Line up to three vehicles across the specification that matters." },
    { title: "Finance", body: "Deposit, term and rate recalculated as the buyer moves a slider." },
    { title: "Service", body: "Book a service or repair with a stated time and estimate." },
    { title: "Fleet", body: "Vehicle status, utilisation and maintenance due in one view." },
    { title: "Logistics", body: "Shipment visibility, route status and proof of delivery." },
  ],
  process: [
    { step: "Specify", title: "Choose the vehicle", body: "Trim, fuel and body style with the specification attached." },
    { step: "Compare", title: "Test the options", body: "Up to three vehicles side by side, on the criteria that decide it." },
    { step: "Quote", title: "See the real cost", body: "Deposit, term and monthly repayment before the showroom visit." },
    { step: "Own", title: "Keep it on the road", body: "Service booking, reminders and a documented maintenance history." },
  ],
  faqs: [
    { q: "Are the prices on the road?", a: "Every price is labelled as on-the-road or excluding licensing and delivery, with the difference shown in the quote." },
    { q: "Can I trade in my current vehicle?", a: "Submit the registration, mileage and condition, and receive an indicative trade value before visiting." },
    { q: "How long does finance approval take?", a: "Applications usually receive an answer within four working hours, subject to document verification." },
    { q: "Is the service history available?", a: "Used vehicles list their service history and inspection report, including any paint or structural work." },
  ],
  testimonials: [
    { quote: "Comparing three models on the same table settled a two-week argument in ten minutes.", name: "Lindiwe Dube", role: "Buyer, Bloemfontein" },
    { quote: "The finance figure on the site matched the offer, including the balloon payment.", name: "Ruan Steyn", role: "Buyer, Centurion" },
    { quote: "We track forty vehicles on the fleet view. Maintenance due is visible before it becomes a breakdown.", name: "Peter Nkosi", role: "Fleet manager, Axis Freight" },
  ],
  partners: ["Toyota", "Volkswagen", "Ford", "Motus", "WesBank"],
  stats: [
    { value: "2 400", label: "Vehicles in stock" },
    { value: "48h", label: "Average delivery" },
    { value: "4.8/5", label: "Dealer rating" },
    { value: "12", label: "Service centres" },
    { value: "96%", label: "First-time fix rate" },
    { value: "5 years", label: "Standard warranty" },
  ],
  rows: [
    {
      brand: "Gild Motors",
      name: "Luxury Car Dealership",
      headline: "Cars chosen with the same care you buy them with.",
      design: "Automotive luxury",
      blurb:
        "A curated showroom of luxury and performance cars, with provenance files, private viewings and finance arranged in-house.",
      nav: "Showroom|Pre-owned|Finance|Service|Contact",
      cta: "Book a viewing",
      tone: "dark",
      accent: "#d4af6a",
      display: "dmserif",
      base: 2_450_000,
      items:
        "Gild GT coupe|2026|Petrol;Gild Saloon|2026|Hybrid;Gild Cabriolet|2025|Petrol;Gild SUV|2026|Hybrid",
    },
    {
      brand: "Second Gear",
      name: "Used Car Dealership",
      headline: "Every car has a history. Read it.",
      design: "Commercial modernism",
      blurb:
        "Inspected used cars with full history reports, a seven-day exchange and finance that is quoted before you sit down.",
      nav: "Stock|Finance|Trade-in|Warranty|Contact",
      cta: "Browse stock",
      accent: "#1e4d7b",
      display: "archivo",
      base: 289_000,
      items:
        "Second Gear hatch|2022|Petrol;Family SUV|2021|Diesel;Compact sedan|2023|Petrol;Utility double cab|2020|Diesel",
    },
    {
      brand: "Volt Motors",
      name: "Electric Vehicle Brand",
      headline: "Electric, without the asterisk.",
      design: "Futuristic minimalism",
      blurb:
        "An EV brand built around range honesty, home charging installation and a service model that mostly happens over the air.",
      nav: "Models|Range|Charging|Ownership|Contact",
      cta: "Book a test drive",
      tone: "dark",
      accent: "#6ee7f0",
      display: "space",
      base: 899_000,
      items:
        "Volt One|2026|Electric;Volt Tourer|2026|Electric;Volt Compact|2026|Electric;Volt Cargo|2026|Electric",
    },
    {
      brand: "Ridgeline Motorcycles",
      name: "Motorcycle Brand",
      headline: "Built for the long way round.",
      design: "Industrial rebellion",
      blurb:
        "Adventure and naked motorcycles with real service intervals, a parts catalogue and a rider community that meets monthly.",
      nav: "Motorcycles|Parts|Service|Riders|Contact",
      cta: "Book a test ride",
      tone: "dark",
      accent: "#ff4d1c",
      display: "archivoBlack",
      base: 389_000,
      items:
        "Ridgeline 800|2026|Petrol;Ridgeline 1200|2026|Petrol;Ridgeline Scrambler|2025|Petrol;Ridgeline Tourer|2026|Petrol",
    },
    {
      brand: "Driftwell",
      name: "Car Rental",
      headline: "A car, without the counter.",
      design: "Functional modernism",
      blurb:
        "Airport and city rentals with app unlock, transparent fuel policy and a damage process documented before you drive off.",
      nav: "Fleet|Locations|Long-term|Business|Contact",
      cta: "Find a car",
      accent: "#0f766e",
      base: 720,
      items: "Compact|2026|Petrol;Sedan|2026|Hybrid;SUV|2026|Diesel;Van|2026|Diesel",
    },
    {
      brand: "Axis Freight",
      name: "Logistics Company",
      headline: "Freight you can see moving.",
      design: "Operational precision",
      blurb:
        "Road, rail and cross-border freight with live tracking, customs documentation and a control room that answers at 2am.",
      nav: "Services|Tracking|Network|Customs|Contact",
      cta: "Request a rate",
      accent: "#1e3a5f",
      display: "archivo",
      base: 1,
      items:
        "Road freight|FTL|National;Cross-border|FCL|SADC;Warehousing|3PL|National;Last mile|Parcel|Metro",
    },
    {
      brand: "Metroline Transport",
      name: "Transport Company",
      headline: "People and goods, on schedule.",
      design: "Corporate industrial",
      blurb:
        "Passenger shuttle, staff transport and scheduled distribution with route planning, driver reporting and a live operations desk.",
      nav: "Services|Routes|Fleet|Safety|Contact",
      cta: "Plan a route",
      accent: "#a16207",
      base: 1,
      items:
        "Staff shuttle|Daily|Corporate;Airport transfer|On demand|Passenger;Distribution|Scheduled|Retail;Charter|Group|Events",
    },
    {
      brand: "Pitstop Garage",
      name: "Automotive Repair",
      headline: "Diagnosis first. Parts second.",
      design: "Technical industrial",
      blurb:
        "An independent workshop for servicing, diagnostics and performance work, with photographed inspections and quotes before spanners move.",
      nav: "Services|Diagnostics|Booking|Pricing|Contact",
      cta: "Book a service",
      accent: "#7c2d12",
      display: "archivoBlack",
      base: 1,
      items:
        "Minor service|90 min|From R1 450;Major service|4 hours|From R4 200;Diagnostics|60 min|From R850;Brakes|2 hours|From R2 100",
    },
    {
      brand: "Autotrader Collective",
      name: "Vehicle Marketplace",
      headline: "Every listing, inspected.",
      design: "Marketplace minimalism",
      blurb:
        "Private and dealer vehicles with inspection reports, finance pre-approval and a price guide built from real transactions.",
      nav: "Buy|Sell|Finance|Inspections|Contact",
      cta: "Search vehicles",
      accent: "#1d4ed8",
      base: 459_000,
      items: "Hatchback|2022|Petrol;Sedan|2023|Petrol;SUV|2021|Diesel;Bakkie|2020|Diesel",
    },
    {
      brand: "Ferrous Works",
      name: "Automotive Manufacturing",
      headline: "Components that hold under load.",
      design: "Engineering futurism",
      blurb:
        "Precision manufacturing for automotive suppliers, with tolerance data, production capacity and an audit trail for every batch.",
      nav: "Capabilities|Materials|Quality|Capacity|Contact",
      cta: "Request specifications",
      tone: "dark",
      accent: "#9ca3af",
      display: "archivoBlack",
      base: 1,
      items:
        "Machined housing|Aluminium|CNC;Drive shaft|Steel|Forged;Bracket set|Alloy|Stamped;Test rig|Steel|Fabricated",
    },
  ],
};

export const SEEDS_C: GroupSeed[] = [PROPERTY, AUTOMOTIVE];
