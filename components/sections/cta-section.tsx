"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, BookOpen } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/hooks/use-translation"

export function CTASection() {
  const { t, locale } = useTranslation()

  const getLocalizedHref = (href: string) => {
    return locale === "fr" ? href : `/${locale}${href}`
  }

  return (
    <section className="py-20 bg-gradient-to-r from-secondary to-secondary/80">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6 text-balance">
              {locale === "fr" ? "Rejoignez notre communauté de professionnels" : "Join our community of professionals"}
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed text-pretty">
              {locale === "fr"
                ? "Développez vos compétences, élargissez votre réseau et contribuez à l'amélioration des pratiques des marchés publics au Cameroun."
                : "Develop your skills, expand your network and contribute to improving public procurement practices in Cameroon."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link href={getLocalizedHref("/membership")}>
                  <Users className="mr-2 h-5 w-5" />
                  {t("home.joinUs")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-secondary bg-transparent"
              >
                <Link href={getLocalizedHref("/resources")}>
                  <BookOpen className="mr-2 h-5 w-5" />
                  {locale === "fr" ? "Nos ressources" : "Our resources"}
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">{locale === "fr" ? "Membres actifs" : "Active members"}</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white mt-8">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-sm opacity-90">
                  {locale === "fr" ? "Années d'expérience" : "Years of experience"}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white -mt-4">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-sm opacity-90">
                  {locale === "fr" ? "Formations dispensées" : "Training sessions"}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-sm opacity-90">
                  {locale === "fr" ? "Événements organisés" : "Events organized"}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
