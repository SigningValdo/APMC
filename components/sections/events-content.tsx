"use client"

import { useState } from "react"
import { useTranslation } from "@/hooks/use-translation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Clock, Users, ChevronRight } from "lucide-react"

export function EventsContent() {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState("all")

  const upcomingEvents = [
    {
      id: 1,
      title: "Formation sur les nouveaux textes réglementaires",
      date: "2024-02-15",
      time: "09:00 - 17:00",
      location: "Hôtel Hilton, Yaoundé",
      category: "formation",
      participants: 45,
      status: "upcoming",
      description: "Formation intensive sur les dernières évolutions réglementaires des marchés publics au Cameroun.",
    },
    {
      id: 2,
      title: "Conférence Internationale sur la Transparence",
      date: "2024-03-20",
      time: "08:30 - 18:00",
      location: "Centre de Conférences de Yaoundé",
      category: "conference",
      participants: 150,
      status: "upcoming",
      description: "Conférence sur les meilleures pratiques de transparence dans les marchés publics en Afrique.",
    },
    {
      id: 3,
      title: "Atelier Pratique : Évaluation des Offres",
      date: "2024-04-10",
      time: "14:00 - 17:00",
      location: "Siège APMC, Yaoundé",
      category: "workshop",
      participants: 25,
      status: "upcoming",
      description: "Atelier pratique sur les techniques d'évaluation des offres dans les marchés publics.",
    },
  ]

  const pastEvents = [
    {
      id: 4,
      title: "Séminaire sur la Dématérialisation",
      date: "2024-01-18",
      time: "09:00 - 16:00",
      location: "Hôtel Mont Fébé, Yaoundé",
      category: "seminar",
      participants: 80,
      status: "past",
      description: "Séminaire sur les enjeux de la dématérialisation des procédures de marchés publics.",
    },
    {
      id: 5,
      title: "Formation Certification Niveau 1",
      date: "2023-12-05",
      time: "08:00 - 18:00",
      location: "Centre de Formation APMC",
      category: "formation",
      participants: 35,
      status: "past",
      description: "Formation certifiante niveau 1 pour les praticiens des marchés publics.",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "formation":
        return "bg-blue-100 text-blue-800"
      case "conference":
        return "bg-purple-100 text-purple-800"
      case "workshop":
        return "bg-green-100 text-green-800"
      case "seminar":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "formation":
        return t("events.category.formation", "Formation")
      case "conference":
        return t("events.category.conference", "Conférence")
      case "workshop":
        return t("events.category.workshop", "Atelier")
      case "seminar":
        return t("events.category.seminar", "Séminaire")
      default:
        return category
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
          {t("events.title", "Événements & Formations")}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t(
            "events.subtitle",
            "Découvrez notre agenda d'événements, formations et conférences pour développer vos compétences en marchés publics",
          )}
        </p>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="upcoming">{t("events.tabs.upcoming", "À venir")}</TabsTrigger>
          <TabsTrigger value="past">{t("events.tabs.past", "Passés")}</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Badge className={getCategoryColor(event.category)}>{getCategoryLabel(event.category)}</Badge>
                    <div className="text-right text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(event.date).toLocaleDateString("fr-FR")}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-heading">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{event.description}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {event.participants} participants inscrits
                    </div>
                  </div>

                  <Button className="w-full" variant="default">
                    {t("events.register", "S'inscrire")}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event) => (
              <Card key={event.id} className="opacity-75">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Badge className={getCategoryColor(event.category)}>{getCategoryLabel(event.category)}</Badge>
                    <div className="text-right text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(event.date).toLocaleDateString("fr-FR")}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-heading">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{event.description}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {event.participants} participants
                    </div>
                  </div>

                  <Button className="w-full bg-transparent" variant="outline" disabled>
                    {t("events.completed", "Événement terminé")}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
