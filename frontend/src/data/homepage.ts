import type { ContentPillar } from "./types";
import { profile } from "./profile";

export const home = {
  introduction: "Analyste fonctionnel et chef de projet applicatif avec une forte culture technique. J'interviens de l'analyse du besoin jusqu'à la mise en production. Je prépare également une offre d'interventions pour transmettre ces pratiques auprès d'étudiants et de professionnels.",
  facetsTitle: "Trois facettes, une même démarche",
  facetsIntroduction: "Comprendre les besoins, structurer les projets et construire des solutions utiles, avec l'envie de transmettre ces pratiques.",
  trainingStatus: "Offre d'interventions en préparation",
  proofTitle: "Quelques repères concrets",
  detailsTitle: "Pour aller plus loin",
  details: ["Mon parcours et mes expériences", "Qui suis-je ?", "Mes compétences métier et techniques", "Mes réflexions professionnelles"],
  ctaTitle: "Échangeons autour de votre besoin",
  contact: "Un recrutement, un projet numérique ou un programme pédagogique à construire ? Je serai ravi d'échanger avec vous sur votre contexte et vos attentes.",
  metadataTitle: `${profile.name} | Projet, Business Analysis & Numérique`,
  metadataDescription: "Christopher Robine, analyste fonctionnel et chef de projet applicatif : du besoin métier à la solution numérique. Réalisations techniques et offre de transmission en préparation.",
};

export const homeFacets = [
  {
    id: "project",
    href: "/projet",
    linkLabel: "Explorer cette facette",
    title: "Projet & Business Analysis",
    description: "Analyser le besoin, cadrer et prioriser, concevoir la réponse fonctionnelle et coordonner les échanges métier/IT. Accompagner le projet jusqu'à la recette et la mise en production.",
  },
  {
    id: "training",
    href: "/formation",
    linkLabel: "Explorer cette facette",
    title: "Formation & transmission",
    description: "Préparer la transmission de pratiques en pilotage de projet numérique, Business Analysis, Agile et culture Web, ainsi qu'en automatisation, IA métier et visibilité numérique.",
  },
  {
    id: "development",
    title: "Développement & réalisations",
    description: "M'appuyer sur une culture Web et full-stack pour comprendre les contraintes techniques, dialoguer avec les développeurs, prototyper et réaliser des solutions adaptées au besoin.",
  },
];

export const homeProofs = [
  { value: profile.validatedMetrics.analysisProjects, label: "Projets d'analyse fonctionnelle, de chiffrage et de conception de solutions" },
  { value: profile.validatedMetrics.productionProjects, label: "Projets livrés en production" },
  { value: profile.validatedMetrics.dailyUsers, label: "Collaborateurs utilisant quotidiennement les applications métier" },
];

export const about = {
  introduction: "Je me positionne avant tout comme un",
  emphasis: "analyste fonctionnel avec un socle de développement full stack",
  motivation:
    "Ce qui m'intéresse d'abord, c'est de comprendre le besoin, de clarifier le problème à résoudre et de construire une réponse utile, lisible et actionnable.",
  dailyWork:
    "Au quotidien, je travaille sur le recueil du besoin, le chiffrage, le découpage en lots, la priorisation, l'identification des risques et la coordination des acteurs, puis je mobilise le développement quand il permet de concrétiser la bonne solution. Mon objectif est d'aider à prendre de meilleures décisions avant, pendant et après l'exécution.",
};
export const aboutPillars: ContentPillar[] = [
  {
    title: "Analyse fonctionnelle",
    description:
      "Comprendre le besoin métier, poser le bon cadre et transformer une demande floue en sujet exploitable.",
  },
  {
    title: "Structuration",
    description:
      "Découper, chiffrer, prioriser et faire apparaître les dépendances, les risques et les arbitrages utiles.",
  },
  {
    title: "Exécution technique",
    description:
      "Concevoir et mettre en œuvre des solutions robustes quand la technique est le bon levier pour faire avancer le projet.",
  },
];
export const opportunity =
  "Je recherche aujourd'hui des opportunités d'Analyste Fonctionnel IT, Business Analyst ou Chef de Projet IT Junior dans lesquelles je pourrai mettre à profit ma double compétence métier et technique.";
export const contact =
  "Si vous avez besoin de clarifier un sujet, cadrer un projet, prioriser des évolutions ou transformer un besoin métier en plan d'action concret, je serai ravi d'en discuter avec vous.";
export const homepageStats = [
  { id: "experience", value: "4", label: "Ans d'expérience" },
  { id: "projects", value: "10", label: "Projets livrés" },
  { id: "focus", value: "100%", label: "Focus besoin" },
  { id: "code", value: "∞", label: "Lignes de code" },
];
