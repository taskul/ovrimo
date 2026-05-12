import { getProducts as getProductsFromDb, getProductBySlug as getProductFromDb } from "./db";

export async function getProducts() {
  return await getProductsFromDb();
}

export async function getFeaturedProducts() {
  const products = await getProducts();
  return products.filter((product) => product.featured);
}

export async function getProductBySlug(slug: string) {
  return await getProductFromDb(slug);
}

export async function getProductsByStatus(status: "live" | "coming-soon" | "archived") {
  const products = await getProducts();
  return products.filter((product) => product.status === status);
}

export async function getRelatedProducts(slugs: string[] = []) {
  const products = await getProducts();
  return products.filter((product) => slugs.includes(product.slug));
}
