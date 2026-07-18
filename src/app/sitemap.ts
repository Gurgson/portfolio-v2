import type { MetadataRoute } from 'next'
import { locales } from '@/lib/i18n-config'
import { SITE_CONFIG } from '@/lib/contants'
import { getProjectSlugs } from '@/lib/data/projects'

// Generowany na żądanie: dzięki temu ma dostęp do DB (projekty) w runtime.
// Przy buildzie w kontenerze nie ma DATABASE_URL, więc statyczny sitemap
// zgubiłby strony projektów.
export const dynamic = 'force-dynamic'

const BASE = SITE_CONFIG.url
const now = new Date()

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths: { path: string; priority: number }[] = [
    { path: '', priority: 1 },
    { path: '/recommendations', priority: 0.7 },
    { path: '/contact', priority: 0.7 },
  ]

  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const { path, priority } of staticPaths) {
      entries.push({
        url: `${BASE}/${locale}${path}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority,
      })
    }
  }

  const slugs = await getProjectSlugs()
  for (const locale of locales) {
    for (const s of slugs) {
      entries.push({
        url: `${BASE}/${locale}/project/${s[locale]}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    }
  }

  return entries
}
