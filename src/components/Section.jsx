export default function Section({ id, chapter, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-4xl px-6 py-16">
      {/* Chapter label is now a mint "sticker" pill */}
      <p className="inline-block rounded-full bg-mint px-3 py-1 text-xs font-bold uppercase tracking-widest">
        Chapter {chapter}
      </p>
      <h2 className="mt-3 font-display text-4xl font-extrabold">{title}</h2>
      <div className="mb-10 mt-4 h-1.5 w-20 rounded-full bg-raspberry" />
      {children}
    </section>
  );
}