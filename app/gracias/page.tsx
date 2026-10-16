import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { contentData } from '@/data/content';
import { getWhatsAppLink } from '@/lib/config';

export const metadata: Metadata = {
  title: '¡Bienvenida al Método SANA! | Vive Sano',
  description: 'Tu compra fue exitosa. Ya diste el primer paso para entender tu digestión con el Método SANA por Gloria Molina.',
};

export default function GraciasPage() {
  const whatsappUrl = getWhatsAppLink(
    'Hola Gloria, acabo de completar mi compra del Método SANA y me gustaría saludarte.'
  );

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#1E4D2B] text-white selection:bg-[#B8D8C2] selection:text-[#123C32]">
      
      {/* 1. TOP HEADER BRAND BAR */}
      <header className="py-5 border-b border-white/15 bg-[#123C32]/70 backdrop-blur-md sticky top-0 z-30">
        <Container size="lg">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              aria-label="Vive Sano - Ir al inicio"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg"
            >
              <div className="relative w-36 sm:w-44 h-10">
                <Image
                  src={contentData.images.logo || '/materiales/logo-final.png'}
                  alt="Vive Sano"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            <span className="text-xs font-bold text-[#4DA92C] bg-white px-3.5 py-1.5 rounded-full border border-[#B8D8C2] shadow-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#4DA92C] animate-pulse"></span>
              <span>Compra Exitosa</span>
            </span>
          </div>
        </Container>
      </header>

      {/* 2. MAIN POST-PURCHASE CONTENT */}
      <main className="flex-1 py-12 sm:py-16 md:py-20 flex flex-col justify-center">
        <Section py="none">
          <Container size="lg">
            <div className="max-w-5xl mx-auto space-y-10 sm:space-y-12">
              
              {/* CABECERA PRINCIPAL */}
              <div className="text-center space-y-4 max-w-3xl mx-auto">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 border-2 border-[#4DA92C] text-white text-3xl sm:text-4xl shadow-xl mx-auto mb-2">
                  🎉
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
                  ¡Bienvenida al Método SANA!
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-[#B8D8C2] max-w-2xl mx-auto leading-relaxed font-medium">
                  Tu compra fue exitosa. Ya diste el primer paso para entender tu digestión.
                </p>
              </div>

              {/* ESTRUCTURA DE CONTENIDO (DOS COLUMNAS / TARJETAS BLANCAS) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                
                {/* RECUADRO IZQUIERDO: INSTRUCCIONES */}
                <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/20 text-[#123C32] flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    
                    {/* Subtítulo interno */}
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-[#F0F9ED] text-[#4DA92C] flex items-center justify-center font-bold text-sm border border-[#B8D8C2]">
                        📩
                      </span>
                      <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#123C32]">
                        Cómo recibir tu acceso
                      </h2>
                    </div>

                    <div className="pt-2 border-t border-[#D5E8DC]/80 space-y-4">
                      {/* Texto en negritas */}
                      <p className="text-base sm:text-lg font-extrabold text-[#123C32]">
                        Revisa tu correo
                      </p>

                      {/* Párrafos de instrucciones */}
                      <div className="space-y-3.5 text-xs sm:text-sm text-[#355248] leading-relaxed">
                        <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#F0F9ED]/70 border border-[#D5E8DC]">
                          <span className="text-[#4DA92C] font-bold text-base leading-none mt-0.5">✓</span>
                          <p>
                            En unos minutos recibirás un correo de <strong>Hotmart</strong> (no de Vive Sano) con tu acceso al curso.
                          </p>
                        </div>

                        <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#F0F9ED]/70 border border-[#D5E8DC]">
                          <span className="text-[#4DA92C] font-bold text-base leading-none mt-0.5">✓</span>
                          <p>
                            Si no lo ves en tu bandeja principal, búscalo en <strong>Promociones</strong> o <strong>Spam</strong>.
                          </p>
                        </div>

                        <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#F0F9ED]/70 border border-[#D5E8DC]">
                          <span className="text-[#4DA92C] font-bold text-base leading-none mt-0.5">✓</span>
                          <p>
                            También puedes entrar directo en <a href="https://hotmart.com" target="_blank" rel="noopener noreferrer" className="font-bold text-[#0078BF] underline hover:text-[#005a90]">hotmart.com</a> o en la app de Hotmart con el mismo correo con el que hiciste tu compra.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pie del recuadro izquierdo */}
                  <div className="pt-4 border-t border-[#D5E8DC]/60 flex items-center justify-between text-[11px] text-[#4A6B60]">
                    <span>🔒 Acceso 100% digital e inmediato</span>
                    <span>Sin fechas de vencimiento</span>
                  </div>
                </div>

                {/* RECUADRO DERECHO: COMUNIDAD */}
                <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/20 text-[#123C32] flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    
                    {/* Subtítulo interno */}
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-[#FFF5EE] text-[#E76100] flex items-center justify-center font-bold text-sm border border-[#FFD8C2]">
                        👥
                      </span>
                      <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#123C32]">
                        Únete a la comunidad
                      </h2>
                    </div>

                    <div className="pt-2 border-t border-[#D5E8DC]/80 space-y-4">
                      {/* Texto en negritas */}
                      <p className="text-base sm:text-lg font-extrabold text-[#123C32]">
                        Únete a la comunidad Vive Sano
                      </p>

                      {/* Párrafo */}
                      <p className="text-xs sm:text-sm text-[#355248] leading-relaxed">
                        Recibe avisos, tips y acompañamiento mientras avanzas en tu Método SANA.
                      </p>

                      {/* Beneficios de la comunidad */}
                      <div className="p-4 rounded-2xl bg-[#FAF8F1] border border-[#D5E8DC] space-y-2 text-xs text-[#355248]">
                        <div className="flex items-center gap-2 font-semibold">
                          <span className="text-[#4DA92C]">🌿</span>
                          <span>Espacio seguro para compartir tus dudas</span>
                        </div>
                        <div className="flex items-center gap-2 font-semibold">
                          <span className="text-[#4DA92C]">💬</span>
                          <span>Acompañamiento cercano durante tu proceso</span>
                        </div>
                        <div className="flex items-center gap-2 font-semibold">
                          <span className="text-[#4DA92C]">🔔</span>
                          <span>Avisos de nuevos materiales y recordatorios</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Botón de acción naranja */}
                  <div className="pt-4 space-y-3">
                    <a
                      href="#"
                      className="w-full py-4 px-6 rounded-2xl bg-[#E76100] hover:bg-[#cf5600] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider text-center transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <span>UNIRME A LA COMUNIDAD →</span>
                    </a>

                    <p className="text-[11px] text-center text-[#4A6B60]">
                      Acceso exclusivo para alumnas inscritas al Método SANA.
                    </p>
                  </div>
                </div>

              </div>

              {/* ASISTENCIA ADICIONAL / WHATSAPP */}
              <div className="pt-4 text-center max-w-lg mx-auto space-y-2">
                <p className="text-xs sm:text-sm text-[#B8D8C2]">
                  ¿Tienes alguna pregunta o necesitas ayuda con tu acceso?
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 px-5 py-2.5 rounded-full transition-all duration-300 shadow-md"
                >
                  <span>💬 Contactar a Gloria Molina por WhatsApp</span>
                </a>
              </div>

            </div>
          </Container>
        </Section>
      </main>

      {/* 3. FOOTER */}
      <footer className="py-6 border-t border-white/15 text-center text-xs text-[#B8D8C2]/80 bg-[#123C32]/80">
        <Container size="lg">
          <p>{contentData.brand.copyright}</p>
        </Container>
      </footer>

    </div>
  );
}
