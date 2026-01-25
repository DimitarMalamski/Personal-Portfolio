export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Full-stack software engineer
      </h1>

      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
        I build scalable web applications with modern technologies.
      </p>

      <div className="flex gap-4">
        <button className="px-6 py-3 rounded-lg bg-black text-white hover:opacity-80 transition">
          View Projects
        </button>
        <button className="px-6 py-3 rounded-lg border border-black hover:bg-black hover:text-white transition">
          Download CV
        </button>
      </div>
    </section>
  );
}
