import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";  // optional icon lib

export default function ThemeToggle() {
  // read saved theme, else fall back to midnight
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "midnight"
  );

  // keep <html data-theme="…"> in sync
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "midnight") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", theme);
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const next = theme === "midnight" ? "green" : "midnight";
  const label =
    next === "green"
      ? "Switch to green-on-black theme"
      : "Switch to synthwave theme";

  return (
    <button
      onClick={() => setTheme(next)}
      className="inline-flex items-center gap-1 px-2 py-1 rounded border-neon hover:neon-glow focus-visible:outline-neon"
      aria-label={label}
    >
      {next === "green" ? <Sun size={14} /> : <Moon size={14} />}
      {next === "green" ? "Green" : "Synth"}
    </button>
  );
} 