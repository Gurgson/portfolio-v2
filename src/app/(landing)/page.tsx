import { Metadata } from 'next'
import styles from './languageSelectionPage.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { sections } from '@/dictionaries/sections'

export const metadata: Metadata = {
  title: 'Choose language',
  robots: {
    follow: true,
  },
}

export default function LanguageSelectionPage() {
  const { languagePage } = sections

  return (
    <main className={`${styles.container}`}>
      <Link href="/pl">
        <section className={`${styles.section} ${styles.pl}`}>
          <div className={`${styles.content} ${styles.plContent}`}>
            <h1 className={styles.title}>{languagePage.title.pl}</h1>
            <h2 className={styles.subtitle}>{languagePage.subtitle.pl}</h2>

            <Image
              src="/icons/pl.svg"
              alt={languagePage.flagAlt.pl}
              width={200}
              height={100}
              className={styles.flagImage}
            />
            <small className={styles.description}>
              {languagePage.description.pl}
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
        alt={languagePage.programmerAlt.en}
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
            <h1 className={styles.title}>{languagePage.title.en}</h1>
            <h2 className={styles.subtitle}>{languagePage.subtitle.en}</h2>
            <Image
              src="/icons/en.svg"
              alt={languagePage.flagAlt.en}
              width={200}
              height={100}
              className={styles.flagImage}
            />
            <small className={styles.description}>
              {languagePage.description.en}
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
