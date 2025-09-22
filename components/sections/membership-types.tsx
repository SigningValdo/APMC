"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, User, Building, GraduationCap } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/hooks/use-translation"

export function MembershipTypes() {
  const { t, locale } = useTranslation()

  const getLocalizedHref = (href: string) => {
    return locale === "fr" ? href : `/${locale}${href}`
  }

  const membershipTypes = [
    {
      icon: User,
      name: locale === "fr" ? "Adhésion Individuelle" : "Individual Membership",
      price: locale === "fr" ? "50 000 FCFA/an" : "50,000 FCFA/year",
      description:
        locale === "fr"
          ? "Pour les professionnels individuels des marchés publics"
          : "For individual public procurement professionals",
      features: [
        locale === "fr" ? "Accès à toutes les formations" : "Access to all training",
        locale === "fr" ? "Certification professionnelle" : "Professional certification",
        locale === "fr" ? "Réseau de contacts" : "Contact network",
        locale === "fr" ? "Ressources documentaires" : "Documentary resources",
        locale === "fr" ? "Événements exclusifs" : "Exclusive events",
      ],
      popular: false,
    },
    {
      icon: Building,
      name: locale === "fr" ? "Adhésion Institutionnelle" : "Institutional Membership",
      price: locale === "fr" ? "200 000 FCFA/an" : "200,000 FCFA/year",
      description:
        locale === "fr"
          ? "Pour les organisations et entreprises du secteur"
          : "For organizations and companies in the sector",
      features: [
        locale === "fr" ? "Jusqu'à 10 participants aux formations" : "Up to 10 training participants",
        locale === "fr" ? "Formations sur site" : "On-site training",
        locale === "fr" ? "Conseil personnalisé" : "Personalized consulting",
        locale === "fr" ? "Visibilité dans l'annuaire" : "Directory visibility",
        locale === "fr" ? "Partenariats privilégiés" : "Privileged partnerships",
        locale === "fr" ? "Support technique prioritaire" : "Priority technical support",
      ],
      popular: true,
    },
    {
      icon: GraduationCap,
      name: locale === "fr" ? "Adhésion Étudiante" : "Student Membership",
      price: locale === "fr" ? "15 000 FCFA/an" : "15,000 FCFA/year",
      description:
        locale === "fr"
          ? "Pour les étudiants en droit, économie, gestion publique"
          : "For students in law, economics, public management",
      features: [
        locale === "fr" ? "Tarifs préférentiels formations" : "Preferential training rates",
        locale === "fr" ? "Mentorat professionnel" : "Professional mentoring",
        locale === "fr" ? "Stages en entreprise" : "Company internships",
        locale === "fr" ? "Accès bibliothèque numérique" : "Digital library access",
        locale === "fr" ? "Bourses d'études" : "Study scholarships",
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-4">
            {locale === "fr" ? "Types d'adhésion" : "Membership Types"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {locale === "fr"
              ? "Choisissez le type d'adhésion qui correspond le mieux à votre profil et à vos besoins"
              : "Choose the membership type that best matches your profile and needs"}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {membershipTypes.map((type, index) => (
            <Card
              key={index}
              className={`relative ${type.popular ? "border-secondary shadow-xl scale-105" : "border-border shadow-lg"}`}
            >
              {type.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-secondary text-secondary-foreground px-4 py-1">
                    {locale === "fr" ? "Plus populaire" : "Most Popular"}
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    type.popular ? "bg-secondary text-secondary-foreground" : "bg-secondary/10 text-secondary"
                  }`}
                >
                  <type.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-heading text-xl text-primary">{type.name}</CardTitle>
                <CardDescription className="text-sm">{type.description}</CardDescription>
                <div className="text-3xl font-bold text-primary mt-4">{type.price}</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full mt-6 ${type.popular ? "" : "variant-outline"}`}
                  variant={type.popular ? "default" : "outline"}
                >
                  <Link href={getLocalizedHref("/register")}>
                    {locale === "fr" ? "Choisir ce plan" : "Choose This Plan"}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
