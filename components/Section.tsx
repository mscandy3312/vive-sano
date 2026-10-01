import React from 'react';

export interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  bgVariant?: 'default' | 'soft' | 'primary' | 'white';
  py?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  ariaLabel?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  bgVariant = 'default',
  py = 'lg',
  ariaLabel,
}) => {
  const bgClasses = {
    default: 'bg-[var(--color-background)] text-[var(--color-text)]',
    soft: 'bg-[var(--color-background-soft)] text-[var(--color-text)]',
    primary: 'bg-[var(--color-primary-dark)] text-white',
    white: 'bg-white text-[var(--color-text)]',
  };

  const paddingClasses = {
    none: 'py-0',
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-20 md:py-32',
  };

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`relative w-full transition-colors duration-300 ${bgClasses[bgVariant]} ${paddingClasses[py]} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
