const updates = [
  {
    title: "Company site launch",
    summary:
      "The new Ovrimo website is set up for product listings, legal pages, and future updates.",
  },
  {
    title: "Product system ready",
    summary:
      "New live, coming-soon, or archived products can be added from one shared data file.",
  },
  {
    title: "More updates later",
    summary:
      "This section can be replaced with company news, release notes, or product announcements.",
  },
];

export function UpdatesPlaceholder() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {updates.map((item) => (
        <article
          key={item.title}
          className="rounded-[28px] border border-white/10 bg-white/5 p-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Latest updates
          </p>
          <h3 className="mt-4 font-heading text-xl font-semibold text-white">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">{item.summary}</p>
        </article>
      ))}
    </div>
  );
}
