'use client'

import { createContext, useContext, type ReactNode } from 'react'

export type ProjectSlug = { pl: string; en: string }

const ProjectSlugsContext = createContext<ProjectSlug[]>([])

export function ProjectSlugsProvider({
  slugs,
  children,
}: {
  slugs: ProjectSlug[]
  children: ReactNode
}) {
  return (
    <ProjectSlugsContext.Provider value={slugs}>
      {children}
    </ProjectSlugsContext.Provider>
  )
}

export function useProjectSlugs() {
  return useContext(ProjectSlugsContext)
}
