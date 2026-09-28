import type { SkillCategory } from "./types";

export const skillCategories: SkillCategory[] = [
  {
    id: "analysis",
    title: "Analyse & cadrage",
    skills: [
      "Recueil du besoin",
      "User stories",
      "MVP",
      "MoSCoW",
      "T-shirt sizing",
      "RACI",
    ],
  },
  {
    id: "delivery",
    title: "Pilotage & delivery",
    skills: [
      "Roadmap",
      "Gestion des risques",
      "Trello",
      "Jira",
      "Documentation",
      "GitLab",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      "Next.js",
      "React",
      "AngularJS",
      "Tailwind CSS",
      "Storybook",
      "shadcn/ui",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: ["Symfony", "PHP", "Swagger", "OpenAPI", "MySQL"],
  },
  {
    id: "architecture",
    title: "Architecture & qualité",
    skills: [
      "Architecture applicative",
      "Conventions de code",
      "Lisibilité du code",
      "Tests unitaires",
      "VS Code",
      "Linux",
    ],
  },
];
