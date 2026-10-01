'use client';

import React, { useState } from 'react';
import Container from './Container';
import Section from './Section';
import { contentData } from '@/data/content';

export const FAQ: React.FC = () => {
  const { eyebrow, headline, subheadline, items } = contentData.faq;
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Section id="faq" bgVariant="default" py="lg">
      <Container size="md">
        <div className="text-center space-y-4 mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[var(--primary)] uppercase bg-[var(--primary-light)] px-3.5 py-1 rounded-full border border-[var(--border)]">
            {eyebrow}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--primary-dark)] leading-tight">
            {headline}
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            {subheadline}
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="bg-[var(--surface)] rounded-2xl border border-[var(--border)] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[var(--primary-dark)]">
                    {item.question}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full bg-[var(--primary-light)] text-[var(--primary-dark)] flex items-center justify-center font-bold text-sm shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[var(--primary-dark)] text-white' : ''
                    }`}
                  >
                    ↓
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed border-t border-[var(--border)]/40 pt-4 animate-fadeIn"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
