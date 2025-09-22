"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Eye, Filter, Search, Calendar, FileText } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function ResourcesLibrary() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const { t, locale } = useTranslation()

  const resources = [
    {
      id: 1,
      title:
        locale === "fr"
          ? "Guide complet des marchés publics au Cameroun 2024"
          : "Complete Guide to Public Procurement in Cameroon 2024",
      description:
        locale === "fr"
          ? "Manuel complet couvrant tous les aspects de la passation des marchés publics selon la réglementation camerounaise."
          : "Complete manual covering all aspects of public procurement according to Cameroonian regulations.",
      category: locale === "fr" ? "Guides Pratiques" : "Practical Guides",
      type: "PDF",
      size: "3.2 MB",
      downloads: 1250,
      date: "2024-01-15",
      featured: true,
    },
    {
      id: 2,
      title: locale === "fr" ? "Modèle de cahier des charges technique" : "Technical Specification Template",
      description:
        locale === "fr"
          ? "Template standardisé pour la rédaction de cahiers des charges techniques conformes aux exigences réglementaires."
          : "Standardized template for writing technical specifications compliant with regulatory requirements.",
      category: locale === "fr" ? "Modèles et Templates" : "Models and Templates",
      type: "DOCX",
      size: "1.8 MB",
      downloads: 890,
      date: "2024-01-10",
      featured: false,
    },
    {
      id: 3,
      title:
        locale === "fr" ? "Réglementation CEMAC sur les marchés publics" : "CEMAC Regulations on Public Procurement",
      description:
        locale === "fr"
          ? "Compilation des textes réglementaires CEMAC applicables aux marchés publics dans la sous-région."
          : "Compilation of CEMAC regulatory texts applicable to public procurement in the sub-region.",
      category: locale === "fr" ? "Réglementation" : "Regulations",
      type: "PDF",
      size: "2.5 MB",
      downloads: 675,
      date: "2024-01-08",
      featured: false,
    },
    {
      id: 4,
      title:
        locale === "fr"
          ? "Étude sur la digitalisation des marchés publics"
          : "Study on Digitalization of Public Procurement",
      description:
        locale === "fr"
          ? "Analyse approfondie des enjeux et opportunités de la digitalisation dans le secteur des marchés publics."
          : "In-depth analysis of the challenges and opportunities of digitalization in the public procurement sector.",
      category: locale === "fr" ? "Études et Analyses" : "Studies and Analysis",
      type: "PDF",
      size: "4.1 MB",
      downloads: 445,
      date: "2024-01-05",
      featured: true,
    },
    {
      id: 5,
      title: locale === "fr" ? "Checklist de conformité pour les appels d'offres" : "Compliance Checklist for Tenders",
      description:
        locale === "fr"
          ? "Liste de vérification complète pour s'assurer de la conformité des procédures d'appel d'offres."
          : "Complete checklist to ensure compliance with tender procedures.",
      category: locale === "fr" ? "Conformité" : "Compliance",
      type: "PDF",
      size: "0.8 MB",
      downloads: 1120,
      date: "2024-01-03",
      featured: false,
    },
    {
      id: 6,
      title: locale === "fr" ? "Formation : Évaluation des offres techniques" : "Training: Technical Offer Evaluation",
      description:
        locale === "fr"
          ? "Support de formation sur les méthodes d'évaluation des offres techniques dans les marchés publics."
          : "Training material on methods for evaluating technical offers in public procurement.",
      category: locale === "fr" ? "Formation" : "Training",
      type: "PPTX",
      size: "5.2 MB",
      downloads: 320,
      date: "2024-01-01",
      featured: false,
    },
  ]

  const categories = [
    { value: "all", label: locale === "fr" ? "Toutes les catégories" : "All categories" },
    { value: "guides", label: locale === "fr" ? "Guides Pratiques" : "Practical Guides" },
    { value: "templates", label: locale === "fr" ? "Modèles et Templates" : "Models and Templates" },
    { value: "regulations", label: locale === "fr" ? "Réglementation" : "Regulations" },
    { value: "studies", label: locale === "fr" ? "Études et Analyses" : "Studies and Analysis" },
    { value: "training", label: locale === "fr" ? "Formation" : "Training" },
    { value: "compliance", label: locale === "fr" ? "Conformité" : "Compliance" },
  ]

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory =
      selectedCategory === "all" || resource.category.toLowerCase().includes(selectedCategory.toLowerCase())
    return matchesSearch && matchesCategory
  })

  const featuredResources = filteredResources.filter((resource) => resource.featured)
  const regularResources = filteredResources.filter((resource) => !resource.featured)

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-4">
            {locale === "fr" ? "Bibliothèque documentaire" : "Document Library"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {locale === "fr"
              ? "Téléchargez nos ressources exclusives pour améliorer vos pratiques professionnelles"
              : "Download our exclusive resources to improve your professional practices"}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={locale === "fr" ? "Rechercher une ressource..." : "Search for a resource..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full lg:w-64">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            {locale === "fr" ? "Plus de filtres" : "More filters"}
          </Button>
        </div>

        {/* Featured Resources */}
        {featuredResources.length > 0 && (
          <div className="mb-12">
            <h3 className="font-heading text-2xl font-bold text-primary mb-6">
              {locale === "fr" ? "Ressources en vedette" : "Featured Resources"}
            </h3>
            <div className="grid lg:grid-cols-2 gap-6">
              {featuredResources.map((resource) => (
                <Card
                  key={resource.id}
                  className="border-secondary/20 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-secondary text-secondary-foreground">
                        {locale === "fr" ? "En vedette" : "Featured"}
                      </Badge>
                      <Badge variant="outline">{resource.category}</Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                    <CardDescription className="text-sm">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <FileText className="h-4 w-4 mr-1" />
                          {resource.type}
                        </span>
                        <span>{resource.size}</span>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(resource.date).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US")}
                        </span>
                      </div>
                      <span>
                        {resource.downloads} {locale === "fr" ? "téléchargements" : "downloads"}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">
                        <Download className="h-4 w-4 mr-2" />
                        {locale === "fr" ? "Télécharger" : "Download"}
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Resources */}
        <div className="grid lg:grid-cols-3 gap-6">
          {regularResources.map((resource) => (
            <Card key={resource.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-xs">
                    {resource.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{resource.type}</span>
                </div>
                <CardTitle className="text-base leading-tight">{resource.title}</CardTitle>
                <CardDescription className="text-xs line-clamp-2">{resource.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                  <span>{resource.size}</span>
                  <span>
                    {resource.downloads} {locale === "fr" ? "dl" : "dl"}
                  </span>
                  <span>{new Date(resource.date).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US")}</span>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1 text-xs">
                    <Download className="h-3 w-3 mr-1" />
                    {locale === "fr" ? "Télécharger" : "Download"}
                  </Button>
                  <Button variant="outline" size="sm">
                    <Eye className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-muted-foreground mb-2">
              {locale === "fr" ? "Aucune ressource trouvée" : "No resources found"}
            </h3>
            <p className="text-muted-foreground">
              {locale === "fr" ? "Essayez de modifier vos critères de recherche" : "Try modifying your search criteria"}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
