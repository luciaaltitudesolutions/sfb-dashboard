import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sistema Financiero Boliviano - Monitor de Cartera",
  description:
    "Dashboard de monitoreo de cartera del sistema financiero boliviano. Datos de ASFI Bolivia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
