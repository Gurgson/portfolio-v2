import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { locales, defaultLocale } from './src/lib/i18n-config'

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language')

  if (acceptLanguage) {
    const browserLang = acceptLanguage.split(',')[0].split('-')[0]

    if (locales.includes(browserLang as any)) {
      return browserLang
    }
  }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  const locale = getLocale(request)

  // Rewrite (NIE redirect) na wykryty język — także dla apexa '/'. Dzięki temu
  // '/' serwuje pełny HTML z metadanymi OG. Scrapery (Messenger/WhatsApp/iMessage)
  // często nie idą za redirectem, więc redirect => pusty podgląd. Dla roota
  // unikamy podwójnego ukośnika ('/pl/', który nie łapie trasy '/pl').
  const url = request.nextUrl.clone()
  url.pathname = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)'],
}
