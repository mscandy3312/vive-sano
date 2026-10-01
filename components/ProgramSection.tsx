import React from 'react';
import Container from './Container';
import Section from './Section';
import ModuleCard from './ModuleCard';
import Button from './Button';
import { contentData } from '@/data/content';

export const ProgramSection: React.FC = () => {
  const { eyebrow, headline, subheadline, modules } = contentData.program;

  return (
    <Section id="programa" bgVariant="soft" py="lg">
      <Container size="lg">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[var(--primary)] uppercase bg-[var(--primary-light)] px-3.5 py-1 rounded-full border border-[var(--border)]">
            {eyebrow}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--primary-dark)] leading-tight">
            {headline}
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            {subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {modules.map((mod) => (
            <ModuleCard key={mod.id} module={mod} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="#oferta" size="lg" variant="primary">
            QUIERO ACCEDER AL PROGRAMA
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default ProgramSection;
