import React from 'react';
import Container from './Container';
import Section from './Section';
import { contentData } from '@/data/content';

export const RoadmapSection: React.FC = () => {
  const { eyebrow, headline, subheadline, steps } = contentData.roadmap;

  return (
    <Section id="hoja-de-ruta" bgVariant="soft" py="lg">
      <Container size="lg">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
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

        {/* Visual Timeline & Connected Pathway */}
        <div className="relative">
          {/* Connecting Line background for desktop */}
          <div
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary-light)] via-[var(--primary)] to-[var(--secondary)] -translate-y-1/2 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={step.phase}
                className="bg-[var(--surface)] p-6 rounded-3xl border border-[var(--border)] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group relative overflow-hidden"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                    <span className="font-serif text-3xl font-extrabold text-[var(--primary-dark)] group-hover:text-[var(--primary)] transition-colors">
                      {step.phase}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[var(--primary-light)] text-[var(--primary-dark)]">
                      Fase {idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[var(--primary-dark)]">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border)]/60 text-xs font-bold text-[var(--primary)] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                  <span>{step.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default RoadmapSection;
