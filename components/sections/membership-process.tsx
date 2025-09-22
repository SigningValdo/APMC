"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, UserCheck, CreditCard, Award } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/hooks/use-translation"

export function MembershipProcess() {
  const { t, locale } = useTranslation()

  const getLocalizedHref = (href: string) => {
    return locale === "fr" ? href : `/${locale}${href}`
  }

  const steps = [
    {
      icon: FileText,
      number: "01",
      title: locale === "fr" ? "Soumission du dossier" : "Application Submission",
      description:
        locale === "fr"
          ? "Remplissez le formulaire en ligne et téléchargez vos documents (CV, diplômes, lettre de motivation)."
          : "Fill out the online form and upload your documents (CV, diplomas, cover letter).",
    },
    {
      icon: UserCheck,
      number: "02",
      title: locale === "fr" ? "Examen de la candidature" : "Application Review",
      description:
        locale === "fr"
          ? "Notre comité d'admission examine votre dossier sous 5 à 7 jours ouvrables."
          : "Our admissions committee reviews your application within 5 to 7 business days.",
    },
    {
      icon: CreditCard,
      number: "03",
      title: locale === "fr" ? "Paiement de la cotisation" : "Membership Fee Payment",
      description:
        locale === "fr"
          ? "Une fois approuvé, procédez au paiement de votre cotisation annuelle selon votre type d'adhésion."
          : "Once approved, proceed with payment of your annual membership fee according to your membership type.",
    },
    {
      icon: Award,
      number: "04",
      title: locale === "fr" ? "Activation du compte" : "Account Activation",
      description:
        locale === "fr"
          ? "Recevez vos identifiants et accédez immédiatement à tous les services membres."
          : "Receive your credentials and immediately access all member services.",
    },
  ]

  const requirements = [
    {
      type: locale === "fr" ? "Individuel" : "Individual",
      items: [
        locale === "fr" ? "CV détaillé et actualisé" : "Detailed and updated CV",
        locale === "fr" ? "Copie des diplômes certifiée" : "Certified copy of diplomas",
        locale === "fr" ? "Lettre de motivation (1 page)" : "Cover letter (1 page)",
        locale === "fr" ? "Justificatif d'expérience professionnelle" : "Proof of professional experience",
      ],
    },
    {
      type: locale === "fr" ? "Institutionnel" : "Institutional",
      items: [
        locale === "fr" ? "Présentation de l'organisation" : "Organization presentation",
        locale === "fr" ? "Statuts juridiques de l'entité" : "Legal statutes of the entity",
        locale === "fr" ? "Liste des participants désignés" : "List of designated participants",
        locale === "fr" ? "Lettre d'engagement institutionnel" : "Institutional commitment letter",
      ],
    },
    {
      type: locale === "fr" ? "Étudiant" : "Student",
      items: [
        locale === "fr" ? "Attestation d'inscription universitaire" : "University enrollment certificate",
        locale === "fr" ? "Relevé de notes récent" : "Recent transcript",
        locale === "fr" ? "Lettre de recommandation (optionnel)" : "Letter of recommendation (optional)",
        locale === "fr" ? "Projet d'études ou de recherche" : "Study or research project",
      ],
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-4">
            {locale === "fr" ? "Processus d'adhésion" : "Membership Process"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {locale === "fr"
              ? "Suivez ces étapes simples pour devenir membre de l'APMC"
              : "Follow these simple steps to become a CAPPP member"}
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-sm font-bold">{step.number}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-primary mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Requirements */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-bold text-primary text-center mb-8">
            {locale === "fr" ? "Documents requis par type d'adhésion" : "Required Documents by Membership Type"}
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg text-primary mb-4 text-center">
                    {locale === "fr" ? "Adhésion " : "Membership "}
                    {req.type}
                  </h4>
                  <ul className="space-y-3">
                    {req.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-secondary to-secondary/80 rounded-2xl p-8 text-white">
            <h3 className="font-heading text-2xl font-bold mb-4">
              {locale === "fr" ? "Prêt à nous rejoindre ?" : "Ready to Join Us?"}
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              {locale === "fr"
                ? "Commencez votre parcours professionnel avec l'APMC dès aujourd'hui"
                : "Start your professional journey with CAPPP today"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link href={getLocalizedHref("/register")}>
                  {locale === "fr" ? "Commencer ma candidature" : "Start My Application"}
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-secondary bg-transparent"
              >
                <Link href={getLocalizedHref("/contact")}>
                  {locale === "fr" ? "Poser une question" : "Ask a Question"}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
