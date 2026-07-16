'use client'

import { Locale } from '@/lib/i18n-config'
import styles from './heroSection.module.css'

export function HeroScrollButton({ lang }: { lang: Locale }) {
  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      className={styles.scrollBtn}
      onClick={scrollDown}
      aria-label={lang === 'pl' ? 'Przewiń niżej' : 'Scroll down'}
    >
      <span>{lang === 'pl' ? 'Zobacz więcej' : "Let's explore"}</span>
      <svg
        className={styles.scrollChevron}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  )
}
