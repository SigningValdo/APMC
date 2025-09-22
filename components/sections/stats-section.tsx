"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Calendar, FileText, Award } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function StatsSection() {
  const { t, locale } = useTranslation()

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: t("home.members"),
      description: locale === "fr" ? "Professionnels actifs" : "Active professionals",
    },
    {
      icon: Calendar,
      number: "50+",
      label: t("home.events"),
      description: locale === "fr" ? "Événements organisés" : "Events organized",
    },
    {
      icon: FileText,
      number: "100+",
      label: t("home.publications"),
      description: locale === "fr" ? "Documents publiés" : "Documents published",
    },
    {
      icon: Award,
      number: "15+",
      label: locale === "fr" ? "Années" : "Years",
      description: locale === "fr" ? "D'expérience" : "Of experience",
    },
  ]

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4 text-balance">{t("home.keyNumbers")}</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto text-pretty">
            {locale === "fr"
              ? "Notre impact en chiffres depuis notre création"
              : "Our impact in numbers since our creation"}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors duration-300"
            >
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-4 opacity-90" />
                <div className="font-heading text-3xl font-bold mb-2">{stat.number}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-sm opacity-80">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
