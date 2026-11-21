import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { Eyebrow } from "@/components/site/primitives";

export function PageHero({
  eyebrow,
  title,
  lead,
  breadcrumb,
  meta,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  breadcrumb?: { label: string; href?: string }[];
  meta?: { label: string; value: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="surface-dark grain relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_-10%,rgba(201,171,119,0.18),transparent_58%)]"
      />
      <div className="shell relative">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumb.map((crumb, i) => (
                <li key={crumb.label} className="label-mono flex items-center gap-2">
                  {crumb.href ? (
                    <Link
                      to={crumb.href}
                      className="text-[#f6f2e9]/50 transition-colors hover:text-[#c9ab77]"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-[#f6f2e9]/85">{crumb.label}</span>
                  )}
                  {i < breadcrumb.length - 1 && (
                    <span aria-hidden className="text-[#c9ab77]/50">
                      /
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <Eyebrow className="text-[#c9ab77]">{eyebrow}</Eyebrow>
        <h1 className="display-lg mt-7 max-w-[22ch] text-[#f6f2e9]">{title}</h1>
        <div className="mt-8 grid gap-10 md:grid-cols-12">
          <p className="body-lead max-w-[56ch] text-[#f6f2e9]/70 md:col-span-7">{lead}</p>
          {meta && (
            <dl className="grid gap-4 self-end md:col-span-5 md:grid-cols-2">
              {meta.map((item) => (
                <div key={item.label} className="border-t border-white/15 pt-3">
                  <dt className="label-mono text-[#f6f2e9]/60">{item.label}</dt>
                  <dd className="mt-1.5 text-sm text-[#f6f2e9]/85">{item.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
