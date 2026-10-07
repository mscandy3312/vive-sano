'use client';

import React from 'react';
import Link from 'next/link';
import Button from './Button';
import { NavItem } from '@/data/content';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  ctaText: string;
  ctaHref: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  items,
  ctaText,
  ctaHref,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menú de navegación móvil"
      className="md:hidden fixed inset-0 z-40 bg-[var(--background)]/98 backdrop-blur-lg flex flex-col pt-24 px-6 pb-8 transition-all animate-fadeIn"
    >
      <nav aria-label="Navegación móvil" className="flex flex-col space-y-4 my-auto">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onClose}
            className="text-2xl font-serif font-bold text-white hover:text-[var(--primary)] py-3 border-b border-[var(--border)]/50 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="pt-6 space-y-4">
        <Button href={ctaHref} size="lg" variant="primary" fullWidth onClick={onClose}>
          {ctaText}
        </Button>
        <p className="text-xs text-center text-white italic">
          Vive Sano — Salud Digestiva & Bienestar
        </p>
      </div>
    </div>
  );
};

export default MobileMenu;
