export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[var(--bg-about)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-sm uppercase tracking-wider text-[var(--amber)]">
            About me
          </span>

          <h2 className="text-4xl font-bold tracking-tight mt-3 mb-6 text-[var(--forest)]">
            Building with intention
          </h2>

          <p className="text-lg text-[var(--forest)]/70">
            I approach software the way an architect approaches buildings — with
            respect for structure, clarity, and the people who will inhabit the
            space.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-[var(--forest)]/80 text-base sm:text-lg leading-relaxed">
            <p>
              Code should be readable. Systems should be understandable.
              Solutions should solve real problems — not just pass tests.
            </p>

            <p>
              My path into engineering wasn’t linear. I started by taking things
              apart, then building small applications, and eventually designing
              full systems. Each step revealed new patterns and better
              questions.
            </p>

            <p>
              When I’m not coding, I’m usually learning about distributed
              systems, sketching interface ideas, or refining how things fit
              together. I believe strong engineers think beyond their immediate
              domain.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10">
              <div>
                <h3 className="font-semibold text-[var(--forest)] mb-2">
                  Systems Thinking
                </h3>
                <p className="text-sm text-[var(--forest)]/70">
                  Understanding how parts connect matters more than optimizing
                  isolated pieces.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[var(--forest)] mb-2">
                  Intentional Design
                </h3>
                <p className="text-sm text-[var(--forest)]/70">
                  Every decision should have a reason. Defaults are still
                  choices.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[var(--forest)] mb-2">
                  Continuous Learning
                </h3>
                <p className="text-sm text-[var(--forest)]/70">
                  Expertise is a journey, not a destination.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[var(--forest)] mb-2">
                  Human-Centered
                </h3>
                <p className="text-sm text-[var(--forest)]/70">
                  Technology should serve people — not the other way around.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className="
              rounded-2xl p-8
              bg-[var(--forest)]/5
              border border-[var(--forest)]/10
              aspect-[4/3]
              flex flex-col justify-end
              overflow-hidden
            "
            >
              <div
                className="
                absolute inset-0
                bg-[linear-gradient(to_right,rgba(40,54,24,0.05)_1px,transparent_1px),
                    linear-gradient(to_bottom,rgba(40,54,24,0.05)_1px,transparent_1px)]
                bg-[size:24px_24px]
              "
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[var(--burnt)] flex items-center justify-center shadow-lg">
                  <span className="text-[var(--cream)] text-sm">📍</span>
                </div>
              </div>

              <div className="relative z-10 mt-auto text-center pt-6">
                <h4 className="font-semibold text-[var(--forest)] mb-1">
                  Based in Eindhoven
                </h4>

                <p className="text-sm text-[var(--forest)]/70 mb-6">
                  Open to remote opportunities and relocation for the right
                  team.
                </p>

                <a
                  href="#contact"
                  className="
                  inline-flex items-center justify-center
                  w-full px-6 py-3 rounded-lg
                  border border-[var(--forest)]
                  text-[var(--forest)]
                  font-medium
                  transition-colors
                  hover:bg-[var(--forest)]
                  hover:text-[var(--cream)]
                "
                >
                  Let’s connect
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
