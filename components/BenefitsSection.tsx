import React from 'react';
import Image from 'next/image';
import Container from './Container';
import Section from './Section';
import { contentData } from '@/data/content';

export const BenefitsSection: React.FC = () => {
  const { eyebrow, headline, subheadline, cards } = contentData.benefits;

  return (
    <Section id="incluye" bgVariant="soft" py="lg">
      <Container size="lg">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[var(--primary)] uppercase bg-[var(--primary-light)] px-3.5 py-1 rounded-full border border-[var(--border)]">
            {eyebrow}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {headline}
          </h2>
          <p className="text-sm sm:text-base text-white leading-relaxed">
            {subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-[var(--surface)] rounded-3xl border border-[var(--border)] shadow-sm hover:shadow-xl transition-all duration-400 overflow-hidden flex flex-col justify-between group"
            >
              {/* Card Top Image Header */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-emerald-950">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center transform transition-transform duration-700 group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/70 via-transparent to-transparent" />
              </div>

              {/* Card Body Content */}
              <div className="p-6 space-y-3">
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[var(--primary)] transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-white leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default BenefitsSection;
