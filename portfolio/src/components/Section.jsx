// A wrapper that gives every section the same spacing and heading style.
// `children` is whatever you put between <Section> and </Section>.
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="mb-8 text-3xl font-bold">{title}</h2>
      {children}
    </section>
  );
}