import React from 'react';
import Image from 'next/image';
import { MaterialSupportItem } from '@/data/content';

export interface MaterialCardProps {
  material: MaterialSupportItem;
  onPreviewClick?: (imageSrc: string) => void;
}

export const MaterialCard: React.FC<MaterialCardProps> = ({ material, onPreviewClick }) => {
  const { title, description, primaryColor, accentColor, badgeLabel, imageSrc, imageAlt, isSemaforoMulti } = material;

  return (
    <div
      onClick={() => onPreviewClick && onPreviewClick(imageSrc)}
      className="bg-white rounded-3xl border border-[#D5E8DC] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 relative"
      style={{ borderTopColor: primaryColor, borderTopWidth: '4px' }}
    >
      {/* CARD IMAGE CONTAINER */}
      <div className="relative aspect-[16/10] bg-[#FAF8F1] overflow-hidden border-b border-[#D5E8DC]/60">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 350px"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* CATEGORY BADGE */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
          <span
            className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-md shadow-2xs border"
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
              className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full backdrop-blur-md shadow-2xs text-white"
              style={{ backgroundColor: accentColor }}
            >
              FODMAP
            </span>
          )}
        </div>

        {/* SEMÁFORO MULTI ACCENT INDICATOR */}
        {isSemaforoMulti && (
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-white/95 backdrop-blur-md px-2 py-1 rounded-full border border-gray-200 shadow-2xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4DA92C]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#E76100]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#0078BF]"></span>
          </div>
        )}

        {/* HOVER OVERLAY */}
        <div className="absolute inset-0 bg-[#123C32]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-1.5 backdrop-blur-2xs">
          <span>🔍 Ver Material de Apoyo</span>
        </div>
      </div>

      {/* CARD CONTENT */}
      <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <h3 className="font-serif font-bold text-base sm:text-lg text-[#123C32] group-hover:text-[#4DA92C] transition-colors leading-snug">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-[#4A6B60] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="pt-3 border-t border-[#D5E8DC]/60 flex items-center justify-between text-xs font-semibold" style={{ color: primaryColor }}>
          <span>Material PDF Incluido</span>
          <span className="group-hover:translate-x-1 transition-transform">⬇️</span>
        </div>
      </div>
    </div>
  );
};

export default MaterialCard;
