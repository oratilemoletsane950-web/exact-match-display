import type { GroupSeed } from "./types";

/* =============================================== 09 · PROFESSIONAL */

export const PROFESSIONAL: GroupSeed = {
  slug: "professional",
  themeKey: "professional",
  name: "Professional & Business Services",
  short: "Professional & business services",
  intro:
    "Client portals, appointment scheduling, document sharing, quotation requests and business analytics. These templates are built for firms whose product is judgement and whose website must prove organisation before it claims expertise.",
  image: "/images/portfolio/professional.jpg",
  gallery: ["/images/portfolio/professional.jpg", "/images/legal.jpg", "/images/portfolio/professional.jpg"],
  templateReference: "Swiss Red theme — 21st.dev free theme",
  capabilities: [
    "Client portals",
    "Appointment scheduling",
    "Service management",
    "Document sharing",
    "Quotation requests",
    "Business analytics",
  ],
  features: [
    { title: "Matters", body: "Every engagement with an owner, a status and a date the client can see." },
    { title: "Documents", body: "Shared files with versions, permissions and an audit trail." },
    { title: "Invoices", body: "Fee notes, payment status and statements without a reconciliation call." },
    { title: "Quotes", body: "Scoped requests with budget bands and a named person responding." },
    { title: "Appointments", body: "Partner diaries with real availability and confirmation." },
    { title: "Insight", body: "Practice and client reporting that shows where the work actually goes." },
  ],
  process: [
    { step: "Brief", title: "Understand the matter", body: "A structured brief that captures facts before a partner's time is spent." },
    { step: "Scope", title: "Agree the work", body: "Deliverables, fees and timing in writing before the engagement letter." },
    { step: "Deliver", title: "Work in the open", body: "Documents, drafts and decisions shared in the client portal." },
    { step: "Review", title: "Close and report", body: "Outcomes, fees and a short review that informs the next matter." },
  ],
  faqs: [
    { q: "How are fees structured?", a: "Fixed fees for defined work, hourly rates for open-ended matters, and a written estimate before either begins." },
    { q: "Who will handle my matter?", a: "A named partner owns every engagement, supported by a team that is listed on the matter page." },
    { q: "Can documents be shared securely?", a: "The portal uses permissioned links, version history and download logging rather than email attachments." },
    { q: "How quickly will I hear back?", a: "New enquiries receive a response within one business day, and existing clients see their matter owner and response time in the portal." },
  ],
  testimonials: [
    { quote: "I could see the draft, the comments and the deadline without sending a single follow-up email.", name: "Nomsa Dlamini", role: "Client, Dlamini Holdings" },
    { quote: "The quote was itemised, so nobody argued about scope at the invoice stage.", name: "Kobus Kruger", role: "Director, Sable Group" },
    { quote: "It is the first professional-services site I have used that behaves like a practice, not a brochure.", name: "Ayesha Patel", role: "CFO, Nova Foods" },
  ],
  partners: ["SAICA", "LPC", "B-BBEE Commission", "CIPC", "Sars"],
  stats: [
    { value: "38", label: "Professionals" },
    { value: "1 400", label: "Matters handled" },
    { value: "4.9/5", label: "Client rating" },
    { value: "24h", label: "Enquiry response" },
    { value: "12", label: "Practice areas" },
    { value: "96%", label: "Matters on schedule" },
  ],
  rows: [
    {
      brand: "Whitfield & Vance",
      name: "Law Firm",
      headline: "Counsel that reads the whole file.",
      design: "Traditional prestige",
      blurb:
        "Corporate, property and litigation counsel for businesses and families, with partner-led matters and fees agreed in writing.",
      nav: "Practice areas|People|Insights|Careers|Contact",
      cta: "Request a consultation",
      accent: "#7a1f2b",
      display: "dmserif",
    },
    {
      brand: "Ledger & Co.",
      name: "Accounting Firm",
      headline: "The numbers, on time.",
      design: "Corporate minimalism",
      blurb:
        "Audit, tax and monthly accounting for owner-managed businesses, with a portal that closes the year without a shoebox.",
      nav: "Services|Sectors|Portal|Insights|Contact",
      cta: "Book a discovery call",
      accent: "#1e3a8a",
    },
    {
      brand: "Bright Meridian",
      name: "Consulting Agency",
      headline: "Strategy that survives contact with Monday.",
      design: "Editorial corporate",
      blurb:
        "Operating-model, growth and turnaround consulting for mid-market companies, delivered by the team that sold the work.",
      nav: "What we do|Sectors|Case studies|People|Contact",
      cta: "Start a conversation",
      accent: "#0f4c5c",
      display: "dmserif",
    },
    {
      brand: "Loud Poor",
      name: "Marketing Agency",
      headline: "Attention is earned, not bought twice.",
      design: "Creative brutalism",
      blurb:
        "Brand, campaign and content studio for companies with something to say, measured on pipeline rather than impressions.",
      nav: "Work|Services|Approach|Team|Contact",
      cta: "Brief the studio",
      accent: "#d81e5b",
      display: "archivoBlack",
    },
    {
      brand: "Peoplefirst",
      name: "Recruitment Agency",
      headline: "Hiring, without the ghosting.",
      design: "Human-centred",
      blurb:
        "Permanent and contract recruitment with named consultants, salary data and candidate feedback that actually gets sent.",
      nav: "Hire|Jobs|Sectors|Salary guide|Contact",
      cta: "Brief a role",
      accent: "#b45309",
      display: "fraunces",
      radius: "16px",
    },
    {
      brand: "Ashby Advisory",
      name: "Business Consultancy",
      headline: "A quiet room for hard decisions.",
      design: "Executive luxury",
      blurb:
        "Board advisory, succession and performance work for family businesses and founder-led companies at a turning point.",
      nav: "Advisory|Family business|Succession|Insights|Contact",
      cta: "Arrange a meeting",
      tone: "dark",
      accent: "#c9a86a",
      display: "instrument",
    },
    {
      brand: "Section & Plan",
      name: "Architecture Consultancy",
      headline: "Buildable, from the first sketch.",
      design: "Structural minimalism",
      blurb:
        "Technical architecture and delivery oversight for developers, with drawing audits, code review and contractor coordination.",
      nav: "Services|Projects|Compliance|Team|Contact",
      cta: "Request a review",
      accent: "#111111",
    },
    {
      brand: "Anchor Wealth",
      name: "Financial Advisory",
      headline: "Advice that assumes you will live a long time.",
      design: "Institutional",
      blurb:
        "Retirement, investment and estate planning for professionals and business owners, with a written plan reviewed every year.",
      nav: "Planning|Investments|Retirement|About|Contact",
      cta: "Book a planning session",
      accent: "#123f33",
      display: "dmserif",
    },
    {
      brand: "Northstar People",
      name: "HR Consultancy",
      headline: "People systems that hold up.",
      design: "Modern professional",
      blurb:
        "HR policy, org design and employment relations support for growing companies, with documents that survive a hearing.",
      nav: "Services|Projects|Templates|Insights|Contact",
      cta: "Talk to an adviser",
      accent: "#4338ca",
    },
    {
      brand: "Vertex Corporate",
      name: "Corporate Services",
      headline: "The back office, as a service.",
      design: "Modular corporate",
      blurb:
        "Company secretarial, compliance, payroll and registered office services for local and foreign-owned entities.",
      nav: "Services|Entities|Compliance|Pricing|Contact",
      cta: "Get a service quote",
      accent: "#1f2937",
    },
  ],
};

/* ================================================== 10 · CREATIVE */

export const CREATIVE: GroupSeed = {
  slug: "creative",
  themeKey: "creative",
  name: "Entertainment, Lifestyle & Creative",
  short: "Entertainment, lifestyle & creative",
  intro:
    "Media galleries, streaming interfaces, event booking, memberships, creator profiles and interactive portfolios. These templates are built like title sequences: strong art direction, but with a working commercial layer underneath.",
  image: "/images/portfolio/creative.jpg",
  gallery: ["/images/portfolio/creative.jpg", "/images/dining.jpg", "/images/portfolio/creative.jpg"],
  templateReference: "Playful Brand Scroll landing page — kedhareswer (free, 21st.dev)",
  capabilities: [
    "Media galleries",
    "Streaming interfaces",
    "Event booking",
    "Memberships",
    "Creator profiles",
    "Interactive portfolios",
  ],
  features: [
    { title: "Gallery", body: "Work presented with the pacing of an exhibition, not a grid of thumbnails." },
    { title: "Playback", body: "Audio and video interfaces with queue, progress and context." },
    { title: "Tickets", body: "Events with real dates, capacity and a live total before checkout." },
    { title: "Membership", body: "Tiers with benefits that are worth the annual fee and stated plainly." },
    { title: "Profiles", body: "Creator pages with work, biography and commission paths." },
    { title: "Catalogue", body: "A content model that lets the archive grow without redesigning the site." },
  ],
  process: [
    { step: "Discover", title: "Find the work", body: "Editorial galleries and programme pages that reward browsing." },
    { step: "Experience", title: "Watch or listen", body: "Playback and lightboxes that keep the art direction intact." },
    { step: "Support", title: "Buy or join", body: "Tickets, editions and memberships with transparent pricing." },
    { step: "Return", title: "Keep the thread", body: "Membership benefits, new releases and a reason to come back." },
  ],
  faqs: [
    { q: "How do memberships work?", a: "Annual tiers with defined benefits, a renewal date stated at purchase and the option to cancel without a phone call." },
    { q: "Are tickets refundable?", a: "Events can be exchanged up to 48 hours before the start time. Cancellations by the organiser are refunded in full." },
    { q: "Can I licence the work?", a: "Editorial and commercial licensing is handled per work, with a written quote and usage terms attached." },
    { q: "Do you ship internationally?", a: "Editions ship worldwide with tracked couriers. Duties are calculated at checkout rather than on delivery." },
  ],
  testimonials: [
    { quote: "The site feels like the work, not like a template with our logo dropped into it.", name: "Nandi Mokoena", role: "Curator, White Room" },
    { quote: "Ticket sales moved online without losing the personality of the programme.", name: "Sebastian Kraft", role: "Programme director" },
    { quote: "Membership renewed itself because the benefits were obvious from the first page.", name: "Lerato Dube", role: "Member since 2024" },
  ],
  partners: ["Spotify", "Apple Music", "Vimeo", "Quicket", "Bandcamp"],
  stats: [
    { value: "184k", label: "Monthly listeners" },
    { value: "1 240", label: "Works in collection" },
    { value: "3 480", label: "Members" },
    { value: "62", label: "Events a year" },
    { value: "4.9/5", label: "Audience rating" },
    { value: "38", label: "Countries reached" },
  ],
  rows: [
    {
      brand: "Waveform",
      name: "Music Streaming",
      headline: "Sound, without the interface fighting back.",
      design: "Futuristic dark",
      blurb:
        "Lossless streaming, artist radio and a library that follows you between rooms, with royalties stated in the open.",
      nav: "Listen|Artists|Library|Plans|Download",
      cta: "Start listening",
      tone: "dark",
      accent: "#22d3ee",
      display: "syne",
      items:
        "Night drive|Playlist|62 min;Low light|Album|44 min;Signal|Single|3 min;Field notes|Podcast|38 min",
    },
    {
      brand: "Static Bloom Records",
      name: "Record Label",
      headline: "Records made without a committee.",
      design: "Retro editorial",
      blurb:
        "An independent label with a small roster, physical pressings and tour support, documented like a fanzine rather than a prospectus.",
      nav: "Roster|Releases|Shows|Shop|Contact",
      cta: "Hear the catalogue",
      accent: "#b91c1c",
      display: "archivoBlack",
      items:
        "Static Bloom 04|LP|38 min;Low Tide|EP|21 min;Paper Radio|Single|4 min;Live at Temple|Live|52 min",
    },
    {
      brand: "Nightjar Films",
      name: "Film Production",
      headline: "Stories that hold the frame.",
      design: "Cinematic",
      blurb:
        "Commercial and documentary production with in-house edit, colour and sound, and a reel that shows the whole craft.",
      nav: "Work|Services|Studio|Journal|Contact",
      cta: "Start a project",
      tone: "dark",
      accent: "#e0b878",
      display: "dmserif",
      items:
        "The Long Field|Documentary|84 min;Made in the Free State|Series|6 × 24 min;Afterlight|Short|18 min;Brand film|Commercial|90 sec",
    },
    {
      brand: "Aperture North",
      name: "Photography Studio",
      headline: "Light, taken seriously.",
      design: "Gallery minimalism",
      blurb:
        "Architectural, portrait and editorial photography with a studio, a location kit and post-production that respects the negative.",
      nav: "Work|Series|Studio|Pricing|Contact",
      cta: "Book a shoot",
      accent: "#111111",
      items:
        "Concrete series|Architecture|24 images;Portraits 2026|Portrait|18 images;Coastal light|Landscape|32 images;Studio stills|Product|40 images",
    },
    {
      brand: "Arcade Nine",
      name: "Gaming Platform",
      headline: "Games with a bit of friction.",
      design: "Digital cyberpunk",
      blurb:
        "A curated platform for experimental and competitive games, with cloud saves, tournaments and a store that pays developers properly.",
      nav: "Games|Tournaments|Store|Developers|Community",
      cta: "Play the beta",
      tone: "dark",
      accent: "#f0abfc",
      display: "syne",
      items:
        "Neon Drift|Racing|Multiplayer;Signal Lost|Puzzle|Single player;Nine Lives|Platformer|Single player;Grid War|Strategy|Multiplayer",
    },
    {
      brand: "Bright Noise Events",
      name: "Event Management",
      headline: "Events with a pulse.",
      design: "Expressive maximalism",
      blurb:
        "Festival, conference and brand-experience production with run sheets, supplier networks and a build team that arrives early.",
      nav: "Events|Services|Venues|Portfolio|Contact",
      cta: "Plan an event",
      accent: "#e11d48",
      display: "archivoBlack",
      items:
        "Bright Noise Festival|3 days|12 000;Design Week|5 days|4 000;Summer Sessions|6 nights|2 500;Brand launch|1 night|800",
    },
    {
      brand: "Iron & Air",
      name: "Fitness Brand",
      headline: "Training that respects the body.",
      design: "Athletic brutalism",
      blurb:
        "Strength and conditioning programmes, a members' app and coaching that adjusts when life does, all in one membership.",
      nav: "Programmes|Coaches|Membership|App|Contact",
      cta: "Start a trial",
      tone: "dark",
      accent: "#a3e635",
      display: "archivoBlack",
      items:
        "Strength foundation|8 weeks|Beginner;Hybrid athlete|12 weeks|Intermediate;Mobility reset|6 weeks|All levels;Competition prep|16 weeks|Advanced",
    },
    {
      brand: "MODE Journal",
      name: "Fashion Magazine",
      headline: "Fashion, written properly.",
      design: "High-fashion editorial",
      blurb:
        "An independent fashion and culture journal with long-form features, shoot archives and a print edition worth keeping.",
      nav: "Fashion|Culture|People|Archive|Subscribe",
      cta: "Subscribe",
      accent: "#111111",
      display: "instrument",
      items:
        "The quiet season|Feature|18 min;Atelier visits|Series|6 parts;On colour|Essay|12 min;The new tailoring|Shoot|24 images",
    },
    {
      brand: "Muse",
      name: "Influencer & Creator Platform",
      headline: "A home for work that does not fit a feed.",
      design: "Playful modernism",
      blurb:
        "Creator portfolios, paid memberships and commissions in one place, with analytics that show what actually converted.",
      nav: "Explore|Creators|Membership|Commissions|Start",
      cta: "Create a profile",
      accent: "#7c3aed",
      display: "fraunces",
      radius: "20px",
      items:
        "Illustration studio|Illustration|Portfolio;Sound design|Audio|Portfolio;Type foundry|Typography|Shop;Photo essays|Photography|Journal",
    },
    {
      brand: "White Room Gallery",
      name: "Art Gallery",
      headline: "Room to look properly.",
      design: "Museum minimalism",
      blurb:
        "A contemporary gallery with a represented roster, museum-grade documentation and an editions shop that ships worldwide.",
      nav: "Exhibitions|Artists|Collection|Editions|Visit",
      cta: "Plan a visit",
      accent: "#1f2937",
      display: "dmserif",
      items:
        "Colour Field|Exhibition|Until 20 Dec;Quiet Objects|Exhibition|Until 12 Jan;Editions 01|Shop|24 works;Artist talk|Event|3 Dec",
    },
  ],
};

export const SEEDS_D: GroupSeed[] = [PROFESSIONAL, CREATIVE];
