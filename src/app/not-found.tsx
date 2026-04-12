import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-space">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
          404
        </p>
        <h1 className="mt-4 font-heading text-5xl font-semibold text-white">
          Page not found
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          The page you requested does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
        >
          Return home
        </Link>
      </div>
    </section>
  );
}
