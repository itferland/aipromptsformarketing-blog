/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{astro,html,js,jsx,ts,tsx,md}'],
  theme: {
    extend: {
      colors: {
        bg:      'var(--bg)',
        surface: 'var(--surface)',
        neon:    'var(--neon)',
        accent:  'var(--accent)',
        text:    'var(--text)',
        'terminal-bg': 'var(--bg-terminal)',
        neon1: '#7efeff',
        neon2: '#ff5af3',
        neon3: '#9eff6b',
        neon4: '#ffd76b',
        'bg-dark': '#0A0D12',
        'text-light': '#F1F5F9',
        'accent': '#14E3FF',
      },
    },
  },
  plugins: [],
}