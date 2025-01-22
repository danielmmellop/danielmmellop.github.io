// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
    vite: {
      server: {
        watch: {
          usePolling: true,
        },
      },
    },
    site: 'https://danielmmellop.github.io',
    experimental: {
      svg: true,
    },
  });
