import React, { useEffect, useState } from "react";
import { Moon, Sun, Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const THEMES = [
  {
    key: "midnight",
    label: "Synth",
    icon: <Moon size={14} />,
    aria: "Switch to green-on-black theme",
  },
  {
    key: "green",
    label: "Green",
    icon: <Sun size={14} />,
    aria: "Switch to solarized dark theme",
  },
  {
    key: "solarized",
    label: "Solar",
    icon: <Palette size={14} />,
    aria: "Switch to synthwave theme",
  },
];

export default function ThemeToggle() {
  // read saved theme, else fall back to midnight
  const [theme, setTheme] = useState(
    () => typeof window !== "undefined" ? localStorage.getItem("theme") || "midnight" : "midnight"
  );
  const [fade, setFade] = useState(false);

  // Animate palette swap with fade
  useEffect(() => {
    if (!fade) return;
    const timeout = setTimeout(() => setFade(false), 350);
    return () => clearTimeout(timeout);
  }, [fade]);

  // keep <html data-theme="…"> in sync
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const root = document.documentElement;
    if (theme === "midnight") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", theme);
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Cycle through all themes
  const idx = THEMES.findIndex(t => t.key === theme);
  const next = THEMES[(idx + 1) % THEMES.length];

  const handleClick = () => {
    setFade(true);
    setTheme(next.key);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="inline-flex items-center gap-1 px-2 py-1 rounded border-neon hover:neon-glow focus-visible:outline-neon"
        aria-label={next.aria}
      >
        {next.icon}
        {next.label}
      </button>
      <AnimatePresence>
        {fade && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 pointer-events-none z-50 bg-[--bg]"
            style={{ background: 'var(--bg)' }}
          />
        )}
      </AnimatePresence>
    </>
  );
} 