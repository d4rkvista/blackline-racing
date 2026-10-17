import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Big_Shoulders } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const display = Big_Shoulders({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Blackline Racing | Race Pakistan 2027',
  description:
    'Blackline Racing is an independent, student-led engineering team designing and optimizing a miniature Formula 1 car for Race Pakistan, Karachi — 30–31 January 2027. Partner with us.',
  generator: 'v0.app',
  keywords: ['Blackline Racing', 'Race Pakistan', 'Karachi', 'F1 in Schools', 'student engineering', 'sponsorship'],
  openGraph: {
    title: 'Blackline Racing | Race Pakistan 2027',
    description: 'Independent student engineers building a miniature F1 car. Become a sponsor.',
    images: ['/images/hero-car.png'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0b0b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${display.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
