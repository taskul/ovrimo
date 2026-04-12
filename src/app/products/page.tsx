import type { Metadata } from "next";
import type { ReactNode } from "react";

import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { SectionShell } from "@/components/section-shell";
import { createMetadata } from "@/lib/metadata";
import { getProductsByStatus } from "@/lib/products";

export const metadata: Metadata = createMetadata({
  title: "Products | Ovrimo",
  description:
    "Browse Ovrimo products from a shared data source, including live, coming soon, and archived listings.",
  path: "/products",
});

export default function ProductsPage() {
  const liveProducts = getProductsByStatus("live");
  const comingSoonProducts = getProductsByStatus("coming-soon");
  const archivedProducts = getProductsByStatus("archived");

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="A reusable product system for current and future Ovrimo products."
        description="Every listing on this page is rendered from the shared product data file, which means new products can be added without rewriting page layouts."
      />

      <StatusSection
        eyebrow="Live Products"
        title="Available now"
        description="Current products with active links and dedicated detail pages."
        productsCount={liveProducts.length}
      >
        <ProductGrid products={liveProducts} emptyText="No live products listed yet." />
      </StatusSection>

      <StatusSection
        eyebrow="Coming Soon"
        title="Planned listings"
        description="Reserve space for future products without rebuilding the site."
        productsCount={comingSoonProducts.length}
      >
        <ProductGrid
          products={comingSoonProducts}
          emptyText="No coming-soon products yet. Add a new product object to display one here."
        />
      </StatusSection>

      <StatusSection
        eyebrow="Archived"
        title="Previous products"
        description="Older listings can stay discoverable without appearing as active products."
        productsCount={archivedProducts.length}
      >
        <ProductGrid
          products={archivedProducts}
          emptyText="No archived products listed right now."
        />
      </StatusSection>
    </>
  );
}

function StatusSection({
  eyebrow,
  title,
  description,
  productsCount,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  productsCount: number;
  children: ReactNode;
}) {
  return (
    <SectionShell
      eyebrow={eyebrow}
      title={title}
      description={`${description} ${productsCount} currently listed.`}
    >
      {children}
    </SectionShell>
  );
}

function ProductGrid({
  products,
  emptyText,
}: {
  products: ReturnType<typeof getProductsByStatus>;
  emptyText: string;
}) {
  if (!products.length) {
    return (
      <div className="rounded-[28px] border border-dashed border-white/15 bg-white/4 p-10 text-center text-slate-300">
        {emptyText}
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
