import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/sections/about-hero"
import { PresidentMessage } from "@/components/sections/president-message"
import { TeamSection } from "@/components/sections/team-section"
import { HistorySection } from "@/components/sections/history-section"

export const metadata: Metadata = {
  title: "À propos - Notre Histoire et Mission",
  description:
    "Découvrez l'histoire de l'APMC/CAPPP, notre mission et notre équipe dirigeante. Association des Praticiens des Marchés Publics au Cameroun depuis sa création.",
  keywords: ["APMC", "CAPPP", "histoire", "mission", "équipe", "marchés publics", "Cameroun", "gouvernance"],
  openGraph: {
    title: "À propos - APMC/CAPPP",
    description: "Découvrez l'histoire et la mission de l'Association des Praticiens des Marchés Publics au Cameroun",
    type: "website",
  },
  alternates: {
    canonical: "/about",
    languages: {
      fr: "/about",
      en: "/en/about",
    },
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <AboutHero />
        <PresidentMessage />
        <HistorySection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  )
}
