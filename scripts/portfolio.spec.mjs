import { test, expect } from "@playwright/test";
import { readFile } from "node:fs/promises";
const base = "http://127.0.0.1:4173";
for (const width of [320, 375, 390, 768, 1024, 1440]) {
  test(`responsive layout and navigation at ${width}px`, async ({ page }) => {
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.setViewportSize({ width, height: 900 });
    await page.goto(base);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Thoughtful code",
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBeTruthy();
    if (width <= 760) {
      await page.getByRole("button", { name: "Open navigation" }).click();
      await expect(
        page.getByRole("button", { name: "Close navigation" }),
      ).toHaveAttribute("aria-expanded", "true");
      await page.keyboard.press("Escape");
      await expect(
        page.getByRole("button", { name: "Open navigation" }),
      ).toHaveAttribute("aria-expanded", "false");
      await page.getByRole("button", { name: "Open navigation" }).click();
    }
    await page
      .getByRole("navigation")
      .getByRole("link", { name: "Services", exact: true })
      .click();
    await expect(page).toHaveURL(/#services$/);
    const filter = page.getByRole("button", { name: /^Mobile apps/ });
    await filter.click();
    await expect(filter).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator(".p-project .p-eyebrow")).toHaveText(
      Array(await page.locator(".p-project").count()).fill("Mobile App"),
    );
    await page.getByRole("button", { name: /^All work/ }).click();
    await page.getByRole("button", { name: "Explore all projects" }).click();
    expect(await page.locator(".p-project").count()).toBeGreaterThan(4);
    await page.getByRole("button", { name: "Show selected work" }).click();
    await expect(page.locator(".p-project")).toHaveCount(4);
    await page.getByRole("button", { name: /Switch to .* theme/ }).click();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBeTruthy();
    await expect(
      page.locator('a[href="mailto:nomi.devx@gmail.com"]').first(),
    ).toBeAttached();
    const resume = await page.request.get(
      `${base}/doc/Noman%20Ashraf%20Automation%20Engineer.pdf`,
    );
    expect(resume.ok()).toBeTruthy();
    expect(resume.headers()["content-type"]).toContain("pdf");
    expect(errors).toEqual([]);
    if ([390, 1440].includes(width)) {
      await page.evaluate(() => {
        localStorage.setItem("portfolio-theme", "light");
        localStorage.setItem("portfolio-theme-custom", "true");
      });
      await page.goto(base);
      await page.screenshot({
        path: `artifacts/portfolio-${width}.png`,
        fullPage: true,
      });
    }
  });
}
test("article routing and SEO reset correctly", async ({ page }) => {
  await page.goto(base);
  await page.locator(".p-article").first().click();
  await expect(page).toHaveURL(/blog\/rise-of-ai-agents-autogen/);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://nomidev.app/blog/rise-of-ai-agents-autogen",
  );
  await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
    "content",
    "article",
  );
  await page.goto(`${base}/blog`);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://nomidev.app/blog",
  );
  await page.goto(base);
  await expect(page).toHaveTitle(
    "Noman Ashraf | Full Stack Developer & AI Automation Engineer",
  );
  await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
    "content",
    "website",
  );
});
test("generated HTML is crawlable without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(base);
  await expect(page.locator("h1")).toContainText("Thoughtful code");
  for (const route of ["", "/blog", "/blog/rise-of-ai-agents-autogen"]) {
    const html = await readFile(`dist${route}/index.html`, "utf8");
    expect(html).toContain(
      `rel="canonical" href="https://nomidev.app${route || "/"}"`,
    );
    expect(html).toContain('id="page-schema"');
    expect(html).toContain("<h1");
  }
  await context.close();
});
