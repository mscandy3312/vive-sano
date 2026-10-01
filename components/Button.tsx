import React from 'react';
import Link from 'next/link';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
  fullWidth?: boolean;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  ariaLabel,
  fullWidth = false,
  iconRight,
  iconLeft,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-bold tracking-wide rounded-full transition-all duration-300 ease-out cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none disabled:cursor-not-allowed min-h-[48px]';

  const variantStyles = {
    primary:
      'bg-[var(--primary-dark)] text-white hover:bg-[var(--primary)] shadow-md hover:shadow-xl border border-transparent',
    secondary:
      'bg-[var(--primary-light)] text-[var(--primary-dark)] hover:bg-[#d5e5da] border border-transparent shadow-sm',
    gold:
      'bg-[var(--secondary)] text-white hover:bg-[#b58b4b] shadow-md hover:shadow-xl border border-transparent',
    outline:
      'bg-transparent text-[var(--primary-dark)] border-2 border-[var(--primary-dark)] hover:bg-[var(--primary-dark)] hover:text-white',
  };

  const sizeStyles = {
    sm: 'text-xs sm:text-sm px-5 py-2.5 min-h-[42px]',
    md: 'text-sm sm:text-base px-7 py-3 min-h-[48px]',
    lg: 'text-base sm:text-lg px-8 py-4 min-h-[54px] tracking-wide',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`.trim();

  const content = (
    <>
      {iconLeft && <span className="mr-2 inline-flex items-center">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="ml-2 inline-flex items-center">{iconRight}</span>}
    </>
  );

  if (href && !disabled) {
    const isExternal = href.startsWith('http') || href.startsWith('https');

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          aria-label={ariaLabel}
          onClick={onClick}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedClasses}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};

export default Button;
