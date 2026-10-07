"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { MaterialSupportItem } from '@/data/content';

export interface MaterialCardProps {
  material: MaterialSupportItem;
  onPreviewClick?: (imageSrc: string) => void;
}

export const MaterialCard: React.FC<MaterialCardProps> = ({ material, onPreviewClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      setIsModalOpen(true);
    } else if (onPreviewClick) {
      onPreviewClick(imageSrc);
    }
  };

  return (
    <>
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
              <button
                onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}
                className="w-full py-2.5 px-3 rounded-xl bg-[#E76100] hover:bg-[#cf5600] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs hover:shadow-md cursor-pointer text-center"
                title={`Ver ${title}`}
              >
                <span>👁️ VER PDF</span>
              </button>
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

      {/* PDF MODAL */}
      {isModalOpen && pdfUrl && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6" 
          onClick={(e) => { e.stopPropagation(); setIsModalOpen(false); }}
        >
          <div 
            className="relative w-full max-w-5xl h-[85vh] bg-white rounded-2xl overflow-hidden flex flex-col shadow-2xl" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4" style={{ backgroundColor: '#123C32', color: 'white' }}>
              <h3 className="font-bold text-lg">{title}</h3>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none"
                aria-label="Cerrar modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            {/* Modal Body (Iframe) */}
            <div className="flex-1 w-full bg-gray-100 relative">
              <img 
                src={imageSrc}
                className="w-full h-full border-0 absolute inset-0"
                title={`PDF: ${title}`}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MaterialCard;
