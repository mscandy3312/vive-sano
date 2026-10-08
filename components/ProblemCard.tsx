import React from 'react';
import { ProblemCard as ProblemCardType } from '@/data/content';

export interface ProblemCardProps {
  card: ProblemCardType;
}

export const ProblemCard: React.FC<ProblemCardProps> = ({ card }) => {
  const { title, description, icon, colorAccent, badgeLabel } = card;

  return (
    <div
      className="bg-white p-6 sm:p-7 rounded-3xl border border-[#D5E8DC] shadow-xs hover:shadow-lg transition-all duration-300 space-y-4 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
      style={{ borderTopColor: colorAccent, borderTopWidth: '4px' }}
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl font-bold border shadow-2xs transition-colors"
            style={{
              backgroundColor: `${colorAccent}15`,
              borderColor: `${colorAccent}30`,
              color: colorAccent,
            }}
          >
            {icon}
          </div>
          {badgeLabel && (
            <span
              className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border"
              style={{
                backgroundColor: `${colorAccent}10`,
                borderColor: `${colorAccent}30`,
                color: colorAccent,
              }}
            >
              {badgeLabel}
            </span>
          )}
        </div>

        <h3 className="font-serif text-lg font-bold text-[#123C32] leading-snug">
          {title}
        </h3>

        <p className="text-xs sm:text-sm text-[#4A6B60] leading-relaxed">
          {description}
        </p>
      </div>

    </div>
  );
};

export default ProblemCard;
