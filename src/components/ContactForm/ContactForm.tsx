'use client'

import { useState, FormEvent } from 'react'
import { Locale } from '@/lib/i18n-config'
import { useT } from '@/providers/Dictionary/DictionaryProvider'
import { sendContactEmail, ContactFormData } from '@/lib/actions/contact'
import styles from './contactForm.module.css'

interface ContactFormProps {
  lang: Locale
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export function ContactForm({ lang }: ContactFormProps) {
  const t = useT()

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = t('sections.contact.validation.nameRequired')
    }

    if (!formData.email.trim()) {
      newErrors.email = t('sections.contact.validation.emailRequired')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('sections.contact.validation.emailInvalid')
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t('sections.contact.validation.subjectRequired')
    }

    if (!formData.message.trim()) {
      newErrors.message = t('sections.contact.validation.messageRequired')
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('sections.contact.validation.messageMinLength')
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setStatus('loading')

    try {
      const response = await sendContactEmail(formData)

      if (response.success) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
      noValidate
      id={t('sections.footer.columns.contact.formInternalId')}
    >
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>
            {t('sections.contact.form.name.label')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t('sections.contact.form.name.placeholder')}
            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
            disabled={status === 'loading'}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            {t('sections.contact.form.email.label')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t('sections.contact.form.email.placeholder')}
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            disabled={status === 'loading'}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="subject" className={styles.label}>
          {t('sections.contact.form.subject.label')}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder={t('sections.contact.form.subject.placeholder')}
          className={`${styles.input} ${errors.subject ? styles.inputError : ''}`}
          disabled={status === 'loading'}
        />
        {errors.subject && (
          <span className={styles.error}>{errors.subject}</span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          {t('sections.contact.form.message.label')}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t('sections.contact.form.message.placeholder')}
          rows={6}
          className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
          disabled={status === 'loading'}
        />
        {errors.message && (
          <span className={styles.error}>{errors.message}</span>
        )}
      </div>

      {status === 'success' && (
        <div className={styles.successMessage}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <span>{t('sections.contact.form.success')}</span>
        </div>
      )}

      {status === 'error' && (
        <div className={styles.errorMessage}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
          <span>{t('sections.contact.form.error')}</span>
        </div>
      )}

      <button
        type="submit"
        className={styles.submitButton}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? (
          <>
            <span className={styles.spinner} />
            {t('sections.contact.form.sending')}
          </>
        ) : (
          <>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            {t('sections.contact.form.submit')}
          </>
        )}
      </button>
    </form>
  )
}
