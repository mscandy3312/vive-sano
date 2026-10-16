import { redirect } from 'next/navigation';
import { siteConfig } from '@/lib/config';

/**
 * Eliminación de la página intermedia de "Resumen de tu inscripción".
 * Redirige inmediatamente a la pasarela de pago oficial de Hotmart.
 */
export default function PagoPage() {
  redirect(siteConfig.hotmartCheckoutUrl || '/');
}
