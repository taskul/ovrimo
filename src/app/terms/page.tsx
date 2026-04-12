import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Terms of Use | Ovrimo",
  description:
    "Starter terms of use content for Ovrimo LLC with placeholders for final legal review.",
  path: "/terms",
});

const sections = [
  {
    title: "1. Acceptance of terms",
    body: "Use this section to explain that users agree to the terms when accessing Ovrimo websites, products, or services.",
  },
  {
    title: "2. Permitted use",
    body: "Describe acceptable use, account responsibilities, and any prohibited conduct for your websites or applications.",
  },
  {
    title: "3. Intellectual property",
    body: "Replace this with language covering Ovrimo trademarks, software, site content, and any permitted or prohibited reuse.",
  },
  {
    title: "4. Third-party services",
    body: "Explain how external services, app stores, or linked websites are handled and whether separate terms may apply.",
  },
  {
    title: "5. Disclaimers",
    body: "Add the disclaimer language appropriate for your jurisdiction and business model, ideally with legal review.",
  },
  {
    title: "6. Limitation of liability",
    body: "Insert final limitation of liability language specific to your business and location.",
  },
  {
    title: "7. Governing law",
    body: "Specify the governing jurisdiction and venue once you have final legal guidance.",
  },
  {
    title: "8. Contact",
    body: "Replace this section with your final terms contact details and any legally required mailing information.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms of Use"
        title="Starter terms content for later legal review."
        description="The page is structured and styled for production, but the text should be replaced with final terms before launch."
      />
      <section className="section-space">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 sm:p-10">
            <p className="rounded-2xl border border-amber-300/25 bg-amber-300/10 px-4 py-3 text-sm text-amber-100">
              Placeholder notice: replace this page with final terms reviewed for Ovrimo LLC.
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
