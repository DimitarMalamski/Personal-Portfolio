export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--bg-hero)]">
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

            <p className="text-lg md:text-xl leading-relaxed text-[var(--forest)]/65 mb-10">
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
