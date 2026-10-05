import React from 'react';
import Container from './Container';
import Section from './Section';
import { contentData } from '@/data/content';

export const CourseModulesSection: React.FC = () => {
  const { eyebrow, title, subtitle, modules } = contentData.courseModules;

  return (
    <Section id="contenido" className="py-16 sm:py-24 bg-[#FAF8F1] border-b border-[#D5E8DC]">
      <Container size="lg">
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-14">
          <span className="inline-block text-xs font-extrabold tracking-widest text-[#0078BF] uppercase bg-[#EBF5FC] px-4 py-1.5 rounded-full border border-[#B3DAF2]">
            {eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#123C32] tracking-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#4A6B60] leading-relaxed max-w-2xl mx-auto">
            "{subtitle}"
          </p>
        </div>

        {/* 3 MODULE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modules.map((mod) => (
            <div
              key={mod.id}
              className="bg-white p-8 rounded-3xl border border-[#D5E8DC] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              style={{ borderTopColor: mod.colorAccent, borderTopWidth: '4px' }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full text-white shadow-2xs"
                    style={{ backgroundColor: mod.colorAccent }}
                  >
                    {mod.badgeLabel}
                  </span>
                  <span className="text-2xl">📚</span>
                </div>

                <h3 className="font-serif font-bold text-xl text-[#123C32] group-hover:text-[#4DA92C] transition-colors">
                  {mod.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4A6B60] leading-relaxed">
                  "{mod.description}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#D5E8DC]/60 flex items-center text-xs font-bold" style={{ color: mod.colorAccent }}>
                <span>Contenido en video + PDF</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default CourseModulesSection;
