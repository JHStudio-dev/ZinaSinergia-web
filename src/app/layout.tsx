import type { Metadata, Viewport } from "next";
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

const siteDescription =
  "Marca personal de Zina Sinergia: coaching, conferencias y acompañamiento humano para reconectar con tu propósito y avanzar con intención.";

export const metadata: Metadata = {
  title: "Zina Sinergia — Conecta. Inspira. Transforma.",
  description: siteDescription,
  keywords: [
    "Zina Sinergia",
    "coaching",
    "conferencias",
    "crecimiento personal",
    "transformación",
    "desarrollo personal",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Zina Sinergia",
    title: "Zina Sinergia — Conecta. Inspira. Transforma.",
    description: siteDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#14110b",
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
      <body className="min-h-full bg-night text-ivory">{children}</body>
    </html>
  );
}
