'use client'

import styles from './sectionHeader.module.css'

interface SectionHeaderProps {
  children: string
  decoration?: string
  paragraph?: string
  className?: string
}

export const SectionHeader = ({
  children,
  decoration,
  className = '',
}: SectionHeaderProps) => {
  const lines = (children ?? '').split('\n')

  return (
    <h1 className={`${styles.header} ${className}`}>
      {decoration && <span className={styles.decoration}>{decoration}</span>}
      <span className={styles.mainWrapper}>
        <span className={styles.main}>
          {lines.length > 1
            ? lines.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < lines.length - 1 && <br />}
                </span>
              ))
            : children}
        </span>
        <svg
          className={styles.underline}
          viewBox="0 0 200 20"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={styles.underlinePath}
            d="M0 17 Q 40 5, 100 10 Q 160 15, 200 3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </h1>
  )
}
