export type ProjectLink = {
  label: "github" | "live" | "case-study";
  url: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "careerpath",
    title: "CareerPath",
    category: "Individual Project · Full-stack application",
    summary:
      "A production-ready full-stack web application focused on professional software engineering practices such as CI/CD automation, testing, and scalable architecture, using job matching as a real-world domain.",
    description:
      "CareerPath is my individual project for Semester 3, designed to explore how modern full-stack applications are built, tested, and deployed in a professional environment. The system allows users to browse job listings, manage personal profiles, and receive AI-assisted job matching. The project places strong emphasis on CI/CD automation, software quality assurance, and architectural clarity, including containerization, multi-environment pipelines, extensive testing, and real-world deployment using Docker, Cloudflare, and a Raspberry Pi.",
    tech: [
      "Java",
      "Spring Boot",
      "Angular",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "CI/CD (GitLab)",
      "Flyway",
      "SonarQube",
      "Testcontainers",
      "WebSockets",
      "OpenAI API",
      "Cloudflare",
    ],
    featured: true,
    links: [
      {
        label: "github",
        url: "https://github.com/DimitarMalamski/CareerPath",
      },
      {
        label: "live",
        url: "https://careerpath-ip.com/",
      },
    ],
  },
  {
    slug: "sofft-dashboard",
    title: "SOFFT Dashboard",
    category:
      "Group Project · Agile software development · Full-stack application",
    summary:
      "A team-based dashboard application developed for a real client, focused on data visualisation, Agile collaboration, and frontend architecture using modern JavaScript frameworks.",
    description:
      "SOFFT Dashboard is a group project developed in collaboration with a real client (BAS World) as part of Semester 3. The application visualises sales and offer data through multiple interactive dashboards, including overview statistics, leaderboards, filtering mechanisms, and geographic insights. Within the team (Heptabytes), I acted as Scrum Master and frontend developer, contributing to Agile planning, Jira board management, sprint coordination, and the development of several frontend pages. The project emphasised teamwork, communication with stakeholders, and delivering incremental value through Scrum.",
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "JavaScript",
      "MySQL",
      "Docker",
      "Jira",
      "Scrum",
      "AWS",
    ],
    featured: true,
    links: [
      {
        label: "github",
        url: "https://github.com/DimitarMalamski/SOFFT-Dashboard",
      },
    ],
  },
  {
    slug: "eventflow",
    title: "Eventflow",
    category: "Individual Project · Full-stack application",
    summary:
      "A smart calendar web application for managing national holidays, personal events, reminders, and shared invitations.",
    description:
      "Eventflow is a full-stack individual project developed during Semester 2 at Fontys ICT. The application helps users track national holidays for selected countries, manage personal and shared events, receive reminders, and collaborate through invitations. The project emphasizes clean architecture, SOLID principles, authentication and authorization, and a structured development process including documentation, UML, testing, and deployment.",
    tech: [
      "C#",
      "ASP.NET MVC",
      "SQL Server",
      "JavaScript",
      "AJAX",
      "Entity Framework",
      "Bootstrap",
    ],
    featured: true,
    links: [
      {
        label: "github",
        url: "https://github.com/DimitarMalamski/Eventflow",
      },
      {
        label: "live",
        url: "https://i546327.luna.fhict.nl/",
      },
    ],
  },
];
