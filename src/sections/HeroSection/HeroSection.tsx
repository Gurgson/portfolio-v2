import { Locale } from '@/lib/i18n-config'
import { getT } from '@/lib/data/translations'
import { HeroSlideshow } from './HeroSlideshow'
import { HeroScrollButton } from './HeroScrollButton'
import { CodeTyper } from './CodeTyper'
import styles from './heroSection.module.css'

interface HeroSectionProps {
  lang: Locale
}

export default async function HeroSection({ lang }: HeroSectionProps) {
  const t = await getT(lang)

  return (
    <section className={styles.hero}>
      <HeroSlideshow />
      <div className={styles.deco} aria-hidden="true" />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h1 className={styles.title}>{t('sections.homeHeader.title')}</h1>
          <h2 className={styles.subtitle}>
            {t('sections.homeHeader.subtitle')}
          </h2>
          <p className={styles.subtitle2}>
            {t('sections.homeHeader.subtitle2')}
          </p>
        </div>
        <HeroScrollButton lang={lang} />
      </div>

      {/* Karta z kodem C# po prawej — animowana (typewriter) */}
      <div className={styles.codeCard} aria-hidden="true">
        <div className={styles.codeBar}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.codeFile}>jakub.cs</span>
        </div>
        <CodeTyper lang={lang} />
      </div>

      {/* Ozdobna linia L (prawy bok + dół), rośnie z prawego-dolnego narożnika */}
      <div className={styles.frame} aria-hidden="true">
        <span className={styles.frameRight} />
        <span className={styles.frameBottom} />
      </div>
    </section>
  )
}
