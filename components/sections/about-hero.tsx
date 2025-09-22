"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, CheckCircle } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function AboutHero() {
  const { t, locale } = useTranslation()

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6 text-balance">
            {t("about.title")}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            {locale === "fr"
              ? "L'APMC est une organisation professionnelle créée pour rassembler les praticiens des marchés publics au Cameroun et promouvoir l'excellence dans ce secteur stratégique."
              : "CAPPP is a professional organization created to bring together public procurement practitioners in Cameroon and promote excellence in this strategic sector."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary mb-4">{t("about.mission")}</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                {locale === "fr"
                  ? "Promouvoir l'excellence, la transparence et l'intégrité dans les marchés publics camerounais à travers la formation, la certification et le partage de bonnes pratiques."
                  : "Promote excellence, transparency and integrity in Cameroonian public procurement through training, certification and sharing of best practices."}
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary mb-4">{t("about.vision")}</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                {locale === "fr"
                  ? "Être la référence incontournable en matière de formation et de certification des praticiens des marchés publics au Cameroun et en Afrique centrale."
                  : "To be the essential reference for training and certification of public procurement practitioners in Cameroon and Central Africa."}
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary mb-4">{t("about.objectives")}</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                {locale === "fr"
                  ? "Renforcer les capacités des praticiens, développer un réseau professionnel solide et contribuer à l'amélioration du cadre réglementaire."
                  : "Strengthen practitioners' capacities, develop a strong professional network and contribute to improving the regulatory framework."}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
