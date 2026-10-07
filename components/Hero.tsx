import React from 'react';
import Image from 'next/image';
import Container from './Container';
import Section from './Section';
import Button from './Button';
import { contentData } from '@/data/content';

export const Hero: React.FC = () => {
  const {
    eyebrow,
    headline,
    subheadline,
    primaryCtaText,
    primaryCtaHref,
    secondaryCtaText,
    secondaryCtaHref,
    imageSrc,
    imageAlt,
    promise,
  } = contentData.hero;

  const trustItems = contentData.trustBar.items;

  return (
    <Section id="inicio" py="none" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* CONTENT COLUMN (Mobile: Stacked, Desktop: 50% / 6 cols out of 12) */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left z-10">
            {/* EYEBROW */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#4DA92C] text-xs sm:text-sm font-semibold tracking-wider text-[#4DA92C] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#4DA92C] animate-pulse" />
              <span>{eyebrow}</span>
            </div>

            {/* HEADLINE PRINCIPAL */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              {headline}
            </h1>

            {/* SUBHEADLINE */}
            <div className="bg-white border-l-4 border-[#4DA92C] p-4 text-left shadow-lg max-w-2xl mx-auto lg:mx-0 mb-4"><p className="text-[#1E4D2B] font-medium text-base sm:text-lg">{promise}</p></div>
<p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto lg:mx-0 leading-relaxed">{subheadline}</p>

            {/* CALL TO ACTION BUTTONS */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button href={primaryCtaHref} size="lg" variant="primary" className="w-full sm:w-auto">
                {primaryCtaText}
              </Button>

              {secondaryCtaText && secondaryCtaHref && (
                <Button
                  href={secondaryCtaHref}
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  {secondaryCtaText}
                </Button>
              )}
            </div>

            {/* TRUST VISUAL ELEMENT */}
            <div className="pt-6 border-t border-[var(--border)]/70 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-white">
              {trustItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-[var(--primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="font-medium text-[var(--text)]">{item.text}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-white italic text-center lg:text-left">
              Experiencia educativa de autocuidado y bienestar
            </p>
          </div>

          {/* IMAGE COLUMN (Mobile: Under content, Desktop: 50% / 6 cols out of 12) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background ambient decorative glow */}
              <div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[var(--primary-light)] to-emerald-100/40 blur-xl opacity-70 -z-10 pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Image Frame */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-[var(--border)] shadow-xl bg-transparent aspect-[4/3] sm:aspect-[14/10] lg:aspect-[4/3]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-center transform transition-transform duration-700 hover:scale-105"
                />

                {/* Subtle Editorial Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto bg-transparent/95 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-lg border border-white/60 max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--primary-light)] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      VS
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">
                        Salud & Bienestar
                      </p>
                      <p className="text-[11px] text-white">
                        Fundado por Gloria
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
