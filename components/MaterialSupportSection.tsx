import React from 'react';
import Container from './Container';
import Section from './Section';
import MaterialCard from './MaterialCard';
import { contentData } from '@/data/content';

export const MaterialSupportSection: React.FC = () => {
  const { eyebrow, title, subtitle, materials } = contentData.materialSupport;

  // Strict order guarantee
  const orderedMaterials = [
    materials.find((m) => m.id === 'm1') || materials[0],
    materials.find((m) => m.id === 'm2') || materials[1],
    materials.find((m) => m.id === 'm3') || materials[2],
    materials.find((m) => m.id === 'm4') || materials[3],
  ].filter(Boolean);

  return (
    <Section id="materiales" className="py-16 sm:py-24 bg-transparent border-y border-[#D5E8DC]">
      <Container size="lg">
        {/* SECTION HEADER */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2">
            <span className="inline-block text-xs font-extrabold tracking-widest text-[#4DA92C] uppercase bg-transparent px-4 py-1.5 rounded-full border border-[#B8D8C2] shadow-2xs">
              {eyebrow}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {title}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* MATERIALS LAYOUT:
            - Desktop: 4 portadas en una sola línea horizontal (Grid de 4 columnas), todas del mismo tamaño.
            - Mobile: Apiladas una debajo de la otra en una sola columna.
            - Sin modales, sin lightboxes, sin tooltips al hover.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch w-full">
          {orderedMaterials.map((material) => (
            <MaterialCard
              key={material.id}
              material={material}
            />
          ))}
        </div>

        {/* INCLUDED NOTE & ASSURANCE */}
        <div className="mt-12 text-center text-xs sm:text-sm text-white font-medium bg-transparent p-5 rounded-2xl max-w-xl mx-auto border border-[#D5E8DC] shadow-xs space-y-1">
          <p className="font-bold text-white text-base">
            Consulta tus materiales desde cualquier dispositivo
          </p>
          <p className="text-white">
            Todos los materiales están incluidos dentro del curso con tu inscripción de <strong className="text-white font-bold">576.52 MXN</strong> al Método SANA.
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default MaterialSupportSection;
