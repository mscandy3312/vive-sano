import React from 'react';
import { TestimonialItem } from '@/data/content';

export interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-[var(--surface)] p-6 sm:p-8 rounded-2xl border border-[var(--border)] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full min-w-[280px] sm:min-w-0">
      <div className="space-y-4">
        {/* Rating Stars */}
        <div className="flex items-center gap-1 text-amber-400">
          {[...Array(testimonial.rating || 5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 fill-current"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Comment Text */}
        <p className="text-xs sm:text-sm text-[var(--text)] italic leading-relaxed">
          &ldquo;{testimonial.comment}&rdquo;
        </p>
      </div>

      {/* Author Details */}
      <div className="pt-6 mt-6 border-t border-[var(--border)]/60 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white text-[#4DA92C] font-bold text-sm flex items-center justify-center shrink-0">
          {testimonial.name.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <h4 className="font-serif font-bold text-sm text-[var(--primary-dark)]">
            {testimonial.name}
          </h4>
          {testimonial.role && (
            <p className="text-[11px] text-[var(--text-muted)]">{testimonial.role}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
