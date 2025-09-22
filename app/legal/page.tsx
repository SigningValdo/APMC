import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LegalContent } from "@/components/sections/legal-content"

export const metadata: Metadata = {
  title: "Mentions légales - Politique de confidentialité",
  description:
    "Mentions légales et politique de confidentialité de l'APMC/CAPPP. Conformité à la législation camerounaise et traitement des données personnelles.",
  keywords: [
    "mentions légales",
    "politique confidentialité",
    "RGPD",
    "données personnelles",
    "législation camerounaise",
  ],
  openGraph: {
    title: "Mentions légales - APMC/CAPPP",
    description: "Mentions légales et politique de confidentialité de l'Association",
    type: "website",
  },
  alternates: {
    canonical: "/legal",
    languages: {
      fr: "/legal",
      en: "/en/legal",
    },
  },
}

export default function LegalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <LegalContent />
      </main>
      <Footer />
    </div>
  )
}
