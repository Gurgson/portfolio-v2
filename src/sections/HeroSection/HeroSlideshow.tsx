'use client'

import { useEffect, useState } from 'react'
import { useTheme } from '@/providers/Themes/ThemeProvider'
import styles from './heroSection.module.css'

// Zestawy zależne od motywu: nocne pod dark, dzienne pod light.
const IMAGES: Record<'dark' | 'light', string[]> = {
  dark: [
    '/hero/night/night-1.webp',
    '/hero/night/night-2.webp',
    '/hero/night/night-3.webp',
  ],
  light: [
    '/hero/day/day-1.webp',
    '/hero/day/day-2.webp',
    '/hero/day/day-3.webp',
  ],
}

const INTERVAL_MS = 12000

export function HeroSlideshow() {
  const { theme } = useTheme()
  const images = IMAGES[theme] ?? IMAGES.dark
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (reduceMotion) return

    const id = setInterval(() => {
      setActive((i) => (i + 1) % images.length)
    }, INTERVAL_MS)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <div className={styles.slideshow} aria-hidden="true">
      {images.map((src, i) => (
        <div
          key={src}
          className={styles.slide}
          style={{
            backgroundImage: `url("${src}")`,
            opacity: i === active ? 1 : 0,
          }}
        />
      ))}
    </div>
  )
}
