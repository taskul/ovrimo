import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy | Ovrimo",
  description:
    "Starter privacy policy content for Ovrimo LLC with placeholders for final legal review.",
  path: "/privacy",
});

const sections = [
  {
    title: "1. Overview",
    body: "This is starter privacy policy content for Ovrimo LLC. Replace it with final legal text reviewed for your business, products, and jurisdictions.",
  },
  {
    title: "2. Information we collect",
    body: "Describe the categories of information your websites and products collect, such as account details, contact information, product usage, device data, or billing records.",
  },
  {
    title: "3. How information is used",
    body: "Explain how you use collected information to operate products, improve services, respond to support requests, maintain security, or comply with legal obligations.",
  },
  {
    title: "4. Sharing and service providers",
    body: "List when information may be shared with vendors, hosting providers, analytics tools, payment processors, or legal authorities.",
  },
  {
    title: "5. Data retention",
    body: "Add your intended retention periods or the criteria used to determine how long data is kept.",
  },
  {
    title: "6. User rights",
    body: "Add any applicable privacy rights for your users, including access, correction, deletion, and jurisdiction-specific disclosures.",
  },
  {
    title: "7. Security",
    body: "Summarize the reasonable steps Ovrimo takes to protect information and note that no method is completely guaranteed.",
  },
  {
    title: "8. Contact",
    body: "For privacy questions, replace this line with your final contact details and any required mailing address.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="Starter privacy policy content with clear placeholders."
        description="Use this page as a clean starting point, then replace it with final legal text that matches your products and operations."
      />
      <section className="section-space">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 sm:p-10">
            <p className="rounded-2xl border border-amber-300/25 bg-amber-300/10 px-4 py-3 text-sm text-amber-100">
              Placeholder notice: replace this page with final legal text before production use.
            </p>
            <div className="mt-8 space-y-8">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="font-heading text-2xl font-semibold text-white">
                    {section.title}
                  </h2>
                  <p className="mt-3 leading-8 text-slate-300">{section.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
