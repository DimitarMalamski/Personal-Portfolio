"use client";

import { useEffect, useRef } from "react";
import { animateHeroExit } from "@/animations/heroAnimations";
import { initHeroParallax } from "@/animations/heroParallax";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !blobRef.current) return;

    animateHeroExit(heroRef.current);
    const cleanupParallax = initHeroParallax(blobRef.current);

    return () => {
      cleanupParallax();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        ref={blobRef}
        className="absolute w-125 h-125 bg-linear-to-r from-blue-500 to-purple-500 opacity-30 blur-3xl rounded-full transition-transform duration-300"
      />

      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Full-stack software engineer
        </h1>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl sm:max-w-2xl mx-auto mb-10">
          I build scalable web applications with modern technologies.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
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
