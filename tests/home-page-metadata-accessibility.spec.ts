import AxeBuilder from "@axe-core/playwright";

import { expect, test } from "@playwright/test";

test.describe("Homepage does not have accessiblity issues", () => {
  test("Should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("./");

    console.log("Running accessibility scan on homepage");

    // Test light mode
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);

    // Test dark mode
    const themeToggle = page.locator("#themeToggle");
    await themeToggle.first().click();
    console.log("Switching to Dark mode for accessibility testing");
    // await page.getByRole("menuitem", { name: "Dark" }).click();
    const darkModeAccessibilityScanResults = await new AxeBuilder({
      page,
    }).analyze();
    expect(darkModeAccessibilityScanResults.violations).toEqual([]);
  });
});

test.describe("Page Title and Document Structure", () => {
  test("Verify Home Page Title", async ({ page }) => {
    // 1. Navigate to the home page (/)
    await page.goto("/");

    // 2. Inspect the document title
    const title = await page.title();

    // 3. Verify the page title is displayed in the browser tab
    expect(title).toBe("NextStarter");
  });
});
