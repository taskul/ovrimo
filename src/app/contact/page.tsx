import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact Ovrimo",
  description:
    "Contact Ovrimo LLC for questions, partnerships, or business inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get in touch with Ovrimo."
        description="Use the form below for general questions, partnerships, or business inquiries."
      />

      <SectionShell
        eyebrow="Contact"
        title="Send a message"
      >
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <ContactForm />
          <div className="space-y-6">
            <aside className="rounded-[32px] border border-white/10 bg-white/5 p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">
                Contact info
              </p>
              <dl className="mt-5 space-y-5">
                <Info label="Email" value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
                <Info label="Company" value={siteConfig.legalName} />
                <Info label="Status" value={`Founded in ${siteConfig.founded}`} />
              </dl>
            </aside>
            <aside className="rounded-[32px] border border-white/10 bg-white/5 p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">
                Partnerships
              </p>
              <h2 className="mt-4 font-heading text-3xl font-semibold text-white">
                Business and partnership inquiries
              </h2>
              <p className="mt-4 leading-8 text-slate-300">
                Please use the contact form for all partnership inquiries.
              </p>
            </aside>
          </div>
        </div>
      </SectionShell>
    </>
  );
}

function Info({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div>
      <dt className="text-sm uppercase tracking-[0.2em] text-slate-400">{label}</dt>
      <dd className="mt-2 text-lg text-slate-100">
        {href ? (
          <a href={href} className="hover:text-cyan-200">
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}
