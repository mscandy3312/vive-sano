import React from 'react';
import Container from './Container';
import { contentData } from '@/data/content';

export const TrustBar: React.FC = () => {
  const { title, items } = contentData.trustBar;

  return (
    <div className="w-full bg-[var(--primary-dark)] text-white py-6 border-y border-emerald-900/30">
      <Container size="lg">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="font-serif text-sm sm:text-base font-medium text-emerald-100/90 text-center lg:text-left shrink-0">
            {title}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full lg:w-auto">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center lg:justify-start gap-2 bg-emerald-950/40 px-3 py-2 rounded-xl border border-emerald-800/40 text-xs sm:text-sm font-medium"
              >
                <span className="w-5 h-5 rounded-full bg-emerald-700/60 text-emerald-200 flex items-center justify-center text-xs shrink-0">
                  ✓
                </span>
                <span className="text-emerald-50 text-center sm:text-left">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TrustBar;
