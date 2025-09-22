"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, FileText, BookOpen, Download } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function ResourcesHero() {
  const { t, locale } = useTranslation()

  const stats = [
    {
      icon: FileText,
      number: "150+",
      label: locale === "fr" ? "Documents" : "Documents",
    },
    {
      icon: BookOpen,
      number: "25+",
      label: locale === "fr" ? "Guides" : "Guides",
    },
    {
      icon: Download,
      number: "5000+",
      label: locale === "fr" ? "Téléchargements" : "Downloads",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6 text-balance">
            {locale === "fr" ? "Bibliothèque de Ressources" : "Resource Library"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            {locale === "fr"
              ? "Accédez à une collection complète de documents, guides et outils pour exceller dans les marchés publics"
              : "Access a complete collection of documents, guides and tools to excel in public procurement"}
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder={locale === "fr" ? "Rechercher dans les ressources..." : "Search resources..."}
              className="pl-12 pr-4 py-3 text-lg"
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              {locale === "fr" ? "Rechercher" : "Search"}
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-2xl font-bold text-primary">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
