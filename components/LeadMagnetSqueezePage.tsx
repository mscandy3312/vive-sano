'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface LeadMagnetSqueezePageProps {
  systemeActionUrl?: string;
  leadMagnetPdfUrl?: string;
}

export const LeadMagnetSqueezePage: React.FC<LeadMagnetSqueezePageProps> = ({
  systemeActionUrl = process.env.NEXT_PUBLIC_SYSTEME_FORM_ACTION || '',
  leadMagnetPdfUrl = process.env.NEXT_PUBLIC_LEAD_MAGNET_PDF_URL || '#',
}) => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // If systemeActionUrl is provided, we can let the form submit natively or handle via fetch
    if (systemeActionUrl) {
      // Form will handle submit natively via HTML action
      return;
    }

    e.preventDefault();
    setIsSubmitting(true);

    // Simulate fast response for client-side mode or custom API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1D2722] selection:bg-[#E8F2EB] selection:text-[#1B3B2B] font-sans antialiased">
      {/* MINIMALIST HEADER - NO DISTRACTING NAVIGATION */}
      <header className="py-4 sm:py-6 border-b border-[#E0E7E2]/70 bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#1B3B2B] text-white flex items-center justify-center font-bold text-xs shadow-sm">
              VS
            </div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1B3B2B]">
              VIVE SANO
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B3B2B] bg-[#E8F2EB] px-3 py-1.5 rounded-full border border-[#C2DEC9]/60">
            <span className="w-2 h-2 rounded-full bg-[#2D5A43] animate-pulse"></span>
            Guía Gratuita 2026
          </span>
        </div>
      </header>

      {/* MAIN SINGLE-SECTION HERO / CONVERSION CONTAINER */}
      <main className="flex-1 flex items-center justify-center py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="max-w-5xl w-full mx-auto">
          {/* TOP BADGE & HEADINGS */}
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F2EB] border border-[#C2DEC9] text-[#1B3B2B] text-xs font-bold tracking-wider uppercase shadow-xs">
              <svg className="w-4 h-4 text-[#2D5A43]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              RECURSO GRATUITO | VIVE SANO
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B3B2B] leading-[1.18] tracking-tight">
              Descubre cómo mejorar tu salud digestiva con hábitos sencillos y conscientes
            </h1>

            <p className="text-base sm:text-lg text-[#596760] leading-relaxed max-w-2xl mx-auto font-normal">
              Descarga gratuitamente esta guía práctica y conoce recomendaciones sencillas para cuidar tu bienestar digestivo día a día.
            </p>
          </div>

          {/* TWO-COLUMN GRID: EBOOK VISUAL & CONVERSION FORM */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* COLUMN 1: EBOOK MOCKUP & BENEFITS (7 COLS ON LARGE) */}
            <div className="lg:col-span-6 space-y-6 flex flex-col items-center lg:items-start text-left">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#E0E7E2] bg-white group transition-transform duration-500 hover:scale-[1.01]">
                <Image
                  src="/images/lead-magnet-guide.jpg"
                  alt="Guía Práctica de Salud Digestiva y Bienestar Intestinal por Gloria Molina"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* FLOATING TRUST BADGES */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md border border-[#E0E7E2] flex items-center gap-1.5 text-xs font-bold text-[#1B3B2B]">
                  <span>📄 Formato PDF</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-[#1B3B2B]/95 text-white backdrop-blur-md px-3 py-1.5 rounded-full shadow-md border border-white/20 flex items-center gap-1.5 text-xs font-semibold">
                  <span>✨ 100% Gratuito</span>
                </div>
              </div>

              {/* THREE BENEFITS SECTION - EXACTLY 3 CLEAR BENEFITS */}
              <div className="w-full space-y-3.5 pt-2">
                <h2 className="text-xs font-bold tracking-widest text-[#2D5A43] uppercase mb-1">
                  Lo que aprenderás en esta guía:
                </h2>
                
                {/* BENEFIT 1 */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/80 border border-[#E0E7E2] shadow-xs hover:border-[#2D5A43]/40 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-[#E8F2EB] text-[#2D5A43] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <span className="text-sm font-semibold text-[#1D2722] leading-snug">
                    Identifica hábitos cotidianos que pueden favorecer una mejor digestión.
                  </span>
                </div>

                {/* BENEFIT 2 */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/80 border border-[#E0E7E2] shadow-xs hover:border-[#2D5A43]/40 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-[#E8F2EB] text-[#2D5A43] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <span className="text-sm font-semibold text-[#1D2722] leading-snug">
                    Conoce recomendaciones prácticas para cuidar tu bienestar intestinal día a día.
                  </span>
                </div>

                {/* BENEFIT 3 */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/80 border border-[#E0E7E2] shadow-xs hover:border-[#2D5A43]/40 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-[#E8F2EB] text-[#2D5A43] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <span className="text-sm font-semibold text-[#1D2722] leading-snug">
                    Obtén una guía sencilla en PDF que puedes consultar cuando la necesites.
                  </span>
                </div>
              </div>
            </div>

            {/* COLUMN 2: HIGH-CONVERTING FORM CARD (6 COLS ON LARGE) */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl border border-[#E0E7E2] shadow-2xl p-6 sm:p-8 md:p-9 relative overflow-hidden transition-all duration-300">
                
                {/* DECORATIVE TOP ACCENT BAR */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1B3B2B] via-[#2D5A43] to-[#7DAE93]"></div>

                {isSubmitted ? (
                  /* POST-REGISTRATION SUCCESS STATE */
                  <div className="space-y-6 text-center py-6 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-[#E8F2EB] text-[#1B3B2B] flex items-center justify-center mx-auto shadow-inner text-3xl">
                      🎉
                    </div>

                    <div className="space-y-2">
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B3B2B]">
                        ¡Listo! Tu guía está en camino
                      </h2>
                      <p className="text-sm sm:text-base text-[#596760] leading-relaxed">
                        Hemos procesado tu registro correctamente. Revisa tu bandeja de entrada en unos minutos.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E0E7E2] text-xs sm:text-sm text-[#596760] space-y-2 text-left">
                      <p className="font-semibold text-[#1B3B2B] flex items-center gap-2">
                        <span>📥</span> Instrucciones importantes:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-xs">
                        <li>El correo llegará desde <strong>Vive Sano</strong>.</li>
                        <li>Si no lo encuentras en tu bandeja principal, <strong>revisa tu carpeta de promociones o spam</strong>.</li>
                        <li>Agrónos a tus contactos para asegurar la recepción de futuras pautas de bienestar.</li>
                      </ul>
                    </div>

                    {leadMagnetPdfUrl !== '#' && (
                      <div className="pt-2">
                        <a
                          href={leadMagnetPdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-2xl bg-[#1B3B2B] text-white font-bold text-sm hover:bg-[#2D5A43] transition-colors shadow-lg"
                        >
                          <span>⬇️ Descargar Guía Directamente</span>
                        </a>
                      </div>
                    )}
                  </div>
                ) : (
                  /* FORM STATE */
                  <div className="space-y-6">
                    <div className="text-center space-y-2">
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B3B2B]">
                        Recibe tu Guía Gratis
                      </h2>
                      <p className="text-xs sm:text-sm text-[#596760]">
                        Ingresa tus datos a continuación para enviarte el acceso inmediato a tu correo.
                      </p>
                    </div>

                    {/* FORM INTEGRATION WITH SYSTEME.IO COMPATIBILITY */}
                    <form
                      action={systemeActionUrl || '#'}
                      method="POST"
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      {/* SYSTEME.IO HIDDEN TAG PARAMETERS */}
                      <input type="hidden" name="tag" value="Lead - Salud Digestiva" />
                      <input type="hidden" name="source" value="Squeeze Page Salud Digestiva" />

                      {/* FIELD 1: NOMBRE */}
                      <div className="space-y-1.5 text-left">
                        <label
                          htmlFor="lead-name"
                          className="block text-xs font-bold text-[#1B3B2B] uppercase tracking-wider"
                        >
                          Nombre
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#596760]">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <input
                            type="text"
                            id="lead-name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Tu nombre completo"
                            className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-[#E0E7E2] bg-[#FAF7F2] text-sm text-[#1D2722] placeholder-[#8A9890] focus:outline-none focus:ring-2 focus:ring-[#2D5A43] focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      {/* FIELD 2: CORREO ELECTRÓNICO */}
                      <div className="space-y-1.5 text-left">
                        <label
                          htmlFor="lead-email"
                          className="block text-xs font-bold text-[#1B3B2B] uppercase tracking-wider"
                        >
                          Correo electrónico
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#596760]">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <input
                            type="email"
                            id="lead-email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="ejemplo@correo.com"
                            className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-[#E0E7E2] bg-[#FAF7F2] text-sm text-[#1D2722] placeholder-[#8A9890] focus:outline-none focus:ring-2 focus:ring-[#2D5A43] focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      {/* HIGH CONTRAST SUBMIT BUTTON */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 rounded-2xl bg-[#1B3B2B] hover:bg-[#2D5A43] active:bg-[#133E2B] text-white font-bold text-base sm:text-lg transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-wait hover:-translate-y-0.5"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>PROCESANDO...</span>
                          </>
                        ) : (
                          <>
                            <span>QUIERO MI GUÍA GRATIS</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </>
                        )}
                      </button>

                      {/* TRUST MICROCOPY */}
                      <p className="text-[11px] text-[#596760] text-center leading-relaxed pt-1">
                        Tu información será utilizada únicamente para enviarte el recurso solicitado y comunicaciones relacionadas con Vive Sano.
                      </p>

                      {/* PRIVACY NOTICE DISCRETE LINK */}
                      <div className="text-center pt-1">
                        <button
                          type="button"
                          onClick={() => setShowPrivacyModal(true)}
                          className="text-[11px] font-medium text-[#2D5A43] hover:underline cursor-pointer"
                        >
                          🔒 Aviso de Privacidad y Términos
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* FOOTER & LEGAL DISCLAIMER (WELLNESS & EDUCATIONAL ONLY) */}
      <footer className="py-8 bg-white border-t border-[#E0E7E2] mt-auto">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-3">
          <p className="text-[11px] text-[#596760] max-w-3xl mx-auto leading-relaxed">
            <strong>Aviso importante:</strong> La información contenida en esta página y en la guía gratuita tiene un carácter estrictamente educativo, divulgativo y de bienestar general. No constituye asesoramiento médico, diagnóstico ni tratamiento profesional. Ante cualquier duda relativa a tu salud o tratamiento médico, consulta siempre a un profesional sanitario cualificado.
          </p>
          <p className="text-xs font-semibold text-[#1B3B2B]">
            © 2026 Vive Sano — Gloria Molina. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* PRIVACY MODAL */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-4 shadow-2xl border border-[#E0E7E2]">
            <div className="flex items-center justify-between border-b border-[#E0E7E2] pb-3">
              <h3 className="font-serif text-lg font-bold text-[#1B3B2B]">
                Aviso de Privacidad
              </h3>
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="text-[#596760] hover:text-[#1B3B2B] text-xl font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="text-xs text-[#596760] space-y-3 leading-relaxed max-h-60 overflow-y-auto">
              <p>
                En <strong>Vive Sano</strong> (Gloria Molina), la privacidad y protección de sus datos personales es fundamental.
              </p>
              <p>
                Los datos recabados a través de este formulario (Nombre y Correo electrónico) serán utilizados exclusivamente para gestionar la entrega de la <em>Guía Práctica de Salud Digestiva y Bienestar Intestinal</em>, así como para el envío de contenidos educativos y recomendaciones sobre hábitos saludables.
              </p>
              <p>
                No vendemos, cedemos ni compartimos sus datos con terceros. Puede darse de baja en cualquier momento haciendo clic en el enlace al pie de cada correo electrónico.
              </p>
            </div>
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="w-full py-2.5 rounded-xl bg-[#1B3B2B] text-white font-bold text-xs hover:bg-[#2D5A43] transition-colors cursor-pointer"
            >
              Entendido y Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadMagnetSqueezePage;
