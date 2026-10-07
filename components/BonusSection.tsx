import React from 'react';
import Container from './Container';
import Section from './Section';
import BookMockup from './BookMockup';
import { contentData } from '@/data/content';

export const BonusSection: React.FC = () => {
  const { showSection, eyebrow, headline, subheadline, items } = contentData.bonuses;

  const activeBonuses = items?.filter((b) => b.enabled !== false) || [];

  if (!showSection || activeBonuses.length === 0) {
    return null;
  }

  return (
    <Section id="bonos" bgVariant="default" py="lg">
      <Container size="lg">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[var(--secondary)] uppercase bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
            {eyebrow}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {headline}
          </h2>
          <p className="text-sm sm:text-base text-white leading-relaxed">
            {subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeBonuses.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-[var(--surface)] p-6 rounded-3xl border-2 border-amber-200/70 shadow-md hover:shadow-xl transition-all duration-400 flex flex-col justify-between space-y-6 relative group overflow-hidden"
            >
              {/* Top Badge */}
              <div className="flex items-center justify-between">
                <span className="bg-[var(--secondary)] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  INCLUIDO SIN COSTO
                </span>
                {bonus.estimatedValue && (
                  <span className="text-xs font-bold text-[var(--secondary)]">
                    {bonus.estimatedValue}
                  </span>
                )}
              </div>

              {/* 3D Mockup Container */}
              <div className="py-2 flex justify-center">
                <BookMockup
                  title={bonus.title}
                  badge="BONO EXCLUSIVO"
                  coverColor={bonus.coverColor || 'emerald'}
                />
              </div>

              {/* Text Description */}
              <div className="space-y-2 pt-2 border-t border-[var(--border)]">
                <h3 className="font-serif text-lg font-bold text-white leading-snug">
                  {bonus.title}
                </h3>
                <p className="text-xs text-white leading-relaxed">
                  {bonus.description}
                </p>
              </div>

              <div className="text-[11px] font-bold text-emerald-700 bg-emerald-50 py-1.5 px-3 rounded-full text-center border border-emerald-200">
                ✓ Acceso Inmediato en Hotmart
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default BonusSection;
