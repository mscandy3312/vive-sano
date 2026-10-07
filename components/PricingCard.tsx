import React from 'react';
import Button from './Button';
import { contentData } from '@/data/content';

export const PricingCard: React.FC = () => {
  const {
    cardTitle,
    originalPrice,
    currentPrice,
    installments,
    offerText,
    includedList,
    ctaText,
    guaranteeNotice,
  } = contentData.pricing;

  return (
    <div className="bg-white rounded-3xl border-2 border-[var(--primary)] shadow-2xl overflow-hidden max-w-2xl mx-auto transform transition-transform hover:scale-[1.01]">
      {/* Top Banner Accent */}
      <div className="bg-[var(--primary-dark)] text-white py-3.5 px-6 text-center text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2">
        <span>⭐</span>
        <span>INSCRIPCIÓN AL PROGRAMA COMPLETO VIVE SANO</span>
      </div>

      <div className="p-6 sm:p-10 space-y-8">
        <div className="text-center space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--secondary)] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            {offerText}
          </span>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--primary-dark)] pt-1">
            {cardTitle}
          </h3>

          {/* Pricing Display */}
          <div className="pt-2 flex flex-col items-center justify-center gap-1">
            <div className="flex items-baseline gap-3">
              <span className="text-sm sm:text-base text-[var(--text-muted)] line-through">
                {originalPrice}
              </span>
              <span className="font-serif text-3xl sm:text-5xl font-extrabold text-[var(--primary-dark)]">
                {currentPrice}
              </span>
            </div>
            <p className="text-xs text-emerald-800 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mt-1">
              {installments}
            </p>
          </div>
        </div>

        {/* Feature Checklist */}
        <div className="space-y-3 border-y border-[var(--border)] py-6">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--primary-dark)] mb-4">
            Todo lo que vas a recibir hoy:
          </p>
          <ul className="space-y-3">
            {includedList.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text)]">
                <span className="w-5 h-5 rounded-full bg-white text-[#4DA92C] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button & Security Notice */}
        <div className="space-y-4 text-center">
          <Button href="/pago" size="lg" variant="primary" fullWidth className="py-4 text-lg">
            {ctaText}
          </Button>

          <div className="flex items-center justify-center gap-2 text-xs text-[var(--text-muted)]">
            <svg
              className="w-4 h-4 text-emerald-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <span>{guaranteeNotice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
