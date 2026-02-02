"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import FeaturedProject from "@/components/FeaturedProject";

const projects = [
  {
    category: "Full-stack",
    title: "TaskFlow",
    description:
      "Built to understand how teams coordinate work. Features include real-time collaboration using WebSockets, a custom priority algorithm, and a clean API design that handles complex state gracefully.",
    tech: ["React", "Node.js", "PostgreSQL", "WebSocket", "Redis"],
  },
  {
    category: "Developer tools",
    title: "AuthKit",
    description:
      "A lightweight authentication toolkit focused on clarity and security, built to explore token lifecycles, refresh strategies, and API ergonomics.",
    tech: ["TypeScript", "JWT", "OAuth 2.0", "Node.js"],
  },
];

const AUTO_ADVANCE_INTERVAL = 7000;
const RESUME_DELAY = 2000;

const slideVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -10,
  },
};

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const currentProject = projects[currentIndex];
  const shouldReduceMotion = useReducedMotion();

  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, AUTO_ADVANCE_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused, projects.length]);

  const pause = () => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
    setIsPaused(true);
  };

  const resumeWithDelay = () => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, RESUME_DELAY);
  };

  return (
    <div
      className="max-w-3xl mx-auto"
      onMouseEnter={pause}
      onMouseLeave={resumeWithDelay}
      onFocus={pause}
      onBlur={resumeWithDelay}
    >
      <div className="relative min-h-[360px] sm:min-h-[320px] flex items-center justify-center">
        <div className="w-full max-w-3xl min-h-[320px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: shouldReduceMotion ? 0 : 0.75,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="w-full"
            >
              <FeaturedProject {...currentProject} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 mt-12">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              pause();
            }}
            onFocus={pause}
            aria-label={`Go to project ${index + 1}`}
            className={`
              h-2 rounded-full transition-all duration-300
              ${
                index === currentIndex
                  ? "w-6 bg-[var(--forest)]/70"
                  : "w-2 bg-[var(--forest)]/20"
              }
            `}
          />
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <div className="w-32 h-[2px] bg-[var(--forest)]/15 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[var(--forest)]/40"
            initial={{ width: "0%" }}
            animate={{
              width: isPaused || shouldReduceMotion ? "0%" : "100%",
            }}
            transition={{
              duration: AUTO_ADVANCE_INTERVAL / 1000,
              ease: "linear",
              repeat: isPaused || shouldReduceMotion ? 0 : Infinity,
            }}
            key={`${currentIndex}-${isPaused}`}
          />
        </div>
      </div>
    </div>
  );
}
