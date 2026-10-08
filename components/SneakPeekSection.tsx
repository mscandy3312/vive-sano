import React from 'react';
import Container from './Container';
import Section from './Section';

export const SneakPeekSection: React.FC = () => {
  return (
    <Section id="sneak-peek" className="py-16 sm:py-24 bg-transparent border-y border-[#D5E8DC]">
      <Container size="lg">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ¿Te identificas?
          </h2>
          <p className="text-sm sm:text-base text-white leading-relaxed">
            Si te reconoces en esta escena, el Método SANA es para ti.
          </p>

          <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F0F9ED] bg-black">
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/images/hero-lifestyle.jpg"
            >
              <source src="/materiales/vive-sano-final.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de videos.
            </video>
          </div>

          <div className="pt-8 space-y-3">
            <p className="text-white text-sm font-bold">Da el primer paso y comienza hoy.</p>
            <a
              href="#oferta"
              className="inline-flex items-center justify-center py-4 px-10 rounded-2xl bg-[#E76100] hover:bg-[#cf5600] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider transition-all shadow-xl"
            >
              QUIERO EMPEZAR
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default SneakPeekSection;
