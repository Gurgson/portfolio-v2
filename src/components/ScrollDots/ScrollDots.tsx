'use client'

import { useEffect, useState } from 'react'
import styles from './scrollDots.module.css'

export type ScrollDotItem = { id: string; label: string }

/**
 * Boczna nawigacja kropkowa dla stackowanych sekcji.
 *
 * Kropki to prawdziwe linki (`<a href="#id">`) — działają bez JS, są
 * dostępne z klawiatury i dają udostępnialne kotwice. Płynne przewijanie
 * robi CSS (`scroll-behavior: smooth` w globals), więc JS nie jest do tego
 * potrzebny — obsługuje tylko podświetlenie aktywnej kropki.
 *
 * Uwaga: przy `position: sticky` IntersectionObserver nie nadaje się —
 * przypięte sekcje leżą jedna na drugiej i wszystkie raportują "widoczne".
 * Aktywna jest ta, która jako OSTATNIA dobiła do górnej krawędzi.
 */
export function ScrollDots({
  items,
  navLabel = 'Nawigacja sekcji',
}: {
  items: ScrollDotItem[]
  navLabel?: string
}) {
  const [active, setActive] = useState(items[0]?.id ?? '')

  useEffect(() => {
    let raf = 0

    const update = () => {
      raf = 0
      let current = items[0]?.id ?? ''
      for (const item of items) {
        const el = document.getElementById(item.id)
        // <= 1px: sekcja dotarła do góry i przykryła poprzednie
        if (el && el.getBoundingClientRect().top <= 1) current = item.id
      }
      setActive(current)
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [items])

  /**
   * Natywny skok do kotwicy nie działa przy stackowaniu: przypięta sekcja ma
   * `rect.top === 0`, więc przeglądarka uznaje że jesteśmy już na miejscu i
   * nie przewija W GÓRĘ. Liczymy więc pozycję w normalnym flow — chwilowo
   * wyłączając `sticky`. Wszystko dzieje się synchronicznie (bez paintu
   * pomiędzy), więc nie ma mignięcia.
   */
  const scrollToSection = (event: React.MouseEvent, id: string) => {
    const el = document.getElementById(id)
    if (!el) return // bez JS/elementu zostaje natywna kotwica
    event.preventDefault()

    const prevPosition = el.style.position
    el.style.position = 'static'
    const target = el.getBoundingClientRect().top + window.scrollY
    el.style.position = prevPosition

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: target, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <nav className={styles.dots} aria-label={navLabel}>
      {items.map((item) => {
        const isActive = active === item.id
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => scrollToSection(e, item.id)}
            className={`${styles.dot} ${isActive ? styles.active : ''}`}
            aria-label={item.label}
            aria-current={isActive ? 'true' : undefined}
          >
            <span className={styles.label}>{item.label}</span>
          </a>
        )
      })}
    </nav>
  )
}
