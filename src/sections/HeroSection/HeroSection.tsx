import { Locale } from '@/lib/i18n-config'
import { sections } from '@/dictionaries/sections'
import { HeroSlideshow } from './HeroSlideshow'
import { HeroScrollButton } from './HeroScrollButton'
import styles from './heroSection.module.css'

interface HeroSectionProps {
  lang: Locale
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const t = sections.homeHeader

  return (
    <section className={styles.hero}>
      <HeroSlideshow />
      <div className={styles.deco} aria-hidden="true" />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h1 className={styles.title}>{t.title[lang]}</h1>
          <h2 className={styles.subtitle}>{t.subtitle[lang]}</h2>
          <p className={styles.subtitle2}>{t.subtitle2[lang]}</p>
        </div>
        <HeroScrollButton lang={lang} />
      </div>

      {/* Karta z kodem C# po prawej */}
      <div className={styles.codeCard} aria-hidden="true">
        <div className={styles.codeBar}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.codeFile}>jakub.cs</span>
        </div>
        <code className={styles.code}>
          <div>
            <span className={styles.kw}>public class</span>{' '}
            <span className={styles.typ}>Jakub</span> :{' '}
            <span className={styles.typ}>Programmer</span>,{' '}
            <span className={styles.typ}>IOpenToWork</span>
          </div>
          <div>{'{'}</div>
          <div>
            {'    '}
            <span className={styles.kw}>public string</span>{' '}
            <span className={styles.prop}>Greeting</span> =&gt;{' '}
            <span className={styles.str}>
              {lang === 'pl' ? '"Cześć!"' : '"Hello!"'}
            </span>
            ;
          </div>
          <div>
            {'    '}
            <span className={styles.kw}>public string</span>{' '}
            <span className={styles.prop}>Role</span> =&gt;{' '}
            <span className={styles.str}>&quot;Full-Stack Dev&quot;</span>;
          </div>
          <div>{' '}</div>
          <div>
            {'    '}
            <span className={styles.kw}>public string</span>[]{' '}
            <span className={styles.prop}>Stack</span> =&gt;{' '}
            <span className={styles.kw}>new</span>[]
          </div>
          <div>{'    {'}</div>
          <div>
            {'        '}
            <span className={styles.str}>&quot;C#&quot;</span>,{' '}
            <span className={styles.str}>&quot;.NET&quot;</span>,{' '}
            <span className={styles.str}>&quot;React&quot;</span>,{' '}
            <span className={styles.str}>&quot;Next.js&quot;</span>
          </div>
          <div>{'    };'}</div>
          <div>{' '}</div>
          <div>
            {'    '}
            <span className={styles.kw}>public bool</span>{' '}
            <span className={styles.prop}>OpenToWork</span> =&gt;{' '}
            <span className={styles.kw}>true</span>;
          </div>
          <div>{' '}</div>
          <div>
            {'    '}
            <span className={styles.kw}>public override void</span>{' '}
            <span className={styles.fn}>HireMe</span>()
          </div>
          <div>{'    {'}</div>
          <div>
            {'        '}
            <span className={styles.kw}>throw new</span>{' '}
            <span className={styles.typ}>HireException</span>(
            <span className={styles.str}>&quot;Hire me and let&apos;s build sth!&quot;</span>);
          </div>
          <div>{'    }'}</div>
          <div>{'}'}</div>
        </code>
      </div>

      {/* Ozdobna linia L (prawy bok + dół), rośnie z prawego-dolnego narożnika */}
      <div className={styles.frame} aria-hidden="true">
        <span className={styles.frameRight} />
        <span className={styles.frameBottom} />
      </div>
    </section>
  )
}
