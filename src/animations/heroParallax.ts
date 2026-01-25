export function initHeroParallax(blob: HTMLDivElement, strength = 40) {
  const handleMouseMove = (e: MouseEvent) => {
    const { innerWidth, innerHeight } = window;

    const x = (e.clientX / innerWidth - 0.5) * strength;
    const y = (e.clientY / innerHeight - 0.5) * strength;

    blob.style.transform = `translate(${x}px, ${y}px)`;
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}
