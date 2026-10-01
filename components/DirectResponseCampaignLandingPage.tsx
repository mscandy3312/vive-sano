'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { contentData } from '@/data/content';

export interface DirectResponseCampaignLandingPageProps {
  systemeActionUrl?: string;
  leadMagnetPdfUrl?: string;
}

export const DirectResponseCampaignLandingPage: React.FC<DirectResponseCampaignLandingPageProps> = ({
  systemeActionUrl = process.env.NEXT_PUBLIC_SYSTEME_FORM_ACTION || '',
  leadMagnetPdfUrl = process.env.NEXT_PUBLIC_LEAD_MAGNET_PDF_URL || '#',
}) => {
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', acceptTerms: true });
  const [formState, setFormState] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  
  // Lightbox Modal for Guide Preview
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);

  // Sticky Mobile CTA Visibility
  const [showStickyMobileCta, setShowStickyMobileCta] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Handle Scroll for Sticky Mobile CTA
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const scrollPosition = window.scrollY;
        // Show sticky CTA after scrolling past hero section (approx 400px)
        setShowStickyMobileCta(scrollPosition > 450);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const input = document.getElementById('lead-name-input');
      if (input) {
        setTimeout(() => input.focus(), 350);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Analytics Event Triggers
    if (typeof window !== 'undefined') {
      if ((window as any).fbq) {
        (window as any).fbq('track', 'Lead');
      }
      if ((window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'ViveSano',
          event_label: 'GuiaGratuita',
        });
      }
    }

    if (systemeActionUrl && systemeActionUrl !== '#') {
      // Direct POST to Systeme.io endpoint if provided
      return;
    }

    e.preventDefault();
    setFormState('LOADING');

    setTimeout(() => {
      setFormState('SUCCESS');
      scrollToForm();
    }, 600);
  };

  const {
    brand,
    hero,
    problem,
    identification,
    benefits,
    guide,
    guidePreview,
    audience,
    aboutGloria,
    faq,
    form,
    cta,
    finalCta,
    footer,
  } = contentData;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F1] text-[#123C32] font-sans antialiased selection:bg-[#B8D8C2] selection:text-[#123C32]">

      {/* 1. BARRA SUPERIOR ANUNCIO + NAVEGACIÓN & REDES */}
      <header className="bg-[#123C32] text-white py-2.5 px-4 text-center text-xs font-semibold tracking-wide border-b border-[#1F6B50]/40 shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="w-2 h-2 rounded-full bg-[#5E9F78] animate-pulse"></span>
            <span>🌿 RECURSO GRATUITO · DESCUBRE CÓMO CUIDAR TU BIENESTAR DIGESTIVO</span>
          </div>

          {/* SOCIAL MEDIA BADGES */}
          <div className="hidden md:flex items-center gap-4 text-white/90">
            <span className="text-[11px] font-normal text-[#B8D8C2]">Síguenos:</span>
            {footer.socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Síguenos en ${social.platform}`}
                className="hover:text-[#5E9F78] transition-colors p-1"
              >
                {social.platform === 'Facebook' ? (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                ) : (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                )}
              </a>
            ))}
          </div>

        </div>
      </header>

      {/* 2. HERO PRINCIPAL ULTRA POTENTE */}
      <section id="inicio" ref={heroRef} className="relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6 max-w-6xl mx-auto w-full min-h-[calc(100vh-42px)] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: COPY + IMAGEN LIFESTYLE */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF7F0] border border-[#B8D8C2] text-[#1F6B50] text-xs font-bold uppercase tracking-wider">
                🌱 {hero.eyebrow}
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#123C32] leading-[1.14] tracking-tight">
                "{hero.headline}"
              </h1>

              <p className="text-sm sm:text-base text-[#4A6B60] leading-relaxed font-normal">
                "{hero.subheadline}"
              </p>
            </div>

            {/* FOTOGRAFÍA LIFESTYLE PREMIUM */}
            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-[#D5E8DC] bg-white group">
              <Image
                src={hero.imageSrc}
                alt={hero.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#123C32] border border-[#D5E8DC] shadow-sm flex items-center gap-1.5">
                <span>📄</span> Formato PDF Descargable
              </div>
              <div className="absolute bottom-4 right-4 bg-[#123C32]/95 text-white backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold border border-white/20 shadow-md">
                ⚡ 100% Gratuito
              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA: FORMULARIO HERO TERMINADO (SIN TEXTOS DE ESPERA) */}
          <div className="lg:col-span-6" ref={formRef} id="formulario">
            <div className="w-full bg-white rounded-3xl border border-[#D5E8DC] shadow-2xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300">
              
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#123C32] via-[#1F6B50] to-[#5E9F78]"></div>

              {formState === 'SUCCESS' ? (
                /* ESTADO DE ÉXITO */
                <div className="space-y-5 text-center py-6 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#EEF7F0] text-[#1F6B50] flex items-center justify-center mx-auto text-3xl border border-[#B8D8C2] shadow-inner">
                    🌿
                  </div>

                  <div className="space-y-2">
                    <h2 className="font-serif text-2xl font-bold text-[#123C32]">
                      {form.successTitle}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#4A6B60] leading-relaxed max-w-sm mx-auto">
                      {form.successMessage}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#EEF7F0] border border-[#B8D8C2] text-xs text-[#123C32] text-left space-y-1.5">
                    <p className="font-bold flex items-center gap-2">
                      <span>📧</span> Remitente: <strong>{brand.name}</strong>
                    </p>
                    <p className="text-[#4A6B60]">
                      Asunto: <em>"Aquí tienes tu guía de Vive Sano 🌿"</em>
                    </p>
                  </div>

                  {leadMagnetPdfUrl !== '#' && (
                    <a
                      href={leadMagnetPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-[#1F6B50] hover:bg-[#123C32] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xl hover:shadow-2xl"
                    >
                      <span>⬇️ DESCARGAR GUÍA EN PDF INMEDIATAMENTE</span>
                    </a>
                  )}
                </div>
              ) : (
                /* FORMULARIO DE REGISTRO COMPLETO */
                <div className="space-y-5 text-left">
                  <div className="space-y-1.5">
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#123C32]">
                      {form.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#4A6B60]">
                      {form.subtitle}
                    </p>
                  </div>

                  <form
                    action={systemeActionUrl || '#'}
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {/* CAMPO NOMBRE */}
                    <div className="space-y-1">
                      <label htmlFor="lead-name-input" className="block text-xs font-bold text-[#123C32] uppercase tracking-wider">
                        {form.nameLabel}
                      </label>
                      <input
                        type="text"
                        id="lead-name-input"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={form.namePlaceholder}
                        className="w-full px-4 py-3.5 rounded-xl border border-[#D5E8DC] bg-[#FAF8F1] text-sm text-[#123C32] placeholder-[#8A9890] focus:outline-none focus:ring-2 focus:ring-[#1F6B50] focus:bg-white transition-all"
                      />
                    </div>

                    {/* CAMPO CORREO */}
                    <div className="space-y-1">
                      <label htmlFor="lead-email-input" className="block text-xs font-bold text-[#123C32] uppercase tracking-wider">
                        {form.emailLabel}
                      </label>
                      <input
                        type="email"
                        id="lead-email-input"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={form.emailPlaceholder}
                        className="w-full px-4 py-3.5 rounded-xl border border-[#D5E8DC] bg-[#FAF8F1] text-sm text-[#123C32] placeholder-[#8A9890] focus:outline-none focus:ring-2 focus:ring-[#1F6B50] focus:bg-white transition-all"
                      />
                    </div>

                    {/* CHECKBOX DE ACEPTACIÓN */}
                    <div className="flex items-start gap-2.5 pt-1">
                      <input
                        type="checkbox"
                        id="accept-terms"
                        required
                        checked={formData.acceptTerms}
                        onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                        className="mt-0.5 rounded border-[#D5E8DC] text-[#1F6B50] focus:ring-[#1F6B50] h-4 w-4 shrink-0"
                      />
                      <label htmlFor="accept-terms" className="text-xs text-[#4A6B60] leading-tight cursor-pointer">
                        {form.checkboxText}
                      </label>
                    </div>

                    {/* BOTÓN CTA */}
                    <button
                      type="submit"
                      disabled={formState === 'LOADING'}
                      className="w-full py-4 px-6 rounded-2xl bg-[#1F6B50] hover:bg-[#123C32] text-white font-bold text-base transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 uppercase tracking-wide transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      {formState === 'LOADING' ? (
                        <span>{form.loadingText}</span>
                      ) : (
                        <>
                          <span>{form.buttonText} →</span>
                        </>
                      )}
                    </button>

                    {/* MICROCOPY INFORMATIVO */}
                    <div className="text-center pt-2 space-y-1">
                      <p className="text-[11px] text-[#4A6B60] leading-relaxed">
                        {form.microcopy}{' '}
                        <button
                          type="button"
                          onClick={() => setShowPrivacyModal(true)}
                          className="text-[#1F6B50] font-semibold hover:underline cursor-pointer"
                        >
                          {form.privacyLinkText}
                        </button>
                        .
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 3. SECCIÓN 1: "¿TE HA PASADO?" (PROBLEM IDENTIFICATION) */}
      <section id="problema" className="py-14 sm:py-20 bg-white border-y border-[#D5E8DC] px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-10 text-center">
          
          <div className="space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#1F6B50] uppercase tracking-widest bg-[#EEF7F0] px-3.5 py-1 rounded-full border border-[#B8D8C2]">
              EMPATÍA Y CONEXIÓN
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123C32]">
              "{problem.title}"
            </h2>
            <p className="text-sm sm:text-base text-[#4A6B60] max-w-xl mx-auto">
              "{problem.subtitle}"
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
            {problem.items.map((item) => (
              <div
                key={item.id}
                className="bg-[#FAF8F1] p-6 rounded-2xl border border-[#D5E8DC] space-y-3 hover:border-[#5E9F78] transition-all hover:shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-white text-[#1F6B50] flex items-center justify-center font-bold text-xl border border-[#D5E8DC]">
                  {item.icon}
                </div>
                <h3 className="font-serif font-bold text-base text-[#123C32]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#4A6B60] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. SECCIÓN 2: IDENTIFICACIÓN (NO NECESITAS CAMBIARLO TODO) */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#D5E8DC]">
            <Image
              src={identification.imageSrc}
              alt={identification.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-5 text-left">
            <span className="text-xs font-bold text-[#1F6B50] uppercase tracking-widest bg-[#EEF7F0] px-3.5 py-1 rounded-full border border-[#B8D8C2]">
              UN CAMINO CLARO Y SOSTENIBLE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123C32] leading-tight">
              "{identification.title}"
            </h2>
            <p className="text-sm sm:text-base text-[#4A6B60] leading-relaxed">
              "{identification.copy}"
            </p>

            <button
              onClick={scrollToForm}
              className="py-3.5 px-6 rounded-2xl bg-[#1F6B50] hover:bg-[#123C32] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
            >
              <span>QUIERO MI GUÍA GRATIS →</span>
            </button>
          </div>

        </div>
      </section>

      {/* 5. SECCIÓN 3: BENEFICIOS ("¿QUÉ ENCONTRARÁS EN ESTA GUÍA?") */}
      <section id="beneficios" className="py-14 sm:py-20 bg-[#EEF7F0] border-y border-[#D5E8DC] px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-12 text-center">
          
          <div className="space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-bold text-[#1F6B50] uppercase tracking-widest bg-white px-3.5 py-1 rounded-full border border-[#B8D8C2] shadow-xs">
              BENEFICIOS PRINCIPALES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123C32]">
              {benefits.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#4A6B60]">
              {benefits.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {benefits.items.map((item) => (
              <div
                key={item.id}
                className="bg-white p-7 rounded-3xl border border-[#D5E8DC] shadow-xs space-y-4 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-[#EEF7F0] text-[#1F6B50] flex items-center justify-center text-xl font-bold border border-[#B8D8C2]">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold text-[#5E9F78] uppercase tracking-wider bg-[#FAF8F1] px-2.5 py-0.5 rounded-full border border-[#D5E8DC]">
                    Guía
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg text-[#123C32]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4A6B60] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. SECCIÓN 4: DENTRO DE LA GUÍA (MOCKUP PROTAGONISTA + CARACTERÍSTICAS) */}
      <section id="guia" className="py-14 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* MOCKUP 3D PROTAGONISTA */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#D5E8DC] bg-white group">
              <Image
                src={guide.mockupImageSrc}
                alt={guide.mockupImageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-[#123C32] border border-[#D5E8DC]">
                📖 Producto Digital PDF
              </div>
            </div>
          </div>

          {/* COPY Y CARACTERÍSTICAS */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#1F6B50] uppercase tracking-widest bg-[#EEF7F0] px-3.5 py-1 rounded-full border border-[#B8D8C2]">
                CONTENIDO DE LA GUÍA
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#123C32]">
                "{guide.title}"
              </h2>
              <p className="text-sm text-[#4A6B60] leading-relaxed">
                {guide.subtitle}
              </p>
            </div>

            <div className="space-y-2.5">
              {guide.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-[#123C32] font-semibold bg-white p-3 rounded-xl border border-[#D5E8DC]">
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-[#1F6B50] hover:bg-[#123C32] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-xl cursor-pointer"
            >
              <span>QUIERO MI GUÍA GRATIS →</span>
            </button>
          </div>

        </div>
      </section>

      {/* 7. SECCIÓN 5: UNA MIRADA AL INTERIOR (GALERÍA INTERACTIVA LIGHTBOX) */}
      <section className="py-14 sm:py-20 bg-[#EEF7F0] border-y border-[#D5E8DC] px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-10 text-center">
          
          <div className="space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-bold text-[#1F6B50] uppercase tracking-widest bg-white px-3.5 py-1 rounded-full border border-[#B8D8C2]">
              PREVISUALIZACIÓN EDITORIAL
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123C32]">
              "{guidePreview.title}"
            </h2>
            <p className="text-xs sm:text-sm text-[#4A6B60]">
              "{guidePreview.subtitle}"
            </p>
          </div>

          {/* GALERÍA DE PÁGINAS INTERNAS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {guidePreview.items.map((page) => (
              <div
                key={page.id}
                onClick={() => setActiveLightboxImage(page.imageSrc)}
                className="bg-white rounded-2xl border border-[#D5E8DC] overflow-hidden shadow-xs hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="relative aspect-[4/3] bg-[#FAF8F1] overflow-hidden">
                  <Image
                    src={page.imageSrc}
                    alt={page.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-1.5 backdrop-blur-2xs">
                    <span>🔍 Ampliar vista</span>
                  </div>
                </div>
                <div className="p-4 space-y-1">
                  <h3 className="font-serif font-bold text-sm text-[#123C32]">
                    {page.title}
                  </h3>
                  <p className="text-xs text-[#4A6B60]">
                    {page.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. SECCIÓN 6: "¿PARA QUIÉN ES?" */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto w-full text-center">
        <div className="space-y-8">
          
          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123C32]">
              "{audience.title}"
            </h2>
            <p className="text-xs sm:text-sm text-[#4A6B60]">
              {audience.subtitle}
            </p>
          </div>

          <div className="space-y-3 max-w-2xl mx-auto text-left">
            {audience.items.map((item) => (
              <div key={item.id} className="p-4 rounded-2xl bg-white border border-[#D5E8DC] flex items-center gap-3.5 shadow-xs">
                <span className="w-7 h-7 rounded-full bg-[#1F6B50] text-white font-bold text-xs flex items-center justify-center shrink-0">
                  ✓
                </span>
                <span className="text-sm text-[#123C32] font-semibold">{item.text}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. SECCIÓN 7: SOBRE GLORIA MOLINA ("DETRÁS DE VIVE SANO") */}
      <section id="sobre-gloria" className="py-14 sm:py-20 bg-white border-y border-[#D5E8DC] px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* FOTOGRAFÍA O PLACEHOLDER DE GLORIA */}
          <div className="lg:col-span-5 relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#D5E8DC] bg-[#EEF7F0] flex flex-col items-center justify-center p-6 text-center shadow-lg">
            {aboutGloria.isPlaceholder ? (
              <div className="space-y-4 my-auto">
                <div className="w-20 h-20 rounded-full bg-[#B8D8C2] text-[#123C32] flex items-center justify-center mx-auto text-3xl font-serif font-bold shadow-inner">
                  GM
                </div>
                <div className="space-y-1">
                  <p className="font-serif font-bold text-base text-[#123C32]">
                    {aboutGloria.name}
                  </p>
                  <p className="text-xs text-[#1F6B50] font-semibold">
                    {aboutGloria.role}
                  </p>
                </div>
                <p className="text-[11px] text-[#4A6B60] italic bg-white/80 p-2.5 rounded-xl border border-[#B8D8C2]">
                  📌 {aboutGloria.imagePlaceholderText}
                </p>
              </div>
            ) : (
              <Image
                src={aboutGloria.imageSrc}
                alt={aboutGloria.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
            )}
          </div>

          {/* COPY OFICIAL GLORIA MOLINA */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <span className="text-xs font-bold text-[#1F6B50] uppercase tracking-widest bg-[#EEF7F0] px-3.5 py-1 rounded-full border border-[#B8D8C2]">
              CONOCE A LA FUNDADORA
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123C32]">
              "{aboutGloria.title}"
            </h2>

            <div className="space-y-3 text-sm text-[#4A6B60] leading-relaxed">
              <p>
                "{aboutGloria.copy}"
              </p>
              <p>
                Nuestra misión es acompañarte a construir una relación más consciente con tu alimentación y tus rutinas diarias, sin extremos ni exigencias desmedidas.
              </p>
            </div>

            {aboutGloria.knowMoreEnabled && (
              <a
                href={aboutGloria.knowMoreHref}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#1F6B50] hover:underline"
              >
                <span>{aboutGloria.knowMoreText} →</span>
              </a>
            )}
          </div>

        </div>
      </section>

      {/* 10. PREGUNTAS FRECUENTES (FAQ) */}
      <section id="faq" className="py-14 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto w-full">
        <div className="space-y-10 text-center">
          
          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123C32]">
              {faq.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#4A6B60]">
              {faq.subtitle}
            </p>
          </div>

          <div className="space-y-4 text-left">
            {faq.items.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-white border border-[#D5E8DC] shadow-2xs space-y-2"
              >
                <h3 className="font-serif font-bold text-base text-[#123C32]">
                  {item.question}
                </h3>
                <p className="text-xs sm:text-sm text-[#4A6B60] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. CTA FINAL VISUAL BANNER */}
      <section className="relative py-16 sm:py-20 bg-[#123C32] text-white px-4 sm:px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src={finalCta.bgImageSrc}
            alt="Fondo de bienestar Vive Sano"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="relative max-w-3xl mx-auto space-y-6">
          <div className="space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              "{finalCta.title}"
            </h2>
            <p className="text-sm sm:text-base text-[#B8D8C2] max-w-xl mx-auto">
              "{finalCta.copy}"
            </p>
          </div>

          <button
            onClick={scrollToForm}
            className="py-4 px-10 rounded-2xl bg-[#1F6B50] hover:bg-white hover:text-[#123C32] text-white font-bold text-base transition-all duration-300 shadow-2xl cursor-pointer uppercase tracking-wider inline-flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            <span>{finalCta.buttonText} →</span>
          </button>
        </div>
      </section>

      {/* 12. FOOTER PROFESIONAL MINIMALISTA */}
      <footer className="py-10 bg-white border-t border-[#D5E8DC] text-center px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          
          <div className="space-y-1">
            <h3 className="font-serif text-xl font-bold text-[#123C32]">
              {footer.brandName}
            </h3>
            <p className="text-xs text-[#4A6B60]">
              {footer.tagline}
            </p>
          </div>

          {/* ENLACES DE NAVEGACIÓN */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#123C32]">
            {footer.links.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-[#1F6B50] transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          {/* REDES SOCIALES */}
          <div className="flex items-center justify-center gap-3">
            {footer.socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#EEF7F0] hover:bg-[#1F6B50] text-[#1F6B50] hover:text-white border border-[#B8D8C2] text-xs font-bold transition-all shadow-2xs"
              >
                <span>{social.platform}</span>
              </a>
            ))}
          </div>

          {/* DISCLAIMER LEGAL Y COPYRIGHT */}
          <div className="pt-4 border-t border-[#D5E8DC] space-y-2 text-[11px] text-[#4A6B60]">
            <p className="max-w-2xl mx-auto italic">
              {brand.disclaimer}
            </p>
            <p className="font-semibold text-[#123C32]">
              {footer.copyright}
            </p>
          </div>

        </div>
      </footer>

      {/* STICKY CTA MOBILE BOTTOM BANNER */}
      {showStickyMobileCta && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#123C32]/95 backdrop-blur-md border-t border-white/20 p-3 flex items-center justify-between sm:hidden animate-slideUp">
          <div className="text-left text-white px-2">
            <p className="text-xs font-bold">Guía Digital Vive Sano</p>
            <p className="text-[10px] text-[#B8D8C2]">100% Gratuita • PDF</p>
          </div>
          <button
            onClick={scrollToForm}
            className="py-2.5 px-4 rounded-xl bg-[#1F6B50] text-white font-bold text-xs uppercase tracking-wider shadow-lg cursor-pointer"
          >
            <span>DESCARGAR →</span>
          </button>
        </div>
      )}

      {/* LIGHTBOX MODAL DE PREVISUALIZACIÓN */}
      {activeLightboxImage && (
        <div
          onClick={() => setActiveLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn cursor-pointer"
        >
          <div className="relative max-w-3xl w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black">
            <Image
              src={activeLightboxImage}
              alt="Ampliación de la vista previa interna de la guía"
              fill
              sizes="100vw"
              className="object-contain"
            />
            <button
              onClick={() => setActiveLightboxImage(null)}
              className="absolute top-4 right-4 bg-white/80 hover:bg-white text-[#123C32] rounded-full p-2 text-sm font-bold shadow-md cursor-pointer"
            >
              ✕ Cerrar
            </button>
          </div>
        </div>
      )}

      {/* AVISO DE PRIVACIDAD MODAL */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-[#D5E8DC]">
            <div className="flex items-center justify-between border-b border-[#D5E8DC] pb-3">
              <h3 className="font-serif text-lg font-bold text-[#123C32]">
                Aviso de Privacidad
              </h3>
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="text-[#4A6B60] hover:text-[#123C32] text-xl font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="text-xs text-[#4A6B60] space-y-2.5 leading-relaxed max-h-60 overflow-y-auto">
              <p>
                Sus datos personales (nombre y correo electrónico) son recabados con el único propósito de entregar la <em>Guía Gratuita de Vive Sano</em> y enviarle información relevante sobre bienestar y hábitos saludables.
              </p>
              <p>
                No vendemos ni transferimos sus datos a terceros. Puede darse de baja o solicitar la eliminación de sus datos en cualquier momento mediante el enlace ubicado al pie de cada correo electrónico enviado.
              </p>
            </div>
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="w-full py-2.5 rounded-xl bg-[#1F6B50] text-white font-bold text-xs hover:bg-[#123C32] transition-colors cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default DirectResponseCampaignLandingPage;
