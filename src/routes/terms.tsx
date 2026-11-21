import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/site/LegalPage";
import { absoluteUrl, SITE } from "@/lib/site";

const TITLE = "Terms of Service | Obsidian Labs Software";
const DESCRIPTION =
  "The terms governing use of the Obsidian Labs Software website, intellectual property, exhibition concepts, liability and governing law.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: absoluteUrl("/terms") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/terms") }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="21 November 2026"
      intro={`These terms govern your use of the ${SITE.name} website. By accessing or using this website you agree to them. If you do not agree, please do not use the site.`}
      sections={[
        {
          heading: "Who we are",
          paragraphs: [
            `${SITE.name} is a trading name of ${SITE.legalName}, a company operating from ${SITE.city}, ${SITE.region}, ${SITE.country}. In these terms "we", "us" and "our" refer to ${SITE.legalName}; "you" refers to the person accessing this website.`,
            `Website enquiries: ${SITE.email}.`,
          ],
        },
        {
          heading: "Use of this website",
          list: [
            "You may view, download and print pages for your own lawful, non-commercial use.",
            "You may not copy, republish, sell, licence, scrape, mirror or frame this website or its content without our prior written permission.",
            "You may not use this website in any way that is unlawful, deceptive, or that interferes with its operation or security.",
            "You may not attempt to gain unauthorised access to any part of the website, its servers or connected systems.",
          ],
        },
        {
          heading: "Information is not professional advice",
          paragraphs: [
            "The content on this website is general information about our services. It is not legal, medical, financial, tax or other professional advice, and it must not be relied on as such.",
            "Nothing on this website, and no response to an enquiry, creates a client, agency, fiduciary or other professional relationship. A relationship is created only by a written agreement signed by both parties.",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            `The design of this website, its text, layouts, code, graphics, logo and the exhibition templates are owned by ${SITE.legalName} or licensed to it, and are protected by South African and international intellectual property law.`,
            `The ${SITE.name} name, logo and the hexagonal mark are our trade marks. Nothing on this website grants you a licence to use them.`,
            "Third-party libraries and fonts used on this website remain the property of their respective owners and are used under their licences.",
          ],
        },
        {
          heading: "Exhibition concepts",
          paragraphs: [
            "The exhibition section presents original concept designs produced by us to demonstrate design and engineering capability. The businesses, brand names, people, prices, addresses, menus and contact details shown in those templates are fictitious and illustrative.",
            "Those concepts do not represent real businesses, do not indicate any endorsement, partnership or client relationship, and must not be relied on as real offers, prices or availability. Any forms shown in a template are demonstrations and submit nothing.",
          ],
        },
        {
          heading: "Enquiries and quotations",
          paragraphs: [
            "Prices, timelines and scope referred to on this website are indicative only. A quotation becomes binding only when recorded in a written proposal or agreement accepted by both parties.",
            "We may decline any enquiry or project at our discretion, including where a project falls outside our capability or raises a conflict of interest.",
          ],
        },
        {
          heading: "Third-party sites and services",
          paragraphs: [
            "This website may link to or integrate with third-party sites and services. We do not control them and are not responsible for their content, availability, security or privacy practices. Your use of a third-party service is governed by that party's terms.",
          ],
        },
        {
          heading: "Availability and changes",
          paragraphs: [
            "We aim to keep this website available and accurate, but we do not warrant that it will be uninterrupted, error-free, secure or free of harmful components, or that any information on it is complete or current.",
            "We may change, suspend or withdraw any part of this website, including these terms, at any time without notice. The version published here is the version in force.",
          ],
        },
        {
          heading: "Limitation of liability",
          paragraphs: [
            "To the maximum extent permitted by law, we are not liable for any direct, indirect, incidental, special or consequential loss or damage arising from your use of, or inability to use, this website or reliance on its content — including loss of profit, revenue, data, goodwill or business opportunity.",
            "Where liability cannot lawfully be excluded, our aggregate liability arising from use of this website is limited to R1 000.",
            "Nothing in these terms excludes or limits liability that may not lawfully be excluded, including liability for fraud, wilful misconduct or gross negligence, or any right you have under the Consumer Protection Act 68 of 2008 where that Act applies.",
          ],
        },
        {
          heading: "Indemnity",
          paragraphs: [
            "You indemnify us against any claim, loss, liability, cost or expense (including reasonable legal fees) arising from your breach of these terms or your unlawful use of this website.",
          ],
        },
        {
          heading: "Privacy",
          paragraphs: [
            "Our handling of personal information is described in our Privacy Policy, which forms part of these terms.",
          ],
        },
        {
          heading: "Governing law",
          paragraphs: [
            "These terms are governed by the laws of the Republic of South Africa. You consent to the jurisdiction of the Free State Division of the High Court of South Africa, subject to any right you may have to bring a claim in a court that otherwise has jurisdiction.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            `Questions about these terms, or requests for permission to use content from this website, may be sent to ${SITE.email}.`,
          ],
        },
      ]}
    />
  );
}
