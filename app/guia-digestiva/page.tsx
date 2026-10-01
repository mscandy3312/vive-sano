import React from 'react';
import type { Metadata } from 'next';
import DirectResponseCampaignLandingPage from '@/components/DirectResponseCampaignLandingPage';

export const metadata: Metadata = {
  title: 'Guía Gratuita de Salud Digestiva | Vive Sano',
  description: 'Descarga gratis nuestra guía de salud digestiva y descubre recomendaciones prácticas para comenzar a cuidar tu bienestar digestivo.',
  openGraph: {
    title: 'Guía Gratuita de Salud Digestiva | Vive Sano',
    description: 'Descubre recomendaciones sencillas y conscientes para cuidar tu bienestar digestivo día a día.',
    images: ['/images/lead-magnet-guide.jpg'],
    type: 'website',
    locale: 'es_MX',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guía Gratuita de Salud Digestiva | Vive Sano',
    description: 'Descubre recomendaciones sencillas y conscientes para cuidar tu bienestar digestivo día a día.',
    images: ['/images/lead-magnet-guide.jpg'],
  },
};

export default function GuiaDigestivaPage() {
  return <DirectResponseCampaignLandingPage />;
}
