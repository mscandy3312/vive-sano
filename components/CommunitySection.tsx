import React from 'react';
import Image from 'next/image';
import Container from './Container';
import Section from './Section';
import { contentData } from '@/data/content';

export const CommunitySection: React.FC = () => {
  const { enabled, eyebrow, headline, subheadline, statsText, imageSrc, imageAlt, highlights } =
    contentData.community;

  if (!enabled) {
    return null;
  }

  return (
    <Section id="comunidad" bgVariant="default" py="lg">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Community Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[var(--primary)] uppercase bg-[var(--primary-light)] px-3.5 py-1 rounded-full border border-[var(--border)]">
              {eyebrow}
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--primary-dark)] leading-tight">
              {headline}
            </h2>

            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              {subheadline}
            </p>

            <div className="p-4 rounded-2xl bg-[var(--primary-light)] border border-[var(--border)] flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[var(--primary-dark)] text-white flex items-center justify-center font-bold text-sm shrink-0">
                100+
              </span>
              <div>
                <p className="font-serif font-bold text-sm text-[var(--primary-dark)]">
                  {statsText}
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  Acompañamiento cercano y entorno respetuoso
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text)]">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-[var(--primary-dark)] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Community Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[var(--border)] bg-white aspect-[16/10]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-center transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/40 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 text-xs text-[var(--primary-dark)] font-serif font-bold shadow-md">
                Comunidad de Aprendizaje & Apoyo Continuo
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CommunitySection;
