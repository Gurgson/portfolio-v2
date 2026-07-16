import 'server-only'
import { unstable_cache } from 'next/cache'
import { asc } from 'drizzle-orm'
import { db } from '@/db'
import { projects } from '@/db/schema'
import type { Locale } from '@/lib/i18n-config'
import type { ProjectItem } from '@/types/Project'

type ProjectRow = typeof projects.$inferSelect

/** Wiersz DB (null-e, string-i) -> domenowy ProjectItem (undefined, unie literalne). */
function toProjectItem(r: ProjectRow): ProjectItem {
  return {
    id: r.id,
    slug: r.slug,
    name: r.name,
    highlight: r.highlight,
    teamSize: r.teamSize ?? undefined,
    technologies: r.technologies,
    cardDescription: r.cardDescription,
    articleHtml: r.articleHtml ?? undefined,
    github: r.github ?? undefined,
    live: r.live ?? undefined,
    thumbnailUrl: r.thumbnailUrl,
    startDate: r.startDate ?? undefined,
    endDate: r.endDate ?? undefined,
    category: (r.category ?? undefined) as ProjectItem['category'],
    status: (r.status ?? undefined) as ProjectItem['status'],
    seo: r.seo,
    followerMesages: r.followerMessages ?? undefined,
  }
}

/** Wszystkie projekty (cache + tag do rewalidacji). */
export const getProjects = unstable_cache(
  async (): Promise<ProjectItem[]> => {
    const rows = await db.select().from(projects).orderBy(asc(projects.sort))
    return rows.map(toProjectItem)
  },
  ['projects'],
  { tags: ['projects'], revalidate: 3600 }
)

export async function getHighlightedProjects(): Promise<ProjectItem[]> {
  return (await getProjects()).filter((p) => p.highlight)
}

export async function getProjectBySlug(
  slug: string,
  locale: Locale = 'en'
): Promise<ProjectItem | undefined> {
  return (await getProjects()).find((p) => p.slug[locale] === slug)
}

export async function getProjectById(
  id: number
): Promise<ProjectItem | undefined> {
  return (await getProjects()).find((p) => p.id === id)
}

/** Mapa slugów pl/en — do klienta (przełączanie języka na stronach projektów). */
export const getProjectSlugs = unstable_cache(
  async (): Promise<{ pl: string; en: string }[]> => {
    const rows = await db.select({ slug: projects.slug }).from(projects)
    return rows.map((r) => ({ pl: r.slug.pl, en: r.slug.en }))
  },
  ['project-slugs'],
  { tags: ['projects'], revalidate: 3600 }
)
