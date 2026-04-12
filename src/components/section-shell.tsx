import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionShellProps) {
  return (
    <section id={id} className={`section-space ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-2xl">
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-heading text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-slate-300">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
