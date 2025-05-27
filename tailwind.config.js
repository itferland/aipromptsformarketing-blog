/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'sans': ['"Noto Sans"', 'sans-serif'],
      },
      colors: {
        'consultancy-bg': '#0f172a', // slate-900
        'consultancy-bg-alt': '#1e293b', // slate-800
        'consultancy-bg-card': '#334152', // slate-700
        'consultancy-accent': '#38bdf8', // sky-500
        'consultancy-highlight': '#818cf8', // indigo-400
        'consultancy-cta': '#a78bfa', // violet-400
        'consultancy-cta-hover': '#8b5cf6', // violet-500
        'consultancy-positive': '#22c55e', // green-500
        'consultancy-error': '#f87171', // red-400
        'consultancy-text': '#cbd5e1', // slate-300
        'consultancy-text-heading': '#e2e8f0', // slate-200
        'consultancy-text-muted': '#94a3b8', // slate-400
        'consultancy-border': '#475569', // slate-600
        'consultancy-focus-ring': '#6366f1', // indigo-500
      }
    },
  },
  plugins: [],
}
