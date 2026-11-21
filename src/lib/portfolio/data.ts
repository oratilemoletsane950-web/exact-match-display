import type { GroupKey } from "./themes";

/** Deterministic currency formatting — safe for server render and hydration. */
export function money(value: number, currency = "R") {
  const rounded = Math.round(value);
  const sign = rounded < 0 ? "-" : "";
  return `${sign}${currency}${String(Math.abs(rounded)).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;
}

export function compact(value: number) {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}m`;
  if (value >= 1_000) return `${Math.round(value / 1_000)}k`;
  return String(value);
}

/* ------------------------------------------------------------------ banking */

export const BANK_ACCOUNTS = [
  { name: "Everyday current", number: "•••• 4482", balance: 182_450, trend: 4.2 },
  { name: "Call account", number: "•••• 9917", balance: 96_300, trend: 7.8 },
  { name: "Managed portfolio", number: "•••• 2035", balance: 412_800, trend: -1.4 },
];

export const BANK_TRANSACTIONS = [
  { date: "18 Nov", merchant: "Woolworths Waterfront", category: "Groceries", amount: -1_284.6 },
  { date: "18 Nov", merchant: "Client settlement — Dlamini", category: "Income", amount: 42_500 },
  { date: "17 Nov", merchant: "City of Bloemfontein", category: "Utilities", amount: -2_140.2 },
  { date: "16 Nov", merchant: "Discovery Health", category: "Medical", amount: -4_820 },
  { date: "15 Nov", merchant: "Meridian Capital dividend", category: "Income", amount: 8_750 },
  { date: "14 Nov", merchant: "Shell Nelson Mandela", category: "Transport", amount: -980.4 },
];

export const BANK_SPEND = [
  { label: "Housing", value: 34 },
  { label: "Transport", value: 18 },
  { label: "Groceries", value: 16 },
  { label: "Dining", value: 11 },
  { label: "Utilities", value: 9 },
  { label: "Other", value: 12 },
];

/* --------------------------------------------------------------- healthcare */

export const HEALTH_SPECIALTIES = [
  "All services",
  "General practice",
  "Paediatrics",
  "Cardiology",
  "Dermatology",
  "Physiotherapy",
  "Mental health",
];

export const CLINICIANS = [
  { name: "Dr Naledi Mokoena", role: "General practitioner", specialty: "General practice", next: "Today, 14:30" },
  { name: "Dr Pieter van Wyk", role: "Paediatrician", specialty: "Paediatrics", next: "Tomorrow, 09:15" },
  { name: "Dr Aisha Patel", role: "Cardiologist", specialty: "Cardiology", next: "Thu, 11:00" },
  { name: "Dr Sipho Ndlovu", role: "Dermatologist", specialty: "Dermatology", next: "Fri, 08:30" },
  { name: "Lerato Khumalo", role: "Physiotherapist", specialty: "Physiotherapy", next: "Today, 16:00" },
  { name: "Dr Hannah Botha", role: "Clinical psychologist", specialty: "Mental health", next: "Mon, 10:45" },
];

export const HEALTH_DAYS = ["Mon 24", "Tue 25", "Wed 26", "Thu 27", "Fri 28"];
export const HEALTH_SLOTS = ["08:30", "09:15", "10:00", "11:30", "14:00", "15:45"];

export const PRESCRIPTIONS = [
  { name: "Amlodipine 5mg", dose: "One tablet daily", repeats: 2, status: "Ready to collect" },
  { name: "Ventolin inhaler", dose: "As needed", repeats: 0, status: "Repeat required" },
];

export const LAB_RESULTS = [
  { name: "Full blood count", date: "12 Nov 2026", status: "Normal" },
  { name: "Lipid profile", date: "12 Nov 2026", status: "Review advised" },
];

/* ------------------------------------------------------------------- retail */

export const RETAIL_FALLBACK = "Studio tote|890|Accessories;Merino overshirt|1 890|Apparel;Ceramic lamp|1 240|Home;Leather notebook|460|Stationery";

export const RETAIL_CATEGORIES = ["All", "Apparel", "Accessories", "Home", "Stationery"];

/* -------------------------------------------------------------- hospitality */

export const STAY_FALLBACK = "Courtyard room|2 850|32 m²;Terrace suite|4 600|54 m²;Garden villa|7 900|96 m²;Penthouse|11 500|140 m²";

export const STAY_MENUS: Record<string, { name: string; note: string; price: string }[]> = {
  Breakfast: [
    { name: "Farmhouse eggs", note: "Free-range, sourdough, herb butter", price: "R145" },
    { name: "Buttermilk rusks & coffee", note: "House blend, single origin", price: "R85" },
    { name: "Seasonal fruit bowl", note: "Yoghurt, honey, mint", price: "R110" },
  ],
  Lunch: [
    { name: "Karoo lamb wrap", note: "Flatbread, tzatziki, rocket", price: "R185" },
    { name: "Heirloom tomato salad", note: "Buffalo mozzarella, basil oil", price: "R165" },
    { name: "Line fish of the day", note: "Charred lemon, new potatoes", price: "R245" },
  ],
  Dinner: [
    { name: "Dry-aged sirloin", note: "300g, bone marrow butter", price: "R395" },
    { name: "Mushroom risotto", note: "Porcini, aged parmesan", price: "R265" },
    { name: "Malva pudding", note: "Amarula cream", price: "R120" },
  ],
};

/* ---------------------------------------------------------------- education */

export const LEARN_FALLBACK = "Foundations of the discipline|6|Beginner;Applied practice|8|Intermediate;Advanced studio|10|Advanced;Capstone project|4|All levels";

export const LEARN_LESSONS = [
  { title: "Orientation and outcomes", minutes: 24 },
  { title: "Core concepts", minutes: 52 },
  { title: "Working session", minutes: 68 },
  { title: "Assessment and feedback", minutes: 35 },
];

export const LEARN_GRADES = [
  { title: "Research methods", grade: 78, status: "Complete" },
  { title: "Applied project", grade: 84, status: "Complete" },
  { title: "Final assessment", grade: 0, status: "Due 4 Dec" },
];

/* --------------------------------------------------------------- technology */

export const TECH_PLANS = [
  {
    name: "Starter",
    price: 499,
    seats: 5,
    blurb: "For a small team finding its rhythm.",
    features: ["5 seats", "10k requests / month", "Community support", "Core analytics"],
  },
  {
    name: "Scale",
    price: 1_899,
    seats: 25,
    blurb: "For teams shipping every week.",
    features: ["25 seats", "250k requests / month", "Priority support", "Advanced analytics", "SSO"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: 0,
    seats: 100,
    blurb: "For regulated, multi-team operations.",
    features: ["Unlimited seats", "Custom volume", "Dedicated engineer", "Audit logs", "SLA"],
  },
];

export const TECH_SERVICES = [
  { name: "API gateway", status: "Operational", latency: "42 ms" },
  { name: "Dashboard", status: "Operational", latency: "118 ms" },
  { name: "Webhooks", status: "Degraded", latency: "1.2 s" },
  { name: "Data export", status: "Operational", latency: "310 ms" },
];

export const TECH_LOGS = [
  "08:41:02  deploy  api@2.14.0  succeeded",
  "08:39:55  auth    token refreshed  1,284 sessions",
  "08:36:10  queue   webhook retry    batch 42",
  "08:31:44  metric  p95 latency      118 ms",
];

/* ----------------------------------------------------------------- property */

export const PROPERTY_FALLBACK = "Cliftonview residence|Westdene|4|3;Olive Grove apartment|Universitas|2|2;Stonehouse family home|Langenhoven Park|3|2;Ridge estate|Bayswater|5|4";

export const PROPERTY_TYPES = ["All", "House", "Apartment", "Townhouse", "Commercial"];

export const PROPERTY_FEATURES = ["Solar and inverter", "Double garage", "Study", "Pool", "Fibre", "Security estate"];

/* --------------------------------------------------------------- automotive */

export const AUTO_FALLBACK = "Meridian GT|2026|Petrol;Meridian Touring|2026|Hybrid;Meridian Sport|2025|Petrol;Meridian Utility|2026|Diesel";

export const AUTO_SERVICES = ["Minor service", "Major service", "Brake inspection", "Tyre replacement", "Diagnostics"];

/* ------------------------------------------------------------- professional */

export const MATTERS = [
  { ref: "MAT-2481", client: "Dlamini Holdings", type: "Commercial", status: "In progress", owner: "T. Whitfield", due: "28 Nov" },
  { ref: "MAT-2477", client: "Kruger Family Trust", type: "Estates", status: "Awaiting client", owner: "N. Vance", due: "02 Dec" },
  { ref: "MAT-2462", client: "Sable Developments", type: "Property", status: "In progress", owner: "A. Botha", due: "05 Dec" },
  { ref: "MAT-2450", client: "Mokoena Logistics", type: "Employment", status: "Filed", owner: "T. Whitfield", due: "Complete" },
];

export const DOCUMENTS = [
  { name: "Sale agreement — final.pdf", size: "1.8 MB", date: "18 Nov" },
  { name: "Board resolution.pdf", size: "420 KB", date: "16 Nov" },
  { name: "Due diligence index.xlsx", size: "88 KB", date: "12 Nov" },
];

export const INVOICES = [
  { ref: "INV-8841", amount: 42_500, status: "Paid", date: "01 Nov" },
  { ref: "INV-8896", amount: 18_900, status: "Due", date: "01 Dec" },
];

/* ----------------------------------------------------------------- creative */

export const CREATIVE_FALLBACK = "Opening night|Exhibition|2h 30m;Studio session 04|Film|18m;Colour field|Series|12 works;After hours|Performance|1h 10m";

export const CREATIVE_TIERS = [
  { name: "Friend", price: 250, blurb: "Support the programme.", perks: ["Members previews", "Quarterly journal", "10% shop discount"] },
  { name: "Patron", price: 950, blurb: "Closer to the work.", perks: ["All Friend benefits", "Two opening invitations", "Studio visits"], featured: true },
  { name: "Circle", price: 4_500, blurb: "For serious collectors.", perks: ["All Patron benefits", "Private viewings", "Acquisition advisory"] },
];

export const CREATIVE_EVENTS = [
  { name: "Opening night — Colour Field", date: "Fri 27 Nov", time: "18:00", price: 180 },
  { name: "Artist walkthrough", date: "Sat 28 Nov", time: "11:00", price: 120 },
  { name: "Late listening session", date: "Thu 03 Dec", time: "20:00", price: 220 },
];

export const GROUP_FALLBACKS: Partial<Record<GroupKey, string>> = {
  retail: RETAIL_FALLBACK,
  hospitality: STAY_FALLBACK,
  education: LEARN_FALLBACK,
  property: PROPERTY_FALLBACK,
  automotive: AUTO_FALLBACK,
  creative: CREATIVE_FALLBACK,
};
