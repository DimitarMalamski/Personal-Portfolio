export type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
};

export default function ProjectCard({
  title,
  description,
  tech,
}: ProjectCardProps) {
  return (
    <div className="rounded-xl p-6 bg-[var(--cream)] border border-[var(--forest)]/15">
      <h3 className="text-2xl font-semibold mb-2 tracking-tight text-[var(--forest)]">
        {title}
      </h3>

      <p className="leading-relaxed mb-4 text-[var(--forest)]/70">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="text-sm px-3 py-1 rounded-full bg-[var(--forest)]/5 text-[var(--forest)]/80 border border-[var(--forest)]/10"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
