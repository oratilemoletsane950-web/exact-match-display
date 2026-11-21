import { useState } from "react";

import {
  AUTO_FALLBACK,
  AUTO_SERVICES,
  CREATIVE_EVENTS,
  CREATIVE_FALLBACK,
  CREATIVE_TIERS,
  DOCUMENTS,
  INVOICES,
  MATTERS,
  PROPERTY_FALLBACK,
  PROPERTY_TYPES,
  TECH_LOGS,
  TECH_PLANS,
  TECH_SERVICES,
  money,
} from "@/lib/portfolio/data";
import { cn } from "@/lib/utils";

import { ModuleFrame, Panel, type ModuleProps } from "./modules";
import { Bar, Btn, Field, Label, Media, Note, Spark, Tabs, Tag } from "./ui";

function parseRows(items: string | undefined, fallback: string) {
  const source = items && items.trim() ? items : fallback;
  return source.split(";").map((row) => row.split("|").map((cell) => cell.trim()));
}
function num(value: string | undefined) {
  return Number((value ?? "").replace(/[^\d.-]/g, "")) || 0;
}

/* --------------------------------------------------------------- technology */

export function TechModule({ tpl }: ModuleProps) {
  const [tab, setTab] = useState<"overview" | "usage" | "plans">("overview");
  const [annual, setAnnual] = useState(false);
  const [seats, setSeats] = useState(12);
  const [requests, setRequests] = useState(120);
  const [plan, setPlan] = useState<string | null>(null);
  const price = seats * 149 + Math.max(0, requests - 50) * 12;
  const billed = annual ? Math.round(price * 0.8) : price;

  return (
    <ModuleFrame
      tpl={tpl}
      title={<>Software you can see working.</>}
      lead="A product overview, real usage-based pricing and plan selection. This is what a SaaS marketing site looks like when the demo is part of the page."
    >
      <Tabs
        label="Product demonstration"
        active={tab}
        onChange={setTab}
        tabs={[
          { key: "overview", label: "Overview" },
          { key: "usage", label: "Usage calculator" },
          { key: "plans", label: "Plans" },
        ]}
      />

      {tab === "overview" && (
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
          <Panel>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <Label>Workspace</Label>
                <p className="pf-display mt-1 text-[1.3rem]">{tpl.brand} production</p>
              </div>
              <Tag>All systems nominal</Tag>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { k: "Requests", v: "1.28m", d: "+18.4%" },
                { k: "p95 latency", v: "118 ms", d: "−12 ms" },
                { k: "Error rate", v: "0.04%", d: "−0.01" },
                { k: "Seats", v: "24 / 25", d: "96%" },
              ].map((kpi) => (
                <div key={kpi.k} className="border border-[var(--p-line)] p-3">
                  <p className="pf-label">{kpi.k}</p>
                  <p className="pf-display mt-1.5 text-[1.15rem] leading-none">{kpi.v}</p>
                  <p className="pf-mono mt-1 text-[0.6rem] text-emerald-600">{kpi.d}</p>
                </div>
              ))}
            </div>
            <Spark className="mt-4" points={[20, 24, 22, 30, 28, 36, 34, 42, 40, 48, 52, 58, 56, 64]} height={130} />
            <div className="mt-4 overflow-x-auto">
              <table className="pf-table">
                <thead>
                  <tr><th>Event</th><th>Detail</th></tr>
                </thead>
                <tbody>
                  {TECH_LOGS.map((log) => {
                    const [time, type, ...rest] = log.split(/\s+/);
                    return (
                      <tr key={log}>
                        <td className="pf-mono whitespace-nowrap">{time}</td>
                        <td><span className="pf-mono mr-2 text-[var(--p-accent)]">{type}</span>{rest.join(" ")}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Panel>
          <div className="grid gap-4">
            <Panel>
              <Label>Service status</Label>
              <ul className="mt-3 space-y-2.5">
                {TECH_SERVICES.map((s) => (
                  <li key={s.name} className="flex items-center justify-between gap-3 border-b border-[var(--p-line)] pb-2 text-[0.82rem] last:border-0">
                    <span className="flex items-center gap-2">
                      <span className={cn("h-1.5 w-1.5 rounded-full", s.status === "Operational" ? "bg-emerald-500" : "bg-amber-500")} />
                      {s.name}
                    </span>
                    <span className="pf-mono text-[0.66rem] text-[var(--p-muted)]">{s.latency}</span>
                  </li>
                ))}
              </ul>
            </Panel>
            <Panel>
              <Label>This month</Label>
              <div className="mt-3 flex items-end justify-between">
                <p className="pf-display text-[1.9rem] leading-none">{money(1_788)}</p>
                <span className="pf-label">Next invoice · 1 Dec</span>
              </div>
              <div className="mt-4"><Bar label="Included requests" value={72} /></div>
              <Btn small variant="ghost" className="mt-4">Download invoice</Btn>
            </Panel>
          </div>
        </div>
      )}

      {tab === "usage" && (
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Panel>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <Label>Estimate your bill</Label>
                <p className="pf-display mt-1 text-[1.25rem]">Usage-based pricing</p>
              </div>
              <button type="button" onClick={() => setAnnual((v) => !v)} className={cn("pf-toggle", annual && "is-on")}>
                <span>Annual · save 20%</span>
                <i aria-hidden />
              </button>
            </div>
            <div className="mt-6 grid gap-6">
              <Field label={`Seats — ${seats}`}>
                <input type="range" min={1} max={60} value={seats} onChange={(e) => setSeats(Number(e.target.value))} className="pf-range" />
              </Field>
              <Field label={`Requests — ${requests}k / month`}>
                <input type="range" min={10} max={1000} step={10} value={requests} onChange={(e) => setRequests(Number(e.target.value))} className="pf-range" />
              </Field>
              <ul className="space-y-2 border-t border-[var(--p-line)] pt-4 text-[0.85rem]">
                <li className="flex justify-between"><span>{seats} seats × R149</span><span className="pf-mono">{money(seats * 149)}</span></li>
                <li className="flex justify-between"><span>Requests beyond 50k</span><span className="pf-mono">{money(Math.max(0, requests - 50) * 12)}</span></li>
                {annual && <li className="flex justify-between text-[var(--p-accent)]"><span>Annual discount</span><span className="pf-mono">−{money(price * 0.2)}</span></li>}
              </ul>
            </div>
          </Panel>
          <Panel className="flex flex-col justify-between">
            <div>
              <Label>Your estimate</Label>
              <p className="pf-display mt-2 text-[2.6rem] leading-none">{money(billed)}</p>
              <p className="mt-2 text-[0.82rem] text-[var(--p-muted)]">per month, {annual ? "billed annually" : "billed monthly"}</p>
              <div className="mt-6 grid gap-3">
                <Bar label="Requests used" value={(requests / 1000) * 100} />
                <Bar label="Seats used" value={(seats / 60) * 100} />
              </div>
            </div>
            <div className="mt-6">
              <Btn className="w-full" onClick={() => setPlan("Scale")}>Start a 14-day trial</Btn>
              <p className="pf-hint mt-3">No card required. Cancel any time.</p>
            </div>
          </Panel>
        </div>
      )}

      {tab === "plans" && (
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {TECH_PLANS.map((item) => (
            <Panel key={item.name} className={cn("flex flex-col justify-between gap-6", item.featured && "border-[var(--p-accent)]")}>
              <div>
                <div className="flex items-center justify-between gap-2">
                  <Label>{item.name}</Label>
                  {item.featured && <Tag>Most chosen</Tag>}
                </div>
                <p className="pf-display mt-2 text-[1.7rem] leading-none">
                  {item.price ? money(annual ? item.price * 0.8 : item.price) : "Custom"}
                  {item.price > 0 && <span className="pf-label ml-1 normal-case">/mo</span>}
                </p>
                <p className="mt-2 text-[0.82rem] text-[var(--p-muted)]">{item.blurb}</p>
                <ul className="mt-4 space-y-2">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 border-b border-[var(--p-line)] pb-2 text-[0.82rem] last:border-0">
                      <span className="pf-checkmark">✓</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
              <Btn variant={item.featured ? "solid" : "ghost"} onClick={() => setPlan(item.name)} className="w-full">
                {plan === item.name ? "Selected" : item.price ? "Choose plan" : "Talk to sales"}
              </Btn>
            </Panel>
          ))}
          {plan && <p className="pf-hint md:col-span-3"><Note tone="ok">{plan} selected — a production build would continue to account creation.</Note></p>}
        </div>
      )}
    </ModuleFrame>
  );
}

/* ----------------------------------------------------------------- property */

export function PropertyModule({ tpl, group }: ModuleProps) {
  const base = tpl.base ?? 1_450_000;
  const listings = parseRows(tpl.items, PROPERTY_FALLBACK).map(
    ([title = "", suburb = "", beds, baths], i) => ({
    title,
    suburb: suburb || "Bloemfontein",
    beds: num(beds) || 3,
    baths: num(baths) || 2,
    type: PROPERTY_TYPES[1 + (i % 3)] ?? "House",
    price: Math.round(base * (0.78 + i * 0.14)),
    }),
  );
  const [type, setType] = useState("All");
  const [beds, setBeds] = useState(0);
  const [deposit, setDeposit] = useState(15);
  const [viewing, setViewing] = useState<string | null>(null);
  const [selected, setSelected] = useState(listings[0]?.title ?? "");

  const shown = listings.filter((l) => (type === "All" || l.type === type) && l.beds >= beds);
  const active = listings.find((l) => l.title === selected) ?? listings[0];
  const loanAmount = (active?.price ?? 0) * (1 - deposit / 100);
  const r = 0.1025 / 12;
  const n = 240;
  const monthly = (loanAmount * r) / (1 - Math.pow(1 + r, -n));

  return (
    <ModuleFrame
      tpl={tpl}
      title={<>Search, calculate, then book the viewing.</>}
      lead="Listing filters, a bond repayment estimate and a viewing request tied to a specific property — the three moments that decide a property enquiry."
    >
      <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {PROPERTY_TYPES.map((item) => (
                <button key={item} type="button" onClick={() => setType(item)} className={cn("pf-tag", type === item && "is-active")}>
                  {item}
                </button>
              ))}
            </div>
            <Field label="Minimum bedrooms" className="w-40">
              <select className="pf-input py-2" value={beds} onChange={(e) => setBeds(Number(e.target.value))}>
                <option value={0}>Any</option><option value={2}>2+</option><option value={3}>3+</option><option value={4}>4+</option>
              </select>
            </Field>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {shown.map((listing) => (
              <article key={listing.title} className={cn("pf-card overflow-hidden", selected === listing.title && "ring-1 ring-[var(--p-accent)]")}>
                <Media src={group.image} alt={listing.title} ratio="16 / 10" treatment="none" />
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Tag>{listing.type}</Tag>
                      <h3 className="pf-display mt-2 text-[1.1rem] leading-tight">{listing.title}</h3>
                      <p className="pf-label mt-1">{listing.suburb}</p>
                    </div>
                    <p className="pf-mono text-[0.82rem]">{money(listing.price)}</p>
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-2 border-t border-[var(--p-line)] pt-2 text-[0.78rem] text-[var(--p-muted)]">
                    <span>{listing.beds} bed · {listing.baths} bath</span>
                    <button
                      type="button"
                      onClick={() => { setSelected(listing.title); setViewing(null); }}
                      className="pf-link text-[var(--p-accent)]"
                    >
                      View details
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid h-fit gap-4">
          <Panel>
            <Label>Bond estimate · {active?.title}</Label>
            <p className="pf-display mt-2 text-[1.5rem] leading-none">{money(monthly)}<span className="pf-label ml-1 normal-case">/month</span></p>
            <div className="mt-4 grid gap-4">
              <Field label={`Deposit — ${deposit}%`}>
                <input type="range" min={0} max={50} step={5} value={deposit} onChange={(e) => setDeposit(Number(e.target.value))} className="pf-range" />
              </Field>
              <div className="flex justify-between text-[0.8rem] border-t border-[var(--p-line)] pt-2">
                <span className="text-[var(--p-muted)]">Loan amount</span><span className="pf-mono">{money(loanAmount)}</span>
              </div>
              <div className="flex justify-between text-[0.8rem]">
                <span className="text-[var(--p-muted)]">Rate / term</span><span className="pf-mono">10.25% · 20 yrs</span>
              </div>
            </div>
            <p className="pf-hint mt-3">Estimate only. Excludes fees, insurance and levies.</p>
          </Panel>
          <Panel>
            <Label>Book a viewing</Label>
            <div className="mt-3 grid gap-3">
              <Field label="Property">
                <select className="pf-input" value={selected} onChange={(e) => { setSelected(e.target.value); setViewing(null); }}>
                  {listings.map((l) => <option key={l.title}>{l.title}</option>)}
                </select>
              </Field>
              <Field label="Preferred date">
                <input type="date" className="pf-input" />
              </Field>
              <Field label="Time">
                <select className="pf-input"><option>09:00</option><option>11:00</option><option>14:00</option><option>16:30</option></select>
              </Field>
            </div>
            <Btn className="mt-4 w-full" onClick={() => setViewing(`Viewing requested for ${active?.title} — an agent will confirm. Ref VW-${640 + tpl.index}.`)}>
              Request viewing
            </Btn>
            {viewing && <Note tone="ok">{viewing}</Note>}
          </Panel>
        </div>
      </div>
    </ModuleFrame>
  );
}

/* --------------------------------------------------------------- automotive */

export function AutomotiveModule({ tpl, group }: ModuleProps) {
  const base = tpl.base ?? 899_000;
  const vehicles = parseRows(tpl.items, AUTO_FALLBACK).map(
    ([name = "", year = "", fuel = ""], i) => ({
      name,
      year: year || "2026",
      fuel: fuel || "Petrol",
      price: Math.round(base * (0.82 + i * 0.12)),
      body: ["SUV", "Sedan", "Coupe", "Utility"][i % 4] ?? "SUV",
    }),
  );
  const [compare, setCompare] = useState<string[]>([vehicles[0]?.name ?? ""]);
  const [term, setTerm] = useState(60);
  const [deposit, setDeposit] = useState(10);
  const [booked, setBooked] = useState<string | null>(null);
  const [service, setService] = useState(AUTO_SERVICES[0] ?? "Service");

  const selected = vehicles.filter((v) => compare.includes(v.name));
  const target = selected[0] ?? vehicles[0];
  const loan = (target?.price ?? 0) * (1 - deposit / 100);
  const r = 0.125 / 12;
  const monthly = loan > 0 ? (loan * r) / (1 - Math.pow(1 + r, -term)) : 0;

  const toggle = (name: string) =>
    setCompare((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : prev.length >= 3 ? prev : [...prev, name],
    );

  return (
    <ModuleFrame
      tpl={tpl}
      title={<>Specifications, comparison, finance — in one place.</>}
      lead="A vehicle catalogue with real comparison logic, a finance estimate that responds to deposit and term, and a service booking flow."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {vehicles.map((v) => (
          <article key={v.name} className="pf-card flex flex-col overflow-hidden">
            <Media src={group.image} alt={v.name} ratio="4 / 3" treatment="mono" />
            <div className="flex flex-1 flex-col justify-between gap-3 p-4">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <Tag>{v.year}</Tag>
                  <span className="pf-label">{v.fuel}</span>
                </div>
                <h3 className="pf-display mt-2 text-[1.05rem] leading-tight">{v.name}</h3>
                <p className="pf-mono mt-1.5 text-[0.8rem]">{money(v.price)}</p>
              </div>
              <button
                type="button"
                onClick={() => toggle(v.name)}
                className={cn("pf-btn pf-btn-sm w-full", !compare.includes(v.name) && "pf-btn-ghost")}
              >
                {compare.includes(v.name) ? "Added to compare" : "Compare"}
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
        <Panel>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Label>Comparison · {selected.length} of 3 selected</Label>
            {compare.length > 0 && (
              <button type="button" onClick={() => setCompare([])} className="pf-link text-[0.75rem]">Clear</button>
            )}
          </div>
          {selected.length === 0 ? (
            <p className="py-6 text-[0.88rem] text-[var(--p-muted)]">Select a vehicle above to compare specifications.</p>
          ) : (
            <div className="mt-4 overflow-x-auto">
              <table className="pf-table">
                <thead>
                  <tr>
                    <th>Specification</th>
                    {selected.map((v) => <th key={v.name}>{v.name}</th>)}
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Price</td>{selected.map((v) => <td key={v.name} className="pf-mono">{money(v.price)}</td>)}</tr>
                  <tr><td>Body</td>{selected.map((v) => <td key={v.name}>{v.body}</td>)}</tr>
                  <tr><td>Model year</td>{selected.map((v) => <td key={v.name}>{v.year}</td>)}</tr>
                  <tr><td>Fuel</td>{selected.map((v) => <td key={v.name}>{v.fuel}</td>)}</tr>
                  <tr><td>Transmission</td>{selected.map((v) => <td key={v.name}>Automatic</td>)}</tr>
                  <tr><td>Warranty</td>{selected.map((v) => <td key={v.name}>5 years / 100 000 km</td>)}</tr>
                </tbody>
              </table>
            </div>
          )}
        </Panel>
        <div className="grid gap-4">
          <Panel>
            <Label>Finance estimate · {target?.name}</Label>
            <p className="pf-display mt-2 text-[1.5rem] leading-none">{money(monthly)}<span className="pf-label ml-1 normal-case">/mo</span></p>
            <div className="mt-4 grid gap-4">
              <Field label={`Deposit — ${deposit}%`}>
                <input type="range" min={0} max={40} step={5} value={deposit} onChange={(e) => setDeposit(Number(e.target.value))} className="pf-range" />
              </Field>
              <Field label={`Term — ${term / 12} years`}>
                <input type="range" min={24} max={84} step={12} value={term} onChange={(e) => setTerm(Number(e.target.value))} className="pf-range" />
              </Field>
            </div>
            <Btn small className="mt-4 w-full">Apply for finance</Btn>
            <p className="pf-hint mt-2">12.5% linked rate. Subject to approval.</p>
          </Panel>
          <Panel>
            <Label>Book a service</Label>
            <div className="mt-3 grid gap-3">
              <select className="pf-input" value={service} onChange={(e) => setService(e.target.value)}>
                {AUTO_SERVICES.map((s) => <option key={s}>{s}</option>)}
              </select>
              <input type="date" className="pf-input" aria-label="Service date" />
            </div>
            <Btn className="mt-3 w-full" onClick={() => setBooked(`${service} booked. Ref SVC-${410 + tpl.index}.`)}>Book {service.toLowerCase()}</Btn>
            {booked && <Note tone="ok">{booked}</Note>}
          </Panel>
        </div>
      </div>
    </ModuleFrame>
  );
}

/* ------------------------------------------------------------- professional */

export function ProfessionalModule({ tpl }: ModuleProps) {
  const [status, setStatus] = useState("All");
  const [active, setActive] = useState(MATTERS[0]?.ref ?? "");
  const [sent, setSent] = useState<string | null>(null);
  const matter =
    MATTERS.find((m) => m.ref === active) ??
    MATTERS[0] ?? { ref: "—", client: "—", type: "—", status: "—", owner: "—", due: "—" };
  const shown = MATTERS.filter((m) => status === "All" || m.status === status);

  return (
    <ModuleFrame
      tpl={tpl}
      title={<>A client portal that earns its keep.</>}
      lead="Matters, documents, invoices and a quote request — the parts of a professional-services site that clients use between meetings."
    >
      <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        <Panel>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <Label>Client portal</Label>
              <p className="pf-display mt-1 text-[1.2rem]">Dlamini Holdings</p>
            </div>
            <div className="flex gap-1">
              {["All", "In progress", "Awaiting client", "Filed"].map((s) => (
                <button key={s} type="button" onClick={() => setStatus(s)} className={cn("pf-tag", status === s && "is-active")}>{s}</button>
              ))}
            </div>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="pf-table">
              <thead><tr><th>Matter</th><th>Type</th><th>Owner</th><th>Due</th><th>Status</th></tr></thead>
              <tbody>
                {shown.map((m) => (
                  <tr key={m.ref} onClick={() => setActive(m.ref)} className={cn("cursor-pointer", active === m.ref && "bg-[var(--p-accent-soft)]")}>
                    <td><span className="pf-mono text-[0.7rem] text-[var(--p-muted)]">{m.ref}</span><br />{m.client}</td>
                    <td>{m.type}</td>
                    <td>{m.owner}</td>
                    <td className="pf-mono text-[0.72rem]">{m.due}</td>
                    <td><Tag>{m.status}</Tag></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <Label>Documents · {matter.ref}</Label>
              <ul className="mt-2 space-y-2">
                {DOCUMENTS.map((d) => (
                  <li key={d.name} className="flex items-center justify-between gap-2 border-b border-[var(--p-line)] pb-2 text-[0.8rem] last:border-0">
                    <span className="truncate">{d.name}</span>
                    <span className="pf-mono shrink-0 text-[0.62rem] text-[var(--p-muted)]">{d.size}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Label>Invoices</Label>
              <ul className="mt-2 space-y-2">
                {INVOICES.map((inv) => (
                  <li key={inv.ref} className="flex items-center justify-between gap-2 border-b border-[var(--p-line)] pb-2 text-[0.8rem] last:border-0">
                    <span>{inv.ref} · {inv.date}</span>
                    <span className={cn("pf-mono text-[0.68rem]", inv.status === "Paid" ? "text-emerald-600" : "text-amber-600")}>
                      {inv.status === "Paid" ? "Paid" : money(inv.amount)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Panel>

        <Panel className="h-fit">
          <Label>Request a quotation</Label>
          <p className="pf-display mt-1 text-[1.15rem]">{tpl.cta}</p>
          <form
            className="mt-4 grid gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(`Quote request received — ref QTE-${260 + tpl.index}. A partner would respond within one business day.`);
            }}
          >
            <Field label="Service"><select className="pf-input">{["Commercial", "Property", "Employment", "Estates", "Litigation"].map((s) => <option key={s}>{s}</option>)}</select></Field>
            <Field label="Budget"><select className="pf-input"><option>Under R25 000</option><option>R25 000 – R100 000</option><option>R100 000+</option><option>Not sure yet</option></select></Field>
            <Field label="Timeline"><select className="pf-input"><option>This month</option><option>This quarter</option><option>Planning ahead</option></select></Field>
            <Field label="Brief"><textarea rows={3} className="pf-input resize-y" required /></Field>
            <Btn type="submit" className="w-full">Send request</Btn>
          </form>
          {sent && <Note tone="ok">{sent}</Note>}
          <p className="pf-hint mt-3">Demonstration form — nothing is transmitted.</p>
        </Panel>
      </div>
    </ModuleFrame>
  );
}

/* ----------------------------------------------------------------- creative */

export function CreativeModule({ tpl, group }: ModuleProps) {
  const items = parseRows(tpl.items, CREATIVE_FALLBACK).map(
    ([title = "", type = "", duration = ""]) => ({
      title,
      type: type || "Work",
      duration: duration || "—",
    }),
  );
  const [open, setOpen] = useState<number | null>(null);
  const [tier, setTier] = useState<string | null>(null);
  const [tickets, setTickets] = useState(2);
  const [booked, setBooked] = useState<string | null>(null);
  const event =
    CREATIVE_EVENTS[tpl.index % CREATIVE_EVENTS.length] ??
    CREATIVE_EVENTS[0] ?? { name: "Studio opening", date: "Fri 27 Nov", time: "18:00", price: 180 };

  return (
    <ModuleFrame
      tpl={tpl}
      title={<>A catalogue you can step inside.</>}
      lead="A media gallery with a working lightbox, event ticketing with a live total, and membership tiers — the commercial layer under a creative brand."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setOpen(i)}
            className="pf-card group overflow-hidden text-left"
          >
            <Media src={group.image} alt={item.title} ratio={i % 3 === 0 ? "3 / 4" : "4 / 3"} treatment={i % 2 ? "duotone" : "none"} />
            <div className="flex items-center justify-between gap-2 p-3.5">
              <div>
                <p className="text-[0.88rem] leading-tight">{item.title}</p>
                <p className="pf-label mt-1">{item.type}</p>
              </div>
              <span className="pf-mono text-[0.62rem] text-[var(--p-muted)]">{item.duration}</span>
            </div>
          </button>
        ))}
      </div>

      {open !== null && items[open] && (
        <div className="pf-lightbox" role="dialog" aria-modal="true" aria-label={items[open].title}>
          <div className="pf-lightbox-inner">
            <div className="flex items-start justify-between gap-4">
              <div>
                <Label className="pf-accent">{items[open].type}</Label>
                <p className="pf-display mt-1 text-[1.6rem] leading-tight">{items[open].title}</p>
              </div>
              <button type="button" onClick={() => setOpen(null)} aria-label="Close" className="pf-btn pf-btn-ghost pf-btn-sm">Close</button>
            </div>
            <Media src={group.image} alt={items[open].title} ratio="16 / 9" className="mt-4" />
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <p className="text-[0.84rem] text-[var(--p-muted)]">{items[open].duration} · {tpl.brand} · 2026</p>
              <Btn small>View the work</Btn>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <Panel>
          <Label>Next event</Label>
          <p className="pf-display mt-2 text-[1.3rem] leading-tight">{event.name}</p>
          <p className="mt-1 text-[0.82rem] text-[var(--p-muted)]">{event.date} · {event.time}</p>
          <div className="mt-4 flex items-center justify-between gap-4 border-t border-[var(--p-line)] pt-4">
            <Field label="Tickets" className="w-28">
              <input type="number" min={1} max={8} value={tickets} onChange={(e) => setTickets(Math.max(1, Math.min(8, Number(e.target.value))))} className="pf-input py-2" />
            </Field>
            <div className="text-right">
              <Label>Total</Label>
              <p className="pf-display mt-1 text-[1.4rem]">{money(tickets * event.price)}</p>
            </div>
          </div>
          <Btn className="mt-4 w-full" onClick={() => setBooked(`Booked ${tickets} × ${event.name} — ref EVT-${720 + tpl.index}.`)}>Reserve tickets</Btn>
          {booked && <Note tone="ok">{booked}</Note>}
        </Panel>

        <div className="grid gap-3 sm:grid-cols-3">
          {CREATIVE_TIERS.map((t) => (
            <Panel key={t.name} className={cn("flex flex-col justify-between gap-5", t.featured && "border-[var(--p-accent)]")}>
              <div>
                <Label>{t.name}</Label>
                <p className="pf-display mt-2 text-[1.4rem] leading-none">{money(t.price)}<span className="pf-label ml-1 normal-case">/yr</span></p>
                <p className="mt-2 text-[0.78rem] text-[var(--p-muted)]">{t.blurb}</p>
                <ul className="mt-3 space-y-1.5">
                  {t.perks.map((p) => <li key={p} className="text-[0.76rem] text-[var(--p-muted)]">· {p}</li>)}
                </ul>
              </div>
              <Btn small variant={t.featured ? "solid" : "ghost"} onClick={() => setTier(t.name)}>
                {tier === t.name ? "Selected" : "Join"}
              </Btn>
            </Panel>
          ))}
          {tier && <p className="pf-hint sm:col-span-3"><Note tone="ok">{tier} membership selected.</Note></p>}
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          { label: "Monthly listeners", value: "184k" },
          { label: "Works in collection", value: "1 240" },
          { label: "Members", value: "3 480" },
        ].map((s) => (
          <div key={s.label} className="flex items-baseline justify-between gap-3 border-t border-[var(--p-line)] pt-3">
            <span className="pf-label">{s.label}</span>
            <span className="pf-display text-[1.2rem]">{s.value}</span>
          </div>
        ))}
      </div>
    </ModuleFrame>
  );
}
