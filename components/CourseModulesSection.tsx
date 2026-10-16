import React from 'react';
import Image from 'next/image';
import Container from './Container';
import Section from './Section';
import { contentData } from '@/data/content';

export interface CourseModulesSectionProps {
  laptopBannerSrc?: string;
  tabletLessonSrc?: string;
}

export const CourseModulesSection: React.FC<CourseModulesSectionProps> = ({
  laptopBannerSrc,
  tabletLessonSrc,
}) => {
  const { eyebrow, subtitle, modules } = contentData.courseModules;

  return (
    <Section id="contenido" className="py-16 sm:py-24 bg-transparent border-b border-[#D5E8DC]">
      <Container size="lg">
        {/* HEADER: STRICT TWO-LINE TITLE */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="inline-block text-xs font-extrabold tracking-widest text-[#4DA92C] uppercase bg-transparent px-4 py-1.5 rounded-full border border-[#B3DAF2]">
            {eyebrow}
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            <span className="block">¿Qué encontrarás en</span>
            <span className="block">el Método SANA?</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* HOTMART MOCKUPS SHOWCASE (LAPTOP BANNER & TABLET OPEN CLASS) */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* 1. LAPTOP MOCKUP: BANNER EN HOTMART (7 COLS ON DESKTOP) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="bg-[#123C32]/60 backdrop-blur-md rounded-3xl border border-[#D5E8DC]/40 p-5 sm:p-6 shadow-2xl flex-1 flex flex-col justify-between">
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">💻</span>
                      <span className="text-xs font-bold text-white uppercase tracking-wider">
                        Banner de Bienvenida en Hotmart
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-[#4DA92C] bg-[#4DA92C]/10 border border-[#4DA92C]/30 px-2.5 py-0.5 rounded-full uppercase">
                      Área de Alumnos
                    </span>
                  </div>
                  <p className="text-xs text-white/80">
                    Así se verá la portada principal del Método SANA al entrar desde tu computadora o laptop.
                  </p>
                </div>

                {/* LAPTOP FRAME CONTAINER */}
                <div className="mt-4 pt-2">
                  <div className="relative mx-auto w-full max-w-xl">
                    {/* Screen Bezel */}
                    <div className="bg-[#18231E] rounded-t-2xl p-2.5 sm:p-3 border-2 border-white/15 shadow-2xl">
                      {/* Camera Notch */}
                      <div className="flex items-center justify-center mb-1.5 gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-black/80 border border-white/20"></span>
                      </div>

                      {/* Screen Content: Hotmart Club Bar + Banner Area */}
                      <div className="bg-[#0C1E17] rounded-lg overflow-hidden border border-white/10">
                        {/* Hotmart Club Top Nav */}
                        <div className="bg-[#122B22] px-3 py-1.5 flex items-center justify-between text-[11px] text-white/90 border-b border-white/10">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#E76100]"></span>
                            <span className="font-bold tracking-wide">HOTMART CLUB</span>
                            <span className="text-white/40">|</span>
                            <span className="text-white/80 text-[10px]">Método SANA</span>
                          </div>
                          <div className="flex items-center gap-2 text-[10px] text-[#B8D8C2]">
                            <span>Gloria Molina</span>
                            <span className="w-4 h-4 rounded-full bg-[#4DA92C] text-white flex items-center justify-center text-[8px] font-bold">
                              VS
                            </span>
                          </div>
                        </div>

                        {/* Banner Placeholder or Real Image */}
                        <div className="relative aspect-[16/9] w-full bg-gradient-to-br from-[#123C32] via-[#1a4a3e] to-[#0d2821] flex flex-col items-center justify-center p-4 text-center overflow-hidden">
                          {laptopBannerSrc ? (
                            <Image
                              src={laptopBannerSrc}
                              alt="Banner del Método SANA en Hotmart"
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="space-y-2.5 max-w-md p-4 rounded-xl border border-dashed border-[#4DA92C]/50 bg-black/20 backdrop-blur-xs">
                              <div className="w-10 h-10 rounded-2xl bg-[#4DA92C]/20 border border-[#4DA92C]/40 text-[#4DA92C] flex items-center justify-center text-xl mx-auto shadow-inner">
                                🖥️
                              </div>
                              <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-[#4DA92C] bg-[#4DA92C]/20 px-2.5 py-0.5 rounded-full">
                                Placeholder: Banner Hotmart
                              </span>
                              <h4 className="font-serif font-bold text-white text-xs sm:text-sm">
                                Espacio para Captura Real del Banner
                              </h4>
                              <p className="text-[10px] sm:text-[11px] text-[#B8D8C2] leading-tight">
                                Diseñado para recibir la captura oficial del banner (1920 × 1080 px) del curso en Hotmart.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Laptop Bottom Base / Deck */}
                    <div className="relative bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 h-2.5 sm:h-3 rounded-b-xl border-t border-white/20 shadow-2xl">
                      <div className="w-16 h-1 bg-gray-900 mx-auto rounded-b-sm"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/70">
                  <span>✓ Acceso 100% digital en Hotmart</span>
                  <span>Sin libros físicos ni envíos</span>
                </div>
              </div>
            </div>

            {/* 2. TABLET MOCKUP: CLASE ABIERTA EN HOTMART (5 COLS ON DESKTOP) */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="bg-[#123C32]/60 backdrop-blur-md rounded-3xl border border-[#D5E8DC]/40 p-5 sm:p-6 shadow-2xl flex-1 flex flex-col justify-between">
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">📱</span>
                      <span className="text-xs font-bold text-white uppercase tracking-wider">
                        Clase Abierta en Tableta
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-[#0078BF] bg-[#0078BF]/10 border border-[#0078BF]/30 px-2.5 py-0.5 rounded-full uppercase">
                      Reproductor Hotmart
                    </span>
                  </div>
                  <p className="text-xs text-white/80">
                    Así se reproduce cada video clase en tu tableta o iPad con controles de velocidad y calidad.
                  </p>
                </div>

                {/* TABLET FRAME CONTAINER */}
                <div className="mt-4 pt-2">
                  <div className="relative mx-auto w-full max-w-sm">
                    {/* Tablet Bezel */}
                    <div className="bg-[#18231E] rounded-3xl p-3 border-2 border-white/15 shadow-2xl">
                      {/* Top Sensor Dot */}
                      <div className="flex items-center justify-center mb-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-black/80 border border-white/20"></span>
                      </div>

                      {/* Tablet Screen Content */}
                      <div className="bg-[#0C1E17] rounded-2xl overflow-hidden border border-white/10 space-y-2">
                        {/* Video Player Header */}
                        <div className="bg-[#122B22] px-3 py-1.5 flex items-center justify-between text-[10px] text-white/90">
                          <span className="font-semibold truncate">
                            Módulo 2: Salud Digestiva · Clase 1
                          </span>
                          <span className="text-[#4DA92C] font-bold text-[9px] shrink-0">
                            En curso
                          </span>
                        </div>

                        {/* Video Player Canvas / Placeholder */}
                        <div className="relative aspect-video w-full bg-gradient-to-br from-[#0c241c] via-[#123C32] to-[#0a1f18] flex flex-col items-center justify-center p-3 text-center overflow-hidden">
                          {tabletLessonSrc ? (
                            <Image
                              src={tabletLessonSrc}
                              alt="Clase abierta en Hotmart"
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="space-y-2 w-full p-2.5 rounded-lg border border-dashed border-[#0078BF]/50 bg-black/25 backdrop-blur-xs">
                              {/* Centered Play Button */}
                              <div className="w-9 h-9 rounded-full bg-[#4DA92C] text-white flex items-center justify-center text-sm mx-auto shadow-lg">
                                ▶
                              </div>
                              <span className="inline-block text-[9px] font-extrabold uppercase tracking-wider text-[#0078BF] bg-[#0078BF]/20 px-2 py-0.5 rounded-full">
                                Placeholder: Clase en Tableta
                              </span>
                              <h5 className="font-serif font-bold text-white text-xs leading-snug">
                                Espacio para Captura de Video Lección
                              </h5>
                              <p className="text-[10px] text-[#B8D8C2] leading-tight">
                                Preparado para la captura real del reproductor de video de Hotmart.
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Video Player Scrub Bar */}
                        <div className="px-3 pb-2 pt-1 space-y-1">
                          <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                            <div className="bg-[#4DA92C] h-full w-[45%]"></div>
                          </div>
                          <div className="flex items-center justify-between text-[9px] text-white/60">
                            <span>14:28 / 22:50</span>
                            <span className="text-[#4DA92C] font-semibold">1080p HD • 1.0x</span>
                          </div>
                        </div>

                        {/* Lesson Tabs Mock */}
                        <div className="px-3 pb-2.5 pt-1 border-t border-white/10 flex items-center gap-3 text-[10px]">
                          <span className="text-[#4DA92C] font-bold border-b-2 border-[#4DA92C] pb-0.5">
                            Lección
                          </span>
                          <span className="text-white/60">Materiales PDF</span>
                          <span className="text-white/60">Notas</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/70">
                  <span>✓ Compatible con iPad y Android</span>
                  <span>En cualquier momento</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3 MODULE CARDS GRID */}
        <div className="space-y-4">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-xs font-bold text-white/90 uppercase tracking-wider">
              Temario Oficial del Método SANA
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {modules.map((mod) => (
              <div
                key={mod.id}
                className="bg-[#123C32]/50 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-[#D5E8DC]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                style={{ borderTopColor: mod.colorAccent, borderTopWidth: '4px' }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full text-white shadow-2xs"
                      style={{ backgroundColor: mod.colorAccent }}
                    >
                      {mod.badgeLabel}
                    </span>
                    <span className="text-2xl">{mod.icon}</span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-white group-hover:text-[#4DA92C] transition-colors">
                    {mod.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                    {mod.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#D5E8DC]/30 flex items-center text-xs font-bold text-[#B8D8C2]">
                  <span>{(mod as any).bottomText}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </Section>
  );
};

export default CourseModulesSection;
