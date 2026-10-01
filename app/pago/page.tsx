import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Button from '@/components/Button';
import Footer from '@/components/Footer';
import { contentData } from '@/data/content';
import { siteConfig, getWhatsAppLink } from '@/lib/config';

export const metadata: Metadata = {
  title: contentData.pagoPage.title,
  description: contentData.pagoPage.subheadline,
};

export default function PagoPage() {
  const {
    headline,
    subheadline,
    productName,
    originalPriceText,
    currentPriceText,
    installmentsNote,
    ctaButtonText,
    securityItems,
  } = contentData.pagoPage;

  const whatsappUrl = getWhatsAppLink('Hola Gloria, tengo una duda antes de completar mi compra en Hotmart.');
  const hotmartUrl = siteConfig.hotmartCheckoutUrl !== '#' ? siteConfig.hotmartCheckoutUrl : '#';

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      {/* MINIMAL CHECKOUT HEADER */}
      <header className="py-6 border-b border-[var(--border)] bg-white">
        <Container size="lg">
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="Vive Sano - Ir al inicio" className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[var(--primary-dark)] text-white flex items-center justify-center font-bold text-xs">
                VS
              </span>
              <span className="font-serif text-2xl font-bold text-[var(--primary-dark)]">
                VIVE SANO
              </span>
            </Link>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              🔒 Pago Seguro vía Hotmart
            </span>
          </div>
        </Container>
      </header>

      <main className="flex-1 py-12 md:py-16">
        <Section py="none">
          <Container size="md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Product Summary Column */}
              <div className="lg:col-span-7 bg-white rounded-3xl border border-[var(--border)] shadow-xl p-6 sm:p-8 space-y-6">
                <div className="border-b border-[var(--border)] pb-4 space-y-2">
                  <span className="text-xs font-bold tracking-widest text-[var(--primary)] uppercase bg-[var(--primary-light)] px-3 py-1 rounded-full">
                    RESUMEN DE TU COMPRA
                  </span>
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--primary-dark)] leading-tight">
                    {headline}
                  </h1>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                    {subheadline}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[var(--background-soft)] border border-[var(--border)] space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h2 className="font-serif font-bold text-lg text-[var(--primary-dark)]">
                      {productName}
                    </h2>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs text-[var(--text-muted)] line-through">
                        {originalPriceText}
                      </span>
                      <span className="font-serif font-bold text-2xl text-[var(--primary-dark)]">
                        {currentPriceText}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block border border-emerald-200">
                    {installmentsNote}
                  </p>
                </div>

                {/* What's Included */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--primary-dark)]">
                    Garantías de seguridad:
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text)]">
                    {securityItems.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-emerald-100 text-[var(--primary-dark)] flex items-center justify-center text-[10px] font-bold shrink-0">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hotmart Redirect CTA */}
                <div className="pt-4 space-y-3">
                  <Button href={hotmartUrl} size="lg" variant="primary" fullWidth className="py-4 text-base">
                    {ctaButtonText}
                  </Button>
                  <p className="text-[11px] text-center text-[var(--text-muted)]">
                    Al hacer clic serás redirigido de forma segura a la pasarela de pago oficial de Hotmart.
                  </p>
                </div>
              </div>

              {/* Support & FAQ Sidebar */}
              <div className="lg:col-span-5 space-y-6">
                {/* WhatsApp Direct Support Box */}
                <div className="bg-white rounded-3xl border border-[var(--border)] shadow-md p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                      💬
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-sm text-[var(--primary-dark)]">
                        ¿Tienes dudas antes de pagar?
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">
                        Gloria Molina está disponible para ayudarte.
                      </p>
                    </div>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-2.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
                  >
                    Hablar con Gloria Molina por WhatsApp
                  </a>
                </div>

                {/* Short FAQ Card */}
                <div className="bg-[var(--background-soft)] rounded-3xl border border-[var(--border)] p-6 space-y-3 text-xs text-[var(--text-muted)]">
                  <h3 className="font-serif font-bold text-sm text-[var(--primary-dark)] mb-2">
                    ¿Qué sucede después de tu compra?
                  </h3>
                  <p>1. Hotmart procesa tu pago de forma encriptada.</p>
                  <p>2. Recibes un correo instantáneo con tus credenciales.</p>
                  <p>3. Ingresas directamente a tu plataforma y a la Guía Digital.</p>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
