import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/types/product";

import { StatusBadge } from "./status-badge";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.35)] transition hover:-translate-y-1 hover:border-cyan-200/20 hover:bg-white/7">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-3">
            <Image
              src={product.icon}
              alt={`${product.name} icon`}
              width={56}
              height={56}
              className="h-14 w-14 rounded-xl"
            />
          </div>
          <div>
            <p className="text-sm text-slate-400">{product.category}</p>
            <h3 className="mt-1 font-heading text-2xl font-semibold text-white">
              {product.name}
            </h3>
          </div>
        </div>
        <StatusBadge status={product.status} />
      </div>
      <p className="mt-5 text-lg text-slate-200">{product.tagline}</p>
      <p className="mt-3 flex-1 leading-7 text-slate-300">
        {product.shortDescription}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
        >
          View details
        </Link>
        {product.websiteUrl ? (
          <a
            href={product.websiteUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-white/12 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-white/20 hover:bg-white/6"
          >
            Visit product
          </a>
        ) : null}
      </div>
    </article>
  );
}
