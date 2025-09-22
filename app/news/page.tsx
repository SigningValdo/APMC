import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import NewsClientPage from "./NewsClientPage"

export const metadata: Metadata = {
  title: "Actualités - Dernières Nouvelles des Marchés Publics",
  description:
    "Restez informé des dernières actualités, réglementations et événements dans le domaine des marchés publics au Cameroun et en Afrique centrale.",
  keywords: ["actualités", "news", "marchés publics", "réglementation", "événements", "formation", "Cameroun"],
  openGraph: {
    title: "Actualités - APMC/CAPPP",
    description: "Dernières nouvelles et actualités des marchés publics au Cameroun",
    type: "website",
  },
  alternates: {
    canonical: "/news",
    languages: {
      fr: "/news",
      en: "/en/news",
    },
  },
}

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <NewsClientPage />
      </main>
      <Footer />
    </div>
  )
}
