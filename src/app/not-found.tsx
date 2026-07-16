import Link from 'next/link'
import { headers } from 'next/headers'
import { defaultLocale, Locale, locales } from '@/lib/i18n-config'
import { getPageUrl } from '@/lib/route-helper'
import { getT } from '@/lib/data/translations'
import styles from './not-found.module.css'

function getLangFromPath(pathname: string): Locale {
  for (const locale of locales) {
    if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
      return locale
    }
  }
  return defaultLocale
}

export default async function NotFound() {
  const headersList = await headers()
  const pathname = headersList.get('x-next-url') ?? headersList.get('referer') ?? ''
  const lang = getLangFromPath(pathname)
  const t = await getT(lang)

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <p className={styles.code}>{t('not-found.code')}</p>
        <h1 className={styles.title}>{t('not-found.title')}</h1>
        <p className={styles.description}>{t('not-found.description')}</p>

        <div className={styles.actions}>
          <Link href={getPageUrl('home', lang)} className={styles.primaryButton}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            {t('not-found.backHome')}
          </Link>
          <Link href={getPageUrl('contact', lang)} className={styles.secondaryButton}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            {t('not-found.contact')}
          </Link>
        </div>

        <div className={styles.separator} />
      </div>
    </div>
  )
}
