import Hero from "./components/Hero";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import Articles from "./components/Articles";
import { projects, hobbies, profile } from "./content";

export default function App() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <Hero />

      <Section id="projects" title="Projects">
        <div className="grid gap-6">
          {/* {...p} spreads all of the project's fields in as props at once */}
          {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
        </div>
      </Section>

      <Section id="articles" title="Articles">
        <Articles />
      </Section>

      <Section id="hobbies" title="Beyond the Code">
        <ul className="flex flex-wrap gap-3">
          {hobbies.map((h) => (
            <li key={h} className="rounded-full bg-stone-200 px-4 py-2">{h}</li>
          ))}
        </ul>
      </Section>

      <Section id="resume" title="Resume">
        <a
          href={profile.resume}
          download // tells the browser to download instead of navigating
          className="inline-block rounded-lg bg-stone-900 px-6 py-3 text-white hover:bg-stone-700"
        >
          Download my CV
        </a>
      </Section>
    </main>
  );
}