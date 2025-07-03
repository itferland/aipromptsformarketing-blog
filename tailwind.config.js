/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{astro,html,js,jsx,ts,tsx,md}'],
  theme: {
    extend: {
      colors: {
        neon: 'var(--neon)',
        accent: 'var(--accent)',
        'terminal-bg': 'var(--bg-terminal)',
      },
    },
  },
  plugins: [],
}