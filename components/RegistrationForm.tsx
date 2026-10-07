'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export interface RegistrationFormProps {
  formNameLabel?: string;
  formNamePlaceholder?: string;
  formEmailLabel?: string;
  formEmailPlaceholder?: string;
  ctaButtonText?: string;
  systemeActionUrl?: string; // If integration is provided
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  formNameLabel = 'Nombre completo',
  formNamePlaceholder = 'Ingresa tu nombre',
  formEmailLabel = 'Correo electrónico',
  formEmailPlaceholder = 'tu@correo.com',
  ctaButtonText = 'REGISTRARME AHORA',
  systemeActionUrl,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    acceptPrivacy: false,
    acceptPromotions: false,
    honeypot: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim()) {
      setErrorMessage('Por favor, ingresa tu nombre completo.');
      return;
    }
    
    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    if (!formData.acceptPrivacy) {
      setErrorMessage('Debes aceptar el aviso de privacidad para continuar.');
      return;
    }

    // Anti-spam honeypot check
    if (formData.honeypot) {
      setErrorMessage('Se ha detectado actividad inusual.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // Simulate network request or use actual integration if systemeActionUrl is provided
      if (systemeActionUrl) {
        // Native form submission logic could go here, or a fetch to a webhook.
        // For security and UX, we simulate the fetch or use a hidden iframe submission if needed.
        // Assuming fetch is allowed (CORS enabled on the endpoint):
        await fetch(systemeActionUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
          mode: 'no-cors' // often needed for 3rd party webhooks like Systeme
        });
      } else {
        // Mock delay for UX if no URL is provided yet
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      setStatus('success');
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        acceptPrivacy: false,
        acceptPromotions: false,
        honeypot: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage('Ocurrió un problema al enviar tu registro. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="w-full bg-transparent p-6 sm:p-8 rounded-3xl border border-[#D5E8DC] shadow-xl">
      {status === 'success' ? (
        <div className="text-center space-y-4 py-8" role="alert" aria-live="polite">
          <div className="w-16 h-16 bg-transparent text-[#4DA92C] rounded-full flex items-center justify-center mx-auto text-3xl mb-4 border border-[#B8D8C2]">
            ✓
          </div>
          <h3 className="font-serif text-2xl font-bold text-white">¡Registro exitoso!</h3>
          <p className="text-sm text-white">
            Hemos recibido tus datos correctamente. Revisa tu correo electrónico para continuar.
          </p>
        </div>
      ) : (
        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
          {/* Informational Text */}
          <div className="text-xs text-white bg-transparent p-4 rounded-xl border border-[#B8D8C2] mb-6 leading-relaxed">
            <p>
              Para proporcionar acceso al curso digital Método SANA y sus materiales complementarios, recopilamos tu nombre completo y correo electrónico. También pueden tratarse datos técnicos de acceso, como dirección IP, tipo de navegador y dispositivo, conforme a lo establecido en nuestro aviso de privacidad.
            </p>
            <p className="mt-2 font-semibold">
              Responsable: Gloria Molina (Vive Sano) | Contacto: <a href="mailto:gloria@vive-sano.mx" className="text-[#0078BF] hover:underline">gloria@vive-sano.mx</a>
            </p>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="text-xs text-white bg-red-600 p-3 rounded-xl font-medium" role="alert" aria-live="assertive">
              {errorMessage}
            </div>
          )}

          {/* Full Name */}
          <div className="space-y-1.5">
            <label htmlFor="reg-name" className="block text-xs font-bold text-white">
              {formNameLabel} <span className="text-red-500" aria-label="obligatorio">*</span>
            </label>
            <input
              type="text"
              id="reg-name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder={formNamePlaceholder}
              disabled={status === 'loading'}
              aria-required="true"
              className="w-full px-4 py-3 rounded-xl border border-[#D5E8DC] text-sm focus:outline-none focus:ring-2 focus:ring-[#0078BF] bg-transparent transition-colors disabled:opacity-50"
            />
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label htmlFor="reg-email" className="block text-xs font-bold text-white">
              {formEmailLabel} <span className="text-red-500" aria-label="obligatorio">*</span>
            </label>
            <input
              type="email"
              id="reg-email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder={formEmailPlaceholder}
              disabled={status === 'loading'}
              aria-required="true"
              className="w-full px-4 py-3 rounded-xl border border-[#D5E8DC] text-sm focus:outline-none focus:ring-2 focus:ring-[#0078BF] bg-transparent transition-colors disabled:opacity-50"
            />
          </div>

          {/* Honeypot (Anti-spam) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="reg-honeypot">No llenar este campo</label>
            <input
              type="text"
              id="reg-honeypot"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={handleChange}
            />
          </div>

          {/* Consents */}
          <div className="space-y-4 pt-2">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                name="acceptPrivacy"
                checked={formData.acceptPrivacy}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
                aria-required="true"
                className="mt-1 w-4 h-4 rounded border-[#D5E8DC] text-[#0078BF] focus:ring-[#0078BF] cursor-pointer"
              />
              <span className="text-xs text-white leading-snug group-hover:text-white transition-colors">
                He leído el <Link href="/privacidad" target="_blank" className="text-[#0078BF] hover:underline font-semibold">aviso de privacidad</Link> y conozco el tratamiento de mis datos personales para gestionar mi registro y acceso al curso Método SANA. <span className="text-red-500">*</span>
              </span>
            </label>

            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                name="acceptPromotions"
                checked={formData.acceptPromotions}
                onChange={handleChange}
                disabled={status === 'loading'}
                className="mt-1 w-4 h-4 rounded border-[#D5E8DC] text-[#0078BF] focus:ring-[#0078BF] cursor-pointer"
              />
              <span className="text-xs text-white leading-snug group-hover:text-white transition-colors">
                Deseo recibir por correo electrónico contenido educativo, novedades y promociones de Vive Sano. (Opcional)
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-4 px-6 rounded-2xl bg-[#E76100] hover:bg-[#cf5600] text-white font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none mt-6"
          >
            {status === 'loading' ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                PROCESANDO...
              </span>
            ) : (
              ctaButtonText
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;
