import { profile } from "../content";

export default function Hero() {
  const links = Object.entries(profile.links);
  const [first, ...rest] = profile.name.split(" ");

  return (
    <header className="relative overflow-hidden">
      {/* Two soft blurred blobs, one pink and one mint, for a playful backdrop */}
      <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-petal blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-mint blur-3xl" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-10 px-6 py-24 text-center md:flex-row md:text-left">
        {/* Photo wrapper: the pink circle sits behind, shifted down-right, to fake a hard shadow */}
        <div className="relative shrink-0">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-full bg-raspberry" />
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            className="relative h-52 w-52 rounded-full border-4 border-ink object-cover"
          />
        </div>

        <div>
          <h1 className="font-display text-5xl font-extrabold leading-tight">
            {first} <span className="italic text-raspberry">{rest.join(" ")}</span>
          </h1>
          <p className="mt-4 max-w-md text-lg text-ink/80">{profile.tagline}</p>
          <nav className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            {links.map(([label, url]) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer"
                // Hard shadow via a CSS variable; on hover the button lifts and turns bubblegum
                className="rounded-full border-2 border-ink bg-white px-5 py-2 text-sm font-bold capitalize shadow-[3px_3px_0_var(--color-ink)] transition hover:-translate-y-0.5 hover:bg-bubblegum"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}