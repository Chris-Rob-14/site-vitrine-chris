export interface NavigationItem {
  href: string;
  label: string;
}

export const navigation: NavigationItem[] = [
  { href: "/projet", label: "Projet & BA" },
  { href: "/formation", label: "Formation" },
  { href: "#facets", label: "Mes facettes" },
  { href: "#approach", label: "Ma démarche" },
  { href: "#projects", label: "Réalisations" },
  { href: "#parcours", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];
