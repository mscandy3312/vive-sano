import React from 'react';

export interface BookMockupProps {
  title: string;
  subtitle?: string;
  badge?: string;
  coverColor?: 'emerald' | 'amber' | 'slate';
  className?: string;
}

export const BookMockup: React.FC<BookMockupProps> = ({
  title,
  subtitle = 'Vive Sano',
  badge = 'EBOOK DIGITAL',
  coverColor = 'emerald',
  className = '',
}) => {
  const bgClasses = {
    emerald: 'bg-gradient-to-br from-[var(--primary-dark)] via-[#153a29] to-[#0d261b]',
    amber: 'bg-gradient-to-br from-[#8a5d2a] via-[#6e481f] to-[#472c11]',
    slate: 'bg-gradient-to-br from-[#2c3b35] via-[#1f2c27] to-[#121c19]',
  };

  return (
    <div className={`relative perspective-1000 group ${className}`}>
      {/* Soft Ambient Glow Background */}
      <div
        className="absolute -inset-3 bg-gradient-to-tr from-[var(--primary-light)] to-amber-100/40 rounded-2xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity"
        aria-hidden="true"
      />

      {/* 3D Editorial Book Frame */}
      <div
        className={`relative z-10 w-44 sm:w-52 aspect-[3/4] ${bgClasses[coverColor]} text-white rounded-r-xl rounded-l-xs shadow-xl border-r-2 border-b-2 border-black/20 transform hover:-rotate-2 hover:scale-105 transition-all duration-400 p-4 sm:p-5 flex flex-col justify-between overflow-hidden`}
      >
        {/* Spine Shadow Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-r from-black/50 via-white/10 to-transparent z-20" />

        {/* Header Badge */}
        <div className="space-y-1.5 relative z-10">
          <span className="inline-block text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-transparent/15 text-emerald-100 backdrop-blur-xs">
            {badge}
          </span>
          <h4 className="font-serif text-base sm:text-lg font-bold tracking-tight text-amber-100 leading-snug">
            {title}
          </h4>
          <p className="text-[10px] text-emerald-200/80 font-serif italic">{subtitle}</p>
        </div>

        {/* Center Minimal Icon / Mark */}
        <div className="relative z-10 my-auto py-2 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border border-amber-200/30 bg-emerald-900/40 flex items-center justify-center p-2.5">
            <svg
              className="w-6 h-6 text-amber-200"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
            </svg>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 pt-2 border-t border-white/15 flex items-center justify-between text-[9px] text-emerald-200/70">
          <span>Manual PDF</span>
          <span>Gloria Molina</span>
        </div>

        {/* Right Page Edges Illusion */}
        <div className="absolute right-0 top-1 bottom-1 w-1.5 bg-gradient-to-l from-white/30 to-transparent" />
      </div>
    </div>
  );
};

export default BookMockup;
