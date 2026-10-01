import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Button from '@/components/Button';
import Footer from '@/components/Footer';
import { contentData } from '@/data/content';
import { siteConfig, getWhatsAppLink } from '@/lib/config';

export const metadata: Metadata = {
  title: contentData.graciasPage.title,
  description: contentData.graciasPage.subheadline,
};

export default function GraciasPage() {
  const { headline, subheadline, steps, ctaButtonText, whatsappSupportText } =
    contentData.graciasPage;
  const whatsappUrl = getWhatsAppLink('Hola Gloria, acabo de registrarme y tengo una consulta sobre mi acceso a Vive Sano.');
  const accessUrl = siteConfig.productAccessUrl !== '#' ? siteConfig.productAccessUrl : '#';

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      {/* HEADER */}
      <header className="py-6 border-b border-[var(--border)] bg-white">
        <Container size="lg">
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="Vive Sano - Ir al inicio" className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[var(--primary-dark)] text-white flex items-center justify-center font-bold text-xs">
                VS
              </span>
              <span className="font-serif text-2xl font-bold text-[var(--primary-dark)]">
                VIVE SANO
              </span>
            </Link>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              ✓ Confirmación de Acceso
            </span>
          </div>
        </Container>
      </header>

      {/* THANK YOU CONTENT */}
      <main className="flex-1 py-12 md:py-20">
        <Section py="none">
          <Container size="md">
            <div className="bg-white rounded-3xl border border-[var(--border)] shadow-xl p-6 sm:p-12 space-y-10 max-w-3xl mx-auto text-center">
              {/* Checkmark Icon & Header */}
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[var(--primary-dark)] flex items-center justify-center font-bold text-2xl mx-auto">
                  ✓
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--primary-dark)] leading-tight">
                  {headline}
                </h1>
                <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
                  {subheadline}
                </p>
              </div>

              {/* 4 Steps Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left border-y border-[var(--border)] py-8">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="p-4 rounded-2xl bg-[var(--background-soft)] border border-[var(--border)] space-y-2"
                  >
                    <span className="font-serif text-2xl font-bold text-[var(--primary-dark)] opacity-40">
                      {step.number}
                    </span>
                    <h2 className="font-serif font-bold text-sm text-[var(--primary-dark)]">
                      {step.title}
                    </h2>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Access Button & WhatsApp Support */}
              <div className="space-y-6 pt-2">
                <Button href={accessUrl} size="lg" variant="primary" className="px-10 py-4 text-lg">
                  {ctaButtonText}
                </Button>

                <div className="pt-4 border-t border-[var(--border)]/60">
                  <p className="text-xs text-[var(--text-muted)] mb-3">{whatsappSupportText}</p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-full transition-colors border border-emerald-200"
                  >
                    <span>💬 Contactar a Gloria por WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
