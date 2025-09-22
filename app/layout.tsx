import type React from "react";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "APMC/CAPPP - Association des Praticiens des Marchés Publics au Cameroun",
    template: "%s | APMC/CAPPP",
  },
  description:
    "Association professionnelle des praticiens des marchés publics au Cameroun. Promotion des bonnes pratiques, formation et transparence dans les marchés publics.",
  generator: "Next.js",
  keywords: [
    "marchés publics",
    "Cameroun",
    "APMC",
    "CAPPP",
    "procurement",
    "public procurement",
    "formation",
    "certification",
    "transparence",
    "gouvernance",
    "Yaoundé",
  ],
  authors: [{ name: "APMC/CAPPP", url: "https://apmc-cameroon.org" }],
  creator: "APMC/CAPPP",
  publisher: "APMC/CAPPP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://apmc-cameroon.org"),
  alternates: {
    canonical: "/",
    languages: {
      fr: "/fr",
      en: "/en",
    },
  },
  openGraph: {
    title: "APMC/CAPPP - Association des Praticiens des Marchés Publics",
    description:
      "Association professionnelle des praticiens des marchés publics au Cameroun. Promotion des bonnes pratiques et transparence.",
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    url: "https://apmc-cameroon.org",
    siteName: "APMC/CAPPP",
    images: [
      {
        url: "/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "APMC/CAPPP - Association des Praticiens des Marchés Publics au Cameroun",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "APMC/CAPPP - Association des Praticiens des Marchés Publics",
    description:
      "Association professionnelle des praticiens des marchés publics au Cameroun",
    images: ["/placeholder.jpg"],
    creator: "@apmc_cameroon",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/placeholder-logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/placeholder-logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/placeholder-logo.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
      </head>
      <body
        className={`font-sans ${dmSans.variable} ${spaceGrotesk.variable} ${GeistMono.variable}`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
