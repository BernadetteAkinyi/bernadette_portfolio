// A reusable card. Props are the "inputs" to a component, like function arguments.
export default function ProjectCard({ title, summary, stack, repo, demo }) {
  return (
    // Tailwind classes read as: rounded corners, border, padding, soft shadow
    <article className="rounded-xl border border-stone-200 p-6 shadow-sm">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-stone-600">{summary}</p>

      {/* .map turns an array into a list of elements; key helps React track them */}
      <ul className="mt-4 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <li key={tech} className="rounded-full bg-stone-100 px-3 py-1 text-sm">
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex gap-4 text-sm font-medium">
        <a href={repo} className="underline">Code</a>
        {/* Conditional rendering: only show the link if demo has a value */}
        {demo && <a href={demo} className="underline">Live demo</a>}
      </div>
    </article>
  );
}