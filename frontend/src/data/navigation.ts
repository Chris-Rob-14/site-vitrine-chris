export interface NavigationItem {
  href: string;
  label: string;
}

export const navigation: NavigationItem[] = [
  { href: "/", label: "Accueil" },
  { href: "/projet", label: "Projet" },
  { href: "/formation", label: "Formation" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];
