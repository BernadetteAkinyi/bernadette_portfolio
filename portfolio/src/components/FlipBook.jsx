import { forwardRef, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { profile, projects, hobbies } from "../content";
import Articles from "./Articles";

// Every page in the book is this component. forwardRef hands the library
// direct access to the page's <div>, which it needs to animate the flip.
// data-density="hard" makes stiff pages (covers) that don't bend when turned.
const Page = forwardRef(function Page({ children, className = "", density = "soft" }, ref) {
  return (
    <div
      ref={ref}
      data-density={density}
      className={`relative h-full overflow-hidden border-2 border-ink p-6 ${className}`}
    >
      {children}
    </div>
  );
});

// Small reusable heading, the same chapter-pill style as before but sized for a page
function PageHeading({ chapter, title }) {
  return (
    <div className="mb-5">
      <p className="inline-block rounded-full bg-mint px-3 py-1 text-xs font-bold uppercase tracking-widest">
        Chapter {chapter}
      </p>
      <h2 className="mt-2 font-display text-3xl font-extrabold">{title}</h2>
      <div className="mt-2 h-1.5 w-16 rounded-full bg-raspberry" />
    </div>
  );
}

// Contents: `page` is the page index the button jumps to
const contents = [
  { chapter: "I", title: "Projects", page: 3 },
  { chapter: "II", title: "Articles", page: 4 },
  { chapter: "III", title: "Beyond the Code", page: 5 },
  { chapter: "IV", title: "Resume", page: 6 },
];

export default function FlipBook() {
  // The ref is our remote control for the book
  const book = useRef(null);
  const goTo = (page) => book.current.pageFlip().flip(page); // animated jump to a page

  const [first, ...rest] = profile.name.split(" ");
  const links = Object.entries(profile.links);

  const controlBtn =
    "rounded-full border-2 border-ink bg-white px-5 py-2 text-sm font-bold shadow-[3px_3px_0_var(--color-ink)] transition hover:-translate-y-0.5 hover:bg-bubblegum";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 py-8">
      {/* IMPORTANT: every direct child of HTMLFlipBook must be a <Page>.
          Don't wrap them in fragments or use {condition && <Page/>}, the library breaks. */}
      <HTMLFlipBook
        ref={book}
        width={380}          // size of ONE page
        height={540}
        showCover            // first and last pages behave as single covers
        maxShadowOpacity={0.5}
        flippingTime={800}   // ms per flip
      >
        {/* 0: FRONT COVER */}
        <Page density="hard" className="flex flex-col items-center justify-center bg-raspberry text-center text-white">
          <p className="text-xs uppercase tracking-[0.4em]">The portfolio of</p>
          <h1 className="mt-4 font-display text-5xl font-extrabold leading-tight">
            {first} <span className="italic">{rest.join(" ")}</span>
          </h1>
          <p className="mt-6 text-bubblegum">✦ Software Developer ✦</p>
          <p className="absolute bottom-8 text-sm">Turn the page →</p>
        </Page>

        {/* 1: INTRO */}
        <Page className="flex flex-col items-center justify-center bg-white text-center">
          <div className="relative">
            <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-full bg-raspberry" />
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              className="relative h-36 w-36 rounded-full border-4 border-ink object-cover"
            />
          </div>
          <p className="mt-6 text-sm leading-relaxed text-ink/80">{profile.tagline}</p>
          <nav className="mt-5 flex flex-wrap justify-center gap-2">
            {links.map(([label, url]) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border-2 border-ink px-3 py-1 text-xs font-bold capitalize hover:bg-bubblegum"
              >
                {label}
              </a>
            ))}
          </nav>
        </Page>

        {/* 2: CONTENTS (each row is a button that flips to that chapter) */}
        <Page className="bg-white">
          <h2 className="font-display text-3xl font-extrabold">Contents</h2>
          <div className="mb-6 mt-2 h-1.5 w-16 rounded-full bg-raspberry" />
          <ul className="space-y-4">
            {contents.map((c) => (
              <li key={c.title}>
                <button
                  onClick={() => goTo(c.page)}
                  className="flex w-full items-baseline justify-between border-b-2 border-dashed border-ink/30 pb-2 text-left transition hover:text-raspberry"
                >
                  <span className="font-display text-lg font-bold">
                    <span className="mr-2 text-sm text-emerald">{c.chapter}.</span>
                    {c.title}
                  </span>
                  <span className="text-sm font-medium">{c.page}</span>
                </button>
              </li>
            ))}
          </ul>
        </Page>

        {/* 3: PROJECTS */}
        <Page className="bg-white">
          <PageHeading chapter="I" title="Projects" />
          {projects.map((p) => (
            // A compact version of ProjectCard so it fits a page
            <article key={p.title} className="rounded-2xl border-2 border-ink bg-petal p-5 shadow-[5px_5px_0_var(--color-ink)]">
              <h3 className="font-display text-2xl font-extrabold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">{p.summary}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <li key={t} className="rounded-full border-2 border-ink bg-mint px-2 py-0.5 text-xs font-medium">{t}</li>
                ))}
              </ul>
              <div className="mt-4 flex gap-4 text-sm font-bold">
                <a href={p.repo} target="_blank" rel="noreferrer" className="text-raspberry underline underline-offset-4">Code ↗</a>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="text-raspberry underline underline-offset-4">Live demo ↗</a>
                )}
              </div>
            </article>
          ))}
        </Page>

        {/* 4: ARTICLES (only the 2 latest so the page doesn't overflow) */}
        <Page className="bg-white">
          <PageHeading chapter="II" title="Articles" />
          <Articles limit={2} />
          <a
            href={profile.links.devto}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm font-bold text-raspberry underline underline-offset-4"
          >
            Read more on Dev.to ↗
          </a>
        </Page>

        {/* 5: HOBBIES */}
        <Page className="bg-white">
          <PageHeading chapter="III" title="Beyond the Code" />
          <ul className="flex flex-wrap gap-3">
            {hobbies.map((h) => (
              <li key={h} className="rounded-full border-2 border-ink bg-mint px-4 py-2 text-sm font-medium">{h}</li>
            ))}
          </ul>
        </Page>

        {/* 6: RESUME */}
        <Page className="bg-white">
          <PageHeading chapter="IV" title="Resume" />
          <p className="mb-6 text-sm text-ink/80">The full story, on one page.</p>
          <a
            href={profile.resume}
            download
            className="inline-block rounded-full border-2 border-ink bg-raspberry px-6 py-3 font-bold text-white shadow-[4px_4px_0_var(--color-ink)] transition hover:-translate-y-0.5 hover:bg-emerald"
          >
            Download my CV
          </a>
        </Page>

        {/* 7: BACK COVER */}
        <Page density="hard" className="flex flex-col items-center justify-center bg-ink text-center text-cream">
          <p className="font-display text-4xl font-extrabold italic">The End</p>
          <p className="mt-3 text-bubblegum">✦ …or just the beginning ✦</p>
          <p className="absolute bottom-8 text-sm text-cream/70">Thanks for reading</p>
        </Page>
      </HTMLFlipBook>

      {/* Buttons, so nobody has to guess that pages can be dragged */}
      <div className="flex items-center gap-4">
        <button onClick={() => book.current.pageFlip().flipPrev()} className={controlBtn}>← Prev</button>
        <p className="hidden text-sm text-ink/60 sm:block">Drag a page corner, or use the buttons</p>
        <button onClick={() => book.current.pageFlip().flipNext()} className={controlBtn}>Next →</button>
      </div>
    </main>
  );
}