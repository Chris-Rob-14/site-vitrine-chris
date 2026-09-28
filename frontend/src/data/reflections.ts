import type { ReflectionCard } from "./types";

export const reflections: ReflectionCard[] = [
  {
    number: 1,
    image: "/skill-cards/1-un-excel-derriere-chaque-outil.jpg",
    title: "Transformer un Excel en application web",
    hook: "70% des outils internes que j'ai rencontrés commencent par un simple Excel.",
    intro:
      "Un tableur n'est souvent que la partie visible du problème. Derrière se cachent généralement :",
    flow: [
      "Règles métier",
      "Validations",
      "Workflow",
      "Historique",
      "Reporting",
    ],
    closing:
      "Ma méthode : identifier les données, comprendre les règles, cartographier le workflow, construire une interface adaptée puis automatiser les traitements.",
  },
  {
    number: 2,
    image: "/skill-cards/2-copier-coller.png",
    title: "Le coût caché du copier-coller",
    hook: "5 minutes perdues par jour représentent plus de 20 heures par an.",
    intro:
      "L'automatisation n'est pas toujours spectaculaire. Parfois, elle consiste simplement à supprimer :",
    flow: ["Copier", "Coller", "Retaper", "Vérifier"],
    closing:
      "Des tâches répétitives qui génèrent des erreurs et mobilisent inutilement les équipes.",
  },
  {
    number: 4,
    image: "/skill-cards/4-tdd-structure.jpg",
    title: "Les 5 questions que je me pose avant chaque fonctionnalité",
    hook: "Une fonctionnalité mal définie coûte souvent plus cher que son développement.",
    intro: "Avant de développer, je cherche toujours à répondre à :",
    bullets: [
      "Quelle est l'entrée ?",
      "Quelle est la sortie ?",
      "Quelles sont les règles ?",
      "Quels sont les cas d'erreur ?",
      "Qui est responsable ?",
    ],
    closing: "Ces cinq questions révèlent souvent l'architecture nécessaire.",
  },
  {
    number: 10,
    image: "/skill-cards/10-low-code-no-code.jpg",
    title:
      "La meilleure solution n'est pas toujours celle qui demande le plus de code",
    hook: "Parfois quelques heures de configuration remplacent plusieurs semaines de développement.",
    intro:
      "Avant de lancer un développement spécifique, je cherche toujours à identifier la solution la plus adaptée au besoin. Selon le contexte, cela peut être :",
    flow: ["Low-Code", "No-Code", "Automatisation", "Développement sur mesure"],
    tools: ["Damaaas", "WeWeb", "Bubble", "Airtable", "Bolt", "V0"],
    closing:
      "L'objectif n'est pas de coder plus. L'objectif est de résoudre le problème efficacement.",
  },
  {
    number: 3,
    image: "/skill-cards/3-reflechir-avant-coder.jpg",
    title: "Pourquoi je réfléchis avant de coder",
    hook: "Corriger une erreur d'architecture coûte souvent plus cher que l'éviter.",
    intro: "Avant d'écrire du code, je cherche à comprendre :",
    flow: ["Entrée", "Traitement", "Sortie", "Erreurs possibles"],
    closing:
      "Le TDD m'aide à identifier les comportements attendus avant même de penser à l'implémentation. Les responsabilités apparaissent alors plus naturellement.",
  },
  {
    number: 7,
    image: "/skill-cards/7-role-frontend.jpg",
    title: "Le rôle réel du Front-End",
    hook: "Le front guide l'utilisateur. Le back applique les règles métier.",
    intro: "J'essaie toujours de garder une séparation claire :",
    bullets: [
      "Front : affichage, validation légère, expérience utilisateur",
      "Back : validation métier, traitements, persistance",
    ],
    closing: "Cette approche réduit les bugs et simplifie les évolutions.",
  },
  {
    number: 5,
    image: "/skill-cards/5-le-controller-orchestrateur.jpg",
    title: "Pourquoi un contrôleur ne devrait presque rien faire",
    hook: "1 responsabilité = 1 rôle.",
    intro:
      "Le contrôleur est souvent le premier endroit où l'on ajoute du code. Pourtant son rôle est simple :",
    flow: ["Recevoir", "Transmettre", "Répondre"],
    closing:
      "La logique métier appartient aux services. L'accès aux données appartient aux repositories. Un contrôleur léger est plus facile à maintenir, tester et faire évoluer.",
  },
  {
    number: 6,
    image: "/skill-cards/6-quand-creer-un-service.jpg",
    title: "Quand créer un nouveau service ?",
    hook: "La vraie question n'est pas où mettre le code, mais qui doit en être responsable.",
    intro: "Lorsque je développe une fonctionnalité, je me demande :",
    bullets: [
      "Cette logique sera-t-elle réutilisée ?",
      "Cette responsabilité est-elle clairement définie ?",
      "Cette partie risque-t-elle d'évoluer ?",
    ],
    closing:
      "Si la réponse est oui, il est souvent temps d'isoler un service dédié.",
  },
  {
    number: 9,
    image: "/skill-cards/9-bonnes-pratiques.jpg",
    title: "Les conventions valent parfois plus qu'un framework",
    hook: "Un développeur passe souvent plus de temps à lire du code qu'à en écrire.",
    intro:
      "La qualité logicielle ne repose pas uniquement sur les technologies utilisées. Des conventions simples permettent souvent de réduire considérablement la charge mentale :",
    flow: [
      "Nommage cohérent",
      "Architecture claire",
      "Responsabilités explicites",
      "Code lisible",
    ],
    closing:
      "J'essaie de privilégier des noms explicites, une structure prévisible et des responsabilités bien séparées. Un projet maintenable est avant tout un projet compréhensible.",
  },
  {
    number: 8,
    image: "/skill-cards/8-docker-container.jpg",
    title: "Docker : le 20/80 qui change tout",
    hook: "Quelques commandes suffisent pour reproduire un environnement complet.",
    intro:
      "Je ne cherche pas à devenir expert DevOps. Je cherche à disposer d'environnements :",
    flow: ["Reproductibles", "Portables", "Documentés", "Faciles à déployer"],
    closing:
      "Docker apporte souvent 80% de la valeur avec 20% des connaissances.",
  },
];
