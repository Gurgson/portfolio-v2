'use client'
import { CSSProperties, ReactNode } from 'react'
import styles from './ParallaxItem.module.css'

export interface ParallaxItemProps {
  children: ReactNode
  speed: number
  start: number
  zIndex: number
  className?: string
}

export const ParallaxItem: React.FC<ParallaxItemProps> = ({
  children,
  speed,
  start,
  zIndex,
  className = '',
}) => {
  return (
    <div
      className={`${styles.parallaxItem} ${className}`}
      data-speed={speed}
      data-start={start}
      style={
        {
          '--z-index': zIndex,
          '--start': `${start}%`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  )
}
