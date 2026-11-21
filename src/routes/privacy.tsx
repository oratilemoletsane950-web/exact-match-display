import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/site/LegalPage";
import { absoluteUrl, SITE } from "@/lib/site";

const TITLE = "Privacy Policy | Obsidian Labs Software";
const DESCRIPTION =
  "How Obsidian Labs Software collects, uses, stores and protects personal information under the Protection of Personal Information Act (POPIA).";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: absoluteUrl("/privacy") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/privacy") }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="21 November 2026"
      intro={`This policy explains how ${SITE.legalName}, trading as ${SITE.name}, handles personal information collected through this website and through enquiries, in line with the Protection of Personal Information Act 4 of 2013 (POPIA).`}
      sections={[
        {
          heading: "Who is responsible",
          paragraphs: [
            `${SITE.legalName} is the responsible party for personal information processed through this website. Our information officer can be reached at ${SITE.email}.`,
            `Business address: ${SITE.city}, ${SITE.region}, ${SITE.country}.`,
          ],
        },
        {
          heading: "What we collect",
          list: [
            "Information you give us: your name, email address, telephone number, business name and the details of your enquiry or project.",
            "Correspondence: emails and messages exchanged with us, including attachments you choose to send.",
            "Technical information: standard server logs such as IP address, browser type, referring page and the pages requested, generated when you visit this website.",
            "Contract information: where you become a client, billing details and project records needed to deliver and invoice the work.",
          ],
        },
        {
          heading: "What we do not collect here",
          paragraphs: [
            "This website has no user accounts and no payment processing. We do not collect card details through this website, and we do not use advertising or cross-site tracking cookies.",
            "Please do not send confidential documents, identity numbers, medical information or other special personal information in a first email. We will arrange an appropriate channel where a project requires it.",
          ],
        },
        {
          heading: "Why we process it",
          list: [
            "To respond to your enquiry and prepare a quotation or proposal.",
            "To deliver, support and invoice services under a contract with you.",
            "To keep business, tax and legal records as required by South African law.",
            "To maintain the security and performance of this website.",
            "To send you information you have asked for; you may opt out at any time.",
          ],
        },
        {
          heading: "Lawful basis",
          paragraphs: [
            "We process personal information where you have consented, where it is necessary to perform a contract with you, where we must comply with a legal obligation, and where we have a legitimate interest in operating and protecting our business that does not override your rights.",
          ],
        },
        {
          heading: "Cookies and analytics",
          paragraphs: [
            "This website does not set advertising cookies. It may use strictly necessary technical storage required for the site to function and to remember interface preferences.",
            "If we add analytics in future, this policy will be updated before that processing begins and any consent required by law will be requested.",
          ],
        },
        {
          heading: "Who we share it with",
          paragraphs: [
            "We do not sell personal information. We share it only with service providers who help us operate — for example our hosting provider and email provider — and only to the extent needed, under confidentiality and processing obligations.",
            "We may also disclose information where required by law, by a court order, or to protect our legal rights.",
          ],
        },
        {
          heading: "Cross-border transfers",
          paragraphs: [
            "Some service providers may store data outside South Africa. Where that happens, we require a level of protection substantially similar to POPIA, as section 72 of the Act requires.",
          ],
        },
        {
          heading: "How long we keep it",
          paragraphs: [
            "Enquiry correspondence is kept for up to three years after the last contact, unless it becomes part of a client relationship. Contract and financial records are kept for at least five years as required by tax and company law. Website server logs are kept for a short operational period.",
            "When information is no longer needed, it is deleted or de-identified.",
          ],
        },
        {
          heading: "Security",
          paragraphs: [
            "We use appropriate, reasonable technical and organisational measures to protect personal information against loss, damage and unauthorised access — including encrypted connections, access control and backups.",
            "No system is perfectly secure. If a security compromise affects your personal information, we will notify you and the Information Regulator as required by section 22 of POPIA.",
          ],
        },
        {
          heading: "Your rights",
          list: [
            "Request access to the personal information we hold about you.",
            "Request correction or deletion of information that is inaccurate, irrelevant, excessive or unlawfully held.",
            "Object to processing based on legitimate interest, and withdraw consent at any time.",
            "Lodge a complaint with the Information Regulator of South Africa.",
          ],
          paragraphs: [
            `To exercise a right, email ${SITE.email}. We may need to verify your identity before acting, and we will respond within the periods set by POPIA.`,
          ],
        },
        {
          heading: "Children",
          paragraphs: [
            "This website is intended for businesses and adults. We do not knowingly collect personal information of children without the consent of a competent person.",
          ],
        },
        {
          heading: "Changes to this policy",
          paragraphs: [
            "We may update this policy from time to time. The version published on this page, with its revision date, is the version in force.",
          ],
        },
      ]}
    />
  );
}
