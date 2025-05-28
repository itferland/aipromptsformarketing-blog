/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", // Ensure this path is correct if you have a top-level components folder
  ],
  theme: {
    extend: {
      colors: {
        'brand-deep-violet': '#1a001a', // Darker, richer violet
        'brand-bg-alt': '#2a003a',    // Slightly lighter violet for cards/sections
        'brand-bg-codebox': '#0d000d', // Very dark for the code box
        'brand-text': '#e0e0e0',         // Off-white for general text
        'brand-text-muted': '#a0a0a0',   // Dimmer text
        'brand-primary-neon': '#00f0ff', // Cyan/Aqua
        'brand-secondary-neon': '#f000ff',// Magenta/Pink
        'brand-accent-neon': '#ffff00',  // Yellow
        'brand-success-neon': '#00ff00', // Bright Green
        'brand-error-neon': '#ff3333',   // Bright Red
        'brand-border': '#4a006a',      // Violet border
        'brand-cta': '#7e22ce',         // A vibrant purple for CTA, can be adjusted
        'brand-cta-hover': '#6b21a8',
      },
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'vt323': ['"VT323"', 'monospace'],
        'mono-fallback': ['Consolas', '"Courier New"', 'monospace'],
      },
      boxShadow: {
        'neon-primary': '0 0 5px #00f0ff, 0 0 10px #00f0ff, 0 0 15px #00f0ff',
        'neon-secondary': '0 0 5px #f000ff, 0 0 10px #f000ff, 0 0 15px #f000ff',
        'retro-glow': '0 0 8px rgba(0, 240, 255, 0.7), 0 0 12px rgba(0, 240, 255, 0.5)',
      },
      animation: {
        'text-flicker': 'text-flicker 3s linear infinite alternate',
        'scanline': 'scanline 10s linear infinite',
      },
      keyframes: {
        'text-flicker': {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': {
            textShadow: `
              0 0 4px #fff,
              0 0 11px #fff,
              0 0 19px #fff,
              0 0 40px var(--tw-shadow-color, #00f0ff),
              0 0 80px var(--tw-shadow-color, #00f0ff),
              0 0 90px var(--tw-shadow-color, #00f0ff),
              0 0 100px var(--tw-shadow-color, #00f0ff),
              0 0 150px var(--tw-shadow-color, #00f0ff)
            `,
            color: '#fff',
          },
          '20%, 24%, 55%': {
            textShadow: 'none',
            color: 'transparent',
          },
        },
        scanline: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100%' },
        },
      },
    },
  },
  plugins: [],
};