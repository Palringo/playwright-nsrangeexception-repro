import test, { expect } from "@playwright/test";
import { describe } from "node:test";

describe("Tests", () => {
  test("Runs a test", async ({ page }) => {
    await page.goto('https://playwright.dev/');
    expect(await page.innerText('.navbar__title')).toBe('Playwright');
  });
});
