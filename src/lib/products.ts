import { products } from "@/data/products";

export function getProducts() {
  return products;
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByStatus(status: "live" | "coming-soon" | "archived") {
  return products.filter((product) => product.status === status);
}

export function getRelatedProducts(slugs: string[] = []) {
  return products.filter((product) => slugs.includes(product.slug));
}
