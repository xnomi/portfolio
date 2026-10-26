import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./scripts",
  testMatch: "**/*.spec.mjs",
  fullyParallel: true,
  workers: 2,
  use: { browserName: "chromium", headless: true, reducedMotion: "reduce" },
  reporter: "list",
  webServer: {
    command: "npm run preview -- --host 127.0.0.1",
    url: "http://127.0.0.1:4173",
    reuseExistingServer: !process.env.CI,
  },
});
