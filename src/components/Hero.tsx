export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--bg-hero)]">
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="scroll-cue">↓</div>
      </div>
      <div
        aria-hidden
        className="
          absolute top-[-20%] left-[10%]
          w-[800px] h-[800px]
          rounded-full
          bg-[radial-gradient(circle_at_center,rgba(40,54,24,0.12),transparent_65%)]
          blur-3xl
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          <div className="max-w-2xl">
            <span className="text-sm uppercase tracking-widest text-[var(--forest)]/60">
              Full-stack developer
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mt-4 mb-6 text-[var(--forest)]">
              Dimitar Malamski
            </h1>

            <div className="flex items-center gap-2 text-sm text-[var(--forest)]/60 mb-6">
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
            </div>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[var(--forest)]/65 mb-10">
              I build scalable web applications with modern technologies and a
              focus on clarity, structure, and long-term maintainability.
            </p>

            <div className="flex items-center gap-4">
              <a className="px-6 py-3 rounded-lg bg-[var(--forest)] text-[var(--cream)] font-medium">
                See my work ↓
              </a>

              <a className="px-6 py-3 rounded-lg border border-[var(--forest)] text-[var(--forest)] font-medium">
                Get in touch
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
            <div className="relative">
              <div
                aria-hidden
                className="
    absolute -top-6 -right-10
    w-[260px] h-[260px]
    rounded-3xl
    border border-[var(--forest)]/10
    rotate-12
  "
              />

              <div
                aria-hidden
                className="
    absolute top-12 right-4
    w-[220px] h-[220px]
    rounded-3xl
    border border-[var(--olive)]/15
    -rotate-6
  "
              />

              <div
                aria-hidden
                className="
        absolute -inset-4
        rounded-3xl
        bg-[var(--forest)]/5
      "
              />

              <div
                className="
        relative
        w-[320px] xl:w-[360px]
        aspect-[3/4]
        rounded-2xl
        overflow-hidden
      "
              >
                <img
                  src="/me.jpg"
                  alt="Portrait of Dimitar Malamski"
                  className="
          w-full h-full object-cover
          saturate-[0.9]
          contrast-[0.95]
          grayscale-[5%]
        "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
