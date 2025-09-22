"use client"

import { usePathname } from "next/navigation"
import { getLocaleFromPathname } from "@/lib/i18n"
import { getTranslation } from "@/lib/translations"

export function useTranslation() {
  const pathname = usePathname()
  const locale = getLocaleFromPathname(pathname)

  const t = (key: string): string => {
    return getTranslation(locale, key)
  }

  return { t, locale }
}
