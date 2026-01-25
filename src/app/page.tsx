import Hero from "@/components/Hero";
import Projects from "@/sections/Projects";
import About from "@/sections/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="max-w-7xl mx-auto">
        <Projects />
      </div>
      <About />
    </main>
  );
}
