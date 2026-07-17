'use client'

import { useState } from 'react'
import { SectionHeader } from '@/components/Header/SectionHeader'
import { Technology, TechnologyGroup } from '@/types/Technology'
import Image from 'next/image'
import styles from './technologiesSection.module.css'
import { Locale, Localized } from '@/lib/i18n-config'
import { useT } from '@/providers/Dictionary/DictionaryProvider'
import { getIconUrlOriginal } from '@/lib/technologies-helper'

interface TechnologiesSectionProps {
  lang: Locale
  groups: TechnologyGroup[]
}

export function isTechnologyArray(items: unknown[]): items is Technology[] {
  return (
    Array.isArray(items) &&
    items.length > 0 &&
    items[0] !== null &&
    typeof items[0] === 'object' &&
    'code' in items[0]
  )
}

const getItems = (
  items: Technology[] | Localized<string[]>,
  lang: Locale
): Technology[] | string[] => {
  if (!items) return []

  if (Array.isArray(items) && isTechnologyArray(items)) return items
  return (items as Localized<string[]>)[lang] ?? []
}

export default function TechnologiesSection({
  lang,
  groups,
}: TechnologiesSectionProps) {
  const [activeGroup, setActiveGroup] = useState<TechnologyGroup | null>(null)
  const [lockedGroup, setLockedGroup] = useState<TechnologyGroup | null>(null)

  const t = useT()
  const displayedGroup = lockedGroup || activeGroup

  const handleCardClick = (group: TechnologyGroup) => {
    if (lockedGroup?.title[lang] === group.title[lang]) {
      setLockedGroup(null)
    } else {
      setLockedGroup(group)
    }
  }

  return (
    <section className={styles.section}>
      <SectionHeader decoration={t('sections.headers.technologies.small')}>
        {t('sections.headers.technologies.big')}
      </SectionHeader>

      {/* Desktop view */}
      <div className={styles.desktopView}>
        <div className={styles.cards}>
          {groups.map((group, index) => (
            <div
              key={group.title[lang]}
              className={`${styles.card} ${
                displayedGroup?.title[lang] === group.title[lang]
                  ? styles.cardActive
                  : ''
              } ${lockedGroup?.title[lang] === group.title[lang] ? styles.cardLocked : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setActiveGroup(group)}
              onMouseLeave={() => setActiveGroup(null)}
              onClick={() => handleCardClick(group)}
            >
              <h2 className={styles.cardTitle}>{group.title[lang]}</h2>
              {lockedGroup?.title[lang] === group.title[lang] && (
                <svg
                  className={styles.lockIcon}
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <g transform="translate(0 -1028.4)">
                    <g transform="matrix(.70711 .70711 -.70711 .70711 737.68 297.72)">
                      <path
                        className={styles.pinHeadBack}
                        d="m11 1028.4v13h1 6.406c-0.595-1.1-1.416-2.1-2.406-2.8v-8c0.616-0.6 1.131-1.4 1.531-2.2h-5.531-1z"
                      />
                      <path
                        className={styles.pinNeedle}
                        d="m11 13v2 4 2l1 2v-2-6-2h-1z"
                        transform="translate(0 1028.4)"
                      />
                      <path
                        className={styles.pinNeedleShadow}
                        d="m12 13v2 4 2 2l1-2v-2-4-2h-1z"
                        transform="translate(0 1028.4)"
                      />
                      <path
                        className={styles.pinHeadFront}
                        d="m6.4688 1028.4c0.4006 0.8 0.915 1.6 1.5312 2.2v8c-0.9897 0.7-1.8113 1.7-2.4062 2.8h6.4062v-13h-5.5312z"
                      />
                    </g>
                  </g>
                </svg>
              )}
            </div>
          ))}
        </div>

        <div
          className={`${styles.panel} ${
            displayedGroup ? styles.panelVisible : styles.panelHint
          }`}
        >
          {displayedGroup ? (
            <>
              <div className={styles.column}>
                <h3 className={styles.columnTitle}>
                  {displayedGroup.left.label[lang]}
                </h3>
                {(() => {
                  const leftItems: Technology[] | string[] = getItems(
                    displayedGroup.left.items,
                    lang
                  )
                  return <ItemList items={leftItems} />
                })()}
              </div>
              <div className={styles.column}>
                <h3 className={styles.columnTitle}>
                  {displayedGroup.right.label[lang]}
                </h3>
                {(() => {
                  const rightItems: Technology[] | string[] = getItems(
                    displayedGroup.right.items,
                    lang
                  )
                  return <ItemList items={rightItems} />
                })()}
              </div>
            </>
          ) : (
            <small className={styles.hint}>
              {t('sections.homeTech.hintText')}
            </small>
          )}
        </div>
      </div>

      {/* Mobile view */}
      <div className={styles.mobileView}>
        {groups.map((group, index) => (
          <div
            key={group.title[lang]}
            className={styles.mobileGroup}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <h2 className={styles.mobileGroupTitle}>{group.title[lang]}</h2>
            <div className={styles.mobileContent}>
              <div className={styles.column}>
                <h3 className={styles.columnTitle}>{group.left.label[lang]}</h3>
                {(() => {
                  const leftItems: Technology[] | string[] = getItems(
                    group.left.items,
                    lang
                  )
                  return <ItemList items={leftItems} />
                })()}
              </div>
              <div className={styles.column}>
                <h3 className={styles.columnTitle}>
                  {group.right.label[lang]}
                </h3>
                {(() => {
                  const rightItems: Technology[] | string[] = getItems(
                    group.right.items,
                    lang
                  )
                  return <ItemList items={rightItems} />
                })()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ItemList({ items }: { items: Technology[] | string[] }) {
  if (!items || items.length === 0) return null

  if (isTechnologyArray(items)) {
    return (
      <div className={styles.techGrid}>
        {items.map((tech, index) => (
          <div
            key={tech.code}
            className={styles.techTile}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className={styles.iconWrapper}>
              <Image
                src={getIconUrlOriginal(tech.code)}
                alt={tech.full || tech.short}
                width={64}
                height={64}
                loading="lazy"
              />
            </div>
            <p className={styles.techName}>{tech.full || tech.short}</p>
          </div>
        ))}
      </div>
    )
  }

  return (
    <ul className={styles.conceptList}>
      {items.map((item, index) => (
        <li
          key={item}
          className={styles.conceptItem}
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
