import { neighbours, templateNav } from "@/lib/portfolio/groups";
import { scopeStyle } from "@/lib/portfolio/themes";
import type { Group, Template } from "@/lib/portfolio/types";

import { Block } from "./blocks";
import { Footer } from "./footers";
import { Header } from "./headers";
import { Hero } from "./heroes";
import { IndustryModule } from "./industry-module";

function ConceptBar({
  group,
  tpl,
  variant,
}: {
  group: Group;
  tpl: Template;
  variant: "top" | "bottom";
}) {
  const { prev, next } = neighbours(group, tpl.slug);
  if (!prev || !next) return null;
  const link =
    "pf-mono px-2 py-2 text-[0.56rem] tracking-[0.1em] uppercase text-[#f6f2e9]/55 transition-colors hover:text-[#c9ab77]";
  return (
    <div className="pf-concept">
      <div className="pf-concept-inner">
        <div className="flex min-w-0 items-center gap-3">
          <span className="hidden bg-[#c9ab77] px-2 py-1 text-[0.5rem] font-medium tracking-[0.18em] text-[#0b0b0c] uppercase sm:inline-block">
            Concept
          </span>
          <p className="pf-mono truncate text-[0.56rem] tracking-[0.1em] uppercase">
            <a href="/portfolio" className="text-[#f6f2e9]/55 hover:text-[#c9ab77]">
              100 templates
            </a>
            <span className="mx-1.5 text-[#c9ab77]/50">/</span>
            <a href={`/portfolio/${group.slug}`} className="text-[#f6f2e9]/55 hover:text-[#c9ab77]">
              <span className="hidden sm:inline">{group.name}</span>
              <span className="sm:hidden">{group.name.split(" ")[0]}</span>
            </a>
            <span className="mx-1.5 text-[#c9ab77]/50">/</span>
            <span className="text-[#f6f2e9]/85">{tpl.brand}</span>
          </p>
        </div>
        <nav aria-label="Template navigation" className="flex shrink-0 items-center gap-0.5 sm:gap-2">
          <a
            href={`/portfolio/${group.slug}/${prev.slug}`}
            aria-label={`Previous template: ${prev.brand}`}
            className={link}
          >
            ←<span className="ml-1 hidden lg:inline">{prev.name}</span>
          </a>
          <a href={`/portfolio/${group.slug}`} className={link}>
            All {group.templates.length}
          </a>
          <a
            href={`/portfolio/${group.slug}/${next.slug}`}
            aria-label={`Next template: ${next.brand}`}
            className={link}
          >
            <span className="mr-1 hidden lg:inline">{next.name}</span>→
          </a>
          <a
            href="/contact"
            className="pf-mono ml-1 hidden bg-[#f6f2e9] px-3 py-2 text-[0.54rem] tracking-[0.12em] text-[#0b0b0c] uppercase transition-colors hover:bg-[#c9ab77] sm:inline-block"
          >
            {variant === "top" ? "Brief us" : "Start a project"}
          </a>
        </nav>
      </div>
    </div>
  );
}

/**
 * Renders a complete portfolio template: its header variant, hero variant,
 * block composition, the group's functional module, its footer variant and the
 * studio's concept chrome.
 */
export function TemplateRenderer({ group, tpl }: { group: Group; tpl: Template }) {
  const nav = templateNav(tpl);
  const style = scopeStyle(group.theme, {
    tone: tpl.tone,
    accent: tpl.accent,
    accentFg: tpl.accentFg,
    display: tpl.display,
    body: tpl.body,
    radius: tpl.radius,
  });

  return (
    <div className="pf" style={style}>
      <a href="#top" className="pf-skip">
        Skip to the template
      </a>
      <Header tpl={tpl} group={group} nav={nav} />
      <main>
        <Hero tpl={tpl} group={group} nav={nav} image={group.image} />
        {tpl.sections.map((section, i) =>
          section === "module" ? (
            <IndustryModule key={`module-${i}`} tpl={tpl} group={group} />
          ) : (
            <Block key={`${section}-${i}`} kind={section} tpl={tpl} group={group} />
          ),
        )}
      </main>
      <Footer tpl={tpl} group={group} nav={nav} variant={tpl.footer} />
      <ConceptBar group={group} tpl={tpl} variant="bottom" />
    </div>
  );
}
