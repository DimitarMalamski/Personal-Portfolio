import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateProjects(section: HTMLElement, cards: HTMLDivElement[]) {
  const title = section.querySelector("h2");
  if (!title) return;

  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
    },
  });

  tl.from(title, {
    opacity: 0,
    y: 18,
    duration: 0.5,
    ease: "power3.out",
    clearProps: "transform",
  });

  tl.from(
    cards,
    {
      opacity: 0,
      y: 16,
      scale: 0.98,
      duration: 0.45,
      stagger: 0.1,
      ease: "power3.out",
      clearProps: "transform",
    },
    "-=0.2",
  );
}
