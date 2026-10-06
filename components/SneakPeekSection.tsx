import React from 'react';
import Container from './Container';
import Section from './Section';

export const SneakPeekSection: React.FC = () => {
  return (
    <Section id="sneak-peek" className="py-16 sm:py-24 bg-white border-y border-[#D5E8DC]">
      <Container size="lg">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#EBF5FC] border border-[#B3DAF2] text-[#0078BF] text-xs font-extrabold uppercase tracking-wider shadow-2xs">
            Un vistazo al interior
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#123C32] tracking-tight">
            Descubre de qué trata el Método SANA
          </h2>
          <p className="text-sm sm:text-base text-[#4A6B60] leading-relaxed">
            Mira este video corto y conoce cómo puedes empezar a mejorar tu digestión desde hoy mismo, escuchando las señales de tu cuerpo.
          </p>

          <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F0F9ED] bg-black">
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/images/hero-lifestyle.jpg"
            >
              <source src="/materiales/vive-sano.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de videos.
            </video>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default SneakPeekSection;
