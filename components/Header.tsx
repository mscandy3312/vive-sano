'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Container from './Container';
import Button from './Button';
import { contentData } from '@/data/content';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { logoText, items, ctaText, ctaHref } = contentData.navigation;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--color-background)]/95 backdrop-blur-md shadow-sm border-b border-[var(--color-border)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <Container size="lg">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link
            href="#inicio"
            aria-label="Vive Sano - Ir al inicio"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded-lg p-1"
          >
            <span className="w-8 h-8 rounded-full bg-[var(--color-primary-dark)] text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm">
              <svg
                className="w-4 h-4 text-emerald-200"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.7 3.3c-2.3 0-4.6 1.4-5.7 3.5-1.1-2.1-3.4-3.5-5.7-3.5C2.8 3.3 0 6.2 0 9.7c0 7.2 12 11 12 11s12-3.8 12-11c0-3.5-2.8-6.4-6.3-6.4zm-5.7 15.6S4 14.8 4 9.7c0-1.8 1.4-3.2 3.1-3.2 1.9 0 3.6 1.6 4.1 3.5h1.6c.5-1.9 2.2-3.5 4.1-3.5 1.7 0 3.1 1.4 3.1 3.2 0 5.1-8.1 9.2-8.1 9.2z" />
              </svg>
            </span>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[var(--color-primary-dark)]">
              {logoText}
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Navegación principal desktop"
            className="hidden md:flex items-center space-x-8"
          >
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors duration-200 relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden md:block">
            <Button href={ctaHref} size="sm" variant="primary">
              {ctaText}
            </Button>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
            aria-controls="mobile-menu"
            className="md:hidden p-2 rounded-lg text-[var(--color-primary-dark)] hover:bg-[var(--color-primary-light)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] transition-colors"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación móvil"
          className="md:hidden fixed inset-x-0 top-[65px] bg-[var(--color-background)] border-b border-[var(--color-border)] shadow-xl p-6 transition-all animate-fadeIn"
        >
          <nav className="flex flex-col space-y-4 mb-6">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] py-2 border-b border-[var(--color-border)]/40 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pt-2">
            <Button
              href={ctaHref}
              size="md"
              variant="primary"
              fullWidth
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {ctaText}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
