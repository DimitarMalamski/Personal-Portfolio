"use client";

import { motion } from "framer-motion";
import { scrollToSection } from "@/utils/scroll";

import dynamic from "next/dynamic";

const EindhovenMap = dynamic(() => import("../utils/EindhovenMap"), {
  ssr: false,
});

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[var(--bg-about)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-20 space-y-4">
          <span className="text-sm uppercase tracking-wider text-[var(--amber)]">
            About me
          </span>

          <h2 className="text-4xl font-bold tracking-tight mt-3 mb-6 text-[var(--forest)]">
            Building with intention
          </h2>

          <p className="text-lg text-[var(--forest)]/60 max-w-2xl">
            I approach software the way an architect approaches buildings — with
            respect for structure, clarity, and the people who will inhabit the
            space.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="max-w-xl h-full">
              <div className="h-full flex flex-col justify-between text-[var(--forest)]/80 text-base sm:text-lg leading-relaxed">
                <div className="space-y-6">
                  <p>
                    Code should be readable. Systems should be understandable.
                    Solutions should solve real problems — not just pass tests.
                  </p>

                  <div className="w-12 h-px bg-[var(--forest)]/20" />

                  <p>
                    My path into engineering wasn’t linear. I started by taking
                    things apart, then building small applications, and
                    eventually designing full systems. Each step revealed new
                    patterns and better questions.
                  </p>

                  <p>
                    When I’m not coding, I’m usually learning about distributed
                    systems, sketching interface ideas, or refining how things
                    fit together. I believe strong engineers think beyond their
                    immediate domain.
                  </p>

                  <p>
                    I care deeply about how software evolves over time — how
                    decisions made early affect maintainability, clarity, and
                    the ability to adapt. Writing code is only part of the job;
                    shaping systems that can grow gracefully is what keeps me
                    engaged.
                  </p>
                </div>
                <div />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <div className="relative">
              <div className="rounded-2xl bg-[var(--forest)]/4 border border-[var(--forest)]/10 shadow-sm overflow-hidden">
                <EindhovenMap />
                <div className="px-8 py-6 text-center bg-[var(--bg-about)]">
                  <h4 className="font-semibold text-[var(--forest)] mb-1">
                    Based in Eindhoven
                  </h4>

                  <p className="text-sm text-[var(--forest)]/70 mb-4">
                    Open to remote opportunities and relocation for the right
                    team.
                  </p>

                  <div className="w-10 h-px bg-[var(--forest)]/20 mx-auto mb-4" />

                  <button
                    onClick={() => scrollToSection("contact")}
                    className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-[var(--cream)] text-[var(--forest)] font-medium border border-[var(--forest)]/25 shadow transition-all hover:bg-[var(--forest)] hover:text-[var(--cream)] hover:border-[var(--forest)] hover:shadow-md hover:-translate-y-[1px]"
                  >
                    Let’s connect
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
