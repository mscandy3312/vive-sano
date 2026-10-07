import React from 'react';
import Image from 'next/image';
import Container from './Container';
import Section from './Section';
import { contentData } from '@/data/content';

export const IncludesSection: React.FC = () => {
  const { imageBadge, eyebrow, title, subtitle, imageSrc, imageAlt, list, priceText, ctaText, ctaHref } = contentData.includes;

  return (
    <Section id="incluye" className="py-16 sm:py-24 bg-transparent border-b border-[#D5E8DC]">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: VISUAL PRODUCT DISPLAY (LAPTOP / CELULAR PRESENTATION) */}
          <div className="lg:col-span-5 relative">
            <div className="bg-transparent p-4 sm:p-6 rounded-3xl border-2 border-[#D5E8DC] shadow-2xl space-y-4 relative overflow-hidden">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-[#D5E8DC] bg-slate-900">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                />
                

              </div>

              <div className="p-4 rounded-2xl bg-transparent border border-[#D5E8DC] text-center space-y-1">
                <span className="text-xs font-bold text-white uppercase tracking-wider">Inversión Única</span>
                <p className="font-serif text-3xl font-extrabold text-white">{priceText}</p>
                <p className="text-xs text-[#4DA92C] font-semibold">Incluye Curso completo + Materiales PDF</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: EXACT CHECKLIST & DETAILS */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-3">
              <span className="inline-block text-xs font-extrabold tracking-widest text-[#4DA92C] uppercase bg-transparent px-4 py-1.5 rounded-full border border-[#B8D8C2] shadow-2xs">
                {eyebrow}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                {title}
              </h2>
              <p className="text-sm sm:text-base text-white leading-relaxed">
                "{subtitle}"
              </p>
            </div>

            {/* CHECKLIST */}
            <div className="space-y-3 pt-2">
              {list.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-transparent border border-[#D5E8DC] shadow-2xs">
                  <span className="w-5 h-5 rounded-full bg-[#4DA92C] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-xs sm:text-sm text-white font-semibold leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA BUTTON */}
            <div className="pt-4">
              <a
                href={ctaHref}
                className="py-4 px-10 rounded-2xl bg-[#E76100] hover:bg-[#cf5600] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-2 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{ctaText}</span>
              </a>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default IncludesSection;
