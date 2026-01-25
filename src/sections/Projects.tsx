"use client";

import { useEffect, useRef } from "react";
import ProjectCard from "@/components/ProjectCard";
import { animateProjects } from "@/animations/projectsAnimations";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const addCardRef = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;
    animateProjects(sectionRef.current, cardsRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-32 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold tracking-tight mb-16 text-center">
        Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        <ProjectCard
          ref={addCardRef}
          title="CareerPath"
          description="AI-powered job and internship matching platform."
          tech={["Spring Boot", "Angular", "PostgreSQL", "Docker"]}
        />

        <ProjectCard
          ref={addCardRef}
          title="Task Manager"
          description="Task management app with authentication and role-based access."
          tech={["React", "Node.js", "MongoDB"]}
        />

        <ProjectCard
          ref={addCardRef}
          title="Portfolio Website"
          description="Personal portfolio built with modern web technologies."
          tech={["Next.js", "TypeScript", "Tailwind"]}
        />
      </div>
    </section>
  );
}
