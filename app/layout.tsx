import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexuslab — Um novo começo",
  description: "Uma base simples para transformar ideias em experiências digitais.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
