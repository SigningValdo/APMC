"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function PresidentMessage() {
  const { t, locale } = useTranslation()

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              {t("about.president.title", "Mot du Président")}
            </h2>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Photo du président */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center mx-auto lg:mx-0">
                    <span className="text-white text-4xl font-bold">JD</span>
                  </div>
                  <div className="text-center lg:text-left mt-4">
                    <h3 className="font-semibold text-lg text-primary">
                      {locale === "fr" ? "Dr. Jean DUPONT" : "Dr. Jean DUPONT"}
                    </h3>
                    <p className="text-muted-foreground text-sm">{t("about.president.role", "Président APMC/CAPPP")}</p>
                  </div>
                </div>

                {/* Message */}
                <div className="flex-1">
                  <Quote className="h-8 w-8 text-secondary mb-4" />
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      {locale === "fr"
                        ? "Chers collègues praticiens des marchés publics, c'est avec un immense plaisir que je vous souhaite la bienvenue au sein de notre association professionnelle."
                        : "Dear fellow public procurement practitioners, it is with immense pleasure that I welcome you to our professional association."}
                    </p>
                    <p>
                      {locale === "fr"
                        ? "L'APMC/CAPPP représente bien plus qu'une simple organisation : nous sommes une communauté unie par la passion de l'excellence et l'engagement envers la transparence dans les marchés publics camerounais."
                        : "APMC/CAPPP represents much more than a simple organization: we are a community united by a passion for excellence and commitment to transparency in Cameroonian public procurement."}
                    </p>
                    <p>
                      {locale === "fr"
                        ? "Ensemble, nous œuvrons pour élever les standards professionnels, partager les meilleures pratiques et contribuer au développement économique de notre pays. Votre expertise et votre engagement sont les piliers de notre succès collectif."
                        : "Together, we work to raise professional standards, share best practices and contribute to the economic development of our country. Your expertise and commitment are the pillars of our collective success."}
                    </p>
                    <p className="font-medium text-primary">
                      {locale === "fr"
                        ? "Bienvenue dans cette grande famille professionnelle !"
                        : "Welcome to this great professional family!"}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
