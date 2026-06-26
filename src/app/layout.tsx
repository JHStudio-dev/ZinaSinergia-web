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

const siteUrl = "https://zinasinergia.com";
const siteTitle =
  "Zina Sinergia | Mentorías, conferencias y liderazgo femenino";
const siteDescription =
  "Zina Sinergia acompaña a mujeres a fortalecer su claridad, liderazgo y propósito a través de mentorías, conferencias y experiencias de crecimiento.";
const ogImage = "/images/zina-confe.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Zina Sinergia",
    "mentorías para mujeres",
    "liderazgo femenino",
    "conferencista en Honduras",
    "coaching para mujeres",
    "crecimiento personal",
    "propósito",
    "claridad",
    "mentoría individual",
    "mentoría grupal",
    "conferencias para mujeres",
  ],
  authors: [{ name: "Zina Sinergia" }],
  creator: "Zina Sinergia",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_HN",
    url: siteUrl,
    siteName: "Zina Sinergia",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: ogImage,
        alt: "Zina Sinergia: mentorías, conferencias y liderazgo femenino",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0c0e",
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
      <body className="min-h-full bg-night text-ivory">
        <div aria-hidden className="zs-grain zs-grain--fixed" />
        {children}
      </body>
    </html>
  );
}
