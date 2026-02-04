"use client";

import { scrollToSection } from "@/utils/scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--cream)]/80 backdrop-blur-md border-b border-[var(--forest)]/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("top")}
          className="text-sm font-semibold tracking-tight text-[var(--forest)] hover:opacity-80 transition"
        >
          DM
        </button>

        <div className="flex gap-6 text-sm text-[var(--forest)]/70">
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-[var(--forest)]"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("journey")}
            className="hover:text-[var(--forest)]"
          >
            Journey
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-[var(--forest)]"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-[var(--forest)]"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
