import type { Metadata } from 'next'
import type { Locale } from './i18n-config'
import { SITE_CONFIG, PERSONAL_INFO } from './contants'

const OG_LOCALE: Record<Locale, string> = { pl: 'pl_PL', en: 'en_US' }
const SITE_NAME = `${PERSONAL_INFO.fullName} - Portfolio`

// Domyślny obrazek udostępniania (public/og.webp, 1200×630). Używany, gdy
// strona nie poda własnego (np. projekt podaje swoją miniaturę).
// jpg (nie webp) dla maksymalnej zgodności podglądów — Messenger/WhatsApp/iMessage
// bywają wybredne z webp. 1200×630, ~60KB (poniżej limitu WhatsAppa ~300KB).
const DEFAULT_OG_IMAGE = {
  url: `${SITE_CONFIG.url}/og.jpg`,
  width: 1200,
  height: 630,
  alt: `${PERSONAL_INFO.fullName} — Full-Stack Developer`,
}

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
    images: images ?? [DEFAULT_OG_IMAGE],
  }
}

export function buildTwitter({
  title,
  description,
  images,
}: Pick<OgArgs, 'title' | 'description' | 'images'>): Metadata['twitter'] {
  return {
    card: 'summary_large_image',
    title,
    description,
    images: images ?? [DEFAULT_OG_IMAGE.url],
  }
}
