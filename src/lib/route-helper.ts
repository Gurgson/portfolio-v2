import { Locale } from './i18n-config'

export const routes: Record<string, Record<Locale, string>> = {
  home: {
    pl: '/pl',
    en: '/en',
  },
  recommendations: {
    pl: '/pl/rekomendacje',
    en: '/en/recommendations',
  },
  contact: {
    pl: '/pl/kontakt',
    en: '/en/contact',
  },
}

const reverseRoutes: Record<string, string> = {}
Object.entries(routes).forEach(([pageName, urls]) => {
  Object.values(urls).forEach((url) => {
    reverseRoutes[url] = pageName
  })
})

export function getPageUrl(pageName: string, lang: Locale): string {
  return routes[pageName]?.[lang] || `/${lang}`
}

export function getProjectUrl(slug: string, lang: Locale): string {
  return `/${lang}/project/${slug}`
}

export function getPageName(url: string): string | null {
  const normalizedUrl = url.replace(/\/$/, '')

  if (normalizedUrl.match(/\/(pl\/project|en\/project)\/[\w-]+/)) {
    return 'project'
  }

  return reverseRoutes[normalizedUrl] || null
}

export function getSlugFromUrl(url: string): string | null {
  const normalizedUrl = url.replace(/\/$/, '')

  const projectMatch = normalizedUrl.match(
    /\/(pl\/project|en\/project)\/([\w-]+)/
  )
  if (projectMatch) {
    return projectMatch[2]
  }

  return null
}

export function getLangFromUrl(url: string): Locale | null {
  const match = url.match(/^\/(pl|en)/)
  return match ? (match[1] as Locale) : null
}

/**
 * URL po zmianie języka. Dla stron projektów mapuje slug między językami
 * na podstawie przekazanej mapy (pl/en) — bez importu danych projektów
 * (route-helper jest używany też po stronie klienta).
 */
export function switchLanguageUrl(
  currentUrl: string,
  newLang: Locale,
  projectSlugs: { pl: string; en: string }[] = []
): string {
  const normalizedUrl = currentUrl.replace(/\/$/, '')
  const currentLang = getLangFromUrl(normalizedUrl)

  const projectMatch = normalizedUrl.match(
    /\/(pl\/project|en\/project)\/([\w-]+)/
  )
  if (projectMatch && currentLang) {
    const currentSlug = projectMatch[2]
    const entry = projectSlugs.find((s) => s[currentLang] === currentSlug)
    const newSlug = entry ? entry[newLang] : currentSlug
    return getProjectUrl(newSlug, newLang)
  }

  const pageName = getPageName(normalizedUrl)
  if (pageName) {
    return getPageUrl(pageName, newLang)
  }

  return getPageUrl('home', newLang)
}
