import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Programa Vive Sano | Gloria Molina',
  description: 'Conoce el programa completo de acompañamiento Vive Sano por Gloria Molina.',
};

export default function ProgramaPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F1] text-[#123C32] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-[#D5E8DC] shadow-xl space-y-4">
        <span className="w-12 h-12 rounded-full bg-[#EEF7F0] text-[#1F6B50] flex items-center justify-center font-bold text-2xl mx-auto border border-[#B8D8C2]">
          🌱
        </span>
        <h1 className="font-serif text-2xl font-bold">Programa Vive Sano</h1>
        <p className="text-xs text-[#4A6B60] leading-relaxed">
          Esta página está preparada para alojar la futura carta de venta del programa completo de acompañamiento por Gloria Molina.
        </p>
        <Link
          href="/"
          className="inline-block w-full py-3 px-6 rounded-2xl bg-[#1F6B50] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#123C32] transition-colors"
        >
          ← Volver a la Guía Gratuita
        </Link>
      </div>
    </div>
  );
}
