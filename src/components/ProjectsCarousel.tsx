"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import FeaturedProject from "@/components/FeaturedProject";

const AUTO_ADVANCE_INTERVAL = 12000;
const RESUME_DELAY = 2000;

const slideVariants = {
  initial: {
    opacity: 0,
    y: 12,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -6,
  },
};

export default function ProjectsCarousel() {
  const featuredProjects = projects.filter((p) => p.featured);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const totalProjects = featuredProjects.length;

  useEffect(() => {
    if (isPaused || totalProjects === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalProjects);
    }, AUTO_ADVANCE_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused, totalProjects]);

  if (totalProjects === 0) {
    return null;
  }

  const safeIndex = currentIndex % totalProjects;
  const currentProject = featuredProjects[safeIndex];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      pause();
      setCurrentIndex((prev) => (prev + 1) % totalProjects);
    }

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      pause();
      setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
    }
  };

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
      className="max-w-3xl mx-auto focus:outline-none"
      tabIndex={0}
      onMouseEnter={pause}
      onMouseLeave={resumeWithDelay}
      onFocus={pause}
      onBlur={resumeWithDelay}
      onKeyDown={handleKeyDown}
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
        {featuredProjects.map((_, index) => (
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
                  ? "h-3 w-8 sm:h-2 sm:w-6 bg-[var(--forest)]/70"
                  : "h-3 w-3 sm:h-2 sm:w-2 bg-[var(--forest)]/20"
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
