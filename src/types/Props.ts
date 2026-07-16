// types/Props.ts
import { Locale } from '@/lib/i18n-config'
import Translations from '@/types/Translations'

export interface PageProps {
  params: Promise<{ lang: Locale }>
}

export interface WithDict {
  dict: Translations
}

export interface WithLang {
  lang: Locale
}

export interface WithTranslations extends WithDict, WithLang {}

export interface SectionProps<T> {
  content: T
}
