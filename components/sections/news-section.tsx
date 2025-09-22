"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/hooks/use-translation"

export function NewsSection() {
  const { t, locale } = useTranslation()

  const getLocalizedHref = (href: string) => {
    return locale === "fr" ? href : `/${locale}${href}`
  }

  // Mock news data
  const news = [
    {
      id: 1,
      title:
        locale === "fr"
          ? "Nouvelle réglementation sur les marchés publics au Cameroun"
          : "New public procurement regulations in Cameroon",
      excerpt:
        locale === "fr"
          ? "Les dernières modifications apportées au code des marchés publics et leur impact sur les praticiens."
          : "Latest amendments to the public procurement code and their impact on practitioners.",
      date: "2024-01-15",
      category: locale === "fr" ? "Réglementation" : "Regulation",
      image: "/government-building-cameroon.jpg",
    },
    {
      id: 2,
      title:
        locale === "fr"
          ? "Formation certifiante en passation des marchés"
          : "Certification training in procurement procedures",
      excerpt:
        locale === "fr"
          ? "Inscrivez-vous à notre prochaine session de formation pour obtenir votre certification professionnelle."
          : "Register for our next training session to obtain your professional certification.",
      date: "2024-01-10",
      category: locale === "fr" ? "Formation" : "Training",
      image: "/placeholder-my6us.png",
    },
    {
      id: 3,
      title: locale === "fr" ? "Assemblée générale annuelle 2024" : "Annual General Assembly 2024",
      excerpt:
        locale === "fr"
          ? "Rejoignez-nous pour notre assemblée générale annuelle et découvrez nos réalisations de l'année."
          : "Join us for our annual general assembly and discover our achievements of the year.",
      date: "2024-01-05",
      category: locale === "fr" ? "Événement" : "Event",
      image: "/placeholder-6vjmu.png",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-4">{t("home.latestNews")}</h2>
            <p className="text-xl text-muted-foreground">
              {locale === "fr"
                ? "Restez informé de nos dernières actualités et événements"
                : "Stay informed about our latest news and events"}
            </p>
          </div>
          <Button asChild variant="outline" className="hidden sm:flex bg-transparent">
            <Link href={getLocalizedHref("/news")}>
              {t("common.viewAll")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {article.category}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(article.date).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US")}
                  </div>
                </div>
                <h3 className="font-semibold text-lg leading-tight text-balance">{article.title}</h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-pretty">{article.excerpt}</p>
                <Button asChild variant="ghost" size="sm" className="p-0 h-auto">
                  <Link href={getLocalizedHref(`/news/${article.id}`)}>
                    {t("common.readMore")}
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Button asChild variant="outline">
            <Link href={getLocalizedHref("/news")}>
              {t("common.viewAll")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
