
import React from 'react';
import { ArcadeText } from './ArcadeText';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-8 md:py-16 border-b border-consultancy-border last:border-b-0 ${className}`}>
      <ArcadeText 
        as="h2" 
        id={`${id}-title`}
        className="text-xl md:text-2xl lg:text-3xl text-consultancy-accent mb-8 md:mb-12 text-center"
      >
        {title}
      </ArcadeText>
      {children}
    </section>
  );
};
