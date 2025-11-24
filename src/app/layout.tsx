import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charlas con Café — Sistemas Akúbica",
  description: "Calendario y nominaciones de Charlas con Café.",
  icons: {
    icon: "/icona3v2.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-black">{children}</body>
    </html>
  );
}
