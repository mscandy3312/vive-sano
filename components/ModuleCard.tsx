import React from 'react';
import { ModuleItem } from '@/data/content';

export interface ModuleCardProps {
  module: ModuleItem;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {
  return (
    <div className="bg-[var(--surface)] p-6 sm:p-8 rounded-2xl border border-[var(--border)] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
          <span className="text-xs font-bold tracking-widest text-[var(--primary)] uppercase bg-[var(--primary-light)] px-3 py-1 rounded-full">
            {module.number}
          </span>
          {module.badge && (
            <span className="text-[11px] font-medium text-[var(--text-muted)] bg-[var(--background-soft)] px-2.5 py-0.5 rounded-full border border-[var(--border)]">
              {module.badge}
            </span>
          )}
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--primary-dark)] group-hover:text-[var(--primary)] transition-colors">
          {module.title}
        </h3>

        <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
          {module.description}
        </p>
      </div>

      {module.lessonsCount && (
        <div className="pt-6 mt-6 border-t border-[var(--border)]/60 flex items-center justify-between text-xs text-[var(--text-muted)]">
          <span className="flex items-center gap-1.5 font-medium">
            <svg
              className="w-4 h-4 text-[var(--primary)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {module.lessonsCount}
          </span>
          <span className="text-[11px] italic text-[var(--primary)] font-medium">Formato Digital</span>
        </div>
      )}
    </div>
  );
};

export default ModuleCard;
