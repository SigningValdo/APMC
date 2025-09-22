"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function TeamSection() {
  const { t, locale } = useTranslation()

  const team = [
    {
      name: "Dr. Jean-Paul MBARGA",
      position: locale === "fr" ? "Président" : "President",
      bio:
        locale === "fr"
          ? "Expert en marchés publics avec plus de 20 ans d'expérience dans l'administration publique camerounaise."
          : "Public procurement expert with over 20 years of experience in Cameroonian public administration.",
      image: "/professional-african-man-suit.png",
      specialties: locale === "fr" ? ["Réglementation", "Formation", "Audit"] : ["Regulation", "Training", "Audit"],
    },
    {
      name: "Marie-Claire NKOMO",
      position: locale === "fr" ? "Vice-Présidente" : "Vice President",
      bio:
        locale === "fr"
          ? "Spécialiste en passation des marchés avec une expertise reconnue dans le secteur privé et public."
          : "Procurement specialist with recognized expertise in both private and public sectors.",
      image: "/placeholder-hc12n.png",
      specialties:
        locale === "fr" ? ["Passation", "Négociation", "Conseil"] : ["Procurement", "Negotiation", "Consulting"],
    },
    {
      name: "Paul ESSOMBA",
      position: locale === "fr" ? "Secrétaire Général" : "Secretary General",
      bio:
        locale === "fr"
          ? "Juriste spécialisé en droit des marchés publics et en contentieux administratif."
          : "Lawyer specialized in public procurement law and administrative litigation.",
      image: "/placeholder-5d2ua.png",
      specialties: locale === "fr" ? ["Droit", "Contentieux", "Compliance"] : ["Law", "Litigation", "Compliance"],
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-4">{t("about.team")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {locale === "fr"
              ? "Rencontrez les leaders qui guident notre organisation vers l'excellence"
              : "Meet the leaders who guide our organization towards excellence"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-muted">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary mb-2">{member.name}</h3>
                <p className="text-secondary font-medium mb-4">{member.position}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-pretty">{member.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {member.specialties.map((specialty, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-center space-x-3">
                  <button className="p-2 text-muted-foreground hover:text-secondary transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-muted-foreground hover:text-secondary transition-colors">
                    <Mail className="h-4 w-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
