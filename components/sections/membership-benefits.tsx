"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  BookOpen,
  Users,
  Award,
  FileText,
  Calendar,
  MessageSquare,
  Briefcase,
  Shield,
  Network,
  TrendingUp,
  Globe,
  Lightbulb,
} from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function MembershipBenefits() {
  const { t, locale } = useTranslation()

  const benefits = [
    {
      icon: BookOpen,
      title: locale === "fr" ? "Formation et Certification" : "Training and Certification",
      description:
        locale === "fr"
          ? "Accès à des programmes de formation certifiants reconnus par les institutions nationales et internationales."
          : "Access to certification training programs recognized by national and international institutions.",
    },
    {
      icon: Users,
      title: locale === "fr" ? "Réseau Professionnel" : "Professional Network",
      description:
        locale === "fr"
          ? "Connectez-vous avec plus de 500 professionnels des marchés publics à travers le Cameroun et l'Afrique centrale."
          : "Connect with over 500 public procurement professionals across Cameroon and Central Africa.",
    },
    {
      icon: FileText,
      title: locale === "fr" ? "Ressources Documentaires" : "Documentary Resources",
      description:
        locale === "fr"
          ? "Bibliothèque numérique complète avec guides, modèles, réglementations et meilleures pratiques."
          : "Complete digital library with guides, templates, regulations and best practices.",
    },
    {
      icon: Calendar,
      title: locale === "fr" ? "Événements Exclusifs" : "Exclusive Events",
      description:
        locale === "fr"
          ? "Participation aux conférences, séminaires, ateliers et événements de networking réservés aux membres."
          : "Participation in conferences, seminars, workshops and networking events reserved for members.",
    },
    {
      icon: Award,
      title: locale === "fr" ? "Reconnaissance Professionnelle" : "Professional Recognition",
      description:
        locale === "fr"
          ? "Certification et reconnaissance de vos compétences par une association professionnelle reconnue."
          : "Certification and recognition of your skills by a recognized professional association.",
    },
    {
      icon: MessageSquare,
      title: locale === "fr" ? "Support et Conseil" : "Support and Consulting",
      description:
        locale === "fr"
          ? "Assistance technique et conseil personnalisé pour vos projets et défis professionnels."
          : "Technical assistance and personalized advice for your projects and professional challenges.",
    },
    {
      icon: Briefcase,
      title: locale === "fr" ? "Opportunités de Carrière" : "Career Opportunities",
      description:
        locale === "fr"
          ? "Accès privilégié aux offres d'emploi, missions de conseil et opportunités de collaboration."
          : "Privileged access to job offers, consulting missions and collaboration opportunities.",
    },
    {
      icon: Shield,
      title: locale === "fr" ? "Veille Réglementaire" : "Regulatory Watch",
      description:
        locale === "fr"
          ? "Information en temps réel sur les évolutions réglementaires et les nouvelles pratiques du secteur."
          : "Real-time information on regulatory developments and new sector practices.",
    },
    {
      icon: Globe,
      title: locale === "fr" ? "Rayonnement International" : "International Reach",
      description:
        locale === "fr"
          ? "Participation aux réseaux internationaux et échanges avec des associations partenaires."
          : "Participation in international networks and exchanges with partner associations.",
    },
    {
      icon: TrendingUp,
      title: locale === "fr" ? "Développement Continu" : "Continuous Development",
      description:
        locale === "fr"
          ? "Programmes de développement professionnel continu adaptés aux évolutions du secteur."
          : "Continuous professional development programs adapted to sector developments.",
    },
    {
      icon: Network,
      title: locale === "fr" ? "Plateforme Collaborative" : "Collaborative Platform",
      description:
        locale === "fr"
          ? "Espace numérique dédié aux échanges, partage d'expériences et collaboration entre membres."
          : "Digital space dedicated to exchanges, experience sharing and collaboration between members.",
    },
    {
      icon: Lightbulb,
      title: locale === "fr" ? "Innovation et Recherche" : "Innovation and Research",
      description:
        locale === "fr"
          ? "Participation aux projets de recherche et d'innovation pour améliorer les pratiques du secteur."
          : "Participation in research and innovation projects to improve sector practices.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-4">
            {locale === "fr" ? "Avantages de l'adhésion" : "Membership Benefits"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {locale === "fr"
              ? "Découvrez tous les avantages exclusifs réservés aux membres de l'APMC"
              : "Discover all the exclusive benefits reserved for CAPPP members"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg text-primary mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
