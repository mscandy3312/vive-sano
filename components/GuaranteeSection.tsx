import React from 'react';
import Container from './Container';
import Section from './Section';
import { contentData } from '@/data/content';

export const GuaranteeSection: React.FC = () => {
  const { enabled, headline, description, badgeText } = contentData.guarantee;

  // Conditionally hide section if guarantee is not enabled
  if (!enabled) {
    return null;
  }

  return (
    <Section id="garantia" bgVariant="default" py="md">
      <Container size="md">
        <div className="bg-[var(--surface)] p-6 sm:p-8 rounded-2xl border-2 border-emerald-100 shadow-sm flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="w-16 h-16 rounded-full bg-white text-[#4DA92C] flex items-center justify-center font-bold shrink-0 shadow-inner">
            <svg
              className="w-8 h-8 text-[var(--primary)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>

          <div className="space-y-2">
            <div className="inline-block text-[10px] font-bold uppercase tracking-wider text-[var(--primary)] bg-[var(--primary-light)] px-3 py-0.5 rounded-full">
              {badgeText}
            </div>
            <h3 className="font-serif text-xl font-bold text-white">
              {headline}
            </h3>
            <p className="text-xs sm:text-sm text-white leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default GuaranteeSection;
