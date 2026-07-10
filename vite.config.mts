/// <reference types="vitest" />

import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import { playwright } from '@vitest/browser-playwright';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [angular(), viteTsConfigPaths()],

  test: {
    globals: true,

    browser: {
      enabled: true,
      headless: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }],
      screenshotFailures: false,
    },

    setupFiles: ['src/test-setup.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
    maxWorkers: 1,
    cache: false,
    sequence: {
      shuffle: true,
    },
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
