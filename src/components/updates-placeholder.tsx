const updates = [
  {
    title: "ModeDo is live",
    summary:
      "TModeDo AI powdered productivity app is now available for download.",
  },
  {
    title: "We are live.",
    summary:
      "Ovrimo is now live on the web!",
  }
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
