import { Suspense } from "react";
import { home } from "@/data/homepage";
import { siteUrl } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { personSchema } from "@/lib/structured-data";
import { profile } from "@/data/profile";
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
  ...pageMetadata("/", home.metadataTitle, home.metadataDescription, true),
  metadataBase: new URL(siteUrl),
  title: { default: home.metadataTitle, template: `%s | ${profile.name}` },
  applicationName: profile.name,
  authors: [{ name: profile.name }],
  creator: profile.name,
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <JsonLd data={personSchema} />
        <Suspense fallback={null}><GoogleAnalytics /></Suspense>
      </body>
    </html>
  );
}
