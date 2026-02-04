"use client";

import { scrollToSection } from "@/utils/scroll";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function Navbar() {
  const activeSection = useActiveSection();
  const scrollProgress = useScrollProgress();

  const linkClass = (id: string) =>
    `relative transition ${
      activeSection === id
        ? "text-[var(--forest)]"
        : "text-[var(--forest)]/60 hover:text-[var(--forest)]"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--cream)]/80 backdrop-blur-md border-b border-[var(--forest)]/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("top")}
          className="text-sm font-semibold tracking-tight text-[var(--forest)] hover:opacity-80 transition"
        >
          DM
        </button>

        <div className="flex gap-6 text-sm">
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
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--forest)]/10">
        <div
          className="h-full bg-[var(--forest)] origin-left transition-transform"
          style={{
            transform: `scaleX(${scrollProgress})`,
          }}
        />
      </div>
    </nav>
  );
}
