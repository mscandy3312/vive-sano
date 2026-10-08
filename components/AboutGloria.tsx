import React from 'react';
import Image from 'next/image';
import Container from './Container';
import Section from './Section';
import { contentData } from '@/data/content';

export const AboutGloria: React.FC = () => {
  const { eyebrow, title, copy, quote, signatureText, imageSrc, imageAlt, name, role } = contentData.aboutGloria;

  return (
    <Section id="conoce-vive-sano" className="py-16 sm:py-24 bg-transparent border-b border-[#D5E8DC]">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* REAL PHOTOGRAPHY FRAME */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#D5E8DC] bg-transparent aspect-[4/5]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123C32]/85 via-transparent to-transparent flex items-end p-6">
                <div className="text-white text-left space-y-1">
                  <p className="font-serif font-bold text-xl text-white">
                    {name}
                  </p>
                  <p className="text-xs text-[#B8D8C2] font-semibold">
                    {role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* GLORIA BIO CONTENT */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-block text-xs font-extrabold tracking-widest text-[#4DA92C] uppercase bg-transparent px-4 py-1.5 rounded-full border border-[#B8D8C2]">
              {eyebrow}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              {title}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-white leading-relaxed">
              <p className="text-base sm:text-lg text-white font-medium leading-relaxed">
                {copy}
              </p>
            </div>

            <blockquote className="p-4 sm:p-5 rounded-2xl bg-transparent font-serif italic text-sm sm:text-base text-white leading-relaxed">
              {quote}
            </blockquote>

            <p className="text-xs font-extrabold text-white uppercase tracking-wider">
              {signatureText}
            </p>
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default AboutGloria;
