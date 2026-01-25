export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 supports-backdrop-filter:bg-white/40">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-semibold tracking-tight text-gray-900">
          Dimitar
        </span>

        <div className="flex gap-6 text-sm text-gray-600">
          <a
            href="#projects"
            className="relative hover:text-gray-900 transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-linear-to-r after:from-blue-500 after:to-purple-500 after:transition-all hover:after:w-full"
          >
            Projects
          </a>
          <a
            href="#about"
            className="relative hover:text-gray-900 transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-linear-to-r after:from-blue-500 after:to-purple-500 after:transition-all hover:after:w-full"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
}
