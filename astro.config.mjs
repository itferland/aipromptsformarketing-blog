import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://example.com',
  integrations: [
    react(),
    tailwind({
      config: { path: './tailwind.config.js' },
      applyBaseStyles: true,
    }),
  ],
});
