import React from 'react';
import Image from 'next/image';
import Container from './Container';
import Section from './Section';
import { contentData } from '@/data/content';

export const AboutGloria: React.FC = () => {
  const { eyebrow, headline, quote, bioParagraphs, imageSrc, imageAlt } = contentData.aboutGloria;
  const { ownerName, ownerRole, communityStats } = contentData.brand;

  return (
    <Section id="sobre-gloria" bgVariant="default" py="lg">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Gloria Photography Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[var(--border)] bg-white aspect-[4/5]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/50 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg">
                <p className="font-serif font-bold text-lg text-[var(--primary-dark)]">
                  {ownerName}
                </p>
                <p className="text-xs font-medium text-[var(--text-muted)]">{ownerRole}</p>
                <span className="inline-block mt-1 text-[11px] font-bold text-[var(--primary)] bg-[var(--primary-light)] px-2.5 py-0.5 rounded-full">
                  {communityStats}
                </span>
              </div>
            </div>
          </div>

          {/* Gloria Bio Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[var(--primary)] uppercase bg-[var(--primary-light)] px-3.5 py-1 rounded-full border border-[var(--border)]">
              {eyebrow}
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--primary-dark)] leading-tight">
              {headline}
            </h2>

            <blockquote className="p-4 sm:p-5 rounded-2xl bg-[var(--background-soft)] border-l-4 border-[var(--primary)] font-serif italic text-base sm:text-lg text-[var(--primary-dark)] leading-relaxed">
              {quote}
            </blockquote>

            <div className="space-y-4 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              {bioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-[var(--primary-dark)] uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                Nutrición Consciente & Inmunidad
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--secondary)]" />
                Acompañamiento Humano
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutGloria;
