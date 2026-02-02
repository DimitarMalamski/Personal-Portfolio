type FeaturedProjectProps = {
  category: string;
  title: string;
  description: string;
  tech: string[];
};

export default function FeaturedProject({
  category,
  title,
  description,
  tech,
}: FeaturedProjectProps) {
  return (
    <div
      className="
        mx-auto
        max-w-3xl
        rounded-2xl
        bg-[var(--cream)]
        border border-[var(--forest)]/10
        px-10 py-12
        text-center
      "
    >
      <span className="text-sm uppercase tracking-widest text-[var(--forest)]/60">
        {category}
      </span>

      <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-4 mb-6 text-[var(--forest)]">
        {title}
      </h3>

      <p className="text-lg leading-relaxed text-[var(--forest)]/70 mb-10">
        {description}
      </p>

      <div className="flex flex-wrap justify-center gap-4 text-sm text-[var(--forest)]/60 mb-10">
        {tech.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <div className="flex items-center justify-center gap-6">
        <a className="flex items-center gap-2 text-sm font-medium text-[var(--forest)]/70 hover:text-[var(--forest)]">
          Source
        </a>

        <a className="flex items-center gap-2 text-sm font-medium text-[var(--forest)] hover:underline">
          View project →
        </a>
      </div>
    </div>
  );
}
