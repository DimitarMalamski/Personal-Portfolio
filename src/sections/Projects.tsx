import ProjectsCarousel from "@/components/ProjectsCarousel";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 py-24 sm:py-32 bg-[var(--bg-projects)]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-sm uppercase tracking-wider text-[var(--amber)]">
            Selected work
          </span>

          <h2 className="text-4xl font-bold tracking-tight mt-3 text-[var(--forest)]">
            Projects
          </h2>

          <p className="mt-4 text-lg text-[var(--forest)]/70">
            A focused selection of projects that reflect how I think about
            building software — thoughtfully, iteratively, and with intent.
          </p>
        </div>

        <ProjectsCarousel />
      </div>
    </section>
  );
}
