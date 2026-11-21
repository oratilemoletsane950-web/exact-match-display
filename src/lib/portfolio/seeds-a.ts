import type { GroupSeed } from "./types";

/* ===================================================== 01 · BANKING */

export const BANKING: GroupSeed = {
  slug: "banking",
  themeKey: "banking",
  name: "Banking & Financial Services",
  short: "Banking & financial services",
  intro:
    "Retail, business and institutional banking on one platform: accounts, payments, lending and the reporting treasury teams actually use. Every template in this group demonstrates a real financial workflow, not a hero image with a phone mock-up.",
  image: "/images/portfolio/banking.jpg",
  gallery: ["/images/portfolio/banking.jpg", "/images/portfolio/professional.jpg", "/images/hero.jpg"],
  templateReference: "Treasury Management Fintech Landing Page — kedhareswer (free, 21st.dev)",
  capabilities: [
    "Accounts & payments",
    "Lending & credit",
    "Treasury",
    "Investments",
    "Cards & expenses",
    "Reporting & controls",
  ],
  features: [
    { title: "Account management", body: "Balances, statements and sub-accounts with the controls a finance team needs." },
    { title: "Payments", body: "Once-off, scheduled and batch payments with approval chains and references." },
    { title: "Credit", body: "Affordability, repayment schedules and lending decisions shown before commitment." },
    { title: "Treasury", body: "Cash positions, liquidity and FX exposure consolidated across entities." },
    { title: "Investments", body: "Portfolio performance, allocations and statements in one view." },
    { title: "Controls", body: "Role-based access, audit trails and exportable reporting for auditors." },
  ],
  process: [
    { step: "Apply", title: "Open in one sitting", body: "Identity, entity documents and signatories captured once, with progress saved." },
    { step: "Verify", title: "Compliance, explained", body: "FICA and KYC requirements stated plainly, with a named person on the file." },
    { step: "Operate", title: "Move money", body: "Accounts, cards, payments and approvals in a workspace built for daily use." },
    { step: "Review", title: "Report and plan", body: "Monthly statements, exposure reports and a quarterly review with your banker." },
  ],
  faqs: [
    { q: "How long does onboarding take?", a: "A personal account can be opened the same day. Business accounts typically clear compliance within three working days once documents are complete." },
    { q: "Are fees disclosed upfront?", a: "Yes. Every template shows a fee schedule before the application step, including monthly account fees and transaction charges." },
    { q: "How is security handled?", a: "Two-factor authentication, device approval, transaction limits and a full audit trail are standard. Approvals can require two signatories." },
    { q: "Can I keep my existing account numbers?", a: "Switch support moves debit orders and salary payments, and existing account numbers can be retained in most cases." },
  ],
  testimonials: [
    { quote: "The treasury view replaced four spreadsheets and a Monday meeting. We close the month in two days now.", name: "Nomsa Dlamini", role: "Group financial manager, Kestrel Energy" },
    { quote: "Approvals are visible, so nobody sits on a payment wondering who has it.", name: "Riaan van der Merwe", role: "Founder, Sable Group" },
    { quote: "The fee schedule was the first one I did not have to have explained to me.", name: "Thandi Mokoena", role: "Director, Nova Foods" },
  ],
  partners: ["Kestrel Energy", "Dlamini Holdings", "Sable Group", "Nova Foods", "Highveld Rail"],
  stats: [
    { value: "R2.4tn", label: "Assets under administration" },
    { value: "1912", label: "Year established" },
    { value: "38", label: "Countries served" },
    { value: "1.2m", label: "Personal and business clients" },
    { value: "4.9/5", label: "Client satisfaction" },
    { value: "11.75%", label: "Prime-linked lending rate" },
  ],
  rows: [
    {
      brand: "Meridian National",
      name: "Commercial Bank",
      headline: "Banking built on a hundred years of judgement.",
      design: "Corporate luxury",
      blurb:
        "A full-service bank for corporates and institutions: treasury, lending, trade and advisory, presented with the restraint the money deserves.",
      nav: "Banking|Business|Treasury|Insights|Contact",
      cta: "Speak to a banker",
      accent: "#003fb8",
    },
    {
      brand: "Nova",
      name: "Digital Bank",
      headline: "Money that moves at the speed of your life.",
      design: "Futuristic minimalism",
      blurb:
        "A branchless bank with instant accounts, real-time payments and spending insight — designed for people who never visit a bank.",
      nav: "Accounts|Save|Borrow|Plan|Support",
      cta: "Open an account",
      tone: "dark",
      accent: "#7c9cff",
      display: "space",
    },
    {
      brand: "Halcyon Partners",
      name: "Investment Bank",
      headline: "Capital, advised with conviction.",
      design: "Institutional elegance",
      blurb:
        "Mergers, capital markets and structured finance for companies at inflection points. Evidence first, theatre never.",
      nav: "Advisory|Markets|Research|People|Contact",
      cta: "Request a profile",
      tone: "dark",
      accent: "#c9a86a",
      display: "dmserif",
    },
    {
      brand: "Ashworth & Co.",
      name: "Private Banking",
      headline: "Wealth, held quietly across generations.",
      design: "Old-money luxury",
      blurb:
        "Discretionary portfolios, family governance and lending against assets — a private office for families who prefer not to be listed.",
      nav: "The office|Portfolios|Families|Perspectives|Contact",
      cta: "Arrange an introduction",
      accent: "#6b5a3e",
      display: "instrument",
    },
    {
      brand: "Common Ground CU",
      name: "Credit Union",
      headline: "A bank that answers to its members.",
      design: "Community-focused",
      blurb:
        "Savings, affordable credit and member dividends for people in the same towns and trades. Owned by the people who use it.",
      nav: "Join|Save|Borrow|Members|Contact",
      cta: "Become a member",
      accent: "#1f6f5c",
      display: "fraunces",
    },
    {
      brand: "Sentinel Assurance",
      name: "Insurance Company",
      headline: "Cover that explains itself.",
      design: "Trust and simplicity",
      blurb:
        "Personal, commercial and specialist cover with plain-language policies, fast claims and an adviser who stays on the file.",
      nav: "Cover|Claims|Business|Advice|Contact",
      cta: "Get a quote",
      accent: "#1a4f8a",
    },
    {
      brand: "Stackwise",
      name: "Fintech Startup",
      headline: "Payments infrastructure without the paperwork.",
      design: "Neo-brutalism",
      blurb:
        "One API for collections, payouts and reconciliation. Built for product teams who would rather ship than chase a bank.",
      nav: "Product|Developers|Pricing|Docs|Contact",
      cta: "Start building",
      accent: "#ff4d00",
      display: "archivoBlack",
    },
    {
      brand: "Vaultline",
      name: "Cryptocurrency Exchange",
      headline: "Digital assets, institutional custody.",
      design: "Cyberpunk",
      blurb:
        "Spot, derivatives and custody with proof-of-reserves, sub-account controls and an API built for treasuries rather than tourists.",
      nav: "Markets|Custody|API|Research|Contact",
      cta: "Open a vault",
      tone: "dark",
      accent: "#22d3ee",
      display: "syne",
    },
    {
      brand: "Linden Rowe",
      name: "Wealth Management",
      headline: "A long view, written down.",
      design: "Editorial luxury",
      blurb:
        "Investment management and financial planning for professionals and founders, with a written strategy you can actually read.",
      nav: "Approach|Portfolios|Planning|Insights|Contact",
      cta: "Book a review",
      accent: "#7a2e2e",
      display: "instrument",
    },
    {
      brand: "ClearPath Lending",
      name: "Loan & Mortgage Provider",
      headline: "A home loan without the fog.",
      design: "Professional minimalism",
      blurb:
        "Bond originators and secured lending with transparent rates, a calculator that matches the offer and one adviser end to end.",
      nav: "Home loans|Calculate|Rates|Guides|Contact",
      cta: "Check your affordability",
      accent: "#0f5f4a",
    },
  ],
};

/* ================================================== 02 · HEALTHCARE */

export const HEALTHCARE: GroupSeed = {
  slug: "healthcare",
  themeKey: "healthcare",
  name: "Healthcare & Medical",
  short: "Healthcare & medical",
  intro:
    "Appointment scheduling, patient records, service directories, online consultations and prescription management. Each template treats a clinic as an operation with patients moving through it, not a brochure with a stock photograph.",
  image: "/images/portfolio/healthcare.jpg",
  gallery: ["/images/portfolio/healthcare.jpg", "/images/clinic.jpg", "/images/portfolio/healthcare.jpg"],
  templateReference: "Organic sage palette — Sage Garden theme (free, 21st.dev)",
  capabilities: [
    "Appointment scheduling",
    "Patient portal",
    "Service directory",
    "Telehealth",
    "Prescriptions",
    "Results & records",
  ],
  features: [
    { title: "Booking", body: "Real availability by clinician, with confirmation and reminders." },
    { title: "Patient portal", body: "Appointments, scripts and results in one place, written for patients." },
    { title: "Service directory", body: "Specialties, clinicians and conditions that are easy to search." },
    { title: "Telehealth", body: "Video consultations with waiting-room expectations set honestly." },
    { title: "Prescriptions", body: "Repeat scripts, collection status and delivery options." },
    { title: "Results", body: "Lab results with plain-language status and a path to a clinician." },
  ],
  process: [
    { step: "Book", title: "Choose a clinician", body: "Availability by specialty, with the next open slot shown before the form." },
    { step: "Prepare", title: "Know what to bring", body: "Documents, fasting requirements and costs stated before arrival." },
    { step: "Consult", title: "See someone", body: "In person or by video, with notes and scripts issued to the portal." },
    { step: "Follow up", title: "Keep the thread", body: "Results, repeats and follow-up appointments without another phone queue." },
  ],
  faqs: [
    { q: "Do you accept medical aid?", a: "Every template lists the schemes and plans it contracts with, plus the cash price for uninsured patients." },
    { q: "How do repeat prescriptions work?", a: "Requests are submitted from the portal and reviewed by a clinician. Approved repeats appear with a collection or delivery status." },
    { q: "Can I see results online?", a: "Results are released to the patient portal with a plain-language status. Anything requiring review is flagged with a next step." },
    { q: "What happens in an emergency?", a: "Emergency numbers and the nearest emergency unit are visible on every page, not buried in a contact section." },
  ],
  testimonials: [
    { quote: "I booked at 21:40 and saw someone at 08:30. The confirmation told me exactly what to bring.", name: "Lerato Khumalo", role: "Patient, Universitas" },
    { quote: "The repeat script flow removed the weekly phone call to the rooms.", name: "Pieter van Wyk", role: "Chronic care patient" },
    { quote: "Results appear with a sentence explaining what they mean. That is rare and it matters.", name: "Aisha Patel", role: "Patient, Westdene" },
  ],
  partners: ["Discovery Health", "Bonitas", "Momentum Health", "Fedhealth", "GEMS"],
  stats: [
    { value: "42", label: "Specialists on the panel" },
    { value: "98%", label: "Patient satisfaction" },
    { value: "24/7", label: "Emergency cover" },
    { value: "6", label: "Theatres" },
    { value: "18 min", label: "Average waiting time" },
    { value: "12 000", label: "Patients seen each year" },
  ],
  rows: [
    {
      brand: "St. Aurelian",
      name: "Private Hospital",
      headline: "Specialist care, under one calm roof.",
      design: "Clinical sophistication",
      blurb:
        "A private hospital with twelve specialties, day theatre and a concierge admission desk — designed to make a frightening week legible.",
      nav: "Specialties|Doctors|Admissions|Patients|Contact",
      cta: "Find a specialist",
      accent: "#245a52",
      display: "fraunces",
    },
    {
      brand: "Fernwood Family Practice",
      name: "Medical Practice",
      headline: "The doctor who knows the whole family.",
      design: "Clean minimalism",
      blurb:
        "A family practice with same-day appointments, chronic care follow-ups and a patient record that follows you between rooms.",
      nav: "Services|Our doctors|Book|Scripts|Contact",
      cta: "Book an appointment",
      accent: "#3f6f5a",
    },
    {
      brand: "Ivory Dental Studio",
      name: "Dental Clinic",
      headline: "Dentistry that feels like a studio visit.",
      design: "Modern wellness",
      blurb:
        "Preventive, cosmetic and restorative dentistry in a quiet, light-filled practice with transparent pricing before treatment starts.",
      nav: "Treatments|Smile gallery|Prices|Book|Contact",
      cta: "Book a consultation",
      accent: "#7c6a58",
      display: "instrument",
      radius: "10px",
    },
    {
      brand: "Wellspring Pharmacy",
      name: "Pharmacy",
      headline: "Your script, ready before you arrive.",
      design: "Accessible modernism",
      blurb:
        "Repeat prescriptions, chronic medication delivery and a pharmacist you can message — for the everyday work of staying well.",
      nav: "Scripts|Deliveries|Clinic|Advice|Contact",
      cta: "Send a script",
      accent: "#1f7a5c",
    },
    {
      brand: "Still Point Therapy",
      name: "Mental Health Clinic",
      headline: "A place to put the weight down.",
      design: "Soft organic",
      blurb:
        "Individual, couples and group therapy with licensed psychologists, clear fees and an intake process that does not feel like admin.",
      nav: "Therapy|Our team|Fees|Resources|Contact",
      cta: "Request an intake",
      accent: "#6b5f8a",
      display: "fraunces",
      radius: "28px",
    },
    {
      brand: "Paws & Pines",
      name: "Veterinary Clinic",
      headline: "Good medicine for the whole household.",
      design: "Friendly minimalism",
      blurb:
        "Companion animal care, dentistry and emergencies with separate cat and dog waiting rooms and a team that explains every option.",
      nav: "Services|Vets|Emergencies|Book|Contact",
      cta: "Book a visit",
      accent: "#a05a2c",
    },
    {
      brand: "MediLink",
      name: "Telehealth Platform",
      headline: "A doctor in the room you are already in.",
      design: "Futuristic healthcare",
      blurb:
        "Video consultations, e-scripts and specialist referrals across the country, with a waiting room that tells you the truth about time.",
      nav: "How it works|Doctors|Conditions|Plans|Contact",
      cta: "Start a consultation",
      tone: "dark",
      accent: "#58e0c0",
      display: "space",
    },
    {
      brand: "Axiom Diagnostics",
      name: "Laboratory",
      headline: "Results you can act on, faster.",
      design: "Scientific precision",
      blurb:
        "Pathology, genetics and occupational testing with courier collection, clinician-grade reporting and results released to your portal.",
      nav: "Tests|Referrers|Collection|Results|Contact",
      cta: "Order a test",
      accent: "#14507a",
      display: "archivo",
    },
    {
      brand: "Kinetic Physio",
      name: "Physiotherapy Centre",
      headline: "Recovery, measured in weeks not wishes.",
      design: "Active wellness",
      blurb:
        "Sports and rehabilitation physiotherapy with movement screening, home programmes and progress you can see between sessions.",
      nav: "Conditions|Programmes|Team|Book|Contact",
      cta: "Book an assessment",
      accent: "#2f6b3a",
    },
    {
      brand: "Lumière Aesthetics",
      name: "Cosmetic Surgery Clinic",
      headline: "Considered aesthetics, never rushed.",
      design: "Medical luxury",
      blurb:
        "Surgical and non-surgical aesthetics led by consultant surgeons, with simulation, cooling-off periods and aftercare that answers.",
      nav: "Procedures|Surgeons|Simulation|Aftercare|Contact",
      cta: "Request a consultation",
      tone: "dark",
      accent: "#e3c9a3",
      display: "dmserif",
    },
  ],
};

/* ====================================================== 03 · RETAIL */

export const RETAIL: GroupSeed = {
  slug: "retail",
  themeKey: "retail",
  name: "Retail & E-Commerce",
  short: "Retail & e-commerce",
  intro:
    "Product catalogues, filtration, carts, checkout, accounts, inventory and order tracking. The templates in this group are built around the moment a customer decides, and the operational reality behind the product photograph.",
  image: "/images/portfolio/retail.jpg",
  gallery: ["/images/portfolio/retail.jpg", "/images/retail.jpg", "/images/portfolio/retail.jpg"],
  templateReference: "Playful Brand Scroll Landing Page — kedhareswer (free, 21st.dev)",
  capabilities: [
    "Product catalogue",
    "Search & filtering",
    "Cart & checkout",
    "Customer accounts",
    "Inventory",
    "Order tracking",
  ],
  features: [
    { title: "Catalogue", body: "Products with the images, variants and detail that reduce returns." },
    { title: "Filtering", body: "Category, price and attribute filters that respond immediately." },
    { title: "Cart", body: "Quantities, delivery thresholds and totals that never surprise." },
    { title: "Checkout", body: "A short path with clear delivery and payment expectations." },
    { title: "Accounts", body: "Order history, saved addresses and reordering in two clicks." },
    { title: "Inventory", body: "Stock visibility and honest lead times on every product page." },
  ],
  process: [
    { step: "Browse", title: "Find the thing", body: "Search, filters and editorial collections that behave like a good shop assistant." },
    { step: "Choose", title: "Understand the product", body: "Sizing, materials, delivery time and returns stated before the cart." },
    { step: "Checkout", title: "Pay without doubt", body: "Delivery thresholds, payment options and a confirmation that matches the total." },
    { step: "Track", title: "Follow the parcel", body: "Order status, tracking and a returns path that does not require an email." },
  ],
  faqs: [
    { q: "How long does delivery take?", a: "Metro delivery is one to two working days, regional three to five. Every product page shows the current lead time from live stock." },
    { q: "What is the returns policy?", a: "Thirty days for unused items in original packaging, with a prepaid return label. Sale items follow the same window unless marked final." },
    { q: "Can I collect in store?", a: "Yes. Click-and-collect is offered at every branch with a two-hour turnaround during trading hours." },
    { q: "Do you offer gift wrapping?", a: "Gift wrapping and a handwritten note can be added at checkout for a flat fee, with the price hidden on the packing slip." },
  ],
  testimonials: [
    { quote: "The size guide and real product photography meant the first order fitted. That is all I ask.", name: "Zanele Mahlangu", role: "Customer, Bloemfontein" },
    { quote: "Reorder takes two clicks and the delivery estimate has been right every time.", name: "Andile Nkosi", role: "Customer, Centurion" },
    { quote: "We moved the whole catalogue across in a week and stock has not disagreed once.", name: "Marike Steyn", role: "Owner, Nord & Oak" },
  ],
  partners: ["Visa", "Mastercard", "PayFast", "The Courier Guy", "Pargo"],
  stats: [
    { value: "48h", label: "Metro delivery" },
    { value: "12 000", label: "Products in catalogue" },
    { value: "4.8/5", label: "Average product rating" },
    { value: "30 days", label: "Returns window" },
    { value: "6", label: "Stores" },
    { value: "99.2%", label: "In-stock rate" },
  ],
  rows: [
    {
      brand: "Atelier Nine",
      name: "Fashion Store",
      headline: "Clothes with a point of view.",
      design: "Luxury editorial",
      blurb:
        "A seasonless wardrobe of tailored essentials, made in small runs and photographed like a magazine rather than a catalogue.",
      nav: "Collection|Lookbook|Atelier|Journal|Contact",
      cta: "Shop the collection",
      accent: "#111111",
      display: "dmserif",
      items:
        "Linen overshirt|1890|Apparel;Wide-leg trouser|2290|Apparel;Leather tote|3450|Accessories;Silk scarf|1190|Accessories",
    },
    {
      brand: "Volt & Circuit",
      name: "Electronics Store",
      headline: "The good stuff, explained properly.",
      design: "Futuristic tech",
      blurb:
        "Audio, computing and smart home hardware with honest specifications, side-by-side comparison and a two-year workshop warranty.",
      nav: "Shop|Compare|Workshop|Trade-in|Support",
      cta: "Shop new arrivals",
      tone: "dark",
      accent: "#4de3ff",
      display: "space",
      items:
        "Studio headphones|4290|Audio;Mechanical keyboard|2190|Computing;Portable speaker|1890|Audio;Smart display|5490|Home",
    },
    {
      brand: "Nord & Oak",
      name: "Furniture Store",
      headline: "Furniture for the next twenty years.",
      design: "Scandinavian",
      blurb:
        "Solid timber furniture and soft furnishing from Scandinavian workshops, with room plans, fabric samples and delivery that assembles.",
      nav: "Living|Bedroom|Studio|Samples|Contact",
      cta: "Book a room plan",
      accent: "#8a6a4a",
      display: "instrument",
      items:
        "Oak dining table|18400|Living;Linen sofa|21900|Living;Ash sideboard|12600|Living;Wool rug|4900|Textiles",
    },
    {
      brand: "Green Basket",
      name: "Supermarket",
      headline: "The weekly shop, without the queue.",
      design: "Functional minimalism",
      blurb:
        "Groceries, household goods and a fresh counter with slot-based delivery, saved baskets and substitutions you approve before dispatch.",
      nav: "Shop|Fresh|Delivery|Specials|Account",
      cta: "Start your basket",
      accent: "#2f7d32",
      items:
        "Free-range eggs (12)|64|Fresh;Sourdough loaf|48|Bakery;Olive oil 750ml|189|Pantry;Washing powder 2kg|149|Household",
    },
    {
      brand: "Aurelle Fine Jewellery",
      name: "Jewellery Store",
      headline: "Made once, worn for generations.",
      design: "High-end luxury",
      blurb:
        "Engagement rings, high jewellery and bespoke commissions with traceable stones, hand-finishing and a private appointment room.",
      nav: "Rings|High jewellery|Bespoke|Stones|Appointment",
      cta: "Book a private viewing",
      tone: "dark",
      accent: "#e2c48d",
      display: "dmserif",
      items:
        "Solitaire ring|48500|Rings;Diamond band|32900|Rings;Gold pendant|18700|Necklaces;Pearl studs|12400|Earrings",
    },
    {
      brand: "Soft Ritual",
      name: "Beauty Store",
      headline: "Skin, treated as a long game.",
      design: "Soft minimalism",
      blurb:
        "A tight edit of serums, cleansers and SPF with honest ingredient lists, routine builders and refills that cut the plastic.",
      nav: "Shop|Routines|Ingredients|Refills|Journal",
      cta: "Build a routine",
      accent: "#b06a7a",
      display: "fraunces",
      radius: "18px",
      items:
        "Barrier serum|620|Serum;Gentle cleanser|380|Cleanse;Mineral SPF 50|450|Protect;Night balm|540|Moisturise",
    },
    {
      brand: "Kinetic Supply",
      name: "Sports Retailer",
      headline: "Kit that survives the session.",
      design: "Dynamic brutalism",
      blurb:
        "Running, trail and gym equipment tested by athletes, with size guidance, team orders and a returns window that assumes you will sweat.",
      nav: "Run|Train|Trail|Teams|Returns",
      cta: "Shop the kit",
      accent: "#ff3b00",
      display: "archivoBlack",
      items:
        "Trail shoe|2890|Run;Training tee|690|Train;Hydration vest|1490|Trail;Lifting belt|890|Train",
    },
    {
      brand: "Torque & Tine",
      name: "Automotive Parts Store",
      headline: "The right part, first time.",
      design: "Industrial",
      blurb:
        "Parts by registration number, workshop-grade tools and oils, with fitment notes, core returns and same-day dispatch across the province.",
      nav: "Find parts|Tools|Oils|Fitment|Trade",
      cta: "Find my part",
      accent: "#1e4d7b",
      display: "archivo",
      items:
        "Brake pad set|1290|Braking;Oil filter|245|Service;Alloy wheel 17 inch|3490|Wheels;Workshop jack|2890|Tools",
    },
    {
      brand: "Common Market",
      name: "General Marketplace",
      headline: "A market with a thousand front doors.",
      design: "Modern modular",
      blurb:
        "Independent sellers, verified reviews and buyer protection in one place, with storefronts that still look like the people running them.",
      nav: "Browse|Sellers|Deals|Protection|Sell",
      cta: "Start browsing",
      accent: "#1a56db",
      items:
        "Ceramic mug set|420|Home;Vintage denim|890|Fashion;Desk lamp|1150|Home;Hand-bound journal|310|Stationery",
    },
    {
      brand: "Sole Society",
      name: "Sneaker Store",
      headline: "Pairs worth the queue.",
      design: "Streetwear",
      blurb:
        "Limited and general-release sneakers with raffle drops, authentication on every pair and a resale price history you can trust.",
      nav: "Drops|Shop|Raffles|Authenticate|Community",
      cta: "Enter the drop",
      tone: "dark",
      accent: "#ff2e63",
      display: "syne",
      items:
        "Court low|2899|Sneakers;Runner 02|3199|Sneakers;Trail high|3499|Sneakers;Slip-on|1899|Sneakers",
    },
  ],
};

export const SEEDS_A: GroupSeed[] = [BANKING, HEALTHCARE, RETAIL];
