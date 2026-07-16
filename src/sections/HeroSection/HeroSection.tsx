import { ParallaxContainer, ParallaxItem } from '@/components/ParrarelSection'
import SkyBg from '@/components/SVGs/SkyBg/SkyBg'
import Foreground from '@/components/SVGs/Foreground/Foreground'
import Waves from '@/components/SVGs/Waves/Waves'
import Star from '@/components/SVGs/Star/Star'
import StarBg from '@/components/SVGs/StarsBg/StarsBg'
import styles from './heroSection.module.css'
import Clouds from '@/components/SVGs/Clouds/Clouds'
import { Locale } from '@/lib/i18n-config'
import { sections } from '@/dictionaries/sections'
import { AnimatedText } from '@/components/AnimatedText/AnimatedText'

interface HeroSectionProps {
  lang: Locale
}

export default function HeroSection({ lang }: HeroSectionProps) {
  return (
    <section>
      <StarBg />
      <Clouds />
      <ParallaxContainer>
        <ParallaxItem
          speed={0}
          zIndex={1}
          start={0}
          className={styles.background}
        >
          <SkyBg />
        </ParallaxItem>
        <ParallaxItem speed={0.5} zIndex={2} start={0}>
          <Star />
        </ParallaxItem>
        <ParallaxItem speed={0.3} zIndex={2} start={0}>
          <Waves />
        </ParallaxItem>
        <ParallaxItem speed={0.3} zIndex={2} start={0}>
          <Foreground />
        </ParallaxItem>
      </ParallaxContainer>
      <div className={styles.heroText}>
        <AnimatedText
          text={sections.homeHeader.title[lang]}
          tag="h1"
          slide
          slideDirection="down"
          slideDuration={500}
          speed={80}
          delay={0}
        />
        <AnimatedText
          text={sections.homeHeader.subtitle[lang]}
          tag="h2"
          slide
          slideDirection="left"
          slideDuration={600}
          speed={40}
          delay={400}
        />
      </div>
      <AnimatedText
        text={sections.homeHeader.subtitle2[lang]}
        tag="h2"
        className={styles.subHeroText}
        slide
        slideDirection="up"
        slideDuration={700}
        speed={30}
        delay={900}
        showCursor={false}
      />
    </section>
  )
}
