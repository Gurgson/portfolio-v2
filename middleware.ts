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

  // ✅ ZMIANA: rewrite zamiast redirect
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: [
    // Pomiń wewnętrzne ścieżki Next.js ORAZ pliki statyczne (ścieżki z kropką,
    // np. /bird-spawn.png, /me.jpg, /hero/night/night-1.webp) — inaczej
    // middleware przepisuje je na /pl/... i łapie catch-all not-found.
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
}
