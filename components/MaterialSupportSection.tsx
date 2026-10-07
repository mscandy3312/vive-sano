import React, { useState } from 'react';
import Image from 'next/image';
import Container from './Container';
import Section from './Section';
import MaterialCard from './MaterialCard';
import { contentData } from '@/data/content';

export const MaterialSupportSection: React.FC = () => {
  const { eyebrow, title, subtitle, materials } = contentData.materialSupport;
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <Section id="materiales" className="py-16 sm:py-24 bg-transparent border-y border-[#D5E8DC]">
      <Container size="lg">
        {/* SECTION HEADER */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2">
            <span className="inline-block text-xs font-extrabold tracking-widest text-[#0078BF] uppercase bg-transparent px-4 py-1.5 rounded-full border border-[#B3DAF2] shadow-2xs">
              {eyebrow}
            </span>
            <span className="inline-block text-xs font-bold tracking-wider text-[#4DA92C] uppercase bg-transparent px-3 py-1 rounded-full border border-[#B8D8C2]">
              📄 PDF Interactivos
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {title}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed max-w-2xl mx-auto">
            "{subtitle}"
          </p>
        </div>

        {/* MATERIALS GRID: Desktop 4 cols, Tablet 2 cols, Mobile 1 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {materials.map((material) => (
            <MaterialCard
              key={material.id}
              material={material}
              onPreviewClick={(src) => setActiveImage(src)}
            />
          ))}
        </div>

        {/* INCLUDED NOTE & ASSURANCE */}
        <div className="mt-12 text-center text-xs sm:text-sm text-white font-medium bg-transparent p-5 rounded-2xl max-w-xl mx-auto border border-[#D5E8DC] shadow-xs space-y-1">
          <p className="font-bold text-white flex items-center justify-center gap-2">
            <span className="text-[#4DA92C] text-base">✓</span> Descarga o consulta directa desde cualquier dispositivo
          </p>
          <p className="text-white">
            Todos los materiales están incluidos en formato PDF de alta calidad con tu inscripción de <strong className="text-[#4DA92C] font-extrabold">497,00 MXN</strong> al Método SANA.
          </p>
        </div>
      </Container>

      {/* LIGHTBOX MODAL FOR IMAGE PREVIEW */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 cursor-pointer animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Ampliación del material de apoyo"
        >
          <div className="relative max-w-3xl w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black">
            <Image
              src={activeImage}
              alt="Vista detallada del material de apoyo"
              fill
              sizes="100vw"
              className="object-contain"
            />
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 bg-transparent/90 hover:bg-transparent text-white rounded-full px-4 py-2 text-xs font-bold shadow-md cursor-pointer"
            >
              ✕ Cerrar
            </button>
          </div>
        </div>
      )}
    </Section>
  );
};

export default MaterialSupportSection;
