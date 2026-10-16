import React from 'react';
import Image from 'next/image';
import { MaterialSupportItem } from '@/data/content';

export interface MaterialCardProps {
  material: MaterialSupportItem;
}

export const MaterialCard: React.FC<MaterialCardProps> = ({ material }) => {
  const {
    title,
    description,
    primaryColor,
    badgeLabel,
    imageSrc,
    imageAlt,
  } = material;

  return (
    <div
      className="bg-white rounded-3xl border border-[#D5E8DC] overflow-hidden shadow-md flex flex-col justify-between h-full transition-all duration-300 relative select-none"
      style={{ borderTopColor: primaryColor, borderTopWidth: '4px' }}
    >
      {/* TOP IMAGE CONTAINER: VERTICAL RATIO, CONTAINED, CRISP, NO TOOLTIP, NO LIGHTBOX */}
      <div className="p-3 sm:p-4 pb-0 bg-transparent flex flex-col items-center">
        <div className="relative w-full aspect-[3/4.2] bg-[#FAF8F1] rounded-2xl overflow-hidden border border-[#D5E8DC]/60 flex items-center justify-center p-2.5">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 25vw"
            quality={95}
            className="object-contain p-1"
          />
        </div>
      </div>

      {/* CARD CONTENT */}
      <div className="p-4 sm:p-5 pt-3 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          {/* Badge */}
          <span
            className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full text-white"
            style={{ backgroundColor: primaryColor }}
          >
            {badgeLabel}
          </span>

          <h3 className="font-serif font-bold text-sm sm:text-base text-[#123C32] leading-snug">
            {title}
          </h3>

          <p className="text-xs text-[#4A6B60] leading-relaxed">
            {description}
          </p>
        </div>

        {/* FOOTER BADGE: FIXED DIGITAL ACCESS NOTE */}
        <div className="pt-3 border-t border-[#D5E8DC]/60">
          <div className="flex items-center justify-center text-[11px] font-semibold text-[#123C32] bg-[#FAF8F1] py-1.5 px-3 rounded-xl border border-[#D5E8DC]">
            <span>Material Digital • Incluido</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialCard;
