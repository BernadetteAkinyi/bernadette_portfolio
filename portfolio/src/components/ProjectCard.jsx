export default function ProjectCard({ title, summary, stack, repo, demo }) {
  return (
    // On hover the card lifts and its shadow flips from green to raspberry
    <article className="rounded-2xl border-2 border-ink bg-petal p-8 shadow-[6px_6px_0_var(--color-ink)] transition hover:-translate-y-1 hover:shadow-[10px_10px_0_var(--color-raspberry)]">
      <h3 className="font-display text-3xl font-extrabold">{title}</h3>
      <p className="mt-3 leading-relaxed text-ink/80">{summary}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <li key={tech} className="rounded-full border-2 border-ink bg-mint px-3 py-0.5 text-sm font-medium">
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-5 text-sm font-bold">
        <a href={repo} target="_blank" rel="noreferrer" className="text-raspberry underline underline-offset-4 hover:text-emerald">
          Code ↗
        </a>
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer" className="text-raspberry underline underline-offset-4 hover:text-emerald">
            Live demo ↗
          </a>
        )}
      </div>
    </article>
  );
}