'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import styles from './navigation.module.css'
import { getPageUrl, getPageName } from '@/lib/route-helper'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import { Locale } from '@/lib/i18n-config'
import { navigation } from '@/dictionaries/navigation'
import { common } from '@/dictionaries/common'

interface NavigationProps {
  lang: Locale
}

export default function Navigation({ lang }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  // Strona główna ma zawsze-ciemne hero -> nawigacja musi być jasna niezależnie od motywu.
  const onHero = getPageName(pathname) === 'home'

  // Po zjechaniu ~połowy hero (50vh) pokazujemy tło paska; na innych stronach próg mały.
  useEffect(() => {
    const getThreshold = () => (onHero ? window.innerHeight * 0.5 : 64)
    let ticking = false
    const update = () => {
      ticking = false
      setScrolled(window.scrollY > getThreshold())
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [onHero])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav
      className={`${styles.nav} ${onHero ? styles.onHero : ''} ${
        scrolled ? styles.scrolled : ''
      }`}
    >
      <div className={styles.links}>
        <Link
          href={getPageUrl('home', lang)}
          className={styles.link}
          prefetch={true}
        >
          {navigation.homePage[lang]}
        </Link>

        <Link
          href={getPageUrl('recommendations', lang)}
          className={styles.link}
          prefetch={true}
        >
          {navigation.recommendationsPage[lang]}
        </Link>

        <Link
          href={getPageUrl('contact', lang)}
          className={styles.link}
          prefetch={true}
        >
          {navigation.contactPage[lang]}
        </Link>
      </div>

      <div className={styles.controls}>
        <ThemeSwitcher lang={lang} />
        <LanguageSwitcher currentLang={lang} />

        <button
          className={`${styles.burger} ${isMenuOpen ? styles.burgerOpen : ''}`}
          onClick={toggleMenu}
          aria-label={common.navigation.toggleMenu[lang]}
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {isMenuOpen && <div className={styles.overlay} onClick={closeMenu} />}

      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}
      >
        <button
          className={styles.closeButton}
          onClick={closeMenu}
          aria-label={common.navigation.closeMenu[lang]}
        >
          ×
        </button>

        <div className={styles.mobileLinks}>
          <Link
            href={getPageUrl('home', lang)}
            className={styles.mobileLink}
            prefetch={true}
            onClick={closeMenu}
          >
            {navigation.homePage[lang]}
          </Link>

          <Link
            href={getPageUrl('recommendations', lang)}
            className={styles.mobileLink}
            prefetch={true}
            onClick={closeMenu}
          >
            {navigation.recommendationsPage[lang]}
          </Link>

          <Link
            href={getPageUrl('contact', lang)}
            className={styles.mobileLink}
            prefetch={true}
            onClick={closeMenu}
          >
            {navigation.contactPage[lang]}
          </Link>
        </div>
      </div>
    </nav>
  )
}
