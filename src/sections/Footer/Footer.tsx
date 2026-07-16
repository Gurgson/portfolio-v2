import Link from 'next/link'
import { getT } from '@/lib/data/translations'
import { Locale } from '@/lib/i18n-config'
import styles from './footer.module.css'

import { CONTACT_INFO } from '@/lib/contants'
import { getHighlightedProjects } from '@/lib/data/projects'

interface FooterProps {
  lang: Locale
}

export default async function Footer({ lang }: FooterProps) {
  const t = await getT(lang)
  const highlightedProjects = await getHighlightedProjects()

  return (
    <footer className={`${styles.footer} contrast`}>
      <div className={styles.container}>
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>{t('sections.footer.cta')}</h2>
        </div>
        <div className={styles.columnsGrid}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>
              {t('sections.footer.columns.links.title')}
            </h3>
            <nav className={styles.nav}>
              <Link href={`/${lang}`} className={styles.link}>
                <span className={styles.linkArrow}>›</span>
                <small>{t('sections.footer.columns.links.home')}</small>
              </Link>
              <Link href={`/${lang}/contact`} className={styles.link}>
                <span className={styles.linkArrow}>›</span>
                <small>{t('sections.footer.columns.links.contact')}</small>
              </Link>
              <Link href={`/${lang}/references`} className={styles.link}>
                <span className={styles.linkArrow}>›</span>
                <small>{t('sections.footer.columns.links.references')}</small>
              </Link>
            </nav>
          </div>

          {/* Kolumna 2: Projekty */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>
              {t('sections.footer.columns.projects.title')}
            </h3>
            <nav className={styles.nav}>
              <Link href={`/${lang}#projects`} className={styles.link}>
                <span className={styles.linkArrow}>›</span>
                <small>{t('sections.footer.columns.projects.all')}</small>
              </Link>
              {highlightedProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/${lang}/projects/${project.slug[lang]}`}
                  className={styles.link}
                >
                  <span className={styles.linkArrow}>›</span>
                  <small>{project.name[lang]}</small>
                </Link>
              ))}
            </nav>
          </div>

          {/* Kolumna 3: Kontakt */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>
              {t('sections.footer.columns.contact.title')}
            </h3>
            <div className={styles.contactList}>
              <Link
                href={`/${lang}/contact/#${t('sections.footer.columns.contact.formInternalId')}`}
                className={styles.contactItem}
              >
                <small>{t('sections.footer.columns.contact.form')}</small>
              </Link>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className={styles.contactItem}
              >
                <small>
                  {t('sections.footer.emailLabel')}: {CONTACT_INFO.email}
                </small>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                className={styles.contactItem}
              >
                <small>
                  {t('sections.footer.phoneLabel')}: {CONTACT_INFO.phone}
                </small>
              </a>
            </div>

            {/* Social icons */}
            <div className={styles.socialLinks}>
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Dolny pasek */}
      <div className={styles.bottom}>
        <div className={styles.bottomContent}>
          <small className={styles.copyright}>
            {t('sections.footer.copyright')}
          </small>
          <small className={styles.builtWith}>
            {t('sections.footer.builtWith')}
          </small>
        </div>
      </div>
    </footer>
  )
}
