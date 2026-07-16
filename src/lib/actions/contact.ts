'use server'

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

    // TODO: Implement actual email sending with Google SMTP
    // For now, this is a mockup that simulates the email sending process

    console.log('=== CONTACT FORM SUBMISSION ===')
    console.log('To:', CONTACT_INFO.email)
    console.log('From:', sanitizedData.email)
    console.log('Name:', sanitizedData.name)
    console.log('Subject:', sanitizedData.subject)
    console.log('Message:', sanitizedData.message)
    console.log('Timestamp:', new Date().toISOString())
    console.log('===============================')

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Simulate success (in production, this would be the actual email sending)
    // Uncomment below to test error handling:
    // throw new Error('SMTP connection failed')

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

// Future implementation with nodemailer + Google SMTP:
/*
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD, // Use App Password, not regular password
  },
})

async function sendEmailWithNodemailer(data: ContactFormData) {
  const mailOptions = {
    from: `"${data.name}" <${process.env.GMAIL_USER}>`,
    replyTo: data.email,
    to: CONTACT_INFO.email,
    subject: `[Portfolio Contact] ${data.subject}`,
    text: `
Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}
    `,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <hr />
      <h3>Message:</h3>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `,
  }

  await transporter.sendMail(mailOptions)
}
*/
