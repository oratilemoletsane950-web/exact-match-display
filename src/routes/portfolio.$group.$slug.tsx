import { createFileRoute, notFound } from "@tanstack/react-router";

import { TemplateRenderer } from "@/components/portfolio/TemplateRenderer";
import { getTemplate } from "@/lib/portfolio/groups";
import { absoluteUrl, SITE } from "@/lib/site";

export const Route = createFileRoute("/portfolio/$group/$slug")({
  loader: ({ params }) => {
    const found = getTemplate(params.group, params.slug);
    if (!found) throw notFound();
    return found;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { group, tpl } = loaderData;
    const title = `${tpl.brand} — ${tpl.name} Website Template | Obsidian Labs`;
    const description = `${tpl.brand}: a ${tpl.name.toLowerCase()} concept by Obsidian Labs, designed in ${tpl.design.toLowerCase()} and built with a working ${(group.capabilities[0] ?? "interactive").toLowerCase()} experience. ${tpl.blurb}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: [tpl.name, tpl.design, group.name, ...group.capabilities].join(", ") },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: absoluteUrl(`/portfolio/${group.slug}/${tpl.slug}`) },
        { property: "og:image", content: absoluteUrl(group.image) },
        { name: "twitter:image", content: absoluteUrl(group.image) },
        { name: "robots", content: "index, follow" },
      ],
      links: [{ rel: "canonical", href: absoluteUrl(`/portfolio/${group.slug}/${tpl.slug}`) }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
                  { "@type": "ListItem", position: 2, name: "Portfolio", item: absoluteUrl("/portfolio") },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: group.name,
                    item: absoluteUrl(`/portfolio/${group.slug}`),
                  },
                  {
                    "@type": "ListItem",
                    position: 4,
                    name: `${tpl.brand} — ${tpl.name}`,
                    item: absoluteUrl(`/portfolio/${group.slug}/${tpl.slug}`),
                  },
                ],
              },
              {
                "@type": "CreativeWork",
                name: `${tpl.brand} — ${tpl.name}`,
                url: absoluteUrl(`/portfolio/${group.slug}/${tpl.slug}`),
                description,
                genre: tpl.design,
                creator: { "@type": "Organization", name: SITE.name, url: SITE.url },
                isPartOf: {
                  "@type": "CollectionPage",
                  name: `${group.name} templates`,
                  url: absoluteUrl(`/portfolio/${group.slug}`),
                },
              },
            ],
          }),
        },
      ],
    };
  },
  component: TemplatePage,
});

function TemplatePage() {
  const { group, tpl } = Route.useLoaderData();
  return <TemplateRenderer group={group} tpl={tpl} />;
}
