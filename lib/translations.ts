export const translations = {
  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      about: "À propos",
      news: "Actualités",
      resources: "Ressources",
      membership: "Adhésion",
      contact: "Contact",
      memberArea: "Espace Membres",
    },
    // Homepage
    home: {
      title: "Association des Praticiens des Marchés Publics au Cameroun",
      subtitle: "Promouvoir les bonnes pratiques, la formation et la transparence dans les marchés publics",
      heroDescription:
        "L'APMC est une organisation professionnelle dédiée à l'amélioration des pratiques dans le secteur des marchés publics au Cameroun.",
      joinUs: "Rejoignez-nous",
      learnMore: "En savoir plus",
      latestNews: "Dernières actualités",
      ourMission: "Notre mission",
      missionText: "Promouvoir l'excellence et la transparence dans les marchés publics camerounais",
      keyNumbers: "Chiffres clés",
      members: "Membres",
      events: "Événements",
      publications: "Publications",
    },
    // About
    about: {
      title: "À propos de l'APMC",
      mission: "Mission",
      vision: "Vision",
      objectives: "Objectifs",
      team: "Équipe dirigeante",
      history: "Notre histoire",
    },
    // Common
    common: {
      readMore: "Lire la suite",
      viewAll: "Voir tout",
      download: "Télécharger",
      search: "Rechercher",
      loading: "Chargement...",
      error: "Une erreur est survenue",
      backToHome: "Retour à l'accueil",
    },
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      news: "News",
      resources: "Resources",
      membership: "Membership",
      contact: "Contact",
      memberArea: "Member Area",
    },
    // Homepage
    home: {
      title: "Cameroonian Association of Public Procurement Practitioners",
      subtitle: "Promoting best practices, training and transparency in public procurement",
      heroDescription:
        "CAPPP is a professional organization dedicated to improving practices in the public procurement sector in Cameroon.",
      joinUs: "Join Us",
      learnMore: "Learn More",
      latestNews: "Latest News",
      ourMission: "Our Mission",
      missionText: "Promoting excellence and transparency in Cameroonian public procurement",
      keyNumbers: "Key Numbers",
      members: "Members",
      events: "Events",
      publications: "Publications",
    },
    // About
    about: {
      title: "About CAPPP",
      mission: "Mission",
      vision: "Vision",
      objectives: "Objectives",
      team: "Leadership Team",
      history: "Our History",
    },
    // Common
    common: {
      readMore: "Read More",
      viewAll: "View All",
      download: "Download",
      search: "Search",
      loading: "Loading...",
      error: "An error occurred",
      backToHome: "Back to Home",
    },
  },
} as const

export type TranslationKey = keyof typeof translations.fr
export type NestedTranslationKey<T> = T extends object
  ? { [K in keyof T]: T[K] extends object ? `${string & K}.${NestedTranslationKey<T[K]>}` : string & K }[keyof T]
  : never

export function getTranslation(locale: "fr" | "en", key: string): string {
  const keys = key.split(".")
  let value: any = translations[locale]

  for (const k of keys) {
    value = value?.[k]
  }

  return value || key
}
