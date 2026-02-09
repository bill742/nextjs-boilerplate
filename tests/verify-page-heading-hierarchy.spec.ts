// spec: specs/meta-data-plan.md
// seed: tests/seed.spec.ts

import { expect, test } from "@playwright/test";

test.describe("Page Title and Document Structure", () => {
  test("Verify Page Heading Hierarchy", async ({ page }) => {
    // 1. Navigate to the home page (/)
    await page.goto("./");

    // 2. Locate the main heading in the header
    const header = page.locator("header");
    await expect(header).toBeVisible();

    // 3. Verify the heading level and content
    const h1 = await page.locator("header h1").textContent();
    expect(h1?.trim()).toBe("NextStarter");

    const h2 = await page.locator("main h2, header h2").first().textContent();
    expect(h2?.trim()).toBe("About NextStarter");
  });
});
