"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { scrollToSection } from "@/utils/scroll";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function Navbar() {
  const activeSection = useActiveSection();
  const scrollProgress = useScrollProgress();
  const [menuOpen, setMenuOpen] = useState(false);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Close mobile menu on scroll
  useEffect(() => {
    function closeOnScroll() {
      setMenuOpen(false);
    }

    window.addEventListener("scroll", closeOnScroll, { passive: true });
    return () => window.removeEventListener("scroll", closeOnScroll);
  }, []);

  const linkClass = (id: string) =>
    `relative transition ${
      activeSection === id
        ? "text-[var(--forest)]"
        : "text-[var(--forest)]/60 hover:text-[var(--forest)]"
    }`;

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--cream)]/80 backdrop-blur-md border-b border-[var(--forest)]/10"
      initial={prefersReducedMotion ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.6, ease: "easeOut", delay: 0.05 }
      }
    >
      {/* Main bar */}
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("top")}
          className="text-sm font-semibold tracking-tight text-[var(--forest)] hover:opacity-80 transition"
        >
          DM
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6 text-sm">
          <button
            onClick={() => scrollToSection("projects")}
            aria-current={activeSection === "projects" ? "page" : undefined}
            className={linkClass("projects")}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("journey")}
            aria-current={activeSection === "journey" ? "page" : undefined}
            className={linkClass("journey")}
          >
            Journey
          </button>
          <button
            onClick={() => scrollToSection("about")}
            aria-current={activeSection === "about" ? "page" : undefined}
            className={linkClass("about")}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            aria-current={activeSection === "contact" ? "page" : undefined}
            className={linkClass("contact")}
          >
            Contact
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden text-[var(--forest)] text-lg focus:outline-none"
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--forest)]/10 bg-[var(--cream)]/95 backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col gap-4 text-sm">
            <button
              onClick={() => {
                scrollToSection("projects");
                setMenuOpen(false);
              }}
              aria-current={activeSection === "projects" ? "page" : undefined}
              className={linkClass("projects")}
            >
              Projects
            </button>

            <button
              onClick={() => {
                scrollToSection("journey");
                setMenuOpen(false);
              }}
              aria-current={activeSection === "journey" ? "page" : undefined}
              className={linkClass("journey")}
            >
              Journey
            </button>

            <button
              onClick={() => {
                scrollToSection("about");
                setMenuOpen(false);
              }}
              aria-current={activeSection === "about" ? "page" : undefined}
              className={linkClass("about")}
            >
              About
            </button>

            <button
              onClick={() => {
                scrollToSection("contact");
                setMenuOpen(false);
              }}
              aria-current={activeSection === "contact" ? "page" : undefined}
              className={linkClass("contact")}
            >
              Contact
            </button>
          </div>
        </div>
      )}

      {/* Scroll progress indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--forest)]/10">
        <div
          className="h-full bg-[var(--forest)] origin-left"
          style={{
            transform: `scaleX(${scrollProgress})`,
            transition: prefersReducedMotion
              ? "none"
              : "transform 120ms linear",
          }}
        />
      </div>
    </motion.nav>
  );
}
