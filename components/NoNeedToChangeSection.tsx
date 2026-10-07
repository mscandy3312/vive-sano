import React from 'react';
import Container from './Container';
import Section from './Section';
import { contentData } from '@/data/content';

export const NoNeedToChangeSection: React.FC = () => {
  const { eyebrow, title, text, ctaText, ctaHref } = contentData.noNeedToChange;

  return (
    <Section className="py-16 sm:py-24 bg-[#123C32] text-white relative overflow-hidden">
      <Container size="md">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-extrabold tracking-widest text-[#4DA92C] uppercase bg-transparent/10 px-4 py-1.5 rounded-full border border-white/20">
            {eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            {title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#B8D8C2] leading-relaxed">
            "{text}"
          </p>
          <div className="pt-4">
            <a
              href={ctaHref}
              className="py-4 px-10 rounded-2xl bg-[#E76100] hover:bg-[#cf5600] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-2 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{ctaText}</span>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default NoNeedToChangeSection;
