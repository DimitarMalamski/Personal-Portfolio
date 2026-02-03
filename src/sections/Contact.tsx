"use client";

import { Mail, Linkedin, Github, FileText, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const contactOptions = [
  {
    id: "email",
    icon: Mail,
    title: "Send me an email",
    description:
      "For project discussions, opportunities, or just to say hi. I typically respond within 24 hours.",
    action: "mitemalamata@gmail.com",
    href: "mailto:alex@example.com",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    title: "Connect on LinkedIn",
    description:
      "For professional networking and keeping in touch. Let’s grow our networks together.",
    action: "View profile",
    href: "https://www.linkedin.com/in/dimitar-malamski-a00253238/",
  },
  {
    id: "github",
    icon: Github,
    title: "Check my GitHub",
    description:
      "Open source contributions, experiments, and project repositories.",
    action: "View repos",
    href: "https://github.com/DimitarMalamski",
  },
  {
    id: "resume",
    icon: FileText,
    title: "Download my resume",
    description:
      "A comprehensive overview of my experience, education, and technical skills.",
    action: "Download PDF",
    href: "/resume.pdf",
  },
];

/* ───────────────── animations ───────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 bg-[var(--forest)] text-[var(--cream)] overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <pattern
            id="grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="block text-sm uppercase tracking-widest text-[var(--amber)] mb-4">
            Get in touch
          </span>

          <h2 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight mb-6">
            Let’s build something together
          </h2>

          <p className="text-lg text-[var(--cream)]/70">
            I’m currently seeking software engineering internships. If you’re
            working on something interesting, I’d love to hear about it.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactOptions.map((option) => {
            const Icon = option.icon;

            return (
              <motion.a
                key={option.id}
                href={option.href}
                target={option.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  option.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group block p-6 rounded-xl border border-[var(--cream)]/10 bg-[var(--forest)]/60 backdrop-blur hover:border-[var(--amber)]/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[var(--amber)]/15 text-[var(--amber)]">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{option.title}</h3>

                      <ArrowUpRight className="w-4 h-4 text-[var(--amber)] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </div>

                    <p className="text-sm text-[var(--cream)]/70 mb-3">
                      {option.description}
                    </p>

                    <span className="text-sm font-mono text-[var(--amber)]">
                      {option.action}
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-20 pt-8 border-t border-[var(--cream)]/10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-sm text-[var(--cream)]/50">
            Designed and built with intention · © 2026 Dimitar Malamski
          </p>
        </motion.div>
      </div>
    </section>
  );
}
