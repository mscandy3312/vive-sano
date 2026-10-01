import React from 'react';
import Link from 'next/link';
import Container from './Container';
import { contentData } from '@/data/content';

export const Footer: React.FC = () => {
  const { name, copyright, disclaimer } = contentData.brand;
  const { links, legalLinks } = contentData.footer;

  return (
    <footer className="bg-[var(--primary-dark)] text-emerald-100 border-t border-emerald-900/60 pt-16 pb-12">
      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-emerald-800/40">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <Link
              href="#inicio"
              aria-label="Vive Sano - Ir al inicio"
              className="inline-flex items-center gap-2"
            >
              <span className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
                VS
              </span>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                {name}
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-emerald-200/80 max-w-md leading-relaxed">
              Una experiencia educativa de Vive Sano para aprender, comprender y construir hábitos relacionados con tu bienestar digestivo.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">
              Navegación
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-emerald-200/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">
              Legales
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-emerald-200/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 space-y-4 text-center md:text-left text-xs text-emerald-300/60 leading-relaxed">
          <p>{disclaimer}</p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-emerald-900/40">
            <p>{copyright}</p>
            <p className="italic">Propietaria & Fundadora: Gloria</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
