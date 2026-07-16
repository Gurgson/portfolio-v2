'use client'

import { useState, useEffect } from 'react'
import styles from './animatedText.module.css'

type SlideDirection = 'up' | 'down' | 'left' | 'right'

interface AnimatedTextProps {
  text: string
  speed?: number
  delay?: number
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  className?: string
  onComplete?: () => void
  showCursor?: boolean
  cursorChar?: string
  loop?: boolean
  pauseOnComplete?: number
  slide?: boolean
  slideDirection?: SlideDirection
  slideDuration?: number
  slideDistance?: number
}

const inlineTags = ['span']

export const AnimatedText = ({
  text,
  speed = 50,
  delay = 0,
  tag: Tag = 'span',
  className = '',
  onComplete,
  showCursor = true,
  cursorChar = '|',
  loop = false,
  pauseOnComplete = 1000,
  slide = false,
  slideDirection = 'up',
  slideDuration = 600,
  slideDistance = 30,
}: AnimatedTextProps) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [isVisible, setIsVisible] = useState(!slide)

  const isInline = inlineTags.includes(Tag)

  useEffect(() => {
    if (slide) {
      const visibilityTimeout = setTimeout(() => {
        setIsVisible(true)
      }, delay)
      return () => clearTimeout(visibilityTimeout)
    }
  }, [slide, delay])

  useEffect(() => {
    let isMounted = true

    const animate = () => {
      if (!isMounted) return

      setDisplayedText('')
      setIsComplete(false)

      const startTimeout = setTimeout(
        () => {
          let currentIndex = 0

          const interval = setInterval(() => {
            if (!isMounted) {
              clearInterval(interval)
              return
            }

            if (currentIndex < text.length) {
              setDisplayedText(text.slice(0, currentIndex + 1))
              currentIndex++
            } else {
              clearInterval(interval)
              setIsComplete(true)
              onComplete?.()

              if (loop) {
                setTimeout(animate, pauseOnComplete)
              }
            }
          }, speed)
        },
        slide ? slideDuration : delay
      )

      return startTimeout
    }

    const timeout = animate()

    return () => {
      isMounted = false
      clearTimeout(timeout)
    }
  }, [
    onComplete,
    text,
    speed,
    delay,
    loop,
    pauseOnComplete,
    slide,
    slideDuration,
  ])

  const getSlideStyles = (): React.CSSProperties => {
    if (!slide) return {}

    const transforms: Record<SlideDirection, string> = {
      up: `translateY(${slideDistance}px)`,
      down: `translateY(-${slideDistance}px)`,
      left: `translateX(${slideDistance}px)`,
      right: `translateX(-${slideDistance}px)`,
    }

    return {
      '--slide-transform': transforms[slideDirection],
      '--slide-duration': `${slideDuration}ms`,
    } as React.CSSProperties
  }

  const displayClass = isInline ? styles.inline : styles.block
  const slideClass = slide
    ? `${styles.slide} ${isVisible ? styles.slideVisible : ''}`
    : ''

  return (
    <Tag
      className={`${styles.animatedText} ${displayClass} ${slideClass} ${className}`}
      style={getSlideStyles()}
    >
      {displayedText}
      {showCursor && !isComplete && (
        <span className={styles.cursor}>{cursorChar}</span>
      )}
    </Tag>
  )
}
