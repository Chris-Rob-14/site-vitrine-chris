import type { ProjectCategory } from "./types";

export const realisationsPage = {
  contactLink: "Tous les moyens de contact",
  title: "Réalisations",
  metadataTitle: "Réalisations numériques",
  description: "Les contributions de Christopher Robine à des projets numériques : analyse fonctionnelle, pilotage, développement, intégration et mise en production d'applications métier.",
  subtitle: "Des besoins métier aux solutions réellement utilisées",
  introduction: "Ces réalisations illustrent différentes contributions : analyser un besoin, structurer un projet, développer, intégrer ou mettre en production. Chaque exemple précise ce qui a été réalisé, à la croisée du métier, du projet et de la technique.",
  projectsTitle: "Des contributions, dans leur contexte",
  labels: {
    role: "Mon rôle",
    context: "Contexte",
    contributions: "Contributions",
    deliverables: "Livrables",
    results: "Résultats documentés",
    skills: "Compétences mobilisées",
    tags: "Pratiques et technologies",
  },
  technicalTitle: "La technique au service de la solution",
  technicalDescription: "Ma pratique du développement m'aide à comprendre les contraintes d'implémentation, à dialoguer avec les développeurs et à évaluer les conséquences de certains choix techniques. Prototyper ou réaliser une solution garde ainsi un lien direct avec le besoin métier, les usages et la maintenance à venir.",
  facetsTitle: "Deux autres lectures de ces réalisations",
  facets: [
    { href: "/projet", title: "Projet & Business Analysis", description: "Approfondir ma manière d'analyser, de cadrer et de coordonner les projets.", linkLabel: "Découvrir la démarche projet" },
    { href: "/formation", title: "Formation & transmission", description: "Découvrir l'activité de transmission en préparation, nourrie par ces pratiques de terrain.", linkLabel: "Explorer les interventions envisagées" },
  ],
  ctaTitle: "Échangeons autour d'un projet ou d'un besoin numérique",
  ctaDescription: "Un recrutement, un sujet applicatif ou un besoin pédagogique ? Je serai ravi d'échanger avec vous sur votre contexte et vos attentes.",
  backLabel: "Retour à l'accueil",
  emailLabel: "M'écrire par e-mail",
  linkedinLabel: "Échanger sur LinkedIn",
};

export const projectCategoryLabels: Record<ProjectCategory, string> = {
  "business-analysis": "Business Analysis",
  project: "Pilotage",
  development: "Développement",
};
