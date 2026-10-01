'use client';

import React from 'react';
import Button from './Button';

export interface RegistrationFormProps {
  formNameLabel: string;
  formNamePlaceholder: string;
  formEmailLabel: string;
  formEmailPlaceholder: string;
  ctaButtonText: string;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  formNameLabel,
  formNamePlaceholder,
  formEmailLabel,
  formEmailPlaceholder,
  ctaButtonText,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Prepared for Systeme.io integration in future phase
  };

  return (
    <form className="space-y-5" action="#" method="POST" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label htmlFor="reg-name" className="block text-xs font-bold text-[var(--primary-dark)]">
          {formNameLabel}
        </label>
        <input
          type="text"
          id="reg-name"
          name="name"
          required
          placeholder={formNamePlaceholder}
          className="w-full px-4 py-3 rounded-xl border border-[var(--border)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-[var(--background-soft)]"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="reg-email" className="block text-xs font-bold text-[var(--primary-dark)]">
          {formEmailLabel}
        </label>
        <input
          type="email"
          id="reg-email"
          name="email"
          required
          placeholder={formEmailPlaceholder}
          className="w-full px-4 py-3 rounded-xl border border-[var(--border)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-[var(--background-soft)]"
        />
      </div>

      <Button type="submit" size="lg" variant="primary" fullWidth className="py-4">
        {ctaButtonText}
      </Button>
    </form>
  );
};

export default RegistrationForm;
