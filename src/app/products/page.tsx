import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { Product } from "@/types/product";

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

export default async function ProductsPage() {
  const liveProducts = await getProductsByStatus("live");
  const comingSoonProducts = await getProductsByStatus("coming-soon");
  const archivedProducts = await getProductsByStatus("archived");

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Our current products"
        description=""
      />

      <StatusSection
        eyebrow="Live Products"
        title="Available now"
        description="These products are currently available."
        productsCount={liveProducts.length}
      >
        <ProductGrid products={liveProducts} emptyText="No live products listed yet." />
      </StatusSection>

      <StatusSection
        eyebrow="Coming Soon"
        title="Planned listings"
        description="These products are not yet available."
        productsCount={comingSoonProducts.length}
      >
        <ProductGrid
          products={comingSoonProducts}
          emptyText="No coming-soon products yet."
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
  products: Product[];
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
