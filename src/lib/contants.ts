export const PERSONAL_INFO = {
  firstName: 'Jakub',
  lastName: 'Stapiński',
  fullName: 'Jakub Stapiński',
  title: 'Software Developer',
  description: '.NET/C# | JavaScript | TypeScript',
}

export const CONTACT_INFO = {
  email: 'jaksta65@gmail.com',
  phone: '+48 605 663 712',
  phoneLink: 'tel:+48605663712',
  github: 'https://github.com/gurgson',
  linkedin: 'https://linkedin.com/in/jakub-stapinski-aa6a97245',
}

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: CONTACT_INFO.github,
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: CONTACT_INFO.linkedin,
    icon: 'linkedin',
  },
] as const

export const SITE_CONFIG = {
  name: PERSONAL_INFO.fullName,
  title: PERSONAL_INFO.title,
  url: 'https://jstapinski.eu',
}
