import React from "react";

const menu = [
  {
    label: "Case Studies",
    href: "#success-stories",
    color: "bg-cyan-500",
  },
  {
    label: "Blog",
    href: "#blog",
    color: "bg-purple-600",
  },
  {
    label: "Contact",
    href: "#contact",
    color: "bg-yellow-400",
  },
  {
    label: "Our Approach",
    href: "#approach",
    color: "bg-red-500",
  },
];

export default function FloatingMenu() {
  return (
    <nav
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto"
      aria-label="Floating Navigation"
    >
      <div className="bg-black/70 rounded-2xl p-3 shadow-2xl border border-gray-700 flex flex-col gap-2">
        {menu.map(({ label, href, color }) => (
          <a
            key={label}
            href={href}
            className={`
              flex items-center font-mono text-sm md:text-base rounded-lg px-4 py-2 mb-1
              shadow-lg hover:scale-105 active:scale-95 transition-all duration-150
              ${color} text-white
            `}
            style={{
              fontFamily: "'VT323', 'Fira Mono', monospace",
              letterSpacing: "1px",
              textShadow: "0 0 8px #fff, 0 0 16px #000",
              boxShadow: `0 0 10px ${color.replace('bg-', '').replace('-500','')}44`,
              border: "1.5px solid #222"
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
