import React from 'react';
import Container from './Container';
import Section from './Section';
import { contentData } from '@/data/content';

export const OfferSection: React.FC = () => {
  const { eyebrow, headline, promise, priceText, ctaText, includedItems, guaranteeText } = contentData.offer;

  return (
    <Section id="oferta" className="py-16 sm:py-24 bg-transparent border-b border-[#D5E8DC]">
      <Container size="md">
        <div className="bg-transparent rounded-3xl border-2 border-[#4DA92C] shadow-2xl p-6 sm:p-10 text-center relative overflow-hidden space-y-8">
          
          {/* TOP HIGHLIGHT BADGE */}
          <div className="absolute top-0 left-0 right-0 bg-[#4DA92C] text-white py-2 px-4 text-xs font-bold uppercase tracking-widest">
            {eyebrow} · ACCESO INMEDIATO Y DIGITAL
          </div>

          <div className="pt-4 space-y-4 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-extrabold text-[#4DA92C] bg-transparent px-4 py-1 rounded-full border border-[#B8D8C2]">
              🌿 CURSO PRÁCTICO + 4 MATERIALES DE APOYO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              {headline}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed italic">
              "{promise}"
            </p>
          </div>

          {/* PRICE DISPLAY */}
          <div className="py-6 bg-transparent rounded-2xl border border-[#B8D8C2] max-w-md mx-auto space-y-2">
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              Precio Oficial Único
            </span>
            <div className="font-serif text-4xl sm:text-5xl font-extrabold text-white">
              {priceText}
            </div>
            <p className="text-xs font-semibold text-[#4DA92C]">
              Sin mensualidades • Acceso ilimitado
            </p>
          </div>

          {/* INCLUDED ITEMS CHECKLIST */}
          <div className="max-w-lg mx-auto text-left space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white text-center mb-4">
              Todo lo que recibes al comenzar hoy:
            </h3>
            {includedItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-transparent border border-[#D5E8DC]">
                <span className="w-6 h-6 rounded-full bg-[#4DA92C] text-white font-bold text-xs flex items-center justify-center shrink-0">
                  ✓
                </span>
                <span className="text-xs sm:text-sm text-white font-semibold">{item}</span>
              </div>
            ))}
          </div>

          {/* PRIMARY CTA BUTTON */}
          <div className="pt-4 max-w-md mx-auto space-y-3">
            <a
              href="/pago"
              className="w-full py-4 px-8 rounded-2xl bg-[#E76100] hover:bg-[#cf5600] text-white font-extrabold text-base sm:text-lg uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>{ctaText} →</span>
            </a>
            <p className="text-xs text-white">
              {guaranteeText}
            </p>
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default OfferSection;
