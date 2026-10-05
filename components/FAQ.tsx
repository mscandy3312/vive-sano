'use client';

import React, { useState } from 'react';
import Container from './Container';
import Section from './Section';
import { contentData } from '@/data/content';

export const FAQ: React.FC = () => {
  const { eyebrow, title, subtitle, items } = contentData.faq;
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Section id="faq" className="py-16 sm:py-24 bg-[#FAF8F1] border-b border-[#D5E8DC]">
      <Container size="md">
        <div className="text-center space-y-3.5 mb-12 sm:mb-16">
          <span className="inline-block text-xs font-extrabold tracking-widest text-[#0078BF] uppercase bg-[#EBF5FC] px-4 py-1.5 rounded-full border border-[#B3DAF2]">
            {eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#123C32] tracking-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#4A6B60] leading-relaxed max-w-xl mx-auto">
            "{subtitle}"
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {items.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-[#D5E8DC] overflow-hidden shadow-2xs transition-all duration-200 hover:border-[#4DA92C]"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#123C32] leading-snug">
                    {item.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#123C32] text-white' : 'bg-[#F0F9ED] text-[#4DA92C]'
                    }`}
                  >
                    ↓
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#4A6B60] leading-relaxed border-t border-[#D5E8DC]/60 pt-4 animate-fadeIn"
                  >
                    "{item.answer}"
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
