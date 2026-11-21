import { useState, type ReactNode } from "react";

import {
  BANK_ACCOUNTS,
  BANK_SPEND,
  BANK_TRANSACTIONS,
  CLINICIANS,
  HEALTH_DAYS,
  HEALTH_SLOTS,
  HEALTH_SPECIALTIES,
  LAB_RESULTS,
  LEARN_FALLBACK,
  LEARN_GRADES,
  LEARN_LESSONS,
  PRESCRIPTIONS,
  RETAIL_FALLBACK,
  STAY_FALLBACK,
  STAY_MENUS,
  money,
} from "@/lib/portfolio/data";
import type { Group, Template } from "@/lib/portfolio/types";
import { cn } from "@/lib/utils";

import {
  Bar,
  Btn,
  Donut,
  Field,
  Icon,
  Label,
  Media,
  Note,
  SectionHead,
  Shell,
  Spark,
  Tabs,
  Tag,
  Band,
} from "./ui";

export type ModuleProps = { tpl: Template; group: Group };

export function ModuleFrame({
  tpl,
  title,
  lead,
  children,
  tone = "surface",
}: {
  tpl: Template;
  title: ReactNode;
  lead: ReactNode;
  children: ReactNode;
  tone?: "plain" | "surface";
}) {
  return (
    <Band id="experience" tone={tone}>
      <Shell wide className="py-14 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <SectionHead label="Interactive demonstration" title={title} lead={lead} />
          <div className="hidden items-center gap-2 border border-[var(--p-line)] px-3 py-2 md:flex">
            <span className="pf-live" aria-hidden />
            <Label className="text-[var(--p-fg)]">Live sample data</Label>
          </div>
        </div>
        <div className="mt-8">{children}</div>
        <p className="pf-hint mt-5">
          {tpl.brand} · all data is fictional and generated for this concept. Nothing is submitted,
          saved or sent.
        </p>
      </Shell>
    </Band>
  );
}

export function Panel({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("pf-card p-5", className)}>{children}</div>;
}

function Kpi({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <Panel>
      <Label>{label}</Label>
      <p className="pf-display mt-2 text-[1.5rem] leading-none">{value}</p>
      {note && <p className="mt-2 text-[0.72rem] text-[var(--p-muted)]">{note}</p>}
    </Panel>
  );
}

function parseRows(items: string | undefined, fallback: string) {
  const source = items && items.trim() ? items : fallback;
  return source.split(";").map((row) => row.split("|").map((cell) => cell.trim()));
}

function num(value: string | undefined) {
  return Number((value ?? "").replace(/[^\d.-]/g, "")) || 0;
}

function rotate<T>(list: T[], by: number): T[] {
  const offset = by % list.length;
  return [...list.slice(offset), ...list.slice(0, offset)];
}

/* ------------------------------------------------------------------ banking */

export function BankingModule({ tpl }: ModuleProps) {
  const [tab, setTab] = useState<"accounts" | "payments" | "lending">("accounts");
  const [flow, setFlow] = useState<"all" | "in" | "out">("all");
  const [beneficiary, setBeneficiary] = useState("Dlamini Holdings");
  const [payAmount, setPayAmount] = useState("");
  const [receipt, setReceipt] = useState<string | null>(null);
  const [loan, setLoan] = useState(850_000);
  const [term, setTerm] = useState(240);

  const accounts = BANK_ACCOUNTS.map((account, i) => ({
    ...account,
    balance: Math.round(account.balance * ([1, 1.14, 0.92][(tpl.index + i) % 3] ?? 1)),
  }));
  const transactions = BANK_TRANSACTIONS.filter((tx) =>
    flow === "all" ? true : flow === "in" ? tx.amount > 0 : tx.amount < 0,
  );
  const monthlyRate = 0.1175 / 12;
  const monthly =
    (loan * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term));
  const totalCost = monthly * term;

  return (
    <ModuleFrame
      tpl={tpl}
      title={<>Banking that shows its working.</>}
      lead="Account management, a transfer flow, spending analysis and a repayment calculator — the four things a banking client actually does online."
    >
      <Tabs
        label="Banking demonstration"
        active={tab}
        onChange={setTab}
        tabs={[
          { key: "accounts", label: "Accounts" },
          { key: "payments", label: "Payments" },
          { key: "lending", label: "Lending" },
        ]}
      />

      {tab === "accounts" && (
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {accounts.map((account) => (
              <Panel key={account.number} className="flex flex-col justify-between gap-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <Label>{account.name}</Label>
                    <p className="pf-mono mt-1 text-[0.68rem] text-[var(--p-muted)]">
                      {account.number}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "pf-mono text-[0.6rem]",
                      account.trend >= 0 ? "text-emerald-600" : "text-rose-600",
                    )}
                  >
                    {account.trend >= 0 ? "▲" : "▼"} {Math.abs(account.trend)}%
                  </span>
                </div>
                <p className="pf-display text-[clamp(1.5rem,2.6vw,2rem)] leading-none">
                  {money(account.balance)}
                </p>
                <Spark
                  points={[8, 12, 10, 16, 14, 19, 17, 24, 21, 28].map((n) => n + account.trend)}
                  height={34}
                />
              </Panel>
            ))}
          </div>
          <Panel>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <Label>Recent activity</Label>
                <p className="pf-display mt-1 text-[1.15rem]">Transactions</p>
              </div>
              <div className="flex gap-1">
                {(["all", "in", "out"] as const).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setFlow(key)}
                    className={cn("pf-tag", flow === key && "is-active")}
                  >
                    {key === "all" ? "All" : key === "in" ? "In" : "Out"}
                  </button>
                ))}
              </div>
            </div>
            <ul className="mt-4 divide-y divide-[var(--p-line)]">
              {transactions.map((tx) => (
                <li key={tx.merchant} className="flex items-center justify-between gap-3 py-2.5">
                  <div className="min-w-0">
                    <p className="truncate text-[0.85rem]">{tx.merchant}</p>
                    <p className="pf-label mt-0.5 normal-case">
                      {tx.date} · {tx.category}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "pf-mono shrink-0 text-[0.78rem]",
                      tx.amount > 0 ? "text-emerald-600" : "text-[var(--p-fg)]",
                    )}
                  >
                    {tx.amount > 0 ? "+" : ""}
                    {money(tx.amount)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-[var(--p-line)] pt-4">
              <Label>Spending mix</Label>
              <div className="mt-3 grid gap-2.5">
                {BANK_SPEND.slice(0, 4).map((item) => (
                  <Bar key={item.label} label={item.label} value={item.value} max={40} />
                ))}
              </div>
            </div>
          </Panel>
        </div>
      )}

      {tab === "payments" && (
        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1fr]">
          <Panel>
            <Label>New payment</Label>
            <p className="pf-display mt-1 text-[1.25rem]">Pay a beneficiary</p>
            <div className="mt-5 grid gap-4">
              <Field label="From">
                <select className="pf-input">
                  {accounts.map((a) => (
                    <option key={a.number}>{a.name} — {a.number}</option>
                  ))}
                </select>
              </Field>
              <Field label="Beneficiary">
                <input
                  className="pf-input"
                  value={beneficiary}
                  onChange={(e) => setBeneficiary(e.target.value)}
                />
              </Field>
              <Field label="Amount (ZAR)">
                <input
                  className="pf-input"
                  inputMode="decimal"
                  placeholder="2 500"
                  value={payAmount}
                  onChange={(e) => setPayAmount(e.target.value)}
                />
              </Field>
              <Field label="Reference">
                <input className="pf-input" defaultValue={`INV-${2480 + tpl.index}`} />
              </Field>
            </div>
            <Btn
              className="mt-5 w-full"
              onClick={() => {
                const value = num(payAmount);
                if (!beneficiary.trim() || value <= 0) {
                  setReceipt("Enter a beneficiary and an amount greater than zero.");
                  return;
                }
                setReceipt(`Payment of ${money(value)} to ${beneficiary} ready — ref TRF-${2480 + tpl.index}`);
              }}
            >
              Review payment
            </Btn>
            {receipt && <Note tone={receipt.startsWith("Payment") ? "ok" : "muted"}>{receipt}</Note>}
          </Panel>
          <Panel>
            <Label>Cash flow</Label>
            <p className="pf-display mt-1 text-[1.25rem]">This month</p>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div>
                <p className="pf-label">Money in</p>
                <p className="pf-display mt-1 text-[1.4rem]">{money(51_250)}</p>
              </div>
              <div>
                <p className="pf-label">Money out</p>
                <p className="pf-display mt-1 text-[1.4rem]">{money(24_846)}</p>
              </div>
            </div>
            <Spark
              className="mt-4"
              points={[18, 24, 20, 32, 28, 41, 36, 44, 40, 52, 49, 61]}
              height={110}
            />
            <div className="mt-4 border-t border-[var(--p-line)] pt-4">
              <Label>Upcoming</Label>
              <ul className="mt-2 space-y-2 text-[0.82rem]">
                <li className="flex justify-between gap-3"><span>Debit order — bond</span><span className="pf-mono">{money(14_200)}</span></li>
                <li className="flex justify-between gap-3"><span>Medical aid</span><span className="pf-mono">{money(4_820)}</span></li>
                <li className="flex justify-between gap-3"><span>Salary — 25th</span><span className="pf-mono text-emerald-600">+{money(68_000)}</span></li>
              </ul>
            </div>
          </Panel>
        </div>
      )}

      {tab === "lending" && (
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Panel>
            <Label>Repayment calculator</Label>
            <p className="pf-display mt-1 text-[1.25rem]">Bond and loan estimate</p>
            <div className="mt-6 grid gap-6">
              <Field label={`Amount — ${money(loan)}`}>
                <input
                  type="range"
                  min={100_000}
                  max={5_000_000}
                  step={50_000}
                  value={loan}
                  onChange={(e) => setLoan(Number(e.target.value))}
                  className="pf-range"
                />
              </Field>
              <Field label={`Term — ${term / 12} years`}>
                <input
                  type="range"
                  min={60}
                  max={360}
                  step={12}
                  value={term}
                  onChange={(e) => setTerm(Number(e.target.value))}
                  className="pf-range"
                />
              </Field>
              <div className="flex items-center justify-between border-t border-[var(--p-line)] pt-4">
                <div>
                  <Label>Indicative rate</Label>
                  <p className="pf-display mt-1 text-[1.3rem]">11.75%</p>
                </div>
                <div className="text-right">
                  <Label>Monthly</Label>
                  <p className="pf-display mt-1 text-[1.6rem]">{money(monthly)}</p>
                </div>
              </div>
            </div>
          </Panel>
          <div className="grid gap-4">
            <Kpi label="Total repayment" value={money(totalCost)} note={`${term} instalments`} />
            <Kpi label="Total interest" value={money(totalCost - loan)} note="Over the full term" />
            <Panel>
              <Label>Affordability check</Label>
              <div className="mt-3">
                <Bar label="Instalment vs income" value={(monthly / 68_000) * 100} max={100} />
              </div>
              <p className="pf-hint mt-3">
                A healthy instalment is below 30% of take-home pay. This is an illustration, not an
                offer of credit.
              </p>
            </Panel>
          </div>
        </div>
      )}
    </ModuleFrame>
  );
}

/* --------------------------------------------------------------- healthcare */

export function HealthModule({ tpl }: ModuleProps) {
  const [tab, setTab] = useState<"services" | "book" | "care">("services");
  const [specialty, setSpecialty] = useState(HEALTH_SPECIALTIES[0] ?? "All services");
  const [clinician, setClinician] = useState(CLINICIANS[0]?.name ?? "");
  const [day, setDay] = useState(HEALTH_DAYS[0] ?? "Mon 24");
  const [slot, setSlot] = useState(HEALTH_SLOTS[0] ?? "08:30");
  const [confirmed, setConfirmed] = useState<string | null>(null);

  const visible = rotate(CLINICIANS, tpl.index).filter(
    (c) => specialty === "All services" || c.specialty === specialty,
  );

  return (
    <ModuleFrame
      tpl={tpl}
      title={<>Care that fits around a life.</>}
      lead="A service directory, a real appointment flow and a patient view with prescriptions and results — the parts of a clinic site that do the work."
    >
      <Tabs
        label="Clinic demonstration"
        active={tab}
        onChange={setTab}
        tabs={[
          { key: "services", label: "Services" },
          { key: "book", label: "Book an appointment" },
          { key: "care", label: "Your care" },
        ]}
      />

      {tab === "services" && (
        <div className="mt-6">
          <div className="flex flex-wrap gap-2">
            {HEALTH_SPECIALTIES.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setSpecialty(item)}
                className={cn("pf-tag", specialty === item && "is-active")}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((person) => (
              <Panel key={person.name}>
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--p-accent-soft)] text-[0.68rem]">
                    {person.name.replace("Dr ", "").split(" ").map((n) => n[0]).join("")}
                  </span>
                  <Tag>{person.specialty}</Tag>
                </div>
                <p className="pf-display mt-4 text-[1.08rem]">{person.name}</p>
                <p className="mt-1 text-[0.8rem] text-[var(--p-muted)]">{person.role}</p>
                <p className="pf-label mt-4">Next available · {person.next}</p>
                <button
                  type="button"
                  onClick={() => {
                    setClinician(person.name);
                    setTab("book");
                  }}
                  className="pf-link mt-3"
                >
                  Book with {person.name.split(" ")[0]}
                </button>
              </Panel>
            ))}
            {visible.length === 0 && (
              <Panel className="sm:col-span-2 lg:col-span-3">
                <p className="text-[0.9rem]">No clinicians in this specialty today. Try another service.</p>
              </Panel>
            )}
          </div>
        </div>
      )}

      {tab === "book" && (
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <Panel>
            <Label>Step 1 · Clinician</Label>
            <select
              className="pf-input mt-2"
              value={clinician}
              onChange={(e) => {
                setClinician(e.target.value);
                setConfirmed(null);
              }}
            >
              {CLINICIANS.map((c) => (
                <option key={c.name}>{c.name}</option>
              ))}
            </select>
            <Label className="mt-6 block">Step 2 · Day</Label>
            <div className="mt-2 flex flex-wrap gap-2">
              {HEALTH_DAYS.map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDay(d)}
                  className={cn("pf-tag", day === d && "is-active")}
                >
                  {d} Nov
                </button>
              ))}
            </div>
            <Label className="mt-6 block">Step 3 · Time</Label>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {HEALTH_SLOTS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSlot(s)}
                  className={cn(
                    "pf-tag justify-center py-2.5",
                    slot === s && "is-active",
                    s === "11:30" && "opacity-40",
                  )}
                  disabled={s === "11:30"}
                >
                  {s}
                </button>
              ))}
            </div>
          </Panel>
          <Panel className="flex flex-col justify-between">
            <div>
              <Label>Your appointment</Label>
              <p className="pf-display mt-3 text-[1.35rem] leading-tight">{clinician}</p>
              <dl className="mt-5 space-y-3 text-[0.85rem]">
                <div className="flex justify-between gap-3 border-b border-[var(--p-line)] pb-2">
                  <dt className="text-[var(--p-muted)]">Date</dt>
                  <dd>{day} November 2026</dd>
                </div>
                <div className="flex justify-between gap-3 border-b border-[var(--p-line)] pb-2">
                  <dt className="text-[var(--p-muted)]">Time</dt>
                  <dd>{slot}</dd>
                </div>
                <div className="flex justify-between gap-3 border-b border-[var(--p-line)] pb-2">
                  <dt className="text-[var(--p-muted)]">Duration</dt>
                  <dd>30 minutes</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-[var(--p-muted)]">Location</dt>
                  <dd>{tpl.brand} — Room 4</dd>
                </div>
              </dl>
            </div>
            <div className="mt-6">
              <Btn
                className="w-full"
                onClick={() =>
                  setConfirmed(`Confirmed · ${day} Nov at ${slot} with ${clinician}. Ref APT-${2410 + tpl.index}`)
                }
              >
                Confirm appointment
              </Btn>
              {confirmed && <Note tone="ok">{confirmed}</Note>}
            </div>
          </Panel>
        </div>
      )}

      {tab === "care" && (
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <Panel>
            <Label>Next appointment</Label>
            <p className="pf-display mt-2 text-[1.2rem]">{tpl.index % 2 ? "Thu 27 Nov" : "Mon 24 Nov"}</p>
            <p className="mt-1 text-[0.82rem] text-[var(--p-muted)]">09:15 · Dr Naledi Mokoena</p>
            <Btn small variant="ghost" className="mt-4">Reschedule</Btn>
          </Panel>
          <Panel>
            <Label>Prescriptions</Label>
            <ul className="mt-3 space-y-3">
              {PRESCRIPTIONS.map((item) => (
                <li key={item.name} className="border-b border-[var(--p-line)] pb-2 last:border-0">
                  <p className="text-[0.85rem]">{item.name}</p>
                  <p className="pf-label mt-0.5 normal-case">{item.dose}</p>
                  <p className="mt-1 text-[0.75rem] text-[var(--p-accent)]">{item.status}</p>
                </li>
              ))}
            </ul>
          </Panel>
          <Panel>
            <Label>Results</Label>
            <ul className="mt-3 space-y-3">
              {LAB_RESULTS.map((item) => (
                <li key={item.name} className="border-b border-[var(--p-line)] pb-2 last:border-0">
                  <p className="text-[0.85rem]">{item.name}</p>
                  <p className="pf-label mt-0.5 normal-case">{item.date}</p>
                  <p className={cn("mt-1 text-[0.75rem]", item.status === "Normal" ? "text-emerald-600" : "text-amber-600")}>
                    {item.status}
                  </p>
                </li>
              ))}
            </ul>
            <Donut value={82} label="Care plan adherence" size={70} />
          </Panel>
        </div>
      )}
    </ModuleFrame>
  );
}

/* ------------------------------------------------------------------- retail */

export function RetailModule({ tpl, group }: ModuleProps) {
  const products = parseRows(tpl.items, RETAIL_FALLBACK).map(
    ([name = "", price, category = ""]) => ({
      name,
      price: num(price),
      category: category || "Other",
    }),
  );
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState<"featured" | "low" | "high">("featured");
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [order, setOrder] = useState<string | null>(null);

  const list = products
    .filter((p) => (category === "All" || p.category === category) && p.name.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => (sort === "low" ? a.price - b.price : sort === "high" ? b.price - a.price : 0));

  const lines = Object.entries(cart).filter(([, qty]) => qty > 0);
  const subtotal = lines.reduce((sum, [name, qty]) => {
    const product = products.find((p) => p.name === name);
    return sum + (product?.price ?? 0) * qty;
  }, 0);
  const shipping = subtotal > 1_500 || subtotal === 0 ? 0 : 95;

  const update = (name: string, delta: number) =>
    setCart((prev) => ({ ...prev, [name]: Math.max(0, (prev[name] ?? 0) + delta) }));

  return (
    <ModuleFrame
      tpl={tpl}
      title={<>A shop that behaves like a shop.</>}
      lead="Filterable catalogue, live cart, quantity controls, shipping threshold and a checkout state — the fundamentals that decide whether a store converts."
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {["All", ...new Set(products.map((p) => p.category))].map((item) => (
            <button key={item} type="button" onClick={() => setCategory(item)} className={cn("pf-tag", category === item && "is-active")}>
              {item}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 border border-[var(--p-line)] px-2.5">
            <Icon name="search" className="h-3.5 w-3.5 text-[var(--p-muted)]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              aria-label="Search products"
              className="w-28 bg-transparent py-2 text-[0.8rem] outline-none"
            />
          </div>
          <select
            aria-label="Sort products"
            value={sort}
            onChange={(e) => setSort(e.target.value as typeof sort)}
            className="pf-input !w-auto py-2 text-[0.78rem]"
          >
            <option value="featured">Featured</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
          </select>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="grid gap-3 sm:grid-cols-2">
          {list.map((product, i) => (
            <article key={product.name} className="pf-card flex flex-col overflow-hidden">
              <Media
                src={group.gallery?.[i % 3] ?? group.image}
                alt={product.name}
                ratio="16 / 10"
                treatment={i % 2 === 0 ? "none" : "mono"}
              />
              <div className="flex flex-1 flex-col justify-between gap-3 p-4">
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="pf-label">{product.category}</p>
                    {i === 0 && <Tag>New</Tag>}
                  </div>
                  <h3 className="mt-1.5 text-[0.95rem] leading-snug">{product.name}</h3>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <p className="pf-mono text-[0.86rem]">{money(product.price)}</p>
                  <button type="button" onClick={() => update(product.name, 1)} className="pf-btn pf-btn-sm">
                    Add to bag
                  </button>
                </div>
              </div>
            </article>
          ))}
          {list.length === 0 && (
            <Panel className="sm:col-span-2">
              <p className="text-[0.9rem]">Nothing matches “{query}”. Clear the search to see the collection.</p>
            </Panel>
          )}
        </div>

        <Panel className="h-fit lg:sticky lg:top-24">
          <div className="flex items-baseline justify-between gap-3">
            <div>
              <Label>Your bag</Label>
              <p className="pf-display mt-1 text-[1.15rem]">{lines.length} {lines.length === 1 ? "item" : "items"}</p>
            </div>
            <span className="pf-mono text-[0.68rem] text-[var(--p-muted)]">
              {shipping === 0 && subtotal > 0 ? "Free delivery" : `${money(shipping)} delivery`}
            </span>
          </div>
          <ul className="mt-4 divide-y divide-[var(--p-line)]">
            {lines.length === 0 && <li className="py-3 text-[0.82rem] text-[var(--p-muted)]">Your bag is empty. Add something to try the flow.</li>}
            {lines.map(([name, qty]) => {
              const product = products.find((p) => p.name === name);
              return (
                <li key={name} className="py-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-[0.83rem]">{name}</p>
                      <p className="pf-mono mt-0.5 text-[0.68rem] text-[var(--p-muted)]">
                        {money((product?.price ?? 0) * qty)}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button type="button" aria-label={`Remove one ${name}`} onClick={() => update(name, -1)} className="pf-step">−</button>
                      <span className="pf-mono w-4 text-center text-[0.72rem]">{qty}</span>
                      <button type="button" aria-label={`Add one ${name}`} onClick={() => update(name, 1)} className="pf-step">+</button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="mt-3 border-t border-[var(--p-line)] pt-3">
            <div className="flex justify-between text-[0.85rem]"><span>Subtotal</span><span className="pf-mono">{money(subtotal)}</span></div>
            <div className="mt-1 flex justify-between text-[0.85rem] text-[var(--p-muted)]"><span>Delivery</span><span className="pf-mono">{money(shipping)}</span></div>
            <div className="mt-2 flex justify-between border-t border-[var(--p-line)] pt-2 text-[0.95rem]"><span>Total</span><span className="pf-mono">{money(subtotal + shipping)}</span></div>
          </div>
          <Btn
            className="mt-4 w-full"
            onClick={() => setOrder(`Order ORD-${8820 + tpl.index} placed — ${money(subtotal + shipping)}. A confirmation would be emailed in production.`)}
          >
            Checkout
          </Btn>
          {order && <Note tone="ok">{order}</Note>}
          <p className="pf-hint mt-3">Free delivery over {money(1_500)}.</p>
        </Panel>
      </div>
    </ModuleFrame>
  );
}

/* -------------------------------------------------------------- hospitality */

export function HospitalityModule({ tpl, group }: ModuleProps) {
  const rooms = parseRows(tpl.items, STAY_FALLBACK).map(([name = "", rate, size = ""]) => ({
    name,
    rate: num(rate) || 2_850,
    size: size || "32 m²",
  }));
  const [room, setRoom] = useState(rooms[0]?.name ?? "");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [booked, setBooked] = useState<string | null>(null);
  const [menu, setMenu] = useState<keyof typeof STAY_MENUS>("Dinner");

  const nights = (() => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn).getTime();
    const end = new Date(checkOut).getTime();
    if (Number.isNaN(start) || Number.isNaN(end) || end <= start) return 0;
    return Math.round((end - start) / 86_400_000);
  })();
  const selected = rooms.find((r) => r.name === room) ?? rooms[0];
  const total = nights * (selected?.rate ?? 0);

  return (
    <ModuleFrame
      tpl={tpl}
      title={<>Rooms, rates and a booking that adds up.</>}
      lead="Availability dates, guest count, a live rate calculation and a menu — the information a guest needs before they trust a property with a card."
    >
      <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="grid gap-3 sm:grid-cols-2">
          {rooms.map((item) => (
            <article key={item.name} className="pf-card overflow-hidden">
              <Media src={group.gallery?.[0] ?? group.image} alt={item.name} ratio="16 / 10" />
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="pf-display text-[1.1rem] leading-tight">{item.name}</h3>
                    <p className="pf-label mt-1">{item.size}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setRoom(item.name);
                      setBooked(null);
                    }}
                    className={cn("pf-tag", room === item.name && "is-active")}
                  >
                    {room === item.name ? "Selected" : "Select"}
                  </button>
                </div>
                <p className="pf-mono mt-3 text-[0.82rem]">
                  {money(item.rate)} <span className="text-[var(--p-muted)]">/ night</span>
                </p>
              </div>
            </article>
          ))}
        </div>

        <Panel className="h-fit">
          <Label>Check availability</Label>
          <div className="mt-4 grid gap-3">
            <Field label="Check in">
              <input type="date" value={checkIn} onChange={(e) => { setCheckIn(e.target.value); setBooked(null); }} className="pf-input" />
            </Field>
            <Field label="Check out">
              <input type="date" value={checkOut} onChange={(e) => { setCheckOut(e.target.value); setBooked(null); }} className="pf-input" />
            </Field>
            <Field label="Guests">
              <select className="pf-input" value={guests} onChange={(e) => setGuests(e.target.value)}>
                <option>1</option><option>2</option><option>3</option><option>4</option>
              </select>
            </Field>
          </div>
          <div className="mt-4 space-y-1.5 border-t border-[var(--p-line)] pt-3 text-[0.82rem]">
            <div className="flex justify-between"><span className="text-[var(--p-muted)]">Room</span><span>{selected?.name}</span></div>
            <div className="flex justify-between"><span className="text-[var(--p-muted)]">Nights</span><span>{nights || "—"}</span></div>
            <div className="flex justify-between"><span className="text-[var(--p-muted)]">Guests</span><span>{guests}</span></div>
            <div className="flex justify-between border-t border-[var(--p-line)] pt-2 text-[0.95rem]"><span>Total</span><span className="pf-mono">{nights ? money(total) : "Select dates"}</span></div>
          </div>
          <Btn
            className="mt-4 w-full"
            onClick={() =>
              setBooked(
                nights > 0
                  ? `${selected?.name} held for ${nights} ${nights === 1 ? "night" : "nights"} — ${money(total)}. Ref STAY-${1200 + tpl.index}.`
                  : "Choose a check-in and check-out date first.",
              )
            }
          >
            Reserve
          </Btn>
          {booked && <Note tone={booked.startsWith("Choose") ? "muted" : "ok"}>{booked}</Note>}
          <p className="pf-hint mt-3">No card required for this demonstration.</p>
        </Panel>
      </div>

      <div className="mt-10">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <Label className="pf-accent">The kitchen</Label>
            <p className="pf-display mt-1 text-[1.4rem]">Menus, by service</p>
          </div>
          <div className="flex gap-1">
            {(Object.keys(STAY_MENUS) as (keyof typeof STAY_MENUS)[]).map((key) => (
              <button key={key} type="button" onClick={() => setMenu(key)} className={cn("pf-tag", menu === key && "is-active")}>
                {key}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4 grid gap-px bg-[var(--p-line)] sm:grid-cols-3">
          {(STAY_MENUS[menu] ?? []).map((dish) => (
            <div key={dish.name} className="bg-[var(--p-bg)] p-4">
              <div className="flex items-baseline justify-between gap-3">
                <h4 className="text-[0.9rem]">{dish.name}</h4>
                <span className="pf-mono text-[0.75rem]">{dish.price}</span>
              </div>
              <p className="mt-1 text-[0.78rem] text-[var(--p-muted)]">{dish.note}</p>
            </div>
          ))}
        </div>
      </div>
    </ModuleFrame>
  );
}

/* ---------------------------------------------------------------- education */

export function EducationModule({ tpl }: ModuleProps) {
  const courses = parseRows(tpl.items, LEARN_FALLBACK).map(
    ([title = "", weeks, level = ""]) => ({
      title,
      weeks: num(weeks) || 6,
      level: level || "Beginner",
    }),
  );
  const [level, setLevel] = useState("All");
  const [open, setOpen] = useState(0);
  const [done, setDone] = useState<number[]>([0, 1]);
  const [enrolled, setEnrolled] = useState<string | null>(null);

  const visible = courses.filter((c) => level === "All" || c.level === level);
  const progress = Math.round((done.length / LEARN_LESSONS.length) * 100);

  return (
    <ModuleFrame
      tpl={tpl}
      title={<>A course catalogue that leads somewhere.</>}
      lead="Filter by level, open a syllabus, tick lessons off and watch progress update — plus the student view with grades and a next action."
    >
      <div className="flex flex-wrap gap-2">
        {["All", "Beginner", "Intermediate", "Advanced"].map((item) => (
          <button key={item} type="button" onClick={() => setLevel(item)} className={cn("pf-tag", level === item && "is-active")}>
            {item}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-3">
          {visible.map((course, i) => {
            const isOpen = open === i;
            return (
              <article key={course.title} className="pf-card">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Tag>{course.level}</Tag>
                      <span className="pf-label">{course.weeks} weeks</span>
                    </div>
                    <h3 className="pf-display mt-2 text-[1.15rem] leading-tight">{course.title}</h3>
                  </div>
                  <span aria-hidden className="pf-display text-[1.4rem]">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="border-t border-[var(--p-line)] p-4">
                    <ol className="space-y-2">
                      {LEARN_LESSONS.map((lesson, li) => {
                        const checked = done.includes(li);
                        return (
                          <li key={lesson.title}>
                            <label className="flex cursor-pointer items-center justify-between gap-3 border-b border-[var(--p-line)] pb-2 text-[0.84rem] last:border-0">
                              <span className="flex items-center gap-2.5">
                                <input
                                  type="checkbox"
                                  checked={checked}
                                  onChange={() =>
                                    setDone((prev) => checked ? prev.filter((n) => n !== li) : [...prev, li])
                                  }
                                  className="pf-check"
                                />
                                <span className={checked ? "text-[var(--p-muted)] line-through" : ""}>{lesson.title}</span>
                              </span>
                              <span className="pf-mono text-[0.66rem] text-[var(--p-muted)]">{lesson.minutes} min</span>
                            </label>
                          </li>
                        );
                      })}
                    </ol>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      <div className="min-w-[10rem] flex-1"><Bar label="Your progress" value={progress} /></div>
                      <Btn small onClick={() => setEnrolled(`${course.title} — enrolment confirmed. Ref ENR-${330 + tpl.index}.`)}>
                        Enrol
                      </Btn>
                    </div>
                    {enrolled && <Note tone="ok">{enrolled}</Note>}
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="grid gap-4">
          <Panel>
            <Label>Student overview</Label>
            <div className="mt-3 flex items-center justify-between gap-3">
              <div>
                <p className="pf-display text-[1.15rem]">Thandi Mahlangu</p>
                <p className="pf-label mt-1">Student no. 2026-4481</p>
              </div>
              <Donut value={progress} label="Current course" size={70} />
            </div>
            <ul className="mt-4 space-y-2.5">
              {LEARN_GRADES.map((grade) => (
                <li key={grade.title} className="flex items-center justify-between gap-3 border-b border-[var(--p-line)] pb-2 last:border-0">
                  <div>
                    <p className="text-[0.84rem]">{grade.title}</p>
                    <p className="pf-label mt-0.5 normal-case">{grade.status}</p>
                  </div>
                  <span className="pf-mono text-[0.8rem]">{grade.grade ? `${grade.grade}%` : "—"}</span>
                </li>
              ))}
            </ul>
          </Panel>
          <Panel>
            <Label>Next lesson</Label>
            <p className="pf-display mt-2 text-[1.15rem]">Assessment and feedback</p>
            <p className="mt-1 text-[0.8rem] text-[var(--p-muted)]">35 min · due Friday</p>
            <Btn small className="mt-4">Continue learning</Btn>
          </Panel>
        </div>
      </div>
    </ModuleFrame>
  );
}
