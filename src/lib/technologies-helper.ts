import { techs } from '@/data/technologies'

export const getTech = (code: string) => techs.find((t) => t.code === code)!
export const getIconUrlOriginal = (code: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${code}/${code}-original.svg`
