export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-hero)]">
      <div className="absolute w-125 h-125 bg-linear-to-r from-[var(--olive)] via-[var(--amber)] to-[var(--burnt)] opacity-25 blur-3xl rounded-full" />

      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-[var(--forest)]">
          Full-stack software engineer
        </h1>

        <p className="text-lg md:text-xl leading-relaxed text-[var(--forest)]/70 max-w-xl sm:max-w-2xl mx-auto mb-10">
          I build scalable web applications with modern technologies.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-[var(--forest)] text-[var(--cream)]">
            View Projects
          </button>

          <button className="px-6 py-3 rounded-lg border border-[var(--forest)] text-[var(--forest)]">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
