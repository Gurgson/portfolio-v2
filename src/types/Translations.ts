// src/types/Translations.ts
import { Localized } from '@/lib/i18n-config'

export interface NavigationTranslations {
  homePage: Localized<string>
  contactPage: Localized<string>
  recommendationsPage: Localized<string>
}

export interface LanguagePageTranslations {
  title: Localized<string>
  subtitle: Localized<string>
  description: Localized<string>
  flagAlt: Localized<string>
  programmerAlt: Localized<string>
}

export interface HomeHeaderTranslations {
  title: Localized<string>
  subtitle: Localized<string>
  subtitle2: Localized<string>
}

export interface HomeAboutTranslations {
  title: Localized<string>
  subtitle: Localized<string>
  description: Localized<string>
  greeting: Localized<string>
  availability: Localized<string>
}

export interface HomeProjectsTranslations {
  title: Localized<string>
  subtitle: Localized<string>
}

export interface HomeTechTranslations {
  title: Localized<string>
  subtitle: Localized<string>
  hintText: Localized<string>
}

export interface CTATranslations {
  eyebrow: Localized<string>
  title: Localized<string>
  description: Localized<string>
  buttons: {
    contact: Localized<string>
    email: Localized<string>
  }
  extras: {
    fast: Localized<string>
    friendly: Localized<string>
    professional: Localized<string>
  }
}

export interface FooterTranslations {
  cta: Localized<string>
  copyright: Localized<string>
  builtWith: Localized<string>
  emailLabel: Localized<string>
  phoneLabel: Localized<string>
  columns: {
    links: {
      title: Localized<string>
      home: Localized<string>
      contact: Localized<string>
      references: Localized<string>
    }
    projects: {
      title: Localized<string>
      all: Localized<string>
    }
    contact: {
      title: Localized<string>
      form: Localized<string>
      formInternalId: Localized<string>
    }
  }
}

export interface SectionHeader {
  big: Localized<string>
  small: Localized<string>
}

export interface HeadersTranslations {
  technologies: SectionHeader
  projects: SectionHeader
}

export interface ProjectsSectionTranslations {
  card: {
    ongoing: Localized<string>
    readMore: Localized<string>
    liveDemo: Localized<string>
    featured: Localized<string>
    github: Localized<string>
    status: {
      inProgress: Localized<string>
      completed: Localized<string>
    }
  }
  bgText: Localized<string>
  title: Localized<string>
  description: Localized<string>
  noResults: Localized<string>
  pagination: {
    prev: Localized<string>
    next: Localized<string>
  }
  sort: {
    label: Localized<string>
    name: Localized<string>
    highlight: Localized<string>
    date: Localized<string>
  }
  filters: {
    status: {
      label: Localized<string>
      inProgress: Localized<string>
      completed: Localized<string>
      archived: Localized<string>
    }
    category: {
      label: Localized<string>
      web: Localized<string>
      desktop: Localized<string>
    }
    technologies: {
      label: Localized<string>
    }
    clear: Localized<string>
    logic: {
      and: Localized<string>
      or: Localized<string>
    }
  }
}

export interface ContactSectionTranslations {
  hero: {
    title: Localized<string>
    subtitle: Localized<string>
    description: Localized<string>
  }
  info: {
    title: Localized<string>
    email: Localized<string>
    phone: Localized<string>
    location: Localized<string>
  }
  socials: {
    title: Localized<string>
  }
  availability: {
    title: Localized<string>
    text: Localized<string>
    responseTime: Localized<string>
  }
  form: {
    title: Localized<string>
    name: {
      label: Localized<string>
      placeholder: Localized<string>
    }
    email: {
      label: Localized<string>
      placeholder: Localized<string>
    }
    subject: {
      label: Localized<string>
      placeholder: Localized<string>
    }
    message: {
      label: Localized<string>
      placeholder: Localized<string>
    }
    submit: Localized<string>
    sending: Localized<string>
    success: Localized<string>
    error: Localized<string>
  }
  validation: {
    nameRequired: Localized<string>
    emailRequired: Localized<string>
    emailInvalid: Localized<string>
    subjectRequired: Localized<string>
    messageRequired: Localized<string>
    messageMinLength: Localized<string>
  }
}

export interface SectionsTranslations {
  languagePage: LanguagePageTranslations
  homeHeader: HomeHeaderTranslations
  homeAbout: HomeAboutTranslations
  homeProjects: HomeProjectsTranslations
  homeTech: HomeTechTranslations
  footer: FooterTranslations
  headers: HeadersTranslations
  projectsSection: ProjectsSectionTranslations
  cta: CTATranslations
  contact: ContactSectionTranslations
}

export interface CommonTranslations {
  changeLanguage: Localized<string>
  backToHome: Localized<string>
  credentials: {
    name: string
    title: Localized<string>
  }
  navigation: {
    toggleMenu: Localized<string>
    closeMenu: Localized<string>
  }
  theme: {
    switchTo: Localized<string>
    current: Localized<string>
    light: Localized<string>
    dark: Localized<string>
  }
  follower: {
    showGuide: Localized<string>
    hideGuide: Localized<string>
    showMessage: Localized<string>
    altText: Localized<string>
    welcomeMessageBefore: Localized<string>
    welcomeMessageAfter: Localized<string>
    nestAlt: Localized<string>
  }
}

export interface CredentialsTranslations {
  title: Localized<string>
}

export default interface Translations {
  navigation: NavigationTranslations
  articles: Record<string, Localized<string>>
  sections: SectionsTranslations
  common: CommonTranslations
}
