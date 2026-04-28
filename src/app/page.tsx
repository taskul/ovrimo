import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/button-link";
import { NewsletterPlaceholder } from "@/components/newsletter-placeholder";
import { ProductCard } from "@/components/product-card";
import { SectionShell } from "@/components/section-shell";
import { UpdatesPlaceholder } from "@/components/updates-placeholder";
import { siteConfig } from "@/data/site";
import { getFeaturedProducts, getProducts } from "@/lib/products";

const buildItems = [
  {
    title: "Apps",
    description:
      "Focused digital products built to solve clear, everyday problems.",
  },
  {
    title: "Tools",
    description:
      "Useful software that helps people work with less friction and more clarity.",
  },
  {
    title: "Future products",
    description:
      "A flexible product system that makes it easy for Ovrimo to grow over time.",
  },
];

const reasons = [
  {
    title: "Thoughtful design",
    description:
      "We aim for products that feel considered, polished, and easy to understand.",
  },
  {
    title: "Useful outcomes",
    description:
      "The focus is on solving practical needs rather than adding noise.",
  },
  {
    title: "Simple by default",
    description:
      "We prefer clear flows, calm interfaces, and features that earn their place.",
  },
  {
    title: "Built for trust",
    description:
      "Consistency, straightforward copy, and maintainable systems matter from the start.",
  },
];

export default function HomePage() {
  const allProducts = getProducts();
  const featuredProduct = getFeaturedProducts()[0] ?? allProducts[0];

  if (!featuredProduct) {
    return null;
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_24%),radial-gradient(circle_at_bottom_left,_rgba(94,234,212,0.12),_transparent_26%),linear-gradient(180deg,#0f172a_0%,#020617_100%)]">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Founded in {siteConfig.founded}
            </p>
            <h1 className="mt-6 max-w-4xl font-heading text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl md:text-7xl">
              Modern apps and software products built with clarity.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {siteConfig.description} {siteConfig.extendedDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/products">View Products</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact Us
              </ButtonLink>
            </div>
            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              <Metric
                label="Products listed"
                value={String(allProducts.length).padStart(2, "0")}
              />
              <Metric label="Founded" value={String(siteConfig.founded)} />
              <Metric label="First live product" value="ModeDo" />
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-[40px] bg-cyan-300/10 blur-3xl" />
            <div className="relative rounded-[36px] border border-white/10 bg-slate-900/80 p-6 shadow-[0_32px_90px_rgba(2,6,23,0.5)] backdrop-blur">
              <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.85),rgba(2,6,23,0.92))] p-6">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Ovrimo</span>
                  <span>Company site</span>
                </div>
                <Image
                  src="/brand/ovrimo-lockup.svg"
                  alt="Ovrimo wordmark"
                  width={960}
                  height={540}
                  className="mt-12 w-full"
                />
                <div className="mt-10 rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">
                    Featured product
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <Image
                      src={featuredProduct.icon}
                      alt={`${featuredProduct.name} icon`}
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-2xl"
                    />
                    <div>
                      <p className="font-heading text-2xl font-semibold text-white">
                        {featuredProduct.name}
                      </p>
                      <p className="text-sm text-slate-300">
                        {featuredProduct.shortDescription}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={`/products/${featuredProduct.slug}`}
                    className="mt-5 inline-flex text-sm font-semibold text-cyan-200 hover:text-white"
                  >
                    View product details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionShell
        eyebrow="What We Build"
        title="Apps, tools, and future software products."
        description="Ovrimo is set up to present current products clearly while leaving room to add more over time."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {buildItems.map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.9),rgba(15,23,42,0.55))] p-6"
            >
              <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-cyan-200">
                {item.title}
              </div>
              <p className="leading-7 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Featured Product"
        title="ModeDo"
        description="An AI-powered productivity app that helps you focus and get more done."
      >
        <div className="grid gap-10 rounded-[36px] border border-white/10 bg-white/5 p-6 lg:grid-cols-[1fr_1.05fr] lg:p-8">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">
                Productivity App
              </p>
              <h3 className="mt-4 font-heading text-4xl font-semibold text-white">
                {featuredProduct.tagline}
              </h3>
              <p className="mt-5 max-w-xl leading-8 text-slate-300">
                {featuredProduct.longDescription[0]}
              </p>
              <ul className="mt-6 space-y-3 text-slate-200">
                {featuredProduct.features.slice(0, 3).map((feature) => (
                  <li key={feature.title} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                    <span>
                      <strong className="font-medium text-white">{feature.title}:</strong>{" "}
                      {feature.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href={`/products/${featuredProduct.slug}`}>
                View details
              </ButtonLink>
              <ButtonLink
                href={featuredProduct.websiteUrl ?? "/products"}
                variant="secondary"
                external={Boolean(featuredProduct.websiteUrl)}
              >
                Visit ModeDo
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-4">
            <Image
              src={featuredProduct.heroImage}
              alt="ModeDo preview"
              width={960}
              height={720}
              className="rounded-[24px] border border-white/10"
            />
          </div>
        </div>
      </SectionShell>



      <SectionShell
        eyebrow="Why Ovrimo"
        title="A straightforward approach to software."
        description="The site language and product presentation stay clean, practical, and intentionally low on hype."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className="flex gap-5 rounded-[28px] border border-white/10 bg-white/5 p-6"
            >
              <div className="font-heading text-4xl font-semibold text-white/20">
                0{index + 1}
              </div>
              <div>
                <h3 className="font-heading text-2xl font-semibold text-white">
                  {reason.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">
                  {reason.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Products"
        title="Current listings"
        description="These are the current products Ovrimo has to offer."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Latest Updates"
        title="Upcoming launches"
        description="These are the upcoming products Ovrimo has to offer."
      >
        <UpdatesPlaceholder />
      </SectionShell>

      <SectionShell
        eyebrow="Stay In Touch"
        title="Subscribe to Ovrimo"
        description="Enter your email address to receive updates on new products and company news."
      >
        <NewsletterPlaceholder />
      </SectionShell>

      <section className="section-space border-t border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Contact
          </p>
          <h2 className="mt-4 font-heading text-4xl font-semibold text-white">
            Need to reach Ovrimo?
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Use the contact page for general questions, partnerships, or business inquiries.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <ButtonLink href="/products">View Products</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/5 px-5 py-4">
      <div className="font-heading text-3xl font-semibold text-white">{value}</div>
      <div className="mt-2 text-sm text-slate-400">{label}</div>
    </div>
  );
}
