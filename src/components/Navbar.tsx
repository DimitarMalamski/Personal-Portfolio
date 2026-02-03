export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--cream)]/80 backdrop-blur-md border-b border-[var(--forest)]/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-sm font-semibold tracking-tight text-[var(--forest)]">
          DM
        </span>

        <div className="flex gap-6 text-sm text-[var(--forest)]/70">
          <a href="#projects" className="hover:text-[var(--forest)]">
            Projects
          </a>
          <a href="#journey" className="hover:text-[var(--forest)]">
            Journey
          </a>
          <a href="#about" className="hover:text-[var(--forest)]">
            About
          </a>
          <a href="#contact" className="hover:text-[var(--forest)]">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
