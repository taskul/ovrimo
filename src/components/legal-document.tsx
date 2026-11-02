import type { ReactNode } from "react";

import { PageHero } from "./page-hero";

type LegalDocumentProps = {
  eyebrow: string;
  title: string;
  description: string;
  updated?: string;
  toc?: { id: string; label: string }[];
  children: ReactNode;
};

/** Long-form text page (privacy, terms, support). Style the body with plain HTML elements. */
export function LegalDocument({
  eyebrow,
  title,
  description,
  updated,
  toc,
  children,
}: LegalDocumentProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <section className="section-space">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 sm:p-10">
            {updated ? <p className="text-sm text-slate-400">{updated}</p> : null}
            {toc?.length ? (
              <nav
                aria-label="Contents"
                className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 px-6 py-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                  Contents
                </p>
                <ol className="mt-3 grid list-decimal gap-x-8 gap-y-1.5 pl-5 text-sm text-slate-300 sm:grid-cols-2">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="hover:text-white">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            ) : null}
            <div className="legal-prose mt-8">{children}</div>
          </div>
        </div>
      </section>
    </>
  );
}
