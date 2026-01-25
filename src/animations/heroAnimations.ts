import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateHeroExit(hero: HTMLElement) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: hero,
      start: "bottom top",
      end: "bottom+=200 top",
      scrub: true,
    },
  });

  tl.to(hero, {
    opacity: 0,
    y: -60,
    ease: "none",
    clearProps: "transform",
  });
}
