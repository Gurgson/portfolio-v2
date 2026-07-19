import Image from 'next/image'
import type Recommendation from '@/types/Recomendations'
import type { Locale } from '@/lib/i18n-config'
import styles from './recommendationsPage.module.css'

interface RecommendationCardProps {
  rec: Recommendation
  index: number
  lang: Locale
  t: {
    download: string
  }
}

export default function RecommendationCard({
  rec,
  index,
  lang,
  t,
}: RecommendationCardProps) {
  return (
    <article
      className={styles.card}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Quote mark */}
      <div className={styles.cardQuote}>
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
        </svg>
      </div>

      {/* Content */}
      <blockquote className={styles.cardDescription}>
        {rec.description?.[lang] || ''}
      </blockquote>

      {/* PDF Preview – always visible */}
      <a
        href={rec.filePath[lang]}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.pdfPreview}
        aria-label={`${rec.company} – PDF`}
      >
        <Image
          src={rec.imagePath[lang]}
          alt={`${rec.company} rekomendacja`}
          width={827}
          height={1169}
          className={styles.pdfImage}
          sizes="(max-width: 900px) 100vw, 450px"
        />
      </a>

      {/* Author info */}
      <div className={styles.cardFooter}>
        <div className={styles.authorInfo}>
          <div className={styles.authorAvatar}>
            {rec.company.charAt(0)}
          </div>
          <div className={styles.authorDetails}>
            <span className={styles.companyName}>{rec.company}</span>
            {rec.author && (
              <span className={styles.authorName}>{rec.author}</span>
            )}
          </div>
        </div>

        <div className={styles.cardActions}>
          <a
            href={rec.filePath[lang]}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadButton}
            aria-label={`${t.download} - ${rec.company}`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>{t.download}</span>
          </a>
        </div>
      </div>

      <span className={styles.cardNumber}>
        {String(index + 1).padStart(2, '0')}
      </span>
    </article>
  )
}
