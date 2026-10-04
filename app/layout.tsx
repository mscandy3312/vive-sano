import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { contentData } from '@/data/content';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const siteTitle = 'Vive Sano | Guía Gratuita de Bienestar Digestivo';
const siteDescription = 'Descubre una guía práctica y gratuita para comprender mejor tus hábitos, alimentación y bienestar digestivo.';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://vive-sano.vercel.app'),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: contentData.brand.name,
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/images/lead-magnet-mockup.jpg',
        width: 1200,
        height: 630,
        alt: 'Guía Gratuita de Bienestar Digestivo — Vive Sano',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/images/lead-magnet-mockup.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1B3B2B',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="min-h-screen bg-[var(--background)] text-[var(--text)] flex flex-col font-sans antialiased selection:bg-[var(--primary-light)] selection:text-[var(--primary-dark)]">
        {children}
      </body>
    </html>
  );
}
