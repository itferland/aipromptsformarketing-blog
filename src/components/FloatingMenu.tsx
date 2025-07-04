import React from "react";

const menu = [
  {
    label: "Case Studies",
    href: "#success-stories",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Contact",
    href: "#contact",
  },
  {
    label: "Our Approach",
    href: "#approach",
  },
];

export default function FloatingMenu() {
  return (
    <nav
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto"
      aria-label="Floating Navigation"
    >
      <div className="bg-bg-dark/90 rounded-2xl p-3 shadow-2xl border border-white/10 flex flex-col gap-2">
        {menu.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className={
              `flex items-center font-mono text-sm md:text-base rounded-lg px-4 py-2 mb-1
              shadow-lg hover:scale-105 active:scale-95 transition-all duration-150
              bg-accent text-bg-dark hover:text-accent hover:bg-bg-dark border border-accent focus:outline-accent`
            }
            style={{
              fontFamily: "'VT323', 'Fira Mono', monospace",
              letterSpacing: "1px",
              textShadow: "0 0 8px #14E3FF, 0 0 16px #000",
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
