test("a", () => {
  vi.useFakeTimers();
  expect(vi.isFakeTimers()).toBe(true);
});
