import React from 'react';
import Image from 'next/image';
import { MaterialSupportItem } from '@/data/content';

export interface MaterialCardProps {
  material: MaterialSupportItem;
  onPreviewClick?: (imageSrc: string) => void;
}

export const MaterialCard: React.FC<MaterialCardProps> = ({ material, onPreviewClick }) => {
  const {
    title,
    description,
    primaryColor,
    accentColor,
    badgeLabel,
    imageSrc,
    imageAlt,
    isSemaforoMulti,
    pdfUrl,
    downloadFilename,
    isAvailable = false,
  } = material;

  const handleCardClick = () => {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank', 'noopener,noreferrer');
    } else if (onPreviewClick) {
      onPreviewClick(imageSrc);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-3xl border border-[#D5E8DC] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 relative"
      style={{ borderTopColor: primaryColor, borderTopWidth: '4px' }}
    >
      {/* CARD IMAGE CONTAINER */}
      <div className="relative aspect-[4/3] bg-[#FAF8F1] overflow-hidden border-b border-[#D5E8DC]/60">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />

        {/* CATEGORY BADGE */}
        <div className="absolute top-3 left-3 z-10 flex flex-wrap items-center gap-1.5">
          <span
            className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-md shadow-sm border"
            style={{
              backgroundColor: `${primaryColor}EE`,
              color: '#FFFFFF',
              borderColor: `${primaryColor}`,
            }}
          >
            {badgeLabel}
          </span>
          {accentColor && (
            <span
              className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full backdrop-blur-md shadow-sm text-white"
              style={{ backgroundColor: accentColor }}
            >
              FODMAP
            </span>
          )}
        </div>

        {/* SEMÁFORO MULTI ACCENT INDICATOR */}
        {isSemaforoMulti && (
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-white/95 backdrop-blur-md px-2 py-1 rounded-full border border-gray-200 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4DA92C]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#E76100]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#0078BF]"></span>
          </div>
        )}

        {/* AVAILABILITY BADGE IF NOT AVAILABLE */}
        {!isAvailable && (
          <div className="absolute bottom-3 right-3 z-10 bg-[#123C32]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md border border-white/20">
            🔒 Material del Curso
          </div>
        )}

        {/* HOVER OVERLAY */}
        <div className="absolute inset-0 bg-[#123C32]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-1.5 backdrop-blur-xs">
          <span>{pdfUrl ? '📄 Abrir PDF en nueva pestaña' : '🔍 Vista previa de imagen'}</span>
        </div>
      </div>

      {/* CARD CONTENT */}
      <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <h3 className="font-serif font-bold text-base sm:text-lg text-[#123C32] group-hover:text-[#4DA92C] transition-colors leading-snug">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-[#4A6B60] leading-relaxed">
            {description}
          </p>
        </div>

        {/* PDF ACTION BUTTONS */}
        <div className="pt-3 border-t border-[#D5E8DC]/60 space-y-2">
          {pdfUrl && isAvailable ? (
            <div className="grid grid-cols-1 gap-2">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-full py-2.5 px-3 rounded-xl bg-[#E76100] hover:bg-[#cf5600] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs hover:shadow-md cursor-pointer text-center"
                title={`Ver ${title} en una nueva pestaña`}
              >
                <span>👁️ VER PDF</span>
              </a>
            </div>
          ) : (
            <div className="flex items-center justify-between text-xs font-semibold text-[#4A6B60] bg-[#FAF8F1] py-2 px-3 rounded-xl border border-[#D5E8DC]">
              <span>PDF en la plataforma</span>
              <span className="text-[#E76100]">🔒 Incluido</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MaterialCard;
