// tailwind.config.js
module.exports = {
  // Your Tailwind configuration goes here
  // For example:
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        'dg-bg':     '#0A0E1C',
        'dg-surface': '#131A2B',
        'dg-text':   '#F1F5F9',
        'dg-accent': '#14E3FF',
        'dg-accent-dark': '#0ACAFF',
      },
    },
  },
  plugins: [],
};