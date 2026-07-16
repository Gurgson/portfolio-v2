// AboutSection.tsx
import Image from 'next/image'
import styles from './aboutSection.module.css'
import { SectionHeader } from '@/components/Header/SectionHeader'
import { Locale } from '@/lib/i18n-config'
import { common } from '@/dictionaries/common'
import { aboutData } from '@/data/aboutmeData'
import { sections } from '@/dictionaries/sections'
import { Nest } from '@/components/FollowerSystem'

interface AboutSectionProps {
  lang: Locale
}

export default function AboutSection({ lang }: AboutSectionProps) {
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
            <SectionHeader decoration={sections.homeAbout.title[lang]}>
              {sections.homeAbout.subtitle[lang]}
            </SectionHeader>
          </Nest>

          <blockquote className={styles.quote}>
            <h3>{aboutData.quote[lang]}</h3>
          </blockquote>
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.imageFrame}>
            <Image
              src="/me.jpg"
              alt={aboutData.imageAlt[lang]}
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
              {sections.homeAbout.greeting[lang]}
            </small>
            <h2 className={styles.name}>{common.credentials.name}</h2>
            <p className={styles.role}>
              <span className={styles.roleTag}>&lt;</span>
              <span>{aboutData.title[lang]}</span>
              <span className={styles.roleTag}>/&gt;</span>
            </p>
          </div>

          <div className={styles.divider} />

          <p
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: aboutData.description[lang] }}
          />

          <div className={styles.availability}>
            <span className={styles.availabilityDot} />
            <small>{sections.homeAbout.availability[lang]}</small>
          </div>
        </div>
      </div>
    </section>
  )
}
