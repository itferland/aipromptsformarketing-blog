// tailwind.config.js
/** @type {import(&#39;tailwindcss&#39;).Config} */
export default {
  content: [
    &quot;./index.html&quot;,
    &quot;./src/**/*.{js,ts,jsx,tsx}&quot;,
    &quot;./components/**/*.{js,ts,jsx,tsx}&quot;, // Ensure this points to your actual components folder
  ],
  theme: {
    extend: {
      colors: {
        &#39;jules-bg&#39;: &#39;#030310&#39;, // Very dark, almost black with a hint of blue/purple
        &#39;jules-bg-panel&#39;: &#39;#0A0A1A&#39;, // Slightly lighter for panels/cards
        &#39;jules-bg-header&#39;: &#39;#080818&#39;, // Header background
        &#39;jules-text-green&#39;: &#39;#39FF14&#39;, // Classic neon green
        &#39;jules-text-green-dim&#39;: &#39;#2CAF0F&#39;, // Dimmer green for less emphasis
        &#39;jules-text-light&#39;: &#39;#E0E0E0&#39;,   // A light grey/off-white for secondary text
        &#39;jules-cyan&#39;: &#39;#00FFFF&#39;,
        &#39;jules-magenta&#39;: &#39;#FF00FF&#39;,
        &#39;jules-yellow&#39;: &#39;#FFFF00&#39;,
        &#39;jules-border&#39;: &#39;#22FF22&#39;,      // Green border for panels
        &#39;jules-border-accent&#39;: &#39;#00FFFF&#39;, // Cyan border for accents
        &#39;jules-link-hover&#39;: &#39;#FFFF00&#39;, // Yellow for link hover
      },
      fontFamily: {
        &#39;press-start&#39;: [&#39;&quot;Press Start 2P&quot;&#39;, &#39;cursive&#39;],
        &#39;vt323&#39;: [&#39;&quot;VT323&quot;&#39;, &#39;monospace&#39;], // Good for body/terminal text
        &#39;mono&#39;: [&#39;&quot;Courier New&quot;&#39;, &#39;monospace&#39;],   // Fallback mono
      },
      boxShadow: {
        &#39;neon-green&#39;: &#39;0 0 3px #39FF14, 0 0 6px #39FF14, 0 0 9px #39FF14&#39;,
        &#39;neon-cyan&#39;: &#39;0 0 3px #00FFFF, 0 0 6px #00FFFF, 0 0 9px #00FFFF&#39;,
        &#39;panel-glow&#39;: &#39;0 0 10px rgba(57, 255, 20, 0.3)&#39;, // Subtle green glow for panels
      },
      animation: {
        &#39;scanline-effect&#39;: &#39;scanline 10s linear infinite&#39;,
        &#39;text-glow&#39;: &#39;textGlow 1.5s ease-in-out infinite alternate&#39;,
        &#39;cursor-blink&#39;: &#39;blink 1s step-end infinite&#39;,
      },
      keyframes: {
        scanline: {
          &#39;0%&#39;: { backgroundPosition: &#39;0 0&#39; },
          &#39;100%&#39;: { backgroundPosition: &#39;0 100%&#39; },
        },
        textGlow: {
          &#39;from&#39;: { textShadow: &#39;0 0 2px #22FF22, 0 0 4px #22FF22, 0 0 6px #22FF22&#39; },
          &#39;to&#39;: { textShadow: &#39;0 0 4px #39FF14, 0 0 8px #39FF14, 0 0 10px #39FF14, 0 0 12px #39FF14&#39; },
        },
        blink: {
          &#39;from, to&#39;: { opacity: 1 },
          &#39;50%&#39;: { opacity: 0 },
        },
      },
    },
  },
  plugins: [
    require(&#39;@tailwindcss/typography&#39;), // For styling markdown content in modals
  ],
};