// ProjectsSection/ProjectSection.tsx
'use client'
import { useState, useMemo } from 'react'
import { ProjectsList } from '../ProjectsList/ProjectList'
import {
  ProjectsSectionProps,
  SortOption,
  FilterLogic,
  Filters,
  ProjectStatus,
  ProjectCategory,
} from '../types'
import { sections } from '@/dictionaries/sections'
import styles from './projectSection.module.css'
import { SectionHeader } from '@/components/Header/SectionHeader'

const STATUS_OPTIONS: ProjectStatus[] = ['in-progress', 'completed']
const CATEGORY_OPTIONS: ProjectCategory[] = ['web', 'desktop']
const PROJECTS_PER_PAGE = 3

export const ProjectsSection = ({
  projects,
  lang,
  availableTechnologies,
}: ProjectsSectionProps) => {
  const [sortBy, setSortBy] = useState<SortOption>('highlight')
  const [filters, setFilters] = useState<Filters>({
    status: [],
    category: [],
    technologies: [],
  })
  const [filterLogic, setFilterLogic] = useState<FilterLogic>('and')
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(0)

  const t = sections.projectsSection

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  const toggleStatusFilter = (value: ProjectStatus) => {
    setFilters((prev) => ({
      ...prev,
      status: prev.status.includes(value)
        ? prev.status.filter((v) => v !== value)
        : [...prev.status, value],
    }))
    setCurrentPage(0)
  }

  const toggleCategoryFilter = (value: ProjectCategory) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category.includes(value)
        ? prev.category.filter((v) => v !== value)
        : [...prev.category, value],
    }))
    setCurrentPage(0)
  }

  const toggleTechnologyFilter = (code: string) => {
    setFilters((prev) => ({
      ...prev,
      technologies: prev.technologies.includes(code)
        ? prev.technologies.filter((v) => v !== code)
        : [...prev.technologies, code],
    }))
    setCurrentPage(0)
  }

  const clearFilters = () => {
    setFilters({ status: [], category: [], technologies: [] })
    setCurrentPage(0)
  }

  const filteredAndSortedProjects = useMemo(() => {
    let result = [...projects]

    if (filters.status.length > 0) {
      result = result.filter((p) =>
        filterLogic === 'and'
          ? filters.status.includes(p.status as ProjectStatus)
          : filters.status.some((s) => s === p.status)
      )
    }

    if (filters.category.length > 0) {
      result = result.filter((p) =>
        filterLogic === 'and'
          ? filters.category.includes(p.category as ProjectCategory)
          : filters.category.some((c) => c === p.category)
      )
    }

    if (filters.technologies.length > 0) {
      result = result.filter((p) => {
        const projectTechCodes = p.technologies.map((t) => t.code)
        return filterLogic === 'and'
          ? filters.technologies.every((code) =>
              projectTechCodes.includes(code)
            )
          : filters.technologies.some((code) => projectTechCodes.includes(code))
      })
    }

    result.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name[lang].localeCompare(b.name[lang])
        case 'highlight':
          if (a.highlight !== b.highlight) return a.highlight ? -1 : 1
          return a.name[lang].localeCompare(b.name[lang])
        case 'date':
          const aOngoing = a.status === 'in-progress'
          const bOngoing = b.status === 'in-progress'
          if (aOngoing !== bOngoing) return aOngoing ? -1 : 1
          const aDate = a.endDate ? new Date(a.endDate).getTime() : 0
          const bDate = b.endDate ? new Date(b.endDate).getTime() : 0
          return bDate - aDate
        default:
          return 0
      }
    })

    return result
  }, [projects, filters, filterLogic, sortBy, lang])

  const totalPages = Math.ceil(
    filteredAndSortedProjects.length / PROJECTS_PER_PAGE
  )
  const visibleProjects = filteredAndSortedProjects.slice(
    currentPage * PROJECTS_PER_PAGE,
    (currentPage + 1) * PROJECTS_PER_PAGE
  )

  const activeFiltersCount =
    filters.status.length +
    filters.category.length +
    filters.technologies.length

  const nextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage((prev) => prev + 1)
  }

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage((prev) => prev - 1)
  }

  const getStatusLabel = (status: ProjectStatus) => {
    const statusLabels: Record<ProjectStatus, string> = {
      'in-progress': t.filters.status.inProgress[lang],
      completed: t.filters.status.completed[lang],
      archived: t.filters.status.archived[lang],
    }
    return statusLabels[status]
  }

  const getCategoryLabel = (category: ProjectCategory) => {
    const categoryLabels: Record<ProjectCategory, string> = {
      web: t.filters.category.web[lang],
      desktop: t.filters.category.desktop[lang],
    }
    return categoryLabels[category]
  }

  const getSortLabel = (option: SortOption) => {
    const sortLabels: Record<SortOption, string> = {
      name: t.sort.name[lang],
      highlight: t.sort.highlight[lang],
      date: t.sort.date[lang],
    }
    return sortLabels[option]
  }

  const titleParts = t.title[lang].split('\n')
  return (
    <section className={`contrast ${styles.section}`}>
      <div className={styles.bgText}>{t.bgText[lang]}</div>

      <div className={styles.container}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          {/* Pagination */}
          <div className={styles.pagination}>
            <span className={styles.pageNumber}>
              {String(currentPage + 1).padStart(2, '0')} -{' '}
              {String(totalPages || 1).padStart(2, '0')}
            </span>
            <div className={styles.navButtons}>
              <button
                className={styles.navButton}
                onClick={prevPage}
                disabled={currentPage === 0}
                aria-label={t.pagination.prev[lang]}
              >
                ‹
              </button>
              <button
                className={styles.navButton}
                onClick={nextPage}
                disabled={currentPage === totalPages - 1 || totalPages === 0}
                aria-label={t.pagination.next[lang]}
              >
                ›
              </button>
            </div>
          </div>

          {/* Title */}
          <SectionHeader className={styles.title} decoration={titleParts[0]}>
            {titleParts.slice(1).join('\n')}
          </SectionHeader>

          {/* Desciption */}
          <small className={styles.description}>{t.description[lang]}</small>

          {/* Controls */}
          <div className={styles.controls}>
            {/* Sorts */}
            <div className={styles.dropdown}>
              <button
                className={styles.dropdownToggle}
                onClick={() => toggleDropdown('sort')}
              >
                {t.sort.label[lang]}
                <span className={styles.arrow}>▼</span>
              </button>
              {openDropdown === 'sort' && (
                <div className={styles.dropdownMenu}>
                  {(['name', 'highlight', 'date'] as SortOption[]).map(
                    (option) => (
                      <label key={option} className={styles.radioOption}>
                        <input
                          type="radio"
                          name="sort"
                          checked={sortBy === option}
                          onChange={() => setSortBy(option)}
                        />
                        {getSortLabel(option)}
                      </label>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Filters */}
            <div className={styles.dropdown}>
              <button
                className={styles.dropdownToggle}
                onClick={() => toggleDropdown('status')}
              >
                {t.filters.status.label[lang]}
                {filters.status.length > 0 && (
                  <span className={styles.badge}>{filters.status.length}</span>
                )}
                <span className={styles.arrow}>▼</span>
              </button>
              {openDropdown === 'status' && (
                <div className={styles.dropdownMenu}>
                  {STATUS_OPTIONS.map((status) => (
                    <label key={status} className={styles.checkboxOption}>
                      <input
                        type="checkbox"
                        checked={filters.status.includes(status)}
                        onChange={() => toggleStatusFilter(status)}
                      />
                      {getStatusLabel(status)}
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.dropdown}>
              <button
                className={styles.dropdownToggle}
                onClick={() => toggleDropdown('category')}
              >
                {t.filters.category.label[lang]}
                {filters.category.length > 0 && (
                  <span className={styles.badge}>
                    {filters.category.length}
                  </span>
                )}
                <span className={styles.arrow}>▼</span>
              </button>
              {openDropdown === 'category' && (
                <div className={styles.dropdownMenu}>
                  {CATEGORY_OPTIONS.map((category) => (
                    <label key={category} className={styles.checkboxOption}>
                      <input
                        type="checkbox"
                        checked={filters.category.includes(category)}
                        onChange={() => toggleCategoryFilter(category)}
                      />
                      {getCategoryLabel(category)}
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.dropdown}>
              <button
                className={styles.dropdownToggle}
                onClick={() => toggleDropdown('technologies')}
              >
                {t.filters.technologies.label[lang]}
                {filters.technologies.length > 0 && (
                  <span className={styles.badge}>
                    {filters.technologies.length}
                  </span>
                )}
                <span className={styles.arrow}>▼</span>
              </button>
              {openDropdown === 'technologies' && (
                <div className={styles.dropdownMenu}>
                  {availableTechnologies.map((tech) => (
                    <label key={tech.code} className={styles.checkboxOption}>
                      <input
                        type="checkbox"
                        checked={filters.technologies.includes(tech.code)}
                        onChange={() => toggleTechnologyFilter(tech.code)}
                      />
                      {tech.short}
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.dropdown}>
              <button
                className={styles.dropdownToggle}
                onClick={() => toggleDropdown('logic')}
              >
                {filterLogic === 'and' ? t.filters.logic.and[lang] : t.filters.logic.or[lang]}
                <span className={styles.arrow}>▼</span>
              </button>
              {openDropdown === 'logic' && (
                <div className={styles.dropdownMenu}>
                  <label className={styles.radioOption}>
                    <input
                      type="radio"
                      name="logic"
                      checked={filterLogic === 'and'}
                      onChange={() => setFilterLogic('and')}
                    />
                    {t.filters.logic.and[lang]}
                  </label>
                  <label className={styles.radioOption}>
                    <input
                      type="radio"
                      name="logic"
                      checked={filterLogic === 'or'}
                      onChange={() => setFilterLogic('or')}
                    />
                    {t.filters.logic.or[lang]}
                  </label>
                </div>
              )}
            </div>
          </div>

          {activeFiltersCount > 0 && (
            <button className={styles.clearButton} onClick={clearFilters}>
              → {t.filters.clear[lang]}
            </button>
          )}
        </div>

        <ProjectsList projects={visibleProjects} lang={lang} />
      </div>

      <div className={styles.decorativeLine} />
    </section>
  )
}
