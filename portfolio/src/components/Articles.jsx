import { useEffect, useState } from "react";
import { profile } from "../content";

export default function Articles() {
  // Three pieces of state describe the three situations a fetch can be in.
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Pull "bernadetteakinyi" out of the Dev.to URL so we don't repeat it.
    const username = profile.links.devto.split("dev.to/")[1];

    fetch(`https://dev.to/api/articles?username=${username}`)
      .then((res) => {
        if (!res.ok) throw new Error("Request failed"); // fetch doesn't throw on 404/500 by itself
        return res.json();
      })
      .then(setArticles)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []); // empty array = run once, when the component first appears

  if (loading) return <p className="text-stone-500">Loading articles…</p>;
  if (error)
    return (
      <p>
        Couldn't load articles right now. Read them on{" "}
        <a href={profile.links.devto} className="underline">Dev.to</a>.
      </p>
    );
  if (articles.length === 0) return <p className="text-stone-500">Articles coming soon.</p>;

  return (
    <ul className="space-y-4">
      {articles.map((a) => (
        <li key={a.id} className="rounded-xl border border-stone-200 p-5">
          <a href={a.url} target="_blank" rel="noreferrer" className="text-lg font-semibold underline">
            {a.title}
          </a>
          <p className="mt-1 text-sm text-stone-500">{a.readable_publish_date}</p>
          <p className="mt-2 text-stone-600">{a.description}</p>
        </li>
      ))}
    </ul>
  );
}