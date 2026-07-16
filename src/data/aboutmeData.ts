import { Localized } from '@/lib/i18n-config'

interface AboutmeData {
  quote: Localized<string>
  description: Localized<string>
  imageAlt: Localized<string>
  title: Localized<string>
}

const aboutData: AboutmeData = {
  quote: {
    pl: `Tworzę niezawodne, przyjazne użytkownikowi oprogramowanie z wykorzystaniem nowoczesnych technologii.
Zawsze uczę się, zawsze się rozwijam.`,
    en: `Building reliable, user-focused software with modern technologies.
Always learning, always improving.`,
  },
  description: {
    pl: `Nazywam się Jakub Stapiński i jestem absolwentem Informatyki Stosowanej z praktycznym doświadczeniem w tworzeniu aplikacji webowych, systemów backendowych i rozwiązań opartych na bazach danych. Specjalizuję się w nowoczesnych technologiach, takich jak <mark>Next.js</mark>, <mark>React.js</mark> i <mark>.NET</mark>, pracując nad oprogramowaniem niestandardowym, platformami e-commerce oraz CMS. Pasjonuję się tworzeniem intuicyjnych, przyjaznych dla użytkownika interfejsów, dbając jednocześnie o wydajność, niezawodność i skalowalność.

Podczas staży i projektów własnych rozwijałem swoje umiejętności <mark>full-stack</mark>, przekształcając rzeczywiste wymagania w efektywne rozwiązania techniczne. Lubię pracować w zespołach agile, rozwiązywać złożone problemy i nieustannie uczyć się nowych technologii, tworząc oprogramowanie, które naprawdę ma znaczenie.`,

    en: `I’m Jakub Stapiński, an Applied Computer Science graduate with hands-on experience in developing web applications, backend systems, and database-driven solutions. I specialize in modern technologies like <mark>Next.js</mark>, <mark>React.js</mark>, and <mark>.NET</mark>, and have worked on custom software, e-commerce platforms, and CMS projects. I’m passionate about building intuitive, user-friendly interfaces while ensuring performance, reliability, and scalability.

Throughout my internships and personal projects, I’ve strengthened my <mark>full-stack skills</mark>, translating real-world requirements into efficient technical solutions. I thrive in agile teams, enjoy solving complex problems, and am committed to continuous learning and creating software that makes an impact.`,
  },
  imageAlt: {
    pl: 'Moje zdjęcie.',
    en: 'My picture.',
  },
  title: {
    en: 'Web developer ',
    pl: 'Programista webowy ',
  },
}

export { aboutData }
