'use client'

import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { Locale } from '@/lib/i18n-config'
import styles from './heroSection.module.css'

type Tok = { t: string; c?: string }

// Kod (identyfikatory po angielsku) + zlokalizowane stringi tekstowe.
function buildSegments(lang: Locale): Tok[] {
  const kw = (t: string): Tok => ({ t, c: styles.kw })
  const typ = (t: string): Tok => ({ t, c: styles.typ })
  const str = (t: string): Tok => ({ t, c: styles.str })
  const fn = (t: string): Tok => ({ t, c: styles.fn })
  const prop = (t: string): Tok => ({ t, c: styles.prop })
  const x = (t: string): Tok => ({ t })

  const introduce =
    lang === 'pl'
      ? '$"Cześć! Jestem {Name}, {Role}."'
      : '$"Hi! I\'m {Name}, {Role}."'
  const contact =
    lang === 'pl'
      ? '"Porozmawiajmy o współpracy!"'
      : '"Let\'s work together!"'

  const lines: Tok[][] = [
    [
      kw('public sealed class'),
      x(' '),
      typ('Jakub'),
      x(' : '),
      typ('Programmer'),
      x(', '),
      typ('IOpenToWork'),
    ],
    [x('{')],
    [
      x('    '),
      kw('public override string'),
      x(' '),
      prop('Name'),
      x(' => '),
      str('"Jakub"'),
      x(';'),
    ],
    [
      x('    '),
      kw('public override string'),
      x(' '),
      prop('Role'),
      x(' => '),
      str('"Full-Stack Developer"'),
      x(';'),
    ],
    [],
    [
      x('    '),
      kw('public override'),
      x(' '),
      typ('IReadOnlyCollection'),
      x('<'),
      typ('Technology'),
      x('> '),
      prop('TechStack'),
      x(' { '),
      kw('get'),
      x('; } ='),
    ],
    [x('    [')],
    [x('        '), typ('Technology'), x('.'), prop('CSharp'), x(',')],
    [x('        '), typ('Technology'), x('.'), prop('DotNet'), x(',')],
    [x('        '), typ('Technology'), x('.'), prop('TypeScript'), x(',')],
    [x('        '), typ('Technology'), x('.'), prop('React'), x(',')],
    [x('        '), typ('Technology'), x('.'), prop('NextJs')],
    [x('    ];')],
    [],
    [
      x('    '),
      kw('public bool'),
      x(' '),
      prop('IsAvailable'),
      x(' => '),
      kw('true'),
      x(';'),
    ],
    [],
    [
      x('    '),
      kw('public override string'),
      x(' '),
      fn('Introduce'),
      x('() =>'),
    ],
    [x('        '), str(introduce), x(';')],
    [],
    [
      x('    '),
      kw('public'),
      x(' '),
      typ('Software'),
      x(' '),
      fn('Build'),
      x('('),
      typ('Idea'),
      x(' idea) =>'),
    ],
    [x('        '), kw('new'), x('(idea, '), prop('TechStack'), x(');')],
    [],
    [
      x('    '),
      kw('public string'),
      x(' '),
      fn('Contact'),
      x('() =>'),
    ],
    [x('        '), str(contact), x(';')],
    [x('}')],
  ]

  const segs: Tok[] = []
  lines.forEach((line, i) => {
    line.forEach((tok) => segs.push(tok))
    if (i < lines.length - 1) segs.push({ t: '\n' })
  })
  return segs
}

export function CodeTyper({ lang }: { lang: Locale }) {
  const segments = useMemo(() => buildSegments(lang), [lang])
  const total = useMemo(
    () => segments.reduce((n, s) => n + s.t.length, 0),
    [segments]
  )
  const [shown, setShown] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0

    if (reduce) {
      raf = requestAnimationFrame(() => setShown(total))
      return () => cancelAnimationFrame(raf)
    }

    const startAt = performance.now() + 1200 // po pojawieniu się karty
    const perChar = 9 // ms na znak
    const tick = (now: number) => {
      const elapsed = now - startAt
      const n =
        elapsed <= 0 ? 0 : Math.min(total, Math.floor(elapsed / perChar))
      setShown(n)
      if (n < total) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [total])

  let budget = shown
  const out: ReactNode[] = []
  for (let i = 0; i < segments.length; i++) {
    if (budget <= 0) break
    const seg = segments[i]
    const take = Math.min(seg.t.length, budget)
    budget -= take
    const text = seg.t.slice(0, take)
    out.push(
      <span key={i} className={seg.c}>
        {text}
      </span>
    )
  }

  const done = shown >= total

  return (
    <code className={styles.code} aria-hidden="true">
      {out}
      <span className={`${styles.cursor} ${done ? styles.cursorDone : ''}`}>
        |
      </span>
    </code>
  )
}
