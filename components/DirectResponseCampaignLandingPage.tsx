'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

export interface DirectResponseCampaignLandingPageProps {
  systemeActionUrl?: string;
  leadMagnetPdfUrl?: string;
}

export const DirectResponseCampaignLandingPage: React.FC<DirectResponseCampaignLandingPageProps> = ({
  systemeActionUrl = process.env.NEXT_PUBLIC_SYSTEME_FORM_ACTION || '',
  leadMagnetPdfUrl = process.env.NEXT_PUBLIC_LEAD_MAGNET_PDF_URL || '#',
}) => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showEmailTemplate, setShowEmailTemplate] = useState(false);
  const [selectedHeadline, setSelectedHeadline] = useState(0);

  const formRef = useRef<HTMLDivElement>(null);

  // Headlines test variants (Item 2 of Prompt: 3 variants to choose/test)
  const headlines = [
    'Tu digestión puede cambiar cuando empiezas a escuchar lo que tu cuerpo necesita.',
    'Descubre cómo aliviar la pesadez digestiva con pequeños cambios cotidianos.',
    'El camino hacia un bienestar digestivo consciente empieza con información clara.',
  ];

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const input = document.getElementById('hero-lead-name');
      if (input) {
        setTimeout(() => input.focus(), 300);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Analytics Triggers ([META_PIXEL_ID], [GOOGLE_ANALYTICS_ID], [EVENTO_LEAD])
    if (typeof window !== 'undefined') {
      if ((window as any).fbq) {
        (window as any).fbq('track', 'Lead');
      }
      if ((window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'SaludDigestiva',
          event_label: 'GuiaGratuita',
        });
      }
    }

    if (systemeActionUrl && systemeActionUrl !== '#') {
      // Form POSTs directly to Systeme.io endpoint
      return;
    }

    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      scrollToForm();
    }, 450);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F1] text-[#123C32] font-sans antialiased selection:bg-[#B8D8C2] selection:text-[#123C32]">

      {/* 1. BARRA SUPERIOR (ANNOUNCEMENT BAR) */}
      <header className="bg-[#123C32] text-white py-2.5 px-4 text-center text-xs font-semibold tracking-wide border-b border-[#1F6B50]/40 shadow-sm sticky top-0 z-40">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#5E9F78] animate-pulse"></span>
          <span>🌿 RECURSO GRATUITO · DESCUBRE CÓMO CUIDAR TU SALUD DIGESTIVA</span>
        </div>
      </header>

      {/* 2. HERO PRINCIPAL (80%-100% VH SPLIT DESIGN) */}
      <section className="relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6 max-w-6xl mx-auto w-full flex flex-col justify-center min-h-[calc(100vh-42px)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: COPY + PROPOSED HEADLINE */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF7F0] border border-[#B8D8C2] text-[#1F6B50] text-xs font-bold uppercase tracking-wider">
                🌱 GUÍA GRATUITA DE SALUD DIGESTIVA
              </span>

              {/* MAIN PUNCHY HEADLINE */}
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#123C32] leading-[1.14] tracking-tight">
                {headlines[selectedHeadline]}
              </h1>

              {/* CRO TEST SWITCHER (Subtle variant selector) */}
              <div className="flex items-center gap-2 pt-1 text-[11px] text-[#5E9F78]">
                <span className="font-semibold text-[#1F6B50]">Variante de titular (CRO):</span>
                {headlines.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedHeadline(idx)}
                    className={`px-2 py-0.5 rounded border transition-all ${
                      selectedHeadline === idx
                        ? 'bg-[#1F6B50] text-white border-[#1F6B50] font-bold'
                        : 'bg-white text-[#123C32] border-[#D5E8DC] hover:border-[#5E9F78]'
                    }`}
                  >
                    V{idx + 1}
                  </button>
                ))}
              </div>

              <p className="text-sm sm:text-base text-[#4A6B60] leading-relaxed font-normal">
                Descubre hábitos sencillos y recomendaciones prácticas para comenzar a cuidar tu bienestar digestivo de una manera más consciente.
              </p>
            </div>

            {/* HIGH QUALITY LIFESTYLE VISUAL CONTAINER */}
            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-[#D5E8DC] bg-white group">
              <Image
                src="/images/hero-lifestyle.jpg"
                alt="Fotografía de estilo de vida saludable, alimentación consciente y digestión natural"
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

          {/* RIGHT COLUMN: ELEVATED HERO FORM CARD */}
          <div className="lg:col-span-6" ref={formRef} id="formulario-registro">
            <div className="bg-white rounded-3xl border border-[#D5E8DC] shadow-2xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300">
              
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#123C32] via-[#1F6B50] to-[#5E9F78]"></div>

              {isSubmitted ? (
                /* POST-REGISTRATION SUCCESS STATE */
                <div className="space-y-5 text-center py-6 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#EEF7F0] text-[#1F6B50] flex items-center justify-center mx-auto text-3xl border border-[#B8D8C2] shadow-inner">
                    🌿
                  </div>

                  <div className="space-y-2">
                    <h2 className="font-serif text-2xl font-bold text-[#123C32]">
                      ¡Excelente! Tu guía está lista
                    </h2>
                    <p className="text-xs sm:text-sm text-[#4A6B60] leading-relaxed max-w-sm mx-auto">
                      Hemos enviado el enlace directo a tu correo electrónico. Por favor revisa tu bandeja de entrada o la carpeta de promociones.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#EEF7F0] border border-[#B8D8C2] text-xs text-[#123C32] text-left space-y-1.5">
                    <p className="font-bold flex items-center gap-2">
                      <span>📧</span> Remitente: <strong>Salud Digestiva & Bienestar</strong>
                    </p>
                    <p className="text-[#4A6B60]">
                      Asunto: <em>"Aquí tienes tu guía de salud digestiva 🌿"</em>
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
                /* HIGH-CONVERSION ELEVATED FORM */
                <div className="space-y-5 text-left">
                  <div className="space-y-1.5">
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#123C32]">
                      Obtén tu guía GRATIS
                    </h2>
                    <p className="text-xs sm:text-sm text-[#4A6B60]">
                      Ingresa tu nombre y correo para recibir tu acceso inmediato.
                    </p>
                  </div>

                  <form
                    action={systemeActionUrl || '#'}
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {/* SYSTEME.IO TAG HIDDEN INPUT */}
                    <input type="hidden" name="tag" value="Lead - Salud Digestiva" />
                    <input type="hidden" name="source" value="Landing Salud Digestiva" />

                    {/* CAMPO NOMBRE */}
                    <div className="space-y-1">
                      <label htmlFor="hero-lead-name" className="block text-xs font-bold text-[#123C32] uppercase tracking-wider">
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="hero-lead-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. María García"
                        className="w-full px-4 py-3.5 rounded-xl border border-[#D5E8DC] bg-[#FAF8F1] text-sm text-[#123C32] placeholder-[#8A9890] focus:outline-none focus:ring-2 focus:ring-[#1F6B50] focus:bg-white transition-all"
                      />
                    </div>

                    {/* CAMPO CORREO */}
                    <div className="space-y-1">
                      <label htmlFor="hero-lead-email" className="block text-xs font-bold text-[#123C32] uppercase tracking-wider">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        id="hero-lead-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tu@email.com"
                        className="w-full px-4 py-3.5 rounded-xl border border-[#D5E8DC] bg-[#FAF8F1] text-sm text-[#123C32] placeholder-[#8A9890] focus:outline-none focus:ring-2 focus:ring-[#1F6B50] focus:bg-white transition-all"
                      />
                    </div>

                    {/* CTA BOTÓN PRINCIPAL */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-2xl bg-[#1F6B50] hover:bg-[#123C32] text-white font-bold text-base transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 uppercase tracking-wide transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      {isSubmitting ? (
                        <span>PROCESANDO REGISTRO...</span>
                      ) : (
                        <>
                          <span>QUIERO MI GUÍA GRATIS →</span>
                        </>
                      )}
                    </button>

                    <div className="text-center pt-1 space-y-1">
                      <p className="text-xs text-[#1F6B50] font-semibold flex items-center justify-center gap-1.5">
                        <span>🔒</span> Tus datos están protegidos.
                      </p>
                      <p className="text-[11px] text-[#4A6B60]">
                        Al registrarte recibirás la guía en tu correo.
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 5. BLOQUE DE BENEFICIOS (FONDO VERDE MUY CLARO #EEF7F0) */}
      <section className="py-14 sm:py-20 bg-[#EEF7F0] border-y border-[#D5E8DC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12 text-center">
          
          <div className="space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-bold text-[#1F6B50] uppercase tracking-widest bg-white px-3.5 py-1 rounded-full border border-[#B8D8C2] shadow-xs">
              BENEFICIOS PRINCIPALES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123C32]">
              ¿Qué encontrarás en esta guía?
            </h2>
          </div>

          {/* EXACTLY 3 MAIN BENEFITS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            
            {/* BENEFICIO 01 */}
            <div className="bg-white p-7 rounded-3xl border border-[#D5E8DC] shadow-sm space-y-4 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-[#5E9F78]">01</span>
                <div className="w-10 h-10 rounded-2xl bg-[#EEF7F0] text-[#1F6B50] flex items-center justify-center text-xl font-bold border border-[#B8D8C2]">
                  🧠
                </div>
              </div>
              <h3 className="font-serif font-bold text-lg text-[#123C32] leading-snug">
                Comprende mejor tu digestión
              </h3>
              <p className="text-xs sm:text-sm text-[#4A6B60] leading-relaxed">
                Conoce conceptos básicos para entender cómo tus hábitos pueden relacionarse con tu bienestar digestivo.
              </p>
            </div>

            {/* BENEFICIO 02 */}
            <div className="bg-white p-7 rounded-3xl border border-[#D5E8DC] shadow-sm space-y-4 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-[#5E9F78]">02</span>
                <div className="w-10 h-10 rounded-2xl bg-[#EEF7F0] text-[#1F6B50] flex items-center justify-center text-xl font-bold border border-[#B8D8C2]">
                  🌿
                </div>
              </div>
              <h3 className="font-serif font-bold text-lg text-[#123C32] leading-snug">
                Descubre hábitos prácticos
              </h3>
              <p className="text-xs sm:text-sm text-[#4A6B60] leading-relaxed">
                Ideas sencillas que puedes incorporar progresivamente a tu rutina cotidiana sin complicaciones.
              </p>
            </div>

            {/* BENEFICIO 03 */}
            <div className="bg-white p-7 rounded-3xl border border-[#D5E8DC] shadow-sm space-y-4 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-[#5E9F78]">03</span>
                <div className="w-10 h-10 rounded-2xl bg-[#EEF7F0] text-[#1F6B50] flex items-center justify-center text-xl font-bold border border-[#B8D8C2]">
                  ✨
                </div>
              </div>
              <h3 className="font-serif font-bold text-lg text-[#123C32] leading-snug">
                Construye una relación más consciente con tu alimentación
              </h3>
              <p className="text-xs sm:text-sm text-[#4A6B60] leading-relaxed">
                Aprende a observar tus hábitos y prestar atención a las señales de tu cuerpo de manera respetuosa.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. SECCIÓN DEL PROBLEMA (EMOTIONAL CONNECTION CARDS) */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto w-full">
        <div className="space-y-10 text-center">
          
          <div className="space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#5E9F78] uppercase tracking-widest bg-[#EEF7F0] px-3.5 py-1 rounded-full border border-[#B8D8C2]">
              EMPATÍA Y CONEXIÓN
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123C32]">
              ¿Te resulta familiar alguno de estos puntos?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            {[
              {
                icon: '⚖️',
                title: 'Sensación de pesadez después de comer',
                desc: 'Notar pesadez recurrente tras las comidas principales sin saber exactamente qué ingrediente la causa.',
              },
              {
                icon: '🔄',
                title: 'Hábitos alimenticios desordenados',
                desc: 'Horarios irregulares, prisa constante al comer o dificultad para planificar comidas equilibradas.',
              },
              {
                icon: '⏳',
                title: 'Poco tiempo para cuidar la alimentación',
                desc: 'Sentir que mantener un estilo de vida saludable requiere horas de cocina que no tienes.',
              },
              {
                icon: '❓',
                title: 'Confusión sobre qué recomendaciones seguir',
                desc: 'Cansancio ante tanta información contradictoria y modas extremas en redes sociales.',
              },
              {
                icon: '🌱',
                title: 'Querer empezar a cuidarse pero no saber por dónde',
                desc: 'Tener la intención de mejorar tu bienestar digestivo, pero necesitar una guía inicial clara y paso a paso.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#D5E8DC] shadow-xs space-y-3 hover:border-[#5E9F78] transition-colors"
              >
                <div className="text-2xl">{item.icon}</div>
                <h3 className="font-serif font-bold text-base text-[#123C32]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#4A6B60] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. TRANSICIÓN VISUAL BANNER */}
      <section className="py-12 bg-[#B8D8C2]/30 border-y border-[#B8D8C2] px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-3">
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#123C32]">
            Tu bienestar digestivo comienza con pequeños cambios.
          </h2>
          <p className="text-sm sm:text-base text-[#123C32]/80 leading-relaxed max-w-xl mx-auto font-medium">
            No necesitas cambiarlo todo de un día para otro. El primer paso es comprender qué hábitos puedes empezar a mejorar.
          </p>
        </div>
      </section>

      {/* 8. PRESENTACIÓN DEL LEAD MAGNET (PRODUCTO DIGITAL 3D) */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* 3D MOCKUP PREVIEW */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#D5E8DC] bg-white group">
              <Image
                src="/images/lead-magnet-mockup.jpg"
                alt="Mockup 3D de la Guía Práctica de Salud Digestiva y Bienestar"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* COPY & CTA */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#1F6B50] uppercase tracking-widest bg-[#EEF7F0] px-3.5 py-1 rounded-full border border-[#B8D8C2]">
                RECURSO DIGITAL 100% GRATUITO
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#123C32]">
                Descarga gratuitamente la guía
              </h2>
              <p className="text-sm sm:text-base text-[#4A6B60] leading-relaxed">
                Un recurso práctico para comenzar a explorar hábitos relacionados con una mejor salud digestiva y bienestar general.
              </p>
            </div>

            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-[#1F6B50] hover:bg-[#123C32] text-white font-bold text-sm sm:text-base transition-all shadow-xl hover:shadow-2xl cursor-pointer uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>QUIERO LA GUÍA GRATIS →</span>
            </button>
          </div>

        </div>
      </section>

      {/* 9. QUÉ INCLUYE (4-6 ELEMENTOS VISUALES) */}
      <section className="py-12 bg-[#EEF7F0] border-y border-[#D5E8DC] px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#123C32]">
            Dentro de la guía encontrarás:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            {[
              { title: 'Fundamentos de salud digestiva', desc: 'Conceptos clave explicados de forma amigable.' },
              { title: 'Hábitos cotidianos', desc: 'Pautas realizables para tu día a día.' },
              { title: 'Alimentación consciente', desc: 'Aprende a escuchar a tu cuerpo.' },
              { title: 'Recomendaciones prácticas', desc: 'Consejos sencillos sin complicaciones.' },
              { title: 'Errores comunes', desc: 'Prácticas habituales que puedes corregir.' },
              { title: 'Checklist para comenzar', desc: 'Una lista visual paso a paso.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-[#D5E8DC] shadow-xs flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#EEF7F0] text-[#1F6B50] font-bold text-sm flex items-center justify-center shrink-0 border border-[#B8D8C2]">
                  ✓
                </span>
                <div>
                  <h3 className="font-serif font-bold text-sm text-[#123C32]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#4A6B60] leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. PARA QUIÉN ES (5 ELEMENTOS VISUALES) */}
      <section className="py-14 px-4 max-w-4xl mx-auto w-full">
        <div className="space-y-8 text-center">
          
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#123C32]">
            Esta guía puede ser para ti si...
          </h2>

          <div className="space-y-3 max-w-2xl mx-auto text-left">
            {[
              'Quieres cuidar mejor tu bienestar digestivo.',
              'Buscas información clara y sencilla.',
              'Quieres mejorar progresivamente tus hábitos.',
              'Prefieres empezar con pequeños cambios.',
              'Quieres tener un recurso práctico para consultar.',
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-[#D5E8DC] flex items-center gap-3.5 shadow-xs">
                <span className="w-7 h-7 rounded-full bg-[#1F6B50] text-white font-bold text-xs flex items-center justify-center shrink-0">
                  ✓
                </span>
                <span className="text-sm text-[#123C32] font-semibold">{item}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. CTA FINAL (FONDO VERDE PROFUNDO #123C32) */}
      <section className="py-16 bg-[#123C32] text-white px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Empieza hoy a cuidar tu bienestar digestivo.
            </h2>
            <p className="text-sm sm:text-base text-[#B8D8C2] max-w-xl mx-auto">
              Descarga gratuitamente la guía y comienza con pequeños pasos.
            </p>
          </div>

          <button
            onClick={scrollToForm}
            className="py-4 px-10 rounded-2xl bg-[#1F6B50] hover:bg-white hover:text-[#123C32] text-white font-bold text-base transition-all duration-300 shadow-2xl cursor-pointer uppercase tracking-wider inline-flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            <span>DESCARGAR MI GUÍA GRATIS →</span>
          </button>
        </div>
      </section>

      {/* 13, 14, 15 & 25. INTEGRACIÓN SYSTEME.IO & CHECKLIST PENDIENTE */}
      <section className="py-10 bg-[#FAF8F1] border-t border-[#D5E8DC] px-4">
        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-[#D5E8DC] shadow-sm space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#D5E8DC] pb-4 gap-2">
            <h3 className="font-serif text-lg font-bold text-[#123C32] flex items-center gap-2">
              <span>⚙️</span> CONFIGURACIÓN PENDIENTE EN SYSTEME.IO
            </h3>
            <button
              onClick={() => setShowEmailTemplate(!showEmailTemplate)}
              className="text-xs font-bold text-[#1F6B50] hover:underline cursor-pointer text-left sm:text-right"
            >
              {showEmailTemplate ? 'Ocultar plantilla de email ▲' : 'Ver plantilla de email de entrega ▼'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#123C32]">
            <div className="space-y-2 p-4 rounded-xl bg-[#EEF7F0] border border-[#B8D8C2]">
              <p className="font-bold text-[#1F6B50]">1. Conectar Formulario</p>
              <p className="text-[#4A6B60]">
                Asigna la <code>Action URL</code> de tu formulario en Systeme.io en la variable de entorno <code>NEXT_PUBLIC_SYSTEME_FORM_ACTION</code>.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-[#EEF7F0] border border-[#B8D8C2]">
              <p className="font-bold text-[#1F6B50]">2. Crear Tag</p>
              <p className="text-[#4A6B60]">
                Crea exactamente la etiqueta: <code>Lead - Salud Digestiva</code>.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-[#EEF7F0] border border-[#B8D8C2]">
              <p className="font-bold text-[#1F6B50]">3. Crear Automatización</p>
              <p className="text-[#4A6B60]">
                <strong>TRIGGER:</strong> Registro en formulario → <strong>ACTION 1:</strong> Añadir tag `Lead - Salud Digestiva` → <strong>ACTION 2:</strong> Enviar Email de entrega.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-[#EEF7F0] border border-[#B8D8C2]">
              <p className="font-bold text-[#1F6B50]">4. Colocar URL del Lead Magnet</p>
              <p className="text-[#4A6B60]">
                Sube tu PDF a Systeme.io y coloca la URL en <code>NEXT_PUBLIC_LEAD_MAGNET_PDF_URL</code>.
              </p>
            </div>
          </div>

          {/* EMAIL TEMPLATE PREVIEW (ITEM 15 OF PROMPT) */}
          {showEmailTemplate && (
            <div className="p-5 rounded-2xl bg-[#123C32] text-white space-y-3 animate-fadeIn text-xs">
              <div className="border-b border-white/20 pb-2 flex items-center justify-between">
                <p className="font-bold text-[#B8D8C2]">
                  📧 Plantilla de Email Automatizado (Systeme.io)
                </p>
                <span className="text-[10px] bg-[#1F6B50] px-2 py-0.5 rounded">Asunto Exacto</span>
              </div>
              <p className="font-bold text-sm text-white">
                Asunto: Aquí tienes tu guía de salud digestiva 🌿
              </p>
              <div className="space-y-2 text-[#E2F1E8] font-mono leading-relaxed bg-black/20 p-4 rounded-xl">
                <p>¡Hola [Nombre]!</p>
                <p>
                  Bienvenido/a. Muchas gracias por dar este paso para cuidar tu bienestar digestivo.
                </p>
                <p>
                  Tal como prometimos, aquí tienes el enlace para descargar tu archivo en formato PDF:
                </p>
                <p className="text-[#B8D8C2] font-bold underline">
                  [URL_DEL_LEAD_MAGNET]
                </p>
                <p>
                  En esta guía encontrarás recomendaciones sencillas y hábitos prácticos que podrás incorporar progresivamente en tu rutina diaria.
                </p>
                <p>
                  Con cariño,<br />
                  El equipo de Salud Digestiva & Bienestar
                </p>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 16. DISCLAIMER DE SALUD & 17. FOOTER MINIMALISTA */}
      <footer className="py-8 bg-white border-t border-[#D5E8DC] text-center px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          
          {/* DISCLAIMER DE SALUD (DISCRETO AL FINAL) */}
          <p className="text-[11px] text-[#4A6B60] max-w-xl mx-auto leading-relaxed italic">
            Este material tiene fines educativos y de bienestar general. No sustituye la valoración, diagnóstico ni tratamiento de un profesional de la salud.
          </p>

          <div className="flex items-center justify-center gap-4 text-xs font-medium text-[#123C32]">
            <button onClick={() => setShowPrivacyModal(true)} className="hover:underline cursor-pointer">
              Aviso de Privacidad
            </button>
            <span>•</span>
            <button onClick={() => setShowPrivacyModal(true)} className="hover:underline cursor-pointer">
              Términos de Uso
            </button>
          </div>

          <p className="text-xs font-semibold text-[#123C32]">
            © {new Date().getFullYear()} Vive Sano — Salud Digestiva. Todos los derechos reservados.
          </p>

        </div>
      </footer>

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
                Sus datos personales (nombre y correo electrónico) son recabados con el único propósito de entregar la <em>Guía Gratuita de Salud Digestiva</em> y enviarle información relevante sobre bienestar intestinal y hábitos saludables.
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
