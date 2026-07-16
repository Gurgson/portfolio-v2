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

  const greeting = lang === 'pl' ? '"Cześć!"' : '"Hello!"'
  const hire =
    lang === 'pl'
      ? '"Zbudujmy razem coś wielkiego!"'
      : '"Let\'s build something great!"'

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
      kw('public string'),
      x(' '),
      prop('Greeting'),
      x(' => '),
      str(greeting),
      x(';'),
    ],
    [
      x('    '),
      kw('public string'),
      x(' '),
      prop('Role'),
      x(' => '),
      str('"Full-Stack Developer"'),
      x(';'),
    ],
    [],
    [x('    '), kw('public string'), x('[] '), prop('Stack'), x(' =>')],
    [x('    [')],
    [x('        '), str('"C#"'), x(',')],
    [x('        '), str('".NET"'), x(',')],
    [x('        '), str('"React"'), x(',')],
    [x('        '), str('"Next.js"')],
    [x('    ];')],
    [],
    [
      x('    '),
      kw('public bool'),
      x(' '),
      prop('OpenToWork'),
      x(' => '),
      kw('true'),
      x(';'),
    ],
    [],
    [x('    '), kw('public override string'), x(' '), fn('HireMe'), x('()')],
    [x('    {')],
    [x('        '), kw('return'), x(' '), str(hire), x(';')],
    [x('    }')],
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
