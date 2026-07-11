This repository contains a basic app with a basic test to reproduce the issue https://github.com/analogjs/analog/issues/2222

Vitest is configure to use a single worker (see `vite.config.mts`)

There are two test files:
- a.spec.ts:
```ts
test("a", () => {
  vi.useFakeTimers();
  expect(vi.isFakeTimers()).toBe(true);
});
```
- b.spec.ts:
```ts
test('b', () => {
  expect(vi.isFakeTimers()).toBe(false);
});
```
_b.spec.ts_ fails because faketimers are still enabled.

Both tests are passing fine wwhen using **one** the following configs.

a) Remove angular plugin:
```ts
export default defineConfig(({ mode }) => ({
  plugins: [angular()], // Both tests passes when this is removed
  ...
}}
```
b) Set browser.isolate: true
```ts
export default defineConfig(({ mode }) => ({
    ...
  test: {
    browser: {
        isolate: true //isolate works with angular plugin if this is set but this option is deprecated
        ...
    }
  }
  ...
}}
```

How to reproduce the issue:
- Run `npm run test`
