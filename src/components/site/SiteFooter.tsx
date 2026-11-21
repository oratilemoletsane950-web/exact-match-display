import { Link } from "@tanstack/react-router";

import { Logo } from "@/components/site/Logo";
import { GoldRule } from "@/components/site/primitives";
import { INDUSTRIES, legalLinks, MAILTO, NAV, SERVICES, SITE } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="surface-dark grain relative">
      <div className="shell pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" aria-label="Obsidian Labs — home" className="inline-block">
              <Logo tone="light" />
            </Link>
            <p className="mt-7 max-w-[34ch] text-sm leading-relaxed text-muted-foreground">
              Obsidian Labs Software — a software development studio in {SITE.city}, building
              websites, applications and business systems for owner-led companies across South
              Africa.
            </p>
            <a
              href={MAILTO}
              className="link-underline hover:link-underline-hover mt-7 inline-block text-sm text-[#c9ab77]"
            >
              {SITE.email}
            </a>
            <p className="label-mono mt-4 text-muted-foreground">
              {SITE.city}, {SITE.region}, {SITE.country}
            </p>
          </div>

          <nav aria-label="Services" className="lg:col-span-2">
            <p className="label-mono text-[#c9ab77]">Services</p>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    to="/services"
                    hash={service.slug}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/industries"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Industries
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Exhibition" className="lg:col-span-3">
            <p className="label-mono text-[#c9ab77]">Exhibition</p>
            <ul className="mt-5 space-y-3">
              {INDUSTRIES.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    to="/exhibition/$slug"
                    params={{ slug: industry.slug }}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {industry.demoBrand}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className="lg:col-span-3">
            <p className="label-mono text-[#c9ab77]">Company</p>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <GoldRule className="mt-16 opacity-60" />

        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="label-mono text-muted-foreground">
            © {year} {SITE.legalName}. All rights reserved.
          </p>
          <p className="label-mono text-muted-foreground">
            {SITE.name} Software · {SITE.city} · {SITE.countryCode}
          </p>
        </div>
        <p className="mt-6 max-w-4xl text-xs leading-relaxed text-muted-foreground">
          All exhibition templates are original concept designs produced by {SITE.name} Software to
          demonstrate design and engineering capability. Brand names, imagery and content shown in
          the exhibition are illustrative and do not represent real businesses.
        </p>
      </div>
    </footer>
  );
}
