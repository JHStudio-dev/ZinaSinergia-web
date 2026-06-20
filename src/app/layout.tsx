import type { Metadata } from "next";
import { Cormorant_Garamond, Instrument_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zina Sinergia — Conecta. Inspira. Transforma.",
  description:
    "Marca personal de Zina Sinergia: coaching, conferencias y acompañamiento humano para reconectar con tu propósito y avanzar con intención.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ivory text-carbon">{children}</body>
    </html>
  );
}
