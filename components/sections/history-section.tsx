"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/hooks/use-translation"

export function HistorySection() {
  const { t, locale } = useTranslation()

  const milestones = [
    {
      year: "2009",
      title: locale === "fr" ? "Création de l'APMC" : "Creation of APMC/CAPPP",
      description:
        locale === "fr"
          ? "Fondation de l'association par un groupe de praticiens expérimentés des marchés publics."
          : "Foundation of the association by a group of experienced public procurement practitioners.",
    },
    {
      year: "2012",
      title: locale === "fr" ? "Premier programme de formation" : "First training program",
      description:
        locale === "fr"
          ? "Lancement du premier programme de formation certifiante en passation des marchés publics."
          : "Launch of the first certification training program in public procurement procedures.",
    },
    {
      year: "2015",
      title: locale === "fr" ? "Reconnaissance officielle" : "Official recognition",
      description:
        locale === "fr"
          ? "Obtention de la reconnaissance officielle par les autorités camerounaises."
          : "Obtaining official recognition by Cameroonian authorities.",
    },
    {
      year: "2018",
      title: locale === "fr" ? "Expansion régionale" : "Regional expansion",
      description:
        locale === "fr"
          ? "Extension des activités dans plusieurs régions du Cameroun."
          : "Extension of activities to several regions of Cameroon.",
    },
    {
      year: "2024",
      title: locale === "fr" ? "Transformation digitale" : "Digital transformation",
      description:
        locale === "fr"
          ? "Lancement de la plateforme digitale pour améliorer les services aux membres."
          : "Launch of the digital platform to improve services to members.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-4">{t("about.history")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {locale === "fr"
              ? "Découvrez les moments clés de notre parcours depuis notre création"
              : "Discover the key moments of our journey since our creation"}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-16 h-16 bg-secondary rounded-full items-center justify-center text-secondary-foreground font-bold text-sm flex-shrink-0 relative z-10">
                    {milestone.year}
                  </div>

                  <Card className="flex-1 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="md:hidden text-secondary font-bold text-sm mb-2">{milestone.year}</div>
                      <h3 className="font-heading text-xl font-semibold text-primary mb-3">{milestone.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-pretty">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
