"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, CheckCircle } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function MissionSection() {
  const { t, locale } = useTranslation()

  const items = [
    {
      icon: Target,
      title: locale === "fr" ? "Mission" : "Mission",
      description:
        locale === "fr"
          ? "Promouvoir l'excellence, la transparence et les bonnes pratiques dans les marchés publics camerounais."
          : "Promote excellence, transparency and best practices in Cameroonian public procurement.",
    },
    {
      icon: Eye,
      title: locale === "fr" ? "Vision" : "Vision",
      description:
        locale === "fr"
          ? "Être la référence en matière de formation et de certification des praticiens des marchés publics au Cameroun."
          : "To be the reference for training and certification of public procurement practitioners in Cameroon.",
    },
    {
      icon: CheckCircle,
      title: locale === "fr" ? "Objectifs" : "Objectives",
      description:
        locale === "fr"
          ? "Renforcer les capacités, développer les compétences et créer un réseau professionnel solide."
          : "Strengthen capacities, develop skills and create a strong professional network.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">
            {t("home.ourMission")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">{t("home.missionText")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
