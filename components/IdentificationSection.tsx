import React from 'react';
import Image from 'next/image';
import Container from './Container';
import Section from './Section';
import { contentData } from '@/data/content';

export const IdentificationSection: React.FC = () => {
  const { eyebrow, headline, content, quote, imageSrc, imageAlt } = contentData.identification;

  return (
    <Section id="perspectiva" bgVariant="default" py="lg">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Editorial Image Column */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[var(--border)] bg-transparent aspect-[4/5]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-transparent/90 backdrop-blur-md border border-white/40 text-xs sm:text-sm font-serif italic text-white">
                {quote}
              </div>
            </div>
          </div>

          {/* Narrative Content Column */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[var(--primary)] uppercase bg-[var(--primary-light)] px-3.5 py-1 rounded-full border border-[var(--border)]">
              {eyebrow}
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              {headline}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-white leading-relaxed">
              {content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[var(--background-soft)] border border-[var(--border)]">
                <p className="font-serif font-bold text-white text-base">Claridad</p>
                <p className="text-xs text-white mt-1">Sin información contradictoria ni reglas imposibles.</p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--background-soft)] border border-[var(--border)]">
                <p className="font-serif font-bold text-white text-base">Educación</p>
                <p className="text-xs text-white mt-1">Comprende la razón detrás de cada recomendación.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default IdentificationSection;
