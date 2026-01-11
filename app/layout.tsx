import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arturo.dev"),
  title: {
    default: "Arturo | Full-Service Digital Freelancer",
    template: "%s | Arturo",
  },
  description:
    "Full-service digital freelancer specializing in development, design, and strategy. Helping businesses build impactful digital experiences.",
  keywords: [
    "freelancer",
    "web development",
    "UI/UX design",
    "digital strategy",
    "consultant",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Arturo" }],
  creator: "Arturo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arturo.dev",
    siteName: "Arturo Portfolio",
    title: "Arturo | Full-Service Digital Freelancer",
    description: "Development. Design. Strategy.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arturo - Digital Freelancer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arturo | Full-Service Digital Freelancer",
    description: "Development. Design. Strategy.",
    creator: "@arturo",
    images: ["/og-image.png"],
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
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0F0F1A" },
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-surface-dark text-text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
