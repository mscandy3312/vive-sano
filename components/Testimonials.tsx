import React from 'react';
import Container from './Container';
import Section from './Section';
import TestimonialCard from './TestimonialCard';
import { contentData } from '@/data/content';

export const Testimonials: React.FC = () => {
  const { enabled, eyebrow, headline, subheadline, items } = contentData.testimonials;

  const activeTestimonials = items?.filter((t) => t.enabled !== false) || [];

  if (!enabled || activeTestimonials.length === 0) {
    return null;
  }

  return (
    <Section id="testimonios" bgVariant="soft" py="lg">
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

        {/* Mobile: Horizontal scroll carousel / Desktop: 3-column grid */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory scrollbar-none">
          {activeTestimonials.map((test) => (
            <div key={test.id} className="snap-center shrink-0 w-[85%] sm:w-[60%] md:w-auto">
              <TestimonialCard testimonial={test} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
