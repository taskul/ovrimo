import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";
import { getProducts } from "@/lib/products";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ["", "/about", "/products", "/contact", "/privacy", "/terms"];

  const products = await getProducts();

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteConfig.url}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...products.map((product) => ({
      url: `${siteConfig.url}/products/${product.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
