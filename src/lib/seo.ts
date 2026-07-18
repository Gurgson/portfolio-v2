import type { Metadata } from 'next'
import type { Locale } from './i18n-config'
import { SITE_CONFIG, PERSONAL_INFO } from './contants'

const OG_LOCALE: Record<Locale, string> = { pl: 'pl_PL', en: 'en_US' }
const SITE_NAME = `${PERSONAL_INFO.fullName} - Portfolio`

interface OgArgs {
  title: string
  description: string
  lang: Locale
  path?: string
  images?: string[]
  type?: 'website' | 'article'
}

export function buildOpenGraph({
  title,
  description,
  lang,
  path,
  images,
  type = 'website',
}: OgArgs): Metadata['openGraph'] {
  return {
    title,
    description,
    type,
    siteName: SITE_NAME,
    url: `${SITE_CONFIG.url}${path ?? ''}`,
    locale: OG_LOCALE[lang],
    ...(images ? { images } : {}),
  }
}

export function buildTwitter({
  title,
  description,
  images,
}: Pick<OgArgs, 'title' | 'description' | 'images'>): Metadata['twitter'] {
  return {
    card: images && images.length ? 'summary_large_image' : 'summary',
    title,
    description,
    ...(images ? { images } : {}),
  }
}
