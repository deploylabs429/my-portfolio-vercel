import type { ReactNode } from 'react';

import type { Metadata, Viewport } from 'next';

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

import BackgroundSkillField from '@/components/common/BackgroundSkillField';
import Navbar from '@/components/layout/Navbar';

import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Revy Tugab | Senior Software Engineer',
  description:
    'Senior Software Engineer with 12 years of experience building low-latency, AI-powered systems and collaborative tools. Proven impact at Figma, FoxyAI, and more.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Revy Tugab | Senior Software Engineer',
    description:
      'Senior Software Engineer building low-latency, AI-powered products and real-time collaboration tools.',
    siteName: 'Revy Tugab Portfolio',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revy Tugab | Senior Software Engineer',
    description:
      'Senior Software Engineer building low-latency, AI-powered products and real-time collaboration tools.',
    images: ['/twitter-image'],
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/icon.svg' }],
    shortcut: ['/icon.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b0b12',
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <BackgroundSkillField />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
