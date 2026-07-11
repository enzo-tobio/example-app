/// <reference types="vitest" />

import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import { playwright } from '@vitest/browser-playwright';

export default defineConfig(({ mode }) => ({
  plugins: [angular()], //b.spec.ts fails if this is included

  test: {
    globals: true,
    browser: {
      enabled: true,
      headless: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }],
      screenshotFailures: false,
      // isolate: true, //isolate works with angualr plugin again if this is set but this option is deprecated
    },
    setupFiles: ['src/test-setup.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
    maxWorkers: 1,
    cache: false,
    sequence: {
      seed: 1783698900338,
    },
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
