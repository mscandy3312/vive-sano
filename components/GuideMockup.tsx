import React from 'react';

export const GuideMockup: React.FC = () => {
  return (
    <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none py-6">
      {/* Background Soft Glow */}
      <div
        className="absolute -inset-4 bg-gradient-to-tr from-[var(--primary-light)] via-emerald-100/50 to-amber-100/30 rounded-3xl blur-2xl opacity-80 -z-10"
        aria-hidden="true"
      />

      {/* 3D Editorial Book Container */}
      <div className="relative z-10 flex items-center justify-center perspective-1000">
        <div className="relative w-64 sm:w-72 md:w-80 aspect-[3/4] bg-[var(--primary-dark)] rounded-r-2xl rounded-l-sm shadow-2xl border-r-4 border-b-4 border-amber-900/20 transform hover:-rotate-1 hover:scale-105 transition-all duration-500 overflow-hidden flex flex-col justify-between p-6 text-white group">
          
          {/* Decorative Book Texture & Spine Accent */}
          <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/40 via-white/10 to-transparent z-20" />
          
          {/* Book Header */}
          <div className="relative z-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-emerald-200 text-[10px] uppercase font-bold tracking-widest backdrop-blur-sm">
              <span>EBOOK EXCLUSIVO</span>
            </div>
            <p className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-amber-100 leading-tight">
              GUÍA DIGITAL
            </p>
            <p className="text-xs text-emerald-200 font-serif italic">Vive Sano</p>
          </div>

          {/* Book Center Illustration / Symbol */}
          <div className="relative z-10 my-auto py-6 flex items-center justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-amber-200/30 bg-emerald-900/40 flex items-center justify-center p-4">
              <svg
                className="w-12 h-12 text-amber-200"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
              </svg>
            </div>
          </div>

          {/* Book Footer */}
          <div className="relative z-10 border-t border-emerald-800/60 pt-4 flex items-center justify-between text-[11px] text-emerald-100/80">
            <span>Manual Práctico PDF</span>
            <span>Edición 2026</span>
          </div>

          {/* Page Edge Shadow Layer */}
          <div className="absolute right-0 top-2 bottom-2 w-2 bg-gradient-to-l from-white/30 to-transparent" />
        </div>

        {/* Secondary Internal Page Sheet Mockup */}
        <div className="absolute top-4 -right-4 sm:-right-8 w-56 sm:w-64 aspect-[3/4] bg-white rounded-r-xl rounded-l-sm shadow-lg border border-[var(--border)] -z-10 transform rotate-6 p-4 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="h-3 bg-[var(--primary-light)] rounded w-3/4" />
            <div className="h-2 bg-[var(--background-soft)] rounded w-full" />
            <div className="h-2 bg-[var(--background-soft)] rounded w-5/6" />
            <div className="h-2 bg-[var(--background-soft)] rounded w-2/3" />
          </div>

          <div className="grid grid-cols-2 gap-2 my-2">
            <div className="h-16 bg-emerald-50 rounded border border-emerald-100 p-2">
              <div className="h-2 bg-emerald-200 rounded w-full mb-1" />
              <div className="h-1.5 bg-emerald-100 rounded w-2/3" />
            </div>
            <div className="h-16 bg-amber-50 rounded border border-amber-100 p-2">
              <div className="h-2 bg-amber-200 rounded w-full mb-1" />
              <div className="h-1.5 bg-amber-100 rounded w-2/3" />
            </div>
          </div>

          <div className="text-[9px] text-center text-[var(--text-muted)] font-mono">
            Tablas & Recetas Prácticas
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideMockup;
