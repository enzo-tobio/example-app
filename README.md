This repository contains a basic app with a basic test to reproduce the issue https://github.com/analogjs/analog/issues/2222

Vitest is configure to use a single worker (see `vite.config.mts`)

There are two test files:
- example.component.spec.ts -> Runs `vi.useFaketimers()`
- main.component.spec.ts -> Standard tests

How to reproduce the issue:
- Run `npm run test`
- "app.spec.ts" tests will timeout if "example.component.spec.ts" was executed first. With this my assumption is that the test are not isolated
