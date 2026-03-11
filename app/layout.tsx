import type { Metadata, Viewport } from 'next'
import { DM_Sans, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  display: 'swap',
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'The Dog Club | Professional Dog Training, Grooming & Daycare in Johannesburg',
    template: '%s | The Dog Club Johannesburg',
  },
  description: 'The Dog Club offers professional dog training, puppy school, grooming, doggy daycare, pet boarding, and behaviour consultations in Johannesburg, South Africa. Book your visit today!',
  keywords: ['dog training Johannesburg', 'puppy school Johannesburg', 'dog daycare near me', 'dog grooming Johannesburg', 'pet boarding Johannesburg', 'dog behaviour consultant'],
  authors: [{ name: 'The Dog Club' }],
  openGraph: {
    title: 'The Dog Club | Professional Dog Training, Grooming & Daycare in Johannesburg',
    description: 'Professional dog training, grooming, daycare, and boarding services in Johannesburg.',
    locale: 'en_ZA',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#3d7a4a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
