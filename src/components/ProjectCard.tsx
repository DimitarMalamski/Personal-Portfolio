import { forwardRef } from "react";

export type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
};

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  function ProjectCard({ title, description, tech }, ref) {
    return (
      <div
        ref={ref}
        className="border rounded-xl p-6 hover:-translate-y-1.5 transition-transform duration-300 ease-out hover:shadow-xl"
      >
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
  },
);

export default ProjectCard;
