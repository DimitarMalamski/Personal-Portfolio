import Hero from "@/components/Hero";
import Projects from "@/sections/Projects";
import About from "@/sections/About";
import Journey from "@/sections/Journey";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Journey />
      <About />
      <Contact />
    </main>
  );
}
