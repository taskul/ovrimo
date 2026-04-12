import Link from "next/link";

import { siteConfig } from "@/data/site";

import { BrandMark } from "./brand-mark";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <div className="max-w-md">
          <BrandMark />
          <p className="mt-5 text-sm leading-7 text-slate-300">
            {siteConfig.legalName} builds modern apps and tools with a focus on
            clarity, usefulness, and steady product design.
          </p>
        </div>
        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">
            Navigation
          </h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            {siteConfig.navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">
            Contact & Legal
          </h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
              {siteConfig.email}
            </a>
            {siteConfig.legalItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <p>Founded in {siteConfig.founded}</p>
        </div>
      </div>
    </footer>
  );
}
