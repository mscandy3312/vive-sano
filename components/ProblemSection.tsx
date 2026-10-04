import React from 'react';
import Container from './Container';
import Section from './Section';
import ProblemCard from './ProblemCard';
import { contentData } from '@/data/content';

export const ProblemSection: React.FC = () => {
  const { eyebrow, title, subtitle, cards } = contentData.identification;

  return (
    <Section id="problema" className="py-16 sm:py-24 bg-white border-y border-[#D5E8DC]">
      <Container size="lg">
        {/* SECTION HEADER */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <span className="inline-block text-xs font-extrabold tracking-widest text-[#E76100] uppercase bg-[#FFF4EC] px-4 py-1.5 rounded-full border border-[#FFD8BE] shadow-2xs">
            {eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#123C32] tracking-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#4A6B60] leading-relaxed max-w-2xl mx-auto">
            "{subtitle}"
          </p>
        </div>

        {/* 4 CARDS GRID: 4 cols on desktop, 2x2 on tablet, 1 col on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <ProblemCard key={card.id} card={card} />
          ))}
        </div>

        {/* EMOTIONAL REASSURANCE */}
        <div className="mt-12 text-center max-w-xl mx-auto p-4 rounded-2xl bg-[#F0F9ED] border border-[#B8D8C2] text-xs sm:text-sm text-[#123C32]">
          <span className="font-bold text-[#4DA92C]">💡 Lo que te pasa tiene sentido:</span> Tu cuerpo te está enviando señales. El Método SANA te ayuda a interpretarlas paso a paso.
        </div>
      </Container>
    </Section>
  );
};

export default ProblemSection;
