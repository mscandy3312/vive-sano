import React from 'react';
import Container from './Container';
import Section from './Section';
import GuideMockup from './GuideMockup';
import Button from './Button';
import { contentData } from '@/data/content';

export const GuideSection: React.FC = () => {
  const { eyebrow, headline, subheadline, title, description, features } = contentData.guide;

  return (
    <Section id="guia" bgVariant="default" py="lg">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Guide Visual Column */}
          <div className="lg:col-span-6 flex justify-center">
            <GuideMockup />
          </div>

          {/* Guide Description Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[var(--primary)] uppercase bg-[var(--primary-light)] px-3.5 py-1 rounded-full border border-[var(--border)]">
              {eyebrow}
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--primary-dark)] leading-tight">
              {headline}
            </h2>

            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              {subheadline}
            </p>

            <div className="p-6 rounded-2xl bg-[var(--background-soft)] border border-[var(--border)] space-y-4">
              <h3 className="font-serif text-xl font-bold text-[var(--primary-dark)]">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {description}
              </p>

              <ul className="space-y-3 pt-2">
                {features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text)]">
                    <span className="w-5 h-5 rounded-full bg-[var(--primary-light)] text-[var(--primary-dark)] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <Button href="#oferta" size="md" variant="primary">
                OBTENER MI GUÍA DIGITAL
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default GuideSection;
