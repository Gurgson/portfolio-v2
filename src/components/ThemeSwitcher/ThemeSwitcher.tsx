'use client'

import { useTheme } from '../../providers/Themes/ThemeProvider'
import { common } from '@/dictionaries/common'
import { Locale } from '@/lib/i18n-config'
import styles from './ThemeSwitcher.module.css'

interface ThemeSwitcherProps {
  lang?: Locale
}

export default function ThemeSwitcher({ lang = 'pl' }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme()
  const t = common.theme
  const targetMode = theme === 'light' ? t.dark[lang] : t.light[lang]

  return (
    <button
      onClick={toggleTheme}
      className={styles.themeSwitcher}
      aria-label={`${t.switchTo[lang]} ${targetMode}`}
      title={`${t.current[lang]}: ${theme === 'light' ? t.light[lang] : t.dark[lang]}`}
    >
      {theme === 'light' ? (
        // Moon icon (dark mode)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        // Sun icon (light mode)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      )}
    </button>
  )
}
