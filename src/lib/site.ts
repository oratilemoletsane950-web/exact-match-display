/**
 * OBSIDIAN LABS — site content and configuration.
 *
 * Single source of truth for navigation, services, industries, the
 * exhibition templates and the researched search vocabulary.
 */

/**
 * Canonical origin. Update this single constant if the production domain
 * differs — canonicals, Open Graph URLs, JSON-LD and the sitemap all use it.
 */
export const SITE_URL = "https://obsidianlabs.co.za";

export const SITE = {
  name: "Obsidian Labs",
  legalName: "Continental Obsidian Ltd",
  tagline: "Software, engineered with intent.",
  city: "Bloemfontein",
  region: "Free State",
  country: "South Africa",
  countryCode: "ZA",
  email: "continentalobsidian@gmail.com",
  phoneDisplay: "",
  url: SITE_URL,
  description:
    "Obsidian Labs is a software development studio in Bloemfontein, South Africa. We design and build websites, mobile applications and business systems for hospitality, property, legal, healthcare, retail and dining businesses.",
} as const;

export const MAILTO = `mailto:${SITE.email}?subject=Project%20enquiry%20%E2%80%94%20Obsidian%20Labs`;

export const NAV = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Exhibition", href: "/exhibition" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/* ------------------------------------------------------------------ services */

export type Service = {
  slug: string;
  index: string;
  title: string;
  short: string;
  lead: string;
  body: string[];
  items: string[];
  deliverables: string[];
  keyword: string;
};

export const SERVICES: Service[] = [
  {
    slug: "websites",
    index: "01",
    title: "Websites",
    short:
      "Corporate, hospitality and commerce sites that sell the experience before the first enquiry.",
    lead: "A website is the first room a guest walks into.",
    body: [
      "We design and build marketing sites, luxury hospitality sites, online stores and editorial brand platforms. Every page is composed for a single job — to make the next click obvious — and built on a type scale, grid and motion language that stays consistent from the homepage to the last policy page.",
      "Performance, accessibility and search structure are part of the build, not an afterthought: semantic markup, considered metadata, structured data for your business type, and image budgets that keep a mobile page fast on South African networks.",
    ],
    items: [
      "Corporate and marketing websites",
      "Luxury hospitality, lodge and guesthouse sites",
      "E-commerce stores with local payment gateways",
      "Booking and reservation journeys",
      "Editorial, portfolio and brand platforms",
      "Website redesigns and design systems",
      "Website maintenance, hosting and care plans",
      "Search structure, metadata and analytics setup",
    ],
    deliverables: [
      "Information architecture and wireframes",
      "Bespoke visual design, desktop to mobile",
      "Production front-end build",
      "Content structure and on-page search setup",
      "Launch, handover and care plan",
    ],
    keyword: "website design Bloemfontein",
  },
  {
    slug: "applications",
    index: "02",
    title: "Applications",
    short: "Mobile and web apps for customers, members and staff who need to get something done.",
    lead: "Software people keep on their phone is software they trust.",
    body: [
      "We build customer-facing and internal applications: booking apps, membership and loyalty apps, field and operations apps, customer portals and progressive web apps. Each one starts from the task a real person performs, not from a list of features.",
      "We ship to iOS and Android from a single, maintainable codebase where it serves the product, and go native where the experience demands it. Offline behaviour, permissions, notifications and data privacy are designed in from the first sprint.",
    ],
    items: [
      "iOS and Android applications",
      "Progressive web apps",
      "Customer and client portals",
      "Membership and loyalty applications",
      "Field, delivery and operations apps",
      "Staff tools and internal utilities",
      "App store submission and release management",
      "Ongoing releases and support",
    ],
    deliverables: [
      "Product definition and user flows",
      "Interface design and prototype",
      "Application build and QA",
      "Store listing and release",
      "Analytics and post-launch iteration",
    ],
    keyword: "mobile app development South Africa",
  },
  {
    slug: "systems",
    index: "03",
    title: "Systems",
    short: "The booking engines, CRMs and operational systems that replace spreadsheets.",
    lead: "The work behind the storefront is where software pays for itself.",
    body: [
      "We build the systems that run a business: booking and reservation engines, CRM and client management, inventory and stock control, quotations and invoicing, reporting dashboards and integrations between the tools a team already uses.",
      "These are the projects where a spreadsheet has quietly become a liability. We map the process as it actually runs, then replace the fragile parts first, so the business keeps operating while the new system earns its place.",
    ],
    items: [
      "Booking and reservation systems",
      "CRM and client management",
      "Inventory, stock and order management",
      "Quotations, invoicing and payments",
      "Reporting dashboards and business intelligence",
      "Client, tenant and member portals",
      "Payment, messaging and accounting integrations",
      "Workflow automation and spreadsheet replacement",
    ],
    deliverables: [
      "Process mapping and requirements",
      "System architecture and data model",
      "Interface design for daily operators",
      "Build, migration and training",
      "Monitoring, support and iteration",
    ],
    keyword: "custom software development South Africa",
  },
];

/* ---------------------------------------------------------------- industries */

export type Industry = {
  slug: string;
  name: string;
  plural: string;
  summary: string;
  detail: string;
  build: string[];
  principles: string[];
  demoBrand: string;
  demoKind: string;
  demoLine: string;
  designLanguage: string;
  palette: string[];
  keyword: string;
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "hospitality",
    name: "Hospitality",
    plural: "Hotels, lodges & guesthouses",
    summary:
      "Direct-booking sites that make a property feel as considered online as it does at the door.",
    detail:
      "Guests usually meet a property on a booking portal, then search for its own site to decide. That moment is the one we design for: real photography, rooms that read like rooms, rates and policies stated plainly, and a booking path that takes fewer decisions than the portal does.",
    build: [
      "Direct booking websites with live availability",
      "Room, suite and villa presentation pages",
      "Dining, spa and experience sections",
      "Wedding and events enquiry journeys",
      "Guest communication and pre-arrival flows",
      "Lodge and guesthouse booking systems",
    ],
    principles: [
      "Photography carries the page — interface stays quiet",
      "Rates, policies and cancellation terms visible early",
      "One booking action, repeated, never competing",
      "Fast first paint on mobile networks",
    ],
    demoBrand: "Aurelia House",
    demoKind: "Boutique hotel & spa",
    demoLine: "Twelve suites above the Free State veld.",
    designLanguage: "Charcoal and champagne, high-contrast serif, full-bleed imagery",
    palette: ["#12100d", "#1a1712", "#c9a86a", "#f3ead9"],
    keyword: "hotel website design South Africa",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    plural: "Estate agencies & property developers",
    summary: "Listing platforms with the search, filtering and local proof that wins mandates.",
    detail:
      "Buyers live on the portals, but sellers and landlords judge an agency by its own site. We build listing experiences that sync from your property system, filter without friction, and give every suburb its own page of local evidence.",
    build: [
      "Property listing websites with search and map views",
      "Portal and CRM listing synchronisation",
      "Suburb and area guide pages",
      "Valuation and mandate request journeys",
      "Agent profile and team pages",
      "Developer and new-development microsites",
    ],
    principles: [
      "Search and filters visible above the fold",
      "Photography and floor plans treated as data, not decoration",
      "Valuation call-to-action on every listing page",
      "Quiet typography so the property is the loudest element",
    ],
    demoBrand: "Meridian Property Co.",
    demoKind: "Estate agency",
    demoLine: "Property, presented properly.",
    designLanguage: "Ivory and stone, editorial grid, restrained sans",
    palette: ["#f4f2ee", "#eceae5", "#8a7350", "#1b1a17"],
    keyword: "estate agency website design South Africa",
  },
  {
    slug: "legal",
    name: "Legal",
    plural: "Law firms, attorneys & advocates",
    summary:
      "Practice-area sites that read as authoritative and convert enquiries into consultations.",
    detail:
      "Clients arrive anxious and compare three firms in ten minutes. A firm's site has to answer three questions immediately: do you do this work, who will handle it, and what happens next. We give every practice area its own page, and every attorney a profile worth trusting.",
    build: [
      "Firm websites with a page per practice area",
      "Attorney and advocate profiles",
      "Consultation and intake journeys",
      "Conveyancing and matter-type explainers",
      "Secure document and client portals",
      "Compliance-aware content structure",
    ],
    principles: [
      "No promised outcomes — accuracy over persuasion",
      "Plain-language process explanations",
      "Credentials, admissions and specialisations in view",
      "Sober palette; typography does the authority",
    ],
    demoBrand: "Van Wyk & Partners",
    demoKind: "Attorneys & conveyancers",
    demoLine: "Counsel, considered.",
    designLanguage: "Midnight navy and bone, classical serif, calm hierarchy",
    palette: ["#0f1a2b", "#14213a", "#c2ab7c", "#eef1f5"],
    keyword: "law firm website design South Africa",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    plural: "Clinics, practices & wellness studios",
    summary: "Calm, compliant practice sites with a booking path patients can finish on a phone.",
    detail:
      "Patients search for a condition or a practitioner, not for a brand. We write treatment pages in the language people actually search, put credentials and registration details where they can be checked, and keep one obvious way to book with a phone and WhatsApp fallback.",
    build: [
      "Practice and clinic websites",
      "Treatment and condition pages",
      "Appointment request and booking systems",
      "Practitioner profiles with credentials",
      "Medical aid, fees and patient information",
      "Consent-aware patient intake forms",
    ],
    principles: [
      "Calm contrast, generous spacing, no alarm colour",
      "Booking reachable in one tap from any page",
      "Credentials and registration visible",
      "Privacy, consent and HTTPS treated as requirements",
    ],
    demoBrand: "Sunnyside Medical",
    demoKind: "Family practice",
    demoLine: "Care that keeps its appointments.",
    designLanguage: "Sage and bone, humanist sans, soft geometry",
    palette: ["#f4f7f4", "#e6efe9", "#3f7a5f", "#16261f"],
    keyword: "medical practice website design South Africa",
  },
  {
    slug: "retail",
    name: "Retail",
    plural: "Fashion, lifestyle & online stores",
    summary:
      "Storefronts built around the product, with a checkout that survives a slow connection.",
    detail:
      "Most South African shoppers buy on a phone, so the store is designed phone-first: consistent product photography, sizing and delivery answered before the cart, and a checkout that never asks for something twice. The brand language does the rest.",
    build: [
      "E-commerce stores and product catalogues",
      "Lookbook and collection storytelling",
      "Local payment gateway integration",
      "Courier and fulfilment integration",
      "Stock, variant and size management",
      "Abandoned cart and retention flows",
    ],
    principles: [
      "Product photography on one consistent ratio and light",
      "Shipping, returns and sizing answered before checkout",
      "Mobile-first checkout with the fewest possible fields",
      "Quiet chrome so colour and product lead",
    ],
    demoBrand: "Atelier Noir",
    demoKind: "Fashion house",
    demoLine: "Considered clothing, in black.",
    designLanguage: "Gallery white and ink, wide sans, product-first grid",
    palette: ["#f7f6f4", "#ffffff", "#111111", "#6f6c68"],
    keyword: "ecommerce website design South Africa",
  },
  {
    slug: "dining",
    name: "Dining",
    plural: "Restaurants, cafés & wine estates",
    summary: "Menus that search engines can read, reservations that actually reach the host.",
    detail:
      "A restaurant site has four jobs: show the menu, take the booking, tell people where you are, and look like the room. We build menus as real markup rather than a PDF, keep hours and location impossible to miss, and make the reserve action the loudest thing on the page.",
    build: [
      "Restaurant and wine estate websites",
      "Indexable HTML menus with pricing",
      "Table reservation systems",
      "Private dining and events enquiries",
      "Ordering and collection flows",
      "Location, hours and map presentation",
    ],
    principles: [
      "Menu as structured HTML, never a PDF",
      "Reserve action in the header and on the hero",
      "Warm, low-light palette that matches the room",
      "Hours, address and phone in the footer of every page",
    ],
    demoBrand: "Ember & Oak",
    demoKind: "Fire-led dining room",
    demoLine: "Cooked over coals, served after dark.",
    designLanguage: "Char and ember, small-caps serif, menu-led layout",
    palette: ["#0d0a08", "#171210", "#b06f3f", "#f2e7d8"],
    keyword: "restaurant website design South Africa",
  },
];

export const industryBySlug = (slug: string) => INDUSTRIES.find((i) => i.slug === slug);

/* -------------------------------------------------------- search vocabulary
 * Researched intent sets per section. No measured volumes are published for
 * Bloemfontein-level terms; these are SERP-derived demand sets. They are used
 * in visible copy, page titles and FAQs — never hidden or repeated as filler.
 */

export const KEYWORDS = {
  home: [
    "software development company Bloemfontein",
    "software developers Bloemfontein",
    "web development company Bloemfontein",
    "website design Bloemfontein",
    "custom software development South Africa",
    "app developers Bloemfontein",
    "mobile app development company South Africa",
    "digital agency Bloemfontein",
    "IT company Free State",
    "custom software for business South Africa",
  ],
  services: [
    "custom website design",
    "business website design South Africa",
    "e-commerce website development South Africa",
    "online store design South Africa",
    "how much does a website cost in South Africa",
    "mobile app development cost South Africa",
    "online booking system South Africa",
    "custom CRM system development",
    "inventory management system South Africa",
    "replace spreadsheets with software",
  ],
  industries: [
    "hotel website design South Africa",
    "lodge website with booking engine",
    "estate agency website design South Africa",
    "property website with listings",
    "law firm website design South Africa",
    "attorney website design Bloemfontein",
    "medical practice website design South Africa",
    "patient booking system South Africa",
    "ecommerce website design South Africa",
    "online clothing store website design",
    "restaurant website design South Africa",
    "table reservation system South Africa",
  ],
  exhibition: [
    "website design inspiration South Africa",
    "luxury website design examples",
    "hotel website design examples",
    "restaurant website design examples",
    "law firm website examples",
    "clinic website design examples",
    "fashion ecommerce website examples",
    "real estate website design examples",
    "web design portfolio Bloemfontein",
    "website and app design showcase",
  ],
} as const;

/* ------------------------------------------------------------------ FAQ sets */

export type Faq = { q: string; a: string };

export const HOME_FAQS: Faq[] = [
  {
    q: "What does Obsidian Labs Software do?",
    a: "Obsidian Labs Software designs and builds websites, mobile applications and business systems. We work with businesses in Bloemfontein and across South Africa, from single-property hospitality sites to multi-branch operational systems.",
  },
  {
    q: "Is Obsidian Labs a software development company in Bloemfontein?",
    a: "Yes. Obsidian Labs is a software development studio based in Bloemfontein, Free State, and operates as part of Continental Obsidian Ltd. We deliver work remotely across South Africa and in person in the Free State.",
  },
  {
    q: "How much does a website cost in South Africa?",
    a: "A focused business website typically starts in the low tens of thousands of rand, and a booking or commerce platform costs more because of the systems behind it. We quote a fixed scope after a short discovery conversation, so the number you approve is the number you pay.",
  },
  {
    q: "Do you build mobile apps as well as websites?",
    a: "Yes. We build iOS and Android applications, progressive web apps, and customer or staff portals. Apps are usually delivered alongside a web presence so both share one design language and one source of truth for content.",
  },
  {
    q: "Can you replace the spreadsheets our business runs on?",
    a: "That is one of our most common projects. We map the process as it actually runs, then build a booking, CRM, stock or invoicing system around it, migrating the existing data and training the people who use it daily.",
  },
  {
    q: "Which industries do you work with?",
    a: "Hospitality, real estate, legal, healthcare, retail and dining are our specialist areas, each with a dedicated design language shown in our exhibition. If your business is owner-led and service-driven, the same approach applies.",
  },
  {
    q: "How long does a project take?",
    a: "A marketing website usually runs four to eight weeks. A booking or commerce platform runs eight to sixteen weeks depending on integrations. We agree the milestones and the launch date before design begins.",
  },
  {
    q: "How do we start a project with Obsidian Labs?",
    a: "Email us with a short description of the business, what the site or system needs to do, and any deadline you are working towards. We reply with the questions we need answered and a proposed scope.",
  },
];

export const SERVICE_FAQS: Faq[] = [
  {
    q: "What is included in a custom website build with Obsidian Labs Software?",
    a: "Information architecture, bespoke visual design, the production front-end build, content structure, on-page search setup, analytics, launch and a handover session. Hosting, care plans and ongoing content work are quoted separately.",
  },
  {
    q: "Do you use templates or build from scratch?",
    a: "We build bespoke interfaces on a design system, so pages stay consistent as the site grows. Our exhibition templates exist to show how we think about a specific industry; a client project starts from your business, not from a template.",
  },
  {
    q: "Can you integrate payments, WhatsApp and courier services?",
    a: "Yes. We integrate South African payment gateways, WhatsApp Business messaging, courier and fulfilment services, accounting packages and property or booking systems through their APIs.",
  },
  {
    q: "Who owns the code and the design files?",
    a: "You do, on final payment, unless a third-party licence says otherwise. We hand over the repository, design files and documentation, and we are happy to keep maintaining the work afterwards.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. Care plans cover hosting, monitoring, backups, security updates and a monthly allowance of changes, with a defined response time for anything that stops working.",
  },
  {
    q: "Is the website built to be found on search engines?",
    a: "Every build includes semantic markup, page titles and descriptions, structured data for your business type, a sitemap and fast pages. Ongoing content and authority work is a separate engagement, because rankings follow content and reputation over months.",
  },
];

export const INDUSTRY_FAQS: Faq[] = [
  {
    q: "Can Obsidian Labs Software build for my industry if it is not listed?",
    a: "Yes. The six industries in our exhibition are where we have the deepest pattern knowledge, but the process — discovery, design system, build, launch — is the same for any owner-led business.",
  },
  {
    q: "What is the exhibition on this website?",
    a: "It is a set of concept templates, one per industry, built by Obsidian Labs Software to demonstrate our design and engineering standard. Each template is a complete, working interface with its own design language, not a stock theme.",
  },
  {
    q: "Will my website look exactly like an exhibition template?",
    a: "No. Templates show capability and design principles; client work starts from your brand, your customers and your content. What carries over is the discipline — consistent type scales, accessible contrast and a clear next action on every page.",
  },
  {
    q: "Do you work with businesses outside Bloemfontein?",
    a: "Yes. We are based in Bloemfontein and deliver remotely across South Africa, with in-person workshops in the Free State and Gauteng by arrangement.",
  },
];

/* ------------------------------------------------------------------ helpers */

export const legalLinks = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Legal Notice", href: "/legal-notice" },
] as const;

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}
