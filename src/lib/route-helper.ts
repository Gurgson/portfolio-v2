import { Locale } from './i18n-config'
import { projects } from '@/data/projects'

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

export function getProjectUrlById(id: number, lang: Locale): string {
  const project = projects.find((p) => p.id === id)
  if (!project) {
    return getPageUrl('home', lang)
  }
  return getProjectUrl(project.slug[lang], lang)
}

export function getProjectBySlug(
  slug: string,
  lang: Locale
): (typeof projects)[0] | undefined {
  return projects.find((project) => project.slug[lang] === slug)
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

export function switchLanguageUrl(currentUrl: string, newLang: Locale): string {
  const normalizedUrl = currentUrl.replace(/\/$/, '')
  const currentLang = getLangFromUrl(normalizedUrl)

  const projectMatch = normalizedUrl.match(
    /\/(pl\/project|en\/project)\/([\w-]+)/
  )
  if (projectMatch && currentLang) {
    const currentSlug = projectMatch[2]
    const project = getProjectBySlug(currentSlug, currentLang)

    if (project) {
      return getProjectUrl(project.slug[newLang], newLang)
    }
    return getProjectUrl(currentSlug, newLang)
  }

  const pageName = getPageName(normalizedUrl)
  if (pageName) {
    return getPageUrl(pageName, newLang)
  }

  return getPageUrl('home', newLang)
}

export function isValidRoute(url: string, lang: Locale): boolean {
  const normalizedUrl = url.replace(/\/$/, '')
  const pageName = getPageName(normalizedUrl)

  if (!pageName) {
    return false
  }

  if (routes[pageName]?.[lang]) {
    return true
  }

  if (pageName === 'project') {
    const slug = getSlugFromUrl(normalizedUrl)
    return slug ? !!getProjectBySlug(slug, lang) : false
  }

  return false
}

export function isValidProjectSlug(slug: string, lang: Locale): boolean {
  return !!getProjectBySlug(slug, lang)
}

export function getAllProjectSlugs(lang: Locale): string[] {
  return projects.map((project) => project.slug[lang])
}

export function getAllProjectUrls(lang: Locale): string[] {
  return projects.map((project) => getProjectUrl(project.slug[lang], lang))
}
