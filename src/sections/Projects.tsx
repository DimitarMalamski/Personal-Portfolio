export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold tracking-tight mb-16 text-center">
        Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
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
    </section>
  );
}

function ProjectCard({
  title,
  description,
  tech,
}: {
  title: string;
  description: string;
  tech: string[];
}) {
  return (
    <div className="border rounded-xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all">
      <h3 className="text-2xl font-semibold mb-2 tracking-tight">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-700"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
