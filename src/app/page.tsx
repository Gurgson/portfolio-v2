import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { locales, defaultLocale, type Locale } from '@/lib/i18n-config'

// Root `/`: wykryj język z Accept-Language i przekieruj na /pl lub /en.
// Deterministyczne i niezależne od middleware (które w niektórych środowiskach
// dev nie wykonuje się poprawnie). W prod middleware zwykle przepisze `/` na
// język wcześniej; ta strona jest gwarantowanym fallbackiem, więc `/` nigdy
// nie jest 404.
export const dynamic = 'force-dynamic'

export default async function RootPage() {
  const h = await headers()
  const accept = h.get('accept-language') ?? ''
  const browserLang = accept.split(',')[0]?.split('-')[0] ?? ''
  const locale: Locale = locales.includes(browserLang as Locale)
    ? (browserLang as Locale)
    : defaultLocale
  redirect(`/${locale}`)
}
