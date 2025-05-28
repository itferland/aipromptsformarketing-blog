/** @type {import('tailwindcss').Config} */
export default { // Or module.exports = if not using ES modules in this file
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}", // Corrected path
],
  theme: {
    extend: {
      // Your theme extensions
      // For example, if you have custom colors like 'consultancy-bg-alt':
      // colors: {
      //   'consultancy-bg-alt': '#your_color_code',
      //   'consultancy-cta': '#your_color_code',
      //   'consultancy-highlight': '#your_color_code',
      //   // ... etc.
      // },
    },
  },
  plugins: [],
}