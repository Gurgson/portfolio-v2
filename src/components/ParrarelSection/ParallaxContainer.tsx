'use client'

import { ReactNode, useEffect, useRef, CSSProperties } from 'react'
import styles from './ParallaxContainer.module.css'

export interface ParallaxContainerProps {
  children: ReactNode
  backgroundImage?: string
  backgroundColor?: string
  height?: string
  className?: string
}

export const ParallaxContainer: React.FC<ParallaxContainerProps> = ({
  children,
  backgroundImage,
  backgroundColor = '#000',
  height = '100vh',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Respektuj preferencję zredukowanego ruchu — pomiń parallax.
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (reduceMotion) return

    // Cache: lista elementów + ich prędkości (czytane raz, nie co scroll).
    const items = Array.from(
      container.querySelectorAll<HTMLElement>('[data-speed][data-start]')
    ).map((el) => ({
      el,
      speed: parseFloat(el.getAttribute('data-speed') || '1'),
    }))

    // Cache geometrii — czytane tylko przy montażu/resize, nie w handlerze scrolla.
    let containerTop = 0
    let containerHeight = 0
    let windowHeight = 0

    const measure = () => {
      containerTop = container.offsetTop
      containerHeight = container.offsetHeight
      windowHeight = window.innerHeight
    }

    let ticking = false

    const update = () => {
      ticking = false
      const scrollY = window.scrollY

      // Poza viewportem — nic nie licz.
      if (
        scrollY + windowHeight <= containerTop ||
        scrollY >= containerTop + containerHeight
      ) {
        return
      }

      const relativeScroll = scrollY - containerTop
      for (const { el, speed } of items) {
        el.style.transform = `translate3d(0, ${relativeScroll * speed}px, 0)`
      }
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    const onResize = () => {
      measure()
      onScroll()
    }

    measure()
    update() // pozycja początkowa

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <header
      ref={containerRef}
      className={`${styles.parallaxContainer} ${className}`}
      style={
        {
          '--height': height,
          '--bg-color': backgroundColor,
          '--bg-image': backgroundImage ? `url(${backgroundImage})` : 'none',
        } as CSSProperties
      }
    >
      {children}
    </header>
  )
}
