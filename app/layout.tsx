import type { Metadata } from 'next'
import { Inter, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const sourceSans = Source_Sans_3({
  variable: '--font-source',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'CaseMate',
  description: 'See the stories. Learn the patterns.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${sourceSans.variable} ${inter.variable}`}>
      <body className={`${inter.className} antialiased bg-my-bg`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
