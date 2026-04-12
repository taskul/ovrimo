import type { ProductStatus } from "@/types/product";

const labelMap: Record<ProductStatus, string> = {
  live: "Live",
  "coming-soon": "Coming Soon",
  archived: "Archived",
};

const classMap: Record<ProductStatus, string> = {
  live: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  "coming-soon": "border-amber-300/30 bg-amber-300/10 text-amber-200",
  archived: "border-slate-300/20 bg-slate-300/10 text-slate-300",
};

export function StatusBadge({ status }: { status: ProductStatus }) {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.18em] uppercase ${classMap[status]}`}
    >
      {labelMap[status]}
    </span>
  );
}
