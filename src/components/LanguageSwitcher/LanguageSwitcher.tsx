'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Locale } from '@/lib/i18n-config'
import { switchLanguageUrl } from '@/lib/route-helper'
import styles from './LanguageSwitcher.module.css'

interface LanguageSwitcherProps {
  currentLang: Locale
}

export default function LanguageSwitcher({
  currentLang,
}: LanguageSwitcherProps) {
  const pathname = usePathname()
  const otherLang: Locale = currentLang === 'pl' ? 'en' : 'pl'
  const switchLangUrl = switchLanguageUrl(pathname, otherLang)

  return (
    <Link
      href={switchLangUrl}
      className={styles.langButton}
      prefetch={true}
      aria-label={`Switch to ${otherLang.toUpperCase()}`}
    >
      {otherLang.toUpperCase()}
    </Link>
  )
}
