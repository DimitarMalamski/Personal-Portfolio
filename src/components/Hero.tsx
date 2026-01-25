"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!blobRef.current) return;

      const { innerWidth, innerHeight } = window;

      const x = (e.clientX / innerWidth - 0.5) * 40;
      const y = (e.clientY / innerHeight - 0.5) * 40;

      blobRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        ref={blobRef}
        className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-3xl rounded-full transition-transform duration-300"
      />

      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Full-stack software engineer
        </h1>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
          I build scalable web applications with modern technologies.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-black text-white transition-transform hover:-translate-y-1 hover:shadow-lg">
            View Projects
          </button>
          <button className="px-6 py-3 rounded-lg border border-black transition-all hover:bg-black hover:text-white">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
