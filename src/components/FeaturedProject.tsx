import { Github } from "lucide-react";

type FeaturedProjectProps = {
  category: string;
  title: string;
  description: string;
  tech: string[];
};

const cardClasses =
  "relative mx-auto max-w-3xl rounded-3xl bg-[var(--cream)] px-6 py-10 sm:px-12 sm:py-14 text-center";

export default function FeaturedProject({
  category,
  title,
  description,
  tech,
}: FeaturedProjectProps) {
  return (
    <div className={cardClasses}>
      <div className="relative z-10">
        <span className="text-xs uppercase tracking-widest text-[var(--forest)]/50">
          {category}
        </span>

        <h3 className="serif text-2xl sm:text-4xl font-semibold tracking-tight mt-5 mb-6 text-[var(--forest)]">
          {title}
        </h3>

        <div className="mx-auto mb-8 h-px w-12 bg-[var(--forest)]/15" />

        <p className="max-w-xl mx-auto text-base sm:text-lg leading-relaxed text-[var(--forest)]/70 mb-10 sm:mb-12">
          {description}
        </p>

        <div className="serif flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-[var(--forest)]/60 mb-14">
          {tech.flatMap((item, i) => [
            <span key={item}>{item}</span>,
            i < tech.length - 1 && (
              <span
                key={`${item}-dot`}
                aria-hidden
                className="h-1 w-1 rounded-full bg-[var(--forest)]/25"
              />
            ),
          ])}
        </div>

        <div className="flex items-center justify-center gap-8">
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source code on GitHub"
            className="flex items-center gap-2 text-sm font-medium text-[var(--forest)]/60 transition-colors hover:text-[var(--forest)]focus:outline-none focus-visible:underline"
          >
            <Github className="h-4 w-4" aria-hidden />
            <span>Source</span>
          </a>

          <a className="flex items-center gap-2 text-sm font-medium text-[var(--forest)] hover:underline focus:outline-none focus-visible:underline">
            View project →
          </a>
        </div>
      </div>
    </div>
  );
}
