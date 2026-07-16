// AboutSection.tsx
import Image from 'next/image'
import styles from './aboutSection.module.css'
import { SectionHeader } from '@/components/Header/SectionHeader'
import { Locale } from '@/lib/i18n-config'
import { getT } from '@/lib/data/translations'
import { Nest } from '@/components/FollowerSystem'

interface AboutSectionProps {
  lang: Locale
}

export default async function AboutSection({ lang }: AboutSectionProps) {
  const t = await getT(lang)

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <Nest
            position={{ x: 25, y: 5 }}
            messages={[
              { content: 'Lorem ipsum' },
              { content: 'Lorem ipsum 2 Lorem ipsum 2' },
            ]}
            reverseColors={true}
            lang={lang}
          >
            <SectionHeader decoration={t('sections.homeAbout.title')}>
              {t('sections.homeAbout.subtitle')}
            </SectionHeader>
          </Nest>

          <blockquote className={styles.quote}>
            <h3>{t('about.quote')}</h3>
          </blockquote>
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.imageFrame}>
            <Image
              src="/me.jpg"
              alt={t('about.imageAlt')}
              fill
              className={styles.image}
              loading="lazy"
            />
            <div className={styles.imageOverlay} />
          </div>
          <div className={styles.imageDecor} />
        </div>

        <div className={`contrast ${styles.rightColumn}`}>
          <div className={styles.titleBlock}>
            <small className={styles.greeting}>
              {t('sections.homeAbout.greeting')}
            </small>
            <h2 className={styles.name}>{t('common.credentials.name')}</h2>
            <p className={styles.role}>
              <span className={styles.roleTag}>&lt;</span>
              <span>{t('about.title')}</span>
              <span className={styles.roleTag}>/&gt;</span>
            </p>
          </div>

          <div className={styles.divider} />

          <p
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: t('about.description') }}
          />

          <div className={styles.availability}>
            <span className={styles.availabilityDot} />
            <small>{t('sections.homeAbout.availability')}</small>
          </div>
        </div>
      </div>
    </section>
  )
}
