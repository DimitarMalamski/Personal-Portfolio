export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 py-24 sm:py-32 px-6 max-w-4xl mx-auto bg-[var(--cream)]"
    >
      <h2 className="text-4xl font-bold tracking-tight mb-12 text-center text-[var(--forest)]">
        About me
      </h2>

      <div className="text-base sm:text-lg leading-relaxed space-y-6 text-[var(--forest)]/75">
        <p>
          I’m a full-stack software engineering student with a strong interest
          in building scalable, well-structured web applications.
        </p>

        <p>
          I enjoy working across the stack — from designing clean frontend
          experiences to building reliable backend services and CI/CD pipelines.
        </p>

        <ul className="list-disc list-inside space-y-2 text-[var(--forest)]/80">
          <li>Studying ICT at Fontys University of Applied Sciences</li>
          <li>Experience with Java, Spring Boot, Angular, and React</li>
          <li>Comfortable with Docker, Git, and CI/CD workflows</li>
          <li>Interested in backend-heavy and full-stack roles</li>
        </ul>

        <p>
          Currently focused on improving my engineering depth and preparing for
          software engineering internships.
        </p>
      </div>
    </section>
  );
}
