import { Metadata } from 'next'
import { Locale } from '@/lib/i18n-config'
import { recommendationsTranslations as t } from '@/dictionaries/pages/reccomendation'
import styles from './recommendationsPage.module.css'
import { recommendations } from '@/data/recommendation'
import RecommendationCard from './RecommendationCard'

interface RecommendationsPageProps {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({
  params,
}: RecommendationsPageProps): Promise<Metadata> {
  const { lang } = (await params) as { lang: Locale }

  return {
    title: t.hero.title[lang],
    description: t.hero.description[lang],
  }
}

export default async function RecommendationsPage({
  params,
}: RecommendationsPageProps) {
  const { lang } = (await params) as { lang: Locale }

  return (
    <div className={` ${styles.pageWrapper}`}>
      <main className={styles.container}>
        {/* Hero Section */}
        <header className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>{t.hero.subtitle[lang]}</span>
            <h1 className={styles.title}>{t.hero.title[lang]}</h1>
            <p className={styles.description}>{t.hero.description[lang]}</p>
          </div>
          <div className={styles.heroDecoration}>
            <svg
              viewBox="0 0 120 120"
              className={styles.quoteIcon}
              aria-hidden="true"
            >
              <path
                d="M25 50c0-13.8 11.2-25 25-25v15c-5.5 0-10 4.5-10 10v5h15v25H25V50zm45 0c0-13.8 11.2-25 25-25v15c-5.5 0-10 4.5-10 10v5h15v25H70V50z"
                fill="currentColor"
              />
            </svg>
          </div>
        </header>

        {/* Recommendations Grid */}
        <section className={styles.grid}>
          {recommendations.map((rec, index) => (
            <RecommendationCard
              key={rec.id}
              rec={rec}
              index={index}
              lang={lang}
              t={{
                download: t.card.download[lang],
              }}
            />
          ))}
        </section>

        <div className={styles.bottomDecoration}>
          <div className={styles.decorLine} />
        </div>
      </main>
    </div>
  )
}
