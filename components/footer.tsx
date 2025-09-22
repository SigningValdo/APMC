"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function Footer() {
  const { t, locale } = useTranslation()

  const getLocalizedHref = (href: string) => {
    return locale === "fr" ? href : `/${locale}${href}`
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-sm">A</span>
              </div>
              <div>
                <div className="font-heading font-bold text-lg">{locale === "fr" ? "APMC" : "CAPPP"}</div>
                <div className="text-xs opacity-80">{locale === "fr" ? "Cameroun" : "Cameroon"}</div>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              {locale === "fr"
                ? "Association professionnelle dédiée à l'amélioration des pratiques dans les marchés publics au Cameroun."
                : "Professional association dedicated to improving public procurement practices in Cameroon."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{locale === "fr" ? "Liens rapides" : "Quick Links"}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={getLocalizedHref("/")} className="opacity-80 hover:opacity-100 transition-opacity">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedHref("/about")} className="opacity-80 hover:opacity-100 transition-opacity">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedHref("/news")} className="opacity-80 hover:opacity-100 transition-opacity">
                  {t("nav.news")}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedHref("/resources")} className="opacity-80 hover:opacity-100 transition-opacity">
                  {t("nav.resources")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">{locale === "fr" ? "Services" : "Services"}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={getLocalizedHref("/membership")}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  {t("nav.membership")}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedHref("/resources")} className="opacity-80 hover:opacity-100 transition-opacity">
                  {locale === "fr" ? "Formation" : "Training"}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedHref("/resources")} className="opacity-80 hover:opacity-100 transition-opacity">
                  {locale === "fr" ? "Certification" : "Certification"}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedHref("/contact")} className="opacity-80 hover:opacity-100 transition-opacity">
                  {locale === "fr" ? "Conseil" : "Consulting"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 opacity-80" />
                <span className="opacity-80">Yaoundé, Cameroun</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 opacity-80" />
                <span className="opacity-80">+237 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 opacity-80" />
                <span className="opacity-80">contact@apmc-cameroun.org</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>
            © 2024 {locale === "fr" ? "APMC" : "CAPPP"}.
            {locale === "fr" ? " Tous droits réservés." : " All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
