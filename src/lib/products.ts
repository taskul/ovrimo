import { getProducts, getProductBySlug as getProductFromDb } from "./db";

export async function getAllProducts() {
  return await getProducts();
}

export async function getFeaturedProducts() {
  const products = await getAllProducts();
  return products.filter((product) => product.featured);
}

export async function getProductBySlug(slug: string) {
  return await getProductFromDb(slug);
}

export async function getProductsByStatus(status: "live" | "coming-soon" | "archived") {
  const products = await getAllProducts();
  return products.filter((product) => product.status === status);
}

export async function getRelatedProducts(slugs: string[] = []) {
  const products = await getAllProducts();
  return products.filter((product) => slugs.includes(product.slug));
}
