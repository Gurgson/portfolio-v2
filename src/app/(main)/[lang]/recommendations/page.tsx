import { Metadata } from 'next'
import { Locale } from '@/lib/i18n-config'
import { getT } from '@/lib/data/translations'
import styles from './recommendationsPage.module.css'
import { getRecommendations } from '@/lib/data/recommendations'
import RecommendationCard from './RecommendationCard'

interface RecommendationsPageProps {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({
  params,
}: RecommendationsPageProps): Promise<Metadata> {
  const { lang } = (await params) as { lang: Locale }
  const t = await getT(lang)
  const title = t('recommendations.hero.title')
  const description = t('recommendations.hero.description')

  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
  }
}

export default async function RecommendationsPage({
  params,
}: RecommendationsPageProps) {
  const { lang } = (await params) as { lang: Locale }
  const t = await getT(lang)
  const recommendations = await getRecommendations()

  return (
    <div className={` ${styles.pageWrapper}`}>
      <main className={styles.container}>
        {/* Hero Section */}
        <header className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              {t('recommendations.hero.subtitle')}
            </span>
            <h1 className={styles.title}>{t('recommendations.hero.title')}</h1>
            <p className={styles.description}>
              {t('recommendations.hero.description')}
            </p>
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
                download: t('recommendations.card.download'),
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
