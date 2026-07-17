import { Metadata } from 'next'
import styles from './languageSelectionPage.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { getDictionary, createTranslator } from '@/lib/data/translations'

// Treść z DB -> renderuj na żądanie (nie prerenderuj przy buildzie bez bazy).
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Choose language',
  robots: {
    follow: true,
  },
}

export default async function LanguageSelectionPage() {
  // Strona wyboru języka pokazuje oba języki naraz -> dwa translatory.
  const pl = createTranslator(await getDictionary('pl'))
  const en = createTranslator(await getDictionary('en'))

  return (
    <main className={`${styles.container}`}>
      <Link href="/pl">
        <section className={`${styles.section} ${styles.pl}`}>
          <div className={`${styles.content} ${styles.plContent}`}>
            <h1 className={styles.title}>
              {pl('sections.languagePage.title')}
            </h1>
            <h2 className={styles.subtitle}>
              {pl('sections.languagePage.subtitle')}
            </h2>

            <Image
              src="/icons/pl.svg"
              alt={pl('sections.languagePage.flagAlt')}
              width={200}
              height={100}
              className={styles.flagImage}
            />
            <small className={styles.description}>
              {pl('sections.languagePage.description')}
            </small>
          </div>
          <div
            aria-hidden="true"
            className={`${styles.plRects} ${styles.rects}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>
      </Link>

      <Image
        src="/programmist.gif"
        alt={en('sections.languagePage.programmerAlt')}
        width={450}
        height={450}
        className={styles.centerImage}
        unoptimized
      />

      <Link href="/en">
        <section
          className={`${styles.section} ${styles.en} ${styles.sectionBorder}`}
        >
          <div className={`${styles.content} ${styles.enContent}`}>
            <h1 className={styles.title}>
              {en('sections.languagePage.title')}
            </h1>
            <h2 className={styles.subtitle}>
              {en('sections.languagePage.subtitle')}
            </h2>
            <Image
              src="/icons/en.svg"
              alt={en('sections.languagePage.flagAlt')}
              width={200}
              height={100}
              className={styles.flagImage}
            />
            <small className={styles.description}>
              {en('sections.languagePage.description')}
            </small>
          </div>
          <div
            aria-hidden="true"
            className={`${styles.enRects} ${styles.rects}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>
      </Link>
    </main>
  )
}
