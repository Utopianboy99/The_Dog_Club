import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

export const runtime = 'nodejs'

const ContactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional().or(z.literal('')),
  service: z.string().min(1, 'Service is required'),
  dogName: z.string().optional().or(z.literal('')),
  dogBreed: z.string().optional().or(z.literal('')),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

function getEnv(name: string) {
  const value = process.env[name]
  if (!value) {
    throw new Error(`${name} is not set`)
  }
  return value
}

export async function POST(req: Request) {
  try {
    const payload = await req.json()
    const data = ContactSchema.parse(payload)

    const host = getEnv('SMTP_HOST')
    const port = Number(getEnv('SMTP_PORT'))
    const user = getEnv('SMTP_USER')
    const pass = getEnv('SMTP_PASS')
    const from = getEnv('SMTP_FROM')
    const to = getEnv('SMTP_TO')

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })

    const subject = `New contact form submission: ${data.service}`
    const text = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || '—'}`,
      `Service: ${data.service}`,
      `Dog Name: ${data.dogName || '—'}`,
      `Dog Breed: ${data.dogBreed || '—'}`,
      '',
      'Message:',
      data.message,
    ].join('\n')

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || '—'}</p>
      <p><strong>Service:</strong> ${data.service}</p>
      <p><strong>Dog Name:</strong> ${data.dogName || '—'}</p>
      <p><strong>Dog Breed:</strong> ${data.dogBreed || '—'}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, '<br />')}</p>
    `

    await transporter.sendMail({
      from,
      to,
      replyTo: data.email,
      subject,
      text,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { ok: false, error: error.issues[0]?.message ?? 'Invalid input' },
        { status: 400 }
      )
    }

    const message = error instanceof Error ? error.message : 'Failed to send message'
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}
