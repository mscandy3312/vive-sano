import React from 'react';
import Container from './Container';
import Section from './Section';
import { contentData } from '@/data/content';

export const TransformationSection: React.FC = () => {
  const { eyebrow, headline, subheadline, items } = contentData.transformation;

  return (
    <Section id="transformacion" bgVariant="soft" py="lg">
      <Container size="lg">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[var(--primary)] uppercase bg-[var(--primary-light)] px-3.5 py-1 rounded-full border border-[var(--border)]">
            {eyebrow}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {headline}
          </h2>
          <p className="text-sm sm:text-base text-white leading-relaxed">
            {subheadline}
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 rounded-2xl overflow-hidden border border-[var(--border)] bg-transparent shadow-sm"
            >
              {/* ANTES Column */}
              <div className="md:col-span-6 p-5 sm:p-6 bg-red-50/50 border-b md:border-b-0 md:border-r border-[var(--border)] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✕
                </span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-800/80 block mb-1">
                    Antes de Vive Sano
                  </span>
                  <p className="text-sm text-white">{item.before}</p>
                </div>
              </div>

              {/* DESPUÉS Column */}
              <div className="md:col-span-6 p-5 sm:p-6 bg-emerald-50/50 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white block mb-1">
                    Con Vive Sano
                  </span>
                  <p className="text-sm font-medium text-[var(--text)]">{item.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default TransformationSection;
