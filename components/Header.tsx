
import React from 'react';
import { NavItem } from '../types';
import { ArcadeText } from './ArcadeText';

interface HeaderProps {
  title: string;
  navItems: NavItem[];
}

export const Header: React.FC<HeaderProps> = ({ title, navItems }) => {
  return (
    <header className="bg-consultancy-bg-alt sticky top-0 z-50 shadow-lg border-b-2 border-consultancy-cta">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <ArcadeText as="h1" className="text-xl md:text-2xl text-consultancy-highlight tracking-wider mb-4 sm:mb-0">
          {title}
        </ArcadeText>
        <nav>
          <ul className="flex space-x-3 sm:space-x-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-press-start text-xs md:text-sm text-consultancy-accent hover:text-consultancy-highlight transition-colors duration-200 ease-in-out"
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
