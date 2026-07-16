import 'server-only'
import { unstable_cache } from 'next/cache'
import { eq } from 'drizzle-orm'
import { db } from '@/db'
import { translations } from '@/db/schema'
import type { Locale } from '@/lib/i18n-config'

/** Płaski słownik: 'page.key' -> wartość (dla jednego języka). */
export type Dictionary = Record<string, string>

/**
 * Konwencja kluczy (page + key), zgodna z obecnymi słownikami TS:
 *   page='sections'    key='homeHeader.title'   -> t('sections.homeHeader.title')
 *   page='navigation'  key='homePage'           -> t('navigation.homePage')
 *   page='common'      key='follower.nestAlt'   -> t('common.follower.nestAlt')
 *   page='contact' | 'not-found' | 'recommendations' (strony podrzędne)
 *
 * Tabela jest mała, więc pobieramy cały słownik dla języka i cache'ujemy.
 * (page key zostaje w tabeli do organizacji/edycji i ewentualnych zapytań zakresowych.)
 */
function loadDictionary(locale: Locale) {
  return unstable_cache(
    async (): Promise<Dictionary> => {
      const rows = await db
        .select({
          page: translations.page,
          key: translations.key,
          value: translations.value,
        })
        .from(translations)
        .where(eq(translations.locale, locale))

      const dict: Dictionary = {}
      for (const r of rows) {
        dict[`${r.page}.${r.key}`] = r.value
      }
      return dict
    },
    ['dictionary', locale],
    { tags: ['translations'], revalidate: 3600 }
  )()
}

export function getDictionary(locale: Locale): Promise<Dictionary> {
  return loadDictionary(locale)
}

/** t('sections.homeHeader.title') -> wartość (fallback: podany tekst albo sam klucz). */
export function createTranslator(dict: Dictionary) {
  return (key: string, fallback?: string): string => dict[key] ?? fallback ?? key
}

export type Translator = ReturnType<typeof createTranslator>

/** Helper dla server-componentów: const t = await getT(lang). */
export async function getT(locale: Locale): Promise<Translator> {
  return createTranslator(await getDictionary(locale))
}
