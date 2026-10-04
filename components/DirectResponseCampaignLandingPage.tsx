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
  const [errors, setErrors] = useState<{ name?: string; email?: string; acceptTerms?: string }>({});
  const [formState, setFormState] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');
  
  // Modals & Menu State
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Accordion FAQ State (First item open by default)
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq1');

  // Lightbox Modal for Guide Preview
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);

  // Sticky Mobile CTA Visibility
  const [showStickyMobileCta, setShowStickyMobileCta] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Handle Scroll for Sticky Mobile CTA & Mobile Menu auto-close
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const scrollPosition = window.scrollY;
        setShowStickyMobileCta(scrollPosition > 450);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard Accessibility for Modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowPrivacyModal(false);
        setActiveLightboxImage(null);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToForm = () => {
    setIsMobileMenuOpen(false);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const input = document.getElementById('lead-name-input');
      if (input) {
        setTimeout(() => input.focus(), 350);
      }
    }
  };

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; acceptTerms?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Ingresa tu nombre.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Ingresa un correo electrónico válido.';
    }
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Debes aceptar el Aviso de Privacidad.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!systemeActionUrl || systemeActionUrl === '#') {
      e.preventDefault();
    }

    if (!validateForm()) {
      return;
    }

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
      // Standard HTML POST will proceed to Systeme.io endpoint
      return;
    }

    // Local Demo Handling
    setFormState('LOADING');
    setTimeout(() => {
      setFormState('SUCCESS');
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 700);
  };

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
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
    finalCta,
    footer,
  } = contentData;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F1] text-[#123C32] font-sans antialiased selection:bg-[#B8D8C2] selection:text-[#123C32]">

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'DigitalDocument',
            'name': 'Guía Gratuita de Salud y Bienestar Digestivo — Vive Sano',
            'author': {
              '@type': 'Person',
              'name': 'Gloria Molina',
            },
            'publisher': {
              '@type': 'Organization',
              'name': 'Vive Sano',
              'url': 'https://vive-sano.vercel.app',
            },
            'description': 'Descubre recomendaciones sencillas y conscientes para cuidar tu bienestar digestivo día a día.',
            'inLanguage': 'es',
            'isAccessibleForFree': true,
          }),
        }}
      />

      {/* 1. BARRA SUPERIOR DE ANUNCIO & SOCIAL MEDIA */}
      <div className="bg-[#123C32] text-white py-2 px-4 text-center text-xs font-medium tracking-wide border-b border-[#1F6B50]/40 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 mx-auto md:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5E9F78] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5E9F78]"></span>
            </span>
            <span className="font-semibold">🌿 RECURSO GRATUITO</span>
            <span className="hidden sm:inline text-[#B8D8C2]">• Descubre cómo cuidar tu bienestar digestivo sin extremos</span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-white/90">
            <span className="text-[11px] text-[#B8D8C2]">Síguenos en redes:</span>
            {footer.socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Síguenos en ${social.platform}`}
                className="hover:text-[#5E9F78] transition-colors p-1 focus:outline-none focus:ring-1 focus:ring-[#5E9F78] rounded"
              >
                {social.platform === 'Facebook' ? (
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 2. HEADER NAVEGACIÓN PRINCIPAL (STICKY CON GLASSMORPHISM) */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#D5E8DC]/80 shadow-xs transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          {/* LOGO */}
          <a href="#inicio" className="flex items-center group focus:outline-none py-1">
            <div className="relative w-36 sm:w-44 h-10 sm:h-12">
              <Image
                src={contentData.images.logo || '/images/logo.png'}
                alt={contentData.images.logoAlt || 'Vive Sano — Gloria Molina'}
                fill
                priority
                sizes="(max-width: 640px) 150px, 180px"
                className="object-contain object-left group-hover:scale-102 transition-transform"
              />
            </div>
          </a>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-[#123C32]">
            <a href="#inicio" className="hover:text-[#1F6B50] transition-colors py-1">Inicio</a>
            <a href="#problema" className="hover:text-[#1F6B50] transition-colors py-1">¿Te ha pasado?</a>
            <a href="#beneficios" className="hover:text-[#1F6B50] transition-colors py-1">Beneficios</a>
            <a href="#guia" className="hover:text-[#1F6B50] transition-colors py-1">Dentro de la guía</a>
            <a href="#preview" className="hover:text-[#1F6B50] transition-colors py-1">Previsualización</a>
            <a href="#conoce-vive-sano" className="hover:text-[#1F6B50] transition-colors py-1">Conoce Vive Sano</a>
            <a href="#faq" className="hover:text-[#1F6B50] transition-colors py-1">FAQ</a>
          </nav>

          {/* DESKTOP HEADER CTA BUTTON */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={scrollToForm}
              className="py-2.5 px-5 rounded-full bg-[#1F6B50] hover:bg-[#123C32] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5"
            >
              QUIERO MI GUÍA GRATIS
            </button>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menú de navegación"
            aria-expanded={isMobileMenuOpen}
            className="lg:hidden p-2 rounded-xl text-[#123C32] hover:bg-[#EEF7F0] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1F6B50]"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* MOBILE MENU DRAWER */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-[#D5E8DC] px-6 py-6 space-y-4 animate-fadeIn shadow-xl">
            <nav className="flex flex-col space-y-3.5 text-sm font-semibold text-[#123C32]">
              <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1F6B50] transition-colors py-1">Inicio</a>
              <a href="#problema" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1F6B50] transition-colors py-1">¿Te ha pasado?</a>
              <a href="#beneficios" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1F6B50] transition-colors py-1">Beneficios</a>
              <a href="#guia" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1F6B50] transition-colors py-1">Dentro de la guía</a>
              <a href="#preview" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1F6B50] transition-colors py-1">Previsualización</a>
              <a href="#conoce-vive-sano" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1F6B50] transition-colors py-1">Conoce Vive Sano</a>
              <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1F6B50] transition-colors py-1">Preguntas Frecuentes</a>
            </nav>
            <div className="pt-3 border-t border-[#D5E8DC]">
              <button
                onClick={scrollToForm}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#1F6B50] text-white font-bold text-xs uppercase tracking-wider text-center shadow-md cursor-pointer"
              >
                DESCARGAR GUÍA GRATUITA
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO PRINCIPAL: COPY IMPACTANTE + LEAD MAGNET FORM DIRECTO */}
      <section id="inicio" ref={heroRef} className="relative py-10 sm:py-14 lg:py-20 px-4 sm:px-6 max-w-6xl mx-auto w-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: VALUE PROP + HERO VISUAL */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF7F0] border border-[#B8D8C2] text-[#1F6B50] text-xs font-bold uppercase tracking-wider shadow-2xs">
                <span>{hero.eyebrow}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#123C32] leading-[1.15] tracking-tight">
                {hero.headline}
              </h1>

              <p className="text-sm sm:text-base text-[#4A6B60] leading-relaxed font-normal max-w-xl">
                {hero.subheadline}
              </p>
            </div>

            {/* TRUST RATING & HIGHLIGHT BULLETS */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#123C32] bg-white px-3.5 py-2 rounded-xl border border-[#D5E8DC] inline-flex shadow-2xs">
                <span className="text-amber-500">★★★★★</span>
                <span className="font-bold">4.9/5</span>
                <span className="text-[#5E9F78]">|</span>
                <span className="text-[#4A6B60]">Recurso Digital 100% Gratuito</span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-[#123C32]">
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EEF7F0] text-[#1F6B50] font-bold text-xs flex items-center justify-center shrink-0 border border-[#B8D8C2]">✓</span>
                  <span>Pautas amables de alimentación consciente y equilibrada.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EEF7F0] text-[#1F6B50] font-bold text-xs flex items-center justify-center shrink-0 border border-[#B8D8C2]">✓</span>
                  <span>Hábitos realizables hoy mismo sin abrumamiento.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EEF7F0] text-[#1F6B50] font-bold text-xs flex items-center justify-center shrink-0 border border-[#B8D8C2]">✓</span>
                  <span>Formato PDF descargable para consultar cuando quieras.</span>
                </div>
              </div>
            </div>

            {/* HERO LIFESTYLE IMAGE CARD */}
            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-xl border border-[#D5E8DC] bg-white group mt-4">
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

          {/* COLUMNA DERECHA: FORMULARIO DE CAPTACIÓN HIGH-CONVERSION */}
          <div className="lg:col-span-6" ref={formRef} id="formulario">
            <div className="w-full bg-white rounded-3xl border border-[#D5E8DC] shadow-2xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300">
              
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#123C32] via-[#1F6B50] to-[#5E9F78]"></div>

              {formState === 'SUCCESS' ? (
                /* ESTADO SUCCESS */
                <div className="space-y-6 text-center py-6 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#EEF7F0] text-[#1F6B50] flex items-center justify-center mx-auto text-3xl border border-[#B8D8C2] shadow-inner">
                    🌿
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-[#123C32]">
                      {form.successTitle}
                    </h3>
                    <p className="text-sm font-bold text-[#123C32]">
                      {form.successMessage1}
                    </p>
                    <p className="text-xs sm:text-sm text-[#4A6B60] leading-relaxed max-w-sm mx-auto">
                      {form.successMessage2}
                    </p>
                  </div>

                  <div className="pt-2">
                    <a
                      href={leadMagnetPdfUrl !== '#' ? leadMagnetPdfUrl : '/images/lead-magnet-mockup.jpg'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-[#1F6B50] hover:bg-[#123C32] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl hover:shadow-2xl"
                    >
                      <span>⬇️ {form.successButtonText}</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* FORMULARIO DIRECTO DE CAPTURA */
                <div className="space-y-5 text-left animate-fadeIn">
                  <div className="space-y-1.5 border-b border-[#D5E8DC] pb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#1F6B50] bg-[#EEF7F0] px-3 py-1 rounded-full border border-[#B8D8C2]">
                        ACCESO GRATUITO E INMEDIATO
                      </span>
                      <span className="text-xs text-[#5E9F78] font-semibold">🔒 100% Seguro</span>
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#123C32] pt-1">
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
                    noValidate
                  >
                    {/* CAMPO 1: NOMBRE */}
                    <div className="space-y-1">
                      <label htmlFor="lead-name-input" className="block text-xs font-bold text-[#123C32] uppercase tracking-wider">
                        {form.nameLabel} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lead-name-input"
                        name="name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder={form.namePlaceholder}
                        aria-required="true"
                        className={`w-full px-4 py-3.5 rounded-xl border bg-[#FAF8F1] text-sm text-[#123C32] placeholder-[#8A9890] focus:outline-none focus:ring-2 focus:ring-[#1F6B50] focus:bg-white transition-all ${
                          errors.name ? 'border-red-500 focus:ring-red-500 bg-red-50/20' : 'border-[#D5E8DC]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1" role="alert">
                          <span>⚠️</span> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* CAMPO 2: CORREO ELECTRÓNICO */}
                    <div className="space-y-1">
                      <label htmlFor="lead-email-input" className="block text-xs font-bold text-[#123C32] uppercase tracking-wider">
                        {form.emailLabel} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="lead-email-input"
                        name="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder={form.emailPlaceholder}
                        aria-required="true"
                        className={`w-full px-4 py-3.5 rounded-xl border bg-[#FAF8F1] text-sm text-[#123C32] placeholder-[#8A9890] focus:outline-none focus:ring-2 focus:ring-[#1F6B50] focus:bg-white transition-all ${
                          errors.email ? 'border-red-500 focus:ring-red-500 bg-red-50/20' : 'border-[#D5E8DC]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1" role="alert">
                          <span>⚠️</span> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* CHECKBOX AVISO PRIVACIDAD */}
                    <div className="space-y-1 pt-1">
                      <div className="flex items-start gap-2.5">
                        <input
                          type="checkbox"
                          id="accept-terms"
                          name="acceptTerms"
                          checked={formData.acceptTerms}
                          onChange={(e) => {
                            setFormData({ ...formData, acceptTerms: e.target.checked });
                            if (errors.acceptTerms) setErrors({ ...errors, acceptTerms: undefined });
                          }}
                          className="mt-0.5 rounded border-[#D5E8DC] text-[#1F6B50] focus:ring-[#1F6B50] h-4 w-4 shrink-0 cursor-pointer"
                        />
                        <label htmlFor="accept-terms" className="text-xs text-[#4A6B60] leading-tight cursor-pointer select-none">
                          {form.checkboxText}
                        </label>
                      </div>
                      {errors.acceptTerms && (
                        <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1" role="alert">
                          <span>⚠️</span> {errors.acceptTerms}
                        </p>
                      )}
                    </div>

                    {/* BOTÓN CTA */}
                    <button
                      type="submit"
                      disabled={formState === 'LOADING'}
                      className="w-full py-4 px-6 rounded-2xl bg-[#1F6B50] hover:bg-[#123C32] text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 uppercase tracking-wide transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      {formState === 'LOADING' ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {form.loadingText}
                        </span>
                      ) : (
                        <span>{form.buttonText} →</span>
                      )}
                    </button>

                    {/* MICROLEYENDA Y AVISO DE PRIVACIDAD */}
                    <div className="text-center pt-1 space-y-1">
                      <p className="text-[11px] text-[#4A6B60] leading-relaxed">
                        {form.microcopy}{' '}
                        <button
                          type="button"
                          onClick={() => setShowPrivacyModal(true)}
                          className="text-[#1F6B50] font-semibold hover:underline cursor-pointer focus:outline-none"
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

      {/* 4. BARRA DE INDICADORES DE CALIDAD Y CONFIANZA */}
      <section className="bg-[#EEF7F0] border-y border-[#D5E8DC] py-6 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex items-center justify-center gap-2.5 p-2">
            <span className="text-xl">🛡️</span>
            <div className="text-left">
              <p className="text-xs font-bold text-[#123C32]">100% Gratuito</p>
              <p className="text-[11px] text-[#4A6B60]">Sin costo ni compromisos</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 p-2">
            <span className="text-xl">📲</span>
            <div className="text-left">
              <p className="text-xs font-bold text-[#123C32]">Multi-dispositivo</p>
              <p className="text-[11px] text-[#4A6B60]">Celular, Tablet o Laptop</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 p-2">
            <span className="text-xl">⚡</span>
            <div className="text-left">
              <p className="text-xs font-bold text-[#123C32]">Acceso Inmediato</p>
              <p className="text-[11px] text-[#4A6B60]">Formato PDF digital</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 p-2">
            <span className="text-xl">🌿</span>
            <div className="text-left">
              <p className="text-xs font-bold text-[#123C32]">Hábitos Reales</p>
              <p className="text-[11px] text-[#4A6B60]">Pautas sencillas y claras</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN 1: "¿TE HA PASADO?" (PROBLEMA / EMPATÍA) */}
      <section id="problema" className="py-14 sm:py-20 bg-white px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-12 text-center">
          
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#1F6B50] uppercase tracking-widest bg-[#EEF7F0] px-3.5 py-1 rounded-full border border-[#B8D8C2]">
              {problem.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123C32]">
              {problem.title}
            </h2>
            <p className="text-sm sm:text-base text-[#4A6B60] max-w-xl mx-auto leading-relaxed">
              {problem.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {problem.items.map((item) => (
              <div
                key={item.id}
                className="bg-[#FAF8F1] p-6 rounded-2xl border border-[#D5E8DC] space-y-3 hover:border-[#5E9F78] transition-all hover:shadow-md group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white text-[#1F6B50] flex items-center justify-center font-bold text-2xl border border-[#D5E8DC] group-hover:bg-[#EEF7F0] transition-colors shadow-2xs">
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

      {/* 6. SECCIÓN 2: IDENTIFICACIÓN / PROPUESTA DE VALOR ("UN CAMINO REALISTA") */}
      <section className="py-14 sm:py-20 bg-[#FAF8F1] border-y border-[#D5E8DC] px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#D5E8DC]">
            <Image
              src={identification.imageSrc}
              alt={identification.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-[#123C32] border border-[#D5E8DC]">
              🌿 Bienestar Consciente
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-bold text-[#1F6B50] uppercase tracking-widest bg-[#EEF7F0] px-3.5 py-1 rounded-full border border-[#B8D8C2]">
              {identification.eyebrow}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123C32] leading-tight">
              {identification.title}
            </h2>

            <p className="text-sm sm:text-base text-[#4A6B60] leading-relaxed">
              {identification.copy}
            </p>

            <blockquote className="p-4 rounded-2xl bg-white border-l-4 border-[#1F6B50] text-xs sm:text-sm font-serif italic text-[#123C32] shadow-2xs">
              "{identification.quote}"
            </blockquote>

            <button
              onClick={scrollToForm}
              className="py-3.5 px-7 rounded-2xl bg-[#1F6B50] hover:bg-[#123C32] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>QUIERO MI GUÍA GRATIS →</span>
            </button>
          </div>

        </div>
      </section>

      {/* 7. SECCIÓN 3: BENEFICIOS ("¿QUÉ ENCONTRARÁS EN ESTA GUÍA?") */}
      <section id="beneficios" className="py-14 sm:py-20 bg-[#EEF7F0] border-b border-[#D5E8DC] px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-12 text-center">
          
          <div className="space-y-3 max-w-xl mx-auto">
            <span className="text-xs font-bold text-[#1F6B50] uppercase tracking-widest bg-white px-3.5 py-1 rounded-full border border-[#B8D8C2] shadow-2xs">
              {benefits.eyebrow}
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
                className="bg-white p-7 rounded-3xl border border-[#D5E8DC] shadow-xs space-y-4 hover:shadow-md transition-all group hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#EEF7F0] text-[#1F6B50] flex items-center justify-center text-2xl font-bold border border-[#B8D8C2]">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold text-[#5E9F78] uppercase tracking-wider bg-[#FAF8F1] px-2.5 py-0.5 rounded-full border border-[#D5E8DC]">
                    Módulo
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

      {/* 8. SECCIÓN 4: DENTRO DE LA GUÍA (MOCKUP PROTAGONISTA) */}
      <section id="guia" className="py-14 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* MOCKUP PROTAGONISTA */}
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
                📖 Edición Digital Vive Sano
              </div>
            </div>
          </div>

          {/* CHECKLIST DE CARACTERÍSTICAS */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#1F6B50] uppercase tracking-widest bg-[#EEF7F0] px-3.5 py-1 rounded-full border border-[#B8D8C2]">
                {guide.eyebrow}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#123C32]">
                {guide.title}
              </h2>
              <p className="text-sm text-[#4A6B60] leading-relaxed">
                {guide.subtitle}
              </p>
            </div>

            <div className="space-y-2.5">
              {guide.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-[#123C32] font-semibold bg-white p-3.5 rounded-xl border border-[#D5E8DC] shadow-2xs">
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-[#1F6B50] hover:bg-[#123C32] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>QUIERO MI GUÍA GRATIS →</span>
            </button>
          </div>

        </div>
      </section>

      {/* 9. SECCIÓN 5: GALERÍA DE PREVISUALIZACIÓN CON LIGHTBOX INTERACTIVO */}
      <section id="preview" className="py-14 sm:py-20 bg-[#EEF7F0] border-y border-[#D5E8DC] px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-10 text-center">
          
          <div className="space-y-3 max-w-xl mx-auto">
            <span className="text-xs font-bold text-[#1F6B50] uppercase tracking-widest bg-white px-3.5 py-1 rounded-full border border-[#B8D8C2]">
              PREVISUALIZACIÓN EDITORIAL
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123C32]">
              {guidePreview.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#4A6B60]">
              {guidePreview.subtitle}
            </p>
          </div>

          {/* TARJETAS DE PÁGINAS PREVIAS */}
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
                  <div className="absolute inset-0 bg-[#123C32]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-1.5 backdrop-blur-2xs">
                    <span>🔍 Ampliar imagen</span>
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

      {/* 10. SECCIÓN 6: PARA QUIÉN ES ("ESTA GUÍA ES PARA TI SI...") */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto w-full text-center">
        <div className="space-y-8">
          
          <div className="space-y-3 max-w-xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123C32]">
              {audience.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#4A6B60]">
              {audience.subtitle}
            </p>
          </div>

          <div className="space-y-3 max-w-2xl mx-auto text-left">
            {audience.items.map((item) => (
              <div key={item.id} className="p-4 rounded-2xl bg-white border border-[#D5E8DC] flex items-center gap-3.5 shadow-xs hover:border-[#5E9F78] transition-colors">
                <span className="w-7 h-7 rounded-full bg-[#1F6B50] text-white font-bold text-xs flex items-center justify-center shrink-0">
                  ✓
                </span>
                <span className="text-sm text-[#123C32] font-semibold">{item.text}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. SECCIÓN 7: SOBRE GLORIA MOLINA / CONOCE VIVE SANO */}
      <section id="conoce-vive-sano" className="py-14 sm:py-20 bg-white border-y border-[#D5E8DC] px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* FOTOGRAFÍA / PERFIL DE GLORIA */}
          <div className="lg:col-span-5 relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#D5E8DC] bg-[#EEF7F0] shadow-lg">
            <Image
              src={aboutGloria.imageSrc}
              alt={aboutGloria.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#123C32]/85 via-transparent to-transparent flex items-end p-6">
              <div className="text-white text-left space-y-1">
                <p className="font-serif font-bold text-xl text-white">
                  {aboutGloria.name}
                </p>
                <p className="text-xs text-[#B8D8C2] font-semibold">
                  {aboutGloria.role}
                </p>
              </div>
            </div>
          </div>

          {/* PRESENTACIÓN DE MARCA Y CITA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-bold text-[#1F6B50] uppercase tracking-widest bg-[#EEF7F0] px-3.5 py-1 rounded-full border border-[#B8D8C2]">
              {aboutGloria.eyebrow}
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123C32]">
              {aboutGloria.title}
            </h2>

            <div className="space-y-3.5 text-sm sm:text-base text-[#4A6B60] leading-relaxed">
              <p>
                {aboutGloria.copy}
              </p>
              <p>
                A través de recursos claros y prácticos, buscamos brindarte herramientas para que descubras tu propio camino hacia el equilibrio, respetando los tiempos y necesidades de tu cuerpo.
              </p>
            </div>

            <blockquote className="p-4 rounded-2xl bg-[#FAF8F1] border-l-4 border-[#1F6B50] text-xs sm:text-sm font-serif italic text-[#123C32]">
              "{aboutGloria.quote}"
            </blockquote>

            <p className="text-xs font-bold text-[#123C32] uppercase tracking-wider">
              {aboutGloria.signatureText}
            </p>
          </div>

        </div>
      </section>

      {/* 12. SECCIÓN 8: SELLO DE CONFIANZA Y SALUD RESPONSABLE */}
      <section className="py-12 bg-[#FAF8F1] border-b border-[#D5E8DC] px-4 sm:px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#D5E8DC] p-6 sm:p-8 text-center space-y-4 shadow-xs">
          <span className="text-2xl">🌿</span>
          <h3 className="font-serif text-xl font-bold text-[#123C32]">
            Compromiso y Transparencia Vive Sano
          </h3>
          <p className="text-xs sm:text-sm text-[#4A6B60] max-w-2xl mx-auto leading-relaxed">
            Creemos en la educación informada y en los hábitos progresivos. Esta guía se ofrece de manera 100% gratuita como un recurso divulgativo de bienestar general.
          </p>
        </div>
      </section>

      {/* 13. SECCIÓN 9: PREGUNTAS FRECUENTES (FAQ ACORDEÓN) */}
      <section id="faq" className="py-14 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto w-full">
        <div className="space-y-10 text-center">
          
          <div className="space-y-3 max-w-xl mx-auto">
            <span className="text-xs font-bold text-[#1F6B50] uppercase tracking-widest bg-[#EEF7F0] px-3.5 py-1 rounded-full border border-[#B8D8C2]">
              {faq.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123C32]">
              {faq.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#4A6B60]">
              {faq.subtitle}
            </p>
          </div>

          {/* ACORDEÓN INTERACTIVO DE PREGUNTAS */}
          <div className="space-y-4 text-left">
            {faq.items.map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-[#D5E8DC] overflow-hidden transition-all duration-200 shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#1F6B50] cursor-pointer select-none"
                  >
                    <h3 className="font-serif font-bold text-base sm:text-lg text-[#123C32]">
                      {item.question}
                    </h3>
                    <span
                      className={`w-7 h-7 rounded-full bg-[#EEF7F0] text-[#1F6B50] flex items-center justify-center font-bold text-sm shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#123C32] text-white' : ''
                      }`}
                    >
                      ↓
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${item.id}`}
                      role="region"
                      className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#4A6B60] leading-relaxed border-t border-[#D5E8DC]/50 pt-4 animate-fadeIn"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 14. SECCIÓN 10: CTA FINAL DE ALTO IMPACTO */}
      <section className="relative py-16 sm:py-24 bg-[#123C32] text-white px-4 sm:px-6 text-center overflow-hidden">
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
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-[#B8D8C2] text-xs font-bold uppercase tracking-wider border border-white/20">
              🌿 ACCESO INMEDIATO Y GRATUITO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              {finalCta.title}
            </h2>
            <p className="text-sm sm:text-base text-[#B8D8C2] max-w-xl mx-auto leading-relaxed">
              {finalCta.copy}
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={scrollToForm}
              className="py-4 px-10 rounded-2xl bg-[#1F6B50] hover:bg-white hover:text-[#123C32] text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-2xl cursor-pointer uppercase tracking-wider inline-flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <span>{finalCta.buttonText} →</span>
            </button>
          </div>

          <p className="text-xs text-[#B8D8C2]/80">
            Formato PDF Digital • 100% Gratuito
          </p>
        </div>
      </section>

      {/* 15. SECCIÓN 11: FOOTER ELEGANTE */}
      <footer className="py-12 bg-white border-t border-[#D5E8DC] text-center px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          
          <div className="space-y-2 flex flex-col items-center">
            <a href="#inicio" className="inline-block relative w-44 sm:w-52 h-14 sm:h-16 group focus:outline-none">
              <Image
                src={contentData.images.logo || '/images/logo.png'}
                alt={contentData.images.logoAlt || 'Vive Sano — Gloria Molina'}
                fill
                sizes="200px"
                className="object-contain object-center group-hover:scale-102 transition-transform"
              />
            </a>
            <p className="text-xs text-[#4A6B60] max-w-md mx-auto">
              {footer.tagline}
            </p>
          </div>

          {/* ENLACES DE NAVEGACIÓN FOOTER */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold text-[#123C32]">
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
          <div className="pt-6 border-t border-[#D5E8DC] space-y-3 text-[11px] text-[#4A6B60]">
            <p className="max-w-2xl mx-auto italic leading-relaxed">
              {footer.disclaimer}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
              <button
                type="button"
                onClick={() => setShowPrivacyModal(true)}
                className="hover:underline text-[#1F6B50] font-semibold cursor-pointer"
              >
                Aviso de Privacidad
              </button>
              <span>•</span>
              <span>Términos de Uso</span>
            </div>
            <p className="font-semibold text-[#123C32]">
              {footer.copyright}
            </p>
          </div>

        </div>
      </footer>

      {/* 16. STICKY MOBILE BOTTOM BANNER FOR HIGH CONVERSION */}
      {showStickyMobileCta && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#123C32]/95 backdrop-blur-md border-t border-white/20 p-3 flex items-center justify-between sm:hidden animate-slideUp">
          <div className="text-left text-white px-2">
            <p className="text-xs font-bold">Guía Digital Vive Sano</p>
            <p className="text-[10px] text-[#B8D8C2]">100% Gratuita • Formato PDF</p>
          </div>
          <button
            onClick={scrollToForm}
            className="py-2.5 px-4 rounded-xl bg-[#1F6B50] text-white font-bold text-xs uppercase tracking-wider shadow-lg cursor-pointer"
          >
            <span>DESCARGAR →</span>
          </button>
        </div>
      )}

      {/* 17. LIGHTBOX MODAL DE PREVISUALIZACIÓN DE GUÍA */}
      {activeLightboxImage && (
        <div
          onClick={() => setActiveLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn cursor-pointer"
          role="dialog"
          aria-modal="true"
          aria-label="Ampliación de la imagen de la guía"
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
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-[#123C32] rounded-full px-3 py-1.5 text-xs font-bold shadow-md cursor-pointer"
            >
              ✕ Cerrar
            </button>
          </div>
        </div>
      )}

      {/* 18. AVISO DE PRIVACIDAD MODAL ACCESIBLE */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-[#D5E8DC]" role="dialog" aria-modal="true">
            <div className="flex items-center justify-between border-b border-[#D5E8DC] pb-3">
              <h3 className="font-serif text-lg font-bold text-[#123C32]">
                Aviso de Privacidad
              </h3>
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="text-[#4A6B60] hover:text-[#123C32] text-xl font-bold p-1 cursor-pointer focus:outline-none"
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
              Entendido y Cerrar
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default DirectResponseCampaignLandingPage;
