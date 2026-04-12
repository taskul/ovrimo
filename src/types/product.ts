export type ProductStatus = "live" | "coming-soon" | "archived";

export type ProductLink = {
  label: string;
  href: string;
};

export type ProductFeature = {
  title: string;
  description: string;
};

export type ProductFaq = {
  question: string;
  answer: string;
};

export type ProductScreenshot = {
  src: string;
  alt: string;
  caption: string;
};

export type ProductUpdate = {
  title: string;
  summary: string;
  date: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string[];
  category: string;
  status: ProductStatus;
  icon: string;
  heroImage: string;
  screenshots: ProductScreenshot[];
  websiteUrl?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  features: ProductFeature[];
  faq?: ProductFaq[];
  featured?: boolean;
  releaseDate: string;
  seoTitle: string;
  seoDescription: string;
  relatedProductSlugs?: string[];
  links?: ProductLink[];
  updates?: ProductUpdate[];
};
