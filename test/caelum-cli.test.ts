const execa = require("execa").shellSync;

test("Should not crash", () => {
  const { stdout } = execa("caelum");
  expect(stdout).toMatch(/Caelum/i);
});

test("info command should not crash", () => {
  const { stdout } = execa("caelum info");
  expect(stdout).toMatch(/info command/);
});
