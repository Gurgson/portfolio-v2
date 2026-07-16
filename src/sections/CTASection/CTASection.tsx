import Link from 'next/link'
import { Locale } from '@/lib/i18n-config'
import { sections } from '@/dictionaries/sections'
import styles from './ctaSection.module.css'
import Image from 'next/image'

interface CTASectionProps {
  lang: Locale
}

export default function CTASection({ lang }: CTASectionProps) {
  const t = sections.cta

  const extras = [
    {
      icon: '/icons/CTA/fast-response.png',
      label: t.extras.fast[lang],
    },
    {
      icon: '/icons/CTA/communication.png',
      label: t.extras.friendly[lang],
    },
    {
      icon: '/icons/CTA/approach.png',
      label: t.extras.professional[lang],
    },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.backgroundPattern} />
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{t.eyebrow[lang]}</p>
          <h2 className={styles.title}>{t.title[lang]}</h2>
          <p className={styles.description}>{t.description[lang]}</p>

          <div className={styles.buttons}>
            <Link href={`/${lang}/contact`} className={styles.primaryButton}>
              <p>{t.buttons.contact[lang]}</p>
              <span className={styles.buttonArrow}>→</span>
            </Link>
          </div>

          <div className={`contrast ${styles.extras}`}>
            {extras.map((item, index) => (
              <div
                key={index}
                className={styles.extraItem}
                data-number={`0${index + 1}`}
              >
                <Image
                  src={item.icon}
                  width={44}
                  height={44}
                  alt=""
                  className={styles.extraIcon}
                />
                <small className={styles.extraLabel}>{item.label}</small>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.decoration}>
          <div className={styles.decorCircle} />
          <div className={styles.decorCircle} />
          <div className={styles.decorCircle} />
        </div>
      </div>
    </section>
  )
}
