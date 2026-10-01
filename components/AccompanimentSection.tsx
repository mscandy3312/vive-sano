import React from 'react';
import Container from './Container';
import Section from './Section';
import { contentData } from '@/data/content';

export const AccompanimentSection: React.FC = () => {
  const { enabled, eyebrow, headline, subheadline, features } = contentData.accompaniment;

  if (!enabled) {
    return null;
  }

  return (
    <Section id="acompaniamiento" bgVariant="default" py="lg">
      <Container size="lg">
        <div className="bg-[var(--primary-dark)] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div
            className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full bg-emerald-900/60 border border-emerald-700/50 text-emerald-200">
                {eyebrow}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                {headline}
              </h2>
              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
                {subheadline}
              </p>
            </div>

            <div className="lg:col-span-5 bg-emerald-950/60 rounded-2xl p-6 border border-emerald-800/60 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                Lo que incluye tu acompañamiento:
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-emerald-100">
                {features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-700 text-emerald-200 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AccompanimentSection;
