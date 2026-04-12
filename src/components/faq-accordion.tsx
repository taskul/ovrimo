"use client";

import { useState } from "react";

import type { ProductFaq } from "@/types/product";

export function FaqAccordion({ items }: { items: ProductFaq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const open = index === openIndex;

        return (
          <div
            key={item.question}
            className="rounded-[24px] border border-white/10 bg-white/5"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenIndex(open ? null : index)}
            >
              <span className="font-heading text-lg font-medium text-white">
                {item.question}
              </span>
              <span className="text-2xl text-cyan-300">{open ? "−" : "+"}</span>
            </button>
            {open ? (
              <div className="border-t border-white/10 px-6 py-5 text-slate-300">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
