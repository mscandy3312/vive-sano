import React from 'react';
import Container from './Container';
import Section from './Section';
import { contentData } from '@/data/content';

export const AudienceSection: React.FC = () => {
  const { eyebrow, title, subtitle, items } = contentData.audience;

  return (
    <Section className="py-16 sm:py-24 bg-transparent border-b border-[#D5E8DC]">
      <Container size="lg">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* HEADER */}
          <div className="text-center space-y-3">
            <span className="inline-block text-xs font-extrabold tracking-widest text-[#4DA92C] uppercase bg-transparent px-4 py-1.5 rounded-full border border-[#B3DAF2]">
              {eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed max-w-xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* 5 ITEMS GRID */}
          {/* ITEMS GRID */}
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
              {items.slice(0, 4).map((item, idx) => (
                <div
                  key={item.id}
                  className="p-5 sm:p-6 rounded-3xl bg-transparent border border-[#D5E8DC] hover:border-[#4DA92C] transition-all flex flex-col items-start gap-4 shadow-2xs hover:shadow-md group h-full"
                >
                  <span className="w-8 h-8 rounded-full bg-[#4DA92C] text-white font-extrabold text-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    🌿
                  </span>
                  <p className="text-sm sm:text-base text-white font-semibold leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            {items.length > 4 && (
              <div
                key={items[4].id}
                className="p-5 sm:p-6 rounded-3xl bg-transparent border border-[#D5E8DC] hover:border-[#4DA92C] transition-all flex flex-col items-center text-center gap-4 shadow-2xs hover:shadow-md group w-full lg:w-1/2 max-w-lg"
              >
                  <span className="w-8 h-8 rounded-full bg-[#4DA92C] text-white font-extrabold text-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    🌿
                  </span>
                  <p className="text-sm sm:text-base text-white font-semibold leading-relaxed">
                    {items[4].text}
                  </p>
              </div>
            )}
          </div>

          {/* BOTTOM CTA */}
          <div className="text-center pt-4">
            <a
              href="#oferta"
              className="py-4 px-10 rounded-2xl bg-[#E76100] hover:bg-[#cf5600] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-2 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>QUIERO EMPEZAR →</span>
            </a>
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default AudienceSection;
