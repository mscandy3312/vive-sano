import React from 'react';
import Container from './Container';
import Section from './Section';
import { contentData } from '@/data/content';

export const MethodSection: React.FC = () => {
  const { eyebrow, title, subtitle, copy, pillars } = contentData.metodoSana;

  return (
    <Section id="metodo-sana" className="py-16 sm:py-24 bg-transparent border-b border-[#D5E8DC]">
      <Container size="lg">
        {/* SECTION HEADER */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="inline-block text-xs font-extrabold tracking-widest text-[#4DA92C] uppercase bg-transparent px-4 py-1.5 rounded-full border border-[#B8D8C2] shadow-2xs">
            {eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* EXPLANATION BANNER */}
        <div className="max-w-4xl mx-auto bg-transparent p-6 sm:p-8 rounded-3xl border border-[#D5E8DC] shadow-sm mb-12 text-center sm:text-left grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-2">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              ¿Cómo te ayuda el Método SANA?
            </h3>
            <p className="text-xs sm:text-sm text-white leading-relaxed">
              {copy}
            </p>
          </div>
          <div className="md:col-span-4 text-center md:text-right">
            <a
              href="#oferta"
              className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#4DA92C] hover:bg-[#3e8b23] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>QUIERO EMPEZAR →</span>
            </a>
          </div>
        </div>

        {/* 3 PILLARS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-transparent p-6 sm:p-8 rounded-3xl border border-[#D5E8DC] shadow-xs hover:shadow-md transition-all duration-300 space-y-4 relative group"
              style={{ borderTopColor: pillar.color, borderTopWidth: '4px' }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="font-serif text-3xl font-extrabold"
                  style={{ color: pillar.color }}
                >
                  {pillar.number}
                </span>
                <span
                  className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border"
                  style={{
                    backgroundColor: `${pillar.color}10`,
                    borderColor: `${pillar.color}30`,
                    color: pillar.color,
                  }}
                >
                  Pilar Clave
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-white">
                {pillar.title}
              </h3>

              <p className="text-xs sm:text-sm text-white leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default MethodSection;
