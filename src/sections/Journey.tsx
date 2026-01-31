import { GraduationCap, Code, Award } from "lucide-react";

export default function Journey() {
  return (
    <section id="journey" className="py-24 sm:py-32 bg-[var(--bg-journey)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-sm uppercase tracking-wider text-[var(--amber)]">
            The path
          </span>

          <h2 className="text-4xl font-bold tracking-tight mt-3 mb-6 text-[var(--forest)]">
            My journey
          </h2>

          <p className="text-lg text-[var(--forest)]/70">
            Growth isn’t linear, but every step teaches something. These
            milestones shaped how I think about building software.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-6 left-0 right-0 h-px bg-[var(--forest)]/20" />

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-12 relative">
            {[
              {
                year: "2019",
                title:
                  '"Academic Sergey Pavlovich Korolyov" High School of Mathematics, Blagoevgrad',
                text: "Started my journy in programming and computer science.",
                type: "education",
              },
              {
                year: "2021",
                title: "Software University (SoftUni)",
                text: "Deepened my understanding of OOP, algorithms, and web dev.",
                type: "milestone",
              },
              {
                year: "2024",
                title: "Fontys University of Applied Sciences",
                text: "Exploring software engineering principles and teamwork.",
                type: "education",
              },
              {
                year: "2024-2025",
                title: "Projects",
                text: "Working on real projects to apply and expand my skills.",
                type: "project",
              },
              {
                year: "Now",
                title: "Preparing for Internships",
                text: "Sharpening depth, system design, and engineering judgment.",
                type: "milestone",
              },
            ].map((item) => {
              const iconConfig =
                item.type === "education"
                  ? {
                      Icon: GraduationCap,
                      bg: "bg-[var(--olive)]",
                    }
                  : item.type === "project"
                    ? {
                        Icon: Code,
                        bg: "bg-[var(--amber)]",
                      }
                    : {
                        Icon: Award,
                        bg: "bg-[var(--burnt)]",
                      };

              return (
                <div key={item.title} className="relative">
                  <div
                    aria-hidden
                    className={`
    w-12 h-12
    rounded-full
    flex items-center justify-center
    ${iconConfig.bg}
    mb-6
    shadow-sm
  `}
                  >
                    <iconConfig.Icon className="w-6 h-6 text-[var(--cream)]" />
                  </div>

                  <span className="text-sm text-[var(--amber)]">
                    {item.year}
                  </span>

                  <h3 className="text-lg font-semibold mt-2 mb-2 text-[var(--forest)]">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[var(--forest)]/70">{item.text}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 h-px w-full bg-[var(--forest)]/15" />

          <div className="mt-16 flex justify-center">
            <ul className="flex items-center gap-8 text-sm text-[var(--forest)]/80">
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[var(--olive)]" />
                Education
              </li>

              <li className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[var(--amber)]" />
                Projects
              </li>

              <li className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[var(--burnt)]" />
                Milestones
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
