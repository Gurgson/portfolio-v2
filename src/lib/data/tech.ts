import 'server-only'
import { unstable_cache } from 'next/cache'
import { asc } from 'drizzle-orm'
import { db } from '@/db'
import { techGroups } from '@/db/schema'
import type { TechnologyGroup } from '@/types/Technology'

/** Grupy technologii (cache + tag do rewalidacji). */
export const getTechGroups = unstable_cache(
  async (): Promise<TechnologyGroup[]> => {
    const rows = await db
      .select()
      .from(techGroups)
      .orderBy(asc(techGroups.sort))
    return rows.map((r) => ({ title: r.title, left: r.left, right: r.right }))
  },
  ['tech-groups'],
  { tags: ['tech-groups'], revalidate: 3600 }
)
