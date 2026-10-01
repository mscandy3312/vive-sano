import React from 'react';
import Container from './Container';
import Section from './Section';
import Button from './Button';
import { contentData } from '@/data/content';

export const CTASection: React.FC = () => {
  const { headline, subheadline, buttonText, buttonHref } = contentData.ctaSection;

  return (
    <Section bgVariant="primary" py="xl" className="overflow-hidden relative text-white">
      {/* Subtle Background Glow Accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container size="md">
        <div className="text-center space-y-6 relative z-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full bg-emerald-900/60 border border-emerald-700/50 text-emerald-200">
            TU MOMENTO DE COMENZAR
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            {headline}
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
            {subheadline}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={buttonHref}
              size="lg"
              variant="gold"
              className="w-full sm:w-auto px-10 text-lg shadow-xl hover:scale-105"
            >
              {buttonText}
            </Button>
          </div>

          <p className="text-xs text-emerald-200/70 italic">
            Experiencia 100% digital | Acceso a tu ritmo
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default CTASection;
