export const locales = ["fr", "en"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "fr"

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
}

export const localeFlags: Record<Locale, string> = {
  fr: "🇫🇷",
  en: "🇬🇧",
}

export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split("/")
  const locale = segments[1] as Locale
  return locales.includes(locale) ? locale : defaultLocale
}

export function removeLocaleFromPathname(pathname: string): string {
  const segments = pathname.split("/")
  if (locales.includes(segments[1] as Locale)) {
    return "/" + segments.slice(2).join("/")
  }
  return pathname
}
