"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, BookOpen, Network } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/hooks/use-translation"

export function MembershipHero() {
  const { t, locale } = useTranslation()

  const getLocalizedHref = (href: string) => {
    return locale === "fr" ? href : `/${locale}${href}`
  }

  const benefits = [
    {
      icon: Users,
      title: locale === "fr" ? "Réseau professionnel" : "Professional Network",
      description: locale === "fr" ? "Connectez-vous avec des experts" : "Connect with experts",
    },
    {
      icon: BookOpen,
      title: locale === "fr" ? "Formation continue" : "Continuous Training",
      description: locale === "fr" ? "Accès aux formations certifiantes" : "Access to certification training",
    },
    {
      icon: Award,
      title: locale === "fr" ? "Certification" : "Certification",
      description: locale === "fr" ? "Obtenez des certifications reconnues" : "Get recognized certifications",
    },
    {
      icon: Network,
      title: locale === "fr" ? "Opportunités" : "Opportunities",
      description: locale === "fr" ? "Développez votre carrière" : "Develop your career",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6 text-balance">
            {locale === "fr" ? "Rejoignez l'APMC" : "Join CAPPP"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            {locale === "fr"
              ? "Devenez membre de la plus grande association de praticiens des marchés publics au Cameroun et bénéficiez d'un réseau professionnel d'excellence."
              : "Become a member of the largest association of public procurement practitioners in Cameroon and benefit from a professional network of excellence."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href={getLocalizedHref("/register")}>{locale === "fr" ? "Adhérer maintenant" : "Join Now"}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Link href={getLocalizedHref("/contact")}>{locale === "fr" ? "Nous contacter" : "Contact Us"}</Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg text-primary mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
