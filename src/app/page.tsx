import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { locales, defaultLocale, type Locale } from '@/lib/i18n-config'

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
