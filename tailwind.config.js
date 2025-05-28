import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        press: ["'Press Start 2P'", ...defaultTheme.fontFamily.mono],
        vt: ["VT323", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        'brand-deep-violet': '#1c1b2f',
        'brand-bg-alt': '#1a1a2e',
        'brand-bg-codebox': '#101015',
        'brand-text': '#d1f7c4',
        'brand-text-muted': '#7dd87d',
        'brand-neon-green': '#39ff14',
        'brand-neon-blue': '#00ffff',
        'brand-neon-pink': '#ff69b4',
      },
      boxShadow: {
        neon: '0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14',
      },
      animation: {
        flicker: "flicker 1.5s infinite alternate",
        scanline: "scanline 4s linear infinite"
      },
      keyframes: {
        flicker: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0.8' },
          '100%': { opacity: '1' },
        },
        scanline: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;
