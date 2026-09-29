export default function ProjectCard({ title, summary, stack, repo, demo }) {
  return (
    <article className="rounded-xl border border-stone-200 p-6 shadow-sm">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-stone-600">{summary}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <li key={tech} className="rounded-full bg-stone-100 px-3 py-1 text-sm">
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex gap-4 text-sm font-medium">
        <a href={repo} target="_blank" rel="noreferrer" className="underline">Code</a>
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer" className="underline">Live demo</a>
        )}
      </div>
    </article>
  );
}