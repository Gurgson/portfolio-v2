'use client'

import { useState } from 'react'
import { SectionHeader } from '@/components/Header/SectionHeader'
import { Technology } from '@/types/Technology'
import Image from 'next/image'
import styles from './technologiesSection.module.css'
import { technologiesData, TechnologyGroup } from '@/data/technlogiesData'
import { Locale, Localized } from '@/lib/i18n-config'
import { sections } from '@/dictionaries/sections'
import { getIconUrlOriginal } from '@/lib/technologies-helper'

interface TechnologiesSectionProps {
  lang: Locale
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
}: TechnologiesSectionProps) {
  const [activeGroup, setActiveGroup] = useState<TechnologyGroup | null>(null)
  const [lockedGroup, setLockedGroup] = useState<TechnologyGroup | null>(null)

  const { headers } = sections
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
      <SectionHeader decoration={headers.technologies.small[lang]}>
        {headers.technologies.big[lang]}
      </SectionHeader>

      {/* Desktop view */}
      <div className={styles.desktopView}>
        <div className={styles.cards}>
          {technologiesData.map((group, index) => (
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
                <span className={styles.lockIcon}>X</span>
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
              {sections.homeTech.hintText[lang]}
            </small>
          )}
        </div>
      </div>

      {/* Mobile view */}
      <div className={styles.mobileView}>
        {technologiesData.map((group, index) => (
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
