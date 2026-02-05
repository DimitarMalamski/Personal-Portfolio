"use client";

import { GraduationCap, Code, Award } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

type Item = {
  year: string;
  title: string;
  text: string;
  reflection: string;
  type: "education" | "project" | "milestone";
  icon: React.ElementType;
};

const items: Item[] = [
  {
    year: "2019",
    title:
      '"Academic Sergey Pavlovich Korolyov" High School of Mathematics, Blagoevgrad',
    text: "Started my journey in programming and computer science.",
    reflection:
      "Early exposure to math and logic shaped how I approach problem-solving today.",
    type: "education",
    icon: GraduationCap,
  },
  {
    year: "2021",
    title: "Software University (SoftUni)",
    text: "Deepened my understanding of OOP, algorithms, and web development.",
    reflection:
      "This is where I learned that strong fundamentals matter more than frameworks.",
    type: "milestone",
    icon: Award,
  },
  {
    year: "2024",
    title: "Fontys University of Applied Sciences",
    text: "Exploring software engineering principles and teamwork.",
    reflection:
      "Working in teams revealed how communication and process shape technical outcomes.",
    type: "education",
    icon: GraduationCap,
  },
  {
    year: "2024–2025",
    title: "Projects",
    text: "Building real-world applications to apply and expand my skills.",
    reflection:
      "Shipping real projects taught me where theory ends and engineering judgment begins.",
    type: "project",
    icon: Code,
  },
  {
    year: "Now",
    title: "Preparing for Internships",
    text: "Sharpening depth, system design, and engineering judgment.",
    reflection:
      "I’m focused on learning how to make decisions that scale beyond a single codebase.",
    type: "milestone",
    icon: Award,
  },
];

const typeColors = {
  education: "bg-[var(--olive)]",
  project: "bg-[var(--amber)]",
  milestone: "bg-[var(--burnt)]",
};

const cardBg = {
  education: "bg-[var(--olive)]/8",
  project: "bg-[var(--amber)]/8",
  milestone: "bg-[var(--burnt)]/8",
};

const cardBorder = {
  education: "border-[var(--olive)]/30",
  project: "border-[var(--amber)]/30",
  milestone: "border-[var(--burnt)]/30",
};

const iconRing = {
  education: "ring-[var(--olive)]/30",
  project: "ring-[var(--amber)]/30",
  milestone: "ring-[var(--burnt)]/30",
};

export default function Journey() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="journey" className="py-24 sm:py-32 bg-[var(--bg-journey)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-sm uppercase tracking-wider text-[var(--amber)]">
            The path
          </span>
          <h2 className="text-4xl font-bold mt-3 mb-6 text-[var(--forest)]">
            My journey
          </h2>
          <p className="text-lg text-[var(--forest)]/70">
            Growth isn’t linear, but every step teaches something.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-6 bottom-12 left-6 w-px bg-[var(--forest)]/10 sm:hidden" />

          <div className="absolute top-6 left-0 right-0 h-px bg-[var(--forest)]/20 hidden sm:block" />

          <div className="grid sm:grid-cols-5 gap-8">
            {items.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-start gap-4 sm:block"
                >
                  <button
                    onClick={() => setActiveIndex(isActive ? null : index)}
                    className={`
                      relative z-10
                      w-12 h-12 md:w-14 md:h-14 
                      rounded-full
                      flex items-center justify-center
                      ${typeColors[item.type]}
                      transition-transform
                      aria-expanded={isActive}
                      ${isActive ? `ring-4 ${iconRing[item.type]} scale-105` : "hover:scale-105"}
                      flex-shrink-0 ml-0 sm:mx-auto
                    `}
                  >
                    <Icon className="w-6 h-6 text-[var(--cream)]" />
                  </button>

                  <div className="ml-10 sm:ml-0 sm:mt-6">
                    <motion.div
                      onClick={() => setActiveIndex(isActive ? null : index)}
                      className={`
                      cursor-pointer
                      rounded-xl
                      p-4
                      aria-expanded={isActive}
                      transition-all duration-300
                      ${
                        isActive
                          ? `${cardBg[item.type]} ${cardBorder[item.type]} border shadow-md`
                          : "bg-[var(--bg-journey)] border border-transparent hover:bg-[var(--forest)]/5"
                      }
                    `}
                    >
                      <span className="text-xs text-[var(--amber)] block mb-1">
                        {item.year}
                      </span>

                      <h3 className="font-semibold text-[var(--forest)]">
                        {item.title}
                      </h3>

                      <p className="text-sm text-[var(--forest)]/70 mt-1">
                        {item.text}
                      </p>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isActive ? "auto" : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm italic text-[var(--forest)]/80 mt-3 pt-3 border-t border-[var(--forest)]/15">
                          “{item.reflection}”
                        </p>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 h-px w-full bg-[var(--forest)]/15 hidden sm:block" />

          <div className="mt-12 flex justify-center">
            <ul className="flex flex-wrap justify-center gap-6 text-sm text-[var(--forest)]/80">
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
