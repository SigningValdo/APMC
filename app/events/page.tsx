import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EventsContent } from "@/components/sections/events-content"

export const metadata: Metadata = {
  title: "Événements - Agenda et Formations",
  description:
    "Découvrez notre agenda d'événements, formations, conférences et ateliers sur les marchés publics au Cameroun et en Afrique centrale.",
  keywords: ["événements", "formations", "conférences", "ateliers", "agenda", "marchés publics", "Cameroun"],
  openGraph: {
    title: "Événements - APMC/CAPPP",
    description: "Agenda des événements et formations de l'Association",
    type: "website",
  },
  alternates: {
    canonical: "/events",
    languages: {
      fr: "/events",
      en: "/en/events",
    },
  },
}

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <EventsContent />
      </main>
      <Footer />
    </div>
  )
}
