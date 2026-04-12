"use client";

import { useState } from "react";

import { siteConfig } from "@/data/site";

export function NewsletterPlaceholder() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 sm:p-8">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Newsletter Placeholder
          </p>
          <h3 className="mt-3 font-heading text-2xl font-semibold text-white">
            Keep room for company updates later
          </h3>
          <p className="mt-3 max-w-xl text-slate-300">
            This section is ready for a future mailing list. For now, it can
            forward interested people to your contact email.
          </p>
        </div>
        <form
          className="flex flex-col gap-3 sm:flex-row"
          onSubmit={(event) => {
            event.preventDefault();
            if (!email.trim()) {
              return;
            }
            setSubmitted(true);
            window.location.href = `mailto:${siteConfig.email}?subject=Newsletter%20interest&body=${encodeURIComponent(
              `Please keep me updated.\n\nEmail: ${email}`,
            )}`;
            setEmail("");
          }}
        >
          <input
            type="email"
            aria-label="Email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email address"
            className="min-w-[240px] rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/60"
          />
          <button
            type="submit"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Join later
          </button>
        </form>
      </div>
      {submitted ? (
        <p className="mt-4 text-sm text-emerald-200">
          Your email app should open with a draft to {siteConfig.email}.
        </p>
      ) : null}
    </div>
  );
}
