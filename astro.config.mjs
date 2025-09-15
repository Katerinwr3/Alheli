// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  build: {
    assets: '_astro',
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      cssCodeSplit: false
    }
  }
});