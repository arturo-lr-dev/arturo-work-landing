import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import { SmoothScroll, BackgroundField } from "@/components/motion";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arturo.work"),
  title: {
    default: "Arturo Legaspi | Tech Lead",
    template: "%s | Arturo Legaspi",
  },
  description:
    "Tech Lead con más de 10 años de experiencia, especializado en arquitectura de software, gestión de equipos y soluciones digitales para el sector bancario.",
  keywords: [
    "Tech Lead",
    "arquitectura de software",
    "Java",
    "Spring",
    "microservicios",
    "banca digital",
    "liderazgo técnico",
    "Big Data",
  ],
  authors: [{ name: "Arturo Legaspi", url: "https://arturo.work" }],
  creator: "Arturo Legaspi",
  alternates: {
    canonical: "https://arturo.work",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://arturo.work",
    siteName: "Arturo Legaspi",
    title: "Arturo Legaspi | Tech Lead",
    description:
      "Arquitectura de software, equipos de ingeniería y soluciones digitales para el sector financiero.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1424,
        height: 752,
        alt: "Arturo Legaspi — Tech Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arturo Legaspi | Tech Lead",
    description:
      "Arquitectura de software, equipos de ingeniería y soluciones digitales para el sector financiero.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#EBECE6" },
    { media: "(prefers-color-scheme: dark)", color: "#111114" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} antialiased bg-paper text-ink`}
      >
        <SmoothScroll />
        <BackgroundField />
        {children}
      </body>
    </html>
  );
}
