import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { ThemeProvider } from "@/components/theme-provider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Christopher Robine | Product Engineer",
    template: "%s | Christopher Robine",
  },
  description:
    "Portfolio de Christopher Robine, Product Engineer et chef de projet technique specialise dans la modernisation d'applications, l'architecture et le pilotage de projets digitaux.",
  applicationName: "Site vitrine Christopher Robine",
  keywords: [
    "Christopher Robine",
    "Product Engineer",
    "Chef de projet technique",
    "Portfolio",
    "Architecture applicative",
    "Next.js",
  ],
  authors: [{ name: "Christopher Robine" }],
  creator: "Christopher Robine",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Christopher Robine | Product Engineer",
    description:
      "Decouvrez le parcours, les projets et les expertises de Christopher Robine en architecture applicative, modernisation et delivery produit.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Christopher Robine | Product Engineer",
    description:
      "Portfolio de Christopher Robine, specialise en modernisation d'applications et pilotage technique.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${outfit.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
