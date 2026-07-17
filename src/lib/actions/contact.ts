'use server'

import nodemailer from 'nodemailer'

import { CONTACT_INFO, PERSONAL_INFO } from '../contants'

// Types
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ContactFormResponse {
  success: boolean
  message: string
  error?: string
}

// Validation
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validateFormData(data: ContactFormData): string | null {
  if (!data.name || data.name.trim().length === 0) {
    return 'Name is required'
  }

  if (!data.email || !validateEmail(data.email)) {
    return 'Valid email is required'
  }

  if (!data.subject || data.subject.trim().length === 0) {
    return 'Subject is required'
  }

  if (!data.message || data.message.trim().length < 10) {
    return 'Message must be at least 10 characters'
  }

  return null
}

// Server Action
export async function sendContactEmail(
  data: ContactFormData
): Promise<ContactFormResponse> {
  try {
    // Validate input
    const validationError = validateFormData(data)
    if (validationError) {
      return {
        success: false,
        message: 'Validation failed',
        error: validationError,
      }
    }

    // Sanitize input
    const sanitizedData: ContactFormData = {
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      subject: data.subject.trim(),
      message: data.message.trim(),
    }

    // Wysyłka przez Gmail SMTP (nodemailer). Sekrety tylko w .env na VPS.
    const gmailUser = process.env.GMAIL_USER
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD

    if (!gmailUser || !gmailAppPassword) {
      console.error('Brak GMAIL_USER / GMAIL_APP_PASSWORD w env')
      return {
        success: false,
        message: 'Email service is not configured',
        error: 'Missing mail credentials',
      }
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: gmailUser, pass: gmailAppPassword },
    })

    await transporter.sendMail({
      // Gmail i tak nadpisze "from" na adres konta; nazwa nadawcy dla czytelności.
      from: `"Portfolio — ${sanitizedData.name}" <${gmailUser}>`,
      replyTo: sanitizedData.email,
      to: CONTACT_INFO.email,
      subject: `[Portfolio] ${sanitizedData.subject}`,
      text: `Imię: ${sanitizedData.name}
Email: ${sanitizedData.email}
Temat: ${sanitizedData.subject}

Wiadomość:
${sanitizedData.message}`,
      html: `
        <h2>Nowa wiadomość z formularza</h2>
        <p><strong>Imię:</strong> ${sanitizedData.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></p>
        <p><strong>Temat:</strong> ${sanitizedData.subject}</p>
        <hr />
        <p>${sanitizedData.message.replace(/\n/g, '<br>')}</p>
      `,
    })

    return {
      success: true,
      message: `Email sent successfully to ${PERSONAL_INFO.fullName}`,
    }
  } catch (error) {
    console.error('Failed to send contact email:', error)

    return {
      success: false,
      message: 'Failed to send email',
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    }
  }
}
