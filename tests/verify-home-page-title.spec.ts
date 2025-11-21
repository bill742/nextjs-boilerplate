// spec: specs/meta-data-plan.md
// seed: tests/seed.spec.ts

import { expect, test } from "@playwright/test";

test.describe("Page Title and Document Structure", () => {
  test("Verify Home Page Title", async ({ page }) => {
    // 1. Navigate to the home page (/)
    await page.goto("http://localhost:3000/");

    // 2. Inspect the document title
    const title = await page.title();

    // 3. Verify the page title is displayed in the browser tab
    expect(title).toBe("NextJS Boilerplate");
  });
});
