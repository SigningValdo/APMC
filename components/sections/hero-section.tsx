"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, BookOpen, Award } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/hooks/use-translation"

export function HeroSection() {
  const { t, locale } = useTranslation()

  const getLocalizedHref = (href: string) => {
    return locale === "fr" ? href : `/${locale}${href}`
  }

  return (
    <section className="relative bg-gradient-to-br from-background via-background to-muted py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-4">
                <span className="text-secondary font-medium text-sm">
                  {locale === "fr"
                    ? "🇨🇲 Association Professionnelle Camerounaise"
                    : "🇨🇲 Cameroonian Professional Association"}
                </span>
              </div>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold text-primary leading-tight text-balance">
                {t("home.title")}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">{t("home.subtitle")}</p>
              <p className="text-lg text-foreground/80 leading-relaxed">{t("home.heroDescription")}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href={getLocalizedHref("/membership")}>
                  {t("home.joinUs")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                <Link href={getLocalizedHref("/resources")}>{locale === "fr" ? "Publications" : "Publications"}</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href={getLocalizedHref("/news")}
                className="text-sm text-muted-foreground hover:text-primary transition-colors underline"
              >
                {locale === "fr" ? "Dernières actualités" : "Latest news"}
              </Link>
              <Link
                href={getLocalizedHref("/contact")}
                className="text-sm text-muted-foreground hover:text-primary transition-colors underline"
              >
                {locale === "fr" ? "Nous contacter" : "Contact us"}
              </Link>
              <Link
                href={getLocalizedHref("/events")}
                className="text-sm text-muted-foreground hover:text-primary transition-colors underline"
              >
                {locale === "fr" ? "Événements" : "Events"}
              </Link>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Card className="transform rotate-3 hover:rotate-6 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{locale === "fr" ? "Réseau" : "Network"}</h3>
                  <p className="text-sm text-muted-foreground">
                    {locale === "fr" ? "Professionnels connectés" : "Connected professionals"}
                  </p>
                </CardContent>
              </Card>

              <Card className="transform -rotate-2 hover:-rotate-3 transition-transform duration-300 mt-8">
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{locale === "fr" ? "Formation" : "Training"}</h3>
                  <p className="text-sm text-muted-foreground">
                    {locale === "fr" ? "Programmes certifiants" : "Certification programs"}
                  </p>
                </CardContent>
              </Card>

              <Card className="transform rotate-1 hover:rotate-2 transition-transform duration-300 -mt-4">
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{locale === "fr" ? "Excellence" : "Excellence"}</h3>
                  <p className="text-sm text-muted-foreground">
                    {locale === "fr" ? "Standards élevés" : "High standards"}
                  </p>
                </CardContent>
              </Card>

              <Card className="transform -rotate-1 hover:-rotate-2 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-secondary-foreground font-bold text-lg">CM</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{locale === "fr" ? "Cameroun" : "Cameroon"}</h3>
                  <p className="text-sm text-muted-foreground">
                    {locale === "fr" ? "Présence nationale" : "National presence"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
