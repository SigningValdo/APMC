"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Calendar, User, ArrowRight, Filter } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

interface NewsArticle {
  id: string
  title: { fr: string; en: string }
  excerpt: { fr: string; en: string }
  content: { fr: string; en: string }
  author: string
  date: string
  category: string
  image: string
  featured: boolean
}

const mockNews: NewsArticle[] = [
  {
    id: "1",
    title: {
      fr: "Nouvelle réglementation sur les marchés publics au Cameroun",
      en: "New public procurement regulations in Cameroon",
    },
    excerpt: {
      fr: "Le gouvernement camerounais a adopté de nouvelles mesures pour améliorer la transparence dans les marchés publics.",
      en: "The Cameroonian government has adopted new measures to improve transparency in public procurement.",
    },
    content: {
      fr: "Le gouvernement camerounais a récemment adopté une série de nouvelles réglementations visant à renforcer la transparence et l'efficacité dans le processus des marchés publics...",
      en: "The Cameroonian government has recently adopted a series of new regulations aimed at strengthening transparency and efficiency in the public procurement process...",
    },
    author: "Dr. Marie Ngono",
    date: "2024-01-15",
    category: "regulation",
    image: "/government-building-cameroon.jpg",
    featured: true,
  },
  {
    id: "2",
    title: {
      fr: "Formation certifiante en passation de marchés publics",
      en: "Certified training in public procurement",
    },
    excerpt: {
      fr: "L'APMC lance un nouveau programme de formation certifiante pour les professionnels des marchés publics.",
      en: "APMC launches a new certified training program for public procurement professionals.",
    },
    content: {
      fr: "L'Association des Praticiens des Marchés Publics au Cameroun (APMC) est fière d'annoncer le lancement de son nouveau programme de formation certifiante...",
      en: "The Association of Public Procurement Practitioners in Cameroon (APMC) is proud to announce the launch of its new certified training program...",
    },
    author: "Jean-Paul Mbarga",
    date: "2024-01-10",
    category: "training",
    image: "/training-classroom-professionals.jpg",
    featured: false,
  },
  {
    id: "3",
    title: {
      fr: "Conférence internationale sur les marchés publics durables",
      en: "International conference on sustainable public procurement",
    },
    excerpt: {
      fr: "Yaoundé accueillera la première conférence internationale sur les marchés publics durables en Afrique centrale.",
      en: "Yaoundé will host the first international conference on sustainable public procurement in Central Africa.",
    },
    content: {
      fr: "La capitale camerounaise se prépare à accueillir un événement majeur dans le domaine des marchés publics...",
      en: "The Cameroonian capital is preparing to host a major event in the field of public procurement...",
    },
    author: "Prof. Samuel Etoa",
    date: "2024-01-05",
    category: "event",
    image: "/conference-hall-international-meeting.jpg",
    featured: true,
  },
]

export default function NewsClientPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("date")
  const { t, locale } = useTranslation()

  const categories = [
    { value: "all", label: locale === "fr" ? "Toutes les catégories" : "All categories" },
    { value: "regulation", label: locale === "fr" ? "Réglementation" : "Regulation" },
    { value: "training", label: locale === "fr" ? "Formation" : "Training" },
    { value: "event", label: locale === "fr" ? "Événements" : "Events" },
    { value: "partnership", label: locale === "fr" ? "Partenariats" : "Partnerships" },
  ]

  const filteredNews = mockNews.filter((article) => {
    const matchesSearch =
      article.title[locale].toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt[locale].toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedNews = [...filteredNews].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
    return a.title[locale].localeCompare(b.title[locale])
  })

  const featuredNews = sortedNews.filter((article) => article.featured)
  const regularNews = sortedNews.filter((article) => !article.featured)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              {locale === "fr" ? "Actualités & Informations" : "News & Information"}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {locale === "fr"
                ? "Restez informé des dernières actualités et développements dans le domaine des marchés publics"
                : "Stay informed about the latest news and developments in public procurement"}
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder={locale === "fr" ? "Rechercher des articles..." : "Search articles..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <Filter className="h-4 w-4 mr-2" />
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
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">{locale === "fr" ? "Plus récent" : "Most recent"}</SelectItem>
                  <SelectItem value="title">{locale === "fr" ? "Alphabétique" : "Alphabetical"}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl font-bold text-primary mb-8">
              {locale === "fr" ? "À la Une" : "Featured News"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredNews.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title[locale]}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{locale === "fr" ? "À la Une" : "Featured"}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(article.date).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US")}
                      </div>
                    </div>
                    <CardTitle className="font-heading text-xl hover:text-primary transition-colors">
                      {article.title[locale]}
                    </CardTitle>
                    <CardDescription className="text-base">{article.excerpt[locale]}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </div>
                      <Button variant="ghost" size="sm">
                        {locale === "fr" ? "Lire plus" : "Read more"}
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular News */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-primary mb-8">
            {locale === "fr" ? "Toutes les Actualités" : "All News"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title[locale]}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{categories.find((cat) => cat.value === article.category)?.label}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(article.date).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US")}
                    </div>
                  </div>
                  <CardTitle className="font-heading text-lg hover:text-primary transition-colors line-clamp-2">
                    {article.title[locale]}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{article.excerpt[locale]}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-4 w-4 mr-1" />
                      {article.author}
                    </div>
                    <Button variant="ghost" size="sm">
                      {locale === "fr" ? "Lire" : "Read"}
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            {locale === "fr" ? "Restez Informé" : "Stay Informed"}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {locale === "fr"
              ? "Abonnez-vous à notre newsletter pour recevoir les dernières actualités directement dans votre boîte mail"
              : "Subscribe to our newsletter to receive the latest news directly in your inbox"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder={locale === "fr" ? "Votre adresse email" : "Your email address"}
              className="bg-white text-gray-900"
            />
            <Button variant="secondary" className="whitespace-nowrap">
              {locale === "fr" ? "S'abonner" : "Subscribe"}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
