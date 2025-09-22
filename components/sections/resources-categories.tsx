"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Scale, BookOpen, Users, TrendingUp, Shield, Briefcase, GraduationCap } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function ResourcesCategories() {
  const { t, locale } = useTranslation()

  const categories = [
    {
      icon: Scale,
      name: locale === "fr" ? "Réglementation" : "Regulations",
      count: 45,
      description: locale === "fr" ? "Textes juridiques et réglementaires" : "Legal and regulatory texts",
      color: "bg-blue-100 text-blue-800",
    },
    {
      icon: BookOpen,
      name: locale === "fr" ? "Guides Pratiques" : "Practical Guides",
      count: 28,
      description: locale === "fr" ? "Manuels et guides méthodologiques" : "Manuals and methodological guides",
      color: "bg-green-100 text-green-800",
    },
    {
      icon: FileText,
      name: locale === "fr" ? "Modèles et Templates" : "Models and Templates",
      count: 35,
      description: locale === "fr" ? "Documents types et modèles" : "Standard documents and templates",
      color: "bg-purple-100 text-purple-800",
    },
    {
      icon: TrendingUp,
      name: locale === "fr" ? "Études et Analyses" : "Studies and Analysis",
      count: 22,
      description: locale === "fr" ? "Rapports et études sectorielles" : "Reports and sector studies",
      color: "bg-orange-100 text-orange-800",
    },
    {
      icon: GraduationCap,
      name: locale === "fr" ? "Formation" : "Training",
      count: 18,
      description: locale === "fr" ? "Supports de formation et cours" : "Training materials and courses",
      color: "bg-indigo-100 text-indigo-800",
    },
    {
      icon: Users,
      name: locale === "fr" ? "Bonnes Pratiques" : "Best Practices",
      count: 15,
      description: locale === "fr" ? "Retours d'expérience et cas d'usage" : "Experience feedback and use cases",
      color: "bg-pink-100 text-pink-800",
    },
    {
      icon: Shield,
      name: locale === "fr" ? "Conformité" : "Compliance",
      count: 12,
      description: locale === "fr" ? "Outils de conformité et audit" : "Compliance and audit tools",
      color: "bg-red-100 text-red-800",
    },
    {
      icon: Briefcase,
      name: locale === "fr" ? "Outils Professionnels" : "Professional Tools",
      count: 20,
      description: locale === "fr" ? "Calculateurs et outils pratiques" : "Calculators and practical tools",
      color: "bg-yellow-100 text-yellow-800",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-4">
            {locale === "fr" ? "Catégories de ressources" : "Resource Categories"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {locale === "fr"
              ? "Explorez nos ressources organisées par thématiques pour trouver rapidement ce dont vous avez besoin"
              : "Explore our resources organized by themes to quickly find what you need"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg text-primary mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                <Badge className={category.color}>
                  {category.count} {locale === "fr" ? "ressources" : "resources"}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
