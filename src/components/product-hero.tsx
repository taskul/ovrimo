import Image from "next/image";

import type { Product } from "@/types/product";

import { ButtonLink } from "./button-link";
import { StatusBadge } from "./status-badge";

export function ProductHero({ product }: { product: Product }) {
  return (
    <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.16),_transparent_26%),linear-gradient(180deg,#0f172a_0%,#020617_100%)]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <div>
          <div className="mb-5 flex items-center gap-4">
            <Image
              src={product.icon}
              alt={`${product.name} icon`}
              width={64}
              height={64}
              className="h-16 w-16 rounded-2xl border border-white/10 bg-slate-900 p-2"
            />
            <StatusBadge status={product.status} />
          </div>
          <p className="text-sm uppercase tracking-[0.26em] text-cyan-300">
            {product.category}
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-4 text-xl text-slate-200">{product.tagline}</p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
            {product.shortDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {product.websiteUrl ? (
              <ButtonLink href={product.websiteUrl} external>
                Visit website
              </ButtonLink>
            ) : null}
            {product.appStoreUrl ? (
              <ButtonLink href={product.appStoreUrl} variant="secondary" external>
                App Store
              </ButtonLink>
            ) : null}
            {product.googlePlayUrl ? (
              <ButtonLink href={product.googlePlayUrl} variant="secondary" external>
                Google Play
              </ButtonLink>
            ) : null}
            <ButtonLink href="/contact" variant="ghost">
              Contact Ovrimo
            </ButtonLink>
          </div>
        </div>
        <div className="relative rounded-[32px] border border-white/10 bg-white/6 p-4 shadow-[0_32px_90px_rgba(2,6,23,0.45)]">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent" />
          <Image
            src={product.heroImage}
            alt={`${product.name} hero image`}
            width={960}
            height={720}
            className="rounded-[24px] border border-white/10"
          />
        </div>
      </div>
    </section>
  );
}
