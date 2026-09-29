import Hero from "./components/Hero";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import Articles from "./components/Articles";
import { projects, hobbies, profile } from "./content";

export default function App() {
  return (
    <main className="min-h-screen">
      <Hero />

      <Section id="projects" chapter="I" title="Projects">
        <div className="grid gap-8">
          {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
        </div>
      </Section>

      <Section id="articles" chapter="II" title="Articles">
        <Articles />
      </Section>

      <Section id="hobbies" chapter="III" title="Beyond the Code">
        <ul className="flex flex-wrap gap-3">
          {hobbies.map((h) => (
            // Hobbies tilt slightly and turn mint on hover
            <li key={h} className="rounded-full border-2 border-ink bg-white px-5 py-2 font-medium transition hover:-rotate-3 hover:bg-mint">
              {h}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="resume" chapter="IV" title="Resume">
        <a
          href={profile.resume}
          download
          className="inline-block rounded-full border-2 border-ink bg-raspberry px-8 py-3 font-bold text-white shadow-[4px_4px_0_var(--color-ink)] transition hover:-translate-y-0.5 hover:bg-emerald"
        >
          Download my CV
        </a>
      </Section>

      {/* Full-width dark green footer anchors the page */}
      <footer className="mt-10 bg-ink py-10 text-center text-sm text-cream/80">
        <span className="text-bubblegum">✦</span> Designed and built by {profile.name} <span className="text-bubblegum">✦</span>
      </footer>
    </main>
  );
}