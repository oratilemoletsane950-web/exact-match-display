import type { GroupSeed } from "./types";

/* ================================================= 04 · HOSPITALITY */

export const HOSPITALITY: GroupSeed = {
  slug: "hospitality",
  themeKey: "hospitality",
  name: "Hospitality & Tourism",
  short: "Hospitality & tourism",
  intro:
    "Room discovery, availability, booking, menus and immersive photography. Each template earns the booking by showing the place honestly — rates, policies and the room before the enquiry, not after.",
  image: "/images/portfolio/hospitality.jpg",
  gallery: ["/images/portfolio/hospitality.jpg", "/images/hotel-suite.jpg", "/images/dining.jpg"],
  templateReference: "Bistro — Shadcn UI Restaurant Template — clevision (free, 21st.dev)",
  capabilities: [
    "Room discovery",
    "Availability & rates",
    "Bookings",
    "Menus & dining",
    "Experiences",
    "Guest communication",
  ],
  features: [
    { title: "Rooms", body: "Every room with real dimensions, outlook and what is included." },
    { title: "Availability", body: "Dates, guests and rates calculated before the guest commits." },
    { title: "Booking", body: "A short, honest path with cancellation terms stated early." },
    { title: "Dining", body: "Menus by service, with prices and dietary notes." },
    { title: "Experiences", body: "Spa, safari and transfers presented as bookable additions." },
    { title: "Guest care", body: "Pre-arrival details, directions and a host who answers." },
  ],
  process: [
    { step: "Discover", title: "See the place", body: "Photography and room detail that match what arrives at the door." },
    { step: "Check", title: "Choose dates", body: "Availability and the full rate, including levies, before checkout." },
    { step: "Book", title: "Reserve directly", body: "Direct booking with the best rate and a clear cancellation window." },
    { step: "Arrive", title: "Know the plan", body: "Directions, check-in, dining times and a host on message." },
  ],
  faqs: [
    { q: "Is the direct rate the best rate?", a: "Yes. Direct bookings carry the best available rate and are not charged a booking platform commission." },
    { q: "What is the cancellation policy?", a: "Flexible rates cancel free up to 48 hours before arrival. Non-refundable rates are labelled clearly with the saving shown." },
    { q: "Are children welcome?", a: "Family rooms and cots are available. Restaurants state their age policy and whether a children's menu is served." },
    { q: "Do you cater for dietary requirements?", a: "Every menu carries allergen notes, and the kitchen asks for requirements at the time of booking rather than at the table." },
  ],
  testimonials: [
    { quote: "The room was exactly the one in the photographs, down to the view. That is the whole promise, kept.", name: "Sarah Naidoo", role: "Guest, Cape Town" },
    { quote: "Booking direct took ninety seconds and the confirmation had everything we needed for arrival.", name: "James Whitfield", role: "Guest, London" },
    { quote: "Our occupancy moved eleven points after the new site. The booking path is simply shorter.", name: "Annelie du Plessis", role: "General manager, The Calyx" },
  ],
  partners: ["Booking.com", "Expedia", "Visa", "SAA", "Tourism SA"],
  stats: [
    { value: "94%", label: "Average occupancy" },
    { value: "4.9/5", label: "Guest rating" },
    { value: "12", label: "Room categories" },
    { value: "3", label: "Restaurants" },
    { value: "48h", label: "Free cancellation" },
    { value: "82%", label: "Direct bookings" },
  ],
  rows: [
    {
      brand: "The Calyx",
      name: "Luxury Hotel",
      headline: "A hotel that understands the quiet.",
      design: "Contemporary luxury",
      blurb:
        "Ninety rooms above the city with a resident sommelier, a small spa and a check-in that happens where you are sitting.",
      nav: "Rooms|Dining|Spa|Experiences|Contact",
      cta: "Check availability",
      tone: "dark",
      accent: "#d8b078",
      display: "instrument",
      items:
        "City room|4200|38 m²;Corner suite|7800|62 m²;Terrace suite|9600|74 m²;Calyx penthouse|16500|140 m²",
    },
    {
      brand: "Maison Verre",
      name: "Boutique Hotel",
      headline: "Twelve rooms, no two alike.",
      design: "Artistic editorial",
      blurb:
        "A restored townhouse with artist-designed rooms, a courtyard restaurant and a host who remembers why you came.",
      nav: "Rooms|House|Table|Neighbourhood|Contact",
      cta: "Reserve a room",
      accent: "#7a4a2e",
      display: "dmserif",
      items:
        "Garden room|2850|28 m²;Atelier room|3450|36 m²;Glasshouse suite|5200|52 m²;Rooftop suite|6900|68 m²",
    },
    {
      brand: "Coral Cove",
      name: "Resort",
      headline: "Where the day decides the plan.",
      design: "Tropical organic",
      blurb:
        "Beachfront villas, a reef programme and three kitchens, with transfers, kids' clubs and nothing that needs a queue.",
      nav: "Villas|Dining|Reef|Wellness|Contact",
      cta: "Plan your stay",
      accent: "#0f7a6b",
      display: "fraunces",
      radius: "26px",
      items:
        "Garden villa|6400|72 m²;Beach villa|9800|96 m²;Reef suite|12500|118 m²;Cove residence|19800|210 m²",
    },
    {
      brand: "Longitude Travel",
      name: "Travel Agency",
      headline: "Trips that are actually yours.",
      design: "Adventure-inspired",
      blurb:
        "Tailor-made itineraries, small-group departures and a 24-hour line that answers from the country you are standing in.",
      nav: "Journeys|Small group|Tailor-made|Guides|Contact",
      cta: "Talk to a specialist",
      accent: "#a0522d",
      items:
        "Okavango delta|9 days|From R68 000;Sahara crossing|12 days|From R92 000;Atlantic coast|7 days|From R41 000;Kruger walking|5 days|From R29 000",
    },
    {
      brand: "Aeris",
      name: "Airline",
      headline: "Fewer hours, better hours.",
      design: "Aerodynamic minimalism",
      blurb:
        "A regional carrier with a lean fleet, transparent fares and a business cabin that behaves like one — on time, quietly.",
      nav: "Book|Network|Cabin|Loyalty|Contact",
      cta: "Search flights",
      tone: "dark",
      accent: "#7fc7ff",
      display: "space",
      items:
        "Cape Town|JNB–CPT|From R1 890;Windhoek|JNB–WDH|From R3 250;Gaborone|JNB–GBE|From R2 490;Nairobi|JNB–NBO|From R6 900",
    },
    {
      brand: "Table No. 7",
      name: "Restaurant",
      headline: "A table worth rearranging the week for.",
      design: "Editorial sophistication",
      blurb:
        "A twenty-four seat kitchen with a daily menu, a serious wine list and one sitting — so the room belongs to the people in it.",
      nav: "Menu|The room|Wine|Private dining|Reserve",
      cta: "Reserve a table",
      tone: "dark",
      accent: "#e0a45c",
      display: "dmserif",
      items:
        "Tasting menu|7 courses|R1 250;Vegetarian menu|7 courses|R1 150;Wine pairing|5 glasses|R780;Private room|12 guests|Enquire",
    },
    {
      brand: "Slow Drip",
      name: "Coffee Shop",
      headline: "Coffee, taken seriously but not solemnly.",
      design: "Warm minimalism",
      blurb:
        "Single-origin espresso, a rotating filter list and a pastry counter built for the ten minutes you actually have.",
      nav: "Coffee|Food|Beans|Locations|Contact",
      cta: "Order ahead",
      accent: "#8a5a3b",
      display: "instrument",
      items:
        "Flat white|38|Coffee;Filter of the day|42|Coffee;Almond croissant|46|Bakery;Beans 250g|165|Retail",
    },
    {
      brand: "Nocturne",
      name: "Fine Dining",
      headline: "After dark, the menu changes.",
      design: "Dark luxury",
      blurb:
        "A twelve-seat counter serving a nocturnal tasting menu with low light, vinyl and a kitchen you can watch from beginning to end.",
      nav: "The menu|Counter|Cellar|Story|Reserve",
      cta: "Request a seat",
      tone: "dark",
      accent: "#c9a227",
      display: "dmserif",
      items:
        "Counter tasting|12 courses|R2 450;Cellar pairing|8 glasses|R1 480;Chef's table|6 guests|R18 500;Late seating|5 courses|R1 650",
    },
    {
      brand: "Stayfolk",
      name: "Airbnb & Rentals",
      headline: "Stay somewhere that feels lived in.",
      design: "Lifestyle minimalism",
      blurb:
        "Design-led apartments, cottages and cabins with self check-in, honest house rules and a host on message, not at a desk.",
      nav: "Stays|Cities|Hosts|Long stays|Contact",
      cta: "Find a stay",
      accent: "#2f6f6a",
      items:
        "City loft|1800|2 guests;Cottage|2400|4 guests;Coastal cabin|3200|4 guests;Long-stay flat|1450|2 guests",
    },
    {
      brand: "Kalahari House",
      name: "Safari Lodge",
      headline: "The desert, with the volume down.",
      design: "African contemporary",
      blurb:
        "Eight suites, two waterholes and guides who have spent decades reading this land, with conservation levies stated plainly.",
      nav: "Suites|Safari|Conservation|Dining|Contact",
      cta: "Enquire about dates",
      tone: "dark",
      accent: "#c98a4b",
      display: "fraunces",
      items:
        "Dune suite|9800|64 m²;Waterhole suite|12400|78 m²;Family villa|18600|120 m²;Star deck|14500|90 m²",
    },
  ],
};

/* =================================================== 05 · EDUCATION */

export const EDUCATION: GroupSeed = {
  slug: "education",
  themeKey: "education",
  name: "Education & E-Learning",
  short: "Education & e-learning",
  intro:
    "Student dashboards, course catalogues, enrolment, learning materials, assessment and progress. These templates treat education as a system with real learners, deadlines and evidence of progress.",
  image: "/images/portfolio/education.jpg",
  gallery: ["/images/portfolio/education.jpg", "/images/hero.jpg", "/images/portfolio/education.jpg"],
  templateReference: "Astronomy Club Website Template — kedhareswer (free, 21st.dev)",
  capabilities: [
    "Student dashboards",
    "Course catalogue",
    "Enrolment",
    "Learning materials",
    "Assessments",
    "Progress analytics",
  ],
  features: [
    { title: "Catalogue", body: "Programmes with outcomes, duration, cost and entry requirements." },
    { title: "Enrolment", body: "Applications, document uploads and status without a phone call." },
    { title: "Learning", body: "Lessons, readings and recordings in the order they are taught." },
    { title: "Assessment", body: "Briefs, submissions, rubrics and feedback in one place." },
    { title: "Progress", body: "Completion, grades and next actions the student can act on." },
    { title: "Reporting", body: "Cohort analytics for the people responsible for outcomes." },
  ],
  process: [
    { step: "Explore", title: "Choose a programme", body: "Outcomes, structure and cost stated before an application begins." },
    { step: "Apply", title: "Submit once", body: "Documents and details captured once, with progress saved between sessions." },
    { step: "Learn", title: "Work through it", body: "Lessons, assessments and feedback in a sequence that makes sense." },
    { step: "Progress", title: "See the evidence", body: "Grades, completion and next steps visible to student and lecturer." },
  ],
  faqs: [
    { q: "Is financial aid available?", a: "Bursaries, payment plans and employer sponsorship are listed on each programme page with eligibility and closing dates." },
    { q: "Can I study part-time?", a: "Most programmes offer a part-time route with evening contact sessions and recorded lectures." },
    { q: "How is assessment handled?", a: "Every module publishes its assessment plan, weighting and rubric at the start of the term." },
    { q: "Are qualifications recognised?", a: "Programmes state their accreditation body and registration number on the programme page, not in a footer." },
  ],
  testimonials: [
    { quote: "I could see exactly what was outstanding each week instead of finding out at the end of term.", name: "Sipho Ndlovu", role: "Part-time student" },
    { quote: "The application uploaded once and the status was accurate the whole way through.", name: "Anika Botha", role: "Postgraduate applicant" },
    { quote: "Lecturers spend less time answering admin email and more time on feedback.", name: "Dr Thabo Mokoena", role: "Programme head" },
  ],
  partners: ["DHET", "Umalusi", "SETA", "Chegg", "Microsoft Education"],
  stats: [
    { value: "18 400", label: "Students enrolled" },
    { value: "92%", label: "Module completion" },
    { value: "6", label: "Faculties" },
    { value: "148", label: "Programmes" },
    { value: "4.7/5", label: "Student rating" },
    { value: "11:1", label: "Student to lecturer" },
  ],
  rows: [
    {
      brand: "Northgate University",
      name: "University",
      headline: "A century of asking better questions.",
      design: "Academic prestige",
      blurb:
        "Six faculties, research institutes and a part-time route for working adults — presented with the clarity a prospect actually needs.",
      nav: "Study|Faculties|Research|Admissions|Campus",
      cta: "Explore programmes",
      accent: "#1e3a6b",
      display: "dmserif",
      items:
        "Bachelor of Commerce|36|Undergraduate;LLB|48|Undergraduate;MSc Data Science|24|Postgraduate;Postgraduate diploma in education|12|Postgraduate",
    },
    {
      brand: "Brightfield Primary",
      name: "Primary School",
      headline: "Curiosity, safely encouraged.",
      design: "Playful modernism",
      blurb:
        "A primary school with small classes, a garden classroom and a parent portal that shows the week without a paper newsletter.",
      nav: "Our school|Learning|Parents|Admissions|Contact",
      cta: "Book a school tour",
      accent: "#e05a2b",
      display: "fraunces",
      radius: "20px",
      items:
        "Foundation phase|3 years|Grade R–3;Intermediate phase|4 years|Grade 4–6;Senior phase|3 years|Grade 7–9;Aftercare|Full year|All grades",
    },
    {
      brand: "Ridgeview High",
      name: "High School",
      headline: "Standards, without the noise.",
      design: "Structured minimalism",
      blurb:
        "An academic high school with a strong maths and science record, sport for everyone and a timetable parents can actually read.",
      nav: "Academics|Sport|Culture|Admissions|Contact",
      cta: "Apply for 2027",
      accent: "#245a3a",
      items:
        "Grade 8–9|2 years|Junior;Grade 10–12|3 years|Senior;Matric rewrite|1 year|Part-time;Holiday school|4 weeks|All grades",
    },
    {
      brand: "Loop Academy",
      name: "Online Academy",
      headline: "A school that fits the week you have.",
      design: "EdTech futurism",
      blurb:
        "Self-paced and cohort courses with live studios, mentor feedback and credentials that employers can verify in one click.",
      nav: "Courses|Cohorts|Mentors|Credentials|Pricing",
      cta: "Start learning",
      tone: "dark",
      accent: "#7c5cff",
      display: "space",
      items:
        "Product design|10|Beginner;Data analysis|12|Intermediate;Front-end engineering|16|Intermediate;AI foundations|6|Beginner",
    },
    {
      brand: "Classroom OS",
      name: "Learning Management System",
      headline: "The whole campus, in one workspace.",
      design: "SaaS minimalism",
      blurb:
        "Course delivery, assessment, attendance and reporting for institutions that have outgrown the spreadsheet and the group chat.",
      nav: "Platform|Assessment|Analytics|Integrations|Pricing",
      cta: "Book a walkthrough",
      accent: "#2151d8",
      items:
        "Course builder|Core|Included;Assessment engine|Core|Included;Attendance|Core|Included;Reporting|Add-on|Included",
    },
    {
      brand: "Stack School",
      name: "Coding Bootcamp",
      headline: "Twelve weeks to a first offer.",
      design: "Developer brutalism",
      blurb:
        "Full-time and part-time engineering bootcamps with pair programming, real client briefs and a career team that keeps working after demo day.",
      nav: "Programmes|Curriculum|Outcomes|Careers|Apply",
      cta: "Apply now",
      tone: "dark",
      accent: "#57e389",
      display: "space",
      items:
        "Full-stack engineering|12 weeks|Full-time;Front-end|8 weeks|Part-time;Back-end|10 weeks|Part-time;Data engineering|14 weeks|Full-time",
    },
    {
      brand: "Coursebook",
      name: "Online Course Marketplace",
      headline: "Learn from people still doing the work.",
      design: "Modular design",
      blurb:
        "Thousands of courses from practitioners, with previews, verified reviews and a refund policy that does not require a phone call.",
      nav: "Browse|Categories|Instructors|Reviews|Teach",
      cta: "Browse courses",
      accent: "#0f766e",
      items:
        "Financial modelling|8 hours|Finance;Brand strategy|6 hours|Marketing;Python for analysts|11 hours|Data;Public speaking|4 hours|Communication",
    },
    {
      brand: "Tandem Tutors",
      name: "Tutoring Platform",
      headline: "The right tutor changes the subject.",
      design: "Friendly modernism",
      blurb:
        "Matched one-to-one tutoring for school and university, online or in person, with progress notes after every session.",
      nav: "Subjects|Tutors|How it works|Pricing|Contact",
      cta: "Find a tutor",
      accent: "#b45309",
      display: "fraunces",
      radius: "16px",
      items:
        "Mathematics|Grades 8–12|R380/hour;Physical sciences|Grades 10–12|R400/hour;Accounting|University|R450/hour;English|All levels|R360/hour",
    },
    {
      brand: "Ascend Learning",
      name: "Corporate Training",
      headline: "Training that survives the quarter end.",
      design: "Professional minimalism",
      blurb:
        "Leadership, compliance and technical programmes delivered in short modules, with attendance evidence and manager dashboards.",
      nav: "Programmes|Delivery|Compliance|Clients|Contact",
      cta: "Request a proposal",
      accent: "#1e40af",
      items:
        "Leadership essentials|6 modules|Managers;POPIA compliance|3 modules|All staff;Finance for non-finance|5 modules|Managers;Presentation skills|2 modules|All staff",
    },
    {
      brand: "Campus Desk",
      name: "Educational Institution Portal",
      headline: "One login for the whole institution.",
      design: "Institutional design",
      blurb:
        "Student records, registration, fees and results in a portal designed for the people standing in the registration queue.",
      nav: "Students|Staff|Registration|Fees|Support",
      cta: "Access the portal",
      accent: "#334155",
      items:
        "Registration|Semester|Students;Results|Semester|Students;Fee statement|On demand|Students;Timetable|Weekly|Students",
    },
  ],
};

/* ================================================== 06 · TECHNOLOGY */

export const TECHNOLOGY: GroupSeed = {
  slug: "technology",
  themeKey: "technology",
  name: "Technology & Software",
  short: "Technology & software",
  intro:
    "Interactive product demonstrations, service dashboards, subscription management, analytics and client portals. These templates are built to show working software, with pricing and usage that respond to the visitor.",
  image: "/images/portfolio/technology.jpg",
  gallery: ["/images/portfolio/technology.jpg", "/images/hero.jpg", "/images/portfolio/technology.jpg"],
  templateReference: "AI App Builder Landing Page Template — kedhareswer (free, 21st.dev)",
  capabilities: [
    "Product demos",
    "Dashboards",
    "Subscription management",
    "Usage analytics",
    "Pricing calculators",
    "Client portals",
  ],
  features: [
    { title: "Live demo", body: "Product surfaces with real states instead of a static screenshot." },
    { title: "Dashboard", body: "Metrics, service health and logs a technical buyer will test." },
    { title: "Pricing", body: "Seats, usage and annual terms that calculate in front of the buyer." },
    { title: "Subscriptions", body: "Plan changes, invoices and payment state without a sales call." },
    { title: "Analytics", body: "Trends, cohorts and exports that reconcile with the invoice." },
    { title: "Portal", body: "Client access to projects, tickets and deliverables." },
  ],
  process: [
    { step: "Evaluate", title: "Try the product", body: "A working demonstration before a form, with sample data labelled as such." },
    { step: "Scope", title: "Price the work", body: "Seats, usage and term calculated live, including the annual discount." },
    { step: "Onboard", title: "Start properly", body: "Workspace, roles and integrations configured with a named engineer." },
    { step: "Operate", title: "Measure and improve", body: "Dashboards, invoices and a review cadence that keeps the product honest." },
  ],
  faqs: [
    { q: "Is there a free trial?", a: "Fourteen days on the Scale plan, without a card. Usage limits still apply and are shown in the workspace." },
    { q: "How does usage pricing work?", a: "A seat fee plus a request allowance. Overage is billed per thousand requests and shown before the invoice is issued." },
    { q: "Can we self-host?", a: "Enterprise deployments can run in your cloud account with a managed control plane and the same audit logging." },
    { q: "What happens to our data if we leave?", a: "A full export is available in open formats for ninety days after cancellation, with deletion certified in writing." },
  ],
  testimonials: [
    { quote: "We replaced three internal tools and a spreadsheet. The pricing calculator made the business case obvious.", name: "Kagiso Molefe", role: "Head of operations, Kestrel" },
    { quote: "The status page has been honest, including the two times things went wrong.", name: "Helena du Toit", role: "Engineering lead, Nova Foods" },
    { quote: "Onboarding took an afternoon, not a quarter. That is why we stayed.", name: "Arjun Naidoo", role: "CTO, Sable Group" },
  ],
  partners: ["AWS", "Cloudflare", "Stripe", "Vercel", "GitHub"],
  stats: [
    { value: "99.98%", label: "Uptime, trailing 12 months" },
    { value: "118 ms", label: "p95 API latency" },
    { value: "2.4bn", label: "Requests per month" },
    { value: "1 280", label: "Teams on the platform" },
    { value: "24/7", label: "Incident cover" },
    { value: "14 days", label: "Free trial" },
  ],
  rows: [
    {
      brand: "Cadence Cloud",
      name: "SaaS Company",
      headline: "Operations, finally in one rhythm.",
      design: "Swiss minimalism",
      blurb:
        "Planning, capacity and reporting for services teams, with a workspace your operations lead can configure without an engineer.",
      nav: "Product|Solutions|Pricing|Customers|Docs",
      cta: "Start free trial",
      accent: "#1a56db",
    },
    {
      brand: "Forge & Field",
      name: "Software Development Agency",
      headline: "We build the thing, then hand it over.",
      design: "Technical brutalism",
      blurb:
        "A senior product engineering studio for teams that need to ship: discovery, build, and a codebase your own team can inherit.",
      nav: "Work|Services|Process|Team|Contact",
      cta: "Start a project",
      tone: "dark",
      accent: "#ff5c00",
      display: "archivoBlack",
    },
    {
      brand: "Latent Systems",
      name: "AI Company",
      headline: "Models that earn their place in the workflow.",
      design: "Futuristic abstraction",
      blurb:
        "Applied machine learning for document-heavy operations, with evaluation, guardrails and a human in the loop by default.",
      nav: "Platform|Use cases|Research|Security|Contact",
      cta: "Request a demo",
      tone: "dark",
      accent: "#a78bfa",
      display: "syne",
    },
    {
      brand: "Blackglass Security",
      name: "Cybersecurity Company",
      headline: "Assume the breach. Prove otherwise.",
      design: "Dark industrial",
      blurb:
        "Penetration testing, detection engineering and incident response for organisations that cannot afford a quiet failure.",
      nav: "Services|Platform|Research|Response|Contact",
      cta: "Book a threat review",
      tone: "dark",
      accent: "#e11d48",
      display: "archivo",
    },
    {
      brand: "Stratus",
      name: "Cloud Computing",
      headline: "Infrastructure without the weather.",
      design: "Atmospheric minimalism",
      blurb:
        "Managed compute, storage and networking with predictable billing, regional failover and an engineer on the other end of the page.",
      nav: "Products|Regions|Pricing|Status|Docs",
      cta: "Deploy in minutes",
      accent: "#0e7490",
    },
    {
      brand: "Tiny Giant Apps",
      name: "Mobile App Company",
      headline: "Apps people open on purpose.",
      design: "Playful modernism",
      blurb:
        "Consumer and internal apps designed around one repeated task, built natively where it matters and shipped with the store work done.",
      nav: "Work|Services|Process|Apps|Contact",
      cta: "Bring us an idea",
      accent: "#f97316",
      display: "fraunces",
      radius: "20px",
    },
    {
      brand: "Northline IT",
      name: "IT Consultancy",
      headline: "Technology decisions, made legible.",
      design: "Corporate modernism",
      blurb:
        "Architecture reviews, vendor selection and delivery leadership for companies whose systems have outgrown their documentation.",
      nav: "Advisory|Delivery|Managed|Sectors|Contact",
      cta: "Book an assessment",
      accent: "#1e3a8a",
    },
    {
      brand: "Groundwork Hosting",
      name: "Web Hosting Company",
      headline: "Hosting that tells you the truth.",
      design: "Technical minimalism",
      blurb:
        "Managed WordPress, application hosting and backups on local infrastructure, with status pages, staged updates and real support hours.",
      nav: "Hosting|Backups|Status|Pricing|Support",
      cta: "Migrate for free",
      tone: "dark",
      accent: "#34d399",
      display: "mono",
    },
    {
      brand: "Signal Foundry",
      name: "Data Analytics Company",
      headline: "From dashboards to decisions.",
      design: "Data-driven design",
      blurb:
        "A warehouse, a semantic layer and dashboards your team trusts — built so the numbers agree with each other by Monday.",
      nav: "Platform|Solutions|Pricing|Customers|Docs",
      cta: "See a live dashboard",
      tone: "dark",
      accent: "#38bdf8",
      display: "space",
    },
    {
      brand: "Nightjar Games",
      name: "Game Development Studio",
      headline: "Worlds with a strange gravity.",
      design: "Experimental digital",
      blurb:
        "An independent studio making narrative games and experimental interfaces, with devlogs, playtests and a community that shapes the build.",
      nav: "Games|Studio|Devlog|Playtest|Contact",
      cta: "Join the playtest",
      tone: "dark",
      accent: "#f43f5e",
      display: "syne",
    },
  ],
};

export const SEEDS_B: GroupSeed[] = [HOSPITALITY, EDUCATION, TECHNOLOGY];
