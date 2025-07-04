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
        'dg-bg': '#0A0E1C',
        'dg-surface': '#131A2B',
        'dg-text': '#F1F5F9',
        'dg-accent': '#14E3FF',
        'dg-accent-dark': '#0ACAFF',
      },
    },
  },
  plugins: [],
}