"use client"

import { useTranslation } from "@/hooks/use-translation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function LegalContent() {
  const { t } = useTranslation()

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
            {t("legal.title", "Mentions légales")}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t("legal.subtitle", "Informations légales et politique de confidentialité")}
          </p>
        </div>

        <div className="space-y-8">
          {/* Mentions légales */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-heading">{t("legal.mentions.title", "Mentions légales")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {t("legal.mentions.organization", "Dénomination sociale")}
                </h3>
                <p className="text-muted-foreground">
                  Association des Praticiens des Marchés Publics au Cameroun (APMC)
                  <br />
                  Cameroon Association of Public Procurement Practitioners (CAPPP)
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">{t("legal.mentions.address", "Siège social")}</h3>
                <p className="text-muted-foreground">
                  Yaoundé, Cameroun
                  <br />
                  BP 1234 Yaoundé
                  <br />
                  Tél : +237 6XX XXX XXX
                  <br />
                  Email : contact@apmc-cameroon.org
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">{t("legal.mentions.registration", "Enregistrement")}</h3>
                <p className="text-muted-foreground">
                  Association à but non lucratif enregistrée selon la loi camerounaise de 1990
                  <br />
                  Récépissé de déclaration N° XXX/RDA/J06/BAPP
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">{t("legal.mentions.hosting", "Hébergement")}</h3>
                <p className="text-muted-foreground">
                  Site hébergé par Vercel Inc.
                  <br />
                  340 S Lemon Ave #4133
                  <br />
                  Walnut, CA 91789, États-Unis
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Politique de confidentialité */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-heading">
                {t("legal.privacy.title", "Politique de confidentialité")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">{t("legal.privacy.collection", "Collecte des données")}</h3>
                <p className="text-muted-foreground">
                  Nous collectons uniquement les données nécessaires au fonctionnement de nos services : informations
                  d'adhésion, coordonnées de contact, et données de navigation anonymisées.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">{t("legal.privacy.usage", "Utilisation des données")}</h3>
                <p className="text-muted-foreground">
                  Vos données sont utilisées exclusivement pour la gestion de votre adhésion, l'envoi d'informations
                  relatives à l'association, et l'amélioration de nos services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">{t("legal.privacy.rights", "Vos droits")}</h3>
                <p className="text-muted-foreground">
                  Conformément à la législation camerounaise et aux standards internationaux, vous disposez d'un droit
                  d'accès, de rectification et de suppression de vos données personnelles.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">{t("legal.privacy.contact", "Contact")}</h3>
                <p className="text-muted-foreground">
                  Pour toute question relative à vos données personnelles, contactez-nous à : privacy@apmc-cameroon.org
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-heading">
                {t("legal.cookies.title", "Politique des cookies")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Notre site utilise des cookies techniques nécessaires au bon fonctionnement et des cookies d'analyse
                pour améliorer votre expérience utilisateur.
              </p>
              <p className="text-muted-foreground">
                Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalités du site
                pourraient être limitées.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
