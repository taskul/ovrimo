import type { Metadata } from "next";

import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About Ovrimo | Company overview",
  description:
    "Learn about Ovrimo LLC, its mission, and its focus on building useful, thoughtful software products.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Ovrimo is a software company focused on useful, thoughtful digital products."
        description="Founded in 2026, Ovrimo LLC is building a small but flexible foundation for apps and tools that prioritize clarity, usefulness, and dependable design."
        actions={<ButtonLink href="/products">View Products</ButtonLink>}
      />

      <SectionShell
        eyebrow="Overview"
        title="A clear foundation for a growing company."
        description="This website presents Ovrimo as a modern company site first, with room for products to expand over time without changing the structure."
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-lg leading-8 text-slate-300">
            <p>
              Ovrimo was established in 2026 to build modern software products
              that feel practical, well designed, and easy to trust.
            </p>
            <p>
              The company focus is simple: create products that help people do
              real work more clearly, with less friction and less unnecessary complexity.
            </p>
            <p>
              As the product lineup grows, Ovrimo aims to keep the same tone
              across everything it ships: calm interfaces, useful features, and
              a polished experience that respects the user&apos;s time.
            </p>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Mission</p>
            <h2 className="mt-4 font-heading text-3xl font-semibold text-white">
              Build digital products that simplify everyday work and life.
            </h2>
            <p className="mt-4 leading-8 text-slate-300">
              {siteConfig.description} {siteConfig.extendedDescription}
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Values"
        title="How Ovrimo approaches product decisions."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {siteConfig.values.map((value) => (
            <article
              key={value.title}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6"
            >
              <h3 className="font-heading text-2xl font-semibold text-white">
                {value.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-300">{value.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
