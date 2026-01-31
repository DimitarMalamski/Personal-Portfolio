import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 py-24 sm:py-32 bg-[var(--cream)]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold tracking-tight mb-16 text-center text-[var(--forest)]">
          Projects
        </h2>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          <ProjectCard
            title="CareerPath"
            description="AI-powered job and internship matching platform."
            tech={["Spring Boot", "Angular", "PostgreSQL", "Docker"]}
          />

          <ProjectCard
            title="Task Manager"
            description="Task management app with authentication and role-based access."
            tech={["React", "Node.js", "MongoDB"]}
          />

          <ProjectCard
            title="Portfolio Website"
            description="Personal portfolio built with modern web technologies."
            tech={["Next.js", "TypeScript", "Tailwind"]}
          />
        </div>
      </div>
    </section>
  );
}
