import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "nexuslab",
  description:
    "Conectando estudantes e desenvolvedores de tecnologia do Cariri. ",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
