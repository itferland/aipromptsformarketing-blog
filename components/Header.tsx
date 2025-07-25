import React from 'react';
import { Link } from 'react-router-dom';

const Header = (): React.ReactNode => {
  const navLinks = [
    { name: 'Automation SaaS', href: '/automation-saas/' },   // ← keep trailing slash
    { name: 'Consulting', href: '/consulting' },
    { name: 'About', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-[#0d0d0d]/80 backdrop-blur-sm border-b border-slate-700/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-white">
              AI Solutions Consulting
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-slate-300 hover:bg-slate-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
