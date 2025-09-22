"use client"

import { useTranslation } from "@/hooks/use-translation"

export function ContactHero() {
  const { t, locale } = useTranslation()

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6 text-balance">
          {locale === "fr" ? "Contactez-nous" : "Contact Us"}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
          {locale === "fr"
            ? "Nous sommes là pour répondre à vos questions et vous accompagner dans votre parcours professionnel"
            : "We are here to answer your questions and support you in your professional journey"}
        </p>
      </div>
    </section>
  )
}
