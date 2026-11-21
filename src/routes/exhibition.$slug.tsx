import { createFileRoute, notFound } from "@tanstack/react-router";

import { DiningTemplate } from "@/components/exhibition/DiningTemplate";
import { HealthcareTemplate } from "@/components/exhibition/HealthcareTemplate";
import { HospitalityTemplate } from "@/components/exhibition/HospitalityTemplate";
import { LegalTemplate } from "@/components/exhibition/LegalTemplate";
import { RealEstateTemplate } from "@/components/exhibition/RealEstateTemplate";
import { RetailTemplate } from "@/components/exhibition/RetailTemplate";
import { absoluteUrl, industryBySlug, SITE } from "@/lib/site";

const TEMPLATES = {
  hospitality: HospitalityTemplate,
  "real-estate": RealEstateTemplate,
  legal: LegalTemplate,
  healthcare: HealthcareTemplate,
  retail: RetailTemplate,
  dining: DiningTemplate,
} as const;

type TemplateSlug = keyof typeof TEMPLATES;

const IMAGES: Record<string, string> = {
  hospitality: "/images/hotel-suite.jpg",
  "real-estate": "/images/estate.jpg",
  legal: "/images/legal.jpg",
  healthcare: "/images/clinic.jpg",
  retail: "/images/retail.jpg",
  dining: "/images/dining.jpg",
};

/** Intrinsic sizes keep link previews from re-cropping each concept's image. */
const IMAGE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  hospitality: { width: 1392, height: 752 },
  "real-estate": { width: 1248, height: 832 },
  legal: { width: 1248, height: 832 },
  healthcare: { width: 1392, height: 752 },
  retail: { width: 880, height: 1184 },
  dining: { width: 1184, height: 880 },
};

export const Route = createFileRoute("/exhibition/$slug")({
  loader: ({ params }) => {
    const industry = industryBySlug(params.slug);
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ loaderData }) => {
    const industry = loaderData?.industry;
    if (!industry) return {};
    const title = `${industry.demoBrand} — ${industry.demoKind} Website Concept | Obsidian Labs`;
    const description = `${industry.demoBrand}: a ${industry.name.toLowerCase()} website concept by Obsidian Labs Software, built in ${industry.designLanguage.toLowerCase()}. ${industry.summary}`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: [industry.keyword, ...industry.build].join(", ") },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: absoluteUrl(`/exhibition/${industry.slug}`) },
        { property: "og:image", content: absoluteUrl(IMAGES[industry.slug] ?? "/images/hero.jpg") },
        {
          property: "og:image:alt",
          content: `${industry.demoBrand} — ${industry.demoKind} website concept`,
        },
        {
          property: "og:image:width",
          content: String(IMAGE_DIMENSIONS[industry.slug]?.width ?? 1392),
        },
        {
          property: "og:image:height",
          content: String(IMAGE_DIMENSIONS[industry.slug]?.height ?? 752),
        },
        { name: "twitter:image", content: absoluteUrl(IMAGES[industry.slug] ?? "/images/hero.jpg") },
        { name: "robots", content: "index, follow" },
      ],
      links: [{ rel: "canonical", href: absoluteUrl(`/exhibition/${industry.slug}`) }],
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
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Exhibition",
                    item: absoluteUrl("/exhibition"),
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: industry.name,
                    item: absoluteUrl(`/exhibition/${industry.slug}`),
                  },
                ],
              },
              {
                "@type": "CreativeWork",
                name: `${industry.demoBrand} — ${industry.demoKind}`,
                url: absoluteUrl(`/exhibition/${industry.slug}`),
                description,
                creator: { "@type": "Organization", name: SITE.name, url: SITE.url },
                genre: `${industry.name} website design concept`,
                about: industry.keyword,
                isPartOf: {
                  "@type": "CollectionPage",
                  name: "Obsidian Labs design exhibition",
                  url: absoluteUrl("/exhibition"),
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
  const { slug } = Route.useParams();
  const Template = TEMPLATES[slug as TemplateSlug];
  if (!Template) return null;
  return <Template />;
}
