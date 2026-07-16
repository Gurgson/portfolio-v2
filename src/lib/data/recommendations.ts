import 'server-only'
import { unstable_cache } from 'next/cache'
import { asc } from 'drizzle-orm'
import { db } from '@/db'
import { recommendations } from '@/db/schema'
import type Recommendation from '@/types/Recomendations'

type RecommendationRow = typeof recommendations.$inferSelect

function toRecommendation(r: RecommendationRow): Recommendation {
  return {
    id: r.id,
    filePath: r.filePath,
    imagePath: r.imagePath,
    description: r.description ?? undefined,
    company: r.company,
    author: r.author ?? undefined,
  }
}

/** Wszystkie rekomendacje (cache + tag do rewalidacji). */
export const getRecommendations = unstable_cache(
  async (): Promise<Recommendation[]> => {
    const rows = await db
      .select()
      .from(recommendations)
      .orderBy(asc(recommendations.sort))
    return rows.map(toRecommendation)
  },
  ['recommendations'],
  { tags: ['recommendations'], revalidate: 3600 }
)
