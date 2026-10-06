'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { contentData } from '@/data/content';
import Header from './Header';
import ProblemSection from './ProblemSection';
import NoNeedToChangeSection from './NoNeedToChangeSection';
import SneakPeekSection from './SneakPeekSection';
import CourseModulesSection from './CourseModulesSection';
import IncludesSection from './IncludesSection';
import MaterialSupportSection from './MaterialSupportSection';
import AudienceSection from './AudienceSection';
import AboutGloria from './AboutGloria';
import OfferSection from './OfferSection';
import FAQ from './FAQ';
import Footer from './Footer';

export interface DirectResponseCampaignLandingPageProps {
  systemeActionUrl?: string;
  leadMagnetPdfUrl?: string;
}

export const DirectResponseCampaignLandingPage: React.FC<DirectResponseCampaignLandingPageProps> = () => {
  // Mobile Menu & Privacy Modal State
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showStickyMobileCta, setShowStickyMobileCta] = useState(false);

  const closePrivacyModal = () => {
    setShowPrivacyModal(false);
    if (typeof window !== 'undefined' && window.location.hash === '#privacidad') {
      history.pushState('', document.title, window.location.pathname + window.location.search);
    }
  };

  // Handle Scroll for Sticky Mobile CTA
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setShowStickyMobileCta(window.scrollY > 450);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Hash Changes & Auto-close Modal on Navigation
  useEffect(() => {
    const handleHashOrNavigation = () => {
      if (typeof window !== 'undefined') {
        if (window.location.hash === '#privacidad') {
          setShowPrivacyModal(true);
        } else {
          setShowPrivacyModal(false);
        }
      }
    };

    handleHashOrNavigation();
    window.addEventListener('hashchange', handleHashOrNavigation);
    return () => window.removeEventListener('hashchange', handleHashOrNavigation);
  }, []);

  // Keyboard Accessibility (ESC key)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closePrivacyModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const { hero, finalCta } = contentData;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F1] text-[#123C32] font-sans antialiased selection:bg-[#B8D8C2] selection:text-[#123C32]">

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Course',
            'name': 'Método SANA por Gloria Molina',
            'author': {
              '@type': 'Person',
              'name': 'Gloria Molina',
            },
            'publisher': {
              '@type': 'Organization',
              'name': 'Vive Sano',
              'url': 'https://vive-sano.vercel.app',
            },
            'offers': {
              '@type': 'Offer',
              'price': '497.00',
              'priceCurrency': 'MXN',
              'availability': 'https://schema.org/InStock',
            },
            'description': 'Un curso práctico para entender las señales de tu digestión, saber qué alimentos te inflaman y cuáles te ayudan.',
            'inLanguage': 'es',
          }),
        }}
      />

      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#123C32] text-white py-2 px-4 text-center text-xs font-medium tracking-wide border-b border-[#4DA92C]/40 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 mx-auto md:mx-0">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4DA92C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4DA92C]"></span>
            </span>
            <span className="font-bold text-[#4DA92C]">🌿 MÉTODO SANA</span>
            <span className="hidden sm:inline text-[#B8D8C2]">• Desinflama tu cuerpo y recupera tu energía paso a paso</span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-white/90">
            <span className="text-[11px] text-[#B8D8C2]">Curso Práctico Digital — $497 MXN</span>
          </div>
        </div>
      </div>

      {/* 2. HEADER NAVEGACIÓN PRINCIPAL */}
      <Header />

      {/* 3. HERO PRINCIPAL: PRESENTACIÓN DEL MÉTODO SANA */}
      <section id="inicio" className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 max-w-6xl mx-auto w-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: HERO COPY */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0F9ED] border border-[#B8D8C2] text-[#4DA92C] text-xs font-extrabold uppercase tracking-wider shadow-2xs">
                <span>{hero.eyebrow}</span>
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#123C32] leading-[1.14] tracking-tight">
                {hero.title}
              </h1>

              {/* EXACT PROMISE */}
              <div className="p-4 rounded-2xl bg-white border-l-4 border-[#4DA92C] shadow-xs">
                <p className="text-base sm:text-lg font-bold text-[#123C32] leading-snug">
                  "{hero.promise}"
                </p>
              </div>

              {/* EXACT SUPPORTING TEXT */}
              <p className="text-xs sm:text-sm md:text-base text-[#4A6B60] leading-relaxed">
                "{hero.subheadline}"
              </p>
            </div>

            {/* HIGHLIGHT BULLETS */}
            <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#123C32]">
              {hero.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 font-semibold">
                  <span className="w-5 h-5 rounded-full bg-[#4DA92C] text-white font-bold text-xs flex items-center justify-center shrink-0">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* HERO CTAS & PRICE DISPLAY */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={hero.primaryCtaHref}
                className="py-4 px-8 rounded-2xl bg-[#E76100] hover:bg-[#cf5600] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>{hero.primaryCtaText} ({hero.priceText}) →</span>
              </a>

              <a
                href={hero.secondaryCtaHref}
                className="py-4 px-6 rounded-2xl bg-white hover:bg-[#F0F9ED] text-[#123C32] font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors border border-[#D5E8DC] text-center shadow-xs"
              >
                {hero.secondaryCtaText}
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: HERO VISUAL PRESENTATION CARD */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-[#D5E8DC] shadow-2xl space-y-6 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#4DA92C] via-[#0078BF] to-[#E76100]"></div>
              
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#D5E8DC]">
                <Image
                  src={hero.imageSrc}
                  alt={hero.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  priority
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#4DA92C] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-2xs">
                  Método SANA
                </div>
                <div className="absolute bottom-3 right-3 bg-[#123C32]/90 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md border border-white/20">
                  Herramientas Incluidas 📄
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#D5E8DC]">
                <span className="text-xs font-bold text-[#4A6B60] uppercase tracking-wider">Inversión Única</span>
                <div className="font-serif text-3xl sm:text-4xl font-extrabold text-[#123C32]">
                  {hero.priceText}
                </div>
                <p className="text-xs text-[#4DA92C] font-semibold">Acceso inmediato • Sin suscripción</p>
              </div>

              <a
                href="#oferta"
                className="w-full py-3.5 px-6 rounded-2xl bg-[#E76100] hover:bg-[#cf5600] text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-md block text-center cursor-pointer"
              >
                QUIERO EMPEZAR
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 4. ¿TE HA PASADO? (SECCIÓN DE IDENTIFICACIÓN) */}
      <ProblemSection />

      {/* 5. NO NECESITAS CAMBIARLO TODO (PASO A PASO) */}
      <NoNeedToChangeSection />

      {/* SNEAK PEEK (VIDEO CORTO) */}
      <SneakPeekSection />

      {/* 6. ¿QUÉ ENCONTRARÁS EN EL MÉTODO SANA? (MÓDULOS DEL CURSO) */}
      <CourseModulesSection />

      {/* 7. LO QUE INCLUYE (CURSO EN VIDEO + HERRAMIENTAS) */}
      <IncludesSection />

      {/* 8. UNA MIRADA AL INTERIOR (MATERIAL DE APOYO EN PDF) */}
      <MaterialSupportSection />

      {/* 9. ESTE CURSO ES PARA TI SI... (TARGET AUDIENCE) */}
      <AudienceSection />

      {/* 10. CONOCE A LA FUNDADORA (GLORIA MOLINA) */}
      <AboutGloria />

      {/* 11. OFERTA COMERCIAL MÉTODO SANA ($497 MXN) */}
      <OfferSection />

      {/* 12. PREGUNTAS FRECUENTES (FAQ ACORDEÓN) */}
      <FAQ />

      {/* 13. FINAL CTA BANNER */}
      <section className="relative py-16 sm:py-24 bg-[#123C32] text-white px-4 sm:px-6 text-center overflow-hidden">
        <div className="relative max-w-3xl mx-auto space-y-6">
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-[#4DA92C] text-xs font-extrabold uppercase tracking-wider border border-white/20">
            🌿 MÉTODO SANA — $497 MXN
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Empieza hoy a cuidar tu digestión sin presiones
          </h2>
          
          <p className="text-sm sm:text-base text-[#B8D8C2] max-w-xl mx-auto leading-relaxed">
            "{finalCta.copy}"
          </p>

          <div className="pt-4">
            <a
              href="/pago"
              className="py-4 px-10 rounded-2xl bg-[#E76100] hover:bg-[#cf5600] text-white font-extrabold text-sm sm:text-base transition-all duration-300 shadow-2xl uppercase tracking-wider inline-flex items-center gap-2 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>QUIERO EMPEZAR ($497 MXN) →</span>
            </a>
          </div>

          <p className="text-xs text-[#B8D8C2]/80">
            Acceso Digital Inmediato • Formato PDF
          </p>
        </div>
      </section>

      {/* 14. FOOTER */}
      <Footer />

      {/* STICKY MOBILE BOTTOM BAR */}
      {showStickyMobileCta && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#123C32]/95 backdrop-blur-md border-t border-white/20 p-3 flex items-center justify-between sm:hidden animate-slideUp">
          <div className="text-left text-white px-2">
            <p className="text-xs font-bold">Método SANA</p>
            <p className="text-[10px] text-[#4DA92C] font-semibold">$497 MXN • Digital</p>
          </div>
          <a
            href="/pago"
            className="py-2.5 px-4 rounded-xl bg-[#E76100] hover:bg-[#cf5600] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg cursor-pointer"
          >
            <span>EMPEZAR →</span>
          </a>
        </div>
      )}

      {/* AVISO DE PRIVACIDAD MODAL */}
      {showPrivacyModal && (
        <div
          onClick={closePrivacyModal}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn cursor-pointer"
          role="dialog"
          aria-modal="true"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-[#D5E8DC] cursor-default"
          >
            <div className="flex items-center justify-between border-b border-[#D5E8DC] pb-3">
              <h3 className="font-serif text-lg font-bold text-[#123C32]">
                Aviso de Privacidad
              </h3>
              <button
                onClick={closePrivacyModal}
                className="text-[#4A6B60] hover:text-[#123C32] text-xl font-bold p-1 cursor-pointer focus:outline-none"
                aria-label="Cerrar ventana emergente"
              >
                ✕
              </button>
            </div>

            <div className="text-xs text-[#4A6B60] space-y-2.5 leading-relaxed max-h-60 overflow-y-auto">
              <p>
                Sus datos personales son recabados con el único propósito de proporcionar acceso al <em>Método SANA</em> y enviarle información relevante sobre bienestar y hábitos saludables.
              </p>
              <p>
                No vendemos ni transferimos sus datos a terceros. Puede solicitar la eliminación de sus datos escribiendo a <a href="mailto:gloria@vive-sano.mx" className="text-[#0078BF] underline font-bold">gloria@vive-sano.mx</a>.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <Link
                href="/privacidad"
                onClick={closePrivacyModal}
                className="block w-full py-2.5 rounded-xl bg-[#0078BF] hover:bg-[#006099] text-white font-bold text-xs transition-colors text-center"
              >
                📄 Ver Aviso de Privacidad Completo
              </Link>

              <button
                onClick={closePrivacyModal}
                className="w-full py-2.5 rounded-xl bg-[#4DA92C] text-white font-bold text-xs hover:bg-[#3e8b23] transition-colors cursor-pointer"
              >
                Entendido y Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default DirectResponseCampaignLandingPage;
