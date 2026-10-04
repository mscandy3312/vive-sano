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
    <Section id="materiales" className="py-16 sm:py-24 bg-[#F0F9ED] border-y border-[#D5E8DC]">
      <Container size="lg">
        {/* SECTION HEADER */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="inline-block text-xs font-extrabold tracking-widest text-[#0078BF] uppercase bg-[#EBF5FC] px-4 py-1.5 rounded-full border border-[#B3DAF2] shadow-2xs">
            {eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#123C32] tracking-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#4A6B60] leading-relaxed max-w-2xl mx-auto">
            "{subtitle}"
          </p>
        </div>

        {/* 4 MATERIALS GRID: Desktop 4 cols, Tablet 2x2, Mobile 1 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((material) => (
            <MaterialCard
              key={material.id}
              material={material}
              onPreviewClick={(src) => setActiveImage(src)}
            />
          ))}
        </div>

        {/* INCLUDED NOTE */}
        <div className="mt-12 text-center text-xs text-[#4A6B60] font-semibold bg-white p-4 rounded-2xl max-w-lg mx-auto border border-[#D5E8DC] shadow-2xs">
          📄 Todos los materiales están incluidos en formato PDF de alta calidad con tu inscripción de <strong className="text-[#4DA92C]">497,00 MXN</strong>.
        </div>
      </Container>

      {/* LIGHTBOX MODAL */}
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
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-[#123C32] rounded-full px-4 py-2 text-xs font-bold shadow-md cursor-pointer"
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
