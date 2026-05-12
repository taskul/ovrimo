"use client";

import { useState } from "react";

import { siteConfig } from "@/data/site";

export function NewsletterPlaceholder() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!email.trim()) return;

    setState("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setState("success");
        setEmail("");
      } else {
        setState("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      setState("error");
      setMessage("Failed to subscribe. Please try again.");
    }
  };

  return (
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 sm:p-8">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Stay In Touch
          </p>
          <h3 className="mt-3 font-heading text-2xl font-semibold text-white">
            Subscribe to the newsletter
          </h3>
          <p className="mt-3 max-w-xl text-slate-300">
            Enter your email address to receive updates on new products and company news.
          </p>
        </div>
        <form className="flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
          <input
            type="email"
            aria-label="Email address"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email address"
            className="min-w-[240px] rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/60 disabled:opacity-50"
            disabled={state === "loading" || state === "success"}
          />
          <button
            type="submit"
            disabled={state === "loading" || state === "success"}
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:bg-white/50"
          >
            {state === "loading" ? "Joining..." : state === "success" ? "Joined" : "Join"}
          </button>
        </form>
      </div>
      {state === "success" && (
        <p className="mt-4 text-sm text-emerald-300">
          Thanks for subscribing! You've been added to our list.
        </p>
      )}
      {state === "error" && (
        <p className="mt-4 text-sm text-red-400">
          {message}
        </p>
      )}
    </div>
  );
}
