// spec: specs/meta-data-plan.md
// seed: tests/seed.spec.ts

import { expect, test } from "@playwright/test";

test.describe("Page Title and Document Structure", () => {
  test("Verify HTML Language Attribute", async ({ page }) => {
    // 1. Navigate to the home page (/)
    await page.goto("http://localhost:3000/");

    // 2. Inspect the HTML element's lang attribute
    const lang = await page.locator("html").getAttribute("lang");

    // 3. Verify the language is properly set
    expect(lang).toBe("en");
  });
});
