import '@/styles/globals.css'
import 'react-medium-image-zoom/dist/styles.css'
import 'remark-github-blockquote-alert/alert.css'

import { Footer } from '@/components/layout/footer/footer-main'
import { Header } from '@/components/layout/header/main-header'
import { ThemeProvider } from '@/components/layout/theme-provider'
import { Container } from '@/components/ui/container'

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { sayHelloFlag } from '@/configs/env'
import sayHello from '@/components/layout/header/say-hello'
import siteMetadata from '@/configs/siteMetadata'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

let saidHello = !sayHelloFlag

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const basePath = process.env.BASE_PATH || ''

  if (!saidHello) {
    sayHello()
    saidHello = true
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="apple-touch-icon" sizes="76x76" href={`${basePath}/static/favicons/favicon.ico`} />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${basePath}/static/favicons/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${basePath}/static/favicons/favicon-16x16.png`}
      />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Container>
            <main className="px-2 md:px-6">{children}</main>
          </Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
