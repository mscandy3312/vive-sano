/**
 * Vive Sano - Configuration File
 * 
 * Centralized configuration settings and environment variable helpers.
 * Gloria's contact and integration placeholders for Hotmart, WhatsApp, Meta Pixel, and GA4.
 */

export const siteConfig = {
  name: 'Vive Sano',
  owner: 'Gloria',
  description: 'Una experiencia educativa de Vive Sano para aprender, comprender y construir hábitos relacionados con tu bienestar digestivo.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vive-sano.mx',

  // Contact info
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+52 1 55 8046 2787',
  whatsappDefaultMessage: encodeURIComponent('Hola Gloria, tengo una pregunta sobre el programa Vive Sano.'),

  // External checkout and product access links
  hotmartCheckoutUrl: process.env.NEXT_PUBLIC_HOTMART_CHECKOUT_URL || '#',
  productAccessUrl: process.env.NEXT_PUBLIC_PRODUCT_ACCESS_URL || '#',

  // Analytics & Pixel placeholders (Inactive in Phase 1)
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || '',
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
} as const;

/**
 * Returns formatted WhatsApp link for Gloria
 */
export function getWhatsAppLink(message?: string): string {
  const cleanNumber = siteConfig.whatsappNumber.replace(/[^\d]/g, '');
  const msg = message ? encodeURIComponent(message) : siteConfig.whatsappDefaultMessage;
  return `https://wa.me/${cleanNumber}?text=${msg}`;
}

export type SiteConfig = typeof siteConfig;
