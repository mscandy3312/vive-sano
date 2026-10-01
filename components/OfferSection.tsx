import React from 'react';
import Container from './Container';
import Section from './Section';
import PricingCard from './PricingCard';
import { contentData } from '@/data/content';

export const OfferSection: React.FC = () => {
  const { enabled, eyebrow, headline, subheadline } = contentData.pricing;

  if (!enabled) {
    return null;
  }

  return (
    <Section id="oferta" bgVariant="soft" py="lg">
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

        <PricingCard />
      </Container>
    </Section>
  );
};

export default OfferSection;
