const execa = require("execa").shellSync;

test("Should not crash", () => {
  const { stdout } = execa("caelum");
  expect(stdout).toMatch(/Caelum/i);
});

test("key command should not crash", () => {
  const { stdout } = execa("caelum key");
  expect(stdout).toMatch(/[a-f0-9]+/);
});
