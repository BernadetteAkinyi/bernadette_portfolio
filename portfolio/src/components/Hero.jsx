import { profile } from "../content";

export default function Hero() {
  // Object.entries turns {linkedin: "...", github: "..."} into [["linkedin","..."], ...]
  // so we can loop over the links instead of writing three separate <a> tags.
  const links = Object.entries(profile.links);

  return (
    <header className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 py-20 text-center md:flex-row md:text-left">
      <img
        src={profile.photo}
        alt={`Portrait of ${profile.name}`}
        // object-cover crops the photo to fill the circle without stretching it
        className="h-48 w-48 rounded-full object-cover shadow-md"
      />
      <div>
        <h1 className="text-4xl font-bold">{profile.name}</h1>
        <p className="mt-3 text-lg text-stone-600">{profile.tagline}</p>
        <nav className="mt-6 flex justify-center gap-4 md:justify-start">
          {links.map(([label, url]) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noreferrer" // security best practice with target="_blank"
              className="rounded-full border border-stone-300 px-4 py-2 text-sm capitalize hover:bg-stone-100"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}