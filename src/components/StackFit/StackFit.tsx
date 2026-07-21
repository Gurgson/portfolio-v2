'use client'

import { useEffect } from 'react'

/**
 * Dopasowuje punkt przyklejenia stackowanych sekcji do ich wysokości.
 *
 * Problem: sekcja wyższa niż viewport przy `sticky; top: 0` przypina się
 * natychmiast, więc jej dolna część nigdy nie wjeżdża w kadr — kolejna sekcja
 * ją przykrywa i treść (np. długa lista) zostaje ucięta.
 *
 * Rozwiązanie: takim sekcjom ustawiamy UJEMNY `top` = `wysokość ekranu −
 * wysokość sekcji`. Sekcja przykleja się wtedy DOŁEM: najpierw przewija się
 * cała jej treść, a dopiero na końcu przypina się i następna na nią wjeżdża.
 * Efekt nakładania zostaje zachowany — także na wąskich ekranach.
 *
 * Sekcje mieszczące się na ekranie dostają 0, czyli klasyczne stackowanie.
 * Bez JS zmienna nie jest ustawiona i CSS używa fallbacku `0px`.
 */
export function StackFit({
  selector = '[data-stack-item]',
}: {
  selector?: string
}) {
  useEffect(() => {
    const getItems = () =>
      Array.from(document.querySelectorAll<HTMLElement>(selector))

    let raf = 0

    const apply = () => {
      raf = 0
      const viewport = window.innerHeight
      for (const el of getItems()) {
        // offsetHeight to wysokość layoutu — nie zmienia jej przypięcie
        const offset = Math.min(0, viewport - el.offsetHeight)
        el.style.setProperty('--stack-top', `${offset}px`)
      }
    }

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(apply)
    }

    apply()
    window.addEventListener('resize', schedule)

    // treść potrafi zmienić wysokość po doładowaniu (obrazki, fonty, filtry)
    const observer = new ResizeObserver(schedule)
    getItems().forEach((el) => observer.observe(el))

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('resize', schedule)
      observer.disconnect()
    }
  }, [selector])

  return null
}
