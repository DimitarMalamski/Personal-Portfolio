"use client";

import { motion } from "framer-motion";
import { scrollToSection } from "@/utils/scroll";

const EASE = "easeOut";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[var(--bg-hero)]"
    >
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE, delay: 1 }}
      >
        <div className="scroll-cue">↓</div>
      </motion.div>

      <div
        aria-hidden
        className="hidden sm:block absolute top-[-20%] left-[10%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(40,54,24,0.12),transparent_65%)] blur-3xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 min-h-screen flex items-center pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <motion.span
              className="block text-sm uppercase tracking-widest text-[var(--forest)]/60"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            >
              Full-stack Software Engineer
            </motion.span>

            <motion.h1
              className="mt-4 mb-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[var(--forest)]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            >
              Dimitar Malamski
            </motion.h1>

            <motion.div
              className="mb-6 flex items-center gap-2 text-sm text-[var(--forest)]/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
            >
              <svg
                aria-hidden
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z"
                />
                <circle cx="12" cy="11" r="2.5" />
              </svg>
              <span>Eindhoven, The Netherlands</span>
            </motion.div>

            <motion.p
              className="mb-10 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose text-[var(--forest)]/65"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.4 }}
            >
              I build scalable web applications with modern technologies and a
              focus on clarity, structure, and long-term maintainability.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--forest)] text-[var(--cream)] font-medium shadow transition-all hover:shadow-md hover:-translate-y-[1px]"
              >
                See my work
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[var(--forest)] text-[var(--forest)] font-medium transition-all hover:bg-[var(--forest)] hover:text-[var(--cream)] hover:-translate-y-[1px]"
              >
                Get in touch
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden lg:flex justify-end"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.4 }}
          >
            <div className="relative">
              <div
                aria-hidden
                className="absolute -top-6 -right-10 w-[260px] h-[260px] rounded-3xl border border-[var(--forest)]/10 rotate-12"
              />
              <div
                aria-hidden
                className="absolute top-12 right-4 w-[220px] h-[220px] rounded-3xl border border-[var(--olive)]/15 -rotate-6"
              />
              <div
                aria-hidden
                className="absolute -inset-4 rounded-3xl bg-[var(--forest)]/5"
              />

              <div className="relative w-[320px] xl:w-[360px] aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="/me.jpg"
                  alt="Portrait of Dimitar Malamski"
                  className="w-full h-full object-cover saturate-[0.9] contrast-[0.95] grayscale-[5%]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
