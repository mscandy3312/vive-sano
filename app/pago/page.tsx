import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Footer from '@/components/Footer';
import { contentData } from '@/data/content';
import { siteConfig, getWhatsAppLink } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Inscripción al Método SANA | Vive Sano',
  description: 'Desinflama tu cuerpo y recupera tu energía paso a paso con el Método SANA por Gloria Molina.',
};

export default function PagoPage() {
  const whatsappUrl = getWhatsAppLink('Hola Gloria, tengo una duda antes de completar mi compra del Método SANA.');
  const hotmartUrl = siteConfig.hotmartCheckoutUrl !== '#' ? siteConfig.hotmartCheckoutUrl : '#';

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F1]">
      {/* MINIMAL CHECKOUT HEADER */}
      <header className="py-4 border-b border-[#D5E8DC] bg-white sticky top-0 z-30">
        <Container size="lg">
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="Vive Sano - Ir al inicio" className="flex items-center gap-2">
              <div className="relative w-36 h-10">
                <Image
                  src="/images/logo.png"
                  alt="Vive Sano"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <span className="text-xs font-bold text-[#4DA92C] bg-[#F0F9ED] px-3 py-1 rounded-full border border-[#B8D8C2]">
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
              <div className="lg:col-span-7 bg-white rounded-3xl border border-[#D5E8DC] shadow-xl p-6 sm:p-8 space-y-6">
                <div className="border-b border-[#D5E8DC] pb-4 space-y-2">
                  <span className="text-xs font-bold tracking-widest text-[#4DA92C] uppercase bg-[#F0F9ED] px-3 py-1 rounded-full border border-[#B8D8C2]">
                    RESUMEN DE TU INSCRIPCIÓN
                  </span>
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#123C32] leading-tight">
                    Inscripción al Método SANA
                  </h1>
                  <p className="text-xs sm:text-sm text-[#4A6B60]">
                    Curso práctico + 4 Herramientas de Apoyo por Gloria Molina.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F0F9ED] border border-[#B8D8C2] space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h2 className="font-serif font-bold text-lg text-[#123C32]">
                      Método SANA
                    </h2>
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif font-bold text-3xl text-[#123C32]">
                        497,00 MXN
                      </span>
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-[#4DA92C] bg-white px-2.5 py-0.5 rounded-full inline-block border border-[#B8D8C2]">
                    Pago único sin mensualidades
                  </p>
                </div>

                {/* What's Included */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#123C32]">
                    Todo lo que incluye tu inscripción:
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#123C32]">
                    {contentData.offer.includedItems.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-[#4DA92C] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hotmart Redirect CTA */}
                <div className="pt-4 space-y-3">
                  <a
                    href={hotmartUrl}
                    className="w-full py-4 px-6 rounded-2xl bg-[#4DA92C] hover:bg-[#3e8b23] text-white font-extrabold text-base text-center block transition-all shadow-xl hover:shadow-2xl cursor-pointer uppercase tracking-wider"
                  >
                    QUIERO EMPEZAR EN HOTMART (497,00 MXN) →
                  </a>
                  <p className="text-[11px] text-center text-[#4A6B60]">
                    Al hacer clic serás redirigido de forma segura a la pasarela de pago oficial de Hotmart.
                  </p>
                </div>
              </div>

              {/* Support & FAQ Sidebar */}
              <div className="lg:col-span-5 space-y-6">
                {/* WhatsApp Direct Support Box */}
                <div className="bg-white rounded-3xl border border-[#D5E8DC] shadow-md p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#F0F9ED] text-[#4DA92C] flex items-center justify-center font-bold shrink-0 border border-[#B8D8C2]">
                      💬
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-sm text-[#123C32]">
                        ¿Tienes dudas antes de pagar?
                      </h3>
                      <p className="text-xs text-[#4A6B60]">
                        Gloria Molina está disponible para ayudarte.
                      </p>
                    </div>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-2.5 px-4 rounded-full bg-[#4DA92C] hover:bg-[#3e8b23] text-white font-bold text-xs transition-colors"
                  >
                    Hablar con Gloria Molina por WhatsApp
                  </a>
                </div>

                {/* Short FAQ Card */}
                <div className="bg-[#F0F9ED] rounded-3xl border border-[#B8D8C2] p-6 space-y-3 text-xs text-[#4A6B60]">
                  <h3 className="font-serif font-bold text-sm text-[#123C32] mb-2">
                    ¿Qué sucede después de tu compra?
                  </h3>
                  <p>1. Hotmart procesa tu pago de forma encriptada.</p>
                  <p>2. Recibes un correo instantáneo con tu acceso al curso.</p>
                  <p>3. Descargas los 4 Materiales de Apoyo en formato PDF.</p>
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
