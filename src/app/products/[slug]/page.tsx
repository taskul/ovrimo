import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { FaqAccordion } from "@/components/faq-accordion";
import { ProductHero } from "@/components/product-hero";
import { ScreenshotGallery } from "@/components/screenshot-gallery";
import { SectionShell } from "@/components/section-shell";
import { createMetadata } from "@/lib/metadata";
import {
  getProductBySlug,
  getProducts,
  getRelatedProducts,
} from "@/lib/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return createMetadata({
      title: "Product not found | Ovrimo",
      description: "The requested product page could not be found.",
      path: `/products/${slug}`,
    });
  }

  return createMetadata({
    title: product.seoTitle,
    description: product.seoDescription,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.relatedProductSlugs);

  return (
    <>
      <ProductHero product={product} />

      <SectionShell
        eyebrow="Overview"
        title={`About ${product.name}`}
        description={product.shortDescription}
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5 text-lg leading-8 text-slate-300">
            {product.longDescription.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">
              Product details
            </p>
            <dl className="mt-5 space-y-5">
              <MetaItem label="Category" value={product.category} />
              <MetaItem label="Status" value={product.status.replace("-", " ")} />
              <MetaItem label="Release" value={product.releaseDate} />
              <MetaItem
                label="Website"
                value={
                  product.websiteUrl ? (
                    <a
                      href={product.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-200 hover:text-white"
                    >
                      {product.websiteUrl}
                    </a>
                  ) : (
                    "Not listed yet"
                  )
                }
              />
            </dl>
          </div>
        </div>
      </SectionShell>

      <SectionShell eyebrow="Features" title={`What ${product.name} does`}>
        <div className="grid gap-5 md:grid-cols-2">
          {product.features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6"
            >
              <h3 className="font-heading text-2xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Gallery"
        title="Screenshots and placeholders"
        description="This block supports real screenshots now and can stay as a placeholder while a product is still evolving."
      >
        <ScreenshotGallery screenshots={product.screenshots} />
      </SectionShell>

      <SectionShell eyebrow="Links" title={`Where to find ${product.name}`}>
        <div className="grid gap-5 md:grid-cols-3">
          <LinkCard label="Website" href={product.websiteUrl} action="Visit website" />
          <LinkCard label="App Store" href={product.appStoreUrl} action="Open App Store" />
          <LinkCard
            label="Google Play"
            href={product.googlePlayUrl}
            action="Open Google Play"
          />
        </div>
      </SectionShell>

      {product.faq?.length ? (
        <SectionShell eyebrow="FAQ" title="Common questions">
          <FaqAccordion items={product.faq} />
        </SectionShell>
      ) : null}

      <SectionShell
        eyebrow="Updates"
        title="Changelog and updates placeholder"
        description="This section is ready for release notes, milestone entries, or product announcements later."
      >
        <div className="grid gap-4">
          {(product.updates?.length ? product.updates : defaultUpdates(product.name)).map(
            (update) => (
              <article
                key={`${update.date}-${update.title}`}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm text-cyan-200">{update.date}</p>
                <h3 className="mt-2 font-heading text-2xl font-semibold text-white">
                  {update.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{update.summary}</p>
              </article>
            ),
          )}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Related Products"
        title="Reserved for future cross-linking"
        description="When Ovrimo adds more products, related entries can be controlled from the same product data source."
      >
        {relatedProducts.length ? (
          <div className="grid gap-5 md:grid-cols-2">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.slug}
                href={`/products/${relatedProduct.slug}`}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/7"
              >
                <p className="text-sm text-slate-400">{relatedProduct.category}</p>
                <h3 className="mt-2 font-heading text-2xl font-semibold text-white">
                  {relatedProduct.name}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">
                  {relatedProduct.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-[28px] border border-dashed border-white/15 bg-white/4 p-10 text-center text-slate-300">
            No related products are linked yet. Add slugs to `relatedProductSlugs`
            in the product data file when you want to connect products here.
          </div>
        )}
      </SectionShell>
    </>
  );
}

function MetaItem({
  label,
  value,
}: {
  label: string;
  value: ReactNode;
}) {
  return (
    <div>
      <dt className="text-sm uppercase tracking-[0.2em] text-slate-400">{label}</dt>
      <dd className="mt-2 text-base text-slate-100">{value}</dd>
    </div>
  );
}

function LinkCard({
  label,
  href,
  action,
}: {
  label: string;
  href?: string;
  action: string;
}) {
  if (!href) {
    return (
      <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 opacity-60">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{label}</p>
        <p className="mt-4 font-heading text-2xl font-semibold text-white">
          Coming later
        </p>
        <p className="mt-3 text-slate-300">
          Add a URL in the product data file to enable this link.
        </p>
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:border-cyan-200/20 hover:bg-white/7"
    >
      <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">{label}</p>
      <p className="mt-4 font-heading text-2xl font-semibold text-white">{action}</p>
      <p className="mt-3 break-all text-slate-300">{href}</p>
    </a>
  );
}

function defaultUpdates(productName: string) {
  return [
    {
      title: "Updates placeholder",
      summary: `Use this section for release notes, milestones, or product announcements related to ${productName}.`,
      date: "Coming later",
    },
  ];
}
