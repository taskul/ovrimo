import { neon } from '@neondatabase/serverless';
import type { Product } from '@/types/product';

const getSql = () => neon(process.env.DATABASE_URL!);

// Helper for easier usage
const sql = async (strings: TemplateStringsArray, ...values: any[]) => {
  const neonSql = getSql();
  return await neonSql(strings, ...values);
};

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
};

export type Subscription = {
  id: string;
  email: string;
  status: 'active' | 'unsubscribed';
  createdAt: string;
};

export type Newsletter = {
  id: string;
  subject: string;
  content: string;
  sentAt: string | null;
  createdAt: string;
};

// Table Initialization
export async function initDb() {
  await sql`
    CREATE TABLE IF NOT EXISTS messages (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS subscriptions (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      status TEXT DEFAULT 'active',
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS newsletters (
      id TEXT PRIMARY KEY,
      subject TEXT NOT NULL,
      content TEXT NOT NULL,
      sent_at TIMESTAMP WITH TIME ZONE,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS products (
      id TEXT PRIMARY KEY,
      slug TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      tagline TEXT,
      short_description TEXT,
      long_description JSONB,
      category TEXT,
      status TEXT,
      icon TEXT,
      hero_image TEXT,
      screenshots JSONB,
      website_url TEXT,
      app_store_url TEXT,
      google_play_url TEXT,
      features JSONB,
      faq JSONB,
      featured BOOLEAN DEFAULT FALSE,
      release_date TEXT,
      seo_title TEXT,
      seo_description TEXT,
      related_product_slugs JSONB,
      links JSONB,
      updates JSONB,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;
}

// Messages
export async function getMessages(): Promise<ContactMessage[]> {
  const result = await sql`SELECT * FROM messages ORDER BY created_at DESC`;
  return result.map(row => ({
    id: row.id,
    name: row.name,
    email: row.email,
    subject: row.subject,
    message: row.message,
    createdAt: row.created_at
  }));
}

export async function addMessage(message: Omit<ContactMessage, 'createdAt'>) {
  await sql`
    INSERT INTO messages (id, name, email, subject, message)
    VALUES (${message.id}, ${message.name}, ${message.email}, ${message.subject}, ${message.message})
  `;
}

export async function deleteMessage(id: string) {
  await sql`DELETE FROM messages WHERE id = ${id}`;
}

// Subscriptions
export async function getSubscriptions(): Promise<Subscription[]> {
  const result = await sql`SELECT * FROM subscriptions ORDER BY created_at DESC`;
  return result.map(row => ({
    id: row.id,
    email: row.email,
    status: row.status as any,
    createdAt: row.created_at
  }));
}

export async function addSubscription(sub: Omit<Subscription, 'createdAt'>) {
  await sql`
    INSERT INTO subscriptions (id, email, status)
    VALUES (${sub.id}, ${sub.email}, ${sub.status})
    ON CONFLICT (email) DO UPDATE SET status = ${sub.status}
  `;
}

// Newsletters
export async function getNewsletters(): Promise<Newsletter[]> {
  const result = await sql`SELECT * FROM newsletters ORDER BY created_at DESC`;
  return result.map(row => ({
    id: row.id,
    subject: row.subject,
    content: row.content,
    sentAt: row.sent_at,
    createdAt: row.created_at
  }));
}

export async function addNewsletter(newsletter: Omit<Newsletter, 'createdAt'>) {
  await sql`
    INSERT INTO newsletters (id, subject, content, sent_at)
    VALUES (${newsletter.id}, ${newsletter.subject}, ${newsletter.content}, ${newsletter.sentAt})
  `;
}

// Products
export async function getProducts(): Promise<Product[]> {
  const result = await sql`SELECT * FROM products ORDER BY created_at DESC`;
  return result.map(row => ({
    id: row.id,
    slug: row.slug,
    name: row.name,
    tagline: row.tagline,
    shortDescription: row.short_description,
    longDescription: row.long_description,
    category: row.category,
    status: row.status,
    icon: row.icon,
    heroImage: row.hero_image,
    screenshots: row.screenshots,
    websiteUrl: row.website_url,
    appStoreUrl: row.app_store_url,
    googlePlayUrl: row.google_play_url,
    features: row.features,
    faq: row.faq,
    featured: row.featured,
    releaseDate: row.release_date,
    seoTitle: row.seo_title,
    seoDescription: row.seo_description,
    relatedProductSlugs: row.related_product_slugs,
    links: row.links,
    updates: row.updates
  }));
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const result = await sql`SELECT * FROM products WHERE slug = ${slug}`;
  if (result.length === 0) return null;
  const row = result[0];
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    tagline: row.tagline,
    shortDescription: row.short_description,
    longDescription: row.long_description,
    category: row.category,
    status: row.status,
    icon: row.icon,
    heroImage: row.hero_image,
    screenshots: row.screenshots,
    websiteUrl: row.website_url,
    appStoreUrl: row.app_store_url,
    googlePlayUrl: row.google_play_url,
    features: row.features,
    faq: row.faq,
    featured: row.featured,
    releaseDate: row.release_date,
    seoTitle: row.seo_title,
    seoDescription: row.seo_description,
    relatedProductSlugs: row.related_product_slugs,
    links: row.links,
    updates: row.updates
  };
}

export async function getProductById(id: string): Promise<Product | null> {
    const result = await sql`SELECT * FROM products WHERE id = ${id}`;
    if (result.length === 0) return null;
    const row = result[0];
    return {
      id: row.id,
      slug: row.slug,
      name: row.name,
      tagline: row.tagline,
      shortDescription: row.short_description,
      longDescription: row.long_description,
      category: row.category,
      status: row.status,
      icon: row.icon,
      heroImage: row.hero_image,
      screenshots: row.screenshots,
      websiteUrl: row.website_url,
      appStoreUrl: row.app_store_url,
      googlePlayUrl: row.google_play_url,
      features: row.features,
      faq: row.faq,
      featured: row.featured,
      releaseDate: row.release_date,
      seoTitle: row.seo_title,
      seoDescription: row.seo_description,
      relatedProductSlugs: row.related_product_slugs,
      links: row.links,
      updates: row.updates
    };
}

export async function addProduct(product: Product) {
  await sql`
    INSERT INTO products (
      id, slug, name, tagline, short_description, long_description,
      category, status, icon, hero_image, screenshots, website_url,
      app_store_url, google_play_url, features, faq, featured,
      release_date, seo_title, seo_description, related_product_slugs,
      links, updates
    ) VALUES (
      ${product.id}, ${product.slug}, ${product.name}, ${product.tagline},
      ${product.shortDescription}, ${JSON.stringify(product.longDescription)},
      ${product.category}, ${product.status}, ${product.icon}, ${product.heroImage},
      ${JSON.stringify(product.screenshots)}, ${product.websiteUrl},
      ${product.appStoreUrl}, ${product.googlePlayUrl},
      ${JSON.stringify(product.features)}, ${JSON.stringify(product.faq)},
      ${product.featured}, ${product.releaseDate}, ${product.seoTitle},
      ${product.seoDescription}, ${JSON.stringify(product.relatedProductSlugs)},
      ${JSON.stringify(product.links)}, ${JSON.stringify(product.updates)}
    )
  `;
}

export async function updateProduct(id: string, product: Partial<Product>) {
  // Simple update logic - for a more robust one we'd build the query dynamically
  // But for this project, let's just fetch, merge and save back or build a specific query
  const existing = await getProductById(id);
  if (!existing) return;

  const updated = { ...existing, ...product };

  await sql`
    UPDATE products SET
      slug = ${updated.slug},
      name = ${updated.name},
      tagline = ${updated.tagline},
      short_description = ${updated.shortDescription},
      long_description = ${JSON.stringify(updated.longDescription)},
      category = ${updated.category},
      status = ${updated.status},
      icon = ${updated.icon},
      hero_image = ${updated.heroImage},
      screenshots = ${JSON.stringify(updated.screenshots)},
      website_url = ${updated.websiteUrl},
      app_store_url = ${updated.appStoreUrl},
      google_play_url = ${updated.googlePlayUrl},
      features = ${JSON.stringify(updated.features)},
      faq = ${JSON.stringify(updated.faq)},
      featured = ${updated.featured},
      release_date = ${updated.releaseDate},
      seo_title = ${updated.seoTitle},
      seo_description = ${updated.seoDescription},
      related_product_slugs = ${JSON.stringify(updated.relatedProductSlugs)},
      links = ${JSON.stringify(updated.links)},
      updates = ${JSON.stringify(updated.updates)}
    WHERE id = ${id}
  `;
}

export async function deleteProduct(id: string) {
  await sql`DELETE FROM products WHERE id = ${id}`;
}
