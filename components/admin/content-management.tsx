"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FileText, Plus, Search, Edit, Trash2, Eye, Calendar } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function ContentManagement() {
  const { locale } = useTranslation()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const articles = [
    {
      id: 1,
      title:
        locale === "fr"
          ? "Nouvelles réglementations des marchés publics 2024"
          : "New Public Procurement Regulations 2024",
      category: locale === "fr" ? "Réglementation" : "Regulation",
      status: "published",
      author: "Admin APMC",
      date: "2024-01-15",
      views: 1250,
    },
    {
      id: 2,
      title: locale === "fr" ? "Guide pratique pour les soumissionnaires" : "Practical Guide for Bidders",
      category: locale === "fr" ? "Guide" : "Guide",
      status: "draft",
      author: "Marie Kouam",
      date: "2024-01-10",
      views: 0,
    },
    {
      id: 3,
      title: locale === "fr" ? "Résultats de l'enquête satisfaction 2023" : "2023 Satisfaction Survey Results",
      category: locale === "fr" ? "Rapport" : "Report",
      status: "published",
      author: "Paul Mbarga",
      date: "2024-01-08",
      views: 890,
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            {locale === "fr" ? "Publié" : "Published"}
          </Badge>
        )
      case "draft":
        return <Badge variant="secondary">{locale === "fr" ? "Brouillon" : "Draft"}</Badge>
      case "archived":
        return <Badge variant="outline">{locale === "fr" ? "Archivé" : "Archived"}</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-heading text-3xl font-bold text-primary">
            {locale === "fr" ? "Gestion du contenu" : "Content Management"}
          </h1>
          <p className="text-muted-foreground">
            {locale === "fr"
              ? "Gérez les articles, guides et publications"
              : "Manage articles, guides and publications"}
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              {locale === "fr" ? "Nouvel article" : "New Article"}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{locale === "fr" ? "Créer un nouvel article" : "Create New Article"}</DialogTitle>
              <DialogDescription>
                {locale === "fr" ? "Rédigez et publiez un nouvel article" : "Write and publish a new article"}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">{locale === "fr" ? "Titre" : "Title"}</Label>
                <Input id="title" placeholder={locale === "fr" ? "Titre de l'article" : "Article title"} />
              </div>
              <div>
                <Label htmlFor="category">{locale === "fr" ? "Catégorie" : "Category"}</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder={locale === "fr" ? "Sélectionner une catégorie" : "Select a category"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="regulation">{locale === "fr" ? "Réglementation" : "Regulation"}</SelectItem>
                    <SelectItem value="guide">{locale === "fr" ? "Guide" : "Guide"}</SelectItem>
                    <SelectItem value="report">{locale === "fr" ? "Rapport" : "Report"}</SelectItem>
                    <SelectItem value="news">{locale === "fr" ? "Actualités" : "News"}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="content">{locale === "fr" ? "Contenu" : "Content"}</Label>
                <Textarea
                  id="content"
                  rows={8}
                  placeholder={locale === "fr" ? "Rédigez votre article ici..." : "Write your article here..."}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline">{locale === "fr" ? "Sauvegarder brouillon" : "Save Draft"}</Button>
                <Button>{locale === "fr" ? "Publier" : "Publish"}</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder={locale === "fr" ? "Rechercher des articles..." : "Search articles..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{locale === "fr" ? "Toutes catégories" : "All Categories"}</SelectItem>
            <SelectItem value="regulation">{locale === "fr" ? "Réglementation" : "Regulation"}</SelectItem>
            <SelectItem value="guide">{locale === "fr" ? "Guide" : "Guide"}</SelectItem>
            <SelectItem value="report">{locale === "fr" ? "Rapport" : "Report"}</SelectItem>
            <SelectItem value="news">{locale === "fr" ? "Actualités" : "News"}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="h-5 w-5 mr-2" />
            {locale === "fr" ? "Articles publiés" : "Published Articles"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {articles.map((article) => (
              <div key={article.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h3 className="font-medium">{article.title}</h3>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(article.date).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US")}
                    </span>
                    <span>
                      {locale === "fr" ? "Par" : "By"} {article.author}
                    </span>
                    <span className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {article.views} {locale === "fr" ? "vues" : "views"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">{article.category}</Badge>
                  {getStatusBadge(article.status)}
                  <div className="flex space-x-1">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
