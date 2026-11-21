import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/site/LegalPage";
import { absoluteUrl, SITE } from "@/lib/site";

const TITLE = "Legal Notice & Disclaimer | Obsidian Labs Software";
const DESCRIPTION =
  "Company information, intellectual property notice and disclaimers for the Obsidian Labs Software website, including the illustrative nature of exhibition templates.";

export const Route = createFileRoute("/legal-notice")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: absoluteUrl("/legal-notice") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/legal-notice") }],
  }),
  component: LegalNoticePage,
});

function LegalNoticePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Legal Notice"
      updated="21 November 2026"
      intro="This page records the company behind this website, the ownership of its content, and the disclaimers that apply to it."
      sections={[
        {
          heading: "Company information",
          list: [
            `Legal entity: ${SITE.legalName}`,
            `Trading name: ${SITE.name} (${SITE.name} Software)`,
            `Location: ${SITE.city}, ${SITE.region}, ${SITE.country}`,
            `Email: ${SITE.email}`,
            "Website: this website",
          ],
          paragraphs: [
            "Company registration and VAT details are available on request and appear on invoices and written proposals.",
          ],
        },
        {
          heading: "Responsible publisher",
          paragraphs: [
            `This website is published by ${SITE.legalName}. The studio is responsible for its editorial content. Enquiries about content on this site may be sent to ${SITE.email}.`,
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "All content on this website — including text, layout, graphics, photography, the Obsidian Labs name, logo and hexagonal mark, the interface designs and the code — is owned by or licensed to us and protected by copyright, trade mark and design law.",
            "You may not reproduce, distribute, adapt, frame or commercially exploit any part of it without written permission. Requests may be sent to the address above.",
          ],
        },
        {
          heading: "Exhibition and illustrative content",
          paragraphs: [
            "The exhibition templates on this website are original concept designs created by us. Every business, brand, person, address, telephone number, price, menu and policy shown inside a template is fictitious and exists only to demonstrate design.",
            "No template represents a real client, a real business, an endorsement or a partnership. Forms inside templates do not submit data and no booking, order, appointment or reservation is created.",
            "Photography used in the exhibition is original illustrative imagery generated for this website. No third-party brand assets, client work or copyrighted designs from other companies are reproduced.",
          ],
        },
        {
          heading: "No professional advice",
          paragraphs: [
            "Nothing on this website constitutes legal, medical, financial, tax, accounting or other professional advice, and it must not be relied on in place of advice from a suitably qualified professional.",
            "Industry descriptions on this website describe general design conventions. They are not statements of law or of the regulatory requirements of any profession, council or authority.",
          ],
        },
        {
          heading: "Accuracy and availability",
          paragraphs: [
            "We take care to keep information accurate, but we give no warranty that it is complete, current or error-free, or that the website will be available without interruption.",
            "Indicative prices, timelines and capabilities may change without notice.",
          ],
        },
        {
          heading: "External links",
          paragraphs: [
            "Links to third-party websites are provided for convenience. We do not control those sites and accept no responsibility for their content, accuracy, security or privacy practices.",
          ],
        },
        {
          heading: "Liability",
          paragraphs: [
            "To the maximum extent permitted by law, we accept no liability for loss or damage arising from use of this website or reliance on its content. Nothing in this notice limits liability that cannot lawfully be limited, or any right you may have under the Consumer Protection Act 68 of 2008.",
            "Our full liability terms appear in our Terms of Service.",
          ],
        },
        {
          heading: "Complaints and take-down requests",
          paragraphs: [
            `If you believe content on this website infringes your rights or is inaccurate, email ${SITE.email} with the page address and the basis of your request. We will investigate and respond promptly, and remove or correct content where warranted.`,
          ],
        },
      ]}
    />
  );
}
