"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, X, FileText, BookOpen } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

interface SearchResult {
  id: string
  title: string
  type: "page" | "news" | "resource" | "member"
  url: string
  excerpt: string
  icon: React.ReactNode
}

export function SearchBar() {
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [results, setResults] = useState<SearchResult[]>([])
  const { locale } = useTranslation()

  // Mock search results
  const mockResults: SearchResult[] = [
    {
      id: "1",
      title: locale === "fr" ? "Formation en marchés publics" : "Public procurement training",
      type: "page",
      url: "/training",
      excerpt: locale === "fr" ? "Programmes de formation certifiante" : "Certified training programs",
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      id: "2",
      title: locale === "fr" ? "Nouvelle réglementation" : "New regulations",
      type: "news",
      url: "/news/1",
      excerpt: locale === "fr" ? "Dernières mises à jour réglementaires" : "Latest regulatory updates",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      id: "3",
      title: locale === "fr" ? "Guide des bonnes pratiques" : "Best practices guide",
      type: "resource",
      url: "/resources/guide",
      excerpt: locale === "fr" ? "Document de référence pour les praticiens" : "Reference document for practitioners",
      icon: <FileText className="h-4 w-4" />,
    },
  ]

  const handleSearch = (value: string) => {
    setQuery(value)
    if (value.length > 2) {
      // Simulate search
      const filtered = mockResults.filter(
        (result) =>
          result.title.toLowerCase().includes(value.toLowerCase()) ||
          result.excerpt.toLowerCase().includes(value.toLowerCase()),
      )
      setResults(filtered)
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }

  const clearSearch = () => {
    setQuery("")
    setResults([])
    setIsOpen(false)
  }

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder={locale === "fr" ? "Rechercher..." : "Search..."}
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 pr-10"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 shadow-lg">
          <CardContent className="p-0">
            <div className="max-h-96 overflow-y-auto">
              {results.map((result) => (
                <div
                  key={result.id}
                  className="p-4 hover:bg-muted cursor-pointer border-b last:border-b-0"
                  onClick={() => {
                    // Navigate to result
                    clearSearch()
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-muted-foreground mt-1">{result.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{result.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{result.excerpt}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs bg-muted px-2 py-1 rounded">
                          {result.type === "page" && (locale === "fr" ? "Page" : "Page")}
                          {result.type === "news" && (locale === "fr" ? "Actualité" : "News")}
                          {result.type === "resource" && (locale === "fr" ? "Ressource" : "Resource")}
                          {result.type === "member" && (locale === "fr" ? "Membre" : "Member")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t bg-muted/50">
              <p className="text-xs text-muted-foreground text-center">
                {locale === "fr" ? `${results.length} résultat(s) trouvé(s)` : `${results.length} result(s) found`}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
