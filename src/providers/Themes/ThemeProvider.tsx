'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function resolveTheme(
  searchParams: URLSearchParams,
  fallback: Theme
): Theme {
  const urlMode = searchParams.get('mode')
  if (urlMode === 'light' || urlMode === 'dark') return urlMode

  if (typeof window === 'undefined') return fallback

  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

export function ThemeProvider({
  children,
  initialTheme = 'dark',
}: {
  children: React.ReactNode
  initialTheme?: Theme
}) {
  const searchParams = useSearchParams()
  const [theme, setThemeState] = useState<Theme>(() =>
    resolveTheme(searchParams, initialTheme)
  )

  const applyTheme = useCallback((newTheme: Theme) => {
    localStorage.setItem('theme', newTheme)
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000`
    document.documentElement.setAttribute('data-theme', newTheme)
  }, [])

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
    applyTheme(newTheme)
  }, [applyTheme])

  useEffect(() => {
    const resolved = resolveTheme(searchParams, initialTheme)
    applyTheme(resolved)
    // Synchronizing theme from external sources (URL param, localStorage, system preference)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setThemeState(resolved)
  }, [searchParams, initialTheme, applyTheme])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
